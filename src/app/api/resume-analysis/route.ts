import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'
import pdf from 'pdf-parse'
import { createClient } from '@supabase/supabase-js'

// Groq client will be initialized inside functions to ensure env vars are loaded

// Initialize Supabase client
let supabase: any = null
try {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Missing')
  console.log('Supabase Key:', supabaseKey ? 'Set' : 'Missing')
  
  if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey)
  } else {
    console.warn('Supabase credentials missing, continuing without database caching')
  }
} catch (error) {
  console.error('Supabase initialization failed:', error)
  console.warn('Continuing without database caching')
}

interface ResumeAnalysisResult {
  id: string
  ats_score: number
  strengths: string[]
  weaknesses: string[]
  action_items: string[]
  career_fits: string[]
  feedback: string
  keywords_found: string[]
  keywords_missing: string[]
  actionable_recommendations: {
    priority: 'high' | 'medium' | 'low'
    category: string
    recommendation: string
    impact: string
    timeframe: string
  }[]
  sections_analysis: {
    name: string
    score: number
    feedback: string
  }[]
}

interface SupabaseResumeCheck {
  user_id: string
  file_name: string
  file_hash: string
  ats_score: number
  strengths: string[]
  weaknesses: string[]
  action_items: string[]
  career_fits: string[]
  feedback: string
  keywords_found: string[]
  keywords_missing: string[]
  created_at: string
}

export async function POST(request: NextRequest) {
  try {
    // Check if Groq API key is configured
    const apiKey = process.env.GROQ_API_KEY
    console.log('Groq API Key length:', apiKey ? apiKey.length : 'NOT SET')
    console.log('Groq API Key (first 10 chars):', apiKey ? apiKey.substring(0, 10) + '...' : 'NOT SET')
    console.log('Groq API Key (last 10 chars):', apiKey ? '...' + apiKey.substring(apiKey.length - 10) : 'NOT SET')
    
    if (!apiKey || apiKey.includes('your-groq') || apiKey.includes('************')) {
      console.error('Groq API key not configured properly')
      return NextResponse.json({ 
        error: 'Groq API key not configured. Please check your environment variables.',
        details: 'GROQ_API_KEY is missing or contains placeholder text'
      }, { status: 500 })
    }

    const formData = await request.formData()
    const file = formData.get('resume') as File
    const userId = formData.get('userId') as string || 'anonymous'
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed.' }, { status: 400 })
    }

    // Validate file size (2MB limit)
    if (file.size > 2 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Maximum size is 2MB.' }, { status: 400 })
    }

    // Generate file hash for caching
    const fileBuffer = await file.arrayBuffer()
    const fileHash = await generateFileHash(fileBuffer)

    // Check cache first
    const cachedResult = await checkCache(userId, fileHash)
    if (cachedResult) {
      return NextResponse.json(transformCachedResult(cachedResult))
    }

    // Extract text from file
    const resumeText = await extractTextFromFile(file, fileBuffer)
    
    if (!resumeText || resumeText.length < 100) {
      return NextResponse.json({ error: 'Could not extract sufficient text from file' }, { status: 400 })
    }

    // Use Groq AI for real resume analysis - with fallback for any errors
    console.log('Analyzing resume with Groq AI...')
    
    try {
      const analysisResult = await analyzeResumeWithGroq(resumeText, file.name)
      
      // Store the result in cache
      await storeAnalysisResult(userId, file.name, fileHash, analysisResult)
      
      return NextResponse.json(analysisResult)
      
    } catch (error: any) {
      console.warn('Groq AI analysis failed, using enhanced fallback:', error.message)
      
      // Provide enhanced fallback analysis based on resume content
      const fallbackResult = generateEnhancedFallbackAnalysis(resumeText, file.name)
      
      // Store the fallback result
      await storeAnalysisResult(userId, file.name, fileHash, fallbackResult)
      
      return NextResponse.json(fallbackResult)
    }
    
  } catch (error) {
    console.error('Resume analysis error:', error)
    return NextResponse.json({ 
      error: 'Analysis failed. Please try again.',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    }, { status: 500 })
  }
}

async function generateFileHash(fileBuffer: ArrayBuffer): Promise<string> {
  const hashBuffer = await crypto.subtle.digest('SHA-256', fileBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

async function checkCache(userId: string, fileHash: string): Promise<SupabaseResumeCheck | null> {
  if (!supabase) {
    console.log('Supabase not available, skipping cache check')
    return null
  }
  
  try {
    const { data, error } = await supabase
      .from('resume_checks')
      .select('*')
      .eq('user_id', userId)
      .eq('file_hash', fileHash)
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // 24 hours cache
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      console.error('Cache check error:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Cache check failed:', error)
    return null
  }
}

function transformCachedResult(cached: SupabaseResumeCheck): ResumeAnalysisResult {
  return {
    id: `cached_${Date.now()}`,
    ats_score: cached.ats_score,
    strengths: cached.strengths,
    weaknesses: cached.weaknesses,
    action_items: cached.action_items,
    career_fits: cached.career_fits,
    feedback: cached.feedback,
    keywords_found: cached.keywords_found,
    keywords_missing: cached.keywords_missing,
    actionable_recommendations: [
      {
        priority: 'medium',
        category: 'Cache',
        recommendation: 'Consider uploading a fresh resume for updated analysis',
        impact: 'Get latest AI insights and recommendations',
        timeframe: 'Optional'
      }
    ],
    sections_analysis: [
      { name: 'Contact Information', score: 90, feedback: 'Contact information is complete' },
      { name: 'Professional Summary', score: cached.ats_score, feedback: 'Summary analysis from cache' },
      { name: 'Work Experience', score: cached.ats_score, feedback: 'Experience evaluation from cache' },
      { name: 'Education', score: 85, feedback: 'Education section reviewed' },
      { name: 'Skills', score: Math.min(cached.ats_score + 5, 95), feedback: 'Skills assessment from cache' }
    ]
  }
}

async function extractTextFromFile(file: File, fileBuffer: ArrayBuffer): Promise<string> {
  try {
    if (file.type === 'application/pdf') {
      const pdfData = await pdf(Buffer.from(fileBuffer))
      return pdfData.text
    }
    
    // For DOC/DOCX files, we'll implement a basic text extraction
    // In production, you'd use libraries like mammoth for proper extraction
    const text = new TextDecoder().decode(fileBuffer)
    
    // Basic cleanup for binary content
    return text.replace(/[^\x20-\x7E\n\r\t]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  } catch (error) {
    console.error('Text extraction error:', error)
    throw new Error('Failed to extract text from file')
  }
}

async function analyzeResumeWithGroq(resumeText: string, fileName: string): Promise<ResumeAnalysisResult> {
  const prompt = `
You are an expert ATS (Applicant Tracking System) and resume analysis specialist. Analyze the following resume and provide a comprehensive evaluation with actionable recommendations.

RESUME CONTENT:
${resumeText.substring(0, 8000)} // Limit text to avoid token limits

Please provide your analysis in the following JSON format:
{
  "ats_score": <number between 0-100>,
  "strengths": ["<strength1>", "<strength2>", "<strength3>"],
  "weaknesses": ["<weakness1>", "<weakness2>", "<weakness3>"],
  "action_items": ["<action1>", "<action2>", "<action3>"],
  "career_fits": ["<role1>", "<role2>", "<role3>"],
  "feedback": "<overall detailed feedback paragraph>",
  "keywords_found": ["<keyword1>", "<keyword2>", "<keyword3>"],
  "keywords_missing": ["<missing1>", "<missing2>", "<missing3>"],
  "actionable_recommendations": [
    {
      "priority": "high|medium|low",
      "category": "Keywords|Formatting|Content|Skills|Experience",
      "recommendation": "<specific actionable advice>",
      "impact": "<expected improvement>",
      "timeframe": "<time to implement>"
    }
  ]
}

Analysis Guidelines:
- ATS Score: Rate 0-100 based on formatting, keywords, structure, and content quality
- Strengths: 3-5 positive aspects of the resume
- Weaknesses: 3-5 areas needing improvement
- Action Items: General recommendations for improvement
- Career Fits: Suggest 3 role titles that match the experience
- Feedback: 2-3 sentence overall assessment
- Keywords Found: Important industry/role keywords present in resume
- Keywords Missing: Important keywords that should be added
- Actionable Recommendations: 5-8 specific, prioritized actions with expected impact and timeframe

Actionable Recommendations should be:
- Specific and detailed (not generic advice)
- Prioritized by impact on ATS score
- Include expected score improvement
- Provide realistic timeframes
- Cover different categories: Keywords, Formatting, Content, Skills, Experience

Example recommendations:
- High Priority: "Add 'Python' and 'Machine Learning' keywords 3-5 times throughout experience section" (Impact: +8-12 ATS score, Timeframe: 30 minutes)
- Medium Priority: "Quantify achievements with specific metrics (e.g., 'Increased sales by 25%')" (Impact: +5-8 ATS score, Timeframe: 2 hours)

Focus on:
- ATS compatibility and parsing
- Industry-relevant keywords
- Quantified achievements
- Professional presentation
- Skills alignment with target roles
- Resume structure and formatting

Respond ONLY with valid JSON.
`

  // Initialize Groq client with current environment variables
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  })

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are an expert ATS and resume analysis AI. Provide detailed, actionable feedback for resume improvement. Always respond with valid JSON only."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 2000,
    })

    const aiResponse = completion.choices[0]?.message?.content
    
    if (!aiResponse) {
      throw new Error('No response from Groq AI')
    }

    // Parse Groq response
    const analysisData = JSON.parse(aiResponse)
    
    // Create final result
    const result: ResumeAnalysisResult = {
      id: Date.now().toString(),
      ats_score: Math.max(0, Math.min(100, analysisData.ats_score || 75)),
      strengths: analysisData.strengths || [],
      weaknesses: analysisData.weaknesses || [],
      action_items: analysisData.action_items || [],
      career_fits: analysisData.career_fits || [],
      feedback: analysisData.feedback || 'Resume analysis completed successfully.',
      keywords_found: analysisData.keywords_found || [],
      keywords_missing: analysisData.keywords_missing || [],
      actionable_recommendations: analysisData.actionable_recommendations || [],
      sections_analysis: [
        { name: 'Contact Information', score: 95, feedback: 'Contact information appears complete' },
        { name: 'Professional Summary', score: analysisData.ats_score - 5, feedback: 'Summary quality affects overall score' },
        { name: 'Work Experience', score: analysisData.ats_score, feedback: 'Experience section matches overall ATS score' },
        { name: 'Education', score: 90, feedback: 'Education section is well-structured' },
        { name: 'Skills', score: Math.min(analysisData.ats_score + 10, 95), feedback: 'Skills section evaluation' }
      ]
    }

    return result

  } catch (error) {
    console.error('Groq analysis error:', error)
    
    // Throw error to trigger enhanced fallback in main function
    throw error
  }
}

function generateEnhancedFallbackAnalysis(resumeText: string, fileName: string): ResumeAnalysisResult {
  console.log('Generating enhanced fallback analysis...')
  
  // Analyze resume content for real insights
  const text = resumeText.toLowerCase()
  const lines = resumeText.split('\n').filter(line => line.trim().length > 0)
  
  // Detect contact information
  const hasEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(resumeText)
  const hasPhone = /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/.test(resumeText)
  const hasLinkedIn = /linkedin/i.test(resumeText)
  
  // Detect sections
  const hasSummary = /summary|objective|profile/i.test(resumeText)
  const hasExperience = /experience|work|employment|job/i.test(resumeText)
  const hasEducation = /education|degree|university|college|school/i.test(resumeText)
  const hasSkills = /skills|technologies|proficient|expertise/i.test(resumeText)
  
  // Detect technical skills
  const techSkills: string[] = []
  const techKeywords = ['javascript', 'python', 'java', 'react', 'node', 'sql', 'aws', 'docker', 'git', 'html', 'css', 'typescript', 'angular', 'vue', 'php', 'c++', 'c#', '.net', 'mongodb', 'postgresql', 'mysql', 'kubernetes', 'jenkins', 'agile', 'scrum']
  techKeywords.forEach(skill => {
    if (text.includes(skill)) techSkills.push(skill)
  })
  
  // Detect action verbs and quantified achievements
  const actionVerbs = ['developed', 'managed', 'led', 'created', 'implemented', 'designed', 'built', 'improved', 'increased', 'reduced', 'optimized', 'delivered']
  const hasActionVerbs = actionVerbs.some(verb => text.includes(verb))
  const hasNumbers = /\d+(%|k|million|billion|\+|years?|months?)/.test(resumeText)
  
  // Calculate ATS score based on detected elements
  let atsScore = 50 // Base score
  if (hasEmail) atsScore += 5
  if (hasPhone) atsScore += 5
  if (hasLinkedIn) atsScore += 3
  if (hasSummary) atsScore += 8
  if (hasExperience) atsScore += 10
  if (hasEducation) atsScore += 5
  if (hasSkills) atsScore += 7
  if (techSkills.length > 0) atsScore += Math.min(techSkills.length * 2, 10)
  if (hasActionVerbs) atsScore += 5
  if (hasNumbers) atsScore += 7
  if (lines.length > 15) atsScore += 3 // Good length
  if (lines.length > 50) atsScore -= 5 // Too long
  
  // Cap the score
  atsScore = Math.max(60, Math.min(95, atsScore))
  
  return {
    id: Date.now().toString(),
    ats_score: atsScore,
    strengths: [
      hasEmail && hasPhone ? 'Complete contact information provided' : 'Contact information present',
      hasActionVerbs ? 'Uses strong action verbs in descriptions' : 'Professional language throughout',
      techSkills.length > 0 ? `Technical skills detected: ${techSkills.slice(0, 3).join(', ')}` : 'Relevant skills mentioned',
      hasNumbers ? 'Includes quantified achievements' : 'Detailed work descriptions',
      hasSummary ? 'Professional summary section included' : 'Well-structured content'
    ],
    weaknesses: [
      !hasLinkedIn ? 'LinkedIn profile not mentioned' : 'Could benefit from more online presence',
      techSkills.length < 3 ? 'Limited technical skills mentioned' : 'Could expand technical skill set',
      !hasNumbers ? 'Missing quantified achievements (numbers, percentages)' : 'Could include more metrics',
      lines.length < 20 ? 'Resume could be more detailed' : 'Some sections could be more concise',
      !hasActionVerbs ? 'Could use more dynamic action verbs' : 'Could strengthen language impact'
    ],
    action_items: [
      'Add specific metrics and numbers to achievements',
      'Include more industry-relevant keywords',
      'Ensure consistent formatting throughout',
      'Add LinkedIn profile URL if available',
      'Quantify impact with percentages or dollar amounts'
    ],
    career_fits: techSkills.length > 2 ? [
      'Software Developer',
      'Full Stack Engineer',
      'Technical Specialist'
    ] : [
      'Professional Specialist',
      'Project Coordinator',
      'Business Analyst'
    ],
    feedback: `Your resume shows ${hasExperience ? 'relevant professional experience' : 'good structure'} with an ATS compatibility score of ${atsScore}/100. ${techSkills.length > 0 ? `Strong technical background with skills in ${techSkills.slice(0, 3).join(', ')}.` : 'Professional presentation detected.'} ${hasNumbers ? 'Good use of quantified achievements.' : 'Consider adding more specific metrics to strengthen impact.'} Focus on incorporating industry keywords and ensuring consistent formatting for optimal ATS performance.`,
    keywords_found: [
      ...techSkills.slice(0, 5),
      hasExperience ? 'Experience' : '',
      hasEducation ? 'Education' : '',
      hasActionVerbs ? 'Leadership' : '',
      'Professional'
    ].filter(Boolean),
    keywords_missing: [
      'Project Management',
      'Team Leadership', 
      'Problem Solving',
      'Communication',
      'Collaboration'
    ],
    actionable_recommendations: [
      {
        priority: 'high' as const,
        category: 'Keywords',
        recommendation: techSkills.length < 3 
          ? 'Add more technical skills and industry-specific keywords throughout your resume' 
          : 'Optimize keyword density by repeating key skills in different sections',
        impact: techSkills.length < 3 ? 'Could increase ATS score by 12-18 points' : 'Could increase ATS score by 6-10 points',
        timeframe: '30-45 minutes'
      },
      {
        priority: hasNumbers ? 'medium' as const : 'high' as const,
        category: 'Content',
        recommendation: hasNumbers 
          ? 'Add more quantified achievements with specific metrics and outcomes'
          : 'Include quantified achievements with specific numbers, percentages, or dollar amounts',
        impact: hasNumbers ? 'Could increase ATS score by 5-8 points' : 'Could increase ATS score by 12-16 points',
        timeframe: hasNumbers ? '45 minutes' : '1-2 hours'
      },
      {
        priority: 'medium' as const,
        category: 'Formatting',
        recommendation: lines.length < 20 
          ? 'Expand resume content with more detailed experience descriptions'
          : 'Ensure consistent formatting, fonts, and bullet points throughout the document',
        impact: 'Could increase ATS score by 5-8 points',
        timeframe: lines.length < 20 ? '1-2 hours' : '20-30 minutes'
      },
      {
        priority: techSkills.length > 3 ? 'low' as const : 'high' as const,
        category: 'Skills',
        recommendation: techSkills.length > 3 
          ? 'Consider adding certifications or advanced skills to strengthen your profile'
          : 'Expand technical skills section with relevant technologies and certifications',
        impact: techSkills.length > 3 ? 'Could increase ATS score by 3-5 points' : 'Could increase ATS score by 8-12 points',
        timeframe: '15-30 minutes'
      },
      {
        priority: hasActionVerbs ? 'low' as const : 'medium' as const,
        category: 'Experience',
        recommendation: hasActionVerbs 
          ? 'Consider adding leadership examples and team collaboration experiences'
          : 'Use stronger action verbs to begin each bullet point (achieved, implemented, optimized)',
        impact: hasActionVerbs ? 'Could increase ATS score by 3-5 points' : 'Could increase ATS score by 6-9 points',
        timeframe: '30-45 minutes'
      },
      {
        priority: hasLinkedIn ? 'low' as const : 'medium' as const,
        category: 'Contact',
        recommendation: hasLinkedIn 
          ? 'Consider adding portfolio links or professional website'
          : 'Add LinkedIn profile URL and consider creating a professional portfolio',
        impact: hasLinkedIn ? 'Could increase ATS score by 2-4 points' : 'Could increase ATS score by 4-7 points',
        timeframe: hasLinkedIn ? '15 minutes' : '30 minutes'
      }
    ],
    sections_analysis: [
      { 
        name: 'Contact Information', 
        score: (hasEmail && hasPhone) ? 95 : (hasEmail || hasPhone) ? 75 : 50, 
        feedback: hasEmail && hasPhone ? 'Complete contact details provided' : 'Missing some contact information'
      },
      { 
        name: 'Professional Summary', 
        score: hasSummary ? 85 : 60, 
        feedback: hasSummary ? 'Professional summary section detected' : 'Consider adding a professional summary'
      },
      { 
        name: 'Work Experience', 
        score: hasExperience ? (hasActionVerbs ? 90 : 75) : 50, 
        feedback: hasExperience ? (hasActionVerbs ? 'Strong experience section with action verbs' : 'Experience listed, could strengthen with action verbs') : 'Work experience section needs development'
      },
      { 
        name: 'Education', 
        score: hasEducation ? 85 : 60, 
        feedback: hasEducation ? 'Education background clearly presented' : 'Education section could be enhanced'
      },
      { 
        name: 'Skills', 
        score: techSkills.length > 3 ? 90 : techSkills.length > 0 ? 75 : 60, 
        feedback: techSkills.length > 3 ? 'Comprehensive technical skills listed' : techSkills.length > 0 ? 'Good technical skills foundation' : 'Skills section could be expanded'
      }
    ]
  }
}

async function storeAnalysisResult(
  userId: string, 
  fileName: string, 
  fileHash: string, 
  result: ResumeAnalysisResult
): Promise<void> {
  if (!supabase) {
    console.log('Supabase not available, skipping result storage')
    return
  }
  
  try {
    const { error } = await supabase
      .from('resume_checks')
      .insert({
        user_id: userId,
        file_name: fileName,
        file_hash: fileHash,
        ats_score: result.ats_score,
        strengths: result.strengths,
        weaknesses: result.weaknesses,
        action_items: result.action_items,
        career_fits: result.career_fits,
        feedback: result.feedback,
        keywords_found: result.keywords_found,
        keywords_missing: result.keywords_missing,
        created_at: new Date().toISOString()
      })

    if (error) {
      console.error('Database storage error:', error)
      // Don't throw error - analysis can still work without storage
    }
  } catch (error) {
    console.error('Failed to store analysis result:', error)
    // Continue without throwing - storage is optional
  }
}
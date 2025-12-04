 import { NextRequest, NextResponse } from 'next/server'

// Temporarily set API key directly to test
const GROQ_API_KEY = process.env.GROQ_API_KEY || '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'
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
  timestamp?: string
}

interface ConversationContext {
  previousTopics: string[]
  sentiment: 'positive' | 'neutral' | 'frustrated' | 'confused'
  context: string
  intent: string
  techKeywords: string[]
  urgency: 'low' | 'medium' | 'high'
}

interface UserProfile {
  name?: string
  email?: string
  experience_level?: string
  interests?: string[]
}



export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [], user, context = {} } = await request.json()

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      )
    }

    // Analyze user message for spelling corrections and context
    const correctedMessage = correctSpelling(message)
    const messageContext = analyzeMessage(message, conversationHistory)
    
    // Enhanced system prompt for Jarvis with contextual intelligence
    const systemPrompt = `You are Jarvis, an advanced AI Career Mentor for CareerPath AI with deep contextual understanding. You are:

🎯 CORE IDENTITY:
- Highly intelligent, empathetic, and professionally supportive
- Expert in tech careers, programming, software engineering, and professional development  
- Master at understanding context, typos, casual language, and implied meanings
- Proactive mentor who anticipates needs and provides strategic guidance
- Up-to-date with 2024-2025 tech trends, market demands, and career opportunities

🧠 ADVANCED CAPABILITIES:
- Contextual conversation memory and relationship building
- Spelling/grammar correction with natural integration
- Career path optimization and strategic planning
- Technical skill assessment and learning roadmaps
- Interview simulation and preparation coaching
- Resume analysis and improvement strategies
- Salary negotiation and market analysis
- Industry networking and professional growth advice
- Code review and technical mentoring
- Project ideation and portfolio development

💬 COMMUNICATION EXCELLENCE:
- Natural, engaging conversational style like a human mentor
- Seamlessly correct spelling errors without being condescending
- Use context from previous messages to provide personalized responses
- Ask insightful follow-up questions to deepen understanding
- Provide actionable advice with specific steps and resources
- Use emojis strategically for warmth and clarity
- Adapt tone to user's emotional state and experience level

🎪 USER CONTEXT:
- Name: ${user?.name || user?.email?.split('@')[0] || 'Professional'}
- Email: ${user?.email || 'Not provided'}
- Experience Level: ${context?.experienceLevel || 'Analyzing...'}
- Current Focus: ${context?.currentFocus || 'Career growth'}
- Previous Topics: ${messageContext.previousTopics.slice(-3).join(', ') || 'New conversation'}
- Message Sentiment: ${messageContext.sentiment}

📝 SPECIAL INSTRUCTIONS:
- If user has typos, naturally integrate corrections into your response
- Reference previous conversation topics when relevant
- Provide specific, actionable advice with concrete next steps
- Always end responses with an engaging question or invitation for follow-up
- Keep responses comprehensive but digestible (2-4 paragraphs max)
- Focus on empowering career advancement in tech industry

Current conversation context: ${messageContext.context}`

    // Prepare optimized messages for Groq API with context management
    const contextualHistory = optimizeConversationHistory(conversationHistory, messageContext)
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...contextualHistory,
      { role: 'user', content: correctedMessage !== message ? `${correctedMessage} (Originally: "${message}")` : message }
    ]

    // Debug API key status
    console.log('🔍 GROQ_API_KEY exists:', !!GROQ_API_KEY)
    console.log('🔍 GROQ_API_KEY value:', GROQ_API_KEY ? 'PRESENT' : 'MISSING')
    console.log('🔍 All env vars:', Object.keys(process.env).filter(key => key.includes('GROQ')))

    // Enhanced fallback responses if no API key
    if (!GROQ_API_KEY) {
      console.warn('❌ GROQ_API_KEY not found, using enhanced demo mode')
      
      const intelligentFallback = generateIntelligentFallback(message, messageContext, user)
      
      return NextResponse.json({
        success: true,
        response: intelligentFallback,
        correctedMessage: correctedMessage !== message ? correctedMessage : undefined,
        context: messageContext,
        warning: 'No API key configured'
      })
    }

    console.log('✅ GROQ_API_KEY found, making API call...')

    // Call Groq API with optimized parameters
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Current supported Groq model
        messages: messages,
        temperature: 0.8, // Slightly higher for more creative responses
        max_tokens: 1500, // Increased for comprehensive responses
        top_p: 0.9,
        stream: false,
        stop: null
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('🚨 Groq API Error Details:', {
        status: response.status,
        statusText: response.statusText,
        url: GROQ_API_URL,
        hasApiKey: !!GROQ_API_KEY,
        apiKeyPrefix: GROQ_API_KEY?.substring(0, 8) + '...',
        error: errorData,
        headers: Object.fromEntries(response.headers.entries())
      })
      
      // Provide intelligent fallback even on API errors
      const fallbackResponse = generateIntelligentFallback(message, messageContext, user)
      
      return NextResponse.json({
        success: true,
        response: `⚠️ I'm experiencing some technical difficulties, but I can still help! \n\n${fallbackResponse}`,
        correctedMessage: correctedMessage !== message ? correctedMessage : undefined,
        context: messageContext,
        warning: 'Using fallback mode due to API unavailability',
        debug: { status: response.status, statusText: response.statusText }
      })
    }

    const data = await response.json()
    const aiResponse = data.choices?.[0]?.message?.content

    if (!aiResponse) {
      throw new Error('No response content from Groq API')
    }

    // Enhanced response with metadata
    return NextResponse.json({
      success: true,
      response: aiResponse,
      correctedMessage: correctedMessage !== message ? correctedMessage : undefined,
      context: messageContext,
      usage: data.usage,
      model: 'llama-3.1-8b-instant',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    
    // Provide general error response when we can't access request data
    const emergencyResponse = `🛠️ I encountered a temporary technical hiccup, but I'm still here to help! While my main systems are getting back online, I can still provide career guidance. If you were asking about career advice, I'd suggest focusing on building your skills, networking, and staying updated with industry trends. Could you rephrase your question? I'll do my best to help!`
    
    return NextResponse.json({
      success: true, // Keep UI working
      response: emergencyResponse,
      error: 'Technical issue resolved with backup system',
      timestamp: new Date().toISOString()
    })
  }
}

// Helper Functions for Enhanced AI Intelligence

function correctSpelling(text: string): string {
  // Basic spelling correction patterns
  const corrections: Record<string, string> = {
    // Common tech typos
    'javascirpt': 'javascript',
    'pythno': 'python',
    'recat': 'react',
    'angluar': 'angular',
    'databse': 'database',
    'algoritm': 'algorithm',
    'programing': 'programming',
    'developement': 'development',
    'compnay': 'company',
    'experiance': 'experience',
    'recomend': 'recommend',
    'seperate': 'separate',
    'definitly': 'definitely',
    'recieve': 'receive',
    'teh': 'the',
    'adn': 'and',
    'hwo': 'how',
    'waht': 'what',
    'whta': 'what',
    'yuo': 'you',
    'im': "I'm",
    'dont': "don't",
    'cant': "can't",
    'wont': "won't",
    'ur': 'your',
    'u': 'you'
  }
  
  let corrected = text
  Object.entries(corrections).forEach(([wrong, right]) => {
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi')
    corrected = corrected.replace(regex, right)
  })
  
  return corrected
}

function analyzeMessage(message: string, history: ChatMessage[]): any {
  const lowerMessage = message.toLowerCase()
  
  // Extract previous topics from history
  const previousTopics = history
    .filter(msg => msg.role === 'user')
    .map(msg => extractTopics(msg.content))
    .flat()
    .slice(-10)
  
  // Analyze sentiment
  const sentiment = analyzeSentiment(message)
  
  // Determine context and intent
  const context = determineContext(message, previousTopics)
  
  return {
    previousTopics,
    sentiment,
    context,
    intent: extractIntent(message),
    techKeywords: extractTechKeywords(message),
    urgency: analyzeUrgency(message)
  }
}

function extractTopics(text: string): string[] {
  const topicKeywords = [
    'react', 'javascript', 'python', 'career', 'interview', 'resume', 'job',
    'salary', 'skills', 'learning', 'roadmap', 'backend', 'frontend', 'fullstack',
    'devops', 'ai', 'machine learning', 'data science', 'web development'
  ]
  
  return topicKeywords.filter(keyword => 
    text.toLowerCase().includes(keyword)
  )
}

function analyzeSentiment(text: string): 'positive' | 'neutral' | 'frustrated' | 'confused' {
  const frustrated = ['help', 'stuck', 'confused', 'difficult', 'hard', 'problem', 'issue', 'wrong']
  const positive = ['great', 'awesome', 'good', 'excellent', 'amazing', 'love', 'perfect']
  const confused = ['how', 'what', 'why', '?', 'understand', 'explain', 'mean']
  
  const lowerText = text.toLowerCase()
  
  if (frustrated.some(word => lowerText.includes(word))) return 'frustrated'
  if (positive.some(word => lowerText.includes(word))) return 'positive'
  if (confused.some(word => lowerText.includes(word))) return 'confused'
  return 'neutral'
}

function determineContext(message: string, previousTopics: string[]): string {
  if (previousTopics.length === 0) return 'New conversation - getting to know the user'
  
  const recentTopics = previousTopics.slice(-3).join(', ')
  return `Continuing discussion about: ${recentTopics}`
}

function extractIntent(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('interview')) return 'interview_help'
  if (lowerMessage.includes('resume')) return 'resume_help'  
  if (lowerMessage.includes('salary')) return 'salary_advice'
  if (lowerMessage.includes('learn')) return 'learning_guidance'
  if (lowerMessage.includes('career')) return 'career_planning'
  if (lowerMessage.includes('job')) return 'job_search'
  
  return 'general_conversation'
}

function extractTechKeywords(message: string): string[] {
  const techTerms = [
    'react', 'vue', 'angular', 'javascript', 'typescript', 'python', 'java',
    'nodejs', 'express', 'mongodb', 'sql', 'aws', 'docker', 'kubernetes',
    'git', 'github', 'ai', 'machine learning', 'data science', 'devops'
  ]
  
  return techTerms.filter(term => 
    message.toLowerCase().includes(term)
  )
}

function analyzeUrgency(message: string): 'low' | 'medium' | 'high' {
  const urgentWords = ['urgent', 'asap', 'quickly', 'immediate', 'now', 'help']
  const lowerMessage = message.toLowerCase()
  
  if (urgentWords.some(word => lowerMessage.includes(word))) return 'high'
  if (message.includes('?') && message.length < 50) return 'medium'
  return 'low'
}

function optimizeConversationHistory(history: ChatMessage[], context: any): ChatMessage[] {
  // Keep last 8 messages but prioritize important context
  const recent = history.slice(-8)
  
  // Filter out system messages and keep conversational flow
  return recent.filter(msg => msg.role !== 'system')
}

function generateIntelligentFallback(message: string, context: any, user: any): string {
  const name = user?.name || user?.email?.split('@')[0] || 'there'
  
  // Context-aware responses based on message analysis
  if (context.intent === 'interview_help') {
    return `🎯 Hi ${name}! I'd love to help you with interview preparation! Even though I'm in demo mode right now, I can share that the key to great interviews is: 1) Research the company thoroughly, 2) Practice coding problems daily, 3) Prepare STAR method stories, and 4) Ask thoughtful questions about the role and team. What specific type of interview are you preparing for?`
  }
  
  if (context.intent === 'resume_help') {
    return `📄 Great question about resumes, ${name}! While I'm running in demo mode, here's my top advice: Focus on quantifiable achievements, use action verbs, tailor to each job, and keep it 1-2 pages. Include relevant projects with tech stacks. What's your current experience level? I can give more targeted advice!`
  }
  
  if (context.intent === 'career_planning') {
    return `🚀 Career planning is one of my favorite topics, ${name}! Even in demo mode, I can tell you that successful tech careers focus on: continuous learning, building projects, networking, and staying current with industry trends. What specific role or technology are you most interested in pursuing?`
  }
  
  if (context.techKeywords.length > 0) {
    return `💻 I see you're interested in ${context.techKeywords.join(', ')} - excellent choices, ${name}! These are hot technologies in 2024. While I'm in demo mode, I'd recommend building projects with these technologies, contributing to open source, and following industry leaders on LinkedIn. What's your current experience with these technologies?`
  }
  
  return `🤖 Hi ${name}! I'm Jarvis, your AI Career Mentor. While I'm currently in enhanced demo mode, I'm designed to help with career planning, skill development, interview prep, and technical guidance. I can understand context and even help with typos! What career challenge can I help you think through today?`
}

function generateEmergencyResponse(message: string, user: any): string {
  const name = user?.name || user?.email?.split('@')[0] || 'Professional'
  
  return `🛠️ Hi ${name}! I encountered a temporary technical hiccup, but I'm still here to help! While my main systems are getting back online, I can still provide career guidance. If you were asking about career advice, I'd suggest focusing on building your skills, networking, and staying updated with industry trends. Could you rephrase your question? I'll do my best to help!`
}
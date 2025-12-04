import { NextRequest, NextResponse } from 'next/server';
import { chatWithAI } from '@/lib/ai';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { preferences } = body;

    // Handle both old and new format for backward compatibility
    if (preferences) {
      // New format - generate suggestions based on wizard preferences
      const suggestions = generateCareerSuggestions(preferences);
      return NextResponse.json({ success: true, suggestions });
    }

    // Old format - continue with existing logic
    const { skills, interests, educationLevel, careerGoal } = body;

    // Validate input for old format
    if (!skills?.length || !interests?.length || !educationLevel || !careerGoal) {
      return NextResponse.json({ 
        error: 'Missing required fields: skills, interests, educationLevel, and careerGoal' 
      }, { status: 400 });
    }

    // Create AI prompt for career suggestions
    const prompt = `
You are JARVIS, an expert career counselor. Based on the user's profile, suggest exactly 3-5 career paths that match their skills and interests.

USER PROFILE:
- Skills: ${skills.join(', ')}
- Interests: ${interests.join(', ')}
- Education Level: ${educationLevel}
- Career Goal: ${careerGoal}

AVAILABLE ROADMAPS (use exact IDs for roadmapId):
- 'frontend-development' → Frontend Developer, React Developer, UI Developer
- 'backend-development' → Backend Developer, Server Engineer, API Developer
- 'fullstack-development' → Full Stack Developer, Web Developer  
- 'data-science' → Data Scientist, Data Analyst
- 'machine-learning-engineer' → ML Engineer, AI Engineer
- 'devops-engineer' → DevOps Engineer, Site Reliability Engineer
- 'cyber-security' → Cybersecurity Analyst, Security Engineer
- 'android-development' → Android Developer, Mobile Developer
- 'ios-development' → iOS Developer, Mobile Developer
- 'ux-design' → UX Designer, Product Designer
- 'ai-engineer' → AI Engineer, AI Specialist
- 'game-developer' → Game Developer, Game Engineer
- 'blockchain-developer' → Blockchain Developer, Web3 Developer
- 'product-manager' → Product Manager, Technical Product Manager
- 'qa-engineer' → QA Engineer, Test Engineer
- 'software-architect' → Software Architect, Technical Lead

REQUIREMENTS:
1. Respond with exactly this JSON format:
[
  {
    "id": "unique-id",
    "title": "Specific Job Title",
    "description": "2-3 sentence description of why this career fits their profile",
    "growthPotential": "Low|Medium|High",
    "learningTime": "X months/years to become proficient",
    "roadmapId": "exact-roadmap-id-from-list-above",
    "requiredSkills": ["skill1", "skill2", "skill3", "skill4"],
    "transitionTime": "X months/years from current situation"
  }
]

2. Choose careers that:
   - Match their existing skills and interests
   - Have available roadmaps (prioritize these)
   - Fit their education level and career goal
   - Offer realistic growth based on market demand

3. Make suggestions specific and actionable
4. Ensure roadmapId matches exactly from the available list
5. Keep descriptions concise but compelling
`;

    console.log('🎯 Generating career suggestions for user profile...');
    
    // Get AI response
    const aiResponse = await chatWithAI(prompt);
    
    if (!aiResponse.success) {
      console.error('❌ AI response failed');
      return NextResponse.json({
        error: 'Failed to generate career suggestions',
        details: 'AI service unavailable'
      }, { status: 500 });
    }

    // Parse AI response
    let suggestions;
    try {
      // Extract JSON from the response
      if (!aiResponse.data) {
        throw new Error('No data received from AI service');
      }
      const jsonMatch = aiResponse.data.match(/\[[\s\S]*\]/);
      const jsonString = jsonMatch ? jsonMatch[0] : aiResponse.data;
      suggestions = JSON.parse(jsonString);
      
      // Add unique IDs if missing
      suggestions = suggestions.map((suggestion: any, index: number) => ({
        ...suggestion,
        id: suggestion.id || `career-${Date.now()}-${index}`
      }));
      
    } catch (parseError) {
      console.error('❌ Failed to parse AI response as JSON:', parseError);
      
      // Fallback suggestions based on skills and interests
      suggestions = createFallbackSuggestions(skills, interests, educationLevel);
    }

    // Store user input in analytics (optional - implement if you want Supabase storage)
    // await storeCareerSuggestionInput(user.id, { skills, interests, educationLevel, careerGoal });

    console.log('✅ Career suggestions generated successfully');
    
    return NextResponse.json({
      success: true,
      suggestions: suggestions.slice(0, 5), // Ensure max 5 suggestions
      message: "Career suggestions generated successfully"
    });

  } catch (error) {
    console.error('❌ Career suggestions API error:', error);
    return NextResponse.json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Fallback suggestions when AI parsing fails
function createFallbackSuggestions(skills: string[], interests: string[], educationLevel: string) {
  const suggestions = [];
  
  // Frontend Development
  if (skills.some(s => ['JavaScript', 'React', 'HTML/CSS', 'TypeScript'].includes(s)) || 
      interests.includes('Web Development') || interests.includes('Frontend Development')) {
    suggestions.push({
      id: `frontend-${Date.now()}`,
      title: "Frontend Developer",
      description: "Perfect match for your JavaScript and web development interests. Build user interfaces and interactive web applications.",
      growthPotential: "High",
      learningTime: "6-12 months",
      roadmapId: "frontend-development",
      requiredSkills: ["JavaScript", "React", "HTML/CSS", "TypeScript"],
      transitionTime: "6-9 months"
    });
  }
  
  // Backend Development  
  if (skills.some(s => ['Node.js', 'Python', 'Java', 'SQL'].includes(s)) || 
      interests.includes('Backend Development')) {
    suggestions.push({
      id: `backend-${Date.now()}`,
      title: "Backend Developer", 
      description: "Great fit for your server-side skills. Build APIs, databases, and system architecture.",
      growthPotential: "High",
      learningTime: "8-15 months",
      roadmapId: "backend-development",
      requiredSkills: ["Node.js", "Python", "SQL", "APIs"],
      transitionTime: "8-12 months"
    });
  }
  
  // Data Science
  if (skills.some(s => ['Python', 'SQL', 'Data Analysis', 'Machine Learning'].includes(s)) || 
      interests.includes('Data Science')) {
    suggestions.push({
      id: `data-${Date.now()}`,
      title: "Data Scientist",
      description: "Excellent alignment with your analytical skills and data interests. Analyze data to drive business decisions.",
      growthPotential: "High", 
      learningTime: "12-18 months",
      roadmapId: "data-science",
      requiredSkills: ["Python", "SQL", "Statistics", "Machine Learning"],
      transitionTime: "10-15 months"
    });
  }
  
  // Full Stack (if both frontend and backend skills)
  if ((skills.some(s => ['JavaScript', 'React'].includes(s)) && 
       skills.some(s => ['Node.js', 'Python'].includes(s))) || 
      interests.includes('Full Stack Development')) {
    suggestions.push({
      id: `fullstack-${Date.now()}`,
      title: "Full Stack Developer",
      description: "Perfect for your diverse skill set. Work on both frontend and backend development.",
      growthPotential: "High",
      learningTime: "10-18 months", 
      roadmapId: "fullstack-development",
      requiredSkills: ["JavaScript", "React", "Node.js", "Databases"],
      transitionTime: "8-14 months"
    });
  }
  
  // Default suggestion if no matches
  if (suggestions.length === 0) {
    suggestions.push({
      id: `general-${Date.now()}`,
      title: "Software Developer",
      description: "Based on your profile, start with general software development and specialize as you learn.",
      growthPotential: "Medium",
      learningTime: "12-24 months",
      roadmapId: "frontend-development", // Default to frontend
      requiredSkills: ["Programming", "Problem Solving", "Git"],
      transitionTime: "12-18 months"
    });
  }

  return suggestions.slice(0, 5); // Return top 5 suggestions
}

function generateCareerSuggestions(preferences: any) {
  const suggestions = []
  
  // Analyze user preferences and generate tailored suggestions
  const { experience, interests, skills, workStyle, goals, timeCommitment } = preferences
  
  // Frontend Development Path
  if (interests.includes('web-development') || skills.includes('html-css') || skills.includes('javascript')) {
    let match = 85
    if (skills.includes('react')) match += 10
    if (goals.includes('creative-work')) match += 5
    
    suggestions.push({
      title: 'Frontend Developer',
      match: Math.min(match, 98),
      description: 'Create user interfaces and experiences for web applications. Perfect for visual learners who enjoy immediate feedback from their work.',
      skills: ['HTML/CSS', 'JavaScript', 'React/Vue', 'TypeScript', 'Responsive Design'],
      roadmap: 'frontend-development',
      externalLinks: [
        { name: 'Frontend Masters', url: 'https://frontendmasters.com/' },
        { name: 'FreeCodeCamp Frontend', url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/' },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn' },
        { name: 'Frontend Roadmap', url: 'https://roadmap.sh/frontend' }
      ],
      salary: experience === 'complete-beginner' ? '$60k - $100k' : '$80k - $140k',
      timeToJob: experience === 'experienced' ? '3-6 months' : '6-12 months',
      pros: ['High demand', 'Creative work', 'Immediate visual feedback', 'Great entry point'],
      workEnvironment: workStyle === 'remote' ? 'Excellent remote opportunities' : 'Flexible work arrangements'
    })
  }

  // Data Science Path
  if (interests.includes('data-science') || skills.includes('python') || skills.includes('sql')) {
    let match = 80
    if (skills.includes('python')) match += 10
    if (goals.includes('problem-solving')) match += 8
    if (goals.includes('high-salary')) match += 7
    
    suggestions.push({
      title: 'Data Scientist',
      match: Math.min(match, 97),
      description: 'Extract insights from data using statistics, machine learning, and programming. High-impact role in business decision making.',
      skills: ['Python/R', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization'],
      roadmap: 'data-science',
      externalLinks: [
        { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' },
        { name: 'Coursera Data Science', url: 'https://www.coursera.org/specializations/jhu-data-science' },
        { name: 'Fast.ai', url: 'https://www.fast.ai/' },
        { name: 'Data Science Roadmap', url: 'https://roadmap.sh/ai-data-scientist' }
      ],
      salary: experience === 'complete-beginner' ? '$70k - $120k' : '$95k - $160k',
      timeToJob: experience === 'experienced' ? '6-12 months' : '12-18 months',
      pros: ['High salaries', 'Impactful work', 'Growing field', 'Problem-solving focus'],
      workEnvironment: 'Often allows remote work with flexible schedules'
    })
  }

  // Mobile Development Path
  if (interests.includes('mobile-apps') || goals.includes('creative-work')) {
    let match = 82
    if (skills.includes('javascript')) match += 8
    if (interests.includes('ui-ux-design')) match += 5
    
    suggestions.push({
      title: 'Mobile App Developer',
      match: Math.min(match, 95),
      description: 'Build applications for iOS and Android platforms. Create apps that millions of users interact with daily.',
      skills: ['Swift/Kotlin', 'React Native/Flutter', 'Mobile UI/UX', 'App Store Optimization'],
      roadmap: 'mobile-development',
      externalLinks: [
        { name: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started' },
        { name: 'Flutter.dev', url: 'https://flutter.dev/docs' },
        { name: 'iOS Developer', url: 'https://developer.apple.com/' },
        { name: 'Android Developer', url: 'https://developer.android.com/' }
      ],
      salary: experience === 'complete-beginner' ? '$65k - $110k' : '$85k - $140k',
      timeToJob: experience === 'experienced' ? '4-8 months' : '8-15 months',
      pros: ['Reach millions of users', 'Creative freedom', 'Growing market', 'Entrepreneurial opportunities'],
      workEnvironment: 'Great for freelancers and remote workers'
    })
  }

  // Cybersecurity Path
  if (interests.includes('cybersecurity') || goals.includes('helping-others')) {
    let match = 78
    if (experience !== 'complete-beginner') match += 10
    if (goals.includes('problem-solving')) match += 7
    
    suggestions.push({
      title: 'Cybersecurity Specialist',
      match: Math.min(match, 95),
      description: 'Protect organizations from digital threats and security breaches. Critical role in modern business infrastructure.',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance', 'Incident Response'],
      roadmap: 'cyber-security',
      externalLinks: [
        { name: 'Cybrary', url: 'https://www.cybrary.it/' },
        { name: 'SANS Training', url: 'https://www.sans.org/' },
        { name: 'TryHackMe', url: 'https://tryhackme.com/' },
        { name: 'Security Roadmap', url: 'https://roadmap.sh/cyber-security' }
      ],
      salary: experience === 'complete-beginner' ? '$75k - $120k' : '$90k - $150k',
      timeToJob: experience === 'experienced' ? '6-12 months' : '12-18 months',
      pros: ['High job security', 'Excellent salaries', 'Critical importance', 'Continuous learning'],
      workEnvironment: 'Often requires office presence but remote options growing'
    })
  }

  // DevOps/Cloud Engineer Path
  if (interests.includes('cloud-infrastructure') || goals.includes('cutting-edge-tech')) {
    let match = 85
    if (experience !== 'complete-beginner') match += 10
    if (goals.includes('high-salary')) match += 5
    
    suggestions.push({
      title: 'DevOps Engineer',
      match: Math.min(match, 98),
      description: 'Bridge development and operations through automation and cloud infrastructure. Work with cutting-edge technologies.',
      skills: ['Linux', 'Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD', 'Infrastructure as Code'],
      roadmap: 'devops',
      externalLinks: [
        { name: 'AWS Training', url: 'https://aws.amazon.com/training/' },
        { name: 'Docker Docs', url: 'https://docs.docker.com/' },
        { name: 'Kubernetes.io', url: 'https://kubernetes.io/docs/home/' },
        { name: 'DevOps Roadmap', url: 'https://roadmap.sh/devops' }
      ],
      salary: experience === 'complete-beginner' ? '$80k - $130k' : '$100k - $160k',
      timeToJob: experience === 'experienced' ? '6-10 months' : '12-18 months',
      pros: ['Very high demand', 'Excellent salaries', 'Automation focus', 'Cloud technology'],
      workEnvironment: 'Excellent remote opportunities, on-call responsibilities'
    })
  }

  // Full Stack Developer Path (Default/Versatile Option)
  if (suggestions.length === 0 || interests.includes('web-development')) {
    suggestions.push({
      title: 'Full Stack Developer',
      match: 87,
      description: 'Master both frontend and backend development. Versatile role with opportunities across all industries.',
      skills: ['JavaScript', 'React/Vue', 'Node.js', 'Databases', 'API Development'],
      roadmap: 'full-stack',
      externalLinks: [
        { name: 'The Odin Project', url: 'https://www.theodinproject.com/' },
        { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' },
        { name: 'Full Stack Open', url: 'https://fullstackopen.com/en/' },
        { name: 'Full Stack Roadmap', url: 'https://roadmap.sh/full-stack' }
      ],
      salary: experience === 'complete-beginner' ? '$70k - $120k' : '$85k - $140k',
      timeToJob: experience === 'experienced' ? '4-8 months' : '8-14 months',
      pros: ['High versatility', 'Many job opportunities', 'End-to-end understanding', 'Entrepreneurial path'],
      workEnvironment: 'Excellent for both remote and office work'
    })
  }

  // Sort by match percentage and return top 3
  return suggestions
    .sort((a, b) => b.match - a.match)
    .slice(0, 3)
    .map(suggestion => ({
      ...suggestion,
      aiInsight: generatePersonalizedInsight(suggestion, preferences)
    }))
}

function generatePersonalizedInsight(suggestion: any, preferences: any) {
  const insights = []
  
  if (preferences.experience === 'complete-beginner') {
    insights.push(`As a beginner, ${suggestion.title} offers a structured learning path with many free resources.`)
  }
  
  if (preferences.workStyle === 'remote') {
    insights.push(`This role has excellent remote work opportunities, perfect for your preference.`)
  }
  
  if (preferences.goals.includes('high-salary')) {
    insights.push(`The salary range aligns well with your goal of earning a high income.`)
  }
  
  if (preferences.timeCommitment === 'Part-time (10-20h/week)') {
    insights.push(`With part-time commitment, expect the timeline to extend by 50-100%.`)
  }
  
  return insights.join(' ')
}
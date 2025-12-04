import { NextRequest, NextResponse } from 'next/server'

const GROQ_API_KEY = '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'
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [], user } = await request.json()

    console.log('Chat API called with:', { message: message?.slice(0, 50), userExists: !!user })

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      )
    }

    // Enhanced system prompt for JARVIS
    const systemPrompt = `You are JARVIS, an AI career mentor inspired by Tony Stark's assistant. You help students and professionals build successful tech careers with a friendly, professional, and motivating approach.

**Your personality:**
- Friendly and approachable like a mentor
- Professional but not stiff
- Motivating and encouraging
- Intelligent and insightful
- Use occasional tech/Marvel references naturally

**Your expertise:**
- Career planning and personalized roadmaps
- Technical skill development guidance  
- Interview preparation and coding practice
- Resume optimization and portfolio building
- Job search strategies and market insights
- Programming languages and frameworks
- Industry trends and emerging technologies
- Salary negotiation and career advancement

**How you respond:**
- Keep responses conversational and engaging
- Provide actionable, specific advice
- Use examples when helpful
- Ask follow-up questions to better help
- Be encouraging about their career journey
- Structure longer responses with clear sections

**Your personality:**
- Professional yet friendly (like Iron Man's JARVIS)
- Intelligent and analytical
- Encouraging and supportive
- Direct but empathetic
- Solution-oriented

**Response guidelines:**
- Be concise but comprehensive
- Use markdown formatting for better readability
- Include actionable advice when possible
- Handle typos and unclear language gracefully
- Ask clarifying questions when needed
- Provide specific examples and resources

**Context awareness:**
- Remember conversation context
- Build on previous interactions
- Personalize advice based on user's situation

User name: ${user?.name || 'User'}

Respond as JARVIS would - intelligent, helpful, and career-focused.`

    // Prepare messages with better context handling
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-8), // Keep last 8 messages for better context
      { role: 'user', content: message }
    ]

    // Validate API key
    if (!GROQ_API_KEY) {
      console.error('GROQ_API_KEY not found')
      return NextResponse.json({
        success: true,
        response: `Hello ${user?.name || 'there'}! I'm JARVIS, your AI career assistant. I'm currently in demo mode, but I can still provide general career guidance. How can I help you advance your tech career today?`,
        streaming: false,
        demo: true
      })
    }

    console.log('API Key found:', GROQ_API_KEY ? `${GROQ_API_KEY.substring(0, 15)}...` : 'Not found')
    console.log('Making request to Groq API...')
    
    // Call Groq API with optimized settings
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Most reliable current model
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
        stream: false
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Groq API Error:', response.status, response.statusText, errorText)
      
      // Provide intelligent fallback based on error type
      let fallbackMessage = ""
      
      if (response.status === 429) {
        fallbackMessage = "I'm currently handling many requests. Let me help you anyway! "
      } else if (response.status === 401) {
        fallbackMessage = "I'm experiencing some API issues, but I can still provide career guidance! "
      } else {
        fallbackMessage = "I'm having some technical difficulties, but I'm here to help! "
      }
      
      // Provide intelligent responses based on common queries
      const lowerMessage = message.toLowerCase()
      
      if (lowerMessage.includes('career') || lowerMessage.includes('roadmap')) {
        fallbackMessage += `For career planning, I recommend: 1) Identify your interests and strengths, 2) Research job markets and requirements, 3) Build relevant skills through projects, 4) Create a portfolio, and 5) Network with professionals. What specific area interests you?`
      } else if (lowerMessage.includes('interview')) {
        fallbackMessage += `For interview prep: 1) Practice coding problems on LeetCode, 2) Review system design basics, 3) Prepare STAR method stories, 4) Research the company, and 5) Practice mock interviews. What type of role are you interviewing for?`
      } else if (lowerMessage.includes('resume')) {
        fallbackMessage += `For resume improvement: 1) Use action verbs and quantify achievements, 2) Tailor it to each job, 3) Keep it concise (1-2 pages), 4) Highlight relevant projects and skills, 5) Get it reviewed by others. What section would you like help with?`
      } else if (lowerMessage.includes('skill') || lowerMessage.includes('learn')) {
        fallbackMessage += `For skill development: 1) Start with fundamentals, 2) Build projects to practice, 3) Join communities and forums, 4) Take online courses, 5) Contribute to open source. What technology are you interested in learning?`
      } else {
        fallbackMessage += `I can help you with career planning, interview preparation, resume optimization, skill development, and job search strategies. What would you like to know?`
      }
      
      return NextResponse.json({
        success: true,
        response: fallbackMessage,
        streaming: false,
        fallback: true
      })
    }

    const data = await response.json()
    const aiResponse = data.choices?.[0]?.message?.content

    if (!aiResponse) {
      throw new Error('No response content from AI model')
    }

    // Log successful interaction (for monitoring)
    console.log(`JARVIS responded to user ${user?.name || 'Unknown'}: ${message.slice(0, 50)}...`)

    return NextResponse.json({
      success: true,
      response: aiResponse,
      model: 'llama-3.1-8b-instant',
      streaming: false,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    
    // Provide helpful error message based on error type
    let errorMessage = "I'm experiencing some technical issues, but I'm here to help with your career questions! "
    
    if (error instanceof Error) {
      if (error.message.includes('fetch')) {
        errorMessage += "It seems like there's a network issue. Please check your connection and try again."
      } else if (error.message.includes('timeout')) {
        errorMessage += "The request is taking longer than usual. Please try again."
      } else {
        errorMessage += "What would you like to know about your tech career?"
      }
    }
    
    return NextResponse.json({
      success: true,
      response: errorMessage,
      streaming: false,
      error: true,
      timestamp: new Date().toISOString()
    })
  }
}
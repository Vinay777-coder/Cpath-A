import { NextRequest, NextResponse } from 'next/server'

const GROQ_API_KEY = ' process.env.GROQ_API_KEY '
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [], user } = await request.json()

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      )
    }

    // Simple system prompt
    const systemPrompt = `You are Jarvis, an AI Career Mentor for CareerPath AI. You help with:
- Career planning and guidance
- Technical skill development
- Interview preparation
- Resume improvement
- Job search strategies
- Programming and tech advice

Respond in a helpful, professional, and encouraging manner. Keep responses concise but informative.`

    // Prepare messages
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-5), // Keep last 5 messages
      { role: 'user', content: message }
    ]

    // Fallback if no API key
    if (!GROQ_API_KEY) {
      return NextResponse.json({
        success: true,
        response: "I'm currently in demo mode. How can I help you with your career today?"
      })
    }

    // Call Groq API
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
        stream: false
      })
    })

    if (!response.ok) {
      console.error('Groq API Error:', response.status, response.statusText)
      return NextResponse.json({
        success: true,
        response: "I'm having some technical difficulties, but I can still help! What career question do you have?"
      })
    }

    const data = await response.json()
    const aiResponse = data.choices?.[0]?.message?.content

    if (!aiResponse) {
      throw new Error('No response from AI')
    }

    return NextResponse.json({
      success: true,
      response: aiResponse,
      model: 'llama-3.1-8b-instant'
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json({
      success: true,
      response: "I'm experiencing some technical issues, but I'm here to help with your career questions! What would you like to know?"
    })
  }
}
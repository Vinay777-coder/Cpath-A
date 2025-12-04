import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const GROQ_API_KEY = process.env.GROQ_API_KEY
  
  return NextResponse.json({
    hasGroqKey: !!GROQ_API_KEY,
    keyLength: GROQ_API_KEY ? GROQ_API_KEY.length : 0,
    keyPreview: GROQ_API_KEY ? `${GROQ_API_KEY.substring(0, 10)}...` : 'Not found',
    timestamp: new Date().toISOString()
  })
}

export async function POST() {
  const GROQ_API_KEY = process.env.GROQ_API_KEY
  
  if (!GROQ_API_KEY) {
    return NextResponse.json({ error: 'No API key found' }, { status: 400 })
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Say hello briefly.' }
        ],
        max_tokens: 50
      })
    })

    const data = await response.json()
    
    return NextResponse.json({
      success: response.ok,
      status: response.status,
      data: response.ok ? data : { error: data }
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    })
  }
}
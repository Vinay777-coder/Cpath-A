import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    console.log('Testing OpenAI API Key...')
    console.log('API Key length:', apiKey ? apiKey.length : 'NOT SET')
    console.log('API Key (first 10 chars):', apiKey ? apiKey.substring(0, 10) + '...' : 'NOT SET')
    console.log('API Key (last 10 chars):', apiKey ? '...' + apiKey.substring(apiKey.length - 10) : 'NOT SET')

    if (!apiKey) {
      return NextResponse.json({ 
        error: 'API key not set',
        debug: 'OPENAI_API_KEY environment variable is missing'
      }, { status: 500 })
    }

    if (apiKey.includes('your-ope') || apiKey.includes('************')) {
      return NextResponse.json({ 
        error: 'API key contains placeholder text',
        debug: 'The API key appears to be a placeholder, not a real key'
      }, { status: 500 })
    }

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: apiKey,
    })

    // Make a simple test call
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Say 'Hello World'" }],
      max_tokens: 10
    })

    return NextResponse.json({
      success: true,
      message: 'OpenAI API is working!',
      response: completion.choices[0]?.message?.content,
      apiKeyLength: apiKey.length,
      apiKeyStart: apiKey.substring(0, 10) + '...',
      apiKeyEnd: '...' + apiKey.substring(apiKey.length - 10)
    })

  } catch (error: any) {
    console.error('OpenAI test error:', error)
    return NextResponse.json({
      error: 'OpenAI API test failed',
      details: error.message,
      code: error.code,
      type: error.type
    }, { status: 500 })
  }
}
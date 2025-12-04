import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    groq_key_exists: !!process.env.GROQ_API_KEY,
    groq_key_length: process.env.GROQ_API_KEY?.length || 0,
    groq_key_prefix: process.env.GROQ_API_KEY?.substring(0, 10) || 'NOT SET',
    groq_key_suffix: process.env.GROQ_API_KEY ? '...' + process.env.GROQ_API_KEY.substring(process.env.GROQ_API_KEY.length - 10) : 'NOT SET',
    all_env_keys: Object.keys(process.env).filter(key => key.includes('GROQ') || key.includes('API'))
  })
}
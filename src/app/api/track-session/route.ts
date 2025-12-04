import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { createLoginSessionAction, logUserActivityAction } from '@/lib/user-management-actions'

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { action, sessionId } = await request.json()

    if (action === 'login') {
      const result = await createLoginSessionAction(request)
      return NextResponse.json(result)
    } else if (action === 'logout') {
      const result = await logUserActivityAction({
        action_type: 'user_logout',
        action_details: { session_id: sessionId },
        ip_address: request.headers.get('x-forwarded-for') || 'unknown',
        user_agent: request.headers.get('user-agent') || 'unknown'
      })
      return NextResponse.json(result)
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Error tracking session:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // This endpoint can be used to verify session tracking is working
    return NextResponse.json({ 
      success: true, 
      message: 'Session tracking endpoint is working',
      userId 
    })
  } catch (error) {
    console.error('Error in session endpoint:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}
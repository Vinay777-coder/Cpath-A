import { NextRequest, NextResponse } from 'next/server'
import { logUserActivityAction } from '@/lib/user-management-actions'

export async function POST(request: NextRequest) {
  try {
    const activity = await request.json()
    const result = await logUserActivityAction(activity)
    return NextResponse.json(result)
  } catch (error) {
    console.error('API Error logging activity:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to log activity' },
      { status: 500 }
    )
  }
}
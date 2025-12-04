import { NextRequest, NextResponse } from 'next/server'
import { syncUserWithDatabaseAction } from '@/lib/user-management-actions'

export async function POST(request: NextRequest) {
  try {
    const result = await syncUserWithDatabaseAction()
    return NextResponse.json(result)
  } catch (error) {
    console.error('API Error syncing user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to sync user' },
      { status: 500 }
    )
  }
}
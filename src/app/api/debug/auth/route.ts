import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getUserProfile } from '@/lib/database'

export async function GET() {
  try {
    // Get authentication info
    const { userId } = await auth()
    const user = await currentUser()
    
    // Check database connection
    let dbProfile = null
    let dbError = null
    
    if (userId) {
      try {
        dbProfile = await getUserProfile(userId)
      } catch (error) {
        dbError = error instanceof Error ? error.message : 'Unknown database error'
      }
    }

    const diagnostic = {
      timestamp: new Date().toISOString(),
      auth: {
        userId: userId || null,
        userExists: !!user,
        userEmail: user?.emailAddresses[0]?.emailAddress || null,
        userName: user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : null
      },
      database: {
        profileExists: !!dbProfile,
        profileId: dbProfile?.id || null,
        error: dbError
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        hasClerkPublishable: !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        hasClerkSecret: !!process.env.CLERK_SECRET_KEY
      }
    }

    return NextResponse.json(diagnostic)
  } catch (error) {
    return NextResponse.json({
      error: 'Diagnostic failed',
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
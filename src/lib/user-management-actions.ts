// Server actions for user management
import { currentUser } from '@clerk/nextjs/server'
import { 
  createUserProfile, 
  getUserProfile, 
  updateUserProfile,
  createLoginSession,
  updateLoginSession,
  logUserActivity,
  type UserProfile,
  type LoginSession,
  type ActivityLog
} from './database'
import { UAParser } from 'ua-parser-js'

// Get client information
function getClientInfo(userAgent: string) {
  const parser = new UAParser(userAgent)
  return {
    device_type: parser.getDevice().type || 'desktop',
    browser: `${parser.getBrowser().name} ${parser.getBrowser().version}`,
    os: `${parser.getOS().name} ${parser.getOS().version}`
  }
}

// Server action for syncing user with database
export async function syncUserWithDatabaseAction() {
  'use server'
  
  try {
    // Check if Supabase is available
    const { supabase } = await import('./supabase')
    if (!supabase) {
      throw new Error('Supabase not available')
    }

    const user = await currentUser()
    
    if (!user) {
      throw new Error('No authenticated user found')
    }

    // Check if user profile exists
    const existingProfile = await getUserProfile(user.id)
    
    if (!existingProfile) {
      // Create new user profile
      const userProfile: Omit<UserProfile, 'id' | 'created_at' | 'updated_at'> = {
        clerk_user_id: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        full_name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        avatar_url: user.imageUrl || undefined,
        preferences: {}
      }

      await createUserProfile(userProfile)
      
      return { success: true, message: 'User profile created successfully' }
    } else {
      // Update existing profile if needed
      const updatedProfile = {
        email: user.emailAddresses[0]?.emailAddress || existingProfile.email,
        first_name: user.firstName || existingProfile.first_name,
        last_name: user.lastName || existingProfile.last_name,
        avatar_url: user.imageUrl || existingProfile.avatar_url,
        updated_at: new Date().toISOString()
      }

      await updateUserProfile(user.id, updatedProfile)
      
      return { success: true, message: 'User profile updated successfully' }
    }
  } catch (error) {
    console.error('Error in syncUserWithDatabaseAction:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Server action for creating login session
export async function createLoginSessionAction(request: Request) {
  'use server'
  
  try {
    const user = await currentUser()
    
    if (!user) {
      throw new Error('No authenticated user found')
    }

    const userAgent = request.headers.get('user-agent') || ''
    const clientInfo = getClientInfo(userAgent)
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'

    const sessionData: Omit<LoginSession, 'id' | 'created_at'> = {
      clerk_user_id: user.id,
      session_id: crypto.randomUUID(),
      ip_address: ipAddress,
      user_agent: userAgent,
      is_active: true,
      ...clientInfo
    }

    const session = await createLoginSession(sessionData)
    return { success: true, sessionId: session.id }
  } catch (error) {
    console.error('Error creating login session:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Server action for logging user activity  
export async function logUserActivityAction(activity: Omit<ActivityLog, 'id' | 'clerk_user_id' | 'timestamp'>) {
  'use server'
  
  try {
    const user = await currentUser()
    
    if (!user) {
      throw new Error('No authenticated user found')
    }

    const activityData: Omit<ActivityLog, 'id' | 'timestamp'> = {
      ...activity,
      clerk_user_id: user.id
    }

    await logUserActivity(activityData)
    return { success: true }
  } catch (error) {
    console.error('Error logging user activity:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
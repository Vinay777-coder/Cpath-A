import { supabase } from './supabase'

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  return supabase !== null && process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')
}

export interface UserProfile {
  id?: string
  clerk_user_id: string
  email: string
  full_name?: string
  avatar_url?: string
  phone?: string
  bio?: string
  job_title?: string
  company?: string
  location?: string
  linkedin_url?: string
  github_url?: string
  website_url?: string
  skills?: string[]
  preferences?: Record<string, any>
  created_at?: string
  updated_at?: string
}

export interface LoginSession {
  id?: string
  clerk_user_id: string
  session_id: string
  login_time?: string
  logout_time?: string
  ip_address?: string
  user_agent?: string
  device_type?: string
  browser?: string
  location_data?: Record<string, any>
  is_active?: boolean
  created_at?: string
}

export interface ActivityLog {
  id?: string
  clerk_user_id: string
  action_type: string
  action_details?: Record<string, any>
  ip_address?: string
  user_agent?: string
  timestamp?: string
}

// User Profile Functions
export async function createUserProfile(profileData: UserProfile) {
  if (!isSupabaseConfigured()) {
    return { data: null, error: new Error('Supabase not configured') }
  }
  
  try {
    const { data, error } = await supabase!
      .from('user_profiles')
      .insert([profileData])
      .select()
      .single()

    if (error) {
      console.error('Error creating user profile:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

export async function getUserProfile(clerkUserId: string) {
  try {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }
    
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('clerk_user_id', clerkUserId)
      .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error fetching user profile:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

export async function updateUserProfile(clerkUserId: string, updates: Partial<UserProfile>) {
  try {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }
    
    const { data, error } = await supabase
      .from('user_profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('clerk_user_id', clerkUserId)
      .select()
      .single()

    if (error) {
      console.error('Error updating user profile:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

// Login Session Functions
export async function createLoginSession(sessionData: LoginSession) {
  try {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }
    
    const { data, error } = await supabase
      .from('login_sessions')
      .insert([sessionData])
      .select()
      .single()

    if (error) {
      console.error('Error creating login session:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

export async function updateLoginSession(sessionId: string, updates: Partial<LoginSession>) {
  try {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }
    
    const { data, error } = await supabase
      .from('login_sessions')
      .update(updates)
      .eq('session_id', sessionId)
      .select()
      .single()

    if (error) {
      console.error('Error updating login session:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

export async function getUserSessions(clerkUserId: string) {
  try {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }
    
    const { data, error } = await supabase
      .from('login_sessions')
      .select('*')
      .eq('clerk_user_id', clerkUserId)
      .order('login_time', { ascending: false })

    if (error) {
      console.error('Error fetching user sessions:', error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

// Activity Log Functions
export async function logUserActivity(activityData: ActivityLog) {
  try {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }
    
    const { data, error } = await supabase
      .from('activity_logs')
      .insert([activityData])
      .select()
      .single()

    if (error) {
      console.error('Error logging user activity:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

export async function getUserActivity(clerkUserId: string, limit: number = 50) {
  try {
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }
    
    const { data, error } = await supabase
      .from('activity_logs')
      .select('*')
      .eq('clerk_user_id', clerkUserId)
      .order('timestamp', { ascending: false })
      .limit(limit)

    if (error) {
      console.error('Error fetching user activity:', error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

// Track note creation activity
export async function trackNoteCreation(clerkUserId: string, noteData: Record<string, any>) {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured - skipping note tracking')
    return null
  }

  return logUserActivity({
    clerk_user_id: clerkUserId,
    action_type: 'note_created',
    action_details: {
      title: noteData.title,
      category: noteData.category,
      contentLength: noteData.content?.length || 0
    }
  })
}

// Track task creation activity  
export async function trackTaskCreation(clerkUserId: string, taskData: Record<string, any>) {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured - skipping task tracking')
    return null
  }

  return logUserActivity({
    clerk_user_id: clerkUserId,
    action_type: 'task_created',
    action_details: {
      title: taskData.title,
      priority: taskData.priority,
      category: taskData.category,
      dueDate: taskData.dueDate
    }
  })
}
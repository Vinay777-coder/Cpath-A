import { auth, currentUser } from '@clerk/nextjs/server'
import { supabase, Profile } from './supabase'

// Sync Clerk user with Supabase profile
export async function syncUserWithSupabase() {
  const user = await currentUser()
  
  if (!user) return null

  // Check if user profile exists in Supabase
  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }
  
  const { data: existingProfile } = await supabase
    .from('profiles')
    .select('*')
    .eq('clerk_user_id', user.id)
    .single()

  if (!existingProfile) {
    // Create new profile in Supabase
    const { data: newProfile, error } = await supabase
      .from('profiles')
      .insert([
        {
          clerk_user_id: user.id,
          email: user.emailAddresses[0]?.emailAddress || '',
          full_name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
          avatar_url: user.imageUrl || '',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Error creating profile:', error)
      return null
    }

    return newProfile
  }

  return existingProfile
}

// Get user profile from Supabase using Clerk ID
export async function getUserProfile(): Promise<Profile | null> {
  const user = await currentUser()
  
  if (!user) return null

  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('clerk_user_id', user.id)
    .single()

  if (error) {
    console.error('Error fetching profile:', error)
    return null
  }

  return profile
}

// Update user profile in Supabase
export async function updateUserProfile(updates: Partial<Profile>) {
  const user = await currentUser()
  
  if (!user) throw new Error('User not authenticated')

  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }

  const { data, error } = await supabase
    .from('profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('clerk_user_id', user.id)
    .select()
    .single()

  if (error) {
    console.error('Error updating profile:', error)
    throw error
  }

  return data
}

// Check if user is authenticated (Clerk)
export async function checkAuth() {
  const user = await currentUser()
  return !!user
}

// Get current Clerk user
export async function getCurrentClerkUser() {
  return await currentUser()
}
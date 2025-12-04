// Client-side user management utilities (safe for client components)
'use client'

import { localAuth } from './local-auth'

// Client-side user sync that calls server actions
export async function syncUserClientSide() {
  try {
    // If using local auth, handle it differently
    if (typeof window !== 'undefined') {
      const forceLocal = localStorage.getItem('force_local_auth')
      if (forceLocal === 'true') {
        // For local auth, just ensure the user is signed in
        if (!localAuth.isSignedIn()) {
          throw new Error('User not signed in with local auth')
        }
        return { success: true, message: 'Local auth user verified' }
      }
    }

    // For Clerk auth, we would need to call a server action
    // Since we can't import server functions here, we'll make an API call
    const response = await fetch('/api/sync-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to sync user')
    }

    return await response.json()
  } catch (error) {
    console.error('Error syncing user:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Log user activity (client-side wrapper)
export async function logActivityClientSide(activity: {
  action_type: string
  action_details?: Record<string, any>
  ip_address?: string
  user_agent?: string
}) {
  try {
    const response = await fetch('/api/log-activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activity),
    })

    if (!response.ok) {
      throw new Error('Failed to log activity')
    }

    return await response.json()
  } catch (error) {
    console.error('Error logging activity:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Get current user info (client-side safe)
export function getCurrentUserClient() {
  if (typeof window !== 'undefined') {
    const forceLocal = localStorage.getItem('force_local_auth')
    if (forceLocal === 'true') {
      return localAuth.getCurrentUser()
    }
  }
  
  // For Clerk auth, this would need to be handled differently
  // We'll return null for now since Clerk hooks should be used directly
  return null
}

// Check if user is authenticated (client-side safe)
export function isAuthenticatedClient(): boolean {
  if (typeof window !== 'undefined') {
    const forceLocal = localStorage.getItem('force_local_auth')
    if (forceLocal === 'true') {
      return localAuth.isSignedIn()
    }
  }
  
  // For Clerk auth, this should use Clerk hooks
  return false
}
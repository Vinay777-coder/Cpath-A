'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { localAuth, shouldUseLocalAuth, type LocalUser } from '@/lib/local-auth'

// Unified user interface that works with both Clerk and local auth
export interface AuthUser {
  id: string
  email: string
  name: string
  avatar?: string
  firstName?: string
  lastName?: string
}

interface AuthContextType {
  user: AuthUser | null
  isLoaded: boolean
  isSignedIn: boolean
  signOut: () => Promise<void>
  authMethod: 'clerk' | 'local'
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [authMethod, setAuthMethod] = useState<'clerk' | 'local'>('local')
  const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      try {
        const useLocal = shouldUseLocalAuth()
        setAuthMethod(useLocal ? 'local' : 'clerk')

        if (useLocal) {
          // Use local authentication
          const localUser = localAuth.getCurrentUser()
          if (localUser) {
            setUser({
              id: localUser.id,
              email: localUser.email,
              name: localUser.name,
              firstName: localUser.name.split(' ')[0] || localUser.name,
              lastName: localUser.name.split(' ').slice(1).join(' ') || ''
            })
          }
        } else {
          // TODO: Initialize Clerk auth here when you have valid keys
          // For now, fall back to local auth
          setAuthMethod('local')
          const localUser = localAuth.getCurrentUser()
          if (localUser) {
            setUser({
              id: localUser.id,
              email: localUser.email,
              name: localUser.name,
              firstName: localUser.name.split(' ')[0] || localUser.name,
              lastName: localUser.name.split(' ').slice(1).join(' ') || ''
            })
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
      } finally {
        setIsLoaded(true)
      }
    }

    initAuth()
  }, [])

  const signOut = async () => {
    try {
      if (authMethod === 'local') {
        localAuth.signOut()
        setUser(null)
        router.push('/')
      } else {
        // TODO: Implement Clerk signOut when you have valid keys
        localAuth.signOut()
        setUser(null)
        router.push('/')
      }
    } catch (error) {
      console.error('Sign out error:', error)
      // Force sign out anyway
      localAuth.signOut()
      setUser(null)
      router.push('/')
    }
  }

  const value: AuthContextType = {
    user,
    isLoaded,
    isSignedIn: !!user,
    signOut,
    authMethod
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Backwards compatibility hooks that mimic Clerk's API
export function useUser() {
  const { user, isLoaded } = useAuth()
  return {
    user,
    isLoaded,
    isSignedIn: !!user
  }
}

export function useClerk() {
  const { signOut } = useAuth()
  return {
    signOut
  }
}
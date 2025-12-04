'use client'

import { ReactNode, useEffect, useState } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { ClerkErrorBoundary } from '@/components/clerk-error-boundary'
import { shouldUseLocalAuth } from '@/lib/local-auth'

interface AdaptiveAuthProviderProps {
  children: ReactNode
}

export function AdaptiveAuthProvider({ children }: AdaptiveAuthProviderProps) {
  const [useLocalAuth, setUseLocalAuth] = useState(true) // Default to local auth
  const [isLoading, setIsLoading] = useState(false) // Start with no loading

  useEffect(() => {
    // Always use local auth for now to avoid Clerk issues
    setUseLocalAuth(true)
    setIsLoading(false)
    console.log('🔧 Using local authentication (simplified mode)')
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // If using local auth, just return children without Clerk wrapper
  if (useLocalAuth) {
    return <>{children}</>
  }

  // Use Clerk with error boundary
  return (
    <ClerkErrorBoundary fallback={children}>
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
            card: 'shadow-lg border border-gray-200',
          },
          signUp: {
            elements: {
              phoneInputBox: { display: 'none' },
              phoneInput: { display: 'none' },
            },
          },
          signIn: {
            elements: {
              phoneInputBox: { display: 'none' },
              phoneInput: { display: 'none' },
            },
          },
        }}
      >
        {children}
      </ClerkProvider>
    </ClerkErrorBoundary>
  )
}
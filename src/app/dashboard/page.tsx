'use client'

import { useRouter } from 'next/navigation'
import { DashboardClient } from './dashboard-client'
import { ThemeProvider } from '@/contexts/theme-context'
import { useEffect, useState } from 'react'
import { localAuth, type LocalUser } from '@/lib/local-auth'

export default function DashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<LocalUser | null>(null)

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      if (localAuth.isSignedIn()) {
        const currentUser = localAuth.getCurrentUser()
        setUser(currentUser)
      } else {
        router.push('/login')
        return
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect
  }

  return (
    <ThemeProvider>
      <DashboardClient user={user} />
    </ThemeProvider>
  )
}

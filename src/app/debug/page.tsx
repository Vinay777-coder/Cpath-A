'use client'

import { useEffect, useState } from 'react'
import { getCurrentUser } from '@/lib/auth'

export default function DiagnosticPage() {
  const [authStatus, setAuthStatus] = useState<any>(null)
  const [cookies, setCookies] = useState('')

  useEffect(() => {
    async function checkAuth() {
      try {
        const { user, error } = await getCurrentUser()
        if (user) {
          setAuthStatus({
            isAuthenticated: true,
            user: {
              id: user.id,
              email: user.email,
              name: user.name
            },
            method: 'supabase'
          })
        } else {
          setAuthStatus({
            isAuthenticated: false,
            error: error && typeof error === 'object' && 'message' in error ? (error as any).message : 'No user found',
            method: 'none'
          })
        }
      } catch (err) {
        setAuthStatus({
          isAuthenticated: false,
          error: err instanceof Error ? err.message : 'Unknown error',
          method: 'error'
        })
      }
    }
    
    checkAuth()
    
    // Check cookies
    setCookies(document.cookie)
  }, [])

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-6">Authentication Diagnostic</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded">
            <h2 className="font-semibold text-blue-800">Authentication Status</h2>
            <pre className="text-sm mt-2 overflow-auto">
              {JSON.stringify(authStatus, null, 2)}
            </pre>
          </div>
          
          <div className="p-4 bg-green-50 rounded">
            <h2 className="font-semibold text-green-800">Cookies</h2>
            <pre className="text-sm mt-2 overflow-auto">
              {cookies || 'No cookies found'}
            </pre>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded">
            <h2 className="font-semibold text-yellow-800">Environment</h2>
            <p className="text-sm">
              SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Not set'}
            </p>
            <p className="text-sm">
              APP_URL: {process.env.NEXT_PUBLIC_APP_URL || 'Not set'}
            </p>
          </div>
        </div>
        
        <div className="mt-6 space-x-4">
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Go to Login
          </a>
          <a href="/dashboard" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Try Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
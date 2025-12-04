'use client'

import { useEffect } from 'react'

export default function ForceLocalAuthPage() {
  useEffect(() => {
    // Force local auth and redirect to login
    localStorage.setItem('force_local_auth', 'true')
    
    // Show success and redirect
    setTimeout(() => {
      window.location.href = '/login-enhanced'
    }, 2000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          ✅ Enabling Local Authentication
        </h1>
        <p className="text-gray-600 mb-4">
          Switching to local auth to bypass Clerk errors...
        </p>
        <p className="text-sm text-blue-600">
          Redirecting to login in 2 seconds...
        </p>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-medium text-green-800 mb-2">🎉 Local Auth Activated!</h3>
          <p className="text-green-700 text-sm mb-2">Use these credentials to login:</p>
          <div className="bg-green-100 p-2 rounded font-mono text-sm">
            <div>Email: demo@test.com</div>
            <div>Password: password123</div>
          </div>
        </div>

        <a 
          href="/login-enhanced" 
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
        >
          Go to Login Now →
        </a>
      </div>
    </div>
  )
}
'use client'

import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'

export default function AuthDebugPage() {
  const { user, isSignedIn, signOut, authMethod } = useAuth()

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Authentication Debug Information</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Authentication System</h2>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-bold">Auth Method:</span>
              <br />
              <span className="text-green-600">{authMethod} authentication</span>
            </div>
            <div>
              <span className="font-bold">Status:</span>
              <br />
              <span className="text-blue-600">✅ Local Auth Active</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">User Status</h2>
          <div className="space-y-2">
            <p><span className="font-bold">Is Signed In:</span> {isSignedIn ? 'Yes' : 'No'}</p>
            <p><span className="font-bold">User ID:</span> {user?.id || 'None'}</p>
            <p><span className="font-bold">User Email:</span> {user?.email || 'None'}</p>
            <p><span className="font-bold">User Name:</span> {user?.name || 'None'}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Actions</h2>
          <div className="space-x-4">
            <Button 
              onClick={() => window.location.href = '/login'}
              variant="outline"
            >
              Go to Login
            </Button>
            <Button 
              onClick={() => window.location.href = '/signup-real'}
              variant="outline"
            >
              Go to Sign Up
            </Button>
            {isSignedIn && (
              <Button 
                onClick={() => signOut()}
                variant="destructive"
              >
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useUser, useClerk } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthTestPage() {
  const { user, isLoaded, isSignedIn } = useUser()
  const clerk = useClerk()

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Authentication Test</CardTitle>
            <CardDescription>Testing local authentication flow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Is Loaded:</strong> {isLoaded ? '✅ Yes' : '❌ No'}
              </div>
              <div>
                <strong>Is Signed In:</strong> {isSignedIn ? '✅ Yes' : '❌ No'}
              </div>
            </div>

            {isSignedIn && user ? (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800">User Information</h3>
                  <div className="mt-2 space-y-1 text-sm text-green-700">
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}</p>
                    <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                    <p><strong>First Name:</strong> {user.firstName}</p>
                    <p><strong>Last Name:</strong> {user.lastName}</p>
                  </div>
                </div>
                <Button 
                  onClick={() => clerk.signOut()} 
                  variant="outline"
                  className="w-full"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800">Not signed in. Use the buttons below to test authentication.</p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    onClick={() => window.location.href = '/login'}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Go to Login Page
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = '/signup-real'}
                    variant="outline" 
                    className="w-full"
                  >
                    Go to Sign Up Page
                  </Button>
                </div>
              </div>
            )}

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">Authentication Method</h4>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Auth System:</strong> Local Authentication (Enhanced)
                </p>
                <p>
                  <strong>Status:</strong> ✅ Active
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
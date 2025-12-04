import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function AfterAuthPage() {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Authentication Successful!</h1>
            <p className="text-gray-600 mb-6">You are now signed in to CareerPath AI</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
              <h3 className="font-semibold text-blue-900 mb-2">User Information:</h3>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>User ID:</strong> {userId}</p>
                <p><strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}</p>
                <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <a 
                href="/dashboard" 
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Go to Dashboard
              </a>
              <a 
                href="/" 
                className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client';

import { useAuth } from '@/contexts/auth-context';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TestAuth() {
  const { user, isSignedIn, signOut } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Authentication Test</h1>
      
      <div className="space-y-6">
        {!isSignedIn ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-900 mb-4">You are not signed in</h2>
            <div className="space-x-4">
              <Link href="/login">
                <Button>Go to Login</Button>
              </Link>
              <Link href="/signup-real">
                <Button variant="outline">Go to Sign Up</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-900 mb-4">You are signed in!</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <div className="flex items-center space-x-4 pt-2">
                <Button onClick={() => signOut()} variant="destructive">
                  Sign Out
                </Button>
                <Link href="/dashboard">
                  <Button>Go to Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Navigation Links</h3>
          <div className="space-x-4">
            <Link href="/">
              <Button variant="outline">Home</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup-real">
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
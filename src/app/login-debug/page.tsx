'use client'

import { useAuth } from '@/contexts/auth-context'
import { localAuth } from '@/lib/local-auth'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LoginDebugPage() {
  const { user, isLoaded: userLoaded, isSignedIn, signOut } = useAuth()
  const [debugInfo, setDebugInfo] = useState<any>(null)
  const [testCredentials, setTestCredentials] = useState({ email: '', password: '' })

  // Create a test account on component mount
  useEffect(() => {
    const createTestAccount = async () => {
      const testEmail = 'test@example.com'
      const testPassword = 'password123'
      const testName = 'Test User'
      
      // Check if test account already exists
      const existingUsers = localAuth.getAllUsers()
      const testExists = existingUsers.find(u => u.email === testEmail)
      
      if (!testExists) {
        await localAuth.signUp(testEmail, testPassword, testName)
      }
      
      setTestCredentials({ email: testEmail, password: testPassword })
    }
    
    createTestAccount()
  }, [])

  const checkAuthStatus = () => {
    const allUsers = localAuth.getAllUsers()
    setDebugInfo({
      userLoaded,
      isSignedIn,
      hasUser: !!user,
      userEmail: user?.email || 'Not logged in',
      userName: user?.name || 'N/A',
      registeredUsers: allUsers.length,
      allUsers: allUsers,
      environment: process.env.NODE_ENV
    })
  }

  const handleSignOut = async () => {
    await signOut()
    window.location.reload()
  }

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      background: '#f5f5f5'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>🔍 Authentication Test with Your Email</h1>
        
        <button 
          onClick={checkAuthStatus}
          style={{
            background: '#4299e1',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '1.5rem'
          }}
        >
          Check Auth Status
        </button>

        {/* Test Credentials Section */}
        {testCredentials.email && (
          <div style={{
            background: '#e6fffa',
            padding: '1rem',
            borderRadius: '6px',
            border: '1px solid #4fd1c7',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ color: '#2c7a7b', margin: '0 0 0.5rem 0' }}>🧪 Test Account Created</h3>
            <p style={{ margin: '0.5rem 0', fontSize: '14px' }}>
              <strong>Email:</strong> {testCredentials.email}
            </p>
            <p style={{ margin: '0.5rem 0', fontSize: '14px' }}>
              <strong>Password:</strong> {testCredentials.password}
            </p>
            <p style={{ margin: '0.5rem 0', fontSize: '12px', color: '#2c7a7b' }}>
              You can use these credentials to test the login, or create your own account.
            </p>
          </div>
        )}

        {debugInfo && (
          <div style={{
            background: '#f8f9fa',
            padding: '1rem',
            borderRadius: '6px',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Authentication Status:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '0.25rem 0' }}>
                <strong>User Loaded:</strong> 
                <span style={{ color: debugInfo.userLoaded ? 'green' : 'red', marginLeft: '0.5rem' }}>
                  {debugInfo.userLoaded ? '✅ Yes' : '❌ No'}
                </span>
              </li>
              <li style={{ padding: '0.25rem 0' }}>
                <strong>Is Signed In:</strong> 
                <span style={{ color: debugInfo.isSignedIn ? 'green' : 'red', marginLeft: '0.5rem' }}>
                  {debugInfo.isSignedIn ? '✅ Yes' : '❌ No'}
                </span>
              </li>
              <li style={{ padding: '0.25rem 0' }}>
                <strong>Has User Object:</strong> 
                <span style={{ color: debugInfo.hasUser ? 'green' : 'red', marginLeft: '0.5rem' }}>
                  {debugInfo.hasUser ? '✅ Yes' : '❌ No'}
                </span>
              </li>
              <li style={{ padding: '0.25rem 0' }}>
                <strong>Auth Loaded:</strong> 
                <span style={{ color: 'green', marginLeft: '0.5rem' }}>
                  ✅ Yes
                </span>
              </li>
              <li style={{ padding: '0.25rem 0' }}>
                <strong>Registered Users:</strong> 
                <span style={{ marginLeft: '0.5rem' }}>{debugInfo.registeredUsers}</span>
              </li>
              <li style={{ padding: '0.25rem 0' }}>
                <strong>Environment:</strong> 
                <span style={{ marginLeft: '0.5rem' }}>{debugInfo.environment}</span>
              </li>
            </ul>
          </div>
        )}

        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#e6fffa', borderRadius: '6px' }}>
          <h4 style={{ color: '#2c7a7b', margin: '0 0 0.5rem 0' }}>Quick Actions:</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="/login" 
              style={{
                background: '#38b2ac',
                color: 'white',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              Go to Login
            </a>
            <a 
              href="/dashboard" 
              style={{
                background: '#4299e1',
                color: 'white',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              Go to Dashboard
            </a>
            <a 
              href="/" 
              style={{
                background: '#6b7280',
                color: 'white',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              Go to Home
            </a>
          </div>
        </div>

        {userLoaded && user && (
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: '#f0fff4',
            border: '1px solid #9ae6b4',
            borderRadius: '6px'
          }}>
            <h4 style={{ color: '#2f855a', margin: '0 0 0.5rem 0' }}>✅ You are logged in!</h4>
            <p style={{ margin: 0 }}>
              Email: <strong>{user.email}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
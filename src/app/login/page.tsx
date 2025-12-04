'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Eye, EyeOff, Zap, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { localAuth } from '@/lib/local-auth'

export default function LoginPage() {
  const router = useRouter()

  const [isSignupMode, setIsSignupMode] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<{email?: string, password?: string, name?: string, confirmPassword?: string, general?: string}>({})
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState<string>('')

  useEffect(() => {
    // Check if already logged in with local auth
    if (localAuth.isSignedIn()) {
      router.push('/dashboard')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})
    setSuccess('')

    // Client-side validation
    const newErrors: {email?: string, password?: string, name?: string, confirmPassword?: string, general?: string} = {}
    
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    // Additional validation for signup mode
    if (isSignupMode) {
      if (!name) {
        newErrors.name = 'Name is required'
      }
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      if (isSignupMode) {
        // Sign up with local auth
        const result = await localAuth.signUp(email, password, name)
        
        if (result.success) {
          setSuccess('Account created successfully! You can now sign in.')
          setIsSignupMode(false)
          // Clear form
          setPassword('')
          setConfirmPassword('')
          setName('')
        } else {
          setErrors({ general: result.error || 'Failed to create account' })
        }
      } else {
        // Sign in with local auth
        const result = await localAuth.signIn(email, password)
        
        if (result.success) {
          setSuccess('Sign in successful! Redirecting...')
          // Immediate redirect - no need to keep loading state
          router.push('/dashboard')
          return // Exit early to avoid finally block
        } else {
          setErrors({ general: result.error || 'Failed to sign in' })
        }
      }
    } catch (err: any) {
      console.error('Authentication error:', err)
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setErrors({ 
      general: 'Google sign-in is not available in local auth mode. Please use email/password authentication.' 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link href="/" className="flex justify-center mb-6 group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors cursor-pointer">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="/" className="group">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                CareerPath AI
              </h1>
            </Link>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {isSignupMode ? 'Create Account' : 'Login'}
            </h2>
            <p className="text-gray-600">
              {isSignupMode 
                ? 'Join CareerPath AI and start your journey!' 
                : 'See your growth and get consulting support!'}
            </p>

            {/* Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsSignupMode(false)
                  setErrors({})
                  setName('')
                  setConfirmPassword('')
                }}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
                  !isSignupMode 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSignupMode(true)
                  setErrors({})
                }}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
                  isSignupMode 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              {/* Google Sign In */}
              <Button
                type="button"
                variant="outline"
                className="w-full mb-6 py-3 border-gray-200 hover:bg-gray-50 relative"
                onClick={handleGoogleSignIn}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign in with Google
              </Button>

              {/* Demo Mode Notice */}
              <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>Demo Mode:</strong> Google OAuth requires real Clerk keys. 
                  <span className="block mt-1 text-blue-600">
                    Use email signup below or set up your Clerk account for full OAuth functionality.
                  </span>
                </p>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign in with Email</span>
                </div>
              </div>

              {/* Success Messages */}
              {success && (
                <Alert className="mb-4 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">{success}</AlertDescription>
                </Alert>
              )}

              {/* Error Messages */}
              {errors.general && (
                <Alert className="mb-4 border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">{errors.general}</AlertDescription>
                </Alert>
              )}

              {/* Login/Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field - only for signup */}
                {isSignupMode && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="mail@website.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password*
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Min. 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`pr-10 ${errors.password ? 'border-red-500 focus:border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password field - only for signup */}
                {isSignupMode && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password*
                    </label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`pr-10 ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : ''}`}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                    )}
                  </div>
                )}

                {/* Remember me and forgot password - only for login mode */}
                {!isSignupMode && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {isSignupMode ? 'Creating Account...' : 'Signing in...'}
                    </div>
                  ) : (
                    isSignupMode ? 'Create Account' : 'Login'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-xs text-gray-500">©2025 CareerPath AI. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 items-center justify-center p-12">
        <div className="max-w-md text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Zap className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            {isSignupMode ? 'Start your career journey!' : 'Turn your ideas into reality.'}
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            {isSignupMode 
              ? 'Join thousands of professionals advancing their careers with AI-powered guidance.'
              : 'Consistent quality and experience across all platforms and devices.'}
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Eye, EyeOff, Zap, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { localAuth, shouldUseLocalAuth } from '@/lib/local-auth'
import { useAuth } from '@/contexts/auth-context'

export default function EnhancedLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<{email?: string, password?: string, general?: string}>({})
  const [isLoading, setIsLoading] = useState(false)
  const [authType, setAuthType] = useState<'local' | 'clerk'>('local')
  const [success, setSuccess] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    // Determine which auth system to use
    const useLocal = shouldUseLocalAuth()
    setAuthType(useLocal ? 'local' : 'clerk')
    
    // Check if already logged in
    if (useLocal && localAuth.isSignedIn()) {
      router.push('/dashboard')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})
    setSuccess('')

    // Client-side validation
    const newErrors: {email?: string, password?: string, general?: string} = {}
    
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      if (authType === 'local') {
        console.log('🔧 Attempting authentication...')
        
        // First check if user is registered
        const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '{}')
        const userExists = registeredUsers[email.toLowerCase().trim()]
        
        if (userExists && userExists.password === password) {
          // Real user authentication
          const result = await localAuth.signIn(email, password)
          
          if (result.success) {
            setSuccess('Login successful! Redirecting to dashboard...')
            setTimeout(() => {
              router.push('/dashboard')
            }, 1000)
          } else {
            setErrors({ general: result.error || 'Login failed' })
          }
        } else if (email === 'demo@test.com' && password === 'password123') {
          // Demo account fallback
          const result = await localAuth.signIn(email, password)
          if (result.success) {
            setSuccess('Demo login successful! Redirecting...')
            setTimeout(() => {
              router.push('/dashboard')
            }, 1000)
          }
        } else {
          setErrors({ 
            general: 'Invalid email or password. Please register first or use demo@test.com / password123' 
          })
        }
      } else {
        setErrors({ general: 'Clerk authentication not properly configured. Using local auth fallback.' })
        // Fallback to local auth
        const result = await localAuth.signIn(email, password)
        if (result.success) {
          router.push('/dashboard')
        }
      }
    } catch (err: any) {
      console.error('Authentication error:', err)
      setErrors({ 
        general: 'An unexpected error occurred. Please try again.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Auth Type Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            {authType === 'local' ? '🔧 Local Authentication' : '🔐 Clerk Authentication'}
          </div>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to your CareerPath AI account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Success Message */}
            {success && (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  {success}
                </AlertDescription>
              </Alert>
            )}

            {/* Error Messages */}
            {errors.general && (
              <Alert className="bg-red-50 border-red-200">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  {errors.general}
                </AlertDescription>
              </Alert>
            )}

            {/* Demo Credentials for Local Auth */}
            {authType === 'local' && (
              <Alert className="bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  <strong>Demo Mode:</strong> Use any email and password (6+ characters) to test the app.
                  <br />
                  <span className="text-xs">Example: demo@test.com / password123</span>
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-12 ${errors.email ? 'border-red-500' : ''}`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`h-12 pr-12 ${errors.password ? 'border-red-500' : ''}`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="text-center space-y-4">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link href="/sign-up" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up here
                </Link>
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <Link href="/" className="hover:text-gray-700">← Back to Home</Link>
                <span>•</span>
                <Link href="/auth-test" className="hover:text-gray-700">Test Auth</Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Eye, EyeOff, Zap, UserPlus, Mail, Lock, User } from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { localAuth } from '@/lib/local-auth'

export default function RealSignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const { isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    // Redirect if already signed in
    if (isSignedIn) {
      router.push('/dashboard')
    }
  }, [isSignedIn, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    } else {
      // Check if user exists - we'll handle this in the signup method
      // newErrors.email = 'An account with this email already exists'
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password should contain uppercase, lowercase, or numbers'
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})
    setSuccess('')

    // Validate form
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setIsLoading(false)
      return
    }

    try {
      // Register user
      const result = await localAuth.signUp(
        formData.email.toLowerCase().trim(),
        formData.password,
        formData.name.trim()
      )

      if (result.success) {
        setSuccess('Account created successfully! Redirecting to dashboard...')
        setFormData({ name: '', email: '', password: '', confirmPassword: '' })
        
        // Redirect to dashboard after 2 seconds since user is auto-signed in
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      } else {
        setErrors({ general: result.error || 'Registration failed' })
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const userCount = localAuth.getAllUsers().length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="flex justify-center mb-6 group">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-200 shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
          <p className="text-gray-600">Join CareerPath AI to accelerate your career</p>
          {userCount > 0 && (
            <p className="text-sm text-blue-600 mt-2">Join {userCount} other users already on their career journey!</p>
          )}
        </div>

        {/* Success Message */}
        {success && (
          <Alert className="border-green-200 bg-green-50">
            <UserPlus className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">
              {success}
            </AlertDescription>
          </Alert>
        )}

        {/* General Error */}
        {errors.general && (
          <Alert className="border-red-200 bg-red-50">
            <AlertDescription className="text-red-700">
              {errors.general}
            </AlertDescription>
          </Alert>
        )}

        {/* Registration Form */}
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-lg">Sign up for free</CardTitle>
            <CardDescription>
              Already have an account?{' '}
              <Link href="/login-enhanced" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign in
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`pl-10 ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className={`pl-10 pr-10 ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                {!errors.password && formData.password && (
                  <p className="mt-1 text-xs text-gray-500">
                    Use 6+ characters with uppercase, lowercase, or numbers
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Create Account
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By creating an account, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="text-center space-y-2">
          <Link href="/login-enhanced" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
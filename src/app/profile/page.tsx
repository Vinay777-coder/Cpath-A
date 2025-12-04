'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { User, ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { getUserProfile, updateUserProfile, createUserProfile } from '@/lib/database'
import type { UserProfile } from '@/lib/database'

interface ProfileFormData {
  full_name: string
  job_title: string
  company: string
  location: string
  bio: string
  skills: string
  goals: string
}

export default function ProfilePage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [formData, setFormData] = useState<ProfileFormData>({
    full_name: '',
    job_title: '',
    company: '',
    location: '',
    bio: '',
    skills: '',
    goals: ''
  })
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProfile() {
      if (!user) return

      try {
        const userProfile = await getUserProfile(user.id)
        if (userProfile) {
          setProfile(userProfile)
          setFormData({
            full_name: userProfile.full_name || '',
            job_title: userProfile.job_title || '',
            company: userProfile.company || '',
            location: userProfile.location || '',
            bio: userProfile.bio || '',
            skills: userProfile.skills?.join(', ') || '',
            goals: userProfile.goals || ''
          })
        }
      } catch (error) {
        console.error('Error loading profile:', error)
      } finally {
        setLoading(false)
      }
    }

    if (isLoaded && user) {
      loadProfile()
    } else if (isLoaded && !user) {
      setLoading(false)
    }
  }, [user, isLoaded])

  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    if (!user) return

    setSaving(true)
    try {
      const profileData = {
        clerk_user_id: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        full_name: formData.full_name,
        job_title: formData.job_title,
        company: formData.company,
        location: formData.location,
        bio: formData.bio,
        skills: formData.skills.split(',').map(s => s.trim()).filter(s => s),
        goals: formData.goals,
        avatar_url: user.imageUrl
      }

      if (profile) {
        await updateUserProfile(user.id, profileData)
      } else {
        await createUserProfile(profileData)
      }

      alert('Profile saved successfully!')
    } catch (error) {
      console.error('Error saving profile:', error)
      alert('Error saving profile. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Authentication Required</h2>
            <p className="text-gray-600 mb-4">Please sign in to view your profile.</p>
            <Link href="/login">
              <Button className="w-full">Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/dashboard">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Info Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Account Information
              </CardTitle>
              <CardDescription>
                Your basic account details from Clerk
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">User ID</label>
                <Input value={user.id} disabled className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input value={user.emailAddresses[0]?.emailAddress || ''} disabled className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <Input value={user.firstName || ''} disabled className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <Input value={user.lastName || ''} disabled className="mt-1" />
              </div>
            </CardContent>
          </Card>

          {/* Profile Picture */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>
                Managed through your Clerk account
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              {user.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
              ) : (
                <User className="w-24 h-24 text-gray-400 mx-auto mb-4" />
              )}
              <p className="text-sm text-gray-600">
                Update your profile picture in your Clerk account settings
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Extended Profile */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Extended Profile</CardTitle>
            <CardDescription>
              Additional information to enhance your career profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <Input
                value={formData.full_name}
                onChange={(e) => handleInputChange('full_name', e.target.value)}
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Job Title</label>
                <Input
                  value={formData.job_title}
                  onChange={(e) => handleInputChange('job_title', e.target.value)}
                  placeholder="e.g., Software Engineer"
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Company</label>
                <Input
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="e.g., Microsoft"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Location</label>
              <Input
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="e.g., San Francisco, CA"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Tell us about yourself..."
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Skills</label>
              <Input
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                placeholder="e.g., JavaScript, Python, React (comma-separated)"
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">Enter skills separated by commas</p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Career Goals</label>
              <textarea
                value={formData.goals}
                onChange={(e) => handleInputChange('goals', e.target.value)}
                placeholder="What are your career aspirations?"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
            </div>

            <Button
              onClick={handleSave}
              disabled={saving}
              className="w-full md:w-auto"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Profile
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
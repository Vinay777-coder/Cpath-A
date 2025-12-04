'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { localAuth } from '@/lib/local-auth'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Settings, User, Bell, Shield,
  Globe, Database, Trash2,
  Eye, EyeOff, Mail, Phone, MapPin, Calendar,
  Save, X, Check,
  Key, Lock, AlertTriangle
} from 'lucide-react'

export default function SettingsPage() {
  const router = useRouter()
  const user = localAuth.getCurrentUser()
  
  // State for different settings
  const [activeTab, setActiveTab] = useState('profile')
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    projectUpdates: true,
    marketingEmails: false,
    weeklyDigest: true
  })
  
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    activityStatus: true,
    dataSharing: false,
    analyticsTracking: true
  })
  
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    location: '',
    bio: '',
    website: '',
    linkedin: '',
    github: ''
  })
  
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [savedMessage, setSavedMessage] = useState('')

  const settingsTabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'data', label: 'Data Management', icon: Database }
  ]

  const handleSave = (section: string) => {
    // Simulate saving
    setSavedMessage(`${section} settings saved successfully!`)
    setTimeout(() => setSavedMessage(''), 3000)
  }

  const handleDeleteAccount = () => {
    // This would typically involve API calls to delete user data
    alert('Account deletion would be processed. This is a demo.')
    setShowDeleteConfirm(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-indigo-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="bg-white/60 border-indigo-200 hover:bg-indigo-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                  <p className="text-sm text-gray-600">Manage your account preferences and privacy</p>
                </div>
              </div>
            </div>
            {savedMessage && (
              <div className="flex items-center bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                <Check className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm text-green-700">{savedMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Settings</h3>
              <nav className="space-y-2">
                {settingsTabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors text-left ${
                        activeTab === tab.id
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
              
              {/* Profile Settings */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
                    <p className="text-gray-600">Update your personal information and public profile.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                      <input
                        type="url"
                        value={profileData.linkedin}
                        onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      onClick={() => handleSave('Profile')}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-800">Notification Preferences</h2>
                    <p className="text-gray-600">Choose how you want to be notified about updates and activities.</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { key: 'email', label: 'Email Notifications', description: 'Receive important updates via email' },
                      { key: 'push', label: 'Push Notifications', description: 'Get browser notifications for real-time updates' },
                      { key: 'projectUpdates', label: 'Project Updates', description: 'Notifications about new projects and features' },
                      { key: 'marketingEmails', label: 'Marketing Emails', description: 'Promotional content and product announcements' },
                      { key: 'weeklyDigest', label: 'Weekly Digest', description: 'Summary of your activity and recommendations' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">{item.label}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <button
                          onClick={() => setNotifications({
                            ...notifications,
                            [item.key]: !notifications[item.key as keyof typeof notifications]
                          })}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications[item.key as keyof typeof notifications] ? 'bg-indigo-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications[item.key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      onClick={() => handleSave('Notification')}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              )}

              {/* Privacy & Security Settings */}
              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-800">Privacy & Security</h2>
                    <p className="text-gray-600">Control your privacy settings and account security.</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Visibility</h3>
                      <div className="space-y-3">
                        {[
                          { value: 'public', label: 'Public', description: 'Anyone can see your profile' },
                          { value: 'connections', label: 'Connections Only', description: 'Only your connections can see your profile' },
                          { value: 'private', label: 'Private', description: 'Your profile is hidden from others' }
                        ].map((option) => (
                          <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="profileVisibility"
                              value={option.value}
                              checked={privacy.profileVisibility === option.value}
                              onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
                              className="mt-1 text-indigo-600"
                            />
                            <div>
                              <div className="font-medium text-gray-800">{option.label}</div>
                              <div className="text-sm text-gray-600">{option.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { key: 'activityStatus', label: 'Show Activity Status', description: 'Let others see when you\'re online' },
                        { key: 'dataSharing', label: 'Data Sharing', description: 'Share anonymized data for product improvement' },
                        { key: 'analyticsTracking', label: 'Analytics Tracking', description: 'Help us improve with usage analytics' }
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-800">{item.label}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <button
                            onClick={() => setPrivacy({
                              ...privacy,
                              [item.key]: !privacy[item.key as keyof typeof privacy]
                            })}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              privacy[item.key as keyof typeof privacy] ? 'bg-indigo-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                privacy[item.key as keyof typeof privacy] ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <Key className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-yellow-800">Password Security</h4>
                          <p className="text-sm text-yellow-700 mt-1">
                            Your password was last updated 30 days ago. Consider updating it regularly for better security.
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-3 border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                          >
                            Change Password
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      onClick={() => handleSave('Privacy')}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Settings
                    </Button>
                  </div>
                </div>
              )}

              {/* Data Management Settings */}
              {activeTab === 'data' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-800">Data Management</h2>
                    <p className="text-gray-600">Manage your account and data deletion.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-red-800">Delete Account</h4>
                          <p className="text-sm text-red-700 mt-1">
                            Permanently delete your account and all associated data. This action cannot be undone.
                          </p>
                          <Button 
                            onClick={() => setShowDeleteConfirm(true)}
                            variant="outline" 
                            size="sm" 
                            className="mt-3 border-red-300 text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-lg font-bold text-gray-800">Delete Account</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete your account? This will permanently remove all your data, 
              including profile information, project progress, and settings. This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <Button 
                onClick={() => setShowDeleteConfirm(false)}
                variant="outline"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleDeleteAccount}
                className="bg-red-600 hover:bg-red-700"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
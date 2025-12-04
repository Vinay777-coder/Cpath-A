'use client'

import { useState } from 'react'
import { 
  ArrowLeft,
  FileText,
  Brain,
  Palette,
  BarChart3,
  Target,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  Star,
  Users,
  DollarSign,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'
import Link from 'next/link'

export default function ResumeHubPage() {
  
  const enhancedFeatures = [
    {
      title: 'Enhanced Resume Analysis',
      description: 'AI-powered analysis with 6-tab interface, superior to ResumeMax.ai',
      href: '/resume/enhanced-analysis',
      icon: Brain,
      color: 'from-blue-600 to-purple-600',
      features: ['Multi-dimensional scoring', 'Market insights', 'No auth required'],
      badge: 'Most Popular'
    },
    {
      title: 'ATS Resume Builder',
      description: 'Step-by-step builder with real-time ATS optimization',
      href: '/resume/builder',
      icon: FileText,
      color: 'from-green-600 to-teal-600',
      features: ['Real-time scoring', 'AI suggestions', '7-step wizard'],
      badge: 'New'
    },
    {
      title: 'Resume Templates',
      description: '6 professional, ATS-optimized templates for different industries',
      href: '/resume/templates',
      icon: Palette,
      color: 'from-purple-600 to-pink-600',
      features: ['Industry-specific', 'ATS scores', 'Easy customization']
    },
    {
      title: 'Resume Dashboard',
      description: 'Manage multiple resumes and track application success',
      href: '/resume/dashboard',
      icon: BarChart3,
      color: 'from-orange-600 to-red-600',
      features: ['Analytics', 'Application tracking', 'Performance insights']
    },
    {
      title: 'Resume Tailoring',
      description: 'Optimize your resume for specific job descriptions with AI',
      href: '/resume/tailoring',
      icon: Target,
      color: 'from-cyan-600 to-blue-600',
      features: ['Job matching', 'Keyword optimization', 'Gap analysis']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Dashboard
                </button>
              </Link>
              <div className="h-6 border-l border-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Resume Hub
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Sparkles className="w-4 h-4" />
              <span>5 Powerful Tools</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-sm font-medium text-blue-800 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW: AI-Powered Resume Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Resume Platform
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Better than ResumeMax.ai
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive AI-powered suite for resume analysis, building, optimization, and job matching. 
            No authentication required for core features.
          </p>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5</div>
              <div className="text-sm text-gray-600">AI Tools</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">3.7x</div>
              <div className="text-sm text-gray-600">Better ATS Scores</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Free Core Features</div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {enhancedFeatures.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 group relative"
            >
              {feature.badge && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {feature.badge}
                </div>
              )}
              
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {feature.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                <span>Try Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Comparison Banner */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform Over ResumeMax.ai?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Target className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">More Comprehensive</h3>
              <p className="text-sm text-green-100">5 advanced tools vs their 3 basic ones</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Zap className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Better Technology</h3>
              <p className="text-sm text-green-100">Advanced AI with real-time optimization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Heart className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Superior Experience</h3>
              <p className="text-sm text-green-100">Modern UI and no authentication barriers</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get Started Now</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/resume/enhanced-analysis"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <Brain className="w-5 h-5" />
              <span>Analyze Resume (No Auth)</span>
            </Link>
            <Link
              href="/resume/builder"
              className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all flex items-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>Build New Resume</span>
            </Link>
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            No account required • Free core features • Instant results
          </p>
        </div>

        {/* Features Overview */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Platform Features at a Glance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Authentication</h3>
              <p className="text-sm text-gray-600">Start analyzing resumes immediately without creating an account</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">15-Second Analysis</h3>
              <p className="text-sm text-gray-600">Get comprehensive resume feedback in under 15 seconds</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ATS Optimized</h3>
              <p className="text-sm text-gray-600">All tools designed for maximum ATS compatibility</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Career Integration</h3>
              <p className="text-sm text-gray-600">Connected to 50+ career guides and roadmaps</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
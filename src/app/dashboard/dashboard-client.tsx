'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { localAuth } from '@/lib/local-auth'
import { roadmapsDatabase } from '@/lib/roadmaps-data'
import { useTheme } from '@/contexts/theme-context'
import { Button } from '@/components/ui/button'
import { 
  User, LogOut, Target, MessageSquare, FileText, Award,
  BarChart3, Settings, Home, Lightbulb,
  ArrowUpRight, Clock, Star, ChevronRight, BookOpen,
  Code, Smartphone, Database, Brain, Server,
  Palette, Shield, TrendingUp, Globe, Cpu, Monitor,
  Building, Heart
} from 'lucide-react'
import Link from 'next/link'

interface DashboardClientProps {
  user?: any
}

export function DashboardClient({ user }: DashboardClientProps) {
  const router = useRouter()
  const { currentTheme } = useTheme()

  // Category icons mapping
  const categoryIcons = {
    'Web Development': Code,
    'Mobile Development': Smartphone,
    'Data Science': Brain,
    'DevOps': Server,
    'Database': Database,
    'Design': Palette,
    'Cyber Security': Shield,
    'AI/ML': Brain,
    'Blockchain': TrendingUp,
    'Game Development': Monitor,
    'Cloud Computing': Globe,
    'System Design': Cpu,
  } as const

  // Difficulty color mapping
  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800 border-green-200',
    'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Advanced': 'bg-red-100 text-red-800 border-red-200',
  } as const

  // Sidebar navigation items
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard', active: true },
    { icon: FileText, label: 'Resume', href: '/resume' },
    { icon: MessageSquare, label: 'AI Assistant', href: '/chat' },
    { icon: Target, label: 'Roadmaps', href: '/roadmaps' },
    { icon: TrendingUp, label: 'Career Suggestions', href: '/career' },
    { icon: BookOpen, label: 'Enhanced Guides', href: '/guides' },
    { icon: Lightbulb, label: 'Project Ideas', href: '/projects' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  // Advanced Project Ideas - 8 carefully selected advanced projects
  const projectIdeas = [
    { id: 40, title: 'E-Commerce Website', category: 'Full Stack', level: 'Advanced', domain: 'E-commerce', icon: Building, description: 'Develop a full-featured e-commerce platform with payment integration and order management.', startedCount: 8920 },
    { id: 39, title: 'Movie Recommendation System', category: 'AI/ML', level: 'Advanced', domain: 'Entertainment', icon: Brain, description: 'Build an ML-powered system that provides personalized movie recommendations based on user preferences.', startedCount: 6780 },
    { id: 38, title: 'Hospital Management System', category: 'Full Stack', level: 'Advanced', domain: 'Healthcare', icon: Heart, description: 'Create a comprehensive healthcare management system with EHR, appointments, and billing.', startedCount: 5210 },
    { id: 43, title: 'AI-Powered Virtual Assistant', category: 'AI/ML', level: 'Advanced', domain: 'Virtual Assistance', icon: Brain, description: 'Develop a virtual assistant using AI to understand queries, perform tasks, and provide information.', startedCount: 3890 },
    { id: 41, title: 'Bank Management System', category: 'Full Stack', level: 'Advanced', domain: 'Banking', icon: Shield, description: 'Create a comprehensive banking system with account management, transactions, and loan processing.', startedCount: 4230 },
    { id: 37, title: 'Face Detection System', category: 'AI/ML', level: 'Advanced', domain: 'Security', icon: Shield, description: 'Develop a computer vision system for accurate face detection and identity verification.', startedCount: 4670 },
    { id: 45, title: 'Project Management System', category: 'Full Stack', level: 'Advanced', domain: 'Project Management', icon: Target, description: 'Build a comprehensive project management platform with planning, execution, and team collaboration.', startedCount: 5120 },
    { id: 49, title: 'Stock Prediction Using ML', category: 'AI/ML', level: 'Advanced', domain: 'Finance', icon: TrendingUp, description: 'Develop a machine learning system for stock price prediction and investment decision support.', startedCount: 4320 }
  ]

  // Get top 6 featured roadmaps for grid display
  const featuredRoadmaps = roadmapsDatabase
    .filter(roadmap => roadmap.featured)
    .sort((a, b) => (b.popularity_score || 0) - (a.popularity_score || 0))
    .slice(0, 6)

  const handleSignOut = () => {
    localAuth.signOut()
    router.push('/login')
  }

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.background} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Glassmorphism Sidebar */}
        <div className={`w-64 ${currentTheme.surface} backdrop-blur-xl border-r border-white/20 flex flex-col shadow-2xl`}>
          {/* Logo Section */}
          <div className="p-6 border-b border-white/20">
            <Link href="/dashboard" className="block hover:opacity-80 transition-opacity">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CareerPath AI
              </h2>
              <p className={`text-sm ${currentTheme.textMuted} mt-1`}>Your AI Career Mentor</p>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 mt-6 px-4">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                    item.active
                      ? `bg-gradient-to-r ${currentTheme.secondary} ${currentTheme.text} border border-white/30`
                      : `${currentTheme.textSecondary} hover:bg-white/60 hover:${currentTheme.text}`
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-white/20 mt-auto">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${currentTheme.text} truncate`}>
                  {user?.name || user?.email?.split('@')[0] || 'User'}
                </p>
                <p className={`text-xs ${currentTheme.textMuted} truncate`}>
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors border border-red-200/50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="bg-white/60 backdrop-blur-xl border-b border-white/20 px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className={`text-xl font-bold ${currentTheme.text}`}>Dashboard</h1>
                <p className={`text-sm ${currentTheme.textSecondary}`}>CareerPath AI Analytics Overview</p>
              </div>
              
              {/* User Avatar */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                  {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <span className={`text-sm font-medium ${currentTheme.text}`}>
                  {user?.name || user?.email?.split('@')[0] || 'User'}
                </span>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 p-6 overflow-auto">
            {/* Welcome Message */}
            <div className="mb-8">
              <h2 className={`text-xl font-semibold ${currentTheme.text} mb-2`}>
                Welcome back, {user?.name || user?.email?.split('@')[0] || 'User'}! 
              </h2>
              <p className={`${currentTheme.textSecondary}`}>Here's what's happening with your career journey today.</p>
            </div>

            {/* Enhanced Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Link href="/resume" className="group">
                <div className={`bg-gradient-to-br ${currentTheme.secondary} rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.primary} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold ${currentTheme.text} mb-2`}>Resume Analysis</h3>
                  <p className={`${currentTheme.textSecondary} text-sm mb-4`}>Get AI-powered analysis and improvement suggestions</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/chat" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">AI Assistant</h3>
                  <p className="text-gray-600 text-sm mb-4">Get personalized career guidance from our AI mentor</p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <span>Start Conversation</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/roadmaps" className="group">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Explore Roadmaps</h3>
                  <p className="text-gray-600 text-sm mb-4">Discover structured learning paths for your career goals</p>
                  <div className="flex items-center text-emerald-600 font-medium">
                    <span>View Roadmaps</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Featured Roadmaps Grid */}
            <div className={`${currentTheme.surface} backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <h3 className={`text-xl font-bold ${currentTheme.text}`}>Featured Roadmaps</h3>
                </div>
                <Link href="/roadmaps">
                  <Button variant="outline" size="sm" className="bg-white/50 border-white/30 hover:bg-white/70">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredRoadmaps.map((roadmap) => {
                  const IconComponent = categoryIcons[roadmap.category as keyof typeof categoryIcons] || Code
                  return (
                    <Link key={roadmap.id} href={`/roadmaps/${roadmap.id}`}>
                      <div className="bg-white/80 rounded-xl p-4 hover:bg-white/90 transition-all duration-300 border border-white/40 group cursor-pointer hover:shadow-lg hover:-translate-y-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-800 text-sm line-clamp-1 group-hover:text-blue-600 transition-colors">
                              {roadmap.title}
                            </h4>
                            <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border mt-1 ${difficultyColors[roadmap.difficulty]}`}>
                              {roadmap.difficulty}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                          {roadmap.description}
                        </p>
                        
                        {/* Stats */}
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{roadmap.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            <span>{roadmap.steps.length} steps</span>
                          </div>
                        </div>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-1">
                          {roadmap.primary_skills.slice(0, 3).map((skill, index) => (
                            <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                          {roadmap.primary_skills.length > 3 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              +{roadmap.primary_skills.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Project Ideas Section */}
            <div id="projects" className={`${currentTheme.surface} backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl mt-8`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-6 h-6 text-orange-500 fill-current" />
                  <h3 className={`text-xl font-bold ${currentTheme.text}`}>Project Ideas</h3>
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">50 Projects</span>
                </div>
                <Link href="/projects">
                  <Button variant="outline" size="sm" className="bg-white/50 border-white/30 hover:bg-white/70">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
              
              <p className="text-gray-600 mb-6">
                Discover advanced project ideas to build your portfolio and enhance your skills. Each project includes detailed requirements, tech stack suggestions, and difficulty levels.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projectIdeas.slice(0, 8).map((project) => {
                  const IconComponent = project.icon
                  const levelColors = {
                    'Beginner': 'bg-green-100 text-green-800 border-green-200',
                    'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
                    'Advanced': 'bg-red-100 text-red-800 border-red-200',
                  }
                  
                  return (
                    <div key={project.id} className="bg-white/90 rounded-xl p-4 hover:bg-white transition-all duration-300 border border-white/60 group cursor-pointer hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-orange-600 transition-colors mb-1">
                            {project.title}
                          </h4>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {project.category}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full border ${levelColors[project.level as keyof typeof levelColors]}`}>
                              {project.level}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-xs mb-3 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Domain & Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span className="font-medium text-gray-700">{project.domain}</span>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{project.startedCount.toLocaleString()} started</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* View All Projects Button */}
              <div className="text-center mt-6">
                <Link href="/projects">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6">
                    View All Projects <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Two-Column Layout for Career Guidance and ResumeX */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Career Suggestions Showcase */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-blue-500 fill-current" />
                    <h3 className="text-xl font-bold text-gray-800">Career Guidance</h3>
                  </div>
                  <Link href="/career">
                    <Button variant="outline" size="sm" className="bg-white/50 border-white/30 hover:bg-white/70">
                      Get Suggestions <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {/* Interactive Career Wizard */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Suggestions</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Take our interactive assessment to discover personalized career paths.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">25+ Interests</span>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">40+ Skills</span>
                        </div>
                        <Link href="/career">
                          <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                            Start Assessment
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Career Doubts Library */}
                  <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl p-4 border border-emerald-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Career Doubts Resolved</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Browse through 50+ most asked questions about tech careers.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">50+ Questions</span>
                          <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">Expert Answers</span>
                        </div>
                        <Link href="/career">
                          <Button size="sm" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                            Browse Doubts
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">What You'll Get:</h5>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Personalized career recommendations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">Salary insights & job market trends</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Learning roadmaps & resources</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ResumeX Showcase */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-orange-500 fill-current" />
                    <h3 className="text-xl font-bold text-gray-800">ResumeX</h3>
                  </div>
                  <Link href="/resume">
                    <Button variant="outline" size="sm" className="bg-white/50 border-white/30 hover:bg-white/70">
                      Analyze Resume <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {/* ATS Score Analysis */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">ATS Score & Analysis</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Get detailed ATS compatibility score with section-wise breakdown.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">ATS Score</span>
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Section Analysis</span>
                        </div>
                        <Link href="/resume/rate">
                          <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                            Check ATS Score
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* AI Recommendations */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Actionable Recommendations</h4>
                        <p className="text-gray-600 text-sm mb-3">
                          Get AI-powered improvement suggestions with priority rankings.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">AI-Powered</span>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Priority-Based</span>
                        </div>
                        <Link href="/resume">
                          <Button size="sm" variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
                            Get Recommendations
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ResumeX Features */}
                <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl border border-orange-200">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">ResumeX Features:</h5>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Real-time ATS compatibility scoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600">Detailed section-wise analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">AI-powered actionable recommendations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jarvis AI Assistant Showcase */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl mt-8 overflow-hidden relative">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-purple-50/50 rounded-2xl"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        Meet Jarvis AI Assistant
                      </h3>
                      <p className="text-gray-600 text-sm">Your 24/7 intelligent career companion</p>
                    </div>
                  </div>
                  <Link href="/chat">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
                      Start Conversation <MessageSquare className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 items-center">
                  {/* Features and Actions */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Intelligent Career Guidance</h4>
                      <p className="text-gray-600 mb-6">
                        Jarvis uses advanced AI to provide personalized career advice, industry insights, and strategic guidance tailored to your unique goals and experience.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {/* Feature Cards */}
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">Real-time Chat Support</h5>
                            <p className="text-sm text-gray-600">Get instant answers to your career questions</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">Smart Recommendations</h5>
                            <p className="text-sm text-gray-600">AI-powered insights for career growth</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                            <Target className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">Goal Tracking</h5>
                            <p className="text-sm text-gray-600">Monitor progress and achieve milestones</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Link href="/chat" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                          Chat with Jarvis
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
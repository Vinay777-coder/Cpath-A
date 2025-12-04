'use client'

import { useState } from 'react'
import { 
  CheckCircle, 
  Star, 
  TrendingUp,
  FileText,
  Zap,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
  const [selectedTool, setSelectedTool] = useState<'create' | 'rate' | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/resume" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ResumeX</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </a>
                <a href="#tools" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Dashboard Button - Next to logo area */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/dashboard">
              <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-50 h-9 px-3 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Maximize Your Resume's
              <span className="block text-purple-600">Potential</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get instant, AI-powered feedback on your resume. Discover what recruiters are 
              looking for and optimize your resume to land more interviews.
            </p>
            <Link href="/resume/rate" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See ResumeX in Action
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Watch how our AI-powered resume analysis can improve your career prospects
            </p>
            <Link href="/resume/rate" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Analyze Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose ResumeX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI technology provides comprehensive analysis to help you create a resume that stands out from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Get detailed insights on your resume's strengths and weaknesses with advanced AI technology.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Results</h3>
              <p className="text-gray-600">
                Receive comprehensive feedback and scoring within seconds of uploading your resume.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Recommendations</h3>
              <p className="text-gray-600">
                Get specific suggestions to improve your resume and increase your chances of landing interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Resume Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload your resume and get detailed AI-powered analysis with ATS scoring and improvement suggestions.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {/* Black border container */}
            <div className="p-1 bg-black rounded-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Resume Analysis</h3>
                  <p className="text-gray-600 mb-6">
                    Get comprehensive feedback on your resume with ATS scoring, keyword analysis, and improvement suggestions.
                  </p>
                  <div className="flex items-center justify-center space-x-6 mb-8 text-sm text-gray-500">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                      ATS Score
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                      Keyword Analysis
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                      Improvement Tips
                    </div>
                  </div>
                  {/* Enhanced gradient button */}
                  <Link 
                    href="/resume/rate"
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <FileText className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">Analyze Your Resume</span>
                    <svg className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
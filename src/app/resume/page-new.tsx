'use client'

import { 
  CheckCircle, 
  Star, 
  TrendingUp,
  FileText,
  Zap,
  ArrowRight,
  Target,
  BarChart3,
  Users,
  Trophy,
  Sparkles,
  Brain,
  Clock,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ResumeX</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                  Features
                </a>
                <a href="#tools" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                  Tools
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/resume/rate" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Try Free Analysis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Resume Analysis
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Maximize Your Resume's
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Potential
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant, AI-powered feedback on your resume. Discover what recruiters are looking for and optimize your resume to land more interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/resume/rate" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="text-gray-600 font-medium flex items-center hover:text-purple-600 transition-colors">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Resumes Analyzed</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">&lt; 30s</div>
              <div className="text-gray-600">Analysis Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose ResumeX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI technology provides comprehensive analysis to help you create a resume that stands out from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Get detailed insights on your resume's strengths and weaknesses with advanced AI technology powered by ChatGPT.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive comprehensive feedback and scoring within seconds of uploading your resume. No waiting required.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Actionable Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                Get specific suggestions to improve your resume and increase your chances of landing interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="tools" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Resume Tool
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Upload your resume and get detailed AI-powered analysis with ATS scoring and improvement suggestions.
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="flex items-center space-x-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span>ATS Score Analysis</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span>Keyword Optimization</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span>Career Suggestions</span>
                </div>
              </div>
              
              <Link 
                href="/resume/rate"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-200 inline-flex items-center group"
              >
                <FileText className="w-5 h-5 mr-2" />
                Analyze Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <BarChart3 className="w-8 h-8 text-white mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Detailed Scoring</h4>
                <p className="text-purple-100 text-sm">Get comprehensive ATS compatibility scores and section-by-section analysis.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-white mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Improvement Tips</h4>
                <p className="text-purple-100 text-sm">Receive specific, actionable recommendations to enhance your resume.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="w-8 h-8 text-white mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Privacy First</h4>
                <p className="text-purple-100 text-sm">Your resume data is processed securely and never stored permanently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ResumeX</span>
            </div>
            <p className="text-gray-400 mb-6">Maximize your career potential with AI-powered resume analysis</p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
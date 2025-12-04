'use client'

import { useState } from 'react'
import { 
  ArrowLeft,
  Target,
  Search,
  Upload,
  Zap,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Eye,
  Download,
  Sparkles,
  Brain,
  Award,
  BarChart3,
  MapPin,
  DollarSign,
  Users,
  Building,
  Calendar,
  ExternalLink,
  Plus,
  Edit3,
  Copy,
  Share2,
  Bookmark,
  ArrowRight,
  FileText,
  Code,
  Star,
  Lightbulb,
  RefreshCw
} from 'lucide-react'
import Link from 'next/link'

interface JobAnalysis {
  title: string
  company: string
  location: string
  salary_range?: string
  keywords: {
    required: { keyword: string; category: string; importance: 'critical' | 'high' | 'medium' }[]
    preferred: { keyword: string; category: string; importance: 'high' | 'medium' | 'low' }[]
    missing_from_resume: { keyword: string; category: string; suggestion: string }[]
  }
  match_score: number
  recommendations: {
    immediate: { action: string; impact: string; time: string }[]
    content: { section: string; suggestion: string; example: string }[]
    formatting: { issue: string; fix: string; importance: string }[]
  }
}

export default function ResumeTailoringPage() {
  const [step, setStep] = useState<'input' | 'analyzing' | 'results'>('input')
  const [jobDescription, setJobDescription] = useState('')
  const [jobUrl, setJobUrl] = useState('')
  const [selectedResume, setSelectedResume] = useState('')
  const [analysis, setAnalysis] = useState<JobAnalysis | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  const handleAnalyze = async () => {
    setStep('analyzing')
    
    // Simulate analysis
    setTimeout(() => {
      setAnalysis({
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        salary_range: '$120,000 - $150,000',
        keywords: {
          required: [
            { keyword: 'React', category: 'Frontend Framework', importance: 'critical' },
            { keyword: 'TypeScript', category: 'Programming Language', importance: 'critical' },
            { keyword: 'Node.js', category: 'Backend Technology', importance: 'high' },
            { keyword: 'GraphQL', category: 'API Technology', importance: 'high' },
            { keyword: 'AWS', category: 'Cloud Platform', importance: 'medium' }
          ],
          preferred: [
            { keyword: 'Next.js', category: 'Frontend Framework', importance: 'high' },
            { keyword: 'Docker', category: 'DevOps Tool', importance: 'medium' },
            { keyword: 'Jest', category: 'Testing Framework', importance: 'medium' },
            { keyword: 'Figma', category: 'Design Tool', importance: 'low' }
          ],
          missing_from_resume: [
            { keyword: 'TypeScript', category: 'Programming Language', suggestion: 'Add to technical skills and mention in project descriptions' },
            { keyword: 'GraphQL', category: 'API Technology', suggestion: 'Include in a project example or skills section' },
            { keyword: 'Next.js', category: 'Frontend Framework', suggestion: 'Highlight in recent project experience' }
          ]
        },
        match_score: 78,
        recommendations: {
          immediate: [
            { action: 'Add TypeScript to technical skills', impact: 'High', time: '2 minutes' },
            { action: 'Include GraphQL experience', impact: 'High', time: '5 minutes' },
            { action: 'Mention Next.js in project descriptions', impact: 'Medium', time: '10 minutes' }
          ],
          content: [
            { 
              section: 'Professional Summary', 
              suggestion: 'Add "5+ years of React and TypeScript development"', 
              example: 'Senior Frontend Developer with 5+ years building scalable React applications using TypeScript...' 
            },
            { 
              section: 'Technical Skills', 
              suggestion: 'Reorganize to highlight React, TypeScript, and Node.js first', 
              example: 'Frontend: React, TypeScript, Next.js, JavaScript, HTML5, CSS3' 
            },
            { 
              section: 'Experience', 
              suggestion: 'Add GraphQL project example in recent role', 
              example: '• Built GraphQL API integration serving 50K+ daily users, improving data fetching efficiency by 40%' 
            }
          ],
          formatting: [
            { issue: 'Missing LinkedIn URL', fix: 'Add LinkedIn profile to contact section', importance: 'Medium' },
            { issue: 'Experience bullets too generic', fix: 'Quantify achievements with specific metrics', importance: 'High' },
            { issue: 'Skills section not optimized', fix: 'Group skills by category and relevance', importance: 'Medium' }
          ]
        }
      })
      setStep('results')
    }, 3000)
  }

  const mockResumes = [
    { id: 'resume1', name: 'Frontend Developer - John Doe.pdf', lastModified: '2025-10-15' },
    { id: 'resume2', name: 'Full Stack Developer - John Doe.pdf', lastModified: '2025-10-10' },
    { id: 'resume3', name: 'Software Engineer - John Doe.pdf', lastModified: '2025-09-25' }
  ]

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100'
    if (score >= 70) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical': return 'text-red-700 bg-red-100'
      case 'high': return 'text-orange-700 bg-orange-100'
      case 'medium': return 'text-yellow-700 bg-yellow-100'
      case 'low': return 'text-blue-700 bg-blue-100'
      default: return 'text-gray-700 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/resume" 
                className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Resume Hub
              </Link>
              <div className="h-6 border-l border-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <Target className="w-6 h-6 mr-3 text-orange-600" />
                Resume Tailoring System
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Job Matching</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Input Step */}
        {step === 'input' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tailor Your Resume to Any Job
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI analyzes job descriptions and optimizes your resume for maximum ATS compatibility and recruiter appeal.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="space-y-8">
                
                {/* Job Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Search className="w-5 h-5 mr-2 text-orange-600" />
                    Job Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Posting URL (optional)
                      </label>
                      <input
                        type="url"
                        value={jobUrl}
                        onChange={(e) => setJobUrl(e.target.value)}
                        placeholder="https://company.com/jobs/frontend-developer"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">We'll automatically extract the job details for you</p>
                    </div>
                    
                    <div className="text-center py-4">
                      <span className="text-gray-500 bg-gray-100 px-4 py-2 rounded-full text-sm">OR</span>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Description *
                      </label>
                      <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        rows={12}
                        placeholder="Paste the complete job description here..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>{jobDescription.length} characters</span>
                        <span>Include requirements, qualifications, and job responsibilities</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resume Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-orange-600" />
                    Select Resume to Optimize
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Choose from existing resumes
                      </label>
                      <select
                        value={selectedResume}
                        onChange={(e) => setSelectedResume(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select a resume...</option>
                        {mockResumes.map((resume) => (
                          <option key={resume.id} value={resume.id}>
                            {resume.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Or upload a new resume
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Drop file here or click to browse</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="text-center">
                  <button
                    onClick={handleAnalyze}
                    disabled={!jobDescription || (!selectedResume && !jobUrl)}
                    className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                  >
                    <Brain className="w-5 h-5" />
                    <span>Analyze & Optimize Resume</span>
                  </button>
                  <p className="text-sm text-gray-500 mt-3">Analysis typically takes 15-30 seconds</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analyzing Step */}
        {step === 'analyzing' && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-white animate-pulse" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Analyzing Job Requirements
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our AI is comparing your resume against the job requirements and identifying optimization opportunities...
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-600">Extracting Keywords</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-600">Matching Skills</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-600">Generating Report</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Step */}
        {step === 'results' && analysis && (
          <div className="space-y-8">
            
            {/* Header */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Optimization Complete</h2>
                  <p className="text-gray-600">{analysis.title} at {analysis.company}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${
                      analysis.match_score >= 85 ? 'text-green-600' : 
                      analysis.match_score >= 70 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {analysis.match_score}%
                    </div>
                    <p className="text-sm text-gray-600">Job Match Score</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Download Optimized Resume</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="bg-white rounded-2xl shadow-md border border-gray-100 p-2">
              <div className="flex space-x-2">
                {[
                  { id: 'overview', label: 'Overview', icon: Eye },
                  { id: 'keywords', label: 'Keywords', icon: Search },
                  { id: 'recommendations', label: 'Recommendations', icon: Lightbulb },
                  { id: 'comparison', label: 'Before/After', icon: BarChart3 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Tab Content */}
            <div className="space-y-6">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    
                    {/* Immediate Actions */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-6 h-6 mr-3 text-orange-600" />
                        Quick Wins (15 min or less)
                      </h3>
                      <div className="space-y-3">
                        {analysis.recommendations.immediate.map((rec, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-orange-600" />
                              <span className="font-medium text-gray-900">{rec.action}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="text-orange-600 font-medium">{rec.impact} Impact</span>
                              <span className="text-gray-500">• {rec.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Job Details</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Building className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-600">Company:</span>
                            <span className="font-medium text-gray-900">{analysis.company}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-600">Location:</span>
                            <span className="font-medium text-gray-900">{analysis.location}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {analysis.salary_range && (
                            <div className="flex items-center space-x-3">
                              <DollarSign className="w-5 h-5 text-gray-400" />
                              <span className="text-gray-600">Salary:</span>
                              <span className="font-medium text-gray-900">{analysis.salary_range}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-3">
                            <Target className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-600">Match Score:</span>
                            <span className={`font-bold ${getScoreColor(analysis.match_score)}`}>
                              {analysis.match_score}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-4">Actions</h3>
                      <div className="space-y-3">
                        <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2">
                          <Edit3 className="w-4 h-4" />
                          <span>Edit Resume</span>
                        </button>
                        <button className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                          <Copy className="w-4 h-4" />
                          <span>Copy Suggestions</span>
                        </button>
                        <button className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                          <Share2 className="w-4 h-4" />
                          <span>Share Report</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-4">Next Steps</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Apply quick wins</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <span>Update content sections</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Eye className="w-4 h-4 text-blue-500" />
                          <span>Review final resume</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Keywords Tab */}
              {activeTab === 'keywords' && (
                <div className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    
                    {/* Required Keywords */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                        <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                        Required Keywords
                      </h3>
                      <div className="space-y-3">
                        {analysis.keywords.required.map((keyword, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <div>
                              <span className="font-medium text-red-900">{keyword.keyword}</span>
                              <p className="text-xs text-red-700">{keyword.category}</p>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getImportanceColor(keyword.importance)}`}>
                              {keyword.importance}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preferred Keywords */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                        <Star className="w-6 h-6 mr-3 text-blue-600" />
                        Preferred Keywords
                      </h3>
                      <div className="space-y-3">
                        {analysis.keywords.preferred.map((keyword, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <div>
                              <span className="font-medium text-blue-900">{keyword.keyword}</span>
                              <p className="text-xs text-blue-700">{keyword.category}</p>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getImportanceColor(keyword.importance)}`}>
                              {keyword.importance}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Missing Keywords */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center">
                      <Lightbulb className="w-6 h-6 mr-3 text-orange-600" />
                      Keywords to Add
                    </h3>
                    <div className="space-y-4">
                      {analysis.keywords.missing_from_resume.map((keyword, index) => (
                        <div key={index} className="border border-orange-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-orange-900">{keyword.keyword}</span>
                            <span className="text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded">
                              {keyword.category}
                            </span>
                          </div>
                          <p className="text-sm text-orange-800">{keyword.suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
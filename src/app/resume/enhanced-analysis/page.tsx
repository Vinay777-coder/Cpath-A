'use client'

import { useState, useRef, useCallback } from 'react'
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  Brain, 
  Sparkles, 
  Target, 
  Download, 
  Eye,
  Star, 
  Zap, 
  Award, 
  BarChart3, 
  Users, 
  Briefcase,
  ArrowRight, 
  ExternalLink, 
  Calendar,
  MapPin, 
  DollarSign, 
  Lightbulb, 
  Gauge, 
  Trophy,
  ChevronRight, 
  Building, 
  GraduationCap,
  Shield,
  Palette,
  Code,
  Database,
  Cloud,
  MousePointer,
  Layers,
  Crosshair,
  Search,
  Filter,
  RefreshCw,
  Plus,
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Heart,
  Bookmark,
  Share2,
  Copy,
  Edit3
} from 'lucide-react'
import Link from 'next/link'

interface ResumeAnalysis {
  id: string
  overall_score: number
  ats_score: number
  human_appeal_score: number
  industry_match_score: number
  feedback: {
    strengths: string[]
    weaknesses: string[]
    critical_issues: string[]
    quick_wins: string[]
  }
  keywords: {
    found: { keyword: string; frequency: number; relevance: 'high' | 'medium' | 'low' }[]
    missing: { keyword: string; importance: 'critical' | 'important' | 'nice-to-have'; category: string }[]
    optimization_score: number
  }
  sections: {
    contact: { score: number; issues: string[]; suggestions: string[] }
    summary: { score: number; issues: string[]; suggestions: string[] }
    experience: { score: number; issues: string[]; suggestions: string[] }
    education: { score: number; issues: string[]; suggestions: string[] }
    skills: { score: number; issues: string[]; suggestions: string[] }
  }
  role_matches: {
    title: string
    match_percentage: number
    salary_range: string
    demand_level: 'High' | 'Medium' | 'Low'
    growth_potential: string
    reasoning: string[]
  }[]
  improvement_roadmap: {
    immediate: { action: string; impact: 'High' | 'Medium' | 'Low'; time_required: string }[]
    short_term: { action: string; impact: 'High' | 'Medium' | 'Low'; time_required: string }[]
    long_term: { action: string; impact: 'High' | 'Medium' | 'Low'; time_required: string }[]
  }
  market_insights: {
    industry_trends: string[]
    salary_benchmark: { min: number; max: number; median: number; currency: string }
    skill_demand: { skill: string; trend: 'rising' | 'stable' | 'declining'; demand_score: number }[]
    location_insights: { location: string; avg_salary: number; job_count: number; competition: string }[]
  }
}

export default function EnhancedResumeAnalysisPage() {
  const [analysisStep, setAnalysisStep] = useState<'upload' | 'analyzing' | 'results'>('upload')
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [isDragging, setIsDragging] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Enhanced drag and drop handlers
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileUpload(files[0])
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const handleFileUpload = async (file: File) => {
    setFileName(file.name)
    setAnalysisStep('analyzing')
    setUploadProgress(0)

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(generateMockAnalysis())
      setAnalysisStep('results')
    }, 3000)
  }

  const generateMockAnalysis = (): ResumeAnalysis => ({
    id: 'analysis-' + Date.now(),
    overall_score: 78,
    ats_score: 82,
    human_appeal_score: 75,
    industry_match_score: 77,
    feedback: {
      strengths: [
        'Strong technical skills alignment with target roles',
        'Quantified achievements in experience section',
        'Clean, ATS-friendly formatting',
        'Relevant certifications included'
      ],
      weaknesses: [
        'Summary lacks specific industry keywords',
        'Missing soft skills emphasis',
        'Limited project details',
        'No volunteer experience mentioned'
      ],
      critical_issues: [
        'Contact information formatting may cause ATS parsing errors',
        'Missing LinkedIn profile URL'
      ],
      quick_wins: [
        'Add 3-5 industry-specific keywords to summary',
        'Include LinkedIn URL in contact section',
        'Add quantified metrics to 2 more bullet points'
      ]
    },
    keywords: {
      found: [
        { keyword: 'JavaScript', frequency: 4, relevance: 'high' },
        { keyword: 'React', frequency: 3, relevance: 'high' },
        { keyword: 'Node.js', frequency: 2, relevance: 'high' },
        { keyword: 'AWS', frequency: 2, relevance: 'medium' },
        { keyword: 'Agile', frequency: 1, relevance: 'medium' }
      ],
      missing: [
        { keyword: 'TypeScript', importance: 'critical', category: 'Technical Skills' },
        { keyword: 'Docker', importance: 'important', category: 'DevOps' },
        { keyword: 'GraphQL', importance: 'nice-to-have', category: 'API Development' }
      ],
      optimization_score: 73
    },
    sections: {
      contact: { 
        score: 90, 
        issues: ['Phone number format inconsistent'], 
        suggestions: ['Use standard (XXX) XXX-XXXX format', 'Add LinkedIn URL'] 
      },
      summary: { 
        score: 70, 
        issues: ['Too generic', 'Missing keywords'], 
        suggestions: ['Add 3-5 industry keywords', 'Mention specific technologies', 'Include years of experience'] 
      },
      experience: { 
        score: 85, 
        issues: ['Some bullets lack metrics'], 
        suggestions: ['Quantify all achievements', 'Use action verbs', 'Add project outcomes'] 
      },
      education: { 
        score: 95, 
        issues: [], 
        suggestions: ['Consider adding relevant coursework', 'Include GPA if above 3.5'] 
      },
      skills: { 
        score: 75, 
        issues: ['Missing trending technologies'], 
        suggestions: ['Add TypeScript', 'Include cloud platforms', 'Separate technical and soft skills'] 
      }
    },
    role_matches: [
      {
        title: 'Frontend Developer',
        match_percentage: 89,
        salary_range: '$75,000 - $95,000',
        demand_level: 'High',
        growth_potential: '+15% over next 2 years',
        reasoning: [
          'Strong React and JavaScript experience',
          'Portfolio demonstrates UI/UX skills',
          'Experience with modern frontend tools'
        ]
      },
      {
        title: 'Full Stack Developer',
        match_percentage: 82,
        salary_range: '$80,000 - $110,000',
        demand_level: 'High',
        growth_potential: '+12% over next 2 years',
        reasoning: [
          'Both frontend and backend experience',
          'Database knowledge evident',
          'API development experience'
        ]
      },
      {
        title: 'Software Engineer',
        match_percentage: 78,
        salary_range: '$85,000 - $120,000',
        demand_level: 'Medium',
        growth_potential: '+8% over next 2 years',
        reasoning: [
          'Strong programming fundamentals',
          'Problem-solving skills demonstrated',
          'Some system design experience'
        ]
      }
    ],
    improvement_roadmap: {
      immediate: [
        { action: 'Add LinkedIn URL to contact section', impact: 'Medium', time_required: '2 minutes' },
        { action: 'Include 5 industry keywords in summary', impact: 'High', time_required: '10 minutes' },
        { action: 'Fix phone number formatting', impact: 'Medium', time_required: '1 minute' }
      ],
      short_term: [
        { action: 'Quantify 3 more achievements with metrics', impact: 'High', time_required: '30 minutes' },
        { action: 'Add TypeScript and Docker to skills', impact: 'High', time_required: '5 minutes' },
        { action: 'Create projects section with 2-3 key projects', impact: 'High', time_required: '1 hour' }
      ],
      long_term: [
        { action: 'Obtain AWS certification', impact: 'High', time_required: '2-3 months' },
        { action: 'Build portfolio website', impact: 'Medium', time_required: '1-2 weeks' },
        { action: 'Contribute to open source projects', impact: 'Medium', time_required: '3-6 months' }
      ]
    },
    market_insights: {
      industry_trends: [
        'Increased demand for React developers',
        'TypeScript adoption growing rapidly',
        'Remote work opportunities expanding',
        'Cloud skills becoming essential'
      ],
      salary_benchmark: { min: 75000, max: 120000, median: 90000, currency: 'USD' },
      skill_demand: [
        { skill: 'React', trend: 'rising', demand_score: 95 },
        { skill: 'TypeScript', trend: 'rising', demand_score: 88 },
        { skill: 'Node.js', trend: 'stable', demand_score: 82 },
        { skill: 'jQuery', trend: 'declining', demand_score: 45 }
      ],
      location_insights: [
        { location: 'San Francisco, CA', avg_salary: 125000, job_count: 1250, competition: 'High' },
        { location: 'Austin, TX', avg_salary: 95000, job_count: 890, competition: 'Medium' },
        { location: 'Remote', avg_salary: 90000, job_count: 2100, competition: 'Medium' }
      ]
    }
  })

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-500'
    if (score >= 60) return 'from-yellow-500 to-amber-500'
    return 'from-red-500 to-orange-500'
  }

  const getTrendIcon = (trend: 'rising' | 'stable' | 'declining') => {
    switch (trend) {
      case 'rising': return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-500" />
      default: return <ArrowRight className="w-4 h-4 text-blue-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FileText className="w-6 h-6 mr-3" />
                <span className="text-xl font-bold">Resume Analyzer Pro</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">No signup required</span>
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">100% Private & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Upload Section */}
        {analysisStep === 'upload' && (
          <div className="text-center">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Your Resume
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Analyzed </span>
                Instantly
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Our advanced AI analyzes your resume for ATS compatibility, human appeal, and industry alignment. 
                Get actionable insights to land more interviews.
              </p>
              
              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">3.7x</h3>
                  <p className="text-gray-600">Higher ATS pass rate</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
                  <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">92%</h3>
                  <p className="text-gray-600">ATS compatibility rate</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">15sec</h3>
                  <p className="text-gray-600">Analysis time</p>
                </div>
              </div>
            </div>

            {/* Upload Area */}
            <div className="max-w-2xl mx-auto">
              <div
                className={`border-2 border-dashed rounded-2xl p-12 transition-all duration-300 ${
                  isDragging 
                    ? 'border-blue-500 bg-blue-50 scale-105' 
                    : 'border-gray-300 bg-white/50 hover:border-blue-400 hover:bg-blue-50/50'
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Upload Your Resume
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Drag and drop your resume here, or click to browse
                    </p>
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    Choose File
                  </button>
                  
                  <p className="text-sm text-gray-500">
                    Supports PDF, DOC, DOCX files up to 10MB
                  </p>
                </div>
              </div>
              
              {/* Security Notice */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div className="text-sm text-green-800">
                    <span className="font-medium">100% Secure & Private:</span> Your resume is processed locally and never stored on our servers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analysis Progress */}
        {analysisStep === 'analyzing' && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-white animate-pulse" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Analyzing Your Resume
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our AI is examining your resume for ATS compatibility, keyword optimization, and industry alignment...
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {fileName} • {Math.round(uploadProgress)}% complete
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-600">ATS Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-600">Keyword Matching</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-600">Industry Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {analysisStep === 'results' && analysis && (
          <div className="space-y-8">
            {/* Header with Overall Score */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Resume Analysis Complete</h2>
                  <p className="text-gray-600">Comprehensive analysis of {fileName}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Report</span>
                  </button>
                  <button 
                    onClick={() => setAnalysisStep('upload')}
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Analyze Another
                  </button>
                </div>
              </div>
              
              {/* Score Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${getScoreGradient(analysis.overall_score)} flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-2xl font-bold text-white">{analysis.overall_score}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Overall Score</h3>
                  <p className="text-sm text-gray-600">Comprehensive rating</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${getScoreGradient(analysis.ats_score)} flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-2xl font-bold text-white">{analysis.ats_score}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">ATS Score</h3>
                  <p className="text-sm text-gray-600">System compatibility</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${getScoreGradient(analysis.human_appeal_score)} flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-2xl font-bold text-white">{analysis.human_appeal_score}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Human Appeal</h3>
                  <p className="text-sm text-gray-600">Recruiter friendliness</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${getScoreGradient(analysis.industry_match_score)} flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-2xl font-bold text-white">{analysis.industry_match_score}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Industry Match</h3>
                  <p className="text-sm text-gray-600">Role alignment</p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="bg-white rounded-2xl shadow-md border border-gray-100 p-2">
              <div className="flex space-x-2 overflow-x-auto">
                {[
                  { id: 'overview', label: 'Overview', icon: Eye },
                  { id: 'keywords', label: 'Keywords', icon: Search },
                  { id: 'sections', label: 'Sections', icon: Layers },
                  { id: 'matches', label: 'Role Matches', icon: Target },
                  { id: 'roadmap', label: 'Improvement Plan', icon: ArrowRight },
                  { id: 'insights', label: 'Market Insights', icon: BarChart3 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
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
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-900">Strengths</h3>
                    </div>
                    <ul className="space-y-3">
                      {analysis.feedback.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-green-800">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Weaknesses */}
                  <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-yellow-900">Areas for Improvement</h3>
                    </div>
                    <ul className="space-y-3">
                      {analysis.feedback.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-yellow-800">{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Critical Issues */}
                  {analysis.feedback.critical_issues.length > 0 && (
                    <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <AlertCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-red-900">Critical Issues</h3>
                      </div>
                      <ul className="space-y-3">
                        {analysis.feedback.critical_issues.map((issue, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-red-800">{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Quick Wins */}
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Quick Wins</h3>
                    </div>
                    <ul className="space-y-3">
                      {analysis.feedback.quick_wins.map((win, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Zap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800">{win}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Keywords Tab */}
              {activeTab === 'keywords' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">Keyword Analysis</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Optimization Score:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(analysis.keywords.optimization_score)}`}>
                          {analysis.keywords.optimization_score}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Found Keywords */}
                      <div>
                        <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                          Keywords Found ({analysis.keywords.found.length})
                        </h4>
                        <div className="space-y-3">
                          {analysis.keywords.found.map((keyword, index) => (
                            <div key={index} className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <span className="font-medium text-green-900">{keyword.keyword}</span>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  keyword.relevance === 'high' ? 'bg-green-200 text-green-800' :
                                  keyword.relevance === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                                  'bg-gray-200 text-gray-800'
                                }`}>
                                  {keyword.relevance}
                                </span>
                              </div>
                              <span className="text-sm text-green-700">×{keyword.frequency}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Missing Keywords */}
                      <div>
                        <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                          <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                          Missing Keywords ({analysis.keywords.missing.length})
                        </h4>
                        <div className="space-y-3">
                          {analysis.keywords.missing.map((keyword, index) => (
                            <div key={index} className="bg-red-50 p-3 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-red-900">{keyword.keyword}</span>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  keyword.importance === 'critical' ? 'bg-red-200 text-red-800' :
                                  keyword.importance === 'important' ? 'bg-orange-200 text-orange-800' :
                                  'bg-yellow-200 text-yellow-800'
                                }`}>
                                  {keyword.importance}
                                </span>
                              </div>
                              <p className="text-sm text-red-700">{keyword.category}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sections Tab */}
              {activeTab === 'sections' && (
                <div className="space-y-6">
                  {Object.entries(analysis.sections).map(([sectionName, sectionData]) => (
                    <div key={sectionName} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 capitalize">
                          {sectionName} Section
                        </h3>
                        <div className={`px-4 py-2 rounded-full text-sm font-medium ${getScoreColor(sectionData.score)}`}>
                          {sectionData.score}/100
                        </div>
                      </div>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* Issues */}
                        {sectionData.issues.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                              <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                              Issues Found
                            </h4>
                            <ul className="space-y-2">
                              {sectionData.issues.map((issue, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-red-700 text-sm">{issue}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Suggestions */}
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
                            Suggestions
                          </h4>
                          <ul className="space-y-2">
                            {sectionData.suggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-700 text-sm">{suggestion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Role Matches Tab */}
              {activeTab === 'matches' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Best Role Matches</h3>
                    <div className="space-y-6">
                      {analysis.role_matches.map((role, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="bg-blue-100 p-3 rounded-lg">
                                <Briefcase className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900">{role.title}</h4>
                                <p className="text-gray-600">{role.salary_range}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`text-2xl font-bold ${getScoreColor(role.match_percentage)}`}>
                                {role.match_percentage}%
                              </div>
                              <p className="text-sm text-gray-600">Match</p>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                              <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                                role.demand_level === 'High' ? 'bg-green-100 text-green-800' :
                                role.demand_level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {role.demand_level} Demand
                              </div>
                            </div>
                            <div className="text-center">
                              <span className="text-sm text-gray-600">Growth: {role.growth_potential}</span>
                            </div>
                            <div className="text-center">
                              <Link 
                                href="/guides"
                                className="text-sm text-blue-600 hover:text-blue-800 flex items-center justify-center"
                              >
                                View Career Guide
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </Link>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Why you're a good match:</h5>
                            <ul className="space-y-1">
                              {role.reasoning.map((reason, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{reason}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Improvement Roadmap Tab */}
              {activeTab === 'roadmap' && (
                <div className="space-y-6">
                  {Object.entries(analysis.improvement_roadmap).map(([timeframe, actions]) => (
                    <div key={timeframe} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 capitalize flex items-center">
                        <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                        {timeframe.replace('_', ' ')} Actions
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {actions.map((action, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                action.impact === 'High' ? 'bg-red-100 text-red-800' :
                                action.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {action.impact} Impact
                              </span>
                              <span className="text-xs text-gray-500">{action.time_required}</span>
                            </div>
                            <p className="text-gray-800 font-medium">{action.action}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Market Insights Tab */}
              {activeTab === 'insights' && (
                <div className="space-y-6">
                  {/* Salary Benchmark */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <DollarSign className="w-6 h-6 mr-3 text-green-600" />
                      Salary Benchmark
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          ${analysis.market_insights.salary_benchmark.min.toLocaleString()}
                        </div>
                        <p className="text-gray-600">Minimum</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          ${analysis.market_insights.salary_benchmark.median.toLocaleString()}
                        </div>
                        <p className="text-gray-600">Median</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          ${analysis.market_insights.salary_benchmark.max.toLocaleString()}
                        </div>
                        <p className="text-gray-600">Maximum</p>
                      </div>
                    </div>
                  </div>

                  {/* Skill Demand Trends */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
                      Skill Demand Trends
                    </h3>
                    <div className="space-y-4">
                      {analysis.market_insights.skill_demand.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <span className="font-medium text-gray-900">{skill.skill}</span>
                            {getTrendIcon(skill.trend)}
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${skill.demand_score}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{skill.demand_score}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location Insights */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <MapPin className="w-6 h-6 mr-3 text-purple-600" />
                      Top Locations
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {analysis.market_insights.location_insights.map((location, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{location.location}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Avg Salary:</span>
                              <span className="font-medium">${location.avg_salary.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Jobs Available:</span>
                              <span className="font-medium">{location.job_count.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Competition:</span>
                              <span className={`font-medium ${
                                location.competition === 'High' ? 'text-red-600' :
                                location.competition === 'Medium' ? 'text-yellow-600' :
                                'text-green-600'
                              }`}>
                                {location.competition}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industry Trends */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <BarChart3 className="w-6 h-6 mr-3 text-orange-600" />
                      Industry Trends
                    </h3>
                    <ul className="space-y-3">
                      {analysis.market_insights.industry_trends.map((trend, index) => (
                        <li key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800">{trend}</span>
                        </li>
                      ))}
                    </ul>
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
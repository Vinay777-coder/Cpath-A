'use client'

import { useState, useEffect } from 'react'
import { 
  Plus,
  FileText,
  Edit3,
  Download,
  Share2,
  Trash2,
  Eye,
  Copy,
  BarChart3,
  TrendingUp,
  Calendar,
  Briefcase,
  Target,
  Star,
  Award,
  Users,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Filter,
  Search,
  MoreVertical,
  ExternalLink,
  RefreshCw,
  Bookmark,
  Heart,
  Zap,
  Building,
  Mail,
  Phone,
  Globe,
  Activity,
  PieChart,
  TrendingDown,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import Link from 'next/link'

interface Resume {
  id: string
  name: string
  template: string
  last_modified: string
  created_date: string
  ats_score: number
  status: 'Draft' | 'Complete' | 'Needs Review'
  target_role: string
  applications: number
  views: number
  downloads: number
  industry: string
  experience_level: 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Executive'
  file_size: string
}

interface JobApplication {
  id: string
  resume_id: string
  company: string
  position: string
  application_date: string
  status: 'Applied' | 'Under Review' | 'Interview' | 'Offer' | 'Rejected'
  salary_range: string
  location: string
  notes: string
}

interface AnalyticsData {
  total_resumes: number
  total_applications: number
  total_views: number
  total_downloads: number
  avg_ats_score: number
  application_success_rate: number
  monthly_stats: {
    month: string
    applications: number
    interviews: number
    offers: number
  }[]
  industry_breakdown: {
    industry: string
    applications: number
    success_rate: number
  }[]
  resume_performance: {
    resume_name: string
    views: number
    applications: number
    success_rate: number
  }[]
}

export default function ResumeDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('modified')

  // Mock data - in real app would come from API
  const [resumes] = useState<Resume[]>([
    {
      id: '1',
      name: 'Senior Software Engineer Resume',
      template: 'Tech Specialist',
      last_modified: '2024-11-05',
      created_date: '2024-10-15',
      ats_score: 94,
      status: 'Complete',
      target_role: 'Senior Software Engineer',
      applications: 12,
      views: 45,
      downloads: 8,
      industry: 'Technology',
      experience_level: 'Senior Level',
      file_size: '245 KB'
    },
    {
      id: '2',
      name: 'Product Manager - Startup Focused',
      template: 'Startup Founder',
      last_modified: '2024-11-03',
      created_date: '2024-10-20',
      ats_score: 87,
      status: 'Draft',
      target_role: 'Product Manager',
      applications: 5,
      views: 23,
      downloads: 3,
      industry: 'Technology',
      experience_level: 'Mid Level',
      file_size: '198 KB'
    },
    {
      id: '3',
      name: 'Marketing Manager Resume',
      template: 'Sales & Marketing Pro',
      last_modified: '2024-10-28',
      created_date: '2024-10-10',
      ats_score: 91,
      status: 'Complete',
      target_role: 'Marketing Manager',
      applications: 8,
      views: 34,
      downloads: 6,
      industry: 'Marketing',
      experience_level: 'Mid Level',
      file_size: '223 KB'
    }
  ])

  const [applications] = useState<JobApplication[]>([
    {
      id: '1',
      resume_id: '1',
      company: 'Google',
      position: 'Senior Software Engineer',
      application_date: '2024-11-01',
      status: 'Interview',
      salary_range: '$150,000 - $180,000',
      location: 'Mountain View, CA',
      notes: 'Technical interview scheduled for Nov 8th'
    },
    {
      id: '2',
      resume_id: '1',
      company: 'Microsoft',
      position: 'Principal Engineer',
      application_date: '2024-10-28',
      status: 'Under Review',
      salary_range: '$160,000 - $190,000',
      location: 'Seattle, WA',
      notes: 'Recruiter mentioned strong interest'
    },
    {
      id: '3',
      resume_id: '2',
      company: 'Stripe',
      position: 'Product Manager',
      application_date: '2024-10-25',
      status: 'Applied',
      salary_range: '$130,000 - $160,000',
      location: 'San Francisco, CA',
      notes: 'Applied through company website'
    }
  ])

  const [analytics] = useState<AnalyticsData>({
    total_resumes: 3,
    total_applications: 25,
    total_views: 102,
    total_downloads: 17,
    avg_ats_score: 91,
    application_success_rate: 24,
    monthly_stats: [
      { month: 'Aug', applications: 8, interviews: 2, offers: 1 },
      { month: 'Sep', applications: 12, interviews: 4, offers: 1 },
      { month: 'Oct', applications: 15, interviews: 5, offers: 2 },
      { month: 'Nov', applications: 5, interviews: 3, offers: 0 }
    ],
    industry_breakdown: [
      { industry: 'Technology', applications: 18, success_rate: 28 },
      { industry: 'Marketing', applications: 5, success_rate: 20 },
      { industry: 'Finance', applications: 2, success_rate: 50 }
    ],
    resume_performance: [
      { resume_name: 'Senior Software Engineer Resume', views: 45, applications: 12, success_rate: 25 },
      { resume_name: 'Product Manager - Startup Focused', views: 23, applications: 5, success_rate: 20 },
      { resume_name: 'Marketing Manager Resume', views: 34, applications: 8, success_rate: 25 }
    ]
  })

  const filteredResumes = resumes.filter(resume => {
    const matchesSearch = resume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.target_role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || resume.status === filterStatus
    return matchesSearch && matchesFilter
  }).sort((a, b) => {
    switch (sortBy) {
      case 'modified':
        return new Date(b.last_modified).getTime() - new Date(a.last_modified).getTime()
      case 'name':
        return a.name.localeCompare(b.name)
      case 'ats':
        return b.ats_score - a.ats_score
      case 'applications':
        return b.applications - a.applications
      default:
        return 0
    }
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete': return 'bg-green-100 text-green-800'
      case 'Draft': return 'bg-yellow-100 text-yellow-800'
      case 'Needs Review': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case 'Applied': return 'bg-blue-100 text-blue-800'
      case 'Under Review': return 'bg-yellow-100 text-yellow-800'
      case 'Interview': return 'bg-purple-100 text-purple-800'
      case 'Offer': return 'bg-green-100 text-green-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                Resume Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/resume/builder"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Resume</span>
              </Link>
              <Link
                href="/resume/enhanced-analysis"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Target className="w-4 h-4" />
                <span>Analyze Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Resumes</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.total_resumes}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.total_applications}</p>
                </div>
                <Briefcase className="w-8 h-8 text-green-500" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Profile Views</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.total_views}</p>
                </div>
                <Eye className="w-8 h-8 text-purple-500" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Downloads</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.total_downloads}</p>
                </div>
                <Download className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg ATS Score</p>
                  <p className="text-2xl font-bold text-green-600">{analytics.avg_ats_score}%</p>
                </div>
                <Target className="w-8 h-8 text-green-500" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-blue-600">{analytics.application_success_rate}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-2">
          <div className="flex space-x-2 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'resumes', label: 'My Resumes', icon: FileText },
              { id: 'applications', label: 'Applications', icon: Briefcase },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
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
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Resume updated successfully</p>
                    <p className="text-sm text-gray-600">Senior Software Engineer Resume • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Briefcase className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">New job application</p>
                    <p className="text-sm text-gray-600">Applied to Google for Senior Software Engineer • 5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Eye className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Resume viewed</p>
                    <p className="text-sm text-gray-600">Marketing Manager Resume viewed 3 times • 1 day ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/resume/builder"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-8 hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                <Plus className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Create New Resume</h3>
                <p className="text-blue-100">Build a new resume with our ATS-optimized templates</p>
              </Link>
              
              <Link
                href="/resume/enhanced-analysis"
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-8 hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105"
              >
                <Target className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analyze Resume</h3>
                <p className="text-green-100">Get AI-powered feedback and ATS scoring</p>
              </Link>
              
              <Link
                href="/resume/templates"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
              >
                <FileText className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Browse Templates</h3>
                <p className="text-orange-100">Explore professional resume templates</p>
              </Link>
            </div>
          </div>
        )}

        {/* Resumes Tab */}
        {activeTab === 'resumes' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search resumes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="Complete">Complete</option>
                    <option value="Draft">Draft</option>
                    <option value="Needs Review">Needs Review</option>
                  </select>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="modified">Last Modified</option>
                    <option value="name">Name</option>
                    <option value="ats">ATS Score</option>
                    <option value="applications">Applications</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Resume Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResumes.map((resume) => (
                <div key={resume.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">{resume.name}</h3>
                        <p className="text-gray-600 text-sm">{resume.target_role}</p>
                      </div>
                      <div className="relative">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">ATS Score:</span>
                        <span className={`font-bold ${
                          resume.ats_score >= 90 ? 'text-green-600' : 
                          resume.ats_score >= 80 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {resume.ats_score}%
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Status:</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(resume.status)}`}>
                          {resume.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Applications:</span>
                        <span className="text-sm font-medium text-gray-700">{resume.applications}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Last Modified:</span>
                        <span className="text-sm text-gray-700">{formatDate(resume.last_modified)}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/resume/builder/${resume.id}`}
                        className="bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1 text-sm"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </Link>
                      <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1 text-sm">
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Job Applications</h2>
              <p className="text-gray-600">Track your job applications and their progress</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company & Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume Used</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary Range</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {applications.map((app) => {
                    const resume = resumes.find(r => r.id === app.resume_id)
                    return (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{app.company}</div>
                            <div className="text-sm text-gray-500">{app.position}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{resume?.name || 'Unknown'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getApplicationStatusColor(app.status)}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {app.salary_range}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(app.application_date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-800 mr-3">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Performance Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Monthly Application Progress
                </h3>
                <div className="space-y-4">
                  {analytics.monthly_stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{stat.month}</span>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-blue-600">{stat.applications} Applied</span>
                        <span className="text-purple-600">{stat.interviews} Interviews</span>
                        <span className="text-green-600">{stat.offers} Offers</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-green-600" />
                  Industry Breakdown
                </h3>
                <div className="space-y-4">
                  {analytics.industry_breakdown.map((industry, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{industry.industry}</span>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-600">{industry.applications} apps</span>
                        <span className={`font-medium ${
                          industry.success_rate >= 25 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {industry.success_rate}% success
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume Performance */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                Resume Performance
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {analytics.resume_performance.map((resume, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {resume.resume_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {resume.views}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {resume.applications}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-medium ${
                            resume.success_rate >= 25 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {resume.success_rate}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {resume.success_rate >= 25 ? (
                            <ArrowUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <ArrowDown className="w-4 h-4 text-red-500" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
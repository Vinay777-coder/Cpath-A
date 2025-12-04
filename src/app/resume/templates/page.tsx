'use client'

import { useState } from 'react'
import { 
  ArrowLeft,
  Download,
  Eye,
  Edit3,
  Star,
  CheckCircle,
  Award,
  Briefcase,
  Code,
  Palette,
  Building,
  Users,
  Target,
  Zap,
  TrendingUp,
  Globe,
  Settings,
  Filter,
  Search,
  Heart,
  Bookmark,
  Share2,
  Copy,
  ExternalLink,
  Monitor,
  Smartphone,
  Tablet,
  FileText,
  Layout,
  Type,
  Image,
  Layers,
  Grid,
  Maximize
} from 'lucide-react'
import Link from 'next/link'

interface Template {
  id: string
  name: string
  category: string
  industry: string[]
  ats_score: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  features: string[]
  preview_image: string
  color_scheme: string
  layout_type: 'Single Column' | 'Two Column' | 'Modern Grid' | 'Creative'
  best_for: string[]
  downloads: number
  rating: number
  premium: boolean
}

export default function ResumeTemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const templates: Template[] = [
    {
      id: 'modern-professional',
      name: 'Modern Professional',
      category: 'Professional',
      industry: ['Technology', 'Finance', 'Consulting', 'Healthcare'],
      ats_score: 98,
      difficulty: 'Beginner',
      description: 'Clean, minimalist design with excellent ATS compatibility. Perfect for corporate environments and traditional industries.',
      features: ['ATS-Optimized', 'Clean Typography', 'Professional Layout', 'Easy Customization'],
      preview_image: '/templates/modern-professional.jpg',
      color_scheme: 'Blue & Gray',
      layout_type: 'Single Column',
      best_for: ['Software Engineers', 'Business Analysts', 'Project Managers', 'Financial Advisors'],
      downloads: 15420,
      rating: 4.9,
      premium: false
    },
    {
      id: 'tech-specialist',
      name: 'Tech Specialist',
      category: 'Technology',
      industry: ['Technology', 'Software Development', 'Data Science', 'Cybersecurity'],
      ats_score: 95,
      difficulty: 'Intermediate',
      description: 'Designed specifically for tech professionals with sections for projects, technical skills, and GitHub integration.',
      features: ['GitHub Integration', 'Technical Skills Matrix', 'Project Showcase', 'Code-Friendly Design'],
      preview_image: '/templates/tech-specialist.jpg',
      color_scheme: 'Dark Blue & Green',
      layout_type: 'Two Column',
      best_for: ['Software Developers', 'Data Scientists', 'DevOps Engineers', 'Machine Learning Engineers'],
      downloads: 12850,
      rating: 4.8,
      premium: false
    },
    {
      id: 'creative-portfolio',
      name: 'Creative Portfolio',
      category: 'Creative',
      industry: ['Design', 'Marketing', 'Media', 'Advertising'],
      ats_score: 85,
      difficulty: 'Advanced',
      description: 'Eye-catching design that showcases creativity while maintaining professional standards and reasonable ATS compatibility.',
      features: ['Visual Portfolio Section', 'Color Customization', 'Creative Typography', 'Social Media Links'],
      preview_image: '/templates/creative-portfolio.jpg',
      color_scheme: 'Purple & Orange',
      layout_type: 'Creative',
      best_for: ['Graphic Designers', 'UI/UX Designers', 'Marketing Managers', 'Content Creators'],
      downloads: 9680,
      rating: 4.7,
      premium: true
    },
    {
      id: 'executive-leadership',
      name: 'Executive Leadership',
      category: 'Executive',
      industry: ['Finance', 'Consulting', 'Healthcare', 'Manufacturing'],
      ats_score: 96,
      difficulty: 'Intermediate',
      description: 'Sophisticated template for senior executives and leadership roles with emphasis on achievements and strategic impact.',
      features: ['Achievement Focus', 'Leadership Sections', 'Board Experience', 'Executive Summary'],
      preview_image: '/templates/executive-leadership.jpg',
      color_scheme: 'Navy & Gold',
      layout_type: 'Single Column',
      best_for: ['C-Level Executives', 'VPs', 'Directors', 'Senior Managers'],
      downloads: 7320,
      rating: 4.9,
      premium: true
    },
    {
      id: 'startup-founder',
      name: 'Startup Founder',
      category: 'Entrepreneurial',
      industry: ['Technology', 'Startup', 'Innovation', 'Venture Capital'],
      ats_score: 92,
      difficulty: 'Advanced',
      description: 'Dynamic template highlighting entrepreneurial achievements, funding rounds, and innovation capabilities.',
      features: ['Startup Metrics', 'Funding History', 'Innovation Showcase', 'Investor Network'],
      preview_image: '/templates/startup-founder.jpg',
      color_scheme: 'Green & Black',
      layout_type: 'Modern Grid',
      best_for: ['Founders', 'Entrepreneurs', 'Product Managers', 'Innovation Leaders'],
      downloads: 5940,
      rating: 4.6,
      premium: true
    },
    {
      id: 'academic-research',
      name: 'Academic & Research',
      category: 'Academic',
      industry: ['Education', 'Research', 'Science', 'Academia'],
      ats_score: 94,
      difficulty: 'Intermediate',
      description: 'Comprehensive template for academic professionals with sections for publications, research, and teaching experience.',
      features: ['Publications List', 'Research Projects', 'Teaching Experience', 'Academic Achievements'],
      preview_image: '/templates/academic-research.jpg',
      color_scheme: 'Burgundy & Gray',
      layout_type: 'Two Column',
      best_for: ['Professors', 'Researchers', 'PhD Candidates', 'Academic Administrators'],
      downloads: 4560,
      rating: 4.8,
      premium: false
    },
    {
      id: 'sales-marketing',
      name: 'Sales & Marketing Pro',
      category: 'Sales',
      industry: ['Sales', 'Marketing', 'Business Development', 'Retail'],
      ats_score: 93,
      difficulty: 'Beginner',
      description: 'Results-driven template emphasizing sales achievements, revenue growth, and marketing campaigns.',
      features: ['Sales Metrics', 'Campaign Results', 'Client Testimonials', 'Revenue Tracking'],
      preview_image: '/templates/sales-marketing.jpg',
      color_scheme: 'Red & Blue',
      layout_type: 'Single Column',
      best_for: ['Sales Representatives', 'Marketing Managers', 'Business Development', 'Account Managers'],
      downloads: 11200,
      rating: 4.7,
      premium: false
    },
    {
      id: 'healthcare-medical',
      name: 'Healthcare Professional',
      category: 'Healthcare',
      industry: ['Healthcare', 'Medical', 'Nursing', 'Pharmaceutical'],
      ats_score: 97,
      difficulty: 'Intermediate',
      description: 'Professional template for healthcare workers with sections for certifications, clinical experience, and patient care.',
      features: ['Medical Certifications', 'Clinical Experience', 'Patient Care Metrics', 'Continuing Education'],
      preview_image: '/templates/healthcare-medical.jpg',
      color_scheme: 'Teal & White',
      layout_type: 'Two Column',
      best_for: ['Doctors', 'Nurses', 'Medical Technicians', 'Healthcare Administrators'],
      downloads: 8750,
      rating: 4.9,
      premium: false
    }
  ]

  const categories = ['all', 'Professional', 'Technology', 'Creative', 'Executive', 'Entrepreneurial', 'Academic', 'Sales', 'Healthcare']
  const industries = ['all', 'Technology', 'Finance', 'Healthcare', 'Design', 'Marketing', 'Education', 'Sales', 'Consulting']

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
    const matchesIndustry = selectedIndustry === 'all' || template.industry.includes(selectedIndustry)
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesIndustry && matchesSearch
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads
      case 'rating':
        return b.rating - a.rating
      case 'ats':
        return b.ats_score - a.ats_score
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getATSScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600'
    if (score >= 90) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/resume" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Resume Hub
              </Link>
              <div className="h-6 border-l border-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <Layout className="w-6 h-6 mr-3 text-blue-600" />
                Professional Resume Templates
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <FileText className="w-4 h-4" />
                <span>{filteredTemplates.length} templates</span>
              </div>
              <Link 
                href="/resume/builder"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Create Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Choose Your Perfect Resume Template</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Professional, ATS-optimized templates designed by experts. Get noticed by recruiters and land your dream job.
          </p>
          
          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-blue-100">ATS Compatible</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm text-blue-100">Downloads</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-sm text-blue-100">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm text-blue-100">Industries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'All Industries' : industry}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="ats">Best ATS Score</option>
                <option value="name">Alphabetical</option>
              </select>
              
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Layers className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid/List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                {/* Template Preview */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-gray-400" />
                  </div>
                  {template.premium && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Premium
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-lg">{template.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{template.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{template.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">ATS Score:</span>
                      <span className={`font-bold ${getATSScoreColor(template.ats_score)}`}>
                        {template.ats_score}%
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Difficulty:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(template.difficulty)}`}>
                        {template.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Downloads:</span>
                      <span className="text-sm font-medium text-gray-700">{template.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Link
                      href={`/resume/builder?template=${template.id}`}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>Use Template</span>
                    </Link>
                    <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Template Preview */}
                  <div className="lg:col-span-1">
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative">
                      <FileText className="w-12 h-12 text-gray-400" />
                      {template.premium && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Premium
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Template Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{template.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="font-medium text-gray-700">{template.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{template.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {template.features.slice(0, 4).map((feature, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Best for:</span>
                        <div className="font-medium text-gray-900">
                          {template.best_for.slice(0, 2).join(', ')}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Layout:</span>
                        <div className="font-medium text-gray-900">{template.layout_type}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Template Stats & Actions */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">ATS Score:</span>
                        <span className={`font-bold text-lg ${getATSScoreColor(template.ats_score)}`}>
                          {template.ats_score}%
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Difficulty:</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(template.difficulty)}`}>
                          {template.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Downloads:</span>
                        <span className="text-sm font-medium text-gray-700">{template.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Link
                        href={`/resume/builder?template=${template.id}`}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium"
                      >
                        <Edit3 className="w-4 h-4" />
                        <span>Use Template</span>
                      </Link>
                      <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>Preview</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Resume?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose a template and start building your professional resume with our ATS-optimized builder.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/resume/builder"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Edit3 className="w-5 h-5" />
              <span>Start Building</span>
            </Link>
            <Link
              href="/resume/enhanced-analysis"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center space-x-2"
            >
              <Target className="w-5 h-5" />
              <span>Analyze Existing Resume</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
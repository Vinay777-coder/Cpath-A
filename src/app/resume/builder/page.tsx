'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  ArrowLeft,
  ArrowRight,
  Save,
  Download,
  Eye,
  Edit3,
  Plus,
  Trash2,
  GripVertical,
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Star,
  MapPin,
  Mail,
  Phone,
  Globe,
  Linkedin,
  Github,
  Calendar,
  DollarSign,
  Target,
  Lightbulb,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  Sparkles,
  Brain,
  Settings,
  Palette,
  Layout,
  Type,
  AlignLeft,
  Bold,
  Italic,
  Underline
} from 'lucide-react'
import Link from 'next/link'

interface ResumeSection {
  id: string
  type: 'personal' | 'summary' | 'experience' | 'education' | 'skills' | 'projects' | 'certifications' | 'custom'
  title: string
  order: number
  content: any
  isVisible: boolean
}

interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  website?: string
  linkedin?: string
  github?: string
  portfolio?: string
}

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
}

interface Education {
  id: string
  degree: string
  institution: string
  location: string
  graduationDate: string
  gpa?: string
  relevant_coursework?: string[]
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  startDate: string
  endDate: string
  url?: string
  github?: string
}

export default function ResumeBuilderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [atsScore, setAtsScore] = useState(0)
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    portfolio: ''
  })
  
  const [summary, setSummary] = useState('')
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [sections, setSections] = useState<ResumeSection[]>([
    { id: 'personal', type: 'personal', title: 'Personal Information', order: 0, content: null, isVisible: true },
    { id: 'summary', type: 'summary', title: 'Professional Summary', order: 1, content: null, isVisible: true },
    { id: 'experience', type: 'experience', title: 'Work Experience', order: 2, content: null, isVisible: true },
    { id: 'education', type: 'education', title: 'Education', order: 3, content: null, isVisible: true },
    { id: 'skills', type: 'skills', title: 'Technical Skills', order: 4, content: null, isVisible: true },
    { id: 'projects', type: 'projects', title: 'Projects', order: 5, content: null, isVisible: false }
  ])
  
  const [selectedTemplate, setSelectedTemplate] = useState('modern')
  const [previewMode, setPreviewMode] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState<{ [key: string]: string[] }>({})

  const steps = [
    { id: 'personal', title: 'Personal Info', icon: User },
    { id: 'summary', title: 'Summary', icon: FileText },
    { id: 'experience', title: 'Experience', icon: Briefcase },
    { id: 'education', title: 'Education', icon: GraduationCap },
    { id: 'skills', title: 'Skills', icon: Code },
    { id: 'projects', title: 'Projects', icon: Star },
    { id: 'preview', title: 'Preview', icon: Eye }
  ]

  const templates = [
    { 
      id: 'modern', 
      name: 'Modern Professional', 
      description: 'Clean, ATS-friendly design with subtle accents',
      preview: '/templates/modern-preview.jpg',
      atsScore: 95
    },
    { 
      id: 'classic', 
      name: 'Classic Corporate', 
      description: 'Traditional format preferred by conservative industries',
      preview: '/templates/classic-preview.jpg',
      atsScore: 98
    },
    { 
      id: 'creative', 
      name: 'Creative Professional', 
      description: 'Design-forward layout for creative roles',
      preview: '/templates/creative-preview.jpg',
      atsScore: 85
    },
    { 
      id: 'tech', 
      name: 'Tech Specialist', 
      description: 'Optimized for software development roles',
      preview: '/templates/tech-preview.jpg',
      atsScore: 92
    }
  ]

  // AI-powered suggestions
  const generateAISuggestions = (field: string, content: string) => {
    const suggestions = {
      summary: [
        "Add specific years of experience to strengthen credibility",
        "Include 2-3 key technical skills relevant to your target role",
        "Mention quantifiable achievements or impact metrics",
        "Add industry-specific keywords for better ATS matching"
      ],
      experience: [
        "Start bullet points with strong action verbs (Led, Developed, Implemented)",
        "Quantify achievements with specific numbers or percentages",
        "Focus on results and impact rather than just responsibilities",
        "Include relevant technologies and methodologies used"
      ],
      skills: [
        "Group skills by category (Programming, Frameworks, Tools)",
        "Include proficiency levels for key technical skills",
        "Add trending technologies relevant to your field",
        "Balance technical skills with important soft skills"
      ]
    }
    return suggestions[field as keyof typeof suggestions] || []
  }

  // Calculate ATS score based on resume content
  const calculateATSScore = () => {
    let score = 0
    
    // Personal information completeness (20 points)
    if (personalInfo.firstName && personalInfo.lastName && personalInfo.email && personalInfo.phone) score += 20
    
    // Summary presence and quality (15 points)
    if (summary.length > 50) score += 15
    else if (summary.length > 20) score += 10
    
    // Experience section (25 points)
    if (experiences.length > 0) {
      score += 15
      // Check for quantified achievements
      const hasMetrics = experiences.some(exp => 
        exp.description.some(desc => /\d+/.test(desc))
      )
      if (hasMetrics) score += 10
    }
    
    // Education (10 points)
    if (education.length > 0) score += 10
    
    // Skills (20 points)
    if (skills.length >= 5) score += 20
    else if (skills.length >= 3) score += 15
    
    // Projects (10 points)
    if (projects.length > 0) score += 10
    
    setAtsScore(Math.min(score, 100))
  }

  useEffect(() => {
    calculateATSScore()
  }, [personalInfo, summary, experiences, education, skills, projects])

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ['']
    }
    setExperiences([...experiences, newExp])
  }

  const updateExperience = (id: string, field: string, value: any) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ))
  }

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      location: '',
      graduationDate: '',
      gpa: '',
      relevant_coursework: []
    }
    setEducation([...education, newEdu])
  }

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      description: '',
      technologies: [],
      startDate: '',
      endDate: '',
      url: '',
      github: ''
    }
    setProjects([...projects, newProject])
  }

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill])
    }
  }

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index))
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
                <Edit3 className="w-6 h-6 mr-3 text-blue-600" />
                ATS-Optimized Resume Builder
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* ATS Score */}
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">ATS Score:</span>
                <span className={`font-bold ${
                  atsScore >= 80 ? 'text-green-600' : 
                  atsScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {atsScore}%
                </span>
              </div>
              
              {/* Actions */}
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <Save className="w-4 h-4" />
                <span>Save Draft</span>
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Step Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Build Steps</h2>
              <nav className="space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(index)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      currentStep === index
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                    <span className="font-medium">{step.title}</span>
                    {currentStep > index && (
                      <CheckCircle className="w-4 h-4 ml-auto text-green-500" />
                    )}
                  </button>
                ))}
              </nav>
              
              {/* Progress */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">{Math.round((currentStep / (steps.length - 1)) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              
              {/* Personal Information Step */}
              {currentStep === 0 && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                      <p className="text-gray-600">Let's start with your basic contact information</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={personalInfo.firstName}
                        onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={personalInfo.lastName}
                        onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john.smith@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        value={personalInfo.location}
                        onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="San Francisco, CA"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        value={personalInfo.linkedin}
                        onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        value={personalInfo.github}
                        onChange={(e) => setPersonalInfo({...personalInfo, github: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://github.com/username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Portfolio Website
                      </label>
                      <input
                        type="url"
                        value={personalInfo.portfolio}
                        onChange={(e) => setPersonalInfo({...personalInfo, portfolio: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  {/* ATS Tips */}
                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900 mb-2">ATS Optimization Tips:</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Use standard phone format: (XXX) XXX-XXXX</li>
                          <li>• Include city and state in location</li>
                          <li>• Add LinkedIn URL to increase discoverability</li>
                          <li>• Use a professional email address</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Summary Step */}
              {currentStep === 1 && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Professional Summary</h2>
                      <p className="text-gray-600">Write a compelling summary that highlights your key strengths</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Summary
                      </label>
                      <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Write a 3-4 sentence summary highlighting your experience, key skills, and career objectives..."
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span>{summary.length} characters</span>
                        <span className={summary.length >= 150 && summary.length <= 300 ? 'text-green-600' : 'text-gray-500'}>
                          Recommended: 150-300 characters
                        </span>
                      </div>
                    </div>

                    {/* AI Suggestions */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Brain className="w-6 h-6 text-purple-600" />
                        <h3 className="font-semibold text-purple-900">AI-Powered Suggestions</h3>
                      </div>
                      <ul className="space-y-2">
                        {generateAISuggestions('summary', summary).map((suggestion, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-purple-800 text-sm">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example Summaries */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Example Summaries by Role</h3>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-2">Software Developer</h4>
                          <p className="text-sm text-gray-600">
                            "Experienced Full-Stack Developer with 5+ years building scalable web applications using React, Node.js, and AWS. Led development teams at 2 startups, delivering products that served 100K+ users. Passionate about clean code, performance optimization, and mentoring junior developers."
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-2">Data Scientist</h4>
                          <p className="text-sm text-gray-600">
                            "Data Scientist with 3+ years of experience in machine learning and statistical analysis. Developed predictive models that improved business KPIs by 25% using Python, SQL, and TensorFlow. Strong background in A/B testing, data visualization, and cross-functional collaboration."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Step */}
              {currentStep === 2 && (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <Briefcase className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
                        <p className="text-gray-600">Add your professional experience in reverse chronological order</p>
                      </div>
                    </div>
                    <button
                      onClick={addExperience}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Experience</span>
                    </button>
                  </div>

                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={exp.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-900">Experience #{index + 1}</h3>
                          <button
                            onClick={() => setExperiences(experiences.filter(e => e.id !== exp.id))}
                            className="text-red-600 hover:text-red-800 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                            <input
                              type="text"
                              value={exp.title}
                              onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Senior Software Engineer"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Google Inc."
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input
                              type="text"
                              value={exp.location}
                              onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="San Francisco, CA"
                            />
                          </div>
                          <div className="flex space-x-2">
                            <div className="flex-1">
                              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                              <input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            <div className="flex-1">
                              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                              <input
                                type="month"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                disabled={exp.current}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={exp.current}
                              onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                              className="rounded border-gray-300"
                            />
                            <span className="text-sm text-gray-700">Currently working here</span>
                          </label>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Job Description & Achievements</label>
                          <textarea
                            value={exp.description.join('\n')}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value.split('\n'))}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="• Led a team of 5 developers to build a customer portal that increased user engagement by 40%&#10;• Implemented CI/CD pipeline using Jenkins and Docker, reducing deployment time by 60%&#10;• Developed RESTful APIs serving 10M+ requests daily with 99.9% uptime"
                          />
                          <p className="text-xs text-gray-500 mt-1">Tip: Use bullet points and quantify your achievements with specific numbers</p>
                        </div>
                      </div>
                    ))}

                    {experiences.length === 0 && (
                      <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="font-medium text-gray-900 mb-2">No experience added yet</h3>
                        <p className="text-gray-600 mb-4">Click "Add Experience" to get started</p>
                        <button
                          onClick={addExperience}
                          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Add Your First Experience
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="border-t border-gray-200 px-8 py-4 flex justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
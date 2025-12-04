'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '../../components/ui/badge'
import { Input } from '@/components/ui/input'
import { useUser } from '@/contexts/auth-context'
import { 
  Building,
  TrendingUp,
  DollarSign,
  MapPin,
  ExternalLink,
  Users,
  Star,
  Briefcase,
  Globe,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Target,
  Filter,
  Search,
  Calendar,
  Clock,
  Award,
  Zap,
  Code,
  BookOpen,
  GraduationCap,
  Rocket,
  Link,
  ArrowRight,
  ChevronRight,
  Plus,
  Bookmark,
  Share2,
  Eye,
  ThumbsUp,
  MessageCircle,
  Bell,
  Settings,
  Download,
  Upload,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Brain,
  Compass,
  Route,
  Flag,
  Trophy,
  Crown,
  Gem,
  Flame,
  Heart,
  Sparkles
} from 'lucide-react'

// Industry data and job market insights
const jobMarketData = {
  trending: [
    {
      title: 'AI/ML Engineer',
      growth: '+45%',
      avgSalary: '$145k',
      openings: '12.5k',
      companies: ['OpenAI', 'Anthropic', 'Google', 'Microsoft'],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
      description: 'Develop and deploy AI models and machine learning systems',
      remote: 85,
      trend: 'up'
    },
    {
      title: 'Full Stack Developer',
      growth: '+28%',
      avgSalary: '$115k',
      openings: '25.8k',
      companies: ['Meta', 'Netflix', 'Stripe', 'Shopify'],
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      description: 'Build end-to-end web applications with modern technologies',
      remote: 75,
      trend: 'up'
    },
    {
      title: 'DevOps Engineer',
      growth: '+32%',
      avgSalary: '$125k',
      openings: '18.2k',
      companies: ['Amazon', 'Google', 'Microsoft', 'Docker'],
      skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      description: 'Streamline development and deployment processes',
      remote: 80,
      trend: 'up'
    },
    {
      title: 'Cybersecurity Specialist',
      growth: '+35%',
      avgSalary: '$135k',
      openings: '15.6k',
      companies: ['CrowdStrike', 'Palo Alto', 'Cisco', 'IBM'],
      skills: ['Security', 'Penetration Testing', 'Network Security', 'CISSP'],
      description: 'Protect organizations from cyber threats and vulnerabilities',
      remote: 65,
      trend: 'up'
    }
  ],
  salaryTrends: {
    byLocation: [
      { city: 'San Francisco', avgSalary: 145000, growth: '+8%', costIndex: 185 },
      { city: 'Seattle', avgSalary: 125000, growth: '+12%', costIndex: 145 },
      { city: 'New York', avgSalary: 130000, growth: '+10%', costIndex: 170 },
      { city: 'Austin', avgSalary: 105000, growth: '+18%', costIndex: 110 },
      { city: 'Remote', avgSalary: 115000, growth: '+25%', costIndex: 100 }
    ],
    byExperience: [
      { level: 'Entry (0-2 years)', salary: 75000, positions: 45 },
      { level: 'Mid (3-5 years)', salary: 110000, positions: 35 },
      { level: 'Senior (6-8 years)', salary: 145000, positions: 15 },
      { level: 'Lead (9+ years)', salary: 180000, positions: 5 }
    ],
    byTechnology: [
      { tech: 'React', demand: 'Very High', avgSalary: 105000, growth: '+15%' },
      { tech: 'Python', demand: 'Extremely High', avgSalary: 125000, growth: '+22%' },
      { tech: 'AWS', demand: 'High', avgSalary: 135000, growth: '+18%' },
      { tech: 'Machine Learning', demand: 'Extremely High', avgSalary: 155000, growth: '+35%' },
      { tech: 'Kubernetes', demand: 'High', avgSalary: 140000, growth: '+25%' }
    ]
  }
}

const companyProfiles = [
  {
    id: 1,
    name: 'Google',
    logo: '🔍',
    industry: 'Technology',
    size: '100k+ employees',
    rating: 4.5,
    culture: ['Innovation', 'Collaboration', 'Growth'],
    techStack: ['Go', 'Python', 'JavaScript', 'Kubernetes', 'TensorFlow'],
    openRoles: 1247,
    avgSalary: '$165k',
    benefits: ['Stock Options', '401k Match', 'Health Insurance', 'Learning Budget'],
    workModel: 'Hybrid',
    locations: ['Mountain View', 'New York', 'Austin', 'London'],
    description: 'Leading technology company focused on organizing world\'s information',
    perks: ['Free meals', '20% time', 'Gym access', 'Sabbatical'],
    interviewProcess: ['Phone Screen', 'Technical Rounds', 'System Design', 'Behavioral'],
    requirements: {
      frontend: ['React', 'TypeScript', 'CSS', 'Testing'],
      backend: ['Python', 'Go', 'Microservices', 'SQL'],
      devops: ['GCP', 'Kubernetes', 'Docker', 'Terraform']
    }
  },
  {
    id: 2,
    name: 'Meta',
    logo: '📘',
    industry: 'Social Media',
    size: '50k+ employees',
    rating: 4.2,
    culture: ['Move Fast', 'Be Bold', 'Focus on Impact'],
    techStack: ['React', 'GraphQL', 'Python', 'Hack', 'PyTorch'],
    openRoles: 892,
    avgSalary: '$175k',
    benefits: ['RSUs', 'Health Coverage', 'Wellness Programs', 'Education Support'],
    workModel: 'Remote-first',
    locations: ['Menlo Park', 'Seattle', 'New York', 'London'],
    description: 'Building the next evolution of social technology',
    perks: ['Free food', 'Fitness reimbursement', 'Commuter benefits'],
    interviewProcess: ['Recruiter Call', 'Technical Screen', 'Onsite Interviews'],
    requirements: {
      frontend: ['React', 'GraphQL', 'JavaScript', 'Flow/TypeScript'],
      backend: ['Python', 'PHP', 'C++', 'MySQL'],
      ml: ['PyTorch', 'Python', 'Computer Vision', 'NLP']
    }
  },
  {
    id: 3,
    name: 'Netflix',
    logo: '🎬',
    industry: 'Entertainment',
    size: '10k+ employees',
    rating: 4.3,
    culture: ['Freedom & Responsibility', 'High Performance', 'Candor'],
    techStack: ['Java', 'Python', 'React', 'AWS', 'Microservices'],
    openRoles: 234,
    avgSalary: '$185k',
    benefits: ['Unlimited PTO', 'Stock Options', 'Health Plans', 'Parental Leave'],
    workModel: 'Flexible',
    locations: ['Los Gatos', 'Los Angeles', 'New York', 'Amsterdam'],
    description: 'Entertainment company that revolutionized how people watch TV',
    perks: ['Unlimited vacation', 'Top-tier compensation', 'Learning stipend'],
    interviewProcess: ['Phone Interview', 'Technical Assessment', 'Final Interviews'],
    requirements: {
      backend: ['Java', 'Python', 'Microservices', 'AWS'],
      frontend: ['React', 'JavaScript', 'TypeScript', 'Performance'],
      data: ['Python', 'Spark', 'SQL', 'Machine Learning']
    }
  },
  {
    id: 4,
    name: 'Stripe',
    logo: '💳',
    industry: 'Fintech',
    size: '5k+ employees',
    rating: 4.6,
    culture: ['User Focus', 'High Agency', 'Global Scale'],
    techStack: ['Ruby', 'JavaScript', 'Go', 'React', 'Kubernetes'],
    openRoles: 567,
    avgSalary: '$170k',
    benefits: ['Equity', 'Health Coverage', 'Learning Budget', 'Home Office Setup'],
    workModel: 'Remote-friendly',
    locations: ['San Francisco', 'Seattle', 'New York', 'Dublin'],
    description: 'Financial infrastructure for the internet',
    perks: ['Learning budget', 'Remote work support', 'Charitable matching'],
    interviewProcess: ['Recruiter Screen', 'Technical Phone', 'Onsite/Virtual'],
    requirements: {
      backend: ['Ruby', 'Go', 'Python', 'Distributed Systems'],
      frontend: ['React', 'TypeScript', 'JavaScript', 'Design Systems'],
      infra: ['Kubernetes', 'AWS', 'Terraform', 'Monitoring']
    }
  }
]

const industryReports = [
  {
    id: 1,
    title: '2024 State of Software Engineering',
    publisher: 'Stack Overflow',
    date: '2024-01-15',
    type: 'Annual Survey',
    insights: [
      'JavaScript remains the most popular language',
      'Remote work continues to grow at 25% YoY',
      'AI/ML skills see 45% salary premium',
      'Cloud skills are in highest demand'
    ],
    downloadUrl: '#',
    pages: 45,
    category: 'Technology Trends'
  },
  {
    id: 2,
    title: 'Tech Salary Report Q1 2024',
    publisher: 'Hired.com',
    date: '2024-01-20',
    type: 'Quarterly Report',
    insights: [
      'Senior engineers see 15% salary increase',
      'Startup equity compensation rises 20%',
      'Remote roles offer 10% salary premium',
      'AI specialization commands 35% premium'
    ],
    downloadUrl: '#',
    pages: 28,
    category: 'Compensation'
  },
  {
    id: 3,
    title: 'Future of Work in Tech',
    publisher: 'Gartner',
    date: '2024-01-10',
    type: 'Research Report',
    insights: [
      'Hybrid work becomes the new normal',
      '60% of companies adopt 4-day work week',
      'Skill-based hiring increases 40%',
      'Continuous learning becomes mandatory'
    ],
    downloadUrl: '#',
    pages: 67,
    category: 'Workplace Trends'
  }
]

const learningPaths = [
  {
    id: 1,
    title: 'Google Software Engineer Track',
    company: 'Google',
    duration: '8-12 months',
    difficulty: 'Advanced',
    skills: ['Python', 'System Design', 'Algorithms', 'Leadership'],
    modules: [
      { name: 'Google Coding Standards', duration: '2 weeks', completed: true },
      { name: 'Distributed Systems at Scale', duration: '4 weeks', completed: false },
      { name: 'Technical Leadership', duration: '3 weeks', completed: false },
      { name: 'System Design Interview Prep', duration: '6 weeks', completed: false }
    ],
    jobMatch: 92,
    salaryRange: '$150k - $300k',
    description: 'Comprehensive preparation for Google software engineering roles',
    enrolledStudents: 2847,
    successRate: 78,
    certification: true
  },
  {
    id: 2,
    title: 'Meta Frontend Specialist',
    company: 'Meta',
    duration: '6-9 months',
    difficulty: 'Intermediate',
    skills: ['React', 'GraphQL', 'Performance', 'Mobile'],
    modules: [
      { name: 'React Advanced Patterns', duration: '3 weeks', completed: true },
      { name: 'GraphQL Mastery', duration: '2 weeks', completed: true },
      { name: 'Performance Optimization', duration: '4 weeks', completed: false },
      { name: 'React Native Fundamentals', duration: '5 weeks', completed: false }
    ],
    jobMatch: 88,
    salaryRange: '$130k - $250k',
    description: 'Specialized track for Meta frontend engineering positions',
    enrolledStudents: 1923,
    successRate: 82,
    certification: true
  },
  {
    id: 3,
    title: 'AWS DevOps Professional',
    company: 'Amazon',
    duration: '10-14 months',
    difficulty: 'Expert',
    skills: ['AWS', 'Kubernetes', 'Infrastructure', 'Security'],
    modules: [
      { name: 'AWS Core Services', duration: '4 weeks', completed: false },
      { name: 'Container Orchestration', duration: '5 weeks', completed: false },
      { name: 'Infrastructure as Code', duration: '3 weeks', completed: false },
      { name: 'Security & Compliance', duration: '4 weeks', completed: false }
    ],
    jobMatch: 85,
    salaryRange: '$140k - $280k',
    description: 'Enterprise-grade DevOps skills for AWS environments',
    enrolledStudents: 1567,
    successRate: 75,
    certification: true
  }
]

const jobBoards = [
  { name: 'LinkedIn Jobs', url: 'https://linkedin.com/jobs', jobs: '25M+', focus: 'Professional Network' },
  { name: 'Indeed', url: 'https://indeed.com', jobs: '20M+', focus: 'General Jobs' },
  { name: 'AngelList', url: 'https://angel.co', jobs: '130k+', focus: 'Startups' },
  { name: 'Dice', url: 'https://dice.com', jobs: '90k+', focus: 'Tech Jobs' },
  { name: 'GitHub Jobs', url: 'https://jobs.github.com', jobs: '50k+', focus: 'Developer Roles' },
  { name: 'Stack Overflow Jobs', url: 'https://stackoverflow.com/jobs', jobs: '40k+', focus: 'Developer Community' }
]

const difficultyColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800',
  'Expert': 'bg-purple-100 text-purple-800'
}

export default function IndustryIntegrationPage() {
  const { user } = useUser()
  const [activeTab, setActiveTab] = useState('market')
  const [selectedCompany, setSelectedCompany] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Industry Connect
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Bridge the gap between learning and industry with real-world insights, company requirements, and direct job connections
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <Briefcase className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold text-white">72k+</div>
                <div className="text-sm text-white/80">Active Jobs</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <Building className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Partner Companies</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-white">+28%</div>
                <div className="text-sm text-white/80">Avg Growth</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-2xl font-bold text-white">$125k</div>
                <div className="text-sm text-white/80">Avg Salary</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/10 backdrop-blur-sm p-1 rounded-lg">
          {[
            { id: 'market', name: 'Job Market', icon: <BarChart3 className="w-4 h-4" /> },
            { id: 'companies', name: 'Company Insights', icon: <Building className="w-4 h-4" /> },
            { id: 'paths', name: 'Learning Paths', icon: <Route className="w-4 h-4" /> },
            { id: 'reports', name: 'Industry Reports', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'connect', name: 'Job Boards', icon: <ExternalLink className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Job Market Tab */}
        {activeTab === 'market' && (
          <div className="space-y-8">
            {/* Trending Roles */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending Tech Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {jobMarketData.trending.map((role, index) => (
                    <div key={index} className="p-6 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{role.title}</h3>
                          <p className="text-white/80 mb-3">{role.description}</p>
                          <div className="flex items-center gap-6 text-sm text-white/70">
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4 text-green-400" />
                              <span>{role.growth} growth</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4 text-yellow-400" />
                              <span>{role.avgSalary} avg</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4 text-blue-400" />
                              <span>{role.openings} jobs</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Globe className="w-4 h-4 text-purple-400" />
                              <span>{role.remote}% remote</span>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          View Jobs
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-white mb-2">Required Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map(skill => (
                              <Badge key={skill} variant="outline" className="text-blue-300 border-blue-300">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Top Hiring Companies</h4>
                          <div className="flex flex-wrap gap-2">
                            {role.companies.map(company => (
                              <Badge key={company} className="bg-purple-600">
                                {company}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Salary Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Salary by Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobMarketData.salaryTrends.byLocation.map((location, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <div className="font-medium text-white">{location.city}</div>
                          <div className="text-sm text-green-400">{location.growth} growth</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white">${(location.avgSalary / 1000).toFixed(0)}k</div>
                          <div className="text-xs text-white/60">COL: {location.costIndex}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Salary by Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobMarketData.salaryTrends.byExperience.map((exp, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div>
                          <div className="font-medium text-white">{exp.level}</div>
                          <div className="text-sm text-white/60">{exp.positions}% of positions</div>
                        </div>
                        <div className="font-bold text-white">${(exp.salary / 1000).toFixed(0)}k</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technology Demand */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technology Demand & Salary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {jobMarketData.salaryTrends.byTechnology.map((tech, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg text-center">
                      <div className="font-semibold text-white mb-1">{tech.tech}</div>
                      <div className="text-lg font-bold text-green-400 mb-1">${(tech.avgSalary / 1000).toFixed(0)}k</div>
                      <div className="text-sm text-blue-400 mb-1">{tech.growth}</div>
                      <Badge className={`text-xs ${
                        tech.demand === 'Extremely High' ? 'bg-red-600' :
                        tech.demand === 'Very High' ? 'bg-orange-600' :
                        'bg-blue-600'
                      }`}>
                        {tech.demand}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Top Tech Companies</h2>
                <p className="text-white/70">Explore company cultures, requirements, and opportunities</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyProfiles.map((company) => (
                <Card key={company.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{company.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{company.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/70 mb-3">
                          <span>{company.industry}</span>
                          <span>{company.size}</span>
                          <span>{company.workModel}</span>
                        </div>
                        <p className="text-white/80 text-sm">{company.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-white">{company.openRoles}</div>
                        <div className="text-sm text-white/70">Open Roles</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-400">{company.avgSalary}</div>
                        <div className="text-sm text-white/70">Avg Salary</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="font-medium text-white mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {company.techStack.map(tech => (
                            <Badge key={tech} variant="outline" className="text-blue-300 border-blue-300 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Culture Values</h4>
                        <div className="flex flex-wrap gap-1">
                          {company.culture.map(value => (
                            <Badge key={value} className="bg-purple-600 text-xs">
                              {value}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button 
                        className="flex-1"
                        onClick={() => setSelectedCompany(company)}
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="text-white border-white/30">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Learning Paths Tab */}
        {activeTab === 'paths' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Company-Specific Learning Paths</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Tailored learning experiences designed to match specific company requirements and interview processes
              </p>
            </div>

            <div className="space-y-6">
              {learningPaths.map((path) => (
                <Card key={path.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{path.title}</h3>
                          <Badge className="bg-blue-600">
                            {path.jobMatch}% Match
                          </Badge>
                          <Badge className={difficultyColors[path.difficulty]}>
                            {path.difficulty}
                          </Badge>
                        </div>
                        <p className="text-white/80 mb-3">{path.description}</p>
                        <div className="flex items-center gap-6 text-sm text-white/70">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{path.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{path.salaryRange}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{path.enrolledStudents} enrolled</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Trophy className="w-4 h-4" />
                            <span>{path.successRate}% success rate</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium text-white mb-3">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map(skill => (
                            <Badge key={skill} variant="outline" className="text-green-300 border-green-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-3">Learning Modules</h4>
                        <div className="space-y-2">
                          {path.modules.slice(0, 2).map((module, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                {module.completed ? (
                                  <CheckCircle className="w-4 h-4 text-green-400" />
                                ) : (
                                  <div className="w-4 h-4 border-2 border-white/30 rounded-full"></div>
                                )}
                                <span className="text-white/80">{module.name}</span>
                              </div>
                              <span className="text-white/60">{module.duration}</span>
                            </div>
                          ))}
                          {path.modules.length > 2 && (
                            <div className="text-xs text-white/60">
                              +{path.modules.length - 2} more modules
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button className="flex-1">
                        Start Learning Path
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="text-white border-white/30">
                        View Curriculum
                      </Button>
                      {path.certification && (
                        <Badge className="bg-yellow-600">
                          <Award className="w-3 h-3 mr-1" />
                          Certified
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Industry Reports & Insights</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Stay informed with the latest industry trends, salary reports, and market analysis
              </p>
            </div>

            <div className="space-y-6">
              {industryReports.map((report) => (
                <Card key={report.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{report.title}</h3>
                          <Badge className="bg-purple-600">
                            {report.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/70 mb-3">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{report.publisher}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(report.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{report.pages} pages</span>
                          </div>
                          <Badge variant="outline" className="text-white border-white/30">
                            {report.category}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" className="text-white border-white/30">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-white mb-3">Key Insights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {report.insights.map((insight, index) => (
                          <div key={index} className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                            <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button className="flex-1">
                        Read Full Report
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="text-white border-white/30">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="text-white border-white/30">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Job Boards Tab */}
        {activeTab === 'connect' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Direct Job Board Connections</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Access top job platforms with optimized search filters based on your learning progress
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobBoards.map((board, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <ExternalLink className="w-12 h-12 mx-auto text-blue-400 mb-3" />
                      <h3 className="text-lg font-semibold text-white">{board.name}</h3>
                      <p className="text-white/70 text-sm">{board.focus}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-green-400">{board.jobs}</div>
                      <div className="text-sm text-white/60">Available Jobs</div>
                    </div>

                    <Button 
                      className="w-full"
                      onClick={() => window.open(board.url, '_blank')}
                    >
                      Browse Jobs
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Apply Feature */}
            <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Quick Apply with AI</h3>
                <p className="text-white/80 mb-4 max-w-2xl mx-auto">
                  Let our AI assistant help you find and apply to relevant positions based on your skills and preferences
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start AI Job Search
                  <Brain className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Company Detail Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{selectedCompany.logo}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedCompany.name}</h2>
                    <p className="text-white/70">{selectedCompany.industry} • {selectedCompany.size}</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCompany(null)}
                  className="text-white border-white/30"
                >
                  ✕
                </Button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Role Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(selectedCompany.requirements).map(([role, skills]) => (
                    <div key={role} className="p-4 bg-white/5 rounded-lg">
                      <h4 className="font-medium text-white mb-2 capitalize">{role}</h4>
                      <div className="space-y-1">
                        {(skills as string[]).map((skill: string) => (
                          <div key={skill} className="text-sm text-white/80">• {skill}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Interview Process</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedCompany.interviewProcess.map((step: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <Badge variant="outline" className="text-blue-300 border-blue-300">
                        {index + 1}. {step}
                      </Badge>
                      {index < selectedCompany.interviewProcess.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-white/40 mx-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Benefits & Perks</h3>
                  <div className="space-y-2">
                    {(selectedCompany.benefits as string[]).map((benefit: string) => (
                      <div key={benefit} className="text-white/80">• {benefit}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Office Perks</h3>
                  <div className="space-y-2">
                    {(selectedCompany.perks as string[]).map((perk: string) => (
                      <div key={perk} className="text-white/80">• {perk}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">
                  View Open Positions
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="text-white border-white/30">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
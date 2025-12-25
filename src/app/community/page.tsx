'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/auth-context'
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Reply, 
  Pin, 
  Search, 
  Plus, 
  Filter, 
  TrendingUp,
  Clock,
  User,
  Star,
  Crown,
  Award,
  BookOpen,
  Code,
  Lightbulb,
  HelpCircle,
  Zap,
  Target,
  Globe,
  Calendar,
  MapPin,
  UserCheck,
  MessageCircle,
  ThumbsUp,
  Eye,
  ArrowRight,
  ChevronRight,
  Flame,
  Trophy,
  Briefcase,
  GraduationCap,
  Coffee,
  Video,
  Mic,
  FileText,
  Link,
  Share2
} from 'lucide-react'

// Enhanced community data with comprehensive features
const forumCategories = [
  {
    id: 'general',
    name: 'General Discussion',
    description: 'General tech discussions and career advice',
    icon: <MessageSquare className="w-5 h-5" />,
    color: 'bg-blue-500',
    topics: 245,
    posts: 1892,
    moderators: ['Alice Johnson', 'Bob Smith']
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'React, Vue, Angular, and more',
    icon: <Code className="w-5 h-5" />,
    color: 'bg-purple-500',
    topics: 189,
    posts: 1456,
    moderators: ['Carol Davis', 'David Wilson']
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Node.js, Python, Java, databases',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'bg-green-500',
    topics: 156,
    posts: 1234,
    moderators: ['Eve Brown', 'Frank Miller']
  },
  {
    id: 'career',
    name: 'Career Guidance',
    description: 'Job interviews, salary, career transitions',
    icon: <Briefcase className="w-5 h-5" />,
    color: 'bg-orange-500',
    topics: 98,
    posts: 876,
    moderators: ['Grace Lee', 'Henry Taylor']
  },
  {
    id: 'projects',
    name: 'Project Showcase',
    description: 'Share your projects and get feedback',
    icon: <Trophy className="w-5 h-5" />,
    color: 'bg-red-500',
    topics: 76,
    posts: 543,
    moderators: ['Ivy Chen', 'Jack Rodriguez']
  },
  {
    id: 'help',
    name: 'Help & Support',
    description: 'Get help with coding problems',
    icon: <HelpCircle className="w-5 h-5" />,
    color: 'bg-yellow-500',
    topics: 312,
    posts: 2145,
    moderators: ['Kelly Martinez', 'Leo Anderson']
  }
]

const recentTopics = [
  {
    id: 1,
    title: 'Best practices for React state management in 2024',
    category: 'frontend',
    author: {
      name: 'Sarah Chen',
      avatar: '/api/placeholder/32/32',
      badge: 'Expert',
      reputation: 2840
    },
    replies: 23,
    views: 456,
    likes: 34,
    lastActivity: '2 hours ago',
    isPinned: true,
    isHot: true,
    tags: ['React', 'State Management', 'Redux', 'Zustand']
  },
  {
    id: 2,
    title: 'How to transition from frontend to fullstack development?',
    category: 'career',
    author: {
      name: 'Mike Johnson',
      avatar: '/api/placeholder/32/32',
      badge: 'Beginner',
      reputation: 120
    },
    replies: 17,
    views: 289,
    likes: 12,
    lastActivity: '4 hours ago',
    isPinned: false,
    isHot: false,
    tags: ['Career', 'Fullstack', 'Learning Path']
  },
  {
    id: 3,
    title: 'Built a real-time chat app with Next.js and Socket.IO',
    category: 'projects',
    author: {
      name: 'Emma Davis',
      avatar: '/api/placeholder/32/32',
      badge: 'Advanced',
      reputation: 1560
    },
    replies: 8,
    views: 134,
    likes: 28,
    lastActivity: '6 hours ago',
    isPinned: false,
    isHot: true,
    tags: ['Next.js', 'Socket.IO', 'Project', 'Real-time']
  },
  {
    id: 4,
    title: 'Need help debugging TypeScript generic types',
    category: 'help',
    author: {
      name: 'Alex Kim',
      avatar: '/api/placeholder/32/32',
      badge: 'Intermediate',
      reputation: 680
    },
    replies: 5,
    views: 78,
    likes: 3,
    lastActivity: '1 hour ago',
    isPinned: false,
    isHot: false,
    tags: ['TypeScript', 'Generics', 'Help']
  }
]

const studyGroups = [
  {
    id: 1,
    name: 'React Mastery Group',
    description: 'Weekly study sessions on advanced React concepts',
    members: 42,
    maxMembers: 50,
    category: 'Frontend',
    schedule: 'Saturdays 2 PM EST',
    nextSession: '2024-01-20T19:00:00Z',
    leader: {
      name: 'Jessica Wong',
      avatar: '/api/placeholder/40/40',
      title: 'Senior React Developer'
    },
    topics: ['Hooks', 'Context API', 'Performance', 'Testing'],
    difficulty: 'Intermediate',
    isActive: true,
    format: 'Online',
    platform: 'Discord + Zoom'
  },
  {
    id: 2,
    name: 'Algorithm Study Circle',
    description: 'Daily practice sessions for coding interviews',
    members: 28,
    maxMembers: 30,
    category: 'Algorithms',
    schedule: 'Daily 6 PM EST',
    nextSession: '2024-01-18T23:00:00Z',
    leader: {
      name: 'David Park',
      avatar: '/api/placeholder/40/40',
      title: 'Software Engineer at Google'
    },
    topics: ['LeetCode', 'System Design', 'Mock Interviews'],
    difficulty: 'Advanced',
    isActive: true,
    format: 'Online',
    platform: 'Discord'
  },
  {
    id: 3,
    name: 'Fullstack Bootcamp',
    description: '12-week intensive fullstack development program',
    members: 15,
    maxMembers: 20,
    category: 'Fullstack',
    schedule: 'Mon/Wed/Fri 7 PM EST',
    nextSession: '2024-01-19T00:00:00Z',
    leader: {
      name: 'Maria Rodriguez',
      avatar: '/api/placeholder/40/40',
      title: 'Lead Developer'
    },
    topics: ['MERN Stack', 'DevOps', 'Database Design', 'Deployment'],
    difficulty: 'Beginner',
    isActive: true,
    format: 'Hybrid',
    platform: 'In-person + Zoom'
  }
]

const mentors = [
  {
    id: 1,
    name: 'Dr. Jennifer Liu',
    title: 'Principal Engineer at Netflix',
    avatar: '/api/placeholder/64/64',
    expertise: ['System Design', 'Distributed Systems', 'Leadership'],
    experience: '12+ years',
    rating: 4.9,
    reviews: 89,
    hourlyRate: 150,
    availability: 'Available',
    languages: ['English', 'Mandarin'],
    timezone: 'PST',
    specialties: ['Career Transition', 'Technical Leadership', 'Interview Prep'],
    bio: 'Passionate about helping engineers grow their careers and build scalable systems.',
    sessionFormats: ['1-on-1', 'Code Review', 'Mock Interview'],
    responseTime: '< 2 hours'
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    title: 'Senior Frontend Architect',
    avatar: '/api/placeholder/64/64',
    expertise: ['React', 'TypeScript', 'Performance'],
    experience: '8+ years',
    rating: 4.8,
    reviews: 67,
    hourlyRate: 120,
    availability: 'Busy',
    languages: ['English'],
    timezone: 'EST',
    specialties: ['Frontend Architecture', 'Performance Optimization', 'Mentoring'],
    bio: 'Helping developers master modern frontend technologies and best practices.',
    sessionFormats: ['1-on-1', 'Group Sessions', 'Project Review'],
    responseTime: '< 4 hours'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    title: 'Full Stack Developer at Stripe',
    avatar: '/api/placeholder/64/64',
    expertise: ['Node.js', 'GraphQL', 'Cloud Architecture'],
    experience: '6+ years',
    rating: 4.9,
    reviews: 45,
    hourlyRate: 100,
    availability: 'Available',
    languages: ['English', 'Hindi'],
    timezone: 'IST',
    specialties: ['API Design', 'Database Optimization', 'Career Growth'],
    bio: 'Dedicated to empowering developers with practical skills and industry insights.',
    sessionFormats: ['1-on-1', 'Technical Review', 'Career Counseling'],
    responseTime: '< 1 hour'
  }
]

const difficultyColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
}

const getBadgeIcon = (badge: string) => {
  switch (badge) {
    case 'Expert': return <Crown className="w-3 h-3" />
    case 'Advanced': return <Star className="w-3 h-3" />
    case 'Intermediate': return <Award className="w-3 h-3" />
    default: return <User className="w-3 h-3" />
  }
}

export default function CommunityPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('forums')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredTopics = recentTopics.filter(topic => {
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatNextSession = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = date.getTime() - now.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    if (days > 0) return `in ${days} day${days > 1 ? 's' : ''}`
    if (hours > 0) return `in ${hours} hour${hours > 1 ? 's' : ''}`
    return 'starting soon'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Back to Dashboard Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Button 
          asChild
          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
        >
          <a href="/dashboard" className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Dashboard
          </a>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Community Hub
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Connect with developers, join study groups, find mentors, and grow together
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold text-white">12,453</div>
                <div className="text-sm text-white/80">Members</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold text-white">8,967</div>
                <div className="text-sm text-white/80">Discussions</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <GraduationCap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-2xl font-bold text-white">156</div>
                <div className="text-sm text-white/80">Study Groups</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <UserCheck className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-white">89</div>
                <div className="text-sm text-white/80">Mentors</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/10 backdrop-blur-sm p-1 rounded-lg">
          {[
            { id: 'forums', name: 'Forums', icon: <MessageSquare className="w-4 h-4" /> },
            { id: 'groups', name: 'Study Groups', icon: <Users className="w-4 h-4" /> },
            { id: 'mentors', name: 'Mentors', icon: <UserCheck className="w-4 h-4" /> },
            { id: 'events', name: 'Events', icon: <Calendar className="w-4 h-4" /> }
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

        {/* Forums Tab */}
        {activeTab === 'forums' && (
          <div className="space-y-8">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-white border-white/30"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Topic
                </Button>
              </div>
            </div>

            {/* Forum Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forumCategories.map(category => (
                <Card key={category.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{category.name}</h3>
                        <p className="text-sm text-white/70 mb-3">{category.description}</p>
                        <div className="flex items-center gap-4 text-xs text-white/60">
                          <span>{category.topics} topics</span>
                          <span>{category.posts} posts</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Topics */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Recent Discussions</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-white border-white/30">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Trending
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredTopics.map(topic => (
                  <Card key={topic.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src={topic.author.avatar} 
                            alt={topic.author.name}
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {topic.isPinned && <Pin className="w-4 h-4 text-yellow-400" />}
                              {topic.isHot && <Flame className="w-4 h-4 text-red-400" />}
                              <h3 className="font-semibold text-white hover:text-blue-300 transition-colors">
                                {topic.title}
                              </h3>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm text-white/70">by</span>
                            <span className="text-sm font-medium text-white">{topic.author.name}</span>
                            <div className="flex items-center gap-1">
                              {getBadgeIcon(topic.author.badge)}
                              <Badge variant="outline" className="text-xs text-white/70 border-white/30">
                                {topic.author.badge}
                              </Badge>
                            </div>
                            <span className="text-xs text-white/50">•</span>
                            <span className="text-xs text-white/50">{topic.lastActivity}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {topic.tags.map(tag => (
                              <Badge key={tag} variant="secondary" className="text-xs bg-white/10 text-white/80">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-6 text-sm text-white/60">
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{topic.replies} replies</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{topic.views} views</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{topic.likes} likes</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/40" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Study Groups Tab */}
        {activeTab === 'groups' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Study Groups</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Group
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {studyGroups.map(group => (
                <Card key={group.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{group.name}</h3>
                        <p className="text-white/80 text-sm mb-3">{group.description}</p>
                        <Badge className={difficultyColors[group.difficulty]}>
                          {group.difficulty}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-white border-white/30">
                        {group.format}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={group.leader.avatar} 
                        alt={group.leader.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium text-white">{group.leader.name}</div>
                        <div className="text-sm text-white/70">{group.leader.title}</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Users className="w-4 h-4" />
                        <span>{group.members}/{group.maxMembers} members</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Clock className="w-4 h-4" />
                        <span>{group.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Calendar className="w-4 h-4" />
                        <span>Next session {formatNextSession(group.nextSession)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Video className="w-4 h-4" />
                        <span>{group.platform}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {group.topics.slice(0, 3).map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs text-white/70 border-white/30">
                          {topic}
                        </Badge>
                      ))}
                      {group.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs text-white/70 border-white/30">
                          +{group.topics.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        disabled={group.members >= group.maxMembers}
                      >
                        {group.members >= group.maxMembers ? 'Full' : 'Join Group'}
                      </Button>
                      <Button variant="outline" size="sm" className="text-white border-white/30">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Mentors Tab */}
        {activeTab === 'mentors' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Find a Mentor</h2>
              <Button variant="outline" className="text-white border-white/30">
                <UserCheck className="w-4 h-4 mr-2" />
                Become a Mentor
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mentors.map(mentor => (
                <Card key={mentor.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={mentor.avatar} 
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{mentor.name}</h3>
                        <p className="text-sm text-white/80 mb-2">{mentor.title}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-white">{mentor.rating}</span>
                          </div>
                          <span className="text-xs text-white/60">({mentor.reviews} reviews)</span>
                        </div>
                      </div>
                      <Badge 
                        variant={mentor.availability === 'Available' ? 'default' : 'secondary'}
                        className={mentor.availability === 'Available' ? 'bg-green-600' : 'bg-gray-600'}
                      >
                        {mentor.availability}
                      </Badge>
                    </div>

                    <p className="text-sm text-white/80 mb-4">{mentor.bio}</p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="text-sm font-medium text-white mb-1">Expertise</div>
                        <div className="flex flex-wrap gap-1">
                          {mentor.expertise.map(skill => (
                            <Badge key={skill} variant="outline" className="text-xs text-white/70 border-white/30">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-white mb-1">Specialties</div>
                        <div className="flex flex-wrap gap-1">
                          {mentor.specialties.slice(0, 2).map(specialty => (
                            <Badge key={specialty} variant="secondary" className="text-xs bg-white/10 text-white/80">
                              {specialty}
                            </Badge>
                          ))}
                          {mentor.specialties.length > 2 && (
                            <Badge variant="secondary" className="text-xs bg-white/10 text-white/80">
                              +{mentor.specialties.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs text-white/60 mb-4">
                      <div>
                        <span className="block">Experience</span>
                        <span className="text-white font-medium">{mentor.experience}</span>
                      </div>
                      <div>
                        <span className="block">Response Time</span>
                        <span className="text-white font-medium">{mentor.responseTime}</span>
                      </div>
                      <div>
                        <span className="block">Rate</span>
                        <span className="text-white font-medium">${mentor.hourlyRate}/hr</span>
                      </div>
                      <div>
                        <span className="block">Timezone</span>
                        <span className="text-white font-medium">{mentor.timezone}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        disabled={mentor.availability !== 'Available'}
                      >
                        Book Session
                      </Button>
                      <Button variant="outline" size="sm" className="text-white border-white/30">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>

            <div className="text-center py-16">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-white/50" />
              <h3 className="text-xl font-semibold text-white mb-2">Events Coming Soon</h3>
              <p className="text-white/70 mb-6">
                We're working on an amazing events system. Stay tuned for webinars, workshops, and networking events!
              </p>
              <Button variant="outline" className="text-white border-white/30">
                Get Notified
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
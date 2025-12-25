'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '../../components/ui/badge'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/auth-context'
import React from 'react'
import { 
  Code, 
  Trophy, 
  Clock, 
  Star, 
  Play, 
  CheckCircle, 
  Brain, 
  Target, 
  Award, 
  Filter, 
  Search, 
  TrendingUp,
  Users,
  BookOpen,
  Zap,
  ChevronRight,
  Download,
  Share2,
  Heart,
  Flag,
  ArrowRight,
  Timer,
  Sparkles,
  Flame,
  Shield,
  Crown
} from 'lucide-react'

// Enhanced challenges data with comprehensive categories
const challengeCategories: Record<string, {
  name: string;
  icon: React.ReactElement;
  color: string;
  description: string;
}> = {
  'frontend': {
    name: 'Frontend Development',
    icon: <Code className="w-5 h-5" />,
    color: 'bg-blue-500',
    description: 'Build stunning user interfaces'
  },
  'backend': {
    name: 'Backend Development', 
    icon: <Shield className="w-5 h-5" />,
    color: 'bg-green-500',
    description: 'Create robust server applications'
  },
  'fullstack': {
    name: 'Full Stack',
    icon: <Crown className="w-5 h-5" />,
    color: 'bg-purple-500',
    description: 'End-to-end development mastery'
  },
  'algorithms': {
    name: 'Algorithms & DS',
    icon: <Brain className="w-5 h-5" />,
    color: 'bg-orange-500',
    description: 'Problem solving fundamentals'
  },
  'system-design': {
    name: 'System Design',
    icon: <Target className="w-5 h-5" />,
    color: 'bg-red-500',
    description: 'Scalable architecture patterns'
  }
}

const challengesData = [
  {
    id: 'react-quiz-1',
    title: 'React Fundamentals Quiz',
    type: 'quiz',
    category: 'frontend',
    difficulty: 'Beginner',
    duration: '15 min',
    questions: 20,
    points: 100,
    attempts: 12453,
    passRate: 78,
    description: 'Test your knowledge of React basics including components, props, and state',
    tags: ['React', 'Components', 'JSX'],
    featured: true,
    aiGenerated: true,
    prerequisites: ['Basic JavaScript'],
    learningOutcome: 'Master React component fundamentals'
  },
  {
    id: 'js-coding-1',
    title: 'JavaScript Array Methods Challenge',
    type: 'coding',
    category: 'frontend',
    difficulty: 'Intermediate',
    duration: '45 min',
    points: 250,
    attempts: 8932,
    passRate: 65,
    description: 'Solve complex problems using JavaScript array methods like map, filter, reduce',
    tags: ['JavaScript', 'Arrays', 'Functional Programming'],
    featured: false,
    aiGenerated: true,
    prerequisites: ['JavaScript ES6'],
    learningOutcome: 'Master functional programming concepts'
  },
  {
    id: 'node-project-1',
    title: 'Build a REST API',
    type: 'project',
    category: 'backend',
    difficulty: 'Intermediate',
    duration: '2 hours',
    points: 500,
    attempts: 5421,
    passRate: 72,
    description: 'Create a complete REST API with authentication and database integration',
    tags: ['Node.js', 'Express', 'MongoDB', 'Authentication'],
    featured: true,
    aiGenerated: false,
    prerequisites: ['Node.js basics', 'HTTP protocols'],
    learningOutcome: 'Build production-ready APIs'
  },
  {
    id: 'algorithm-1',
    title: 'Binary Search Tree Challenges',
    type: 'coding',
    category: 'algorithms',
    difficulty: 'Advanced',
    duration: '60 min',
    points: 350,
    attempts: 3241,
    passRate: 45,
    description: 'Implement and optimize binary search tree operations',
    tags: ['Data Structures', 'Trees', 'Algorithms'],
    featured: false,
    aiGenerated: true,
    prerequisites: ['Basic algorithms', 'Recursion'],
    learningOutcome: 'Master tree data structures'
  },
  {
    id: 'fullstack-quiz-1',
    title: 'Full Stack Architecture Quiz',
    type: 'quiz',
    category: 'fullstack',
    difficulty: 'Advanced',
    duration: '30 min',
    questions: 25,
    points: 200,
    attempts: 2156,
    passRate: 58,
    description: 'Comprehensive test on full stack development concepts and best practices',
    tags: ['Architecture', 'Databases', 'DevOps', 'Security'],
    featured: true,
    aiGenerated: true,
    prerequisites: ['Frontend & Backend experience'],
    learningOutcome: 'Understand full stack architecture'
  },
  {
    id: 'system-design-1',
    title: 'Design a Chat Application',
    type: 'design',
    category: 'system-design',
    difficulty: 'Advanced',
    duration: '90 min',
    points: 600,
    attempts: 1832,
    passRate: 42,
    description: 'Design the architecture for a scalable real-time chat application',
    tags: ['System Design', 'Scalability', 'Real-time', 'WebSocket'],
    featured: false,
    aiGenerated: false,
    prerequisites: ['Distributed systems', 'Database design'],
    learningOutcome: 'Design scalable real-time systems'
  }
]

const difficultyColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800', 
  'Advanced': 'bg-red-100 text-red-800'
}

const typeIcons: Record<string, React.ReactElement> = {
  'quiz': <BookOpen className="w-4 h-4" />,
  'coding': <Code className="w-4 h-4" />,
  'project': <Trophy className="w-4 h-4" />,
  'design': <Target className="w-4 h-4" />
}

interface UserChallengeProgress {
  [key: string]: {
    completed: boolean
    score?: number
    attempts: number
    timeSpent: number
    completedAt?: Date
  }
}

export default function ChallengesPage() {
  const { user } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [userProgress, setUserProgress] = useState<UserChallengeProgress>({})
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    // Load user progress from localStorage or API
    const savedProgress = localStorage.getItem('user-challenge-progress')
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress))
    }
  }, [])

  const filteredChallenges = challengesData.filter(challenge => {
    const matchesCategory = selectedCategory === 'all' || challenge.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty
    const matchesType = selectedType === 'all' || challenge.type === selectedType
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         challenge.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesDifficulty && matchesType && matchesSearch
  })

  const featuredChallenges = challengesData.filter(challenge => challenge.featured)

  const calculateUserStats = () => {
    const completedChallenges = Object.values(userProgress).filter(p => p.completed).length
    const totalPoints = Object.entries(userProgress)
      .filter(([_, progress]) => progress.completed)
      .reduce((total, [challengeId, progress]) => {
        const challenge = challengesData.find(c => c.id === challengeId)
        return total + (challenge?.points || 0)
      }, 0)
    
    const averageScore = Object.values(userProgress)
      .filter(p => p.completed && p.score)
      .reduce((sum, p, _, arr) => sum + (p.score || 0) / arr.length, 0)

    return { completedChallenges, totalPoints, averageScore }
  }

  const startChallenge = (challengeId: string) => {
    // Navigate to challenge detail page or start challenge
    window.location.href = `/challenges/${challengeId}`
  }

  const { completedChallenges, totalPoints, averageScore } = calculateUserStats()

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
              <Trophy className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Challenges & Quizzes
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Test your skills, earn certificates, and track your progress with AI-powered challenges
            </p>
          </div>

          {/* User Stats */}
          {user && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">{completedChallenges}</div>
                  <div className="text-sm text-white/80">Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-white">{totalPoints.toLocaleString()}</div>
                  <div className="text-sm text-white/80">Total Points</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <div className="text-2xl font-bold text-white">{averageScore.toFixed(1)}%</div>
                  <div className="text-sm text-white/80">Avg Score</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Flame className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-sm text-white/80">Day Streak</div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Challenge Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Challenge Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="h-20 flex-col gap-2"
              onClick={() => setSelectedCategory('all')}
            >
              <Sparkles className="w-6 h-6" />
              <span>All</span>
            </Button>
            {Object.entries(challengeCategories).map(([key, category]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? 'default' : 'outline'}
                className="h-20 flex-col gap-2"
                onClick={() => setSelectedCategory(key)}
              >
                {category.icon}
                <span className="text-xs text-center">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search challenges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <Card className="p-4 bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                  >
                    <option value="all">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                  >
                    <option value="all">All Types</option>
                    <option value="quiz">Quiz</option>
                    <option value="coding">Coding</option>
                    <option value="project">Project</option>
                    <option value="design">Design</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedDifficulty('all')
                      setSelectedType('all')
                      setSearchQuery('')
                    }}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Featured Challenges */}
        {featuredChallenges.length > 0 && selectedCategory === 'all' && !searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Featured Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredChallenges.map((challenge) => {
                const isCompleted = userProgress[challenge.id]?.completed
                const userScore = userProgress[challenge.id]?.score
                
                return (
                  <Card 
                    key={challenge.id} 
                    className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:border-white/40"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          {typeIcons[challenge.type]}
                          {challenge.aiGenerated && (
                            <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                              AI Generated
                            </Badge>
                          )}
                        </div>
                        {isCompleted && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                      </div>
                      <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                        {challenge.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={difficultyColors[challenge.difficulty]}>
                          {challenge.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-white border-white/30">
                          {challenge.points} pts
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-white/70">
                          <Clock className="w-3 h-3" />
                          {challenge.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {challenge.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {challenge.attempts.toLocaleString()} attempts
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {challenge.passRate}% pass rate
                        </div>
                      </div>

                      {isCompleted && userScore && (
                        <div className="mb-4 p-2 bg-green-500/20 rounded-lg">
                          <div className="text-sm text-green-300">
                            Your Score: {userScore}%
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1"
                          onClick={() => startChallenge(challenge.id)}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          {isCompleted ? 'Retake' : 'Start'}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* All Challenges */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              All Challenges ({filteredChallenges.length})
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Progress
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => {
              const isCompleted = userProgress[challenge.id]?.completed
              const userScore = userProgress[challenge.id]?.score
              const attempts = userProgress[challenge.id]?.attempts || 0
              
              return (
                <Card 
                  key={challenge.id} 
                  className="group hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/30"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {typeIcons[challenge.type]}
                        <Badge variant="outline" className="text-xs text-white border-white/30">
                          {challengeCategories[challenge.category]?.name}
                        </Badge>
                        {challenge.aiGenerated && (
                          <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                            AI
                          </Badge>
                        )}
                      </div>
                      {isCompleted && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                      {challenge.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={difficultyColors[challenge.difficulty]}>
                        {challenge.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-white border-white/30">
                        {challenge.points} pts
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-white/70">
                        <Clock className="w-3 h-3" />
                        {challenge.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {challenge.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex flex-wrap gap-1">
                        {challenge.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs text-white/70 border-white/20">
                            {tag}
                          </Badge>
                        ))}
                        {challenge.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs text-white/70 border-white/20">
                            +{challenge.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {challenge.attempts.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {challenge.passRate}%
                      </div>
                      {attempts > 0 && (
                        <div className="flex items-center gap-1">
                          <Timer className="w-3 h-3" />
                          {attempts} attempts
                        </div>
                      )}
                    </div>

                    {isCompleted && userScore && (
                      <div className="mb-4 p-2 bg-green-500/20 rounded-lg">
                        <div className="text-sm text-green-300">
                          Score: {userScore}% • {userProgress[challenge.id]?.completedAt && 
                            new Date(userProgress[challenge.id].completedAt!).toLocaleDateString()}
                        </div>
                      </div>
                    )}

                    <Button 
                      className="w-full group-hover:scale-105 transition-transform"
                      onClick={() => startChallenge(challenge.id)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {isCompleted ? 'Retake Challenge' : 'Start Challenge'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {filteredChallenges.length === 0 && (
          <Card className="text-center py-12 bg-white/5 backdrop-blur-sm">
            <CardContent>
              <Target className="w-16 h-16 mx-auto mb-4 text-white/50" />
              <h3 className="text-xl font-semibold text-white mb-2">No challenges found</h3>
              <p className="text-white/70 mb-4">
                Try adjusting your filters or search terms to find more challenges.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedDifficulty('all')
                  setSelectedType('all')
                  setSearchQuery('')
                }}
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
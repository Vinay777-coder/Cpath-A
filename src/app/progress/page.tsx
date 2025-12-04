'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '../../components/ui/badge'
import { useUser } from '@/contexts/auth-context'
import { 
  Trophy,
  Target,
  Calendar,
  Clock,
  Star,
  Flame,
  Award,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  CheckCircle,
  Medal,
  Crown,
  Gem,
  Rocket,
  Zap,
  Heart,
  Brain,
  Code,
  BookOpen,
  Users,
  Timer,
  MapPin,
  Flag,
  Gift,
  Sparkles,
  ArrowUp,
  ChevronRight,
  Plus,
  Edit,
  Share2,
  Download,
  RefreshCw,
  Calendar as CalendarIcon,
  ChevronDown,
  Filter,
  Eye,
  ThumbsUp,
  MessageCircle,
  Bell,
  ArrowRight,
  Settings,
  Info,
  Lock,
  Unlock,
  PlayCircle,
  PauseCircle,
  StopCircle
} from 'lucide-react'

// Enhanced progress tracking data
const progressData = {
  overview: {
    totalXP: 24850,
    level: 12,
    currentStreak: 15,
    longestStreak: 28,
    totalStudyTime: 247, // hours
    completedRoadmaps: 3,
    inProgressRoadmaps: 2,
    achievements: 24,
    rank: 'Expert Developer',
    nextLevelXP: 2150,
    currentLevelXP: 24850
  },
  dailyStats: [
    { date: '2024-01-15', studyTime: 3.5, xpGained: 350, challengesCompleted: 2 },
    { date: '2024-01-16', studyTime: 2.8, xpGained: 280, challengesCompleted: 1 },
    { date: '2024-01-17', studyTime: 4.2, xpGained: 420, challengesCompleted: 3 },
    { date: '2024-01-18', studyTime: 1.5, xpGained: 150, challengesCompleted: 1 },
    { date: '2024-01-19', studyTime: 3.8, xpGained: 380, challengesCompleted: 2 },
    { date: '2024-01-20', studyTime: 5.1, xpGained: 510, challengesCompleted: 4 },
    { date: '2024-01-21', studyTime: 2.7, xpGained: 270, challengesCompleted: 2 },
  ]
}

const achievements = [
  {
    id: 1,
    name: 'React Master',
    description: 'Complete all React fundamentals',
    icon: '⚛️',
    rarity: 'Epic',
    unlocked: true,
    progress: 100,
    xpReward: 500,
    unlockedDate: '2024-01-10',
    category: 'Skills'
  },
  {
    id: 2,
    name: 'Speed Learner',
    description: 'Complete 5 challenges in one day',
    icon: '⚡',
    rarity: 'Rare',
    unlocked: true,
    progress: 100,
    xpReward: 300,
    unlockedDate: '2024-01-15',
    category: 'Performance'
  },
  {
    id: 3,
    name: 'Consistency King',
    description: 'Maintain a 30-day learning streak',
    icon: '👑',
    rarity: 'Legendary',
    unlocked: false,
    progress: 50,
    xpReward: 1000,
    category: 'Dedication'
  },
  {
    id: 4,
    name: 'Code Warrior',
    description: 'Solve 100 coding challenges',
    icon: '⚔️',
    rarity: 'Epic',
    unlocked: false,
    progress: 73,
    xpReward: 750,
    category: 'Challenges'
  },
  {
    id: 5,
    name: 'Community Helper',
    description: 'Help 50 community members',
    icon: '🤝',
    rarity: 'Rare',
    unlocked: true,
    progress: 100,
    xpReward: 400,
    unlockedDate: '2024-01-08',
    category: 'Community'
  },
  {
    id: 6,
    name: 'Full Stack Hero',
    description: 'Master both frontend and backend',
    icon: '🚀',
    rarity: 'Legendary',
    unlocked: false,
    progress: 35,
    xpReward: 1500,
    category: 'Skills'
  }
]

const milestones = [
  {
    id: 1,
    title: 'First Roadmap Completed',
    description: 'Completed your first learning roadmap',
    date: '2023-12-15',
    type: 'roadmap',
    icon: '🗺️',
    celebrated: true
  },
  {
    id: 2,
    title: 'Level 10 Reached',
    description: 'Reached level 10 in your learning journey',
    date: '2024-01-05',
    type: 'level',
    icon: '🏆',
    celebrated: true
  },
  {
    id: 3,
    title: '200 Hours of Learning',
    description: 'Accumulated 200 hours of study time',
    date: '2024-01-18',
    type: 'time',
    icon: '⏰',
    celebrated: false
  },
  {
    id: 4,
    title: '50 Challenges Conquered',
    description: 'Successfully completed 50 coding challenges',
    date: '2024-01-20',
    type: 'challenge',
    icon: '💪',
    celebrated: false
  }
]

const weeklyGoals = [
  {
    id: 1,
    title: 'Complete React Advanced Patterns',
    target: 5,
    current: 3,
    unit: 'modules',
    deadline: '2024-01-28',
    priority: 'high',
    category: 'Skills'
  },
  {
    id: 2,
    title: 'Study 20 hours this week',
    target: 20,
    current: 12.5,
    unit: 'hours',
    deadline: '2024-01-28',
    priority: 'medium',
    category: 'Time'
  },
  {
    id: 3,
    title: 'Solve 15 coding challenges',
    target: 15,
    current: 8,
    unit: 'challenges',
    deadline: '2024-01-28',
    priority: 'high',
    category: 'Practice'
  }
]

const skillProgress = [
  { name: 'React', current: 85, target: 95, trend: '+5' },
  { name: 'TypeScript', current: 78, target: 90, trend: '+8' },
  { name: 'Node.js', current: 45, target: 70, trend: '+12' },
  { name: 'CSS/Tailwind', current: 88, target: 95, trend: '+3' },
  { name: 'Git/GitHub', current: 82, target: 90, trend: '+4' }
]

const streakData = {
  current: 15,
  longest: 28,
  thisWeek: [true, true, true, true, true, false, true],
  monthlyCalendar: Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    active: Math.random() > 0.3,
    intensity: Math.floor(Math.random() * 4)
  }))
}

const rarityColors: Record<string, string> = {
  'Common': 'bg-gray-500',
  'Rare': 'bg-blue-500',
  'Epic': 'bg-purple-500',
  'Legendary': 'bg-yellow-500'
}

const priorityColors: Record<string, string> = {
  'low': 'border-green-500 bg-green-500/10',
  'medium': 'border-yellow-500 bg-yellow-500/10',
  'high': 'border-red-500 bg-red-500/10'
}

export default function ProgressTrackingPage() {
  const { user } = useUser()
  const [activeTab, setActiveTab] = useState('overview')
  const [celebratingMilestone, setCelebratingMilestone] = useState<any>(null)
  const [showNewGoalModal, setShowNewGoalModal] = useState(false)

  const levelProgress = ((progressData.overview.currentLevelXP % 2500) / 2500) * 100

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

      {/* Hero Section with Level Display */}
      <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Learning Progress
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Track your journey, celebrate achievements, and reach new heights
            </p>
          </div>

          {/* Level and Progress Overview */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Crown className="w-12 h-12 text-yellow-400" />
                <div>
                  <div className="text-3xl font-bold">Level {progressData.overview.level}</div>
                  <div className="text-lg text-white/80">{progressData.overview.rank}</div>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm mb-2">
                  <span>{progressData.overview.currentLevelXP} XP</span>
                  <span>{progressData.overview.currentLevelXP + progressData.overview.nextLevelXP} XP</span>
                </div>
                <Progress value={levelProgress} className="h-3" />
                <div className="text-sm text-white/70 mt-1">
                  {progressData.overview.nextLevelXP} XP to next level
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Flame className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                  <div className="text-2xl font-bold text-white">{progressData.overview.currentStreak}</div>
                  <div className="text-sm text-white/80">Day Streak</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-white">{progressData.overview.totalStudyTime}h</div>
                  <div className="text-sm text-white/80">Study Time</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">{progressData.overview.achievements}</div>
                  <div className="text-sm text-white/80">Achievements</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <div className="text-2xl font-bold text-white">{progressData.overview.completedRoadmaps}</div>
                  <div className="text-sm text-white/80">Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/10 backdrop-blur-sm p-1 rounded-lg">
          {[
            { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
            { id: 'achievements', name: 'Achievements', icon: <Trophy className="w-4 h-4" /> },
            { id: 'streaks', name: 'Streaks & Calendar', icon: <Flame className="w-4 h-4" /> },
            { id: 'goals', name: 'Goals', icon: <Target className="w-4 h-4" /> },
            { id: 'milestones', name: 'Milestones', icon: <Flag className="w-4 h-4" /> }
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

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Daily Activity Chart */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Daily Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  {progressData.dailyStats.map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm text-white/70 mb-2">
                        {new Date(day.date).toLocaleDateString('en', { weekday: 'short' })}
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 space-y-2">
                        <div className="text-lg font-bold text-white">{day.studyTime}h</div>
                        <div className="text-sm text-blue-400">+{day.xpGained} XP</div>
                        <div className="text-xs text-white/60">{day.challengesCompleted} challenges</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Skills Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillProgress.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-600">
                            {skill.trend}
                          </Badge>
                          <span className="text-white/70">{skill.current}%</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={skill.current} className="h-2" />
                        <div 
                          className="absolute top-0 w-1 h-2 bg-yellow-400 rounded"
                          style={{ left: `${skill.target}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-white/60">
                        Target: {skill.target}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.filter(a => a.unlocked).slice(0, 4).map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{achievement.name}</div>
                        <div className="text-sm text-white/70">{achievement.description}</div>
                        <div className="text-xs text-yellow-400">+{achievement.xpReward} XP</div>
                      </div>
                      <Badge className={`${rarityColors[achievement.rarity]} text-white`}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-8">
            {/* Achievement Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">24</div>
                  <div className="text-sm text-white/80">Total Unlocked</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-2xl font-bold text-white">6,750</div>
                  <div className="text-sm text-white/80">Total XP Earned</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Crown className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-sm text-white/80">Legendary</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <Gem className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-white">78%</div>
                  <div className="text-sm text-white/80">Completion Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className={`border-2 transition-all hover:scale-105 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30' 
                      : 'bg-white/5 border-white/20'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <div className={`text-6xl mb-2 ${!achievement.unlocked && 'grayscale opacity-50'}`}>
                        {achievement.icon}
                      </div>
                      {achievement.unlocked && (
                        <div className="absolute -top-2 -right-2">
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className={`font-bold text-lg mb-2 ${
                      achievement.unlocked ? 'text-white' : 'text-white/60'
                    }`}>
                      {achievement.name}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${
                      achievement.unlocked ? 'text-white/80' : 'text-white/50'
                    }`}>
                      {achievement.description}
                    </p>

                    <div className="space-y-3">
                      {!achievement.unlocked && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-white/70">Progress</span>
                            <span className="text-white">{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <Badge className={`${rarityColors[achievement.rarity]} text-white`}>
                          {achievement.rarity}
                        </Badge>
                        <div className="text-yellow-400 font-semibold">
                          +{achievement.xpReward} XP
                        </div>
                      </div>

                      {achievement.unlocked && achievement.unlockedDate && (
                        <div className="text-xs text-white/60">
                          Unlocked {new Date(achievement.unlockedDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Streaks & Calendar Tab */}
        {activeTab === 'streaks' && (
          <div className="space-y-8">
            {/* Streak Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
                <CardContent className="p-6 text-center">
                  <Flame className="w-12 h-12 mx-auto mb-3 text-orange-400" />
                  <div className="text-3xl font-bold text-white mb-1">{streakData.current}</div>
                  <div className="text-white/80">Current Streak</div>
                  <div className="text-sm text-orange-300 mt-2">Keep it up! 🔥</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30">
                <CardContent className="p-6 text-center">
                  <Crown className="w-12 h-12 mx-auto mb-3 text-purple-400" />
                  <div className="text-3xl font-bold text-white mb-1">{streakData.longest}</div>
                  <div className="text-white/80">Longest Streak</div>
                  <div className="text-sm text-purple-300 mt-2">Personal Best 👑</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <div className="text-3xl font-bold text-white mb-1">6/7</div>
                  <div className="text-white/80">This Week</div>
                  <div className="text-sm text-green-300 mt-2">Almost perfect! ⭐</div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Streak Visualization */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  This Week's Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-sm text-white/70 mb-2">{day}</div>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        streakData.thisWeek[index] 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white/10 text-white/50'
                      }`}>
                        {streakData.thisWeek[index] ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-white/30 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Calendar Heatmap */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  January 2024 Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1">
                  {streakData.monthlyCalendar.map((day) => (
                    <div
                      key={day.day}
                      className={`aspect-square rounded flex items-center justify-center text-xs font-medium ${
                        day.active
                          ? `bg-green-${Math.min(day.intensity * 200 + 300, 600)} text-white`
                          : 'bg-white/10 text-white/30'
                      }`}
                    >
                      {day.day}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 text-sm text-white/70">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white/10 rounded"></div>
                    <div className="w-3 h-3 bg-green-300 rounded"></div>
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <div className="w-3 h-3 bg-green-700 rounded"></div>
                    <div className="w-3 h-3 bg-green-900 rounded"></div>
                  </div>
                  <span>More</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <div className="space-y-8">
            {/* Goals Header */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Weekly Goals</h2>
                <p className="text-white/70">Track your progress and stay motivated</p>
              </div>
              <Button 
                onClick={() => setShowNewGoalModal(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Goal
              </Button>
            </div>

            {/* Goals List */}
            <div className="space-y-4">
              {weeklyGoals.map((goal) => (
                <Card key={goal.id} className={`border-2 ${priorityColors[goal.priority]}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-1">{goal.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-white/70">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due {new Date(goal.deadline).toLocaleDateString()}</span>
                          </div>
                          <Badge className={`capitalize ${priorityColors[goal.priority].replace('border-', 'bg-').replace('/10', '/30')}`}>
                            {goal.priority} priority
                          </Badge>
                          <Badge variant="outline" className="text-white border-white/30">
                            {goal.category}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="text-white border-white/30">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Progress</span>
                        <span className="text-white">
                          {goal.current} / {goal.target} {goal.unit}
                        </span>
                      </div>
                      <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                      <div className="text-xs text-white/60">
                        {((goal.current / goal.target) * 100).toFixed(0)}% complete
                      </div>
                    </div>

                    {goal.current >= goal.target && (
                      <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <div className="flex items-center gap-2 text-green-300">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">Goal Completed! 🎉</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Milestones Tab */}
        {activeTab === 'milestones' && (
          <div className="space-y-8">
            {/* Milestone Timeline */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Flag className="w-5 h-5" />
                  Achievement Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.id} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                        milestone.celebrated ? 'bg-yellow-500/30 border-2 border-yellow-500' : 'bg-blue-500/30 border-2 border-blue-500'
                      }`}>
                        {milestone.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-white">{milestone.title}</h3>
                            <p className="text-white/70 text-sm">{milestone.description}</p>
                            <div className="text-xs text-white/50 mt-1">
                              {new Date(milestone.date).toLocaleDateString()}
                            </div>
                          </div>
                          {!milestone.celebrated && (
                            <Button 
                              size="sm"
                              onClick={() => setCelebratingMilestone(milestone)}
                              className="bg-yellow-600 hover:bg-yellow-700"
                            >
                              <Sparkles className="w-4 h-4 mr-1" />
                              Celebrate
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Milestones */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Upcoming Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Level 15 Achievement</h4>
                        <p className="text-sm text-white/70">Reach level 15 in your learning journey</p>
                        <div className="text-xs text-blue-300 mt-1">3,150 XP remaining</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">87%</div>
                        <div className="text-xs text-white/60">Complete</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">100 Challenge Master</h4>
                        <p className="text-sm text-white/70">Complete 100 coding challenges</p>
                        <div className="text-xs text-purple-300 mt-1">27 challenges remaining</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">73%</div>
                        <div className="text-xs text-white/60">Complete</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Celebration Modal */}
      {celebratingMilestone && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-8 rounded-xl text-center max-w-md mx-4">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-2">Congratulations!</h2>
            <h3 className="text-xl font-semibold text-white mb-2">{celebratingMilestone.title}</h3>
            <p className="text-white/90 mb-6">{celebratingMilestone.description}</p>
            <Button 
              onClick={() => setCelebratingMilestone(null)}
              className="bg-white text-orange-600 hover:bg-white/90"
            >
              Awesome! 🚀
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
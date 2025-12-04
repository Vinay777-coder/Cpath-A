'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { roadmapsDatabase } from '@/lib/roadmaps-data'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { 
  Search, 
  Filter, 
  Clock, 
  Users, 
  Star, 
  ArrowRight,
  ArrowLeft,
  Code, 
  Smartphone, 
  Database, 
  Brain, 
  Server, 
  Layout,
  Palette,
  Shield,
  TrendingUp,
  Zap,
  Globe,
  Cpu,
  Monitor
} from 'lucide-react'

// Category icons mapping
const categoryIcons = {
  'Web Development': Code,
  'Mobile Development': Smartphone,
  'Data Science': Brain,
  'DevOps': Server,
  'Database': Database,
  'Design': Palette,
  'Cyber Security': Shield,
  'AI/ML': Brain,
  'Blockchain': TrendingUp,
  'Game Development': Monitor,
  'Cloud Computing': Globe,
  'System Design': Cpu,
} as const

// Difficulty color mapping
const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800 border-green-200',
  'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Advanced': 'bg-red-100 text-red-800 border-red-200',
} as const

export default function RoadmapsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All')
  const router = useRouter()

  // Restore scroll position when coming back from roadmap detail
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('roadmaps-scroll-position')
    if (savedScrollPosition) {
      const scrollY = parseInt(savedScrollPosition, 10)
      window.scrollTo(0, scrollY)
      sessionStorage.removeItem('roadmaps-scroll-position')
    }
  }, [])

  // Save scroll position before navigating to roadmap detail
  const saveScrollPosition = () => {
    sessionStorage.setItem('roadmaps-scroll-position', window.scrollY.toString())
  }

  // Get unique categories for filtering
  const categories = ['All', ...Array.from(new Set(roadmapsDatabase.map(r => r.category)))]
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']

  // Filter roadmaps based on search and filters
  const filteredRoadmaps = useMemo(() => {
    return roadmapsDatabase.filter(roadmap => {
      const matchesSearch = roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           roadmap.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           roadmap.primary_skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || roadmap.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === 'All' || roadmap.difficulty === selectedDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchTerm, selectedCategory, selectedDifficulty])

  // Group roadmaps by category or difficulty for better organization
  const groupedRoadmaps = useMemo(() => {
    if (selectedCategory === 'All') {
      // When showing all, group by difficulty level
      const grouped = {
        'Beginner Roadmaps': [] as typeof roadmapsDatabase,
        'Intermediate Roadmaps': [] as typeof roadmapsDatabase,
        'Advanced Roadmaps': [] as typeof roadmapsDatabase,
      }
      
      filteredRoadmaps.forEach(roadmap => {
        if (roadmap.difficulty === 'Beginner') {
          grouped['Beginner Roadmaps'].push(roadmap)
        } else if (roadmap.difficulty === 'Intermediate') {
          grouped['Intermediate Roadmaps'].push(roadmap)
        } else {
          grouped['Advanced Roadmaps'].push(roadmap)
        }
      })

      // Sort each difficulty group by popularity and featured status
      Object.keys(grouped).forEach(key => {
        grouped[key as keyof typeof grouped].sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return (b.popularity_score || 0) - (a.popularity_score || 0)
        })
      })

      return grouped
    } else {
      // When showing specific category, group by subcategory or keep as single category
      const grouped = {} as Record<string, typeof roadmapsDatabase>
      
      filteredRoadmaps.forEach(roadmap => {
        const groupKey = roadmap.subcategory || roadmap.category
        if (!grouped[groupKey]) {
          grouped[groupKey] = []
        }
        grouped[groupKey].push(roadmap)
      })

      // Sort within each group
      Object.keys(grouped).forEach(key => {
        grouped[key].sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return (b.popularity_score || 0) - (a.popularity_score || 0)
        })
      })

      return grouped
    }
  }, [filteredRoadmaps, selectedCategory])

  const RoadmapCard = ({ roadmap }: { roadmap: typeof roadmapsDatabase[0] }) => {
    const IconComponent = categoryIcons[roadmap.category as keyof typeof categoryIcons] || Code
    
    return (
      <div onClick={saveScrollPosition}>
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {roadmap.title}
                </CardTitle>
                <Badge 
                  variant="outline" 
                  className={`mt-1 text-xs ${difficultyColors[roadmap.difficulty]}`}
                >
                  {roadmap.difficulty}
                </Badge>
              </div>
            </div>
            {roadmap.featured && (
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-medium">Featured</span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <CardDescription className="text-gray-600 mb-4 line-clamp-2">
            {roadmap.description}
          </CardDescription>

          {/* Duration and Steps */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{roadmap.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{roadmap.steps.length} steps</span>
            </div>
          </div>

          {/* Primary Skills */}
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-700 mb-2">You'll learn:</p>
            <div className="flex flex-wrap gap-1">
              {roadmap.primary_skills.slice(0, 4).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                  {skill}
                </Badge>
              ))}
              {roadmap.primary_skills.length > 4 && (
                <Badge variant="secondary" className="text-xs px-2 py-1">
                  +{roadmap.primary_skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Action Button */}
          <Link href={`/roadmaps/${roadmap.id}`} onClick={saveScrollPosition}>
            <Button className="w-full group/btn">
              Start Learning
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showAuth={false} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Dashboard Button */}
          <div className="mb-8">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="bg-white/50 border-white/30 hover:bg-white/70">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Developer 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Roadmaps
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Structured learning paths to guide your tech career journey. 
              Choose your path and start building your future today.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search roadmaps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar with Categories */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-6">
              {/* All Roadmaps Header */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">All Roadmaps</h2>
                
                {/* Difficulty Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category Navigation */}
              <div className="space-y-1 max-h-96 overflow-y-auto">
                {categories.map(category => {
                  const isActive = selectedCategory === category
                  const categoryCount = category === 'All' 
                    ? roadmapsDatabase.length 
                    : roadmapsDatabase.filter(r => r.category === category).length
                  
                  const IconComponent = category === 'All' 
                    ? Globe 
                    : categoryIcons[category as keyof typeof categoryIcons] || Code
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4" />
                        <span>{category}</span>
                      </div>
                      <Badge 
                        variant={isActive ? "default" : "secondary"} 
                        className="text-xs"
                      >
                        {categoryCount}
                      </Badge>
                    </button>
                  )
                })}
              </div>


            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredRoadmaps.length}</span> roadmaps
                {searchTerm && (
                  <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
                )}
                {selectedCategory !== 'All' && (
                  <span> in <span className="font-semibold">{selectedCategory}</span></span>
                )}
              </p>
            </div>

            {/* Roadmaps Grid by Category or Difficulty */}
            {Object.entries(groupedRoadmaps).map(([groupName, roadmaps]) => {
              // Skip empty groups
              if (roadmaps.length === 0) return null

              // Choose appropriate icon based on group type
              const getGroupIcon = () => {
                if (groupName.includes('Beginner')) return Users
                if (groupName.includes('Intermediate')) return TrendingUp
                if (groupName.includes('Advanced')) return Star
                return categoryIcons[groupName as keyof typeof categoryIcons] || Code
              }

              const IconComponent = getGroupIcon()

              return (
                <div key={groupName} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{groupName}</h2>
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <Badge variant="outline" className="text-sm">
                      {roadmaps.length} roadmap{roadmaps.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {roadmaps.map((roadmap) => (
                      <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                    ))}
                  </div>
                </div>
              )
            })}

            {/* No Results */}
            {filteredRoadmaps.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No roadmaps found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                    setSelectedDifficulty('All')
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { localAuth } from '@/lib/local-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Send, 
  Bot, 
  User as UserIcon, 
  Loader2, 
  ArrowLeft,
  Sparkles,
  Zap,
  Target,
  BookOpen,
  Code,
  Briefcase,
  Brain,
  Lightbulb,
  TrendingUp,
  Settings,
  MoreHorizontal,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  MessageSquare,
  Mic,
  MicOff
} from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  typing?: boolean
}

interface QuickAction {
  id: string
  title: string
  description: string
  icon: any
  prompt: string
  category: string
  gradient: string
}

const quickActions: QuickAction[] = [
  {
    id: 'roadmap',
    title: 'Career Roadmap',
    description: 'Get a personalized learning path',
    icon: Target,
    prompt: 'Create a detailed career roadmap for my goals in tech',
    category: 'Planning',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'interview',
    title: 'Interview Prep',
    description: 'Practice technical interviews',
    icon: Brain,
    prompt: 'Help me prepare for technical interviews with practice questions',
    category: 'Skills',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'resume',
    title: 'Resume Review',
    description: 'Optimize your resume',
    icon: Briefcase,
    prompt: 'Review my resume and suggest improvements for tech roles',
    category: 'Career',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'projects',
    title: 'Project Ideas',
    description: 'Get portfolio project suggestions',
    icon: Code,
    prompt: 'Suggest portfolio projects that will impress recruiters',
    category: 'Development',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'skills',
    title: 'Skill Assessment',
    description: 'Identify learning gaps',
    icon: TrendingUp,
    prompt: 'Assess my current skills and recommend what to learn next',
    category: 'Learning',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'trends',
    title: 'Industry Trends',
    description: 'Stay updated with tech trends',
    icon: Lightbulb,
    prompt: 'What are the latest trends in tech I should know about?',
    category: 'Insights',
    gradient: 'from-amber-500 to-orange-500'
  }
]

export default function JarvisPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Handle authentication
  useEffect(() => {
    const currentUser = localAuth.getCurrentUser()
    if (!currentUser) {
      router.push('/login')
      return
    }
    setUser(currentUser)
    
    // Initialize with welcome message
    setMessages([{
      id: '1',
      role: 'assistant',
      content: `🤖 **JARVIS Online** - Career Intelligence System Activated\n\nHello ${currentUser.name || currentUser.email?.split('@')[0] || 'there'}! I'm **JARVIS**, your personal AI career assistant.\n\nI'm here to help you:\n• 🎯 Build personalized career roadmaps\n• 🧠 Practice technical interviews\n• 📝 Optimize your resume\n• 💼 Find the right opportunities\n• 📚 Learn cutting-edge skills\n\nHow can I assist you in advancing your tech career today?`,
      timestamp: new Date()
    }])
  }, [router])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input on load
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Show loading while checking authentication
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Initializing JARVIS...</p>
          <p className="text-blue-300 mt-2">Career Intelligence System</p>
        </div>
      </div>
    )
  }

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim()
    if (!textToSend || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    // Add typing indicator
    const typingMessage: Message = {
      id: 'typing',
      role: 'assistant',
      content: 'JARVIS is thinking...',
      timestamp: new Date(),
      typing: true
    }
    setMessages(prev => [...prev, typingMessage])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          userId: user.id,
          context: 'career_assistant'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      // Remove typing indicator and add real response
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => msg.id !== 'typing')
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.message || 'I encountered an issue processing your request. Please try again.',
          timestamp: new Date()
        }
        return [...filteredMessages, assistantMessage]
      })
    } catch (error) {
      console.error('Chat error:', error)
      // Remove typing indicator and add error message
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => msg.id !== 'typing')
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: '⚠️ Connection error. Please check your internet and try again.',
          timestamp: new Date()
        }
        return [...filteredMessages, errorMessage]
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickAction = (action: QuickAction) => {
    handleSendMessage(action.prompt)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  const categories = ['all', ...Array.from(new Set(quickActions.map(action => action.category)))]
  const filteredActions = selectedCategory === 'all' 
    ? quickActions 
    : quickActions.filter(action => action.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-blue-300 hover:text-white hover:bg-blue-500/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    JARVIS
                  </h1>
                  <p className="text-sm text-blue-300">Career Intelligence Assistant</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Online
              </Badge>
              <Button variant="ghost" size="sm" className="text-blue-300 hover:text-white hover:bg-blue-500/20">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-8rem)]">
          
          {/* Quick Actions Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-black/20 backdrop-blur-xl border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`text-xs ${
                        selectedCategory === category 
                          ? 'bg-blue-500 text-white' 
                          : 'text-blue-300 hover:text-white hover:bg-blue-500/20'
                      }`}
                    >
                      {category === 'all' ? 'All' : category}
                    </Button>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {filteredActions.map((action) => {
                    const IconComponent = action.icon
                    return (
                      <button
                        key={action.id}
                        onClick={() => handleQuickAction(action)}
                        disabled={isLoading}
                        className="w-full text-left p-3 rounded-lg bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-200 group disabled:opacity-50"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white mb-1">{action.title}</div>
                            <div className="text-xs text-blue-300">{action.description}</div>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3 flex flex-col">
            <Card className="flex-1 bg-black/20 backdrop-blur-xl border-blue-500/20 overflow-hidden">
              <CardContent className="p-0 h-full flex flex-col">
                
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500/30">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-4 ${
                        message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      {/* Avatar */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                        message.role === 'user' 
                          ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
                          : 'bg-gradient-to-br from-blue-400 to-cyan-400'
                      }`}>
                        {message.role === 'user' ? (
                          <UserIcon className="w-5 h-5 text-white" />
                        ) : (
                          <Bot className="w-5 h-5 text-white" />
                        )}
                      </div>
                      
                      {/* Message Content */}
                      <div className={`flex-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block max-w-[80%] p-4 rounded-2xl shadow-lg ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                            : message.typing
                            ? 'bg-blue-500/20 border border-blue-500/30 text-blue-200'
                            : 'bg-slate-800/80 text-white border border-blue-500/20'
                        }`}>
                          {message.typing ? (
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                              </div>
                              <span className="text-sm">JARVIS is analyzing...</span>
                            </div>
                          ) : (
                            <div className="whitespace-pre-wrap">{message.content}</div>
                          )}
                        </div>
                        
                        {/* Message Actions */}
                        {!message.typing && (
                          <div className="flex items-center justify-between mt-2">
                            <div className="text-xs text-blue-300">
                              {new Date(message.timestamp).toLocaleTimeString()}
                            </div>
                            {message.role === 'assistant' && (
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyMessage(message.content)}
                                  className="h-6 px-2 text-blue-300 hover:text-white hover:bg-blue-500/20"
                                >
                                  <Copy className="w-3 h-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 px-2 text-blue-300 hover:text-white hover:bg-blue-500/20"
                                >
                                  <ThumbsUp className="w-3 h-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 px-2 text-blue-300 hover:text-white hover:bg-blue-500/20"
                                >
                                  <ThumbsDown className="w-3 h-3" />
                                </Button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input Area */}
                <div className="border-t border-blue-500/20 bg-black/20 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <Input
                        ref={inputRef}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask JARVIS about your career goals..."
                        disabled={isLoading}
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder-blue-300 pr-12 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsListening(!isListening)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white hover:bg-blue-500/20"
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </Button>
                    </div>
                    <Button 
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim() || isLoading}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  
                  {/* Quick Suggestions */}
                  {messages.length <= 1 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['Career roadmap for AI/ML', 'Resume tips', 'Interview questions'].map((suggestion) => (
                        <Button
                          key={suggestion}
                          variant="ghost"
                          size="sm"
                          onClick={() => setInputMessage(suggestion)}
                          className="text-blue-300 hover:text-white hover:bg-blue-500/20 text-xs"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
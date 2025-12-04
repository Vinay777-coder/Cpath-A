'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { localAuth } from '@/lib/local-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Send, 
  Bot, 
  User as UserIcon, 
  Loader2, 
  ArrowLeft,
  Sparkles,
  Target,
  BookOpen,
  Code,
  Briefcase,
  Brain,
  Lightbulb,
  TrendingUp,
  MoreHorizontal,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Plus,
  Zap,
  Menu
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
  color: string
}

const quickActions: QuickAction[] = [
  {
    id: 'roadmap',
    title: 'Career Roadmap',
    description: 'Get a personalized learning path for your tech career',
    icon: Target,
    prompt: 'Create a detailed career roadmap for my goals in tech',
    color: 'text-blue-600'
  },
  {
    id: 'interview',
    title: 'Interview Prep',
    description: 'Practice technical interviews and get preparation tips',
    icon: Brain,
    prompt: 'Help me prepare for technical interviews with practice questions',
    color: 'text-purple-600'
  },
  {
    id: 'resume',
    title: 'Resume Review',
    description: 'Optimize your resume for tech positions',
    icon: Briefcase,
    prompt: 'Review my resume and suggest improvements for tech roles',
    color: 'text-green-600'
  },
  {
    id: 'projects',
    title: 'Project Ideas',
    description: 'Get portfolio project suggestions that impress recruiters',
    icon: Code,
    prompt: 'Suggest portfolio projects that will impress recruiters',
    color: 'text-orange-600'
  },
  {
    id: 'skills',
    title: 'Skill Assessment',
    description: 'Identify learning gaps and get skill recommendations',
    icon: TrendingUp,
    prompt: 'Assess my current skills and recommend what to learn next',
    color: 'text-indigo-600'
  },
  {
    id: 'trends',
    title: 'Industry Trends',
    description: 'Stay updated with the latest tech trends and opportunities',
    icon: Lightbulb,
    prompt: 'What are the latest trends in tech I should know about?',
    color: 'text-amber-600'
  }
]

export default function JarvisPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
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
      content: `Hello ${currentUser.name || currentUser.email?.split('@')[0] || 'there'}! I'm **JARVIS**, your AI career assistant.\n\nI'm here to help you with:\n• 🎯 Career planning and roadmaps\n• 🧠 Interview preparation\n• 📝 Resume optimization\n• 💼 Job search strategies\n• 📚 Skill development\n• 🔍 Industry insights\n\nHow can I assist you with your tech career today?`,
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading JARVIS...</p>
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
      // Get conversation history for context
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })).slice(-6)

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory,
          user: {
            id: user.id,
            name: user.name || user.email?.split('@')[0] || 'User'
          }
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      
      // Remove typing indicator and add real response
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => msg.id !== 'typing')
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.response || data.message || 'I apologize, but I encountered an issue processing your request. Please try again.',
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
          content: 'I\'m experiencing some technical difficulties. Please try rephrasing your question or try again.',
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

  const newChat = () => {
    setMessages([{
      id: '1',
      role: 'assistant',
      content: `Hello! I'm **JARVIS**, your AI career assistant. How can I help you with your tech career today?`,
      timestamp: new Date()
    }])
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className={`${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:static inset-y-0 left-0 z-50 w-80 bg-gray-50 border-r border-gray-200 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">JARVIS</h1>
                <p className="text-sm text-gray-500">AI Career Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSidebar(false)}
              className="lg:hidden"
            >
              ×
            </Button>
          </div>
          
          <Button 
            onClick={newChat}
            className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h3>
            {quickActions.map((action) => {
              const IconComponent = action.icon
              return (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  disabled={isLoading}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-100 border border-gray-200 transition-colors duration-200 group disabled:opacity-50"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center ${action.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 mb-1">{action.title}</div>
                      <div className="text-xs text-gray-500 line-clamp-2">{action.description}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">
                {user?.name || user?.email?.split('@')[0] || 'User'}
              </div>
              <div className="text-xs text-gray-500">Free Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            JARVIS AI Assistant
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {messages.length === 1 ? (
              // Welcome Screen
              <div className="px-6 py-12 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Welcome to JARVIS
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your AI-powered career assistant. Ask me anything about tech careers, skill development, interviews, or job searching.
                </p>
                
                {/* Quick Start Examples */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {quickActions.slice(0, 4).map((action) => {
                    const IconComponent = action.icon
                    return (
                      <button
                        key={action.id}
                        onClick={() => handleQuickAction(action)}
                        className="p-4 text-left rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center ${action.color}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 mb-1">{action.title}</div>
                            <div className="text-xs text-gray-500">{action.description}</div>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              // Chat Messages
              <div className="px-6 py-6 space-y-6">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-900 text-white'
                    }`}>
                      {message.role === 'user' ? (
                        <UserIcon className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    
                    {/* Message Content */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {message.role === 'user' ? user?.name || 'You' : 'JARVIS'}
                        </span>
                      </div>
                      
                      {message.typing ? (
                        <div className="flex items-center space-x-2 text-gray-500">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                          <span className="text-sm">Thinking...</span>
                        </div>
                      ) : (
                        <>
                          <div className="prose prose-sm max-w-none text-gray-700">
                            <div className="whitespace-pre-wrap">{message.content}</div>
                          </div>
                          
                          {/* Message Actions */}
                          {message.role === 'assistant' && (
                            <div className="flex items-center space-x-2 mt-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyMessage(message.content)}
                                className="h-6 px-2 text-gray-400 hover:text-gray-600"
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-gray-400 hover:text-gray-600"
                              >
                                <ThumbsUp className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-gray-400 hover:text-gray-600"
                              >
                                <ThumbsDown className="w-3 h-3" />
                              </Button>
                              <span className="text-xs text-gray-400 ml-2">
                                {new Date(message.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
                
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>
        
        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask JARVIS about your career..."
                  disabled={isLoading}
                  className="min-h-[44px] max-h-32 resize-none border-gray-300 focus:border-gray-400 focus:ring-gray-400"
                />
              </div>
              <Button 
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gray-900 hover:bg-gray-800 text-white h-11 px-4"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            <div className="mt-2 text-xs text-gray-400 text-center">
              JARVIS can make mistakes. Consider checking important information.
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile sidebar */}
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </div>
  )
}
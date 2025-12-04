'use client'

import { useState, useEffect, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, Bot, User as UserIcon, Loader2, ArrowLeft, Sparkles, Target, BookOpen, TestTube, MapPin, Briefcase, Code, Clock } from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface SuggestedPrompt {
  id: string
  text: string
  icon: React.ReactNode
  prompt: string
}

export default function ChatPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Predefined prompts similar to roadmap.sh
  const suggestedPrompts: SuggestedPrompt[] = [
    {
      id: 'career-path',
      text: 'Help select a career path',
      icon: <Target className="w-4 h-4" />,
      prompt: 'I need help selecting the right career path based on my interests and skills. Can you guide me through the process?'
    },
    {
      id: 'find-job',
      text: 'Help me find a job',
      icon: <Briefcase className="w-4 h-4" />,
      prompt: 'I\'m looking for job opportunities in tech. Can you help me understand what positions might be good for me and how to prepare?'
    },
    {
      id: 'learn-topic',
      text: 'Learn a Topic',
      icon: <BookOpen className="w-4 h-4" />,
      prompt: 'I want to learn a new technology or skill. Can you recommend what I should learn based on current market demands?'
    },
    {
      id: 'test-knowledge',
      text: 'Test my Knowledge',
      icon: <TestTube className="w-4 h-4" />,
      prompt: 'I want to test my knowledge in a specific area. Can you ask me some questions to assess my skills?'
    },
    {
      id: 'roadmap-pick',
      text: 'What roadmap should I pick?',
      icon: <MapPin className="w-4 h-4" />,
      prompt: 'I\'m confused about which learning roadmap to follow. Can you help me choose the right path for my career goals?'
    },
    {
      id: 'best-jobs',
      text: 'What are the best jobs for me?',
      icon: <Sparkles className="w-4 h-4" />,
      prompt: 'Based on current market trends and my potential, what are the best job opportunities I should consider?'
    },
    {
      id: 'project-recommend',
      text: 'Recommend me a project based on my expertise',
      icon: <Code className="w-4 h-4" />,
      prompt: 'I want to build a project to showcase my skills. Can you recommend a project idea based on my current expertise level?'
    },
    {
      id: 'quick-learn',
      text: 'Recommend me a topic I can learn in an hour',
      icon: <Clock className="w-4 h-4" />,
      prompt: 'I have about an hour to learn something new. What\'s a valuable topic or skill I can pick up quickly?'
    }
  ]

  // Handle authentication
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = '/login'
    }
  }, [isLoaded, isSignedIn])

  // Initialize welcome message
  useEffect(() => {
    if (isSignedIn && user && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        role: 'assistant',
        content: `Hi ${user.firstName || 'there'}! 👋 I'm your AI Career Assistant. I'm here to help you navigate your tech career journey.\n\nI can assist you with:\n• Career path selection and planning\n• Learning roadmaps and skill development\n• Job search strategies and interview prep\n• Project recommendations\n• Technology trends and insights\n\nChoose a suggestion below or ask me anything!`,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isSignedIn, user, messages.length])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Show loading while checking authentication
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  // Show loading while redirecting
  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Redirecting to login...</p>
        </div>
      </div>
    )
  }

  const handleSendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage || inputMessage.trim()
    if (!messageToSend || isLoading) return

    // Hide suggestions after first message
    setShowSuggestions(false)

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageToSend,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // Send to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Handle API errors with specific messages
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.error || 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
        return
      }

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || data.message || 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Network error. Please check your connection and try again.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestedPrompt = (prompt: string) => {
    handleSendMessage(prompt)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Bot className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">AI Career Assistant</h1>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-lg h-[calc(100vh-120px)] flex flex-col overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[85%] ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' 
                      ? 'bg-blue-500' 
                      : 'bg-green-500'
                  }`}>
                    {message.role === 'user' ? (
                      <UserIcon className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  
                  {/* Message Bubble */}
                  <div className={`px-4 py-3 rounded-lg break-words ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </div>
                    <div className={`text-xs mt-1 ${
                      message.role === 'user' 
                        ? 'text-blue-100' 
                        : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-lg bg-gray-100">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-gray-600 text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          {showSuggestions && messages.length <= 1 && (
            <div className="border-t bg-gray-50 p-4">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">How can I help you?</h3>
                <p className="text-gray-600 text-sm">Choose a topic below or ask me anything</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedPrompts.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestedPrompt(suggestion.prompt)}
                    className="flex items-center gap-3 p-3 text-left bg-white hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-300 group"
                    disabled={isLoading}
                  >
                    <div className="text-blue-600 flex-shrink-0 group-hover:text-blue-700">
                      {suggestion.icon}
                    </div>
                    <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900">
                      {suggestion.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t bg-white p-4">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about your career..."
                className="flex-1 rounded-lg"
                disabled={isLoading}
              />
              <Button 
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-blue-500 hover:bg-blue-600 rounded-lg px-4"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
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
      text: 'Find a job',
      icon: <Briefcase className="w-4 h-4" />,
      prompt: 'I am looking for job opportunities in my field. Can you help me with job search strategies and tips?'
    },
    {
      id: 'learn-topic',
      text: 'Learn a topic',
      icon: <BookOpen className="w-4 h-4" />,
      prompt: 'I want to learn a new skill or technology. Can you suggest learning resources and create a study plan?'
    },
    {
      id: 'test-knowledge',
      text: 'Test my knowledge',
      icon: <TestTube className="w-4 h-4" />,
      prompt: 'I want to test my knowledge and skills in a specific area. Can you create some practice questions for me?'
    },
    {
      id: 'roadmap-pick',
      text: 'Pick a roadmap',
      icon: <MapPin className="w-4 h-4" />,
      prompt: 'I need help choosing the right learning roadmap for my career goals. What roadmap would you recommend?'
    },
    {
      id: 'best-jobs',
      text: 'Best jobs for me',
      icon: <Sparkles className="w-4 h-4" />,
      prompt: 'Based on my skills and interests, what are the best job roles that would suit me?'
    },
    {
      id: 'project-recommend',
      text: 'Recommend a project',
      icon: <Code className="w-4 h-4" />,
      prompt: 'I want to build my portfolio with meaningful projects. Can you recommend projects that align with my skills?'
    },
    {
      id: 'quick-learn',
      text: 'Quick learning tips',
      icon: <Clock className="w-4 h-4" />,
      prompt: 'I have limited time to learn new skills. What are the most effective ways to learn quickly and efficiently?'
    }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputMessage.trim()
    if (!text) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    setShowSuggestions(false)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: text,
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.',
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

  const handleSuggestionClick = (prompt: string) => {
    handleSendMessage(prompt)
  }

  const resetChat = () => {
    setMessages([])
    setShowSuggestions(true)
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Please sign in to access the chat</h1>
          <p className="text-gray-600">You need to be logged in to use our AI career assistant.</p>
          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-blue-500" />
            <h1 className="text-xl font-semibold text-gray-900">AI Career Assistant</h1>
          </div>
        </div>
        {messages.length > 0 && (
          <Button onClick={resetChat} variant="outline" size="sm">
            New Chat
          </Button>
        )}
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Welcome Message */}
            {messages.length === 0 && showSuggestions && (
              <div className="text-center space-y-6 py-8">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Bot className="h-8 w-8 text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How can I help you today?</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    I'm your AI career assistant. Ask me anything about career paths, learning, job search, or professional development.
                  </p>
                </div>

                {/* Suggested Prompts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
                  {suggestedPrompts.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion.prompt)}
                      className="p-4 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="text-blue-500 group-hover:text-blue-600">
                          {suggestion.icon}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-900">
                        {suggestion.text}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex space-x-3 max-w-3xl ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {message.role === 'user' ? (
                      <UserIcon className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className={`rounded-lg px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}>
                    <div className="whitespace-pre-wrap text-sm leading-6">
                      {message.content}
                    </div>
                    <div className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-3 max-w-3xl">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                      <span className="text-sm text-gray-500">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-3 items-end">
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
            
            {/* Help text */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                💡 Tip: Be specific about your goals and current skill level for better advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
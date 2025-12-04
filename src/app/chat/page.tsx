'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { localAuth } from '@/lib/local-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, User as UserIcon, Loader2, ArrowLeft, Moon, Sun, Trash2, Cpu } from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function JarvisChat() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Handle authentication
  useEffect(() => {
    const currentUser = localAuth.getCurrentUser()
    if (!currentUser) {
      router.push('/login')
      return
    }
    setUser(currentUser)
    
    // Add welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      role: 'assistant',
      content: `Hey there! 👋 I'm Jarvis, your AI career assistant. I can help you with career advice, resume tips, interview preparation, and skill development. What would you like to know?`,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }, [router])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Smart fallback response
  const getSmartFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
      return "I'm here to help with your career development! Whether you're looking for guidance on career paths, interview preparation, or skill development, I can provide insights based on current industry trends and best practices."
    }
    
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return "Let me help you with your resume! I can provide tips on formatting, content optimization, keyword inclusion, and how to highlight your achievements effectively for your target role."
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('learn')) {
      return "Skill development is crucial for career advancement! I can recommend learning paths for various technologies, suggest resources, and help you prioritize which skills to focus on based on your career goals."
    }
    
    if (lowerMessage.includes('interview')) {
      return "Interview preparation is key to landing your dream job! I can help you practice common questions, develop STAR method responses, and provide tips for both technical and behavioral interviews."
    }
    
    return "I'm Jarvis, your AI career assistant! I'm here to help with career advice, resume optimization, interview preparation, and skill development. How can I assist you today?"
  }

  // Show loading while checking authentication
  if (!user) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-4" />
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Loading Jarvis...</p>
        </div>
      </div>
    )
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
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
          message: inputMessage.trim(),
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Cpu className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">AI Career Assistant</h1>
                <p className="text-sm text-gray-500">Get personalized career guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto p-4">
        <div className={`h-[calc(100vh-200px)] flex flex-col border rounded-lg ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="flex-1 flex flex-col p-6">
            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-3 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                    {/* Avatar */}
                    <div className={`p-2 rounded-full ${
                      message.role === 'user' 
                        ? 'bg-blue-100' 
                        : 'bg-green-100'
                    }`}>
                      {message.role === 'user' ? (
                        <UserIcon className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Cpu className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                    
                    {/* Message Bubble */}
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-green-100 text-gray-800'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.role === 'user' 
                          ? 'text-blue-100' 
                          : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-blue-100">
                      <Cpu className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-green-100">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-gray-600">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t pt-4">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about your career..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-blue-500 hover:bg-blue-600"
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
    </div>
  )
}
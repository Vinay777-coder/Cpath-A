'use client'

import { useState, useEffect, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Send, Bot, User as UserIcon, Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Handle authentication - all hooks must be called before any early returns
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
        content: `Hi ${user.firstName || 'there'}! I'm your AI Career Assistant. I can help you with career planning, skill development, interview prep, and more. What would you like to discuss?`,
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
              <div className="p-2 bg-green-100 rounded-lg">
                <Bot className="h-6 w-6 text-green-600" />
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
        <Card className="h-[calc(100vh-200px)] flex flex-col">
          <CardContent className="flex-1 flex flex-col p-6">
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
                        <Bot className="h-4 w-4 text-green-600" />
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
                    <div className="p-2 rounded-full bg-green-100">
                      <Bot className="h-4 w-4 text-green-600" />
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
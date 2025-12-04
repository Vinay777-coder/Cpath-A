'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { localAuth } from '@/lib/local-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Send, 
  Bot, 
  User as UserIcon, 
  Loader2, 
  ArrowLeft,
  MoreHorizontal,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Plus,
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

export default function ChatGPTPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
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
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-gray-600" />
          <p className="text-gray-600">Loading...</p>
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
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => msg.id !== 'typing')
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'I\'m experiencing some technical difficulties, but I\'m still here to help! Please try rephrasing your question or try again in a moment.',
          timestamp: new Date()
        }
        return [...filteredMessages, errorMessage]
      })
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

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  const startNewConversation = () => {
    setMessages([])
    inputRef.current?.focus()
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-gray-50 border-r border-gray-200 flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <Button 
            onClick={startNewConversation}
            className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            New chat
          </Button>
        </div>

        {/* Chat History Placeholder */}
        <div className="flex-1 p-4">
          <p className="text-sm text-gray-500 mb-4">Recent chats</p>
          <div className="space-y-2">
            <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <p className="text-sm text-gray-700 truncate">Career planning discussion</p>
            </div>
            <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <p className="text-sm text-gray-700 truncate">Resume review tips</p>
            </div>
            <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <p className="text-sm text-gray-700 truncate">Interview preparation</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <UserIcon className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm text-gray-700 truncate">
              {user?.name || user?.email?.split('@')[0] || 'User'}
            </span>
          </div>
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="w-full mt-2 text-gray-600 justify-start">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <Button variant="ghost" size="sm">
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">JARVIS</h1>
          <Button variant="ghost" size="sm" onClick={startNewConversation}>
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            /* Welcome Screen */
            <div className="flex items-center justify-center h-full p-8">
              <div className="max-w-2xl text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-gray-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Hello, I'm JARVIS
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Your AI career assistant. I'm here to help you with career planning, skill development, 
                  interview preparation, and more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <button
                    onClick={() => handleSendMessage("Help me create a career roadmap for web development")}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 mb-2">Career Planning</h3>
                    <p className="text-sm text-gray-600">Get personalized roadmaps and guidance</p>
                  </button>
                  <button
                    onClick={() => handleSendMessage("Give me interview preparation tips")}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 mb-2">Interview Prep</h3>
                    <p className="text-sm text-gray-600">Practice questions and tips</p>
                  </button>
                  <button
                    onClick={() => handleSendMessage("How can I improve my resume?")}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 mb-2">Resume Review</h3>
                    <p className="text-sm text-gray-600">Optimize your resume for tech roles</p>
                  </button>
                  <button
                    onClick={() => handleSendMessage("What skills should I learn next?")}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 mb-2">Skill Development</h3>
                    <p className="text-sm text-gray-600">Learn what matters most</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Chat Messages */
            <div className="max-w-3xl mx-auto w-full">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`border-b border-gray-100 ${
                    message.role === 'assistant' ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="p-6 flex space-x-4">
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-green-500'
                    }`}>
                      {message.role === 'user' ? (
                        <UserIcon className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    
                    {/* Message Content */}
                    <div className="flex-1 min-w-0">
                      <div className="prose prose-sm max-w-none">
                        {message.typing ? (
                          <div className="flex items-center space-x-2 text-gray-500">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                            <span>Thinking...</span>
                          </div>
                        ) : (
                          <div className="whitespace-pre-wrap text-gray-900">
                            {message.content}
                          </div>
                        )}
                      </div>
                      
                      {/* Message Actions */}
                      {!message.typing && message.role === 'assistant' && (
                        <div className="flex items-center space-x-2 mt-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyMessage(message.content)}
                            className="h-8 px-2 text-gray-400 hover:text-gray-600"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-gray-400 hover:text-gray-600"
                          >
                            <ThumbsUp className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-gray-400 hover:text-gray-600"
                          >
                            <ThumbsDown className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Message JARVIS..."
                  disabled={isLoading}
                  className="w-full border-gray-300 focus:border-gray-400 focus:ring-gray-400 rounded-xl pr-12"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isLoading}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg p-2"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              JARVIS can make mistakes. Consider checking important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
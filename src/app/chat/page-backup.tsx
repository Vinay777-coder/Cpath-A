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
  Moon,
  Sun,
  Sparkles,
  MessageCircle,
  Trash2,
  Cpu
} from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  typing?: boolean
}

// Chat Bubble Component
const ChatBubble = ({ message, isTyping = false }: { message: Message, isTyping?: boolean }) => {
  const isUser = message.role === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6 animate-fade-in`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
          isUser 
            ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
            : 'bg-gradient-to-r from-gray-700 to-gray-800 ring-2 ring-blue-400/30'
        } ${!isUser ? 'animate-pulse-slow' : ''}`}>
          {isUser ? (
            <UserIcon className="w-5 h-5 text-white" />
          ) : (
            <Cpu className="w-5 h-5 text-blue-400" />
          )}
        </div>
        
        {/* Message Bubble */}
        <div className={`relative px-6 py-4 rounded-2xl backdrop-blur-md shadow-xl ${
          isUser 
            ? 'bg-gradient-to-r from-blue-500/90 to-blue-600/90 text-white border border-blue-400/30' 
            : 'bg-white/10 text-gray-100 border border-white/20'
        } ${isUser ? 'rounded-br-sm' : 'rounded-bl-sm'}`}>
          {isTyping ? (
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
              </div>
              <span className="text-blue-400 font-medium">Jarvis is thinking...</span>
            </div>
          ) : (
            <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
          )}
          
          {/* Glow Effect */}
          <div className={`absolute inset-0 rounded-2xl ${
            isUser ? 'bg-blue-500/20' : 'bg-white/5'
          } blur-xl -z-10`}></div>
        </div>
      </div>
    </div>
  )
}

export default function JarvisChat() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
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
    
    // Add welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      role: 'assistant',
      content: `Hey there 👋, I'm Jarvis — your AI career mentor. Ask me anything about tech roles, projects, or getting job-ready.`,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-300">Initializing Jarvis...</p>
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
      content: 'Jarvis is thinking...',
      timestamp: new Date(),
      typing: true
    }
    setMessages(prev => [...prev, typingMessage])

    try {
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })).filter(msg => msg.content !== 'Jarvis is thinking...').slice(-6)

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
          content: `I'm experiencing some technical difficulties, but I'm still here to help! Please try rephrasing your question or try again in a moment.`,
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

  const clearChat = () => {
    setMessages([{
      id: 'welcome',
      role: 'assistant',
      content: `Hey there 👋, I'm Jarvis — your AI career mentor. Ask me anything about tech roles, projects, or getting job-ready.`,
      timestamp: new Date()
    }])
    inputRef.current?.focus()
  }

  const quickReplies = [
    { text: "Suggest Projects", icon: "💻", prompt: "Can you suggest some programming projects for my portfolio?" },
    { text: "Review Resume", icon: "📄", prompt: "Help me review and improve my resume for tech roles" },
    { text: "Find a Role", icon: "🎯", prompt: "What tech roles would be a good fit for my skills?" },
    { text: "Interview Prep", icon: "🎤", prompt: "Help me prepare for technical interviews" },
    { text: "Learn Skills", icon: "🚀", prompt: "What skills should I learn to advance my career?" },
    { text: "Build Portfolio", icon: "💼", prompt: "How can I build a strong developer portfolio?" }
  ]

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-indigo-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-delayed"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-md bg-black/10 border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Jarvis AI
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={clearChat}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear
            </Button>
            
            <Button
              onClick={() => setIsDarkMode(!isDarkMode)}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Chat Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 min-h-[calc(100vh-80px)] flex flex-col">
        
        {/* Quick Reply Chips */}
        {messages.length <= 1 && (
          <div className="mb-8 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(reply.prompt)}
                  className="p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 text-left group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                    {reply.icon}
                  </div>
                  <h3 className="font-medium text-white/90 group-hover:text-white transition-colors">
                    {reply.text}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages Area */}
        <div className="flex-1 space-y-2 pb-8">
          {messages.map((message) => (
            <ChatBubble 
              key={message.id} 
              message={message} 
              isTyping={message.typing}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="relative">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl">
            <div className="flex space-x-4 items-end">
              <div className="flex-1 relative">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Jarvis anything about your career journey…"
                  disabled={isLoading}
                  className="w-full bg-transparent border-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0 text-lg px-0"
                />
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-xl bg-blue-500/5 blur-sm pointer-events-none"></div>
              </div>
              
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
          
          {/* Floating glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl -z-10"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Send, Bot, User, Loader2, Target, BookOpen, Code, Lightbulb, Brain, TrendingUp, Award, MessageSquare, Sparkles, Settings, Paperclip, Mic } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  type?: string
  metadata?: any
}

const quickQuestions = [
  {
    icon: Target,
    question: "What skills do I need for backend development?",
    category: "Skills",
    color: "blue"
  },
  {
    icon: BookOpen,
    question: "How can I prepare for technical interviews?",
    category: "Interview",
    color: "green"
  },
  {
    icon: Code,
    question: "What's the best way to learn React?",
    category: "Learning",
    color: "purple"
  },
  {
    icon: Lightbulb,
    question: "How do I transition to a tech career?",
    category: "Career",
    color: "orange"
  },
  {
    icon: Brain,
    question: "Explain machine learning for beginners",
    category: "AI/ML",
    color: "indigo"
  },
  {
    icon: TrendingUp,
    question: "What are the highest paying tech jobs?",
    category: "Salary",
    color: "emerald"
  }
]

const aiPersonalities = [
  {
    id: 'mentor',
    name: 'Career Mentor',
    description: 'Experienced guide for career planning and growth',
    icon: <Award className="w-4 h-4" />,
    color: 'blue'
  },
  {
    id: 'tutor',
    name: 'Technical Tutor',
    description: 'Expert at explaining complex technical concepts',
    icon: <Brain className="w-4 h-4" />,
    color: 'purple'
  },
  {
    id: 'interviewer',
    name: 'Interview Coach',
    description: 'Specialist in interview preparation and practice',
    icon: <MessageSquare className="w-4 h-4" />,
    color: 'green'
  }
]

export default function ChatPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [selectedPersonality, setSelectedPersonality] = useState('mentor')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickQuestions, setShowQuickQuestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Move useEffect hooks before conditional returns to fix React Hooks rules
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Initialize with welcome message
    const welcomeMessage: Message = {
      id: '1',
      role: 'assistant',
      content: `🎯 **Welcome to your AI Career Assistant, ${user?.firstName || 'there'}!** 

I'm here to help you navigate your tech career journey. I can assist with:

• **Career Planning** - Find the right path for your goals
• **Skill Development** - Learn what technologies to focus on  
• **Interview Prep** - Practice questions and get feedback
• **Learning Resources** - Get personalized study recommendations
• **Industry Insights** - Stay updated with tech trends

What would you like to explore today?`,
      timestamp: new Date(),
      type: 'suggestion'
    }
    setMessages([welcomeMessage])
  }, [user])

  if (isLoaded && !isSignedIn) {
    redirect('/sign-in');
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const simulateTyping = () => {
    setIsTyping(true)
    setTimeout(() => setIsTyping(false), 1500)
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setSending(true)
    setShowQuickQuestions(false)
    simulateTyping()

    // Simulate API call delay
    setTimeout(async () => {
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            message: inputMessage,
            personality: selectedPersonality,
            history: messages 
          })
        })
        
        const data = await response.json()
        
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.message || generateSmartResponse(inputMessage),
          timestamp: new Date(),
          type: data.type || 'text',
          metadata: data.metadata
        }

        setMessages(prev => [...prev, assistantMessage])
      } catch (error) {
        console.error('Chat error:', error)
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: generateSmartResponse(inputMessage),
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
      } finally {
        setSending(false)
      }
    }, 1500)
  }

  const generateSmartResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('react') || lowerInput.includes('frontend')) {
      return `🚀 **React Learning Path:**

**Phase 1: Fundamentals (2-3 weeks)**
• JavaScript ES6+ features
• HTML5 & CSS3 (Flexbox, Grid)
• DOM manipulation basics

**Phase 2: React Core (3-4 weeks)**  
• Components & JSX
• Props & State management
• Event handling & Forms
• React Hooks (useState, useEffect)

**Phase 3: Advanced (4-6 weeks)**
• Context API & State management
• React Router for navigation
• API integration with fetch/axios
• Testing with Jest & React Testing Library

**Recommended Resources:**
• [React Official Tutorial](https://react.dev/tutorial)
• Build 3-5 projects (Todo app, Weather app, E-commerce)
• Join React communities on Discord/Reddit

**Next Steps:** Consider learning Next.js for production apps!

Would you like a detailed project roadmap or specific resource recommendations?`
    }
    
    if (lowerInput.includes('backend') || lowerInput.includes('api') || lowerInput.includes('server')) {
      return `⚡ **Backend Development Skills:**

**Core Technologies:**
• **Language:** Node.js, Python, Java, or Go
• **Databases:** PostgreSQL, MongoDB, Redis
• **APIs:** REST, GraphQL, WebSocket
• **Cloud:** AWS, Azure, or Google Cloud

**Essential Skills:**
• Database design & optimization
• Authentication & security
• Caching strategies  
• API design patterns
• Microservices architecture

**Learning Path:**
1. Master one backend language deeply
2. Build RESTful APIs with authentication
3. Learn database design & SQL
4. Deploy to cloud platforms
5. Study system design principles

**Project Ideas:**
• User authentication system
• E-commerce API with payments
• Real-time chat application
• Microservices architecture

Want me to create a detailed 12-week backend roadmap for you?`
    }
    
    if (lowerInput.includes('interview') || lowerInput.includes('preparation')) {
      return `📝 **Technical Interview Mastery:**

**Data Structures & Algorithms (40% of prep time)**
• Arrays, Linked Lists, Stacks, Queues
• Trees, Graphs, Hash Tables
• Sorting & Searching algorithms
• Dynamic Programming basics

**System Design (25% of prep time)**
• Scalability concepts
• Database design
• Caching strategies
• Load balancing
• Microservices vs Monolith

**Coding Practice (25% of prep time)**
• LeetCode (Easy→Medium→Hard)
• HackerRank challenges
• CodeSignal assessments
• Mock interviews on Pramp

**Behavioral Questions (10% of prep time)**
• STAR method responses
• Leadership examples
• Problem-solving stories
• Culture fit preparation

**Timeline:** 8-12 weeks of consistent practice
**Daily Goal:** 2-3 coding problems + 1 system design topic

Ready to start with a coding challenge or system design question?`
    }
    
    if (lowerInput.includes('career') || lowerInput.includes('transition')) {
      return `🎯 **Tech Career Transition Strategy:**

**Step 1: Self Assessment (Week 1-2)**
• Identify transferable skills
• Choose your tech specialization
• Set realistic timeline (6-18 months)

**Step 2: Skill Building (Months 1-6)**
• Complete online courses/bootcamp
• Build 3-5 portfolio projects
• Contribute to open source
• Network in tech communities

**Step 3: Job Search Prep (Month 4-6)**
• Optimize LinkedIn & GitHub
• Practice technical interviews
• Apply to entry-level positions
• Consider internships/apprenticeships

**Popular Entry Paths:**
• **Frontend:** HTML/CSS/JS → React/Vue
• **Backend:** Python/Node.js → APIs/Databases  
• **Data:** Python/SQL → Analytics/ML
• **DevOps:** Linux/Docker → Cloud platforms

**Timeline by Background:**
• **No tech experience:** 12-18 months
• **Some programming:** 6-12 months  
• **Adjacent field:** 3-6 months

What's your current background? I can create a personalized transition plan!`
    }

    if (lowerInput.includes('machine learning') || lowerInput.includes('ai')) {
      return `🤖 **Machine Learning for Beginners:**

**What is Machine Learning?**
ML is teaching computers to learn patterns from data without explicit programming.

**Core Concepts:**
• **Supervised Learning:** Learn from labeled examples (email spam detection)
• **Unsupervised Learning:** Find hidden patterns (customer segmentation)  
• **Reinforcement Learning:** Learn through trial and error (game AI)

**Essential Prerequisites:**
• **Python programming** (NumPy, Pandas)
• **Statistics & probability** basics
• **Linear algebra** fundamentals
• **Basic calculus** (optional but helpful)

**Learning Path:**
1. **Foundations (2-3 months):** Python, statistics, data manipulation
2. **Core ML (3-4 months):** Algorithms, scikit-learn, model evaluation
3. **Deep Learning (2-3 months):** Neural networks, TensorFlow/PyTorch
4. **Specialization (3+ months):** Computer vision, NLP, or time series

**First Project Ideas:**
• Predict house prices with linear regression
• Classify images of cats vs dogs
• Build a recommendation system
• Sentiment analysis of movie reviews

Ready to start with a specific area or need help choosing your ML specialization?`
    }

    // Default intelligent response
    return `🤔 That's a great question! Based on what you're asking about, I'd recommend:

**Immediate Next Steps:**
• Research the specific technologies involved
• Look for beginner-friendly tutorials  
• Join relevant online communities
• Start with a small hands-on project

**Learning Resources:**
• Documentation & official guides
• YouTube tutorials & courses
• Practice platforms like Codecademy
• Build real projects to apply knowledge

Would you like me to dive deeper into any specific aspect? I can provide:
• Detailed learning roadmaps
• Resource recommendations  
• Project ideas to build
• Career guidance for your goals

Feel free to ask about specific technologies, career paths, or learning strategies!`
  }

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">AI Career Assistant</h1>
                  <p className="text-sm text-gray-600">Powered by advanced AI • Always learning</p>
                </div>
              </div>
            </div>
            
            {/* AI Personality Selector */}
            <div className="flex items-center space-x-2">
              <select
                value={selectedPersonality}
                onChange={(e) => setSelectedPersonality(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {aiPersonalities.map(personality => (
                  <option key={personality.id} value={personality.id}>
                    {personality.name}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-80px)]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                }`}>
                  {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                
                <div className={`rounded-lg px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-900'
                }`}>
                  <div className="prose prose-sm max-w-none">
                    {message.content.split('\n').map((line, index) => {
                      // Handle markdown-style formatting
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <h4 key={index} className="font-bold text-lg mb-2 mt-3">{line.slice(2, -2)}</h4>
                      }
                      if (line.startsWith('• ')) {
                        return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>
                      }
                      if (line.includes('**') && line.includes(':**')) {
                        const parts = line.split('**')
                        return (
                          <p key={index} className="mb-2">
                            {parts.map((part, i) => 
                              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                            )}
                          </p>
                        )
                      }
                      return line ? <p key={index} className="mb-2">{line}</p> : <br key={index} />
                    })}
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                    <span>{message.timestamp.toLocaleTimeString()}</span>
                    {message.role === 'assistant' && (
                      <div className="flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>AI</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {showQuickQuestions && messages.length <= 1 && (
          <div className="p-4 bg-white border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Questions:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {quickQuestions.map((item, index) => {
                const Icon = item.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(item.question)}
                    className={`p-3 text-left border border-gray-200 rounded-lg hover:bg-${item.color}-50 hover:border-${item.color}-200 transition-colors group`}
                  >
                    <div className="flex items-start space-x-2">
                      <Icon className={`w-4 h-4 text-${item.color}-600 group-hover:text-${item.color}-700 mt-0.5`} />
                      <div>
                        <p className="text-xs font-medium text-gray-900">{item.category}</p>
                        <p className="text-xs text-gray-600 line-clamp-2">{item.question}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about career paths, skills, interviews, or anything tech-related..."
                className="pr-20"
                disabled={sending}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Paperclip className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Mic className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <Button 
              onClick={handleSendMessage} 
              disabled={!inputMessage.trim() || sending}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {sending ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI responses are generated and may not always be accurate. Always verify important information.
          </p>
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import { Bot, User, Sparkles, Copy, ThumbsUp, ThumbsDown, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  typing?: boolean
}

interface ChatAreaProps {
  messages: Message[]
  inputMessage: string
  setInputMessage: (value: string) => void
  sendMessage: (message?: string) => void
  sending: boolean
  aiResponding: boolean
  isTyping: boolean
  aiFeatures: {
    spellingCorrection: boolean
    contextAnalysis: boolean
    advancedModel: boolean
  }
  messagesEndRef: React.RefObject<HTMLDivElement>
  inputRef: React.RefObject<HTMLInputElement>
}

export const ChatArea: React.FC<ChatAreaProps> = ({
  messages,
  inputMessage,
  setInputMessage,
  sendMessage,
  sending,
  aiResponding,
  isTyping,
  aiFeatures,
  messagesEndRef,
  inputRef,
}) => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.length === 1 && (
          // Welcome Screen
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Welcome to AI Assistant!</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              I'm your AI-powered career mentor, ready to help you navigate your professional journey. Ask me anything about career development, skills, or industry insights!
            </p>
            <div className="bg-blue-50 rounded-xl p-4 max-w-md mx-auto">
              <h3 className="font-semibold text-blue-900 mb-2">I can help you with:</h3>
              <ul className="text-sm text-blue-800 space-y-1 text-left">
                <li>• Career planning and guidance</li>
                <li>• Skill development recommendations</li>
                <li>• Interview preparation</li>
                <li>• Resume and portfolio advice</li>
                <li>• Industry trends and insights</li>
              </ul>
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-3xl ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} space-x-3`}>
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' 
                    ? 'bg-blue-600' 
                    : 'bg-gradient-to-br from-purple-600 to-blue-600'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>

              {/* Message Content */}
              <div className={`flex-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-4 rounded-2xl max-w-full ${
                  message.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                } ${message.role === 'user' ? 'rounded-br-md' : 'rounded-bl-md'} shadow-sm`}>
                  
                  {message.typing ? (
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  ) : (
                    <div className="prose prose-sm max-w-none">
                      {message.content.split('\n').map((line, index) => (
                        <p key={index} className={message.role === 'user' ? 'text-white' : 'text-gray-900'}>
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Message Actions (for assistant messages) */}
                {message.role === 'assistant' && !message.typing && (
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded transition-colors">
                      <Copy className="w-3 h-3" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-green-600 rounded transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-600 rounded transition-colors">
                      <ThumbsDown className="w-3 h-3" />
                    </button>
                    <span className="text-xs text-gray-400 ml-2">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white p-4">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="space-y-3">
          <div className="flex space-x-3">
            <Input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about your career..."
              className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              disabled={!inputMessage.trim() || sending || aiResponding}
            />
            <Button
              type="submit"
              disabled={!inputMessage.trim() || sending || aiResponding}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
            >
              {sending || aiResponding ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* AI Features Status Indicator */}
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
            {aiFeatures.spellingCorrection && (
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Spelling Check</span>
              </div>
            )}
            {aiFeatures.contextAnalysis && (
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Context Analysis</span>
              </div>
            )}
            {aiFeatures.advancedModel && (
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Advanced AI</span>
              </div>
            )}
          </div>
        </form>
        
        <div className="text-xs text-gray-500 mt-1 text-center">
          🤖 Jarvis AI Assistant with contextual intelligence • Consider checking important information
        </div>
      </div>
    </div>
  )
}
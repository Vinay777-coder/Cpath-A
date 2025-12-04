import React from 'react'
import { Plus, Search, Filter, Grid, List, MessageCircle, Clock, Trash2 } from 'lucide-react'

interface ChatSidebarProps {
  showHistory: boolean
  setShowHistory: (value: boolean) => void
  chatHistory: any[]
  quickQuestions: any[]
  handleQuickQuestion: (question: string) => void
  sending: boolean
  aiResponding: boolean
  clearChatHistory: () => void
  loadConversation: (id: string) => void
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({
  showHistory,
  setShowHistory,
  chatHistory,
  quickQuestions,
  handleQuickQuestion,
  sending,
  aiResponding,
  clearChatHistory,
  loadConversation,
}) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Sidebar Tabs */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setShowHistory(false)}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              !showHistory 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Quick Start
          </button>
          <button
            onClick={() => setShowHistory(true)}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              showHistory 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            History ({chatHistory.length})
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {!showHistory ? (
          // Quick Questions
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-600 mb-4">Try these popular questions</p>
            {quickQuestions.map((item, index) => {
              const IconComponent = item.icon
              return (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(item.question)}
                  disabled={sending || aiResponding}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-blue-600 mb-1">{item.category}</div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-900">{item.question}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          // Chat History
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Previous conversations</p>
              {chatHistory.length > 0 && (
                <button
                  onClick={clearChatHistory}
                  className="text-xs text-red-600 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50"
                >
                  Clear All
                </button>
              )}
            </div>
            
            {chatHistory.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm">No conversation history yet</p>
              </div>
            ) : (
              <div className="space-y-2">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 cursor-pointer transition-all duration-200"
                    onClick={() => loadConversation(chat.id)}
                  >
                    <div className="font-medium text-sm text-gray-900 mb-1 truncate">
                      {chat.messages?.find((m: any) => m.role === 'user')?.content?.slice(0, 40) || 'New Chat'}...
                    </div>
                    <div className="text-xs text-gray-500 flex items-center space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(chat.timestamp).toLocaleDateString()} • {chat.messages?.length || 0} messages</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
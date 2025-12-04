'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { trackNoteCreation, trackTaskCreation } from '@/lib/database'
import { 
  Plus,
  Search,
  Filter,
  Edit3,
  Trash2,
  Star,
  Calendar,
  Clock,
  CheckSquare,
  Square,
  BookOpen,
  Target,
  Flag,
  Tag,
  Archive,
  Download,
  Upload,
  MoreHorizontal,
  Save,
  X,
  AlertCircle,
  Lightbulb,
  Code,
  Bookmark,
  Heart,
  Eye,
  EyeOff,
  Copy,
  ExternalLink,
  Palette,
  Grid,
  List,
  SortAsc,
  Hash,
  ArrowRight
} from 'lucide-react'

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  pinned: boolean;
}

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  subtasks: Array<{
    id: string;
    title: string;
    completed: boolean;
  }>;
}

export default function NotesPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [notes, setNotes] = useState<Note[]>([])
  const [todos, setTodos] = useState<Todo[]>([])
  const [activeTab, setActiveTab] = useState('notes')
  const [searchQuery, setSearchQuery] = useState('')

  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [isCreating, setIsCreating] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [newItem, setNewItem] = useState({
    title: '',
    content: '',
    tags: []
  })

  // Move useEffect before any conditional returns to fix React Hook rules
  useEffect(() => {
    // Load data from localStorage
    const savedNotes = localStorage.getItem('pathuu-notes')
    const savedTodos = localStorage.getItem('pathuu-todos')
    
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    } else {
      // Sample notes
      const sampleNotes = [
        {
          id: '1',
          title: 'React Hooks Cheatsheet',
          content: `# React Hooks Quick Reference

## useState
\`\`\`jsx
const [count, setCount] = useState(0)
\`\`\`

## useEffect
\`\`\`jsx
useEffect(() => {
  // effect code
  return () => {
    // cleanup
  }
}, [dependencies])
\`\`\`

## useContext
\`\`\`jsx
const value = useContext(MyContext)
\`\`\`

Remember to follow the Rules of Hooks!`,
          category: 'Development',
          priority: 'high',
          color: '#4ecdc4',
          tags: ['React', 'JavaScript', 'Hooks'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          pinned: true
        },
        {
          id: '2',
          title: 'Learning Goals for 2025',
          content: `Goals for this year:
- Master TypeScript advanced patterns
- Learn system design principles
- Build 3 full-stack projects
- Contribute to open source
- Get AWS certification`,
          category: 'Career',
          priority: 'high',
          color: '#ff6b6b',
          tags: ['Goals', 'Learning', '2025'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          pinned: false
        }
      ]
      setNotes(sampleNotes)
      localStorage.setItem('pathuu-notes', JSON.stringify(sampleNotes))
    }
    
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    } else {
      // Sample todos
      const sampleTodos: Todo[] = [
        {
          id: '1',
          title: 'Complete React course module 5',
          description: 'Finish the advanced React patterns section and submit the project',
          completed: false,
          dueDate: '2025-09-30',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          subtasks: [
            { id: '1a', title: 'Watch video lectures', completed: true },
            { id: '1b', title: 'Complete coding exercises', completed: false },
            { id: '1c', title: 'Submit final project', completed: false }
          ]
        },
        {
          id: '2',
          title: 'Update portfolio website',
          description: 'Add new projects and update the design',
          completed: false,
          dueDate: '2025-10-15',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          subtasks: [
            { id: '2a', title: 'Design new layout', completed: false },
            { id: '2b', title: 'Add project details', completed: false }
          ]
        },
        {
          id: '3',
          title: 'Practice coding interview questions',
          description: 'Solve 5 LeetCode problems daily',
          completed: true,
          dueDate: '2025-09-28',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          subtasks: [
            { id: '3a', title: 'Arrays and strings', completed: true },
            { id: '3b', title: 'Dynamic programming', completed: true }
          ]
        }
      ]
      setTodos(sampleTodos)
      localStorage.setItem('pathuu-todos', JSON.stringify(sampleTodos))
    }
  }, [])

  if (isLoaded && !isSignedIn) {
    redirect('/sign-in')
  }

  // Helper function to get color for both Note and Todo
  const getItemColor = (item: Note | Todo): string => {
    return '#f3f4f6'; // Default light gray for all items
  };

  // Helper function to check if item is completed (for todos only)
  const isItemCompleted = (item: Note | Todo): boolean => {
    return activeTab === 'todos' ? (item as Todo).completed : false;
  };

  // Helper function to check if item is pinned (for notes only)
  const isItemPinned = (item: Note | Todo): boolean => {
    return activeTab === 'notes' ? (item as Note).pinned : false;
  };

  // Helper function to get item content
  const getItemContent = (item: Note | Todo): string => {
    return activeTab === 'notes' ? (item as Note).content : (item as Todo).description;
  };

  if (!isLoaded) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid rgba(255,255,255,0.3)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 2rem'
          }}></div>
          <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>Loading Notes...</p>
        </div>
      </div>
    )
  }

  const saveNotes = (updatedNotes: Note[]) => {
    setNotes(updatedNotes)
    localStorage.setItem('pathuu-notes', JSON.stringify(updatedNotes))
  }

  const saveTodos = (updatedTodos: Todo[]) => {
    setTodos(updatedTodos)
    localStorage.setItem('pathuu-todos', JSON.stringify(updatedTodos))
  }

  const createNote = async () => {
    const note = {
      id: Date.now().toString(),
      ...newItem,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      pinned: false
    }
    saveNotes([note, ...notes])
    
    // Track note creation for dashboard count
    if (isSignedIn && user) {
      try {
        await trackNoteCreation(user.id, {
          noteTitle: note.title,
          tags: note.tags,
          contentLength: note.content.length
        })
      } catch (error) {
        console.warn('Could not track note creation:', error)
      }
    }
    
    setIsCreating(false)
    setNewItem({
      title: '',
      content: '',
      tags: []
    })
  }

  const createTodo = async () => {
    const todo: Todo = {
      id: Date.now().toString(),
      title: newItem.title,
      description: newItem.content,
      completed: false,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      subtasks: []
    }
    saveTodos([todo, ...todos])
    
    // Track task creation for dashboard count
    if (isSignedIn && user) {
      try {
        await trackTaskCreation(user.id, {
          taskTitle: todo.title,
          dueDate: todo.dueDate,
          descriptionLength: todo.description.length
        })
      } catch (error) {
        console.warn('Could not track task creation:', error)
      }
    }
    
    setIsCreating(false)
    setNewItem({
      title: '',
      content: '',
      tags: []
    })
  }

  const deleteNote = (id: string) => {
    saveNotes(notes.filter(note => note.id !== id))
  }

  const deleteTodo = (id: string) => {
    saveTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    saveTodos(updatedTodos)
  }

  const pinNote = (id: string) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, pinned: !note.pinned } : note
    )
    saveNotes(updatedNotes)
  }

  const filteredItems = activeTab === 'notes' ? notes : todos
  
  const searchFiltered = searchQuery 
    ? filteredItems.filter(item => {
        const matchesTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        if (activeTab === 'notes') {
          const note = item as Note;
          return matchesTitle || 
            note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        } else {
          const todo = item as Todo;
          return matchesTitle || 
            todo.description.toLowerCase().includes(searchQuery.toLowerCase());
        }
      })
    : filteredItems

  const stats = {
    totalNotes: notes.length,
    totalTodos: todos.length,
    completedTodos: todos.filter(todo => todo.completed).length,
    pinnedNotes: notes.filter(note => note.pinned).length
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '2rem'
    }}>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Back to Dashboard Button */}
        <Link href="/dashboard" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          background: 'white',
          color: '#667eea',
          textDecoration: 'none',
          borderRadius: '12px',
          fontWeight: '600',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.15)',
          transition: 'all 0.3s ease',
          marginBottom: '2rem',
          border: '2px solid #667eea'
        }}
        onMouseOver={(e) => {
          const target = e.target as HTMLElement;
          target.style.background = '#667eea';
          target.style.color = 'white';
          target.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          const target = e.target as HTMLElement;
          target.style.background = 'white';
          target.style.color = '#667eea';
          target.style.transform = 'translateY(0)';
        }}>
          <ArrowRight className="w-4 h-4" style={{ transform: 'rotate(180deg)' }} />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '24px',
          padding: '3rem 2rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '80px',
            height: '80px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'fadeIn 2s ease-in-out infinite alternate'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%',
            animation: 'fadeIn 3s ease-in-out infinite alternate-reverse'
          }}></div>

          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📝</div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            My Notes & Tasks
          </h1>
          <p style={{
            fontSize: '1.25rem',
            fontWeight: '300',
            opacity: '0.9',
            marginBottom: '2rem'
          }}>
            Your personal workspace for ideas, notes, and productivity
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>{stats.totalNotes}</div>
              <div style={{ fontSize: '1rem', opacity: '0.9' }}>📄 Total Notes</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>{stats.totalTodos}</div>
              <div style={{ fontSize: '1rem', opacity: '0.9' }}>✅ Total Tasks</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>{stats.completedTodos}</div>
              <div style={{ fontSize: '1rem', opacity: '0.9' }}>🎉 Completed</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>{stats.pinnedNotes}</div>
              <div style={{ fontSize: '1rem', opacity: '0.9' }}>📌 Pinned</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button
              onClick={() => setActiveTab('notes')}
              style={{
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'notes' 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : '#f8fafc',
                color: activeTab === 'notes' ? 'white' : '#64748b',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <BookOpen className="w-4 h-4" />
              Notes ({stats.totalNotes})
            </button>
            <button
              onClick={() => setActiveTab('todos')}
              style={{
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'todos' 
                  ? 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)'
                  : '#f8fafc',
                color: activeTab === 'todos' ? 'white' : '#64748b',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <CheckSquare className="w-4 h-4" />
              Tasks ({stats.totalTodos})
            </button>
          </div>

          {/* Search and Filters */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto auto auto auto',
            gap: '1rem',
            alignItems: 'center'
          }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <Search className="w-5 h-5" style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6b7280'
              }} />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.style.borderColor = '#667eea'
                  target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)'
                }}
                onBlur={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.style.borderColor = '#e5e7eb'
                  target.style.boxShadow = 'none'
                }}
              />
            </div>



            {/* View Mode */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  padding: '1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  background: viewMode === 'grid' ? '#667eea' : 'white',
                  color: viewMode === 'grid' ? 'white' : '#64748b',
                  cursor: 'pointer'
                }}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: '1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  background: viewMode === 'list' ? '#667eea' : 'white',
                  color: viewMode === 'list' ? 'white' : '#64748b',
                  cursor: 'pointer'
                }}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Create Button */}
            <button
              onClick={() => setIsCreating(true)}
              style={{
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'notes' 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(0)'
              }}
            >
              <Plus className="w-4 h-4" />
              New {activeTab === 'notes' ? 'Note' : 'Task'}
            </button>
          </div>
        </div>

        {/* Create/Edit Modal */}
        {(isCreating || editingId) && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsCreating(false)
              setEditingId(null)
            }
          }}>
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '3rem',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              animation: 'slideUp 0.3s ease-out'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>
                  {isCreating ? `Create New ${activeTab === 'notes' ? 'Note' : 'Task'}` : 'Edit Item'}
                </h2>
                <button
                  onClick={() => {
                    setIsCreating(false)
                    setEditingId(null)
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: '#6b7280'
                  }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    value={newItem.title}
                    onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                    placeholder={`Enter ${activeTab === 'notes' ? 'note' : 'task'} title...`}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Content
                  </label>
                  <textarea
                    value={newItem.content}
                    onChange={(e) => setNewItem({...newItem, content: e.target.value})}
                    placeholder={activeTab === 'notes' 
                      ? 'Write your note content here... Supports Markdown!'
                      : 'Describe the task details...'
                    }
                    rows={8}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>



                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => {
                      setIsCreating(false)
                      setEditingId(null)
                    }}
                    style={{
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      border: '2px solid #e5e7eb',
                      background: 'white',
                      color: '#374151',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={activeTab === 'notes' ? createNote : createTodo}
                    disabled={!newItem.title.trim()}
                    style={{
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      border: 'none',
                      background: !newItem.title.trim() 
                        ? '#9ca3af' 
                        : activeTab === 'notes' 
                          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                          : 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: !newItem.title.trim() ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Save className="w-4 h-4" />
                    {isCreating ? 'Create' : 'Update'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Items Grid/List */}
        {searchFiltered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              {activeTab === 'notes' ? '📝' : '✅'}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#374151', marginBottom: '0.5rem' }}>
              {searchQuery ? 'No items found' : `No ${activeTab} yet`}
            </h3>
            <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
              {searchQuery 
                ? 'Try adjusting your search or filter criteria'
                : `Start by creating your first ${activeTab === 'notes' ? 'note' : 'task'}`
              }
            </p>
            {!searchQuery && (
              <button
                onClick={() => setIsCreating(true)}
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Plus className="w-4 h-4" />
                Create {activeTab === 'notes' ? 'Note' : 'Task'}
              </button>
            )}
          </div>
        ) : (
          <div style={{
            display: viewMode === 'grid' 
              ? 'grid' 
              : 'flex',
            gridTemplateColumns: viewMode === 'grid' 
              ? 'repeat(auto-fill, minmax(350px, 1fr))' 
              : 'none',
            flexDirection: viewMode === 'list' ? 'column' : 'row',
            gap: '2rem'
          }}>
            {searchFiltered
              .sort((a, b) => {
                // Pinned notes first (for notes only)
                if (activeTab === 'notes') {
                  const noteA = a as Note;
                  const noteB = b as Note;
                  if (noteA.pinned !== noteB.pinned) {
                    return noteA.pinned ? -1 : 1;
                  }
                }
                // Sort by date only
                return new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime();
              })
              .map((item) => (
                <div key={item.id} style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  border: `3px solid ${getItemColor(item)}`,
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
                }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        {activeTab === 'todos' && (
                          <button
                            onClick={() => toggleTodo(item.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              color: isItemCompleted(item) ? '#10b981' : '#6b7280'
                            }}
                          >
                            {isItemCompleted(item) ? 
                              <CheckSquare className="w-5 h-5" /> : 
                              <Square className="w-5 h-5" />
                            }
                          </button>
                        )}
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: '700',
                          color: '#1f2937',
                          margin: 0,
                          textDecoration: isItemCompleted(item) ? 'line-through' : 'none',
                          opacity: isItemCompleted(item) ? 0.6 : 1
                        }}>
                          {item.title}
                        </h3>
                        {isItemPinned(item) && (
                          <Star className="w-4 h-4" style={{ color: '#fbbf24' }} />
                        )}
                      </div>


                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {activeTab === 'notes' && (
                        <button
                          onClick={() => pinNote(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: isItemPinned(item) ? '#fbbf24' : '#6b7280'
                          }}
                        >
                          <Star className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => activeTab === 'notes' ? deleteNote(item.id) : deleteTodo(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#ef4444'
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{
                    color: '#6b7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    maxHeight: '120px',
                    overflow: 'hidden'
                  }}>
                    {getItemContent(item) || 'No content'}
                  </div>

                  {/* Tags */}
                  {activeTab === 'notes' && (item as Note).tags && (item as Note).tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                      {(item as Note).tags.map((tag: string, index: number) => (
                        <span key={index} style={{
                          background: '#f1f5f9',
                          color: '#475569',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    paddingTop: '1rem',
                    borderTop: '1px solid #f1f5f9'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar className="w-4 h-4" />
                      {activeTab === 'todos' && (item as Todo).dueDate 
                        ? `Due: ${new Date((item as Todo).dueDate).toLocaleDateString()}`
                        : `Created: ${new Date(item.createdAt).toLocaleDateString()}`
                      }
                    </div>
                    {isItemCompleted(item) && (
                      <span style={{
                        background: '#dcfce7',
                        color: '#166534',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        ✅ Completed
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

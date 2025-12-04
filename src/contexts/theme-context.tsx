import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Theme {
  id: string
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
  textMuted: string
  description: string
}

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Ocean Blue',
    primary: 'from-indigo-500 to-purple-500',
    secondary: 'from-blue-50 to-purple-50',
    accent: 'from-indigo-50 via-white to-cyan-50',
    background: 'from-indigo-50 via-white to-cyan-50',
    surface: 'bg-white/70',
    text: 'text-gray-800',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-500',
    description: 'Cool blues and purples for a professional look'
  },
  {
    id: 'sunset',
    name: 'Sunset Orange',
    primary: 'from-orange-500 to-red-500',
    secondary: 'from-orange-50 to-red-50',
    accent: 'from-orange-50 via-white to-red-50',
    background: 'from-orange-50 via-white to-red-50',
    surface: 'bg-white/70',
    text: 'text-gray-800',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-500',
    description: 'Warm oranges and reds for energy and creativity'
  },
  {
    id: 'forest',
    name: 'Forest Green',
    primary: 'from-emerald-500 to-teal-500',
    secondary: 'from-emerald-50 to-teal-50',
    accent: 'from-emerald-50 via-white to-teal-50',
    background: 'from-emerald-50 via-white to-teal-50',
    surface: 'bg-white/70',
    text: 'text-gray-800',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-500',
    description: 'Nature-inspired greens for calm and focus'
  },
  {
    id: 'royal',
    name: 'Royal Purple',
    primary: 'from-purple-500 to-pink-500',
    secondary: 'from-purple-50 to-pink-50',
    accent: 'from-purple-50 via-white to-pink-50',
    background: 'from-purple-50 via-white to-pink-50',
    surface: 'bg-white/70',
    text: 'text-gray-800',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-500',
    description: 'Elegant purples and pinks for sophistication'
  },
  {
    id: 'tech',
    name: 'Tech Blue',
    primary: 'from-blue-500 to-cyan-500',
    secondary: 'from-blue-50 to-cyan-50',
    accent: 'from-blue-50 via-white to-cyan-50',
    background: 'from-blue-50 via-white to-cyan-50',
    surface: 'bg-white/70',
    text: 'text-gray-800',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-500',
    description: 'Modern blues for a tech-focused environment'
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    primary: 'from-slate-600 to-gray-700',
    secondary: 'from-slate-800 to-gray-900',
    accent: 'from-slate-900 via-slate-800 to-gray-900',
    background: 'from-slate-900 via-slate-800 to-gray-900',
    surface: 'bg-slate-800/70',
    text: 'text-slate-100',
    textSecondary: 'text-slate-300',
    textMuted: 'text-slate-400',
    description: 'Dark theme for reduced eye strain'
  }
]

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (themeId: string) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('dashboard_theme')
    if (savedTheme) {
      const theme = themes.find(t => t.id === savedTheme)
      if (theme) {
        setCurrentTheme(theme)
      }
    }
  }, [])

  const setTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId)
    if (theme) {
      setCurrentTheme(theme)
      localStorage.setItem('dashboard_theme', themeId)
    }
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}
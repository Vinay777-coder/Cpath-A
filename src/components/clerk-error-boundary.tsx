'use client'

import { ReactNode, Component, ErrorInfo } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ClerkErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if it's a Clerk-related error
    if (error.message?.includes('Clerk') || error.name?.includes('ClerkRuntimeError')) {
      console.log('🔧 Clerk authentication error detected, falling back to local auth')
      return { hasError: true, error }
    }
    return { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ClerkErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Return fallback UI or children without Clerk wrapper
      return this.props.fallback || this.props.children
    }

    return this.props.children
  }
}
// Enhanced local authentication system for testing
// This provides real user registration and login functionality

export interface LocalUser {
  id: string
  email: string
  name: string
  createdAt?: string
}

interface StoredUser extends LocalUser {
  password: string
}

class LocalAuthManager {
  private user: LocalUser | null = null
  private isAuthenticated: boolean = false

  constructor() {
    if (typeof window !== 'undefined') {
      const savedAuth = localStorage.getItem('local_auth_user')
      if (savedAuth) {
        try {
          this.user = JSON.parse(savedAuth)
          this.isAuthenticated = true
        } catch (e) {
          this.clearAuth()
        }
      }
    }
  }

  private getRegisteredUsers(): StoredUser[] {
    if (typeof window === 'undefined') return []
    
    try {
      const users = localStorage.getItem('local_registered_users')
      return users ? JSON.parse(users) : []
    } catch (e) {
      return []
    }
  }

  private saveRegisteredUsers(users: StoredUser[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('local_registered_users', JSON.stringify(users))
    }
  }

  signIn(email: string, password: string): Promise<{ success: boolean; user?: LocalUser; error?: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Get registered users from localStorage
        const registeredUsers = this.getRegisteredUsers()
        
        // Find user by email
        const foundUser = registeredUsers.find(u => u.email === email)
        
        if (!foundUser) {
          resolve({ 
            success: false, 
            error: 'No account found with this email. Please sign up first.'
          })
          return
        }
        
        // Validate password
        if (foundUser.password !== password) {
          resolve({ 
            success: false, 
            error: 'Invalid password. Please try again.'
          })
          return
        }
        
        // Success - create session
        const user: LocalUser = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          createdAt: foundUser.createdAt
        }
        
        this.user = user
        this.isAuthenticated = true
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('local_auth_user', JSON.stringify(user))
        }
        
        resolve({ success: true, user })
      }, 500) // Simulate network delay
    })
  }

  signUp(email: string, password: string, name: string): Promise<{ success: boolean; user?: LocalUser; error?: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const registeredUsers = this.getRegisteredUsers()
        
        // Check if user already exists
        if (registeredUsers.find(u => u.email === email)) {
          resolve({ 
            success: false, 
            error: 'An account with this email already exists. Please sign in instead.'
          })
          return
        }
        
        // Validate inputs
        if (!email || !password || !name) {
          resolve({ 
            success: false, 
            error: 'All fields are required.'
          })
          return
        }
        
        if (password.length < 6) {
          resolve({ 
            success: false, 
            error: 'Password must be at least 6 characters long.'
          })
          return
        }
        
        if (!/\S+@\S+\.\S+/.test(email)) {
          resolve({ 
            success: false, 
            error: 'Please enter a valid email address.'
          })
          return
        }
        
        // Create new user
        const newUser: StoredUser = {
          id: 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
          email: email,
          name: name,
          password: password,
          createdAt: new Date().toISOString()
        }
        
        // Save to registered users
        registeredUsers.push(newUser)
        this.saveRegisteredUsers(registeredUsers)
        
        // Auto-sign in the new user
        const user: LocalUser = {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          createdAt: newUser.createdAt
        }
        
        this.user = user
        this.isAuthenticated = true
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('local_auth_user', JSON.stringify(user))
        }
        
        resolve({ success: true, user })
      }, 800) // Simulate API delay
    })
  }

  signOut(): Promise<void> {
    return new Promise((resolve) => {
      this.user = null
      this.isAuthenticated = false
      if (typeof window !== 'undefined') {
        localStorage.removeItem('local_auth_user')
      }
      resolve()
    })
  }

  getCurrentUser(): LocalUser | null {
    return this.user
  }

  isSignedIn(): boolean {
    return this.isAuthenticated && this.user !== null
  }

  private clearAuth() {
    this.user = null
    this.isAuthenticated = false
    if (typeof window !== 'undefined') {
      localStorage.removeItem('local_auth_user')
    }
  }

  // Get all registered users (for testing purposes)
  getAllUsers(): Omit<StoredUser, 'password'>[] {
    return this.getRegisteredUsers().map(({ password, ...user }) => user)
  }

  // Clear all data (for testing purposes)
  clearAllData(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('local_auth_user')
      localStorage.removeItem('local_registered_users')
    }
    this.user = null
    this.isAuthenticated = false
  }
}

export const localAuth = new LocalAuthManager()

export function shouldUseLocalAuth(): boolean {
  // Always use local auth for now since we're building a real system
  return true
}
// No authentication required - direct access to all features
export async function getCurrentUser() {
  return { 
    user: { 
      id: 'demo-user', 
      email: 'demo@example.com',
      name: 'Demo User'
    }, 
    error: null 
  }
}

export async function checkAuth() {
  return { 
    session: { 
      user: { 
        id: 'demo-user', 
        email: 'demo@example.com',
        name: 'Demo User'
      }
    }, 
    error: null 
  }
}

// Mock auth functions for components that still reference them
export async function signUpWithEmailPassword(email: string, password: string) {
  return { 
    user: { 
      id: 'demo-user', 
      email: email,
      name: 'Demo User'
    }, 
    error: null 
  }
}

export async function signInWithEmailPassword(email: string, password: string) {
  return { 
    user: { 
      id: 'demo-user', 
      email: email,
      name: 'Demo User'
    }, 
    error: null 
  }
}

export async function signOut() {
  // No-op since we don't have real authentication
  return { error: null }
}
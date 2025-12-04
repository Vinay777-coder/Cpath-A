import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if we have valid Supabase configuration
const isValidSupabaseConfig = () => {
  return supabaseUrl && 
         supabaseAnonKey && 
         supabaseUrl !== 'https://placeholder.supabase.co' && 
         supabaseAnonKey !== 'placeholder-key' &&
         supabaseUrl.startsWith('https://') &&
         !supabaseUrl.includes('placeholder')
}

// Only create client if we have valid configuration
export const supabase = isValidSupabaseConfig() ? createClient(supabaseUrl!, supabaseAnonKey!) : null

// Database types for Clerk + Supabase integration
export interface Profile {
  id: string
  clerk_user_id: string
  email: string
  full_name?: string
  avatar_url?: string
  phone?: string
  bio?: string
  created_at: string
  updated_at: string
}

export interface Resume {
  id: string
  profile_id: string
  clerk_user_id: string
  file_name: string
  file_path: string
  file_size: number
  file_type: string
  analysis_score?: number
  analysis_feedback?: any
  created_at: string
  updated_at: string
}

// Legacy types (keeping for backward compatibility)
export type RoadmapRecord = {
  id: string
  title: string
  description?: string
  steps: any
  category: string
  created_at: string
}

export type ProgressRecord = {
  id: string
  user_id: string
  roadmap_id: string
  completed_steps: string[]
  completion_percentage: number
  created_at: string
}

export type ResumeCheckRecord = {
  id: string
  user_id: string
  ats_score: number
  feedback: string
  strengths: string[]
  weaknesses: string[]
  created_at: string
}
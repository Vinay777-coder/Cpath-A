-- Resume Storage Database Setup for Supabase
-- Run these commands in your Supabase SQL Editor

-- 1. Create profiles table first (if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    clerk_user_id TEXT NOT NULL UNIQUE,
    email TEXT,
    full_name TEXT,
    avatar_url TEXT,
    phone TEXT,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index for profiles
CREATE INDEX IF NOT EXISTS idx_profiles_clerk_user_id ON public.profiles(clerk_user_id);

-- Enable RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own profile" ON public.profiles
    FOR INSERT WITH CHECK (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (clerk_user_id = auth.jwt() ->> 'sub');

-- Grant permissions for profiles
GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

-- 2. Create resumes table for storing resume files and analysis
CREATE TABLE IF NOT EXISTS public.resumes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    clerk_user_id TEXT NOT NULL,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL UNIQUE,
    file_size INTEGER NOT NULL,
    file_type TEXT NOT NULL,
    analysis_score INTEGER,
    analysis_feedback JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_resumes_clerk_user_id ON public.resumes(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_resumes_created_at ON public.resumes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_resumes_analysis_score ON public.resumes(analysis_score DESC);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS policies for data security
-- Users can only access their own resumes
CREATE POLICY "Users can view their own resumes" ON public.resumes
    FOR SELECT USING (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own resumes" ON public.resumes
    FOR INSERT WITH CHECK (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own resumes" ON public.resumes
    FOR UPDATE USING (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can delete their own resumes" ON public.resumes
    FOR DELETE USING (clerk_user_id = auth.jwt() ->> 'sub');

-- 6. Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for both tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_resumes_updated_at BEFORE UPDATE ON public.resumes
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- 7. Create storage bucket policies for file security
-- Note: You may need to create these through the Supabase Dashboard > Storage > Policies

-- Policy: Users can upload to their own folder
-- Bucket: resumes
-- Policy Type: INSERT
-- Policy Name: Users can upload resumes to their folder
-- Policy Definition: (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.jwt() ->> 'sub')

-- Policy: Users can view their own files  
-- Bucket: resumes
-- Policy Type: SELECT
-- Policy Name: Users can view their own resumes
-- Policy Definition: (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.jwt() ->> 'sub')

-- Policy: Users can delete their own files
-- Bucket: resumes  
-- Policy Type: DELETE
-- Policy Name: Users can delete their own resumes
-- Policy Definition: (bucket_id = 'resumes' AND (storage.foldername(name))[1] = auth.jwt() ->> 'sub')

-- 8. Grant necessary permissions
GRANT ALL ON public.resumes TO authenticated;
GRANT ALL ON public.resumes TO service_role;

-- 9. Create a view for resume statistics (optional)
CREATE OR REPLACE VIEW public.resume_stats AS
SELECT 
    clerk_user_id,
    COUNT(*) as total_resumes,
    AVG(analysis_score) as average_score,
    MAX(analysis_score) as best_score,
    MIN(created_at) as first_upload,
    MAX(created_at) as latest_upload
FROM public.resumes 
WHERE analysis_score IS NOT NULL
GROUP BY clerk_user_id;

-- Grant access to the view
GRANT SELECT ON public.resume_stats TO authenticated;
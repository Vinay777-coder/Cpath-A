-- Updated Supabase Setup for Clerk Integration
-- Run these commands in your Supabase SQL Editor to fix RLS policies

-- 1. Drop existing RLS policies that use Supabase auth
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON public.profiles;

-- 2. Temporarily disable RLS to allow operations (we'll manage security at application level)
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;

-- 3. Or if you prefer to keep RLS enabled, create policies that allow service_role
-- ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow service role full access" ON public.profiles
--     FOR ALL USING (true);

-- 4. Ensure proper permissions
GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO anon;
GRANT ALL ON public.profiles TO service_role;

-- 5. Do the same for other tables
ALTER TABLE public.resumes DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.login_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs DISABLE ROW LEVEL SECURITY;

-- Grant permissions for all tables
GRANT ALL ON public.resumes TO authenticated;
GRANT ALL ON public.resumes TO anon;
GRANT ALL ON public.resumes TO service_role;

GRANT ALL ON public.login_sessions TO authenticated;
GRANT ALL ON public.login_sessions TO anon;
GRANT ALL ON public.login_sessions TO service_role;

GRANT ALL ON public.activity_logs TO authenticated;
GRANT ALL ON public.activity_logs TO anon;
GRANT ALL ON public.activity_logs TO service_role;

-- 6. Alternative: If you want to keep RLS, create a function to validate Clerk tokens
-- CREATE OR REPLACE FUNCTION public.clerk_user_id()
-- RETURNS TEXT
-- LANGUAGE plpgsql
-- AS $$
-- BEGIN
--   RETURN current_setting('request.jwt.claims', true)::json->>'clerk_user_id';
-- END;
-- $$;
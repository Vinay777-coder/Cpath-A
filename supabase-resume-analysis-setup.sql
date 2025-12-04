-- Create resume_checks table for storing resume analysis results
CREATE TABLE IF NOT EXISTS resume_checks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_hash TEXT NOT NULL,
    ats_score INTEGER NOT NULL CHECK (ats_score >= 0 AND ats_score <= 100),
    strengths TEXT[] NOT NULL DEFAULT '{}',
    weaknesses TEXT[] NOT NULL DEFAULT '{}',
    action_items TEXT[] NOT NULL DEFAULT '{}',
    career_fits TEXT[] NOT NULL DEFAULT '{}',
    feedback TEXT NOT NULL,
    keywords_found TEXT[] NOT NULL DEFAULT '{}',
    keywords_missing TEXT[] NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_resume_checks_user_id ON resume_checks(user_id);
CREATE INDEX IF NOT EXISTS idx_resume_checks_file_hash ON resume_checks(file_hash);
CREATE INDEX IF NOT EXISTS idx_resume_checks_created_at ON resume_checks(created_at);
CREATE INDEX IF NOT EXISTS idx_resume_checks_user_hash ON resume_checks(user_id, file_hash);

-- Add Row Level Security (RLS)
ALTER TABLE resume_checks ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see only their own resume checks
CREATE POLICY "Users can view own resume checks" ON resume_checks
    FOR SELECT USING (auth.uid()::text = user_id);

-- Create policy to allow users to insert their own resume checks
CREATE POLICY "Users can insert own resume checks" ON resume_checks
    FOR INSERT WITH CHECK (auth.uid()::text = user_id);

-- Create policy to allow users to update their own resume checks
CREATE POLICY "Users can update own resume checks" ON resume_checks
    FOR UPDATE USING (auth.uid()::text = user_id);

-- Add comment for documentation
COMMENT ON TABLE resume_checks IS 'Stores resume analysis results from ChatGPT API with caching and user association';
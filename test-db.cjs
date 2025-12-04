const { createClient } = require('@supabase/supabase-js');
const { config } = require('dotenv');

// Load environment variables
config({ path: '.env.local' });

console.log('Environment check:');
console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('SUPABASE_KEY length:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length);

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error('❌ Missing Supabase environment variables');
  console.log('Please check your .env.local file');
  process.exit(1);
}

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testSupabaseConnection() {
  try {
    console.log('🔍 Testing Supabase connection...');
    
    // Test basic connection
    const { data, error } = await supabase
      .from('resume_checks')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('❌ Supabase connection error:', error.message);
      
      if (error.message.includes('relation "resume_checks" does not exist')) {
        console.log('📋 Table "resume_checks" does not exist. Need to create it.');
        console.log('🔧 Please run the SQL setup file in your Supabase dashboard:');
        console.log('   File: supabase-resume-analysis-setup.sql');
        return false;
      }
      
      if (error.message.includes('JWT')) {
        console.log('🔑 Authentication issue - this might be normal for RLS enabled table');
      }
      
      return false;
    }
    
    console.log('✅ Supabase connection successful!');
    console.log('📊 Table exists and is accessible');
    return true;
    
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    return false;
  }
}

async function testResumeAnalysisInsert() {
  try {
    console.log('\n🧪 Testing resume analysis insert...');
    
    const testData = {
      user_id: 'test-user-123',
      file_name: 'test-resume.pdf',
      file_hash: 'test-hash-123',
      ats_score: 85,
      strengths: ['Strong experience', 'Good formatting'],
      weaknesses: ['Missing keywords', 'Need more metrics'],
      action_items: ['Add more keywords', 'Include quantified achievements'],
      career_fits: ['Software Engineer', 'Full Stack Developer'],
      feedback: 'Good resume with room for improvement',
      keywords_found: ['JavaScript', 'React', 'Node.js'],
      keywords_missing: ['TypeScript', 'AWS', 'Docker'],
    };
    
    const { data, error } = await supabase
      .from('resume_checks')
      .insert(testData)
      .select();
    
    if (error) {
      console.error('❌ Insert error:', error.message);
      return false;
    }
    
    console.log('✅ Test insert successful!');
    console.log('📄 Inserted record:', data);
    
    // Clean up test data
    if (data && data[0]) {
      await supabase
        .from('resume_checks')
        .delete()
        .eq('id', data[0].id);
      console.log('🧹 Cleaned up test data');
    }
    
    return true;
    
  } catch (error) {
    console.error('❌ Test insert failed:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Starting Supabase tests...\n');
  
  const connectionOk = await testSupabaseConnection();
  
  if (connectionOk) {
    await testResumeAnalysisInsert();
  }
  
  console.log('\n✨ Tests completed!');
}

runTests();
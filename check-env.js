// Check environment variables
console.log('Environment Variables Check:');
console.log('GROQ_API_KEY exists:', !!process.env.GROQ_API_KEY);
console.log('GROQ_API_KEY length:', process.env.GROQ_API_KEY?.length || 0);
console.log('First 10 chars:', process.env.GROQ_API_KEY?.substring(0, 10) || 'none');

// Try to verify if it's the expected format
const apiKey = process.env.GROQ_API_KEY;
if (apiKey) {
  console.log('Starts with gsk_:', apiKey.startsWith('gsk_'));
  console.log('Length check (should be ~56):', apiKey.length);
} else {
  console.log('❌ No API key found!');
}
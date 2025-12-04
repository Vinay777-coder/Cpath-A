// Test Groq API Key directly
const https = require('https');

// The API key from your .env.local file
const API_KEY = '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';

const data = JSON.stringify({
  model: 'llama-3.1-8b-instant',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Hello! Please respond with "API test successful"' }
  ],
  temperature: 0.7,
  max_tokens: 100
});

const options = {
  hostname: 'api.groq.com',
  port: 443,
  path: '/openai/v1/chat/completions',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

console.log('🔄 Testing Groq API key...');
console.log('🔑 API Key prefix:', API_KEY.substring(0, 10) + '...');

const req = https.request(options, (res) => {
  console.log('📊 Status Code:', res.statusCode);
  console.log('📋 Status Message:', res.statusMessage);
  
  let responseBody = '';
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  
  res.on('end', () => {
    try {
      const result = JSON.parse(responseBody);
      
      if (res.statusCode === 200) {
        console.log('✅ API Test Successful!');
        console.log('🤖 AI Response:', result.choices[0].message.content);
        console.log('📈 Usage:', result.usage);
      } else {
        console.log('❌ API Error:', result);
      }
    } catch (e) {
      console.log('❌ Failed to parse response:', responseBody);
    }
  });
});

req.on('error', (err) => {
  console.error('🚨 Request error:', err.message);
});

req.write(data);
req.end();
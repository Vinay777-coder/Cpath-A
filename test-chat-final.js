// Test our chat API endpoint
const https = require('https');
const http = require('http');

const data = JSON.stringify({
  message: 'Hello! Can you help me with my career?',
  conversationHistory: [],
  user: { name: 'TestUser', email: 'test@test.com' }
});

const options = {
  hostname: 'localhost',
  port: 3002,
  path: '/api/chat',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

console.log('🔄 Testing our enhanced AI Assistant API...');

const req = http.request(options, (res) => {
  console.log(`📊 Status: ${res.statusCode}`);
  
  let responseBody = '';
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  
  res.on('end', () => {
    try {
      const result = JSON.parse(responseBody);
      console.log('✅ API Response:');
      console.log('🤖 AI Response:', result.response);
      console.log('📈 Model Used:', result.model);
      console.log('🔧 Context Analysis:', result.context ? 'Yes' : 'No');
      console.log('✏️ Spelling Correction:', result.correctedMessage ? 'Applied' : 'None');
      
      if (result.success) {
        console.log('🎉 Enhanced AI Assistant is working perfectly!');
      } else {
        console.log('❌ Error:', result.error);
      }
    } catch (e) {
      console.log('📄 Raw response:', responseBody);
    }
  });
});

req.on('error', (err) => {
  console.error('🚨 Request error:', err);
});

req.write(data);
req.end();
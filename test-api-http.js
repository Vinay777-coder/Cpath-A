const https = require('https');
const http = require('http');

const data = JSON.stringify({
  message: 'hello test',
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

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  
  let responseBody = '';
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  
  res.on('end', () => {
    try {
      const result = JSON.parse(responseBody);
      console.log('✅ API Response:', JSON.stringify(result, null, 2));
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
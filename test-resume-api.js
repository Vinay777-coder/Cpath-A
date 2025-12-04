const FormData = require('form-data');
const fs = require('fs');
const fetch = require('node-fetch');

async function testResumeAPI() {
  try {
    // Test if the API endpoint is working
    console.log('Testing resume analysis API...');
    
    const response = await fetch('http://localhost:3003/api/resume-analysis', {
      method: 'GET'
    });
    
    console.log('API Status:', response.status);
    
    if (response.status === 405) {
      console.log('✅ API endpoint exists (Method Not Allowed is expected for GET request)');
    } else {
      const result = await response.text();
      console.log('Response:', result);
    }
    
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
  }
}

testResumeAPI();
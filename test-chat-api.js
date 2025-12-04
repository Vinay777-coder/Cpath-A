// Quick test script to check Groq API integration
async function testChatAPI() {
  try {
    const response = await fetch('http://localhost:3002/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'hello test',
        conversationHistory: [],
        user: { name: 'TestUser', email: 'test@test.com' }
      })
    });

    const result = await response.json();
    console.log('✅ API Response:', result);
    
    if (result.success) {
      console.log('🤖 AI Response:', result.response);
    } else {
      console.log('❌ Error:', result.error);
    }
  } catch (error) {
    console.error('🚨 Request failed:', error);
  }
}

testChatAPI();
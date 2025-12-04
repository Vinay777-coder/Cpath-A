const fs = require('fs');
const path = require('path');

async function testResumeAPI() {
  try {
    console.log('🔄 Testing Resume Analysis API...');
    
    // Create a sample text file to simulate a resume
    const sampleResumeText = `
John Doe
Software Engineer
john.doe@email.com | (555) 123-4567 | LinkedIn: linkedin.com/in/johndoe

PROFESSIONAL SUMMARY
Experienced software engineer with 5+ years developing web applications using JavaScript, React, and Node.js.

WORK EXPERIENCE
Senior Software Engineer | Tech Company | 2021-Present
• Developed 10+ React applications serving 100k+ users
• Improved application performance by 40% through optimization
• Led team of 3 junior developers

Software Engineer | StartupCorp | 2019-2021
• Built REST APIs using Node.js and Express
• Implemented automated testing reducing bugs by 60%

EDUCATION
Bachelor of Science in Computer Science | University ABC | 2019

SKILLS
JavaScript, React, Node.js, Python, SQL, AWS, Git
`;

    // Create a blob-like object for testing
    const formData = new FormData();
    const blob = new Blob([sampleResumeText], { type: 'text/plain' });
    const file = new File([blob], 'test-resume.txt', { type: 'application/pdf' });
    
    formData.append('resume', file);
    formData.append('userId', 'test-user-123');

    const response = await fetch('http://localhost:3002/api/resume-analysis', {
      method: 'POST',
      body: formData
    });

    console.log('📊 Response Status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error:', errorText);
      return;
    }

    const result = await response.json();
    console.log('✅ Analysis Result:');
    console.log('📈 ATS Score:', result.ats_score);
    console.log('💪 Strengths:', result.strengths.slice(0, 2));
    console.log('⚠️ Weaknesses:', result.weaknesses.slice(0, 2));
    console.log('🎯 Action Items:', result.action_items.slice(0, 2));
    console.log('📄 Career Fits:', result.career_fits.slice(0, 2));
    
  } catch (error) {
    console.error('💥 Test Failed:', error.message);
  }
}

// Run the test
testResumeAPI();
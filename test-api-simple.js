console.log('🧪 Testing Resume Analysis API...\n');

// Test resume content
const testResumeContent = `
John Doe
Software Engineer
Email: john.doe@email.com
Phone: (555) 123-4567

PROFESSIONAL SUMMARY
Experienced full-stack developer with 5 years of expertise in JavaScript, React, Node.js, and Python. 
Proven track record of delivering scalable web applications and leading development teams.

WORK EXPERIENCE
Senior Software Engineer | Tech Corp | 2021-2024
• Developed and maintained web applications using React and Node.js
• Led a team of 4 developers in an agile environment
• Improved application performance by 40% through code optimization
• Implemented CI/CD pipelines using Jenkins and Docker

Software Developer | StartupXYZ | 2019-2021
• Built responsive web applications using JavaScript and CSS
• Collaborated with designers and product managers
• Reduced bug reports by 30% through comprehensive testing

EDUCATION
Bachelor of Science in Computer Science
University of Technology | 2015-2019

TECHNICAL SKILLS
Programming Languages: JavaScript, Python, Java, TypeScript
Frameworks: React, Node.js, Express, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Jenkins, AWS
`;

async function testResumeAPI() {
  try {
    console.log('📝 Testing with sample resume content...');
    
    // Create a simple text file to test with
    const testFile = new Blob([testResumeContent], { type: 'text/plain' });
    
    const formData = new FormData();
    formData.append('resume', testFile, 'test-resume.txt');
    formData.append('userId', 'test-user-123');
    
    console.log('🚀 Calling API endpoint...');
    
    const response = await fetch('http://localhost:3003/api/resume-analysis', {
      method: 'POST',
      body: formData
    });
    
    console.log('📊 Response status:', response.status);
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Success! Analysis result:');
      console.log('ATS Score:', result.ats_score);
      console.log('Strengths:', result.strengths?.length || 0, 'items');
      console.log('Weaknesses:', result.weaknesses?.length || 0, 'items');
      console.log('Career Fits:', result.career_fits?.length || 0, 'items');
      console.log('Feedback:', result.feedback?.substring(0, 100) + '...');
    } else {
      const error = await response.text();
      console.error('❌ API Error:', response.status, error);
    }
    
  } catch (error) {
    console.error('❌ Request failed:', error.message);
  }
}

// Run the test
testResumeAPI();
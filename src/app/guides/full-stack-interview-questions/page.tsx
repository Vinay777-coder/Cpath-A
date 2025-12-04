'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Briefcase } from 'lucide-react'

export default function FullStackInterviewQuestions() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <Link href="/guides" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          background: '#f8f9fa',
          color: '#495057',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '500',
          fontSize: '14px',
          border: '1px solid #dee2e6',
          transition: 'all 0.2s ease',
          marginBottom: '2rem'
        }}>
          <ArrowLeft size={16} />
          Back to Guides
        </Link>

        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            color: '#1a202c',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            #36 - Full Stack Developer Interview Questions: Complete Guide
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#718096',
            lineHeight: '1.6'
          }}>
            Comprehensive collection of full stack developer interview questions covering frontend, backend, databases, and system design.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          {[
            { id: 'overview', label: 'Overview', icon: BookOpen },
            { id: 'questions', label: 'Interview Questions', icon: Code },
            { id: 'preparation', label: 'Preparation', icon: Briefcase }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 1.5rem',
                  background: activeTab === tab.id ? '#3b82f6' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#64748b',
                  border: 'none',
                  borderRadius: '8px 8px 0 0',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '0 8px 8px 8px',
          padding: '2rem'
        }}>
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Full Stack Interview Overview
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Interview Structure
                </h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                  <li><strong>Technical Screen (1 hour):</strong> Basic coding problems and concept questions</li>
                  <li><strong>Frontend Round (1-2 hours):</strong> JavaScript, React/Vue, CSS, and DOM manipulation</li>
                  <li><strong>Backend Round (1-2 hours):</strong> Server-side programming, APIs, and database design</li>
                  <li><strong>System Design (1 hour):</strong> Architecture, scalability, and design patterns</li>
                  <li><strong>Behavioral (30-45 min):</strong> Communication, teamwork, and problem-solving approach</li>
                </ul>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { title: 'Frontend Skills', skills: ['JavaScript/TypeScript', 'React/Vue/Angular', 'HTML/CSS', 'Build Tools'] },
                  { title: 'Backend Skills', skills: ['Node.js/Python/Java', 'REST APIs', 'Authentication', 'Server Architecture'] },
                  { title: 'Database Skills', skills: ['SQL Queries', 'Database Design', 'NoSQL Concepts', 'Performance Optimization'] },
                  { title: 'DevOps Skills', skills: ['Git Version Control', 'CI/CD Pipelines', 'Cloud Deployment', 'Testing Strategies'] }
                ].map((area, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>
                      {area.title}
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem' }}>
                      {area.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} style={{ marginBottom: '0.25rem' }}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  What Interviewers Look For
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>End-to-End Thinking:</strong> Understanding how frontend and backend components interact</li>
                    <li><strong>Problem-Solving Approach:</strong> Breaking down complex problems systematically</li>
                    <li><strong>Code Quality:</strong> Writing clean, maintainable, and efficient code</li>
                    <li><strong>Technology Breadth:</strong> Familiarity with multiple technologies across the stack</li>
                    <li><strong>Communication Skills:</strong> Explaining technical concepts clearly</li>
                    <li><strong>Learning Ability:</strong> Adaptability to new technologies and frameworks</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Interview Questions by Category
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Frontend Questions
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Explain event delegation and provide an example</li>
                    <li>What are React hooks and how do useState and useEffect work?</li>
                    <li>Describe the differences between var, let, and const</li>
                    <li>How would you optimize the performance of a React application?</li>
                    <li>Explain the CSS box model and flexbox vs grid</li>
                    <li>What is the virtual DOM and how does it work?</li>
                    <li>How do you handle state management in large applications?</li>
                    <li>Describe different ways to style components in React</li>
                    <li>What are closures and how are they used in JavaScript?</li>
                    <li>Explain async/await and how it differs from Promises</li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Backend Questions
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Explain RESTful API design principles and best practices</li>
                    <li>How do you implement authentication and authorization?</li>
                    <li>What are middleware functions and how do you use them?</li>
                    <li>Describe different types of database relationships</li>
                    <li>How do you handle errors in a Node.js application?</li>
                    <li>Explain the event loop in Node.js</li>
                    <li>What are the differences between SQL and NoSQL databases?</li>
                    <li>How do you prevent SQL injection attacks?</li>
                    <li>Describe caching strategies for web applications</li>
                    <li>What is CORS and how do you handle it?</li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  System Design Questions
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Design a URL shortening service like bit.ly</li>
                    <li>How would you scale a web application for millions of users?</li>
                    <li>Design a real-time chat application</li>
                    <li>Explain microservices vs monolithic architecture</li>
                    <li>How do you implement rate limiting?</li>
                    <li>Design a file upload and storage system</li>
                    <li>Explain load balancing strategies</li>
                    <li>How would you design a notification system?</li>
                    <li>Describe database sharding and when to use it</li>
                    <li>Design a basic e-commerce platform architecture</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Coding Challenges
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={ { paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Implement a debounce function in JavaScript</li>
                    <li>Create a REST API endpoint with proper error handling</li>
                    <li>Build a responsive navigation component</li>
                    <li>Implement pagination for a data table</li>
                    <li>Create a form with validation and error messages</li>
                    <li>Build a simple authentication system</li>
                    <li>Implement real-time updates using WebSockets</li>
                    <li>Create a data visualization component</li>
                    <li>Build a file upload with progress tracking</li>
                    <li>Implement search functionality with filtering</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preparation' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Interview Preparation Strategy
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  4-Week Preparation Plan
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    { 
                      week: 'Week 1', 
                      focus: 'Frontend Fundamentals', 
                      tasks: ['Review JavaScript ES6+ features', 'Practice React hooks and state management', 'Solve CSS layout challenges', 'Build responsive components'] 
                    },
                    { 
                      week: 'Week 2', 
                      focus: 'Backend Development', 
                      tasks: ['Review API design principles', 'Practice database queries', 'Implement authentication systems', 'Study Node.js event loop'] 
                    },
                    { 
                      week: 'Week 3', 
                      focus: 'System Design & Architecture', 
                      tasks: ['Study scalability patterns', 'Practice system design interviews', 'Learn about caching strategies', 'Review deployment processes'] 
                    },
                    { 
                      week: 'Week 4', 
                      focus: 'Mock Interviews & Projects', 
                      tasks: ['Complete end-to-end projects', 'Practice coding challenges', 'Mock technical interviews', 'Prepare behavioral responses'] 
                    }
                  ].map((week, index) => (
                    <div key={index} style={{
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0'
                    }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>
                        {week.week}: {week.focus}
                      </h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem' }}>
                        {week.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} style={{ marginBottom: '0.25rem' }}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Essential Resources
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Coding Practice</h4>
                      <ul style={{ fontSize: '13px', color: '#64748b', paddingLeft: '1rem' }}>
                        <li>LeetCode (algorithms)</li>
                        <li>HackerRank (full stack challenges)</li>
                        <li>Codewars (JavaScript practice)</li>
                        <li>Frontend Mentor (UI challenges)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>System Design</h4>
                      <ul style={{ fontSize: '13px', color: '#64748b', paddingLeft: '1rem' }}>
                        <li>System Design Primer (GitHub)</li>
                        <li>High Scalability blog</li>
                        <li>Designing Data-Intensive Applications</li>
                        <li>AWS Architecture Center</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Mock Interviews</h4>
                      <ul style={{ fontSize: '13px', color: '#64748b', paddingLeft: '1rem' }}>
                        <li>Pramp (peer interviews)</li>
                        <li>InterviewBit</li>
                        <li>interviewing.io</li>
                        <li>Coding interview practice with friends</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Day-of-Interview Tips
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Technical Setup:</strong> Test your screen sharing, IDE, and internet connection beforehand</li>
                    <li><strong>Communication:</strong> Think out loud, explain your approach before coding</li>
                    <li><strong>Problem Solving:</strong> Ask clarifying questions, start with simple solutions</li>
                    <li><strong>Code Quality:</strong> Write clean code, use meaningful variable names</li>
                    <li><strong>Testing:</strong> Walk through test cases and edge cases</li>
                    <li><strong>Time Management:</strong> Don't get stuck on one problem for too long</li>
                    <li><strong>Stay Calm:</strong> It's okay to not know everything, show your learning process</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
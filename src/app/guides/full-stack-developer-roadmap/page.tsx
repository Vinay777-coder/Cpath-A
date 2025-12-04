'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, BarChart, TrendingUp } from 'lucide-react'

export default function FullStackDeveloperRoadmap() {
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
            #33 - How to Become a Full Stack Developer: Complete Roadmap
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#718096',
            lineHeight: '1.6'
          }}>
            Step-by-step roadmap to becoming a full stack developer, covering frontend, backend, databases, and essential skills.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          {[
            { id: 'overview', label: 'Learning Path', icon: BookOpen },
            { id: 'skills', label: 'Technical Skills', icon: BarChart },
            { id: 'career', label: 'Career Guide', icon: TrendingUp }
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
                  background: activeTab === tab.id ? '#10b981' : 'transparent',
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
                Complete Learning Roadmap
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Phase 1: Foundations (2-3 months)
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>HTML & CSS</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Semantic HTML structure</li>
                        <li>CSS fundamentals & layouts</li>
                        <li>Flexbox & Grid systems</li>
                        <li>Responsive design principles</li>
                        <li>CSS preprocessors (Sass/Less)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>JavaScript</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>ES6+ syntax and features</li>
                        <li>DOM manipulation</li>
                        <li>Event handling</li>
                        <li>Async/await & Promises</li>
                        <li>Fetch API & AJAX</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Phase 2: Frontend Specialization (3-4 months)
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>React/Vue/Angular</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Component-based architecture</li>
                        <li>State management</li>
                        <li>Routing and navigation</li>
                        <li>API integration</li>
                        <li>Testing frameworks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>Build Tools</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Webpack/Vite configuration</li>
                        <li>Package managers (npm/yarn)</li>
                        <li>Babel transpilation</li>
                        <li>Code splitting & bundling</li>
                        <li>Development workflows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Phase 3: Backend Development (3-4 months)
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>Server Technologies</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Node.js & Express.js</li>
                        <li>Python (Django/Flask)</li>
                        <li>Java (Spring Boot)</li>
                        <li>RESTful API design</li>
                        <li>Authentication & authorization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>Databases</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>SQL fundamentals (MySQL/PostgreSQL)</li>
                        <li>NoSQL databases (MongoDB)</li>
                        <li>Database design & modeling</li>
                        <li>ORM/ODM usage</li>
                        <li>Query optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Phase 4: DevOps & Deployment (2-3 months)
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>Cloud & Hosting</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>AWS/Azure/GCP basics</li>
                        <li>Server management</li>
                        <li>Domain & DNS setup</li>
                        <li>SSL certificates</li>
                        <li>CDN configuration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>DevOps Tools</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Git version control</li>
                        <li>Docker containerization</li>
                        <li>CI/CD pipelines</li>
                        <li>Monitoring & logging</li>
                        <li>Testing automation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Essential Technical Skills
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Frontend Development Stack
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Core Technologies</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>HTML5 (semantic elements, accessibility)</li>
                        <li>CSS3 (animations, transforms, grid)</li>
                        <li>JavaScript ES6+ (modules, classes, arrow functions)</li>
                        <li>TypeScript (optional but recommended)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Frameworks & Libraries</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>React.js (hooks, context, routing)</li>
                        <li>Vue.js or Angular (alternative choices)</li>
                        <li>State management (Redux, Zustand, Pinia)</li>
                        <li>UI libraries (Material-UI, Ant Design)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Backend Development Stack
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Server-Side Languages</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Node.js with Express.js framework</li>
                        <li>Python with Django or Flask</li>
                        <li>Java with Spring Boot</li>
                        <li>C# with .NET Core (alternative)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Database Technologies</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>SQL databases (PostgreSQL, MySQL)</li>
                        <li>NoSQL databases (MongoDB, Redis)</li>
                        <li>Database design and normalization</li>
                        <li>ORM/ODM tools (Sequelize, Mongoose)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Development Tools & Practices
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Version Control & Collaboration</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Git fundamentals and workflows</li>
                        <li>GitHub/GitLab for code hosting</li>
                        <li>Pull requests and code reviews</li>
                        <li>Branching strategies (Git Flow)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Testing & Quality Assurance</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Unit testing (Jest, Mocha, PyTest)</li>
                        <li>Integration testing</li>
                        <li>End-to-end testing (Cypress, Selenium)</li>
                        <li>Code quality tools (ESLint, Prettier)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Deployment & Infrastructure
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Cloud Platforms</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>AWS (EC2, S3, RDS, Lambda)</li>
                        <li>Heroku for simple deployments</li>
                        <li>Vercel/Netlify for frontend hosting</li>
                        <li>DigitalOcean for VPS hosting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>DevOps Essentials</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Docker for containerization</li>
                        <li>CI/CD pipelines (GitHub Actions)</li>
                        <li>Basic server administration</li>
                        <li>Monitoring and logging tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'career' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Career Development Guide
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Portfolio Development
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>
                      Essential Projects to Build
                    </h4>
                    <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                      <li><strong>Personal Portfolio Website:</strong> Showcase your skills and projects</li>
                      <li><strong>E-commerce Application:</strong> Product catalog, cart, checkout, payment integration</li>
                      <li><strong>Social Media Clone:</strong> User authentication, posts, comments, real-time features</li>
                      <li><strong>Task Management App:</strong> CRUD operations, user management, data persistence</li>
                      <li><strong>API-based Project:</strong> Consume external APIs and display data creatively</li>
                      <li><strong>Real-time Chat Application:</strong> WebSocket implementation, user presence</li>
                    </ol>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>
                      Portfolio Best Practices
                    </h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                      <li>Host projects on live domains with proper deployment</li>
                      <li>Include detailed README files with setup instructions</li>
                      <li>Write clean, commented code following best practices</li>
                      <li>Implement responsive design for all screen sizes</li>
                      <li>Add testing coverage and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Job Search Strategy
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>
                      Entry-Level Positions
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Junior Full Stack Developer</li>
                      <li>Web Developer</li>
                      <li>Software Developer</li>
                      <li>Frontend/Backend Developer</li>
                      <li>Junior Software Engineer</li>
                    </ul>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '0.5rem' }}>
                      <strong>Salary Range:</strong> $50K - $75K annually
                    </p>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#10b981' }}>
                      Growth Opportunities
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Senior Full Stack Developer</li>
                      <li>Technical Lead</li>
                      <li>Solution Architect</li>
                      <li>Engineering Manager</li>
                      <li>CTO (startup environments)</li>
                    </ul>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '0.5rem' }}>
                      <strong>Senior Range:</strong> $90K - $150K+ annually
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Interview Preparation
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Technical Interview Topics</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>JavaScript fundamentals and ES6+</li>
                        <li>React/Vue component lifecycle</li>
                        <li>API design and RESTful principles</li>
                        <li>Database design and SQL queries</li>
                        <li>System design basics</li>
                        <li>Code challenges and algorithms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Behavioral Questions</h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                        <li>Describe a challenging project you built</li>
                        <li>How do you stay updated with technology?</li>
                        <li>Experience with debugging complex issues</li>
                        <li>Collaboration in development teams</li>
                        <li>Handling conflicting requirements</li>
                        <li>Learning new technologies quickly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Continuous Learning & Growth
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Stay Current:</strong> Follow tech blogs, attend conferences, join developer communities</li>
                    <li><strong>Specialize Gradually:</strong> Deep dive into specific areas (DevOps, mobile, AI integration)</li>
                    <li><strong>Open Source:</strong> Contribute to projects, maintain your own libraries</li>
                    <li><strong>Mentorship:</strong> Find mentors and eventually mentor others</li>
                    <li><strong>Side Projects:</strong> Experiment with new technologies and build innovative solutions</li>
                    <li><strong>Certifications:</strong> AWS, Google Cloud, or specialized framework certifications</li>
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
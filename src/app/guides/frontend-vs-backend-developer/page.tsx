'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Monitor, Server, Code2, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function FrontendVsBackendDeveloperGuide() {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/guides" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', marginBottom: '1rem', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Back to Guides
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Frontend vs Backend Developer
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Comprehensive comparison of frontend and backend development roles to help you choose the right career path.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'comparison', label: 'Role Comparison', icon: Code2 },
            { id: 'skills', label: 'Skills & Technologies', icon: Monitor },
            { id: 'career', label: 'Career Paths', icon: TrendingUp }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                border: 'none',
                backgroundColor: 'transparent',
                color: activeTab === id ? '#3b82f6' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #3b82f6' : '2px solid transparent',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
            >
              <Icon size={16} style={{ marginRight: '0.5rem' }} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'comparison' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
              {/* Frontend Developer */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#3b82f6', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Monitor size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Frontend Developer</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Primary Focus</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    User interface, user experience, and client-side functionality. Creates what users see and interact with.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Responsibilities</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>UI/UX implementation</li>
                    <li>Responsive web design</li>
                    <li>Cross-browser compatibility</li>
                    <li>Performance optimization</li>
                    <li>User interaction handling</li>
                    <li>API integration (consuming)</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Daily Tasks</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Writing HTML, CSS, and JavaScript</li>
                    <li>Working with design mockups</li>
                    <li>Testing across different devices</li>
                    <li>Collaborating with designers</li>
                    <li>Debugging browser issues</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Average Salary Range</h4>
                  <p style={{ color: '#10b981', fontSize: '1.125rem', fontWeight: '600' }}>
                    $70,000 - $130,000+
                  </p>
                </div>
              </div>

              {/* Backend Developer */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#8b5cf6', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Server size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Backend Developer</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Primary Focus</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    Server-side logic, databases, and system architecture. Creates the behind-the-scenes functionality.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Responsibilities</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Server-side application logic</li>
                    <li>Database design and management</li>
                    <li>API development and maintenance</li>
                    <li>Security implementation</li>
                    <li>Performance optimization</li>
                    <li>Infrastructure management</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Daily Tasks</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Writing server-side code</li>
                    <li>Database query optimization</li>
                    <li>API design and documentation</li>
                    <li>Server configuration and deployment</li>
                    <li>Security vulnerability assessment</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Average Salary Range</h4>
                  <p style={{ color: '#10b981', fontSize: '1.125rem', fontWeight: '600' }}>
                    $80,000 - $150,000+
                  </p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Key Differences Summary
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Work Environment</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Frontend:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Visual, immediate feedback, close collaboration with designers, user-focused testing
                    </p>
                  </div>
                  <div>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Backend:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Logic-focused, system architecture, data modeling, infrastructure considerations
                    </p>
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Problem Types</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Frontend:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Browser compatibility, responsive design, user interaction, performance optimization
                    </p>
                  </div>
                  <div>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Backend:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Scalability, security, data consistency, system integration, performance at scale
                    </p>
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Learning Curve</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Frontend:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Visual results, faster initial learning, but evolving technologies and browser differences
                    </p>
                  </div>
                  <div>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Backend:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Abstract concepts, steeper learning curve, but more stable technology foundations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Skills & Technologies Comparison
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
                {/* Frontend Skills */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Frontend Developer Skills
                  </h4>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Core Technologies</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design', 'Web APIs'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Frameworks & Libraries</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['React', 'Vue.js', 'Angular', 'Svelte', 'jQuery', 'Bootstrap', 'Tailwind CSS'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#1d4ed8', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Tools & Workflow</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Webpack', 'Vite', 'npm/yarn', 'Git', 'Browser DevTools', 'Figma', 'Sass/Less'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Testing & Performance</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Jest', 'Cypress', 'Testing Library', 'Lighthouse', 'Web Vitals', 'Cross-browser Testing'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#1e40af', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Backend Skills */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Backend Developer Skills
                  </h4>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Programming Languages</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Python', 'Java', 'JavaScript/Node.js', 'C#', 'Go', 'PHP', 'Ruby'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Frameworks & Platforms</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Express.js', 'Django', 'Flask', 'Spring Boot', 'ASP.NET', 'Laravel', 'Ruby on Rails'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#7c3aed', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Databases & Storage</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite', 'Oracle'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#6d28d9', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>DevOps & Infrastructure</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Docker', 'AWS/Azure/GCP', 'Linux', 'Nginx', 'CI/CD', 'Microservices', 'API Design'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#581c87', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem', fontSize: '1.125rem' }}>
                  Shared Skills (Full-Stack Overlap)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {[
                    { category: 'Version Control', skills: ['Git', 'GitHub/GitLab', 'Branching strategies', 'Code review'] },
                    { category: 'Testing', skills: ['Unit testing', 'Integration testing', 'Test-driven development', 'Debugging'] },
                    { category: 'Web Fundamentals', skills: ['HTTP/HTTPS', 'REST APIs', 'JSON', 'Web security basics'] },
                    { category: 'Soft Skills', skills: ['Problem solving', 'Communication', 'Team collaboration', 'Continuous learning'] }
                  ].map(({ category, skills }) => (
                    <div key={category} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                      <h5 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>{category}</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem', margin: 0 }}>
                        {skills.map(skill => <li key={skill}>{skill}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'career' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Career Progression Paths
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Frontend Developer Path</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { role: 'Junior Frontend Developer', salary: '$50K - $70K', experience: '0-2 years' },
                      { role: 'Frontend Developer', salary: '$70K - $95K', experience: '2-4 years' },
                      { role: 'Senior Frontend Developer', salary: '$95K - $130K', experience: '4-7 years' },
                      { role: 'Lead Frontend Developer', salary: '$120K - $160K', experience: '6-10 years' },
                      { role: 'Principal Frontend Engineer', salary: '$150K - $200K+', experience: '8+ years' },
                      { role: 'Engineering Manager / CTO', salary: '$180K - $300K+', experience: '10+ years' }
                    ].map(({ role, salary, experience }, index) => (
                      <div key={role} style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px' }}>
                        <div style={{ backgroundColor: '#3b82f6', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          {index + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ color: '#f1f5f9', fontSize: '0.875rem', fontWeight: '600' }}>{role}</div>
                          <div style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{experience}</div>
                        </div>
                        <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{salary}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Backend Developer Path</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { role: 'Junior Backend Developer', salary: '$55K - $75K', experience: '0-2 years' },
                      { role: 'Backend Developer', salary: '$75K - $105K', experience: '2-4 years' },
                      { role: 'Senior Backend Developer', salary: '$105K - $140K', experience: '4-7 years' },
                      { role: 'Lead Backend Developer', salary: '$130K - $170K', experience: '6-10 years' },
                      { role: 'Principal Backend Engineer', salary: '$160K - $220K+', experience: '8+ years' },
                      { role: 'Engineering Manager / CTO', salary: '$190K - $320K+', experience: '10+ years' }
                    ].map(({ role, salary, experience }, index) => (
                      <div key={role} style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px' }}>
                        <div style={{ backgroundColor: '#8b5cf6', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          {index + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ color: '#f1f5f9', fontSize: '0.875rem', fontWeight: '600' }}>{role}</div>
                          <div style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{experience}</div>
                        </div>
                        <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{salary}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Transition Strategies & Career Pivots
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Frontend → Backend Transition</h4>
                    <div style={{ marginBottom: '1rem' }}>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Leverage Your Strengths:</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>JavaScript knowledge (Node.js)</li>
                        <li>API consumption experience</li>
                        <li>Understanding of web protocols</li>
                        <li>Problem-solving skills</li>
                      </ul>
                    </div>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Skills to Develop:</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Database design and management</li>
                        <li>Server-side frameworks</li>
                        <li>System architecture concepts</li>
                        <li>Security best practices</li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Backend → Frontend Transition</h4>
                    <div style={{ marginBottom: '1rem' }}>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Leverage Your Strengths:</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Strong programming fundamentals</li>
                        <li>API design knowledge</li>
                        <li>Data structure understanding</li>
                        <li>Testing and debugging skills</li>
                      </ul>
                    </div>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Skills to Develop:</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>UI/UX design principles</li>
                        <li>CSS and responsive design</li>
                        <li>Frontend frameworks</li>
                        <li>Browser compatibility</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Alternative Career Paths</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      { path: 'Full-Stack Developer', description: 'Combine both frontend and backend skills', growth: 'High demand, versatile role' },
                      { path: 'DevOps Engineer', description: 'Focus on deployment and infrastructure', growth: 'Growing field, high salaries' },
                      { path: 'Technical Lead', description: 'Move into technical leadership', growth: 'Leadership track, team management' },
                      { path: 'Product Manager', description: 'Transition to product strategy', growth: 'Business-focused, strategic role' },
                      { path: 'Solution Architect', description: 'Design large-scale systems', growth: 'Senior technical role, high impact' },
                      { path: 'Freelancer/Consultant', description: 'Independent contracting work', growth: 'Flexible schedule, varied projects' }
                    ].map(({ path, description, growth }) => (
                      <div key={path} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>{path}</h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{description}</p>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0, fontStyle: 'italic' }}>{growth}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: '#f59e0b20', padding: '1.5rem', borderRadius: '8px', border: '1px solid #f59e0b' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Making the Right Choice for You
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Choose Frontend if you:</h5>
                      <ul style={{ color: '#fbbf24', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Enjoy visual and creative work</li>
                        <li>Like immediate visual feedback</li>
                        <li>Want to focus on user experience</li>
                        <li>Prefer working with designers</li>
                        <li>Enjoy rapid technology evolution</li>
                      </ul>
                    </div>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Choose Backend if you:</h5>
                      <ul style={{ color: '#fbbf24', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Prefer logical and systematic work</li>
                        <li>Enjoy solving complex problems</li>
                        <li>Like working with data and algorithms</li>
                        <li>Want to build scalable systems</li>
                        <li>Prefer stable technology foundations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Users, TrendingUp } from 'lucide-react'

export default function AIDataScientistVsSoftwareEngineering() {
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
            #25 - AI Data Scientist vs Software Engineering: Path Analysis
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#718096',
            lineHeight: '1.6'
          }}>
            Comprehensive comparison of AI Data Scientist and Software Engineering careers, helping you choose the right technology path.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          {[
            { id: 'overview', label: 'Career Overview', icon: BookOpen },
            { id: 'comparison', label: 'Skills & Growth', icon: Users },
            { id: 'decision', label: 'Path Selection', icon: TrendingUp }
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
                Career Paths Overview
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '12px'
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '1rem' }}>
                    AI Data Scientist
                  </h3>
                  <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                    Applies advanced analytics, machine learning, and AI to solve complex business problems and generate insights from data.
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                    <li>Experimental research approach</li>
                    <li>Statistical modeling and hypothesis testing</li>
                    <li>Business problem solving through data</li>
                    <li>Cross-functional collaboration</li>
                    <li>Continuous learning of new techniques</li>
                  </ul>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '12px'
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '1rem' }}>
                    Software Engineer
                  </h3>
                  <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                    Designs, develops, and maintains software applications, systems, and platforms that power modern technology.
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                    <li>System design and architecture</li>
                    <li>Code development and optimization</li>
                    <li>Product feature implementation</li>
                    <li>Technical problem solving</li>
                    <li>Scalable solution building</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Industry Impact & Demand
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>AI Data Science:</strong> Emerging field with 22% growth, high innovation potential</li>
                    <li><strong>Software Engineering:</strong> Established field with 13% growth, consistent demand</li>
                    <li><strong>Market Size:</strong> Software engineering has broader job market, AI DS more specialized</li>
                    <li><strong>Innovation Level:</strong> AI DS leads in cutting-edge research, SWE in scalable solutions</li>
                    <li><strong>Business Impact:</strong> Both critical for digital transformation initiatives</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'comparison' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Skills & Career Growth Comparison
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Technical Skills Required
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      AI Data Scientist
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Python, R, SQL (Advanced)</li>
                      <li>Machine Learning Frameworks</li>
                      <li>Statistics & Mathematics</li>
                      <li>Data Visualization Tools</li>
                      <li>Experimental Design</li>
                      <li>Research Methodology</li>
                      <li>Business Analytics</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#4facfe' }}>
                      Software Engineer
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Programming Languages (Java, Python, JS)</li>
                      <li>System Design & Architecture</li>
                      <li>Algorithms & Data Structures</li>
                      <li>Database Management</li>
                      <li>DevOps & CI/CD</li>
                      <li>Testing & Quality Assurance</li>
                      <li>Cloud Platform Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Salary Progression (USD Annual)
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <th style={{ textAlign: 'left', padding: '0.5rem', color: '#1e293b' }}>Experience</th>
                        <th style={{ textAlign: 'center', padding: '0.5rem', color: '#667eea' }}>AI Data Scientist</th>
                        <th style={{ textAlign: 'center', padding: '0.5rem', color: '#4facfe' }}>Software Engineer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Entry (0-2 years)</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$75K - $100K</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$70K - $95K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Mid (3-5 years)</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$110K - $150K</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$100K - $140K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Senior (5-8 years)</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$160K - $220K</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$150K - $200K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Principal (8+ years)</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$230K - $350K+</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$210K - $400K+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Work Environment & Culture
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      Data Science Environment
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Research-oriented culture</li>
                      <li>Experimental and iterative work</li>
                      <li>Cross-functional collaboration</li>
                      <li>Ambiguous problem solving</li>
                      <li>Conference presentations & papers</li>
                      <li>Continuous learning required</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#4facfe' }}>
                      Engineering Environment
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Product-focused development</li>
                      <li>Structured development cycles</li>
                      <li>Team-based coding practices</li>
                      <li>Clear requirements and specs</li>
                      <li>Code reviews and testing</li>
                      <li>Technology stack expertise</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'decision' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Career Path Selection Guide
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Choose AI Data Science If You:
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Love Data & Analytics:</strong> Passionate about finding patterns and insights in data</li>
                    <li><strong>Enjoy Research:</strong> Comfortable with experimental approaches and hypothesis testing</li>
                    <li><strong>Strong in Math:</strong> Have solid statistics, probability, and mathematical foundations</li>
                    <li><strong>Business-Oriented:</strong> Want to solve real business problems and drive decisions</li>
                    <li><strong>Interdisciplinary:</strong> Enjoy working across domains (business, tech, science)</li>
                    <li><strong>Innovation-Focused:</strong> Excited about cutting-edge AI and ML developments</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Choose Software Engineering If You:
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Love Building Things:</strong> Get satisfaction from creating functional software products</li>
                    <li><strong>Logical Problem Solver:</strong> Excel at breaking down complex problems into manageable parts</li>
                    <li><strong>Detail-Oriented:</strong> Enjoy writing clean, efficient, and maintainable code</li>
                    <li><strong>System Thinker:</strong> Understand how different components work together</li>
                    <li><strong>Collaborative:</strong> Work well in development teams with shared codebases</li>
                    <li><strong>Product-Focused:</strong> Want to build user-facing applications and systems</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Career Transition Paths
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                        SWE → Data Science
                      </h4>
                      <ul style={{ fontSize: '13px', color: '#64748b', paddingLeft: '1rem' }}>
                        <li>Learn statistics & ML</li>
                        <li>Take data science courses</li>
                        <li>Build analytics projects</li>
                        <li>Target ML engineering roles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.5rem', color: '#4facfe' }}>
                        Data Science → SWE
                      </h4>
                      <ul style={{ fontSize: '13px', color: '#64748b', paddingLeft: '1rem' }}>
                        <li>Strengthen coding skills</li>
                        <li>Learn system design</li>
                        <li>Build software projects</li>
                        <li>Target backend/ML infra roles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Getting Started Roadmaps
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      AI Data Science Path (6-12 months)
                    </h4>
                    <ol style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Master Python & SQL</li>
                      <li>Learn statistics & probability</li>
                      <li>Study ML algorithms</li>
                      <li>Complete online courses (Coursera, edX)</li>
                      <li>Build portfolio projects</li>
                      <li>Participate in Kaggle competitions</li>
                      <li>Network with data professionals</li>
                    </ol>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#4facfe' }}>
                      Software Engineering Path (6-12 months)
                    </h4>
                    <ol style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Choose programming language</li>
                      <li>Learn algorithms & data structures</li>
                      <li>Study system design basics</li>
                      <li>Complete coding bootcamp/courses</li>
                      <li>Build full-stack projects</li>
                      <li>Practice coding interviews</li>
                      <li>Contribute to open source</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
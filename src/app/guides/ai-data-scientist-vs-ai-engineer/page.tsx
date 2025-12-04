'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Brain, Target } from 'lucide-react'

export default function AIDataScientistVsAI() {
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
            #26 - AI Data Scientist vs AI Engineer: Role Distinction
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#718096',
            lineHeight: '1.6'
          }}>
            Clear distinction between AI Data Scientist and AI Engineer roles, covering responsibilities, skills, and career trajectories.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          {[
            { id: 'overview', label: 'Role Overview', icon: BookOpen },
            { id: 'comparison', label: 'Skills & Focus', icon: Brain },
            { id: 'decision', label: 'Career Choice', icon: Target }
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
                  background: activeTab === tab.id ? '#8b5cf6' : 'transparent',
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
                AI Roles Distinction
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
                    Research-focused role that develops AI models, conducts experiments, and extracts insights from data to solve business problems.
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                    <li>Model research and development</li>
                    <li>Statistical analysis and experimentation</li>
                    <li>Business problem formulation</li>
                    <li>Hypothesis testing and validation</li>
                    <li>Insight generation and reporting</li>
                  </ul>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                  color: '#8b4513',
                  padding: '2rem',
                  borderRadius: '12px'
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '1rem' }}>
                    AI Engineer
                  </h3>
                  <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                    Engineering-focused role that deploys, scales, and maintains AI systems in production environments with emphasis on performance.
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                    <li>Production system deployment</li>
                    <li>AI infrastructure management</li>
                    <li>Performance optimization</li>
                    <li>System integration and APIs</li>
                    <li>Monitoring and maintenance</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Key Distinctions
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Focus</h4>
                      <p style={{ fontSize: '14px', color: '#64748b' }}>
                        <strong>Data Scientist:</strong> Research & Discovery<br/>
                        <strong>AI Engineer:</strong> Implementation & Scale
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Output</h4>
                      <p style={{ fontSize: '14px', color: '#64748b' }}>
                        <strong>Data Scientist:</strong> Models & Insights<br/>
                        <strong>AI Engineer:</strong> Systems & APIs
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Timeline</h4>
                      <p style={{ fontSize: '14px', color: '#64748b' }}>
                        <strong>Data Scientist:</strong> Experimental cycles<br/>
                        <strong>AI Engineer:</strong> Development sprints
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'comparison' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Skills & Focus Areas Comparison
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Technical Skills Breakdown
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      AI Data Scientist Skills
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li><strong>Statistics & Math:</strong> Advanced statistical modeling</li>
                      <li><strong>Research:</strong> Experimental design, hypothesis testing</li>
                      <li><strong>ML Libraries:</strong> Scikit-learn, TensorFlow, PyTorch</li>
                      <li><strong>Data Analysis:</strong> Pandas, NumPy, R</li>
                      <li><strong>Visualization:</strong> Matplotlib, Seaborn, Tableau</li>
                      <li><strong>Business Acumen:</strong> Problem framing, KPIs</li>
                      <li><strong>Communication:</strong> Stakeholder presentations</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#fcb69f' }}>
                      AI Engineer Skills
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li><strong>Software Engineering:</strong> Clean code, architecture</li>
                      <li><strong>MLOps:</strong> Model deployment, CI/CD pipelines</li>
                      <li><strong>Cloud Platforms:</strong> AWS, Azure, GCP services</li>
                      <li><strong>Containerization:</strong> Docker, Kubernetes</li>
                      <li><strong>APIs & Services:</strong> REST, microservices</li>
                      <li><strong>Performance:</strong> Optimization, monitoring</li>
                      <li><strong>Infrastructure:</strong> Scalable system design</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Daily Responsibilities
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <th style={{ textAlign: 'left', padding: '0.5rem', color: '#1e293b' }}>Activity</th>
                        <th style={{ textAlign: 'center', padding: '0.5rem', color: '#667eea' }}>Data Scientist</th>
                        <th style={{ textAlign: 'center', padding: '0.5rem', color: '#fcb69f' }}>AI Engineer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Model Development</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Primary Focus</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Supporting Role</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Production Deployment</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Limited</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Primary Focus</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Data Analysis</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Deep Analysis</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Pipeline Focus</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>System Architecture</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Basic</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Advanced</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Stakeholder Communication</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>High</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>Moderate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Career Progression & Salary
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      Data Scientist Path
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Jr. Data Scientist ($70K-$90K)</li>
                      <li>Data Scientist ($100K-$130K)</li>
                      <li>Sr. Data Scientist ($140K-$180K)</li>
                      <li>Principal Data Scientist ($190K-$250K)</li>
                      <li>Head of Data Science ($250K+)</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#fcb69f' }}>
                      AI Engineer Path
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Jr. AI Engineer ($75K-$95K)</li>
                      <li>AI Engineer ($105K-$140K)</li>
                      <li>Sr. AI Engineer ($150K-$190K)</li>
                      <li>Principal AI Engineer ($200K-$280K)</li>
                      <li>AI Engineering Manager ($280K+)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'decision' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Career Choice Framework
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Choose AI Data Scientist If You:
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Love Research:</strong> Enjoy experimental work and discovering new insights</li>
                    <li><strong>Statistical Mindset:</strong> Comfortable with mathematics, statistics, and hypothesis testing</li>
                    <li><strong>Business Focus:</strong> Want to solve business problems and communicate with stakeholders</li>
                    <li><strong>Flexible Approach:</strong> Comfortable with ambiguous problems and iterative solutions</li>
                    <li><strong>Learning Oriented:</strong> Excited about staying current with ML research and methods</li>
                    <li><strong>Impact Driven:</strong> Want to see direct business impact from your analysis</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Choose AI Engineer If You:
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Engineering Focus:</strong> Prefer building robust, scalable systems over research</li>
                    <li><strong>Production Mindset:</strong> Want to deploy models that serve millions of users</li>
                    <li><strong>Technical Depth:</strong> Enjoy system architecture, optimization, and infrastructure</li>
                    <li><strong>Problem Solving:</strong> Like solving technical challenges with clear requirements</li>
                    <li><strong>Team Collaboration:</strong> Work well with software engineering and DevOps teams</li>
                    <li><strong>Reliability Focus:</strong> Care about system uptime, performance, and monitoring</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Collaboration & Team Dynamics
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <p style={{ marginBottom: '1rem', color: '#475569' }}>
                    In many organizations, AI Data Scientists and AI Engineers work closely together:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Research Phase:</strong> Data Scientists lead model development and experimentation</li>
                    <li><strong>Validation Phase:</strong> Both roles collaborate on model validation and testing</li>
                    <li><strong>Production Phase:</strong> AI Engineers lead deployment with DS consultation</li>
                    <li><strong>Monitoring Phase:</strong> AI Engineers maintain systems while DS monitors model performance</li>
                    <li><strong>Iteration Phase:</strong> Data Scientists improve models based on production feedback</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Learning Paths & Resources
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      Data Scientist Learning Path
                    </h4>
                    <ol style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Master statistics and probability</li>
                      <li>Learn Python/R and data libraries</li>
                      <li>Study machine learning algorithms</li>
                      <li>Complete data science MOOCs</li>
                      <li>Work on business case studies</li>
                      <li>Build a portfolio of projects</li>
                      <li>Practice communication skills</li>
                    </ol>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#fcb69f' }}>
                      AI Engineer Learning Path
                    </h4>
                    <ol style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Strong software engineering foundation</li>
                      <li>Learn cloud platforms (AWS/Azure/GCP)</li>
                      <li>Master containerization (Docker/K8s)</li>
                      <li>Study MLOps practices and tools</li>
                      <li>Build end-to-end ML systems</li>
                      <li>Learn monitoring and observability</li>
                      <li>Practice system design interviews</li>
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
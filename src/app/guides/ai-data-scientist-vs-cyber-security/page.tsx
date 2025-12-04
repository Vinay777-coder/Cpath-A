'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Users, TrendingUp } from 'lucide-react'

export default function AIDataScientistVsCyberSecurity() {
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
            #24 - AI Data Scientist vs Cyber Security: Career Comparison
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#718096',
            lineHeight: '1.6'
          }}>
            Comprehensive comparison between AI Data Scientist and Cyber Security career paths, including skills, opportunities, and growth potential.
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
            { id: 'comparison', label: 'Detailed Comparison', icon: Users },
            { id: 'decision', label: 'Decision Framework', icon: TrendingUp }
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
                  background: activeTab === tab.id ? '#7c3aed' : 'transparent',
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
                    Develops AI models and algorithms to extract insights from data, build predictive systems, and create intelligent solutions.
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                    <li>Machine learning model development</li>
                    <li>Statistical analysis and research</li>
                    <li>Data pipeline optimization</li>
                    <li>Algorithm design and implementation</li>
                    <li>Business insight generation</li>
                  </ul>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '12px'
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '1rem' }}>
                    Cyber Security Professional
                  </h3>
                  <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                    Protects systems, networks, and data from cyber threats through security protocols, monitoring, and incident response.
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6', opacity: 0.9 }}>
                    <li>Security system implementation</li>
                    <li>Threat detection and analysis</li>
                    <li>Incident response and forensics</li>
                    <li>Vulnerability assessment</li>
                    <li>Compliance and risk management</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Market Demand & Growth
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>AI Data Science:</strong> 22% growth rate (2020-2030), driven by digital transformation</li>
                    <li><strong>Cyber Security:</strong> 31% growth rate (2019-2029), highest among all occupations</li>
                    <li><strong>Industry Demand:</strong> Both fields show critical skill shortages globally</li>
                    <li><strong>Remote Work:</strong> High flexibility in both careers, especially post-pandemic</li>
                    <li><strong>Job Security:</strong> Excellent in both fields due to essential nature of roles</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'comparison' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Detailed Career Comparison
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Required Skills & Technologies
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      AI Data Scientist Skills
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Programming: Python, R, SQL</li>
                      <li>ML Frameworks: TensorFlow, PyTorch, Scikit-learn</li>
                      <li>Statistics & Mathematics</li>
                      <li>Data Visualization: Tableau, PowerBI</li>
                      <li>Cloud Platforms: AWS, Azure, GCP</li>
                      <li>Big Data: Spark, Hadoop</li>
                      <li>Research & Experimentation</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#f5576c' }}>
                      Cyber Security Skills
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Network Security & Protocols</li>
                      <li>Security Tools: Wireshark, Metasploit</li>
                      <li>Programming: Python, PowerShell, Bash</li>
                      <li>Risk Assessment & Management</li>
                      <li>Compliance: GDPR, HIPAA, SOX</li>
                      <li>Incident Response & Forensics</li>
                      <li>Ethical Hacking & Penetration Testing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Salary Expectations (USD)
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <th style={{ textAlign: 'left', padding: '0.5rem', color: '#1e293b' }}>Experience Level</th>
                        <th style={{ textAlign: 'center', padding: '0.5rem', color: '#667eea' }}>AI Data Scientist</th>
                        <th style={{ textAlign: 'center', padding: '0.5rem', color: '#f5576c' }}>Cyber Security</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Entry Level (0-2 years)</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$70K - $95K</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$65K - $85K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Mid Level (3-5 years)</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$100K - $140K</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$90K - $120K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem', color: '#475569' }}>Senior Level (5+ years)</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$150K - $220K+</td>
                        <td style={{ textAlign: 'center', padding: '0.5rem', color: '#475569' }}>$130K - $180K+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Career Progression Paths
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      AI Data Science Path
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Junior Data Scientist</li>
                      <li>Senior Data Scientist</li>
                      <li>Lead Data Scientist</li>
                      <li>Principal Data Scientist</li>
                      <li>Head of Data Science</li>
                      <li>Chief Data Officer (CDO)</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#f5576c' }}>
                      Cyber Security Path
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Security Analyst</li>
                      <li>Senior Security Engineer</li>
                      <li>Security Architect</li>
                      <li>Security Manager</li>
                      <li>Director of Security</li>
                      <li>Chief Information Security Officer (CISO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'decision' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Career Decision Framework
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Choose AI Data Science If You:
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Love Mathematics & Statistics:</strong> Enjoy working with complex algorithms and statistical models</li>
                    <li><strong>Are Research-Oriented:</strong> Prefer experimental work and discovering new insights from data</li>
                    <li><strong>Want Creative Problem Solving:</strong> Enjoy building innovative solutions to business problems</li>
                    <li><strong>Prefer Collaborative Environments:</strong> Work well with product, business, and engineering teams</li>
                    <li><strong>Are Comfortable with Ambiguity:</strong> Thrive when working on undefined problems</li>
                    <li><strong>Want High Growth Potential:</strong> Interested in emerging field with rapid advancement</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Choose Cyber Security If You:
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Have Strong Attention to Detail:</strong> Excel at systematic analysis and risk assessment</li>
                    <li><strong>Enjoy Protecting Others:</strong> Find satisfaction in safeguarding organizations and people</li>
                    <li><strong>Like Structured Environments:</strong> Prefer clear policies, procedures, and compliance frameworks</li>
                    <li><strong>Are Good Under Pressure:</strong> Thrive in high-stakes incident response situations</li>
                    <li><strong>Want Immediate Impact:</strong> See direct results from security measures implemented</li>
                    <li><strong>Value Job Security:</strong> Prefer stable, essential roles with consistent demand</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Self-Assessment Questions
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Do you prefer creating new solutions or protecting existing systems?</li>
                    <li>Are you more interested in data patterns or security threats?</li>
                    <li>Do you enjoy statistical analysis or risk assessment more?</li>
                    <li>Would you rather build predictive models or incident response plans?</li>
                    <li>Are you comfortable with business ambiguity or do you prefer clear security protocols?</li>
                    <li>Do you want to work on revenue generation or cost prevention?</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Getting Started Action Plan
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>
                      AI Data Science Start
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Learn Python and statistics basics</li>
                      <li>Take online ML courses (Coursera, edX)</li>
                      <li>Build portfolio projects on GitHub</li>
                      <li>Participate in Kaggle competitions</li>
                      <li>Get relevant certifications (AWS, Google)</li>
                      <li>Network with data science community</li>
                    </ul>
                  </div>
                  
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#f5576c' }}>
                      Cyber Security Start
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6' }}>
                      <li>Get Security+ or similar certification</li>
                      <li>Learn networking fundamentals</li>
                      <li>Practice with security tools (Kali Linux)</li>
                      <li>Join cybersecurity communities</li>
                      <li>Pursue specialized certifications (CISSP, CEH)</li>
                      <li>Gain hands-on experience through labs</li>
                    </ul>
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
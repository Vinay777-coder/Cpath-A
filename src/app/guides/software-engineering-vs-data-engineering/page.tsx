'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Database, Server, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function SoftwareEngineeringVsDataEngineeringGuide() {
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Software Engineering vs Data Engineering
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Comprehensive comparison of software engineering and data engineering roles to help you choose the right career path.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'comparison', label: 'Role Comparison', icon: Target },
            { id: 'skills', label: 'Skills & Tech Stack', icon: Code },
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
              {/* Software Engineer */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#3b82f6', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Code size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Software Engineer</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Primary Focus</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    Building applications, systems, and user-facing products. Creates software solutions that users interact with directly.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Responsibilities</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Application development and maintenance</li>
                    <li>Software architecture design</li>
                    <li>Code review and testing</li>
                    <li>Performance optimization</li>
                    <li>User experience implementation</li>
                    <li>API design and integration</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Daily Work</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Writing and reviewing code</li>
                    <li>Debugging and problem-solving</li>
                    <li>Collaborating with product teams</li>
                    <li>Implementing new features</li>
                    <li>Refactoring and optimization</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Average Salary Range</h4>
                  <p style={{ color: '#10b981', fontSize: '1.125rem', fontWeight: '600' }}>
                    $80,000 - $160,000+
                  </p>
                </div>
              </div>

              {/* Data Engineer */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#10b981', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Database size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Data Engineer</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Primary Focus</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    Building data infrastructure and pipelines. Creates systems that collect, process, and store data for analysis.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Responsibilities</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Data pipeline development</li>
                    <li>ETL/ELT process design</li>
                    <li>Data warehouse architecture</li>
                    <li>Data quality and validation</li>
                    <li>Stream processing systems</li>
                    <li>Data infrastructure scaling</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Daily Work</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Building data pipelines</li>
                    <li>Monitoring data quality</li>
                    <li>Optimizing data workflows</li>
                    <li>Collaborating with data scientists</li>
                    <li>Infrastructure maintenance</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Average Salary Range</h4>
                  <p style={{ color: '#10b981', fontSize: '1.125rem', fontWeight: '600' }}>
                    $90,000 - $170,000+
                  </p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Key Differences Analysis
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Problem Types</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Software Engineering:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      User experience, application performance, system scalability, feature implementation
                    </p>
                  </div>
                  <div>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Data Engineering:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Data quality, pipeline reliability, processing efficiency, storage optimization
                    </p>
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Success Metrics</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Software Engineering:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      User adoption, application uptime, feature delivery speed, code quality
                    </p>
                  </div>
                  <div>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Data Engineering:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Data accuracy, pipeline reliability, processing latency, cost efficiency
                    </p>
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Growth Trajectory</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Software Engineering:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Senior Engineer → Tech Lead → Engineering Manager → CTO
                    </p>
                  </div>
                  <div>
                    <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Data Engineering:</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      Senior Data Engineer → Data Architecture → Data Platform Lead → Chief Data Officer
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
                Skills & Technology Stack Comparison
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
                {/* Software Engineering Skills */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Software Engineering Stack
                  </h4>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Programming Languages</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['JavaScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'TypeScript'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Frameworks & Libraries</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Spring Boot', '.NET'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#1d4ed8', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Databases & Storage</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'DynamoDB'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Tools & DevOps</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Docker', 'Kubernetes', 'Git', 'Jenkins', 'AWS/Azure', 'Terraform'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#1e40af', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Data Engineering Skills */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Data Engineering Stack
                  </h4>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Programming Languages</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Python', 'Scala', 'Java', 'SQL', 'Go', 'R'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#10b981', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Big Data Frameworks</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Apache Spark', 'Hadoop', 'Kafka', 'Flink', 'Storm', 'Beam'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#059669', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Databases & Warehouses</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Snowflake', 'Redshift', 'BigQuery', 'Cassandra', 'HBase', 'ClickHouse'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#047857', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Cloud & Orchestration</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {['Airflow', 'Prefect', 'dbt', 'AWS Data Services', 'Azure Data Factory', 'GCP Dataflow'].map(skill => (
                        <span key={skill} style={{ backgroundColor: '#065f46', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem', fontSize: '1.125rem' }}>
                  Skill Development Priorities
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <h5 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1rem' }}>Software Engineering Focus</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {[
                        { priority: 'High', skills: ['Algorithm & data structures', 'System design', 'Code quality'] },
                        { priority: 'Medium', skills: ['Cloud platforms', 'DevOps practices', 'Testing frameworks'] },
                        { priority: 'Nice-to-have', skills: ['AI/ML basics', 'Mobile development', 'Security'] }
                      ].map(({ priority, skills }) => (
                        <div key={priority} style={{ backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '6px' }}>
                          <div style={{ color: priority === 'High' ? '#ef4444' : priority === 'Medium' ? '#f59e0b' : '#6366f1', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                            {priority} Priority
                          </div>
                          <div style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>
                            {skills.join(', ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1rem' }}>Data Engineering Focus</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {[
                        { priority: 'High', skills: ['SQL mastery', 'Python/Scala', 'Data modeling'] },
                        { priority: 'Medium', skills: ['Cloud data services', 'Streaming systems', 'Data quality'] },
                        { priority: 'Nice-to-have', skills: ['ML engineering', 'Real-time analytics', 'Data governance'] }
                      ].map(({ priority, skills }) => (
                        <div key={priority} style={{ backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '6px' }}>
                          <div style={{ color: priority === 'High' ? '#ef4444' : priority === 'Medium' ? '#f59e0b' : '#6366f1', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                            {priority} Priority
                          </div>
                          <div style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>
                            {skills.join(', ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'career' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Career Progression Comparison
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Software Engineering Career Path</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { role: 'Junior Software Engineer', salary: '$60K - $80K', experience: '0-2 years', focus: 'Learning fundamentals, code quality' },
                      { role: 'Software Engineer', salary: '$80K - $110K', experience: '2-4 years', focus: 'Feature development, system design' },
                      { role: 'Senior Software Engineer', salary: '$110K - $150K', experience: '4-7 years', focus: 'Architecture, mentoring, complex systems' },
                      { role: 'Staff/Principal Engineer', salary: '$150K - $200K+', experience: '7-12 years', focus: 'Technical leadership, system architecture' },
                      { role: 'Engineering Manager', salary: '$140K - $180K', experience: '5-10 years', focus: 'Team management, project delivery' },
                      { role: 'Director/VP Engineering', salary: '$180K - $300K+', experience: '10+ years', focus: 'Strategic planning, organization scaling' }
                    ].map(({ role, salary, experience, focus }, index) => (
                      <div key={role} style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px' }}>
                        <div style={{ backgroundColor: '#3b82f6', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          {index + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                            <div style={{ color: '#f1f5f9', fontSize: '0.875rem', fontWeight: '600' }}>{role}</div>
                            <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{salary}</div>
                          </div>
                          <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>{experience}</div>
                          <div style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{focus}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Data Engineering Career Path</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { role: 'Junior Data Engineer', salary: '$70K - $90K', experience: '0-2 years', focus: 'ETL pipelines, data quality basics' },
                      { role: 'Data Engineer', salary: '$90K - $125K', experience: '2-4 years', focus: 'Pipeline optimization, data modeling' },
                      { role: 'Senior Data Engineer', salary: '$125K - $165K', experience: '4-7 years', focus: 'Architecture design, streaming systems' },
                      { role: 'Staff/Principal Data Engineer', salary: '$165K - $220K+', experience: '7-12 years', focus: 'Platform strategy, technical leadership' },
                      { role: 'Data Engineering Manager', salary: '$150K - $200K', experience: '5-10 years', focus: 'Team leadership, data strategy' },
                      { role: 'Head of Data/CDO', salary: '$200K - $400K+', experience: '10+ years', focus: 'Data strategy, organizational transformation' }
                    ].map(({ role, salary, experience, focus }, index) => (
                      <div key={role} style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px' }}>
                        <div style={{ backgroundColor: '#10b981', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          {index + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                            <div style={{ color: '#f1f5f9', fontSize: '0.875rem', fontWeight: '600' }}>{role}</div>
                            <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{salary}</div>
                          </div>
                          <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>{experience}</div>
                          <div style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{focus}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Career Transition & Decision Guide
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Software Engineering → Data Engineering</h4>
                    <div style={{ marginBottom: '1rem' }}>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Transferable Skills:</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Programming fundamentals</li>
                        <li>System design thinking</li>
                        <li>Database knowledge</li>
                        <li>Cloud platform experience</li>
                      </ul>
                    </div>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Skills to Develop:</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Advanced SQL and data modeling</li>
                        <li>Big data frameworks (Spark, Kafka)</li>
                        <li>ETL/ELT pipeline design</li>
                        <li>Data warehousing concepts</li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Data Engineering → Software Engineering</h4>
                    <div style={{ marginBottom: '1rem' }}>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Transferable Skills:</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Programming expertise</li>
                        <li>System architecture knowledge</li>
                        <li>Performance optimization</li>
                        <li>Distributed systems understanding</li>
                      </ul>
                    </div>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Skills to Develop:</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Frontend frameworks and UI/UX</li>
                        <li>Application architecture patterns</li>
                        <li>User-focused development</li>
                        <li>Product development lifecycle</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Making the Right Choice
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Choose Software Engineering if you:</h5>
                      <ul style={{ color: '#c4b5fd', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Enjoy building user-facing applications</li>
                        <li>Like variety in problem types</li>
                        <li>Want to see immediate user impact</li>
                        <li>Prefer broader technology exposure</li>
                        <li>Enjoy product development cycles</li>
                      </ul>
                    </div>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Choose Data Engineering if you:</h5>
                      <ul style={{ color: '#c4b5fd', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Love working with large-scale data</li>
                        <li>Enjoy backend and infrastructure work</li>
                        <li>Want to enable data-driven decisions</li>
                        <li>Prefer deep technical specialization</li>
                        <li>Like solving complex data problems</li>
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
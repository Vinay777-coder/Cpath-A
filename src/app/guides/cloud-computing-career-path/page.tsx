'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Cloud, Server, Zap, Layers, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function CloudComputingCareerPathGuide() {
  const [activeTab, setActiveTab] = useState('overview');

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
            Cloud Computing Career Path
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Comprehensive career guide for cloud computing professionals, covering roles, skills, and advancement opportunities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'overview', label: 'Career Overview', icon: Cloud },
            { id: 'roles', label: 'Cloud Roles', icon: Server },
            { id: 'roadmap', label: 'Skill Roadmap', icon: TrendingUp }
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
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Cloud Computing Industry Landscape
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Cloud size={20} style={{ color: '#3b82f6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#3b82f6', margin: 0 }}>Market Growth</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>$500B+ global market size</li>
                    <li>15-20% annual growth rate</li>
                    <li>95% of enterprises use cloud</li>
                    <li>High demand for skilled professionals</li>
                    <li>Remote work opportunities</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Zap size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#8b5cf6', margin: 0 }}>Key Drivers</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>Digital transformation initiatives</li>
                    <li>Cost optimization needs</li>
                    <li>Scalability requirements</li>
                    <li>AI/ML adoption</li>
                    <li>Hybrid work models</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <TrendingUp size={20} style={{ color: '#10b981', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#10b981', margin: 0 }}>Career Benefits</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>High salary potential</li>
                    <li>Job security and growth</li>
                    <li>Continuous learning opportunities</li>
                    <li>Industry versatility</li>
                    <li>Innovation exposure</li>
                  </ul>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Major Cloud Platforms Market Share</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {[
                    { provider: 'Amazon Web Services', share: '32%', color: '#ff9900', growth: 'Dominant leader' },
                    { provider: 'Microsoft Azure', share: '23%', color: '#0078d4', growth: 'Fastest growing' },
                    { provider: 'Google Cloud', share: '10%', color: '#4285f4', growth: 'AI/ML focus' },
                    { provider: 'Others', share: '35%', color: '#64748b', growth: 'Specialized services' }
                  ].map(({ provider, share, color, growth }) => (
                    <div key={provider} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: color, marginBottom: '0.5rem' }}>
                        {share}
                      </div>
                      <h5 style={{ color: '#f1f5f9', margin: '0 0 0.5rem 0', fontSize: '0.875rem', fontWeight: '600' }}>
                        {provider}
                      </h5>
                      <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>{growth}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roles' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Cloud Computing Career Roles
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    category: 'Infrastructure & Operations',
                    color: '#3b82f6',
                    roles: [
                      {
                        title: 'Cloud Infrastructure Engineer',
                        level: 'Mid-Senior',
                        salary: '$90K - $140K',
                        responsibilities: ['Design cloud architecture', 'Implement infrastructure as code', 'Manage cloud resources', 'Optimize costs'],
                        skills: ['Terraform', 'AWS/Azure/GCP', 'Networking', 'Linux'],
                        growth: 'Cloud Architect → Principal Engineer'
                      },
                      {
                        title: 'Site Reliability Engineer (SRE)',
                        level: 'Senior',
                        salary: '$110K - $170K',
                        responsibilities: ['Ensure system reliability', 'Automate operations', 'Monitor performance', 'Incident response'],
                        skills: ['Kubernetes', 'Monitoring tools', 'Automation', 'Programming'],
                        growth: 'Principal SRE → Engineering Manager'
                      },
                      {
                        title: 'DevOps Engineer',
                        level: 'Mid-Senior',
                        salary: '$85K - $135K',
                        responsibilities: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure automation', 'Security integration'],
                        skills: ['Docker', 'Jenkins', 'Git', 'Cloud platforms'],
                        growth: 'Senior DevOps → DevOps Lead'
                      }
                    ]
                  },
                  {
                    category: 'Architecture & Strategy',
                    color: '#8b5cf6',
                    roles: [
                      {
                        title: 'Cloud Solutions Architect',
                        level: 'Senior',
                        salary: '$120K - $180K',
                        responsibilities: ['Design cloud solutions', 'Technical leadership', 'Client consultations', 'Best practices'],
                        skills: ['Multi-cloud expertise', 'Architecture patterns', 'Business alignment', 'Communication'],
                        growth: 'Principal Architect → CTO'
                      },
                      {
                        title: 'Cloud Consultant',
                        level: 'Senior',
                        salary: '$100K - $160K',
                        responsibilities: ['Migration planning', 'Cloud strategy', 'Risk assessment', 'Training delivery'],
                        skills: ['Business analysis', 'Project management', 'Technical expertise', 'Presentation'],
                        growth: 'Principal Consultant → Practice Lead'
                      }
                    ]
                  },
                  {
                    category: 'Development & Engineering',
                    color: '#10b981',
                    roles: [
                      {
                        title: 'Cloud Application Developer',
                        level: 'Mid-Senior',
                        salary: '$85K - $130K',
                        responsibilities: ['Build cloud-native apps', 'Serverless development', 'API integration', 'Performance optimization'],
                        skills: ['Programming languages', 'Serverless', 'Databases', 'APIs'],
                        growth: 'Senior Developer → Tech Lead'
                      },
                      {
                        title: 'Data Engineer (Cloud)',
                        level: 'Mid-Senior',
                        salary: '$95K - $145K',
                        responsibilities: ['Data pipeline design', 'ETL processes', 'Big data solutions', 'Data governance'],
                        skills: ['Spark', 'Data warehousing', 'Python/Scala', 'ML platforms'],
                        growth: 'Senior Data Engineer → Data Architect'
                      }
                    ]
                  },
                  {
                    category: 'Security & Compliance',
                    color: '#ef4444',
                    roles: [
                      {
                        title: 'Cloud Security Engineer',
                        level: 'Mid-Senior',
                        salary: '$100K - $150K',
                        responsibilities: ['Security architecture', 'Compliance monitoring', 'Risk assessment', 'Incident response'],
                        skills: ['Security frameworks', 'Identity management', 'Compliance', 'Threat analysis'],
                        growth: 'Senior Security Engineer → CISO'
                      },
                      {
                        title: 'Cloud Compliance Specialist',
                        level: 'Mid',
                        salary: '$80K - $120K',
                        responsibilities: ['Regulatory compliance', 'Audit preparation', 'Policy development', 'Risk management'],
                        skills: ['Compliance frameworks', 'Audit processes', 'Documentation', 'Risk assessment'],
                        growth: 'Senior Specialist → Compliance Manager'
                      }
                    ]
                  }
                ].map(({ category, color, roles }) => (
                  <div key={category} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: color, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                      {category}
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {roles.map(({ title, level, salary, responsibilities, skills, growth }) => (
                        <div key={title} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', border: `1px solid ${color}20` }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{title}</h5>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{salary}</div>
                              <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{level}</div>
                            </div>
                          </div>
                          
                          <div style={{ marginBottom: '0.75rem' }}>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Key Responsibilities:</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {responsibilities.map(resp => (
                                <span key={resp} style={{ 
                                  backgroundColor: `${color}15`,
                                  color: color,
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '3px',
                                  fontSize: '0.75rem'
                                }}>
                                  {resp}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div style={{ marginBottom: '0.75rem' }}>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Required Skills:</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {skills.map(skill => (
                                <span key={skill} style={{ 
                                  backgroundColor: '#374151',
                                  color: '#d1d5db',
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '3px',
                                  fontSize: '0.75rem'
                                }}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div style={{ backgroundColor: '#0f172a', padding: '0.5rem', borderRadius: '4px' }}>
                            <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                              <strong style={{ color: '#cbd5e1' }}>Career Growth:</strong> {growth}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Cloud Computing Skill Development Roadmap
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    phase: 'Foundation Phase (Months 1-3)',
                    color: '#3b82f6',
                    description: 'Build fundamental understanding of cloud concepts and basic services',
                    milestones: [
                      {
                        milestone: 'Cloud Fundamentals',
                        duration: '2-3 weeks',
                        topics: ['Cloud service models (IaaS, PaaS, SaaS)', 'Deployment models', 'Basic networking', 'Virtualization concepts'],
                        resources: ['AWS Cloud Practitioner course', 'Azure Fundamentals', 'Google Cloud Essentials']
                      },
                      {
                        milestone: 'Core Services',
                        duration: '3-4 weeks',
                        topics: ['Compute services (EC2, VMs)', 'Storage solutions', 'Basic networking', 'Identity and access management'],
                        resources: ['Platform-specific documentation', 'Hands-on labs', 'Free tier exploration']
                      },
                      {
                        milestone: 'Certification Prep',
                        duration: '3-4 weeks',
                        topics: ['Cloud Practitioner exam prep', 'Practice tests', 'Review and reinforcement'],
                        resources: ['Official practice exams', 'Study guides', 'Community forums']
                      }
                    ]
                  },
                  {
                    phase: 'Intermediate Phase (Months 4-8)',
                    color: '#8b5cf6',
                    description: 'Develop hands-on skills with specific cloud platforms and tools',
                    milestones: [
                      {
                        milestone: 'Platform Specialization',
                        duration: '6-8 weeks',
                        topics: ['Advanced compute and storage', 'Database services', 'Monitoring and logging', 'Cost optimization'],
                        resources: ['Solutions Architect courses', 'Real-world projects', 'Case studies']
                      },
                      {
                        milestone: 'Infrastructure as Code',
                        duration: '4-6 weeks',
                        topics: ['Terraform fundamentals', 'CloudFormation/ARM templates', 'Version control', 'Best practices'],
                        resources: ['Terraform documentation', 'GitHub projects', 'Infrastructure patterns']
                      },
                      {
                        milestone: 'DevOps Integration',
                        duration: '4-6 weeks',
                        topics: ['CI/CD pipelines', 'Containerization (Docker)', 'Configuration management', 'Automation'],
                        resources: ['Jenkins tutorials', 'Docker courses', 'Ansible/Chef guides']
                      }
                    ]
                  },
                  {
                    phase: 'Advanced Phase (Months 9-12)',
                    color: '#10b981',
                    description: 'Master advanced concepts and specialize in specific domains',
                    milestones: [
                      {
                        milestone: 'Container Orchestration',
                        duration: '6-8 weeks',
                        topics: ['Kubernetes fundamentals', 'Service mesh', 'Microservices architecture', 'Cloud-native patterns'],
                        resources: ['Kubernetes documentation', 'CNCF courses', 'Hands-on clusters']
                      },
                      {
                        milestone: 'Advanced Networking & Security',
                        duration: '4-6 weeks',
                        topics: ['VPC design', 'Security best practices', 'Compliance frameworks', 'Identity federation'],
                        resources: ['Security certification prep', 'Compliance documentation', 'Security tools']
                      },
                      {
                        milestone: 'Specialization Focus',
                        duration: '6-8 weeks',
                        topics: ['Choose: Data Engineering, ML/AI, Security, or Architecture', 'Deep dive into chosen area', 'Advanced certifications'],
                        resources: ['Specialized courses', 'Expert-led training', 'Advanced certifications']
                      }
                    ]
                  },
                  {
                    phase: 'Expert Phase (Year 2+)',
                    color: '#f59e0b',
                    description: 'Achieve expertise and thought leadership in cloud technologies',
                    milestones: [
                      {
                        milestone: 'Multi-Cloud Expertise',
                        duration: 'Ongoing',
                        topics: ['Cross-platform architecture', 'Hybrid cloud strategies', 'Vendor evaluation', 'Migration strategies'],
                        resources: ['Multi-cloud frameworks', 'Vendor partnerships', 'Industry conferences']
                      },
                      {
                        milestone: 'Leadership & Strategy',
                        duration: 'Ongoing',
                        topics: ['Cloud governance', 'Cost optimization at scale', 'Team leadership', 'Strategic planning'],
                        resources: ['Executive programs', 'Mentorship', 'Industry leadership roles']
                      },
                      {
                        milestone: 'Innovation & Emerging Tech',
                        duration: 'Ongoing',
                        topics: ['Serverless computing', 'Edge computing', 'AI/ML integration', 'Quantum computing'],
                        resources: ['Research papers', 'Beta programs', 'Innovation labs']
                      }
                    ]
                  }
                ].map(({ phase, color, description, milestones }) => (
                  <div key={phase} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${color}40` }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: color, marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
                        {phase}
                      </h4>
                      <p style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{description}</p>
                    </div>
                    
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {milestones.map(({ milestone, duration, topics, resources }) => (
                        <div key={milestone} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{milestone}</h5>
                            <span style={{ color: color, fontSize: '0.75rem', fontWeight: '500' }}>{duration}</span>
                          </div>
                          
                          <div style={{ marginBottom: '0.75rem' }}>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Topics:</h6>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.25rem' }}>
                              {topics.map(topic => (
                                <div key={topic} style={{ display: 'flex', alignItems: 'center' }}>
                                  <CheckCircle2 size={12} style={{ color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                                  <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Resources:</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {resources.map(resource => (
                                <span key={resource} style={{ 
                                  backgroundColor: `${color}15`,
                                  color: color,
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '3px',
                                  fontSize: '0.75rem'
                                }}>
                                  {resource}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certification Roadmap */}
              <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                  Recommended Certification Path
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {[
                    { level: 'Foundation', certs: ['AWS Cloud Practitioner', 'Azure AZ-900', 'Google Cloud Digital Leader'], color: '#3b82f6' },
                    { level: 'Associate', certs: ['AWS Solutions Architect', 'Azure Administrator AZ-104', 'Google Cloud Associate'], color: '#8b5cf6' },
                    { level: 'Professional', certs: ['AWS Solutions Architect Pro', 'Azure Solutions Architect AZ-305', 'Google Cloud Professional'], color: '#10b981' },
                    { level: 'Specialty', certs: ['Security Specialty', 'Data & Analytics', 'Machine Learning', 'Networking'], color: '#f59e0b' }
                  ].map(({ level, certs, color }) => (
                    <div key={level} style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '6px' }}>
                      <h5 style={{ color: color, marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>{level}</h5>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {certs.map((cert, index) => (
                          <div key={cert} style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ backgroundColor: color, color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                              {index + 1}
                            </div>
                            <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
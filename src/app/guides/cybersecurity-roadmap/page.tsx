'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Server, AlertTriangle, CheckCircle2, Target } from 'lucide-react';

export default function CybersecurityRoadmapGuide() {
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Cybersecurity Roadmap
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Complete learning path to become a cybersecurity professional, covering ethical hacking, security analysis, and defense strategies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'overview', label: 'Career Overview', icon: Shield },
            { id: 'domains', label: 'Security Domains', icon: Lock },
            { id: 'roadmap', label: 'Learning Path', icon: Target }
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
                color: activeTab === id ? '#ef4444' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #ef4444' : '2px solid transparent',
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
                Cybersecurity Industry Overview
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Shield size={20} style={{ color: '#ef4444', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#ef4444', margin: 0 }}>Market Demand</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>3.5M unfilled cybersecurity jobs globally</li>
                    <li>13% annual job growth rate</li>
                    <li>Zero unemployment in cybersecurity</li>
                    <li>Critical need across all industries</li>
                    <li>Remote work opportunities</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Lock size={20} style={{ color: '#f97316', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#f97316', margin: 0 }}>Threat Landscape</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>$6 trillion annual cybercrime cost</li>
                    <li>Ransomware attacks every 11 seconds</li>
                    <li>95% of breaches due to human error</li>
                    <li>IoT devices expanding attack surface</li>
                    <li>AI-powered threats emerging</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Server size={20} style={{ color: '#10b981', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#10b981', margin: 0 }}>Career Benefits</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>High salary potential ($80K-$200K+)</li>
                    <li>Job security and stability</li>
                    <li>Continuous learning opportunities</li>
                    <li>Variety of specialization paths</li>
                    <li>Meaningful impact protecting others</li>
                  </ul>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Entry-Level Requirements</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <div>
                    <h5 style={{ color: '#ef4444', marginBottom: '0.75rem', fontSize: '1rem' }}>Educational Paths</h5>
                    <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                      <li>Bachelor's in Computer Science/IT</li>
                      <li>Cybersecurity bootcamps (3-6 months)</li>
                      <li>Professional certifications</li>
                      <li>Self-directed online learning</li>
                      <li>Military/Law enforcement background</li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={{ color: '#f97316', marginBottom: '0.75rem', fontSize: '1rem' }}>Essential Skills</h5>
                    <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                      <li>Networking fundamentals (TCP/IP, OSI)</li>
                      <li>Operating systems (Windows, Linux)</li>
                      <li>Basic programming/scripting</li>
                      <li>Risk assessment mindset</li>
                      <li>Attention to detail</li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1rem' }}>Timeline to Entry</h5>
                    <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                      <li>6-12 months intensive study</li>
                      <li>1-2 years part-time learning</li>
                      <li>3-6 months bootcamp + practice</li>
                      <li>Immediate entry with relevant experience</li>
                      <li>Continuous skill development required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'domains' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Cybersecurity Career Domains
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    domain: 'Security Analysis & Monitoring',
                    color: '#ef4444',
                    roles: [
                      {
                        title: 'Security Operations Center (SOC) Analyst',
                        level: 'Entry-Mid',
                        salary: '$55K - $85K',
                        description: 'Monitor security events, investigate incidents, and respond to threats in real-time',
                        skills: ['SIEM tools', 'Log analysis', 'Incident response', 'Threat intelligence'],
                        growth: 'Senior SOC Analyst → SOC Manager → CISO'
                      },
                      {
                        title: 'Cyber Threat Intelligence Analyst',
                        level: 'Mid-Senior',
                        salary: '$70K - $110K',
                        description: 'Research and analyze cyber threats to predict and prevent future attacks',
                        skills: ['Threat hunting', 'OSINT', 'Malware analysis', 'Risk assessment'],
                        growth: 'Senior Analyst → Lead Intelligence → Security Architect'
                      }
                    ]
                  },
                  {
                    domain: 'Penetration Testing & Ethical Hacking',
                    color: '#f97316',
                    roles: [
                      {
                        title: 'Penetration Tester',
                        level: 'Mid-Senior',
                        salary: '$80K - $130K',
                        description: 'Simulate cyber attacks to identify vulnerabilities in systems and applications',
                        skills: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Web app testing'],
                        growth: 'Senior Pentester → Security Consultant → Red Team Lead'
                      },
                      {
                        title: 'Red Team Specialist',
                        level: 'Senior',
                        salary: '$100K - $160K',
                        description: 'Conduct advanced persistent threat simulations and full-scope assessments',
                        skills: ['Advanced exploitation', 'Social engineering', 'Physical security', 'C2 frameworks'],
                        growth: 'Lead Red Team → Principal Security Consultant'
                      }
                    ]
                  },
                  {
                    domain: 'Security Architecture & Engineering',
                    color: '#10b981',
                    roles: [
                      {
                        title: 'Security Architect',
                        level: 'Senior',
                        salary: '$120K - $180K',
                        description: 'Design and implement comprehensive security frameworks and solutions',
                        skills: ['Security frameworks', 'Cloud security', 'Zero trust', 'Enterprise architecture'],
                        growth: 'Principal Architect → Chief Security Architect → CISO'
                      },
                      {
                        title: 'DevSecOps Engineer',
                        level: 'Mid-Senior',
                        salary: '$95K - $140K',
                        description: 'Integrate security into development and deployment pipelines',
                        skills: ['CI/CD security', 'Container security', 'IaC security', 'SAST/DAST'],
                        growth: 'Senior DevSecOps → Security Engineering Manager'
                      }
                    ]
                  },
                  {
                    domain: 'Compliance & Risk Management',
                    color: '#8b5cf6',
                    roles: [
                      {
                        title: 'Compliance Analyst',
                        level: 'Entry-Mid',
                        salary: '$60K - $90K',
                        description: 'Ensure organizational adherence to security regulations and standards',
                        skills: ['NIST framework', 'ISO 27001', 'PCI DSS', 'GDPR compliance'],
                        growth: 'Senior Analyst → Compliance Manager → Chief Risk Officer'
                      },
                      {
                        title: 'Risk Assessment Specialist',
                        level: 'Mid-Senior',
                        salary: '$75K - $115K',
                        description: 'Identify, analyze, and mitigate cybersecurity risks across the organization',
                        skills: ['Risk frameworks', 'Business impact analysis', 'Threat modeling', 'Quantitative risk'],
                        growth: 'Senior Specialist → Risk Manager → Chief Risk Officer'
                      }
                    ]
                  },
                  {
                    domain: 'Digital Forensics & Incident Response',
                    color: '#06b6d4',
                    roles: [
                      {
                        title: 'Digital Forensics Investigator',
                        level: 'Mid-Senior',
                        salary: '$70K - $120K',
                        description: 'Investigate cyber incidents and collect digital evidence for legal proceedings',
                        skills: ['Forensic tools', 'Evidence collection', 'Legal procedures', 'Report writing'],
                        growth: 'Senior Investigator → Forensics Manager → Expert Witness'
                      },
                      {
                        title: 'Incident Response Manager',
                        level: 'Senior',
                        salary: '$90K - $140K',
                        description: 'Lead cybersecurity incident response efforts and coordinate recovery activities',
                        skills: ['Crisis management', 'Communication', 'Technical leadership', 'Business continuity'],
                        growth: 'Principal IR → Security Operations Director'
                      }
                    ]
                  }
                ].map(({ domain, color, roles }) => (
                  <div key={domain} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: color, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                      {domain}
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {roles.map(({ title, level, salary, description, skills, growth }) => (
                        <div key={title} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', border: `1px solid ${color}20` }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{title}</h5>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{salary}</div>
                              <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{level}</div>
                            </div>
                          </div>
                          
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                            {description}
                          </p>

                          <div style={{ marginBottom: '0.75rem' }}>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Key Skills:</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {skills.map(skill => (
                                <span key={skill} style={{ 
                                  backgroundColor: `${color}15`,
                                  color: color,
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
                Cybersecurity Learning Roadmap
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    phase: 'Foundation Phase (Months 1-4)',
                    color: '#ef4444',
                    description: 'Build fundamental IT and security knowledge',
                    milestones: [
                      {
                        milestone: 'IT Fundamentals',
                        duration: '4-6 weeks',
                        topics: ['Computer hardware/software', 'Operating systems basics', 'File systems and permissions', 'Basic troubleshooting'],
                        certifications: ['CompTIA IT Fundamentals+', 'Microsoft Technology Associate']
                      },
                      {
                        milestone: 'Networking Essentials',
                        duration: '6-8 weeks',
                        topics: ['OSI model', 'TCP/IP protocol suite', 'Network devices and topologies', 'Subnetting and VLANs'],
                        certifications: ['CompTIA Network+', 'Cisco CCNA']
                      },
                      {
                        milestone: 'Security Basics',
                        duration: '4-6 weeks',
                        topics: ['CIA triad', 'Threat landscape overview', 'Basic cryptography', 'Security policies'],
                        certifications: ['CompTIA Security+', '(ISC)² Systems Security Certified Practitioner']
                      }
                    ]
                  },
                  {
                    phase: 'Core Security Phase (Months 5-10)',
                    color: '#f97316',
                    description: 'Develop hands-on security skills and choose specialization',
                    milestones: [
                      {
                        milestone: 'Security Operations',
                        duration: '6-8 weeks',
                        topics: ['SIEM tools (Splunk, ELK)', 'Log analysis and correlation', 'Incident detection and response', 'Threat hunting basics'],
                        certifications: ['GCIH', 'CySA+', 'Splunk Certified User']
                      },
                      {
                        milestone: 'Vulnerability Management',
                        duration: '4-6 weeks',
                        topics: ['Vulnerability scanning', 'Patch management', 'Risk assessment', 'Remediation strategies'],
                        certifications: ['CEH', 'GCFA', 'Nessus Certified']
                      },
                      {
                        milestone: 'Hands-on Labs',
                        duration: '8-10 weeks',
                        topics: ['Virtual lab setup', 'Attack and defense scenarios', 'Tool familiarization', 'Capture the Flag (CTF)'],
                        certifications: ['Practical exercises', 'TryHackMe', 'HackTheBox']
                      }
                    ]
                  },
                  {
                    phase: 'Specialization Phase (Months 11-18)',
                    color: '#10b981',
                    description: 'Deep dive into chosen specialty area',
                    milestones: [
                      {
                        milestone: 'Choose Specialization',
                        duration: '2-3 weeks',
                        topics: ['Career path research', 'Skills gap analysis', 'Mentorship connections', 'Specialization planning'],
                        certifications: ['Career counseling', 'Industry networking']
                      },
                      {
                        milestone: 'Advanced Skills Development',
                        duration: '12-16 weeks',
                        topics: ['Specialization-specific tools', 'Advanced techniques', 'Industry best practices', 'Real-world projects'],
                        certifications: ['CISSP', 'CISM', 'OSCP', 'GCFE']
                      },
                      {
                        milestone: 'Professional Experience',
                        duration: 'Ongoing',
                        topics: ['Internships or entry-level roles', 'Professional networking', 'Continuous learning', 'Industry involvement'],
                        certifications: ['Professional portfolio', 'References', 'Industry recognition']
                      }
                    ]
                  },
                  {
                    phase: 'Advanced Professional Phase (18+ Months)',
                    color: '#8b5cf6',
                    description: 'Become a cybersecurity expert and leader',
                    milestones: [
                      {
                        milestone: 'Expert-Level Certifications',
                        duration: 'Ongoing',
                        topics: ['Advanced technical certifications', 'Management certifications', 'Industry-specific compliance', 'Continuous education'],
                        certifications: ['CISSP', 'CISA', 'SABSA', 'Advanced vendor certs']
                      },
                      {
                        milestone: 'Leadership & Strategy',
                        duration: 'Ongoing',
                        topics: ['Security program management', 'Business alignment', 'Team leadership', 'Strategic planning'],
                        certifications: ['MBA/Executive education', 'Leadership programs']
                      },
                      {
                        milestone: 'Thought Leadership',
                        duration: 'Ongoing',
                        topics: ['Conference speaking', 'Research publication', 'Industry standards development', 'Mentoring others'],
                        certifications: ['Industry recognition', 'Board positions', 'Advisory roles']
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
                      {milestones.map(({ milestone, duration, topics, certifications }) => (
                        <div key={milestone} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{milestone}</h5>
                            <span style={{ color: color, fontSize: '0.75rem', fontWeight: '500' }}>{duration}</span>
                          </div>
                          
                          <div style={{ marginBottom: '0.75rem' }}>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Learning Topics:</h6>
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
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Recommended Certifications:</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {certifications.map(cert => (
                                <span key={cert} style={{ 
                                  backgroundColor: `${color}15`,
                                  color: color,
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '3px',
                                  fontSize: '0.75rem'
                                }}>
                                  {cert}
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

              {/* Essential Resources */}
              <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                  Essential Learning Resources
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {[
                    { category: 'Hands-on Practice', resources: ['TryHackMe', 'HackTheBox', 'VulnHub', 'OverTheWire', 'PentesterLab'] },
                    { category: 'Online Learning', resources: ['Cybrary', 'SANS Cyber Aces', 'Coursera', 'edX', 'Udemy Security Courses'] },
                    { category: 'Virtual Labs', resources: ['GNS3', 'VirtualBox/VMware', 'Kali Linux', 'Metasploitable', 'DVWA'] },
                    { category: 'Communities', resources: ['OWASP Local Chapters', 'DEF CON Groups', 'ISC2 Chapters', 'CompTIA IT Professionals', 'Reddit r/cybersecurity'] }
                  ].map(({ category, resources }) => (
                    <div key={category} style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '6px' }}>
                      <h5 style={{ color: '#ef4444', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>{category}</h5>
                      <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem', margin: 0 }}>
                        {resources.map(resource => <li key={resource}>{resource}</li>)}
                      </ul>
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
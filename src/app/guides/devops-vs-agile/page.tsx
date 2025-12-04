'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, GitBranch, Users, Target, TrendingUp, CheckCircle2, Zap } from 'lucide-react';

export default function DevOpsVsAgileGuide() {
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #f59e0b 0%, #10b981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            DevOps vs Agile
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Comprehensive comparison of DevOps and Agile methodologies to understand their differences, synergies, and implementation strategies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'comparison', label: 'Methodology Comparison', icon: Target },
            { id: 'implementation', label: 'Implementation & Practices', icon: Zap },
            { id: 'career', label: 'Career & Integration', icon: TrendingUp }
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
                color: activeTab === id ? '#f59e0b' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #f59e0b' : '2px solid transparent',
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
              {/* DevOps */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#f59e0b', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <GitBranch size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>DevOps</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Core Philosophy</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    DevOps is a culture and practice that emphasizes collaboration between development and operations teams to automate and streamline software delivery.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Primary Focus</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
                    <li>Infrastructure automation and management</li>
                    <li>Monitoring and observability</li>
                    <li>Breaking down silos between Dev and Ops</li>
                    <li>Faster, more reliable software delivery</li>
                    <li>Infrastructure as Code (IaC)</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Principles</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Automation of repetitive tasks</li>
                    <li>Continuous feedback and improvement</li>
                    <li>Shared responsibility and accountability</li>
                    <li>Fail fast, learn quickly</li>
                    <li>Measurement and monitoring</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#f59e0b', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Tools & Technologies</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus'].map(tool => (
                      <span key={tool} style={{ backgroundColor: '#f59e0b', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.875rem' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agile */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#10b981', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Users size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Agile</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Core Philosophy</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    Agile is a project management and software development approach that emphasizes iterative development, collaboration, and rapid response to change.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Primary Focus</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Iterative and incremental development</li>
                    <li>Customer collaboration and feedback</li>
                    <li>Adaptive planning and flexible response</li>
                    <li>Cross-functional team collaboration</li>
                    <li>Working software over documentation</li>
                    <li>Regular retrospectives and improvement</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Principles</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Individuals and interactions over processes</li>
                    <li>Working software over comprehensive documentation</li>
                    <li>Customer collaboration over contract negotiation</li>
                    <li>Responding to change over following a plan</li>
                    <li>Deliver working software frequently</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Frameworks & Methods</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Scrum', 'Kanban', 'SAFe', 'XP', 'Lean', 'Crystal'].map(framework => (
                      <span key={framework} style={{ backgroundColor: '#10b981', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.875rem' }}>
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Comparison */}
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Key Differences & Synergies
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  {
                    aspect: 'Scope & Focus',
                    devops: 'End-to-end software delivery pipeline, infrastructure, and operations',
                    agile: 'Software development process, project management, and team collaboration',
                    synergy: 'DevOps extends Agile beyond development to include operations and deployment',
                    color: '#3b82f6'
                  },
                  {
                    aspect: 'Primary Goal',
                    devops: 'Faster, more reliable software delivery and deployment',
                    agile: 'Adaptive development with customer satisfaction and working software',
                    synergy: 'Both aim to improve software quality and reduce time-to-market',
                    color: '#10b981'
                  },
                  {
                    aspect: 'Team Structure',
                    devops: 'Cross-functional teams including development and operations',
                    agile: 'Self-organizing, cross-functional development teams',
                    synergy: 'Both emphasize cross-functional collaboration and shared responsibility',
                    color: '#f59e0b'
                  },
                  {
                    aspect: 'Process Approach',
                    devops: 'Continuous integration, continuous deployment, automation',
                    agile: 'Iterative development, sprints, regular releases',
                    synergy: 'DevOps automation supports Agile\'s frequent delivery cycles',
                    color: '#ef4444'
                  },
                  {
                    aspect: 'Feedback Mechanism',
                    devops: 'Monitoring, alerting, performance metrics, system observability',
                    agile: 'Customer feedback, retrospectives, sprint reviews, user stories',
                    synergy: 'Combined feedback loops from users, systems, and operations',
                    color: '#8b5cf6'
                  },
                  {
                    aspect: 'Cultural Emphasis',
                    devops: 'Collaboration between traditionally separate teams (Dev/Ops)',
                    agile: 'Team empowerment, customer focus, embrace of change',
                    synergy: 'Both promote collaborative culture and continuous improvement',
                    color: '#06b6d4'
                  }
                ].map((comparison, index) => (
                  <div key={index} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: comparison.color, marginBottom: '1rem', fontSize: '1.125rem' }}>
                      {comparison.aspect}
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                        <div style={{ padding: '1rem', backgroundColor: '#1e293b', borderRadius: '6px', border: '1px solid #f59e0b40' }}>
                          <h5 style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                            DevOps Approach
                          </h5>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                            {comparison.devops}
                          </p>
                        </div>
                        <div style={{ padding: '1rem', backgroundColor: '#1e293b', borderRadius: '6px', border: '1px solid #10b98140' }}>
                          <h5 style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                            Agile Approach
                          </h5>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                            {comparison.agile}
                          </p>
                        </div>
                      </div>
                      <div style={{ padding: '1rem', backgroundColor: '#8b5cf620', borderRadius: '6px', border: '1px solid #8b5cf6' }}>
                        <h5 style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          Synergy & Integration
                        </h5>
                        <p style={{ color: '#c4b5fd', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                          {comparison.synergy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'implementation' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Implementation Strategies & Best Practices
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* DevOps Implementation */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <GitBranch size={20} style={{ marginRight: '0.5rem' }} />
                    DevOps Implementation Roadmap
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        phase: 'Phase 1: Foundation (Months 1-3)',
                        focus: 'Culture & Basic Automation',
                        initiatives: [
                          'Establish cross-functional DevOps teams',
                          'Implement version control best practices',
                          'Set up basic CI/CD pipelines',
                          'Introduce configuration management',
                          'Begin infrastructure documentation'
                        ],
                        tools: ['Git', 'Jenkins/GitLab CI', 'Ansible', 'Docker'],
                        color: '#3b82f6'
                      },
                      {
                        phase: 'Phase 2: Automation (Months 4-6)',
                        focus: 'Advanced CI/CD & Infrastructure',
                        initiatives: [
                          'Implement Infrastructure as Code (IaC)',
                          'Automate testing pipelines',
                          'Set up container orchestration',
                          'Implement monitoring and alerting',
                          'Establish deployment strategies'
                        ],
                        tools: ['Terraform', 'Kubernetes', 'Prometheus', 'Grafana'],
                        color: '#10b981'
                      },
                      {
                        phase: 'Phase 3: Optimization (Months 7-9)',
                        focus: 'Performance & Reliability',
                        initiatives: [
                          'Implement advanced monitoring',
                          'Set up log aggregation and analysis',
                          'Optimize deployment pipelines',
                          'Implement chaos engineering',
                          'Establish SLAs and SLIs'
                        ],
                        tools: ['ELK Stack', 'Chaos Monkey', 'New Relic', 'PagerDuty'],
                        color: '#f59e0b'
                      },
                      {
                        phase: 'Phase 4: Maturity (Months 10-12)',
                        focus: 'Continuous Improvement',
                        initiatives: [
                          'Implement advanced security practices',
                          'Establish DevSecOps workflows',
                          'Optimize cost management',
                          'Advanced analytics and insights',
                          'Continuous learning culture'
                        ],
                        tools: ['Security scanners', 'Cost management tools', 'ML/AI ops'],
                        color: '#ef4444'
                      }
                    ].map((phase, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${phase.color}30` }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                          <div style={{ 
                            backgroundColor: phase.color, 
                            color: 'white', 
                            borderRadius: '50%', 
                            width: '32px', 
                            height: '32px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            marginRight: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: 'bold'
                          }}>
                            {index + 1}
                          </div>
                          <div>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{phase.phase}</h5>
                            <span style={{ color: phase.color, fontSize: '0.875rem', fontWeight: '600' }}>{phase.focus}</span>
                          </div>
                        </div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                          <div>
                            <h6 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '0.875rem' }}>Key Initiatives:</h6>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {phase.initiatives.map((initiative, idx) => (
                                <li key={idx} style={{ 
                                  color: '#cbd5e1', 
                                  fontSize: '0.875rem', 
                                  marginBottom: '0.25rem',
                                  paddingLeft: '1rem',
                                  position: 'relative'
                                }}>
                                  <CheckCircle2 size={12} style={{ 
                                    position: 'absolute', 
                                    left: 0, 
                                    top: '0.25rem',
                                    color: phase.color 
                                  }} />
                                  {initiative}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '0.875rem' }}>Key Tools:</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {phase.tools.map((tool, idx) => (
                                <span key={idx} style={{ 
                                  backgroundColor: `${phase.color}20`, 
                                  color: phase.color, 
                                  padding: '0.25rem 0.5rem', 
                                  borderRadius: '12px', 
                                  fontSize: '0.75rem',
                                  border: `1px solid ${phase.color}40`
                                }}>
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agile Implementation */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Users size={20} style={{ marginRight: '0.5rem' }} />
                    Agile Implementation Framework
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                    {[
                      {
                        framework: 'Scrum Implementation',
                        description: 'Most popular Agile framework with defined roles, events, and artifacts',
                        roles: ['Product Owner', 'Scrum Master', 'Development Team'],
                        events: ['Sprint Planning', 'Daily Standups', 'Sprint Review', 'Retrospective'],
                        artifacts: ['Product Backlog', 'Sprint Backlog', 'Increment'],
                        timeline: '2-4 week sprints',
                        color: '#3b82f6'
                      },
                      {
                        framework: 'Kanban Implementation', 
                        description: 'Visual workflow management focusing on continuous delivery',
                        roles: ['Team Members', 'Service Delivery Manager', 'Service Request Manager'],
                        events: ['Daily Standup', 'Review Meetings', 'Retrospectives'],
                        artifacts: ['Kanban Board', 'WIP Limits', 'Lead Time Metrics'],
                        timeline: 'Continuous flow',
                        color: '#10b981'
                      },
                      {
                        framework: 'SAFe Implementation',
                        description: 'Scaled Agile for large organizations and multiple teams',
                        roles: ['Release Train Engineer', 'Product Manager', 'System Architect'],
                        events: ['PI Planning', 'ART Sync', 'Innovation & Planning'],
                        artifacts: ['Program Backlog', 'Team Backlog', 'System Demo'],
                        timeline: '8-12 week Program Increments',
                        color: '#f59e0b'
                      }
                    ].map((framework, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${framework.color}30` }}>
                        <h5 style={{ color: framework.color, fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                          {framework.framework}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                          {framework.description}
                        </p>
                        
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                          <div>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              Key Roles
                            </h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {framework.roles.map((role, idx) => (
                                <span key={idx} style={{ 
                                  backgroundColor: `${framework.color}20`, 
                                  color: framework.color, 
                                  padding: '0.25rem 0.5rem', 
                                  borderRadius: '12px', 
                                  fontSize: '0.75rem'
                                }}>
                                  {role}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              Events & Ceremonies
                            </h6>
                            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                              {framework.events.join(' • ')}
                            </div>
                          </div>
                          
                          <div>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              Timeline
                            </h6>
                            <span style={{ color: framework.color, fontSize: '0.875rem', fontWeight: '600' }}>
                              {framework.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration Best Practices */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    DevOps + Agile Integration Best Practices
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        practice: 'Continuous Integration in Sprints',
                        description: 'Integrate DevOps CI/CD practices within Agile sprint cycles for faster feedback',
                        benefits: ['Reduced integration issues', 'Faster bug detection', 'Improved code quality']
                      },
                      {
                        practice: 'Infrastructure as Code in Backlogs',
                        description: 'Treat infrastructure changes as user stories in the product backlog',
                        benefits: ['Version-controlled infrastructure', 'Predictable deployments', 'Reduced manual errors']
                      },
                      {
                        practice: 'Cross-functional DevOps Teams',
                        description: 'Include operations engineers in Agile development teams from the start',
                        benefits: ['Better operational awareness', 'Shared responsibility', 'Faster problem resolution']
                      },
                      {
                        practice: 'Automated Testing Pipelines',
                        description: 'Integrate automated testing into CI/CD pipelines within sprint workflows',
                        benefits: ['Continuous quality assurance', 'Faster release cycles', 'Reduced manual testing']
                      },
                      {
                        practice: 'Monitoring & Observability',
                        description: 'Use monitoring data to inform sprint planning and product decisions',
                        benefits: ['Data-driven planning', 'Proactive issue resolution', 'Better user experience']
                      },
                      {
                        practice: 'DevSecOps Integration',
                        description: 'Embed security practices throughout the Agile development lifecycle',
                        benefits: ['Security by design', 'Reduced vulnerabilities', 'Compliance automation']
                      }
                    ].map((practice, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#c4b5fd', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                          {practice.practice}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                          {practice.description}
                        </p>
                        <div>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Benefits:</h6>
                          <ul style={{ color: '#94a3b8', fontSize: '0.75rem', paddingLeft: '1rem', margin: 0 }}>
                            {practice.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
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
                Career Paths & Professional Development
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Career Paths */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Career Progression Options
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                    {[
                      {
                        path: 'DevOps Engineer Career Path',
                        roles: [
                          { title: 'Junior DevOps Engineer', salary: '$60K - $85K', experience: '0-2 years' },
                          { title: 'DevOps Engineer', salary: '$85K - $120K', experience: '2-4 years' },
                          { title: 'Senior DevOps Engineer', salary: '$120K - $160K', experience: '4-7 years' },
                          { title: 'DevOps Architect/Lead', salary: '$160K - $200K', experience: '7-10 years' },
                          { title: 'Director of DevOps', salary: '$200K - $280K', experience: '10+ years' }
                        ],
                        color: '#f59e0b'
                      },
                      {
                        path: 'Agile Professional Career Path',
                        roles: [
                          { title: 'Junior Scrum Master', salary: '$55K - $75K', experience: '0-2 years' },
                          { title: 'Scrum Master', salary: '$75K - $110K', experience: '2-4 years' },
                          { title: 'Senior Agile Coach', salary: '$110K - $150K', experience: '4-7 years' },
                          { title: 'Agile Transformation Lead', salary: '$150K - $200K', experience: '7-10 years' },
                          { title: 'Chief Agile Officer', salary: '$200K - $300K', experience: '10+ years' }
                        ],
                        color: '#10b981'
                      }
                    ].map((careerPath, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
                        <h5 style={{ color: careerPath.color, fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                          {careerPath.path}
                        </h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {careerPath.roles.map((role, roleIndex) => (
                            <div key={roleIndex} style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '6px' }}>
                              <div style={{ 
                                backgroundColor: careerPath.color, 
                                color: 'white', 
                                borderRadius: '50%', 
                                width: '24px', 
                                height: '24px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                marginRight: '1rem',
                                fontSize: '0.75rem',
                                fontWeight: 'bold'
                              }}>
                                {roleIndex + 1}
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                                  <span style={{ color: '#f1f5f9', fontSize: '0.875rem', fontWeight: '600' }}>{role.title}</span>
                                  <span style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{role.salary}</span>
                                </div>
                                <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{role.experience}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills & Certifications */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Essential Skills & Certifications
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                      {[
                        {
                          category: 'DevOps Skills',
                          technical: ['Cloud Platforms (AWS/Azure/GCP)', 'Container Technologies (Docker/K8s)', 'IaC Tools (Terraform/CloudFormation)', 'CI/CD Pipelines (Jenkins/GitLab)', 'Monitoring & Logging'],
                          soft: ['Problem-solving', 'Communication', 'Collaboration', 'Continuous learning', 'Systems thinking'],
                          certifications: ['AWS DevOps Engineer', 'Kubernetes Administrator', 'Docker Certified Associate', 'Jenkins Engineer'],
                          color: '#f59e0b'
                        },
                        {
                          category: 'Agile Skills',
                          technical: ['Agile Frameworks (Scrum/Kanban/SAFe)', 'Project Management Tools', 'User Story Writing', 'Backlog Management', 'Metrics & Reporting'],
                          soft: ['Leadership', 'Facilitation', 'Coaching', 'Conflict resolution', 'Change management'],
                          certifications: ['Certified Scrum Master', 'SAFe Agilist', 'Agile Certified Practitioner', 'Professional Scrum Product Owner'],
                          color: '#10b981'
                        }
                      ].map((skillSet, index) => (
                        <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
                          <h5 style={{ color: skillSet.color, fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>
                            {skillSet.category}
                          </h5>
                          
                          <div style={{ marginBottom: '1rem' }}>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Technical Skills:</h6>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {skillSet.technical.map((skill, idx) => (
                                <li key={idx} style={{ 
                                  color: '#cbd5e1', 
                                  fontSize: '0.875rem', 
                                  marginBottom: '0.25rem',
                                  paddingLeft: '1rem',
                                  position: 'relative'
                                }}>
                                  <CheckCircle2 size={12} style={{ 
                                    position: 'absolute', 
                                    left: 0, 
                                    top: '0.25rem',
                                    color: skillSet.color 
                                  }} />
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div style={{ marginBottom: '1rem' }}>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Soft Skills:</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {skillSet.soft.map((skill, idx) => (
                                <span key={idx} style={{ 
                                  backgroundColor: `${skillSet.color}20`, 
                                  color: skillSet.color, 
                                  padding: '0.25rem 0.5rem', 
                                  borderRadius: '12px', 
                                  fontSize: '0.75rem'
                                }}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Key Certifications:</h6>
                            <ul style={{ color: '#94a3b8', fontSize: '0.875rem', paddingLeft: '1rem', margin: 0 }}>
                              {skillSet.certifications.map((cert, idx) => (
                                <li key={idx} style={{ marginBottom: '0.25rem' }}>{cert}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Learning Roadmap */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Combined Learning Roadmap (12 Months)
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        quarter: 'Q1: Foundation',
                        devops: 'Learn Linux basics, Git, and basic scripting',
                        agile: 'Understand Agile principles and Scrum framework',
                        integration: 'Practice Agile ceremonies with DevOps mindset',
                        deliverable: 'Complete first automated deployment pipeline'
                      },
                      {
                        quarter: 'Q2: Core Skills',
                        devops: 'Master Docker, CI/CD pipelines, and cloud basics',
                        agile: 'Practice facilitation skills and user story writing',
                        integration: 'Implement CI/CD within Agile sprints',
                        deliverable: 'Lead cross-functional team project'
                      },
                      {
                        quarter: 'Q3: Advanced Practices',
                        devops: 'Learn Kubernetes, IaC, and monitoring tools',
                        agile: 'Study scaled frameworks (SAFe) and metrics',
                        integration: 'Implement DevOps practices across multiple teams',
                        deliverable: 'Design enterprise DevOps strategy'
                      },
                      {
                        quarter: 'Q4: Leadership',
                        devops: 'Focus on security, optimization, and best practices',
                        agile: 'Develop coaching and transformation skills',
                        integration: 'Lead organizational DevOps/Agile transformation',
                        deliverable: 'Present transformation results and ROI'
                      }
                    ].map((quarter, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#c4b5fd', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                          {quarter.quarter}
                        </h5>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                          <div>
                            <span style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: '600' }}>DevOps: </span>
                            <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{quarter.devops}</span>
                          </div>
                          <div>
                            <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: '600' }}>Agile: </span>
                            <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{quarter.agile}</span>
                          </div>
                          <div>
                            <span style={{ color: '#8b5cf6', fontSize: '0.75rem', fontWeight: '600' }}>Integration: </span>
                            <span style={{ color: '#c4b5fd', fontSize: '0.75rem' }}>{quarter.integration}</span>
                          </div>
                          <div>
                            <span style={{ color: '#06b6d4', fontSize: '0.75rem', fontWeight: '600' }}>Goal: </span>
                            <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{quarter.deliverable}</span>
                          </div>
                        </div>
                      </div>
                    ))}
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
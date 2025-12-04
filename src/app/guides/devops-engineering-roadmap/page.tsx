'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Server, Cloud, GitBranch, Monitor, Settings, Zap } from 'lucide-react';

export default function DevOpsEngineeringRoadmapGuide() {
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
            DevOps Engineering Roadmap
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Complete learning path to become a skilled DevOps engineer, covering infrastructure, automation, and cloud technologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'overview', label: 'Learning Path', icon: Server },
            { id: 'skills', label: 'Skills & Tools', icon: Settings },
            { id: 'roadmap', label: 'Phase Roadmap', icon: GitBranch }
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
                DevOps Engineer Career Overview
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Server size={20} style={{ color: '#3b82f6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#3b82f6', margin: 0 }}>What is DevOps?</h4>
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    DevOps bridges development and operations, focusing on automation, collaboration, and continuous improvement to deliver software faster and more reliably.
                  </p>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Zap size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#8b5cf6', margin: 0 }}>Key Responsibilities</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>CI/CD pipeline management</li>
                    <li>Infrastructure automation</li>
                    <li>Cloud platform management</li>
                    <li>Monitoring and alerting</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Monitor size={20} style={{ color: '#10b981', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#10b981', margin: 0 }}>Career Prospects</h4>
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    High demand across industries with average salaries ranging from $85,000 to $150,000+. Strong growth potential into architecture and leadership roles.
                  </p>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Learning Timeline</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {[
                    { phase: 'Foundation', duration: '2-3 months', focus: 'Linux, networking, scripting basics' },
                    { phase: 'Automation', duration: '3-4 months', focus: 'CI/CD, configuration management' },
                    { phase: 'Cloud Platforms', duration: '4-6 months', focus: 'AWS/Azure/GCP, containerization' },
                    { phase: 'Advanced Topics', duration: '6+ months', focus: 'Kubernetes, monitoring, security' }
                  ].map(({ phase, duration, focus }) => (
                    <div key={phase} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                      <h5 style={{ color: '#3b82f6', margin: '0 0 0.5rem 0', fontSize: '0.875rem', fontWeight: '600' }}>{phase}</h5>
                      <p style={{ color: '#10b981', fontSize: '0.75rem', margin: '0 0 0.5rem 0', fontWeight: '500' }}>{duration}</p>
                      <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>{focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Essential DevOps Skills & Tools
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    category: 'Operating Systems & Networking',
                    color: '#3b82f6',
                    skills: [
                      { name: 'Linux Administration', level: 'Essential', tools: ['Ubuntu', 'CentOS', 'RHEL', 'Shell scripting'] },
                      { name: 'Networking Fundamentals', level: 'Essential', tools: ['TCP/IP', 'DNS', 'Load Balancers', 'Firewalls'] },
                      { name: 'Windows Server', level: 'Optional', tools: ['PowerShell', 'IIS', 'Active Directory'] }
                    ]
                  },
                  {
                    category: 'Version Control & CI/CD',
                    color: '#8b5cf6',
                    skills: [
                      { name: 'Version Control', level: 'Essential', tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
                      { name: 'CI/CD Pipelines', level: 'Essential', tools: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI'] },
                      { name: 'Build Tools', level: 'Important', tools: ['Maven', 'Gradle', 'npm', 'Webpack'] }
                    ]
                  },
                  {
                    category: 'Containerization & Orchestration',
                    color: '#10b981',
                    skills: [
                      { name: 'Containerization', level: 'Essential', tools: ['Docker', 'Docker Compose', 'Container Registries'] },
                      { name: 'Container Orchestration', level: 'Essential', tools: ['Kubernetes', 'Docker Swarm', 'OpenShift'] },
                      { name: 'Service Mesh', level: 'Advanced', tools: ['Istio', 'Linkerd', 'Consul Connect'] }
                    ]
                  },
                  {
                    category: 'Cloud Platforms',
                    color: '#f59e0b',
                    skills: [
                      { name: 'Public Cloud', level: 'Essential', tools: ['AWS', 'Azure', 'Google Cloud Platform'] },
                      { name: 'Infrastructure as Code', level: 'Essential', tools: ['Terraform', 'CloudFormation', 'Pulumi'] },
                      { name: 'Serverless Computing', level: 'Important', tools: ['Lambda', 'Azure Functions', 'Cloud Functions'] }
                    ]
                  },
                  {
                    category: 'Configuration Management',
                    color: '#ef4444',
                    skills: [
                      { name: 'Config Management', level: 'Essential', tools: ['Ansible', 'Puppet', 'Chef', 'SaltStack'] },
                      { name: 'Secrets Management', level: 'Important', tools: ['HashiCorp Vault', 'AWS Secrets Manager', 'Azure Key Vault'] },
                      { name: 'Policy as Code', level: 'Advanced', tools: ['Open Policy Agent', 'AWS Config', 'Sentinel'] }
                    ]
                  },
                  {
                    category: 'Monitoring & Observability',
                    color: '#06b6d4',
                    skills: [
                      { name: 'Monitoring Tools', level: 'Essential', tools: ['Prometheus', 'Grafana', 'Datadog', 'New Relic'] },
                      { name: 'Log Management', level: 'Essential', tools: ['ELK Stack', 'Splunk', 'Fluentd', 'CloudWatch'] },
                      { name: 'APM & Tracing', level: 'Important', tools: ['Jaeger', 'Zipkin', 'APM tools', 'OpenTelemetry'] }
                    ]
                  }
                ].map(({ category, color, skills }) => (
                  <div key={category} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: color, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                      {category}
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {skills.map(({ name, level, tools }) => (
                        <div key={name} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '500' }}>{name}</h5>
                            <span style={{ 
                              backgroundColor: level === 'Essential' ? '#10b981' : level === 'Important' ? '#f59e0b' : '#6366f1',
                              color: 'white',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}>
                              {level}
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {tools.map(tool => (
                              <span key={tool} style={{ 
                                backgroundColor: `${color}20`,
                                color: color,
                                padding: '0.25rem 0.5rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem'
                              }}>
                                {tool}
                              </span>
                            ))}
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
                DevOps Learning Roadmap by Phase
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    phase: 'Phase 1: Foundation (Months 1-3)',
                    color: '#3b82f6',
                    description: 'Build fundamental system administration and scripting skills',
                    topics: [
                      { topic: 'Linux System Administration', subtopics: ['File system navigation', 'Process management', 'User permissions', 'Package management'], duration: '3-4 weeks' },
                      { topic: 'Shell Scripting', subtopics: ['Bash scripting', 'Text processing', 'Cron jobs', 'Environment variables'], duration: '2-3 weeks' },
                      { topic: 'Networking Basics', subtopics: ['TCP/IP fundamentals', 'DNS configuration', 'Firewall rules', 'SSH management'], duration: '2-3 weeks' },
                      { topic: 'Version Control', subtopics: ['Git fundamentals', 'Branching strategies', 'GitHub workflow', 'Collaboration'], duration: '2 weeks' }
                    ]
                  },
                  {
                    phase: 'Phase 2: Automation & CI/CD (Months 4-6)',
                    color: '#8b5cf6',
                    description: 'Learn automation tools and continuous integration/deployment practices',
                    topics: [
                      { topic: 'CI/CD Fundamentals', subtopics: ['Pipeline concepts', 'Jenkins setup', 'GitHub Actions', 'Build automation'], duration: '3-4 weeks' },
                      { topic: 'Configuration Management', subtopics: ['Ansible playbooks', 'Infrastructure automation', 'Idempotency', 'Inventory management'], duration: '3-4 weeks' },
                      { topic: 'Containerization', subtopics: ['Docker fundamentals', 'Dockerfile creation', 'Docker Compose', 'Registry management'], duration: '3-4 weeks' },
                      { topic: 'Testing & Quality', subtopics: ['Automated testing', 'Code quality gates', 'Security scanning', 'Performance testing'], duration: '2 weeks' }
                    ]
                  },
                  {
                    phase: 'Phase 3: Cloud & Orchestration (Months 7-10)',
                    color: '#10b981',
                    description: 'Master cloud platforms and container orchestration',
                    topics: [
                      { topic: 'Cloud Platform (AWS/Azure)', subtopics: ['Compute services', 'Storage solutions', 'Networking', 'IAM & security'], duration: '4-6 weeks' },
                      { topic: 'Infrastructure as Code', subtopics: ['Terraform basics', 'State management', 'Modules', 'Best practices'], duration: '3-4 weeks' },
                      { topic: 'Kubernetes', subtopics: ['Cluster architecture', 'Deployments & services', 'ConfigMaps & secrets', 'Helm charts'], duration: '4-6 weeks' },
                      { topic: 'Cloud Native Tools', subtopics: ['Service discovery', 'Load balancing', 'Auto-scaling', 'Cloud databases'], duration: '2-3 weeks' }
                    ]
                  },
                  {
                    phase: 'Phase 4: Advanced Topics (Months 11+)',
                    color: '#f59e0b',
                    description: 'Specialize in monitoring, security, and advanced DevOps practices',
                    topics: [
                      { topic: 'Monitoring & Observability', subtopics: ['Prometheus setup', 'Grafana dashboards', 'Log aggregation', 'Alerting strategies'], duration: '3-4 weeks' },
                      { topic: 'DevSecOps', subtopics: ['Security scanning', 'Vulnerability management', 'Compliance automation', 'Secrets management'], duration: '3-4 weeks' },
                      { topic: 'Advanced Kubernetes', subtopics: ['Custom resources', 'Operators', 'Service mesh', 'Multi-cluster management'], duration: '4-6 weeks' },
                      { topic: 'SRE Practices', subtopics: ['SLA/SLO/SLI', 'Error budgets', 'Incident response', 'Chaos engineering'], duration: 'Ongoing' }
                    ]
                  }
                ].map(({ phase, color, description, topics }) => (
                  <div key={phase} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${color}40` }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: color, marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
                        {phase}
                      </h4>
                      <p style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{description}</p>
                    </div>
                    
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {topics.map(({ topic, subtopics, duration }) => (
                        <div key={topic} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '500' }}>{topic}</h5>
                            <span style={{ color: color, fontSize: '0.75rem', fontWeight: '500' }}>{duration}</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                            {subtopics.map(subtopic => (
                              <div key={subtopic} style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '6px', height: '6px', backgroundColor: color, borderRadius: '50%', marginRight: '0.5rem' }} />
                                <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{subtopic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Path */}
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Recommended Certification Path
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {[
                  { provider: 'AWS', certs: ['Cloud Practitioner', 'Solutions Architect Associate', 'DevOps Engineer Professional'], color: '#ff9900' },
                  { provider: 'Azure', certs: ['AZ-900 Fundamentals', 'AZ-104 Administrator', 'AZ-400 DevOps Solutions'], color: '#0078d4' },
                  { provider: 'Kubernetes', certs: ['CKA (Certified Kubernetes Administrator)', 'CKAD (Certified Kubernetes Application Developer)'], color: '#326ce5' },
                  { provider: 'HashiCorp', certs: ['Terraform Associate', 'Vault Associate'], color: '#7b42bc' }
                ].map(({ provider, certs, color }) => (
                  <div key={provider} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: color, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>{provider}</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {certs.map((cert, index) => (
                        <div key={cert} style={{ display: 'flex', alignItems: 'center', padding: '0.5rem', backgroundColor: '#1e293b', borderRadius: '4px' }}>
                          <div style={{ backgroundColor: color, color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.75rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
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
        )}
      </div>
    </div>
  );
}
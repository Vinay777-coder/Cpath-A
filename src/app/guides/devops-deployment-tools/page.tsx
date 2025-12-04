'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Package, Zap, Target, TrendingUp, CheckCircle2, Server } from 'lucide-react';

export default function DevOpsDeploymentToolsGuide() {
  const [activeTab, setActiveTab] = useState('cicd');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/guides" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', marginBottom: '1rem', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Back to Guides
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            DevOps Deployment Tools
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Comprehensive guide to deployment tools covering CI/CD pipelines, containerization, orchestration, and cloud platforms for modern DevOps workflows.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'cicd', label: 'CI/CD Tools', icon: Zap },
            { id: 'containers', label: 'Containers & Orchestration', icon: Package },
            { id: 'cloud', label: 'Cloud & Infrastructure', icon: Server }
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
        {activeTab === 'cicd' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Continuous Integration/Continuous Deployment Tools
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Popular CI/CD Platforms */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                  {[
                    {
                      tool: 'Jenkins',
                      category: 'Open Source CI/CD',
                      description: 'The most popular open-source automation server with extensive plugin ecosystem',
                      pros: ['Highly customizable', 'Huge plugin ecosystem', 'Self-hosted control', 'Strong community'],
                      cons: ['Complex setup', 'Maintenance overhead', 'UI could be better', 'Security management'],
                      useCases: ['Enterprise environments', 'Complex workflows', 'On-premise deployments'],
                      pricing: 'Free (self-hosted)',
                      popularity: '95%',
                      color: '#3b82f6'
                    },
                    {
                      tool: 'GitLab CI/CD',
                      category: 'Integrated DevOps',
                      description: 'Built-in CI/CD as part of GitLab\'s complete DevOps platform',
                      pros: ['Integrated with Git', 'Built-in container registry', 'Auto DevOps features', 'Easy YAML config'],
                      cons: ['Can be resource intensive', 'Learning curve for advanced features', 'GitLab ecosystem lock-in'],
                      useCases: ['GitLab users', 'Container-native apps', 'Auto DevOps workflows'],
                      pricing: 'Free tier + paid plans',
                      popularity: '85%',
                      color: '#10b981'
                    },
                    {
                      tool: 'GitHub Actions',
                      category: 'Cloud-Native CI/CD',
                      description: 'Native CI/CD for GitHub with marketplace of pre-built actions',
                      pros: ['GitHub integration', 'Marketplace actions', 'Matrix builds', 'Easy workflow syntax'],
                      cons: ['GitHub dependency', 'Cost for private repos', 'Limited self-hosted features'],
                      useCases: ['GitHub projects', 'Open source', 'Cloud-native applications'],
                      pricing: 'Free for public repos',
                      popularity: '80%',
                      color: '#f59e0b'
                    },
                    {
                      tool: 'Azure DevOps',
                      category: 'Microsoft Ecosystem',
                      description: 'Microsoft\'s comprehensive DevOps platform with integrated CI/CD',
                      pros: ['Microsoft integration', 'Comprehensive tooling', 'Hybrid cloud support', 'Enterprise features'],
                      cons: ['Microsoft ecosystem focus', 'Complex pricing', 'Learning curve'],
                      useCases: ['Microsoft shops', 'Enterprise environments', '.NET applications'],
                      pricing: 'Free tier + usage-based',
                      popularity: '70%',
                      color: '#ef4444'
                    },
                    {
                      tool: 'CircleCI',
                      category: 'Cloud CI/CD',
                      description: 'Cloud-first CI/CD platform optimized for speed and developer experience',
                      pros: ['Fast builds', 'Docker support', 'Easy configuration', 'Good parallelization'],
                      cons: ['Pricing can get expensive', 'Limited self-hosted options', 'Vendor lock-in'],
                      useCases: ['Startups', 'Docker workflows', 'Fast iteration cycles'],
                      pricing: 'Free tier + usage plans',
                      popularity: '65%',
                      color: '#8b5cf6'
                    },
                    {
                      tool: 'AWS CodePipeline',
                      category: 'AWS Native',
                      description: 'Fully managed CI/CD service integrated with AWS ecosystem',
                      pros: ['AWS integration', 'Managed service', 'Pay per use', 'Scalable'],
                      cons: ['AWS lock-in', 'Limited features vs competitors', 'Complex for simple workflows'],
                      useCases: ['AWS-heavy environments', 'Serverless apps', 'AWS native workflows'],
                      pricing: 'Pay per pipeline execution',
                      popularity: '60%',
                      color: '#06b6d4'
                    }
                  ].map((tool, index) => (
                    <div key={index} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${tool.color}30` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                          <h4 style={{ color: tool.color, fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                            {tool.tool}
                          </h4>
                          <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{tool.category}</span>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{tool.pricing}</div>
                          <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Popularity: {tool.popularity}</div>
                        </div>
                      </div>
                      
                      <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                        {tool.description}
                      </p>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <h5 style={{ color: '#10b981', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Pros:</h5>
                          <ul style={{ color: '#cbd5e1', fontSize: '0.75rem', paddingLeft: '1rem', margin: 0 }}>
                            {tool.pros.map((pro, idx) => (
                              <li key={idx} style={{ marginBottom: '0.25rem' }}>{pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Cons:</h5>
                          <ul style={{ color: '#cbd5e1', fontSize: '0.75rem', paddingLeft: '1rem', margin: 0 }}>
                            {tool.cons.map((con, idx) => (
                              <li key={idx} style={{ marginBottom: '0.25rem' }}>{con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Best Use Cases:</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                          {tool.useCases.map((useCase, idx) => (
                            <span key={idx} style={{ 
                              backgroundColor: `${tool.color}20`, 
                              color: tool.color, 
                              padding: '0.25rem 0.5rem', 
                              borderRadius: '12px', 
                              fontSize: '0.75rem'
                            }}>
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CI/CD Pipeline Best Practices */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    CI/CD Pipeline Best Practices
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        practice: 'Pipeline as Code',
                        description: 'Define pipelines in version-controlled configuration files',
                        benefits: ['Version control', 'Reproducibility', 'Code review process', 'Documentation'],
                        example: 'Jenkinsfile, .gitlab-ci.yml, GitHub Actions YAML'
                      },
                      {
                        practice: 'Fast Feedback Loops',
                        description: 'Optimize for quick build and test cycles with early failure detection',
                        benefits: ['Faster development', 'Early bug detection', 'Developer productivity', 'Reduced costs'],
                        example: 'Unit tests first, parallel execution, fail-fast strategies'
                      },
                      {
                        practice: 'Environment Parity',
                        description: 'Maintain consistency across development, staging, and production',
                        benefits: ['Reduced deployment issues', 'Predictable releases', 'Easier debugging', 'Confidence'],
                        example: 'Infrastructure as Code, containerization, environment templates'
                      },
                      {
                        practice: 'Automated Testing',
                        description: 'Comprehensive test automation throughout the pipeline',
                        benefits: ['Quality assurance', 'Regression prevention', 'Confidence in releases', 'Documentation'],
                        example: 'Unit, integration, e2e, performance, security testing'
                      },
                      {
                        practice: 'Security Integration',
                        description: 'Embed security scanning and compliance checks in pipelines',
                        benefits: ['Shift-left security', 'Compliance automation', 'Vulnerability detection', 'Risk reduction'],
                        example: 'SAST, DAST, dependency scanning, compliance checks'
                      },
                      {
                        practice: 'Monitoring & Observability',
                        description: 'Comprehensive monitoring of pipeline performance and outcomes',
                        benefits: ['Performance insights', 'Bottleneck identification', 'Reliability tracking', 'Optimization'],
                        example: 'Build metrics, deployment tracking, performance monitoring'
                      }
                    ].map((practice, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#06b6d4', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                          {practice.practice}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                          {practice.description}
                        </p>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Benefits:</h6>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {practice.benefits.map((benefit, idx) => (
                              <span key={idx} style={{ 
                                backgroundColor: '#10b98120', 
                                color: '#10b981', 
                                padding: '0.25rem 0.5rem', 
                                borderRadius: '12px', 
                                fontSize: '0.75rem'
                              }}>
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Example:</h6>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', lineHeight: '1.4' }}>
                            {practice.example}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'containers' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Containerization & Orchestration Tools
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Container Technologies */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Container Platforms
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                    {[
                      {
                        tool: 'Docker',
                        type: 'Container Runtime',
                        description: 'The most popular containerization platform that packages applications with their dependencies',
                        features: [
                          'Container image building and management',
                          'Docker Compose for multi-container apps',
                          'Docker Swarm for basic orchestration',
                          'Extensive registry ecosystem (Docker Hub)',
                          'Cross-platform compatibility'
                        ],
                        useCases: ['Application containerization', 'Development environments', 'Microservices packaging'],
                        commands: [
                          'docker build -t myapp .',
                          'docker run -p 8080:80 myapp',
                          'docker-compose up -d'
                        ],
                        color: '#3b82f6'
                      },
                      {
                        tool: 'Podman',
                        type: 'Daemonless Container Engine',
                        description: 'Docker-compatible container engine that runs without a daemon and supports rootless containers',
                        features: [
                          'Daemonless architecture',
                          'Rootless container support',
                          'Docker CLI compatibility',
                          'Built-in systemd integration',
                          'Pod concept from Kubernetes'
                        ],
                        useCases: ['Security-focused environments', 'Systemd integration', 'Rootless deployments'],
                        commands: [
                          'podman build -t myapp .',
                          'podman run --rm -p 8080:80 myapp',
                          'podman generate systemd myapp'
                        ],
                        color: '#10b981'
                      },
                      {
                        tool: 'containerd',
                        type: 'Container Runtime',
                        description: 'Industry-standard core container runtime, used by Kubernetes and Docker',
                        features: [
                          'OCI-compliant runtime',
                          'Image management',
                          'Snapshot management',
                          'Network and storage plugins',
                          'gRPC API interface'
                        ],
                        useCases: ['Kubernetes runtime', 'Custom container solutions', 'Cloud-native platforms'],
                        commands: [
                          'ctr images pull docker.io/library/nginx:latest',
                          'ctr run --rm docker.io/library/nginx:latest nginx',
                          'ctr containers list'
                        ],
                        color: '#f59e0b'
                      }
                    ].map((tool, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${tool.color}30` }}>
                        <div style={{ marginBottom: '1rem' }}>
                          <h5 style={{ color: tool.color, fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                            {tool.tool}
                          </h5>
                          <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{tool.type}</span>
                        </div>
                        
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                          {tool.description}
                        </p>
                        
                        <div style={{ marginBottom: '1rem' }}>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Key Features:</h6>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {tool.features.map((feature, idx) => (
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
                                  color: tool.color 
                                }} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Common Commands:</h6>
                          <div style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                            {tool.commands.map((cmd, idx) => (
                              <div key={idx} style={{ color: '#e2e8f0', marginBottom: '0.25rem' }}>
                                $ {cmd}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Use Cases:</h6>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {tool.useCases.map((useCase, idx) => (
                              <span key={idx} style={{ 
                                backgroundColor: `${tool.color}20`, 
                                color: tool.color, 
                                padding: '0.25rem 0.5rem', 
                                borderRadius: '12px', 
                                fontSize: '0.75rem'
                              }}>
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Orchestration Platforms */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Container Orchestration Platforms
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                      {
                        tool: 'Kubernetes',
                        category: 'Enterprise Orchestration',
                        description: 'The de facto standard for container orchestration with comprehensive features for production workloads',
                        strengths: [
                          'Comprehensive orchestration features',
                          'Huge ecosystem and community',
                          'Multi-cloud and hybrid support',
                          'Declarative configuration',
                          'Auto-scaling and self-healing'
                        ],
                        challenges: [
                          'Complex setup and configuration',
                          'Steep learning curve',
                          'Resource overhead',
                          'Ongoing maintenance requirements'
                        ],
                        components: ['Pods', 'Services', 'Deployments', 'ConfigMaps', 'Ingress', 'Persistent Volumes'],
                        managedServices: ['EKS (AWS)', 'GKE (Google)', 'AKS (Azure)', 'OpenShift (Red Hat)'],
                        color: '#10b981'
                      },
                      {
                        tool: 'Docker Swarm',
                        category: 'Lightweight Orchestration',
                        description: 'Docker\'s native orchestration solution that\'s simpler than Kubernetes but less feature-rich',
                        strengths: [
                          'Simple setup and configuration',
                          'Built into Docker',
                          'Easy to learn and use',
                          'Good for small to medium deployments',
                          'Automatic load balancing'
                        ],
                        challenges: [
                          'Limited advanced features',
                          'Smaller ecosystem',
                          'Less suitable for complex workloads',
                          'Limited third-party integrations'
                        ],
                        components: ['Services', 'Tasks', 'Nodes', 'Stacks', 'Secrets', 'Configs'],
                        managedServices: ['Docker Cloud (deprecated)', 'Some cloud providers offer basic support'],
                        color: '#3b82f6'
                      },
                      {
                        tool: 'Nomad',
                        category: 'Multi-Workload Orchestration',
                        description: 'HashiCorp\'s orchestrator that supports containers, VMs, and standalone applications',
                        strengths: [
                          'Multi-workload support (not just containers)',
                          'Simpler than Kubernetes',
                          'Good performance and efficiency',
                          'Integrates with HashiCorp stack',
                          'Single binary deployment'
                        ],
                        challenges: [
                          'Smaller ecosystem than Kubernetes',
                          'Less third-party tooling',
                          'Fewer managed service options',
                          'Learning curve for HashiCorp ecosystem'
                        ],
                        components: ['Jobs', 'Tasks', 'Allocations', 'Nodes', 'Datacenters'],
                        managedServices: ['HCP Nomad (HashiCorp Cloud)', 'Limited cloud provider options'],
                        color: '#8b5cf6'
                      }
                    ].map((platform, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${platform.color}30` }}>
                        <div style={{ marginBottom: '1rem' }}>
                          <h5 style={{ color: platform.color, fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                            {platform.tool}
                          </h5>
                          <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{platform.category}</span>
                        </div>
                        
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                          {platform.description}
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                          <div>
                            <h6 style={{ color: '#10b981', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Strengths:</h6>
                            <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', paddingLeft: '1rem', margin: 0 }}>
                              {platform.strengths.map((strength, idx) => (
                                <li key={idx} style={{ marginBottom: '0.25rem' }}>{strength}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Challenges:</h6>
                            <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', paddingLeft: '1rem', margin: 0 }}>
                              {platform.challenges.map((challenge, idx) => (
                                <li key={idx} style={{ marginBottom: '0.25rem' }}>{challenge}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Core Components:</h6>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {platform.components.map((component, idx) => (
                              <span key={idx} style={{ 
                                backgroundColor: `${platform.color}20`, 
                                color: platform.color, 
                                padding: '0.25rem 0.5rem', 
                                borderRadius: '12px', 
                                fontSize: '0.75rem'
                              }}>
                                {component}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Managed Services:</h6>
                          <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.4' }}>
                            {platform.managedServices.join(', ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cloud' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Cloud Platforms & Infrastructure Tools
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Cloud Deployment Services */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Cloud Deployment Services
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                    {[
                      {
                        provider: 'AWS',
                        services: {
                          'Compute': ['EC2', 'ECS', 'EKS', 'Fargate', 'Lambda', 'Batch'],
                          'Deployment': ['CodeDeploy', 'CodePipeline', 'CodeBuild', 'Elastic Beanstalk'],
                          'Storage': ['S3', 'EFS', 'EBS'],
                          'Network': ['VPC', 'ALB/NLB', 'CloudFront', 'Route 53']
                        },
                        strengths: ['Comprehensive service catalog', 'Market leader', 'Strong enterprise features', 'Global presence'],
                        pricing: 'Pay-as-you-go, complex pricing model',
                        color: '#f59e0b'
                      },
                      {
                        provider: 'Azure',
                        services: {
                          'Compute': ['Virtual Machines', 'Container Instances', 'AKS', 'Functions', 'Batch'],
                          'Deployment': ['Azure DevOps', 'Azure Pipelines', 'App Service', 'ARM Templates'],
                          'Storage': ['Blob Storage', 'Files', 'Disks'],
                          'Network': ['Virtual Network', 'Load Balancer', 'CDN', 'DNS']
                        },
                        strengths: ['Microsoft integration', 'Hybrid cloud focus', 'Enterprise-friendly', 'Active Directory integration'],
                        pricing: 'Competitive pricing, good Windows licensing',
                        color: '#3b82f6'
                      },
                      {
                        provider: 'Google Cloud',
                        services: {
                          'Compute': ['Compute Engine', 'Cloud Run', 'GKE', 'Cloud Functions', 'Batch'],
                          'Deployment': ['Cloud Build', 'Cloud Deploy', 'App Engine', 'Deployment Manager'],
                          'Storage': ['Cloud Storage', 'Persistent Disks', 'Filestore'],
                          'Network': ['VPC', 'Load Balancing', 'CDN', 'Cloud DNS']
                        },
                        strengths: ['Innovation focus', 'Kubernetes leadership', 'AI/ML capabilities', 'Competitive pricing'],
                        pricing: 'Sustained use discounts, per-second billing',
                        color: '#10b981'
                      }
                    ].map((cloud, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${cloud.color}30` }}>
                        <h5 style={{ color: cloud.color, fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                          {cloud.provider}
                        </h5>
                        
                        <div style={{ marginBottom: '1rem' }}>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.75rem' }}>Key Services:</h6>
                          {Object.entries(cloud.services).map(([category, services]) => (
                            <div key={category} style={{ marginBottom: '0.5rem' }}>
                              <span style={{ color: cloud.color, fontSize: '0.75rem', fontWeight: '600' }}>{category}: </span>
                              <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{services.join(', ')}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Strengths:</h6>
                          <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', paddingLeft: '1rem', margin: 0 }}>
                            {cloud.strengths.map((strength, idx) => (
                              <li key={idx} style={{ marginBottom: '0.25rem' }}>{strength}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Pricing Model:</h6>
                          <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.4' }}>
                            {cloud.pricing}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Infrastructure as Code Tools */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Infrastructure as Code (IaC) Tools
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        tool: 'Terraform',
                        type: 'Multi-Cloud IaC',
                        description: 'HashiCorp\'s tool for building, changing, and versioning infrastructure across multiple cloud providers',
                        features: ['Multi-cloud support', 'State management', 'Plan and apply workflow', 'Module system', 'Provider ecosystem'],
                        example: 'Define AWS, Azure, and GCP resources in same configuration',
                        color: '#8b5cf6'
                      },
                      {
                        tool: 'AWS CloudFormation',
                        type: 'AWS Native IaC',
                        description: 'AWS\'s native infrastructure provisioning service using JSON/YAML templates',
                        features: ['AWS integration', 'Stack management', 'Rollback capabilities', 'Drift detection', 'Change sets'],
                        example: 'Deploy entire AWS environments from templates',
                        color: '#f59e0b'
                      },
                      {
                        tool: 'Azure ARM Templates',
                        type: 'Azure Native IaC',
                        description: 'Azure\'s JSON-based templates for deploying and managing Azure resources',
                        features: ['Azure integration', 'Incremental deployments', 'Linked templates', 'Parameter files', 'What-if operations'],
                        example: 'Deploy Azure resource groups and services declaratively',
                        color: '#3b82f6'
                      },
                      {
                        tool: 'Pulumi',
                        type: 'Modern IaC',
                        description: 'Infrastructure as code using familiar programming languages like Python, TypeScript, Go',
                        features: ['Multiple languages', 'Real programming constructs', 'State management', 'Cloud native', 'Testing support'],
                        example: 'Write infrastructure code in Python or JavaScript',
                        color: '#06b6d4'
                      },
                      {
                        tool: 'Ansible',
                        type: 'Configuration Management + IaC',
                        description: 'Agentless automation tool that can manage both configuration and infrastructure provisioning',
                        features: ['Agentless', 'YAML playbooks', 'Idempotent operations', 'Large module library', 'Multi-platform'],
                        example: 'Configure servers and provision cloud resources',
                        color: '#ef4444'
                      },
                      {
                        tool: 'CDK (AWS/Azure)',
                        type: 'Code-First IaC',
                        description: 'Cloud Development Kits that generate CloudFormation/ARM from high-level programming languages',
                        features: ['Programming language support', 'Type safety', 'IDE support', 'Construct libraries', 'Best practices built-in'],
                        example: 'Define AWS infrastructure using TypeScript classes',
                        color: '#10b981'
                      }
                    ].map((tool, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', border: `1px solid ${tool.color}30` }}>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <h5 style={{ color: tool.color, fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                            {tool.tool}
                          </h5>
                          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{tool.type}</span>
                        </div>
                        
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                          {tool.description}
                        </p>
                        
                        <div style={{ marginBottom: '0.75rem' }}>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.5rem' }}>Key Features:</h6>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {tool.features.map((feature, idx) => (
                              <span key={idx} style={{ 
                                backgroundColor: `${tool.color}20`, 
                                color: tool.color, 
                                padding: '0.25rem 0.5rem', 
                                borderRadius: '12px', 
                                fontSize: '0.75rem'
                              }}>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Use Case:</h6>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', lineHeight: '1.4' }}>
                            {tool.example}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tool Selection Guide */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Tool Selection Decision Matrix
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        scenario: 'Small Team, Simple Applications',
                        recommendations: {
                          'CI/CD': 'GitHub Actions or GitLab CI',
                          'Containers': 'Docker + Docker Compose',
                          'Orchestration': 'Docker Swarm or managed services',
                          'Infrastructure': 'Cloud provider templates or Terraform',
                          'Monitoring': 'Built-in cloud monitoring'
                        },
                        reasoning: 'Focus on simplicity and fast time-to-value'
                      },
                      {
                        scenario: 'Medium Team, Microservices',
                        recommendations: {
                          'CI/CD': 'Jenkins or GitLab CI with advanced pipelines',
                          'Containers': 'Docker with private registries',
                          'Orchestration': 'Kubernetes (managed service)',
                          'Infrastructure': 'Terraform + cloud-specific tools',
                          'Monitoring': 'Prometheus + Grafana or cloud-native solutions'
                        },
                        reasoning: 'Balance between features and complexity'
                      },
                      {
                        scenario: 'Enterprise, Complex Workloads',
                        recommendations: {
                          'CI/CD': 'Jenkins with enterprise plugins or Azure DevOps',
                          'Containers': 'Docker + security scanning + governance',
                          'Orchestration': 'Kubernetes with service mesh (Istio)',
                          'Infrastructure': 'Terraform + policy as code + multi-cloud',
                          'Monitoring': 'Full observability stack with APM'
                        },
                        reasoning: 'Comprehensive features, security, and governance'
                      },
                      {
                        scenario: 'Startup, Fast Iteration',
                        recommendations: {
                          'CI/CD': 'GitHub Actions or CircleCI',
                          'Containers': 'Docker with cloud container services',
                          'Orchestration': 'Cloud container services (Fargate, Cloud Run)',
                          'Infrastructure': 'Cloud provider CDK or Pulumi',
                          'Monitoring': 'Cloud-native monitoring and logging'
                        },
                        reasoning: 'Speed, managed services, and developer productivity'
                      }
                    ].map((scenario, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#c4b5fd', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                          {scenario.scenario}
                        </h5>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '0.75rem' }}>
                          {Object.entries(scenario.recommendations).map(([category, recommendation]) => (
                            <div key={category}>
                              <span style={{ color: '#8b5cf6', fontSize: '0.75rem', fontWeight: '600' }}>{category}: </span>
                              <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{recommendation}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <span style={{ color: '#f1f5f9', fontSize: '0.75rem', fontWeight: '600' }}>Reasoning: </span>
                          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{scenario.reasoning}</span>
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
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, TestTube, Cog, TrendingUp, CheckCircle2, GitBranch, Target, Shield } from 'lucide-react';

export default function DevOpsTestingStrategiesGuide() {
  const [activeTab, setActiveTab] = useState('strategies');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/guides" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', marginBottom: '1rem', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Back to Guides
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            DevOps Testing Strategies
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Master comprehensive testing approaches in DevOps environments, from automated testing pipelines to continuous quality assurance and deployment validation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'strategies', label: 'Testing Strategies', icon: TestTube },
            { id: 'automation', label: 'Test Automation', icon: Cog },
            { id: 'implementation', label: 'Implementation Guide', icon: TrendingUp }
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
                color: activeTab === id ? '#10b981' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #10b981' : '2px solid transparent',
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
        {activeTab === 'strategies' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Comprehensive Testing Strategies for DevOps
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Testing Pyramid */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Target size={20} style={{ marginRight: '0.5rem' }} />
                    Testing Pyramid & Strategy Levels
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                      {
                        level: 'Unit Tests',
                        percentage: '70%',
                        scope: 'Individual Components',
                        characteristics: ['Fast execution (< 1ms)', 'Isolated and independent', 'High code coverage', 'Developer-centric'],
                        tools: ['Jest', 'JUnit', 'pytest', 'Mocha', 'xUnit'],
                        color: '#10b981'
                      },
                      {
                        level: 'Integration Tests',
                        percentage: '20%',
                        scope: 'Component Interactions',
                        characteristics: ['Moderate execution time', 'Test API contracts', 'Database interactions', 'Service communications'],
                        tools: ['TestContainers', 'Postman', 'REST Assured', 'Cypress API', 'Pact'],
                        color: '#3b82f6'
                      },
                      {
                        level: 'End-to-End Tests',
                        percentage: '10%',
                        scope: 'Complete User Workflows',
                        characteristics: ['Slow but comprehensive', 'Real browser testing', 'Critical user paths', 'Production-like environment'],
                        tools: ['Selenium', 'Cypress', 'Playwright', 'WebDriver', 'TestCafe'],
                        color: '#f59e0b'
                      }
                    ].map((level, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: '1rem', 
                        backgroundColor: '#1e293b', 
                        borderRadius: '8px',
                        border: `2px solid ${level.color}`
                      }}>
                        <div style={{ 
                          width: '60px', 
                          height: '60px', 
                          backgroundColor: level.color, 
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          color: 'white'
                        }}>
                          {level.percentage}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h5 style={{ color: level.color, marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                            {level.level} - {level.scope}
                          </h5>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>Characteristics:</strong> {level.characteristics.join(' • ')}
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                            <strong>Tools:</strong> {level.tools.join(', ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testing Types */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Shield size={20} style={{ marginRight: '0.5rem' }} />
                    Essential Testing Types in DevOps
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        type: 'Functional Testing',
                        description: 'Validates application behavior against requirements',
                        subtypes: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing'],
                        automation: 'High Priority',
                        color: '#10b981'
                      },
                      {
                        type: 'Performance Testing',
                        description: 'Ensures application meets performance criteria under load',
                        subtypes: ['Load Testing', 'Stress Testing', 'Spike Testing', 'Volume Testing'],
                        automation: 'Automated in CI/CD',
                        color: '#f59e0b'
                      },
                      {
                        type: 'Security Testing',
                        description: 'Identifies vulnerabilities and security flaws',
                        subtypes: ['SAST', 'DAST', 'Dependency Scan', 'Container Security'],
                        automation: 'Shift-Left Security',
                        color: '#ef4444'
                      },
                      {
                        type: 'Compatibility Testing',
                        description: 'Verifies application works across different environments',
                        subtypes: ['Browser Testing', 'OS Compatibility', 'Device Testing', 'API Versioning'],
                        automation: 'Matrix Testing',
                        color: '#8b5cf6'
                      },
                      {
                        type: 'Reliability Testing',
                        description: 'Ensures system stability and fault tolerance',
                        subtypes: ['Failover Testing', 'Recovery Testing', 'Chaos Engineering', 'Resilience Testing'],
                        automation: 'Chaos Automation',
                        color: '#06b6d4'
                      },
                      {
                        type: 'Usability Testing',
                        description: 'Validates user experience and interface design',
                        subtypes: ['UI Testing', 'Accessibility Testing', 'User Journey', 'A/B Testing'],
                        automation: 'Visual Regression',
                        color: '#84cc16'
                      }
                    ].map((test, index) => (
                      <div key={index} style={{ 
                        backgroundColor: '#1e293b', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        border: `1px solid ${test.color}`
                      }}>
                        <h5 style={{ color: test.color, marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                          {test.type}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {test.description}
                        </p>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Types:</strong>
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {test.subtypes.map((subtype, idx) => (
                              <span key={idx} style={{
                                backgroundColor: `${test.color}20`,
                                color: test.color,
                                padding: '0.125rem 0.375rem',
                                borderRadius: '6px',
                                fontSize: '0.6875rem',
                                fontWeight: '500'
                              }}>
                                {subtype}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div style={{
                          backgroundColor: `${test.color}15`,
                          color: test.color,
                          padding: '0.375rem 0.5rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          textAlign: 'center'
                        }}>
                          {test.automation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shift-Left Testing */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Shift-Left Testing Strategy
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #f59e0b' }}>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                        Early Testing Integration Benefits
                      </h5>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {[
                          {
                            benefit: 'Faster Feedback',
                            description: 'Identify issues immediately when code is written',
                            impact: 'Reduces debugging time by 80%'
                          },
                          {
                            benefit: 'Lower Cost',
                            description: 'Fix bugs when they\'re cheapest to resolve',
                            impact: 'Defect cost 100x lower in development'
                          },
                          {
                            benefit: 'Better Quality',
                            description: 'Prevent defects rather than catch them later',
                            impact: 'Improves overall code quality'
                          },
                          {
                            benefit: 'Team Collaboration',
                            description: 'Developers and testers work together from start',
                            impact: 'Enhanced team communication'
                          }
                        ].map((item, index) => (
                          <div key={index} style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '6px' }}>
                            <h6 style={{ color: '#fbbf24', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                              {item.benefit}
                            </h6>
                            <p style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.25rem', lineHeight: '1.4' }}>
                              {item.description}
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '0.6875rem', fontStyle: 'italic' }}>
                              {item.impact}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                        Shift-Left Implementation Phases
                      </h5>
                      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                        {[
                          { phase: 'Planning', activity: 'Test Strategy & Requirements Analysis', color: '#3b82f6' },
                          { phase: 'Development', activity: 'Unit Tests & TDD Implementation', color: '#10b981' },
                          { phase: 'Integration', activity: 'API Testing & Service Contracts', color: '#f59e0b' },
                          { phase: 'Deployment', activity: 'Smoke Tests & Environment Validation', color: '#ef4444' },
                          { phase: 'Monitoring', activity: 'Synthetic Testing & Performance Monitoring', color: '#8b5cf6' }
                        ].map((item, index) => (
                          <div key={index} style={{ 
                            minWidth: '200px',
                            backgroundColor: item.color,
                            color: 'white',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                          }}>
                            <h6 style={{ margin: 0, marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '600' }}>
                              {item.phase}
                            </h6>
                            <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9 }}>
                              {item.activity}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'automation' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Test Automation Framework & Tools
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* CI/CD Pipeline Integration */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <GitBranch size={20} style={{ marginRight: '0.5rem' }} />
                    CI/CD Pipeline Test Integration
                  </h4>
                  
                  <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem', overflow: 'auto', marginBottom: '1rem' }}>
                    <pre style={{ margin: 0, color: '#e2e8f0' }}>{`# GitHub Actions Pipeline with Testing
name: CI/CD Pipeline with Comprehensive Testing

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Lint code
      run: npm run lint
    
    - name: Unit tests
      run: npm test -- --coverage
    
    - name: Integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb
    
    - name: Security scan
      run: npm audit --audit-level moderate
    
    - name: Build application
      run: npm run build
    
    - name: E2E tests
      run: npm run test:e2e
      env:
        CI: true
    
    - name: Performance tests
      run: npm run test:performance
    
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        token: \${{ secrets.CODECOV_TOKEN }}`}</pre>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        stage: 'Pre-commit Hooks',
                        tests: ['Linting', 'Unit Tests', 'Security Checks'],
                        duration: '< 5 minutes',
                        color: '#3b82f6'
                      },
                      {
                        stage: 'Build Pipeline',
                        tests: ['Integration Tests', 'Component Tests', 'Contract Tests'],
                        duration: '10-20 minutes',
                        color: '#10b981'
                      },
                      {
                        stage: 'Deployment Pipeline',
                        tests: ['E2E Tests', 'Performance Tests', 'Smoke Tests'],
                        duration: '20-40 minutes',
                        color: '#f59e0b'
                      },
                      {
                        stage: 'Post-deployment',
                        tests: ['Health Checks', 'Monitoring', 'Synthetic Tests'],
                        duration: 'Continuous',
                        color: '#ef4444'
                      }
                    ].map((stage, index) => (
                      <div key={index} style={{ 
                        backgroundColor: '#1e293b', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        border: `1px solid ${stage.color}`
                      }}>
                        <h5 style={{ color: stage.color, marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {stage.stage}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                          <strong>Tests:</strong> {stage.tests.join(', ')}
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                          <strong>Duration:</strong> {stage.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testing Tools Matrix */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Testing Tools & Framework Selection
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        category: 'Unit Testing Frameworks',
                        tools: [
                          { name: 'Jest', language: 'JavaScript/TypeScript', pros: ['Easy setup', 'Built-in mocking', 'Snapshot testing'], cons: ['Node.js focused'] },
                          { name: 'JUnit 5', language: 'Java', pros: ['Mature ecosystem', 'Parameterized tests', 'Extensions'], cons: ['Verbose syntax'] },
                          { name: 'pytest', language: 'Python', pros: ['Simple syntax', 'Powerful fixtures', 'Plugin ecosystem'], cons: ['Learning curve'] },
                          { name: 'RSpec', language: 'Ruby', pros: ['BDD syntax', 'Readable specs', 'Mocking built-in'], cons: ['Ruby-specific'] }
                        ],
                        color: '#10b981'
                      },
                      {
                        category: 'Integration Testing',
                        tools: [
                          { name: 'TestContainers', language: 'Multi-language', pros: ['Real dependencies', 'Isolated tests', 'Docker integration'], cons: ['Resource intensive'] },
                          { name: 'WireMock', language: 'Java/Others', pros: ['API mocking', 'Request matching', 'Stateful behavior'], cons: ['Setup complexity'] },
                          { name: 'Pact', language: 'Multi-language', pros: ['Contract testing', 'Consumer-driven', 'Version compatibility'], cons: ['Learning curve'] },
                          { name: 'REST Assured', language: 'Java', pros: ['Fluent API', 'JSON/XML support', 'Response validation'], cons: ['Java-only'] }
                        ],
                        color: '#3b82f6'
                      },
                      {
                        category: 'E2E Testing',
                        tools: [
                          { name: 'Cypress', language: 'JavaScript', pros: ['Developer friendly', 'Time travel', 'Real browser'], cons: ['Limited browser support'] },
                          { name: 'Playwright', language: 'Multi-language', pros: ['Multi-browser', 'Auto-wait', 'Network interception'], cons: ['Newer ecosystem'] },
                          { name: 'Selenium', language: 'Multi-language', pros: ['Mature ecosystem', 'Multi-browser', 'Large community'], cons: ['Flaky tests', 'Setup complexity'] },
                          { name: 'WebDriverIO', language: 'JavaScript', pros: ['Modern syntax', 'Plugin ecosystem', 'Mobile testing'], cons: ['Documentation gaps'] }
                        ],
                        color: '#f59e0b'
                      }
                    ].map((category, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                        <h5 style={{ color: category.color, marginBottom: '1rem', fontSize: '1rem', fontWeight: '600' }}>
                          {category.category}
                        </h5>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                          {category.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '6px', border: `1px solid ${category.color}30` }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <h6 style={{ color: '#f1f5f9', margin: 0, fontSize: '0.875rem', fontWeight: '600' }}>
                                  {tool.name}
                                </h6>
                                <span style={{ 
                                  backgroundColor: `${category.color}20`,
                                  color: category.color,
                                  padding: '0.125rem 0.375rem',
                                  borderRadius: '6px',
                                  fontSize: '0.6875rem',
                                  fontWeight: '500'
                                }}>
                                  {tool.language}
                                </span>
                              </div>
                              <div style={{ marginBottom: '0.5rem' }}>
                                <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                                  <strong style={{ color: '#10b981' }}>Pros:</strong> {tool.pros.join(', ')}
                                </p>
                                <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                                  <strong style={{ color: '#ef4444' }}>Cons:</strong> {tool.cons.join(', ')}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Test Data Management */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Test Data Management & Environment Strategy
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        strategy: 'Test Data Factories',
                        description: 'Programmatically generate test data with realistic variations',
                        implementation: 'Use libraries like Faker.js, Factory Boy, or custom builders',
                        benefits: ['Consistent data', 'Randomization', 'Maintainable'],
                        color: '#10b981'
                      },
                      {
                        strategy: 'Database Seeding',
                        description: 'Pre-populate databases with known test datasets',
                        implementation: 'SQL scripts, migrations, or seeding tools',
                        benefits: ['Predictable state', 'Complex scenarios', 'Shared data'],
                        color: '#3b82f6'
                      },
                      {
                        strategy: 'API Mocking',
                        description: 'Mock external services and APIs for isolated testing',
                        implementation: 'WireMock, MockServer, or service virtualization',
                        benefits: ['Isolated tests', 'Fast execution', 'Controlled responses'],
                        color: '#f59e0b'
                      },
                      {
                        strategy: 'Environment Parity',
                        description: 'Maintain consistent environments across all test stages',
                        implementation: 'Infrastructure as Code, Docker containers, K8s',
                        benefits: ['Reliable tests', 'Production-like', 'Reproducible'],
                        color: '#ef4444'
                      }
                    ].map((strategy, index) => (
                      <div key={index} style={{ 
                        backgroundColor: '#1e293b', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        border: `1px solid ${strategy.color}`
                      }}>
                        <h5 style={{ color: strategy.color, marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                          {strategy.strategy}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {strategy.description}
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                          <strong>Implementation:</strong> {strategy.implementation}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                          {strategy.benefits.map((benefit, idx) => (
                            <span key={idx} style={{
                              backgroundColor: `${strategy.color}20`,
                              color: strategy.color,
                              padding: '0.125rem 0.375rem',
                              borderRadius: '6px',
                              fontSize: '0.6875rem',
                              fontWeight: '500'
                            }}>
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'implementation' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                DevOps Testing Implementation Roadmap
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Implementation Phases */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    8-Week Implementation Plan
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        weeks: 'Week 1-2',
                        phase: 'Foundation Setup',
                        goals: ['Establish testing strategy', 'Set up basic CI/CD pipeline', 'Implement unit testing framework'],
                        deliverables: ['Testing strategy document', 'Basic pipeline configuration', 'Unit test examples'],
                        color: '#3b82f6'
                      },
                      {
                        weeks: 'Week 3-4',
                        phase: 'Integration Testing',
                        goals: ['Implement integration tests', 'Set up test databases', 'Configure API testing'],
                        deliverables: ['Integration test suite', 'TestContainers setup', 'API contract tests'],
                        color: '#10b981'
                      },
                      {
                        weeks: 'Week 5-6',
                        phase: 'End-to-End Automation',
                        goals: ['Implement E2E testing', 'Set up cross-browser testing', 'Performance test baseline'],
                        deliverables: ['E2E test framework', 'Browser test matrix', 'Performance benchmarks'],
                        color: '#f59e0b'
                      },
                      {
                        weeks: 'Week 7-8',
                        phase: 'Advanced Testing',
                        goals: ['Security testing integration', 'Chaos engineering', 'Monitoring and alerting'],
                        deliverables: ['Security scan automation', 'Chaos experiments', 'Test reporting dashboard'],
                        color: '#ef4444'
                      }
                    ].map((phase, index) => (
                      <div key={index} style={{ display: 'flex', padding: '1rem', backgroundColor: '#1e293b', borderRadius: '8px' }}>
                        <div style={{ 
                          backgroundColor: phase.color, 
                          color: 'white', 
                          borderRadius: '50%', 
                          width: '50px', 
                          height: '50px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          marginRight: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>
                          {index + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{phase.weeks}</h5>
                            <span style={{ color: phase.color, fontSize: '0.875rem', fontWeight: '600' }}>{phase.phase}</span>
                          </div>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>Goals:</strong> {phase.goals.join(' • ')}
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                            <strong>Deliverables:</strong> {phase.deliverables.join(' • ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best Practices */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    DevOps Testing Best Practices
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        practice: 'Test Early and Often',
                        description: 'Integrate testing throughout the development lifecycle',
                        actions: ['Write tests before code (TDD)', 'Run tests on every commit', 'Fast feedback loops'],
                        impact: 'Reduces debugging time by 60-80%'
                      },
                      {
                        practice: 'Maintain Test Quality',
                        description: 'Treat test code with the same care as production code',
                        actions: ['Code reviews for tests', 'Refactor test code', 'Clear test naming'],
                        impact: 'Improves test maintainability'
                      },
                      {
                        practice: 'Parallel Test Execution',
                        description: 'Run tests concurrently to reduce feedback time',
                        actions: ['Split test suites', 'Use test runners', 'Containerized testing'],
                        impact: 'Reduces pipeline time by 50-70%'
                      },
                      {
                        practice: 'Test Environment Management',
                        description: 'Maintain consistent and isolated test environments',
                        actions: ['Infrastructure as Code', 'Environment provisioning', 'Data isolation'],
                        impact: 'Eliminates environment-related failures'
                      },
                      {
                        practice: 'Comprehensive Monitoring',
                        description: 'Monitor test execution and results continuously',
                        actions: ['Test metrics dashboard', 'Failure trend analysis', 'Performance monitoring'],
                        impact: 'Proactive issue identification'
                      },
                      {
                        practice: 'Cross-team Collaboration',
                        description: 'Foster collaboration between dev, test, and ops teams',
                        actions: ['Shared testing standards', 'Knowledge sharing', 'Joint retrospectives'],
                        impact: 'Improved overall quality culture'
                      }
                    ].map((practice, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h5 style={{ color: '#60a5fa', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                          {practice.practice}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {practice.description}
                        </p>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Actions:</strong>
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {practice.actions.map((action, idx) => (
                              <li key={idx} style={{ 
                                color: '#cbd5e1', 
                                fontSize: '0.75rem', 
                                marginBottom: '0.125rem',
                                paddingLeft: '1rem',
                                position: 'relative'
                              }}>
                                <CheckCircle2 size={10} style={{ 
                                  position: 'absolute', 
                                  left: 0, 
                                  top: '0.125rem',
                                  color: '#10b981' 
                                }} />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div style={{
                          backgroundColor: '#10b98120',
                          color: '#10b981',
                          padding: '0.375rem 0.5rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          textAlign: 'center'
                        }}>
                          {practice.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Metrics */}
                <div style={{ backgroundColor: '#10b98120', padding: '1.5rem', borderRadius: '8px', border: '1px solid #10b981' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Testing Success Metrics & KPIs
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        metric: 'Test Coverage',
                        target: '> 80%',
                        description: 'Code coverage by automated tests'
                      },
                      {
                        metric: 'Test Execution Time',
                        target: '< 15 minutes',
                        description: 'Total pipeline test execution time'
                      },
                      {
                        metric: 'Test Stability',
                        target: '< 5% flaky',
                        description: 'Percentage of unreliable tests'
                      },
                      {
                        metric: 'Defect Detection Rate',
                        target: '> 85%',
                        description: 'Issues caught before production'
                      },
                      {
                        metric: 'Mean Time to Recovery',
                        target: '< 1 hour',
                        description: 'Time to fix failed tests'
                      },
                      {
                        metric: 'Deployment Frequency',
                        target: 'Daily+',
                        description: 'Successful deployment rate'
                      }
                    ].map((metric, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#34d399', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {metric.metric}
                        </h5>
                        <p style={{ color: '#10b981', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                          {metric.target}
                        </p>
                        <p style={{ color: '#cbd5e1', fontSize: '0.75rem', margin: 0, lineHeight: '1.3' }}>
                          {metric.description}
                        </p>
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
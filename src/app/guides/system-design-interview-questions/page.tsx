'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, Globe, Cpu, CheckCircle2, AlertCircle, Layers } from 'lucide-react';

export default function SystemDesignInterviewGuide() {
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
            System Design Interview Questions
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Master system design interviews with comprehensive question patterns, architectural concepts, and step-by-step solution approaches.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'overview', label: 'Overview & Approach', icon: Globe },
            { id: 'questions', label: 'Common Questions', icon: Database },
            { id: 'solutions', label: 'Solution Framework', icon: Layers }
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
                System Design Interview Overview
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Database size={20} style={{ color: '#3b82f6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#3b82f6', margin: 0 }}>What It Tests</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>Architectural thinking</li>
                    <li>Scalability understanding</li>
                    <li>Trade-off analysis</li>
                    <li>Problem-solving approach</li>
                    <li>Communication skills</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Globe size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#8b5cf6', margin: 0 }}>Duration & Format</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>45-60 minutes typically</li>
                    <li>Open-ended discussion</li>
                    <li>Whiteboarding/diagramming</li>
                    <li>Interactive questioning</li>
                    <li>Iterative refinement</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Cpu size={20} style={{ color: '#10b981', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#10b981', margin: 0 }}>Key Skills Needed</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>Distributed systems concepts</li>
                    <li>Database knowledge</li>
                    <li>Caching strategies</li>
                    <li>Load balancing</li>
                    <li>Microservices architecture</li>
                  </ul>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>The SNAKE Method (Systematic Approach)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {[
                    { letter: 'S', phase: 'Scope', description: 'Clarify requirements and constraints' },
                    { letter: 'N', phase: 'Numbers', description: 'Estimate scale and capacity' },
                    { letter: 'A', phase: 'Architecture', description: 'Design high-level components' },
                    { letter: 'K', phase: 'Key Services', description: 'Detail critical components' },
                    { letter: 'E', phase: 'Evolve', description: 'Scale and optimize the design' }
                  ].map(({ letter, phase, description }) => (
                    <div key={letter} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                      <div style={{ backgroundColor: '#3b82f6', color: 'white', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', fontWeight: 'bold' }}>
                        {letter}
                      </div>
                      <h5 style={{ color: '#f1f5f9', margin: '0 0 0.5rem 0', fontSize: '0.875rem', fontWeight: '600' }}>{phase}</h5>
                      <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'questions' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Popular System Design Questions */}
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Top System Design Questions
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  {
                    category: 'Social Media & Communication',
                    color: '#3b82f6',
                    questions: [
                      { title: 'Design Twitter/X', difficulty: 'Medium', keyAspects: ['Timeline generation', 'Tweet storage', 'Following system', 'Real-time updates'] },
                      { title: 'Design WhatsApp', difficulty: 'Medium', keyAspects: ['Message delivery', 'Online presence', 'Group chats', 'Media sharing'] },
                      { title: 'Design Instagram', difficulty: 'Hard', keyAspects: ['Photo storage', 'Feed algorithm', 'Stories feature', 'Recommendation system'] },
                      { title: 'Design Facebook News Feed', difficulty: 'Hard', keyAspects: ['Content ranking', 'Real-time updates', 'Personalization', 'Edge rank algorithm'] }
                    ]
                  },
                  {
                    category: 'E-commerce & Marketplace',
                    color: '#8b5cf6',
                    questions: [
                      { title: 'Design Amazon', difficulty: 'Hard', keyAspects: ['Product catalog', 'Shopping cart', 'Payment system', 'Recommendation engine'] },
                      { title: 'Design Uber', difficulty: 'Hard', keyAspects: ['Location tracking', 'Matching algorithm', 'Real-time updates', 'Payment processing'] },
                      { title: 'Design Food Delivery (DoorDash)', difficulty: 'Medium', keyAspects: ['Restaurant discovery', 'Order tracking', 'Delivery routing', 'ETA calculation'] }
                    ]
                  },
                  {
                    category: 'Media & Entertainment',
                    color: '#10b981',
                    questions: [
                      { title: 'Design YouTube', difficulty: 'Hard', keyAspects: ['Video storage', 'Content delivery', 'Recommendation system', 'Live streaming'] },
                      { title: 'Design Netflix', difficulty: 'Hard', keyAspects: ['Content catalog', 'Video streaming', 'Recommendation algorithm', 'CDN optimization'] },
                      { title: 'Design Spotify', difficulty: 'Medium', keyAspects: ['Music streaming', 'Playlist management', 'Social features', 'Recommendation system'] }
                    ]
                  },
                  {
                    category: 'Search & Analytics',
                    color: '#f59e0b',
                    questions: [
                      { title: 'Design Google Search', difficulty: 'Hard', keyAspects: ['Web crawling', 'Indexing system', 'Ranking algorithm', 'Query processing'] },
                      { title: 'Design URL Shortener (bit.ly)', difficulty: 'Easy', keyAspects: ['URL encoding', 'Custom aliases', 'Analytics tracking', 'Cache optimization'] },
                      { title: 'Design Web Crawler', difficulty: 'Medium', keyAspects: ['Distributed crawling', 'Duplicate detection', 'Rate limiting', 'Data storage'] }
                    ]
                  }
                ].map(({ category, color, questions }) => (
                  <div key={category} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: color, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                      {category}
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {questions.map(({ title, difficulty, keyAspects }) => (
                        <div key={title} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', border: `1px solid ${color}20` }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '500' }}>{title}</h5>
                            <span style={{ 
                              backgroundColor: difficulty === 'Easy' ? '#10b981' : difficulty === 'Medium' ? '#f59e0b' : '#ef4444',
                              color: 'white',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}>
                              {difficulty}
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {keyAspects.map(aspect => (
                              <span key={aspect} style={{ 
                                backgroundColor: `${color}20`,
                                color: color,
                                padding: '0.25rem 0.5rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem'
                              }}>
                                {aspect}
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

        {activeTab === 'solutions' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Solution Framework & Best Practices
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Step-by-step framework */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>Step-by-Step Solution Approach</h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        step: 1,
                        title: 'Clarify Requirements (5-10 minutes)',
                        actions: [
                          'Ask about functional requirements (core features)',
                          'Discuss non-functional requirements (scale, performance)',
                          'Identify constraints and assumptions',
                          'Confirm success metrics'
                        ]
                      },
                      {
                        step: 2,
                        title: 'Estimate Scale & Capacity (5 minutes)',
                        actions: [
                          'Calculate daily/monthly active users',
                          'Estimate read/write ratio',
                          'Calculate storage requirements',
                          'Estimate bandwidth needs'
                        ]
                      },
                      {
                        step: 3,
                        title: 'High-Level Design (10-15 minutes)',
                        actions: [
                          'Draw major components (client, LB, servers, DB)',
                          'Show data flow between components',
                          'Identify key services and APIs',
                          'Choose appropriate databases'
                        ]
                      },
                      {
                        step: 4,
                        title: 'Detailed Design (15-20 minutes)',
                        actions: [
                          'Deep dive into critical components',
                          'Design database schema',
                          'Define API contracts',
                          'Address specific algorithms'
                        ]
                      },
                      {
                        step: 5,
                        title: 'Scale & Optimize (5-10 minutes)',
                        actions: [
                          'Identify bottlenecks',
                          'Add caching layers',
                          'Consider CDN and geographic distribution',
                          'Discuss monitoring and alerting'
                        ]
                      }
                    ].map(({ step, title, actions }) => (
                      <div key={step} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                          <div style={{ backgroundColor: '#3b82f6', color: 'white', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', fontWeight: 'bold' }}>
                            {step}
                          </div>
                          <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{title}</h5>
                        </div>
                        <div style={{ paddingLeft: '3rem' }}>
                          <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem', margin: 0 }}>
                            {actions.map((action, index) => (
                              <li key={index}>{action}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Patterns */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Scalability Patterns</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'Horizontal scaling (scale out)',
                        'Load balancing strategies',
                        'Database sharding',
                        'Microservices architecture',
                        'Caching at multiple layers',
                        'CDN for static content'
                      ].map(pattern => (
                        <div key={pattern} style={{ display: 'flex', alignItems: 'center' }}>
                          <CheckCircle2 size={16} style={{ color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                          <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{pattern}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Reliability Patterns</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'Redundancy and replication',
                        'Circuit breaker pattern',
                        'Retry mechanisms with backoff',
                        'Graceful degradation',
                        'Health checks and monitoring',
                        'Disaster recovery planning'
                      ].map(pattern => (
                        <div key={pattern} style={{ display: 'flex', alignItems: 'center' }}>
                          <CheckCircle2 size={16} style={{ color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                          <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{pattern}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#f59e0b', marginBottom: '1rem' }}>Performance Patterns</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {[
                        'Database indexing strategies',
                        'Connection pooling',
                        'Asynchronous processing',
                        'Batch processing for efficiency',
                        'Compression techniques',
                        'Lazy loading and pagination'
                      ].map(pattern => (
                        <div key={pattern} style={{ display: 'flex', alignItems: 'center' }}>
                          <CheckCircle2 size={16} style={{ color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                          <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{pattern}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Common Mistakes */}
                <div style={{ backgroundColor: '#ef444420', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ef4444' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <AlertCircle size={20} style={{ marginRight: '0.5rem' }} />
                    Common Interview Mistakes to Avoid
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      'Jumping into details too quickly',
                      'Not asking clarifying questions',
                      'Ignoring scalability from the start',
                      'Over-engineering simple problems',
                      'Not considering trade-offs',
                      'Forgetting about monitoring/metrics',
                      'Not discussing failure scenarios',
                      'Ignoring data consistency requirements'
                    ].map(mistake => (
                      <div key={mistake} style={{ display: 'flex', alignItems: 'center' }}>
                        <AlertCircle size={16} style={{ color: '#ef4444', marginRight: '0.5rem', flexShrink: 0 }} />
                        <span style={{ color: '#fecaca', fontSize: '0.875rem' }}>{mistake}</span>
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
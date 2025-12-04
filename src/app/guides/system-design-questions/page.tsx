'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, Server, TrendingUp, CheckCircle2, Users, Globe, Layers } from 'lucide-react';

export default function SystemDesignQuestionsGuide() {
  const [activeTab, setActiveTab] = useState('concepts');

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
            System Design Interview Questions
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Master system design interviews with scalable architecture patterns, distributed systems concepts, and real-world design challenges from top tech companies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'concepts', label: 'Design Concepts', icon: Database },
            { id: 'questions', label: 'Interview Questions', icon: Server },
            { id: 'preparation', label: 'Preparation Guide', icon: TrendingUp }
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
        {activeTab === 'concepts' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                System Design Fundamentals
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Scalability Patterns */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Layers size={20} style={{ marginRight: '0.5rem' }} />
                    Scalability Patterns & Principles
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {/* Horizontal vs Vertical Scaling */}
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                        Scaling Strategies
                      </h5>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                        <div style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '6px', border: '1px solid #10b981' }}>
                          <h6 style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                            Horizontal Scaling (Scale Out)
                          </h6>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#cbd5e1', fontSize: '0.75rem' }}>
                            <li style={{ marginBottom: '0.25rem' }}>• Add more servers to handle load</li>
                            <li style={{ marginBottom: '0.25rem' }}>• Distributed across multiple machines</li>
                            <li style={{ marginBottom: '0.25rem' }}>• Better fault tolerance</li>
                            <li style={{ marginBottom: '0.25rem' }}>• Examples: Load balancers, microservices</li>
                          </ul>
                        </div>
                        <div style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '6px', border: '1px solid #f59e0b' }}>
                          <h6 style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                            Vertical Scaling (Scale Up)
                          </h6>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#cbd5e1', fontSize: '0.75rem' }}>
                            <li style={{ marginBottom: '0.25rem' }}>• Increase server capacity (CPU, RAM)</li>
                            <li style={{ marginBottom: '0.25rem' }}>• Single machine optimization</li>
                            <li style={{ marginBottom: '0.25rem' }}>• Hardware limitations exist</li>
                            <li style={{ marginBottom: '0.25rem' }}>• Examples: Upgrading database server</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Load Balancing */}
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                        Load Balancing Strategies
                      </h5>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
                        {[
                          { name: 'Round Robin', description: 'Requests distributed sequentially', useCase: 'Equal server capacity' },
                          { name: 'Weighted Round Robin', description: 'Based on server capacity weights', useCase: 'Different server specs' },
                          { name: 'Least Connections', description: 'Route to server with fewest connections', useCase: 'Varying request duration' },
                          { name: 'IP Hash', description: 'Based on client IP hash', useCase: 'Session affinity needed' },
                          { name: 'Health Check', description: 'Only route to healthy servers', useCase: 'High availability' }
                        ].map((strategy, index) => (
                          <div key={index} style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '6px' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '600' }}>
                              {strategy.name}
                            </h6>
                            <p style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.25rem', lineHeight: '1.3' }}>
                              {strategy.description}
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '0.6875rem', fontStyle: 'italic' }}>
                              Use Case: {strategy.useCase}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database Design Patterns */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Database size={20} style={{ marginRight: '0.5rem' }} />
                    Database Scaling & Design Patterns
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        pattern: 'Database Sharding',
                        description: 'Horizontally partition data across multiple databases',
                        implementation: 'Shard by user ID, geographic region, or feature',
                        pros: ['Improved performance', 'Horizontal scaling', 'Fault isolation'],
                        cons: ['Complex queries', 'Rebalancing overhead', 'Cross-shard joins'],
                        color: '#10b981'
                      },
                      {
                        pattern: 'Read Replicas',
                        description: 'Create read-only copies of the primary database',
                        implementation: 'Master-slave replication with read routing',
                        pros: ['Improved read performance', 'Geographic distribution', 'Backup capability'],
                        cons: ['Eventual consistency', 'Replication lag', 'Storage overhead'],
                        color: '#3b82f6'
                      },
                      {
                        pattern: 'Database Federation',
                        description: 'Split databases by function or service boundaries',
                        implementation: 'Separate databases per microservice',
                        pros: ['Service isolation', 'Independent scaling', 'Technology diversity'],
                        cons: ['Complex transactions', 'Data consistency', 'Multiple connections'],
                        color: '#f59e0b'
                      },
                      {
                        pattern: 'CQRS (Command Query Responsibility Segregation)',
                        description: 'Separate read and write data models',
                        implementation: 'Different models for commands vs queries',
                        pros: ['Optimized queries', 'Independent scaling', 'Flexible views'],
                        cons: ['Increased complexity', 'Data synchronization', 'Learning curve'],
                        color: '#8b5cf6'
                      }
                    ].map((pattern, index) => (
                      <div key={index} style={{ 
                        backgroundColor: '#1e293b', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        border: `1px solid ${pattern.color}`
                      }}>
                        <h5 style={{ color: pattern.color, marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                          {pattern.pattern}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {pattern.description}
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                          <strong>Implementation:</strong> {pattern.implementation}
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                          <div>
                            <p style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                              Pros:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {pattern.pros.map((pro, idx) => (
                                <li key={idx} style={{ color: '#cbd5e1', fontSize: '0.6875rem', marginBottom: '0.125rem' }}>
                                  • {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                              Cons:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {pattern.cons.map((con, idx) => (
                                <li key={idx} style={{ color: '#cbd5e1', fontSize: '0.6875rem', marginBottom: '0.125rem' }}>
                                  • {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Caching Strategies */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Caching Patterns & Strategies
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {/* Cache Levels */}
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                        Cache Hierarchy Levels
                      </h5>
                      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                        {[
                          { level: 'Browser Cache', location: 'Client-side', latency: '~1ms', size: 'MB' },
                          { level: 'CDN Cache', location: 'Edge servers', latency: '~50ms', size: 'GB-TB' },
                          { level: 'Application Cache', location: 'App server', latency: '~1-5ms', size: 'GB' },
                          { level: 'Database Cache', location: 'DB memory', latency: '~10-50ms', size: 'GB' },
                          { level: 'Disk Cache', location: 'SSD/HDD', latency: '~1-10ms', size: 'TB' }
                        ].map((cache, index) => (
                          <div key={index} style={{ 
                            minWidth: '180px',
                            backgroundColor: '#06b6d4',
                            color: 'white',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                          }}>
                            <h6 style={{ margin: 0, marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '600' }}>
                              {cache.level}
                            </h6>
                            <p style={{ margin: 0, fontSize: '0.6875rem', marginBottom: '0.125rem', opacity: 0.9 }}>
                              {cache.location}
                            </p>
                            <p style={{ margin: 0, fontSize: '0.6875rem', marginBottom: '0.125rem', opacity: 0.9 }}>
                              Latency: {cache.latency}
                            </p>
                            <p style={{ margin: 0, fontSize: '0.6875rem', opacity: 0.9 }}>
                              Size: {cache.size}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cache Patterns */}
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                        Cache Access Patterns
                      </h5>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                        {[
                          {
                            pattern: 'Cache-Aside (Lazy Loading)',
                            flow: 'App checks cache → Miss? → Load from DB → Store in cache',
                            bestFor: 'Read-heavy workloads with varying access patterns',
                            complexity: 'Low'
                          },
                          {
                            pattern: 'Write-Through',
                            flow: 'Write to cache → Write to DB → Return success',
                            bestFor: 'Strong consistency requirements',
                            complexity: 'Medium'
                          },
                          {
                            pattern: 'Write-Behind (Write-Back)',
                            flow: 'Write to cache → Return success → Async write to DB',
                            bestFor: 'Write-heavy workloads with eventual consistency',
                            complexity: 'High'
                          },
                          {
                            pattern: 'Refresh-Ahead',
                            flow: 'Predict access → Refresh cache before expiration',
                            bestFor: 'Predictable access patterns with low latency needs',
                            complexity: 'High'
                          }
                        ].map((pattern, index) => (
                          <div key={index} style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '6px' }}>
                            <h6 style={{ color: '#22d3ee', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                              {pattern.pattern}
                            </h6>
                            <p style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                              <strong>Flow:</strong> {pattern.flow}
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '0.6875rem', marginBottom: '0.25rem' }}>
                              <strong>Best for:</strong> {pattern.bestFor}
                            </p>
                            <span style={{ 
                              backgroundColor: pattern.complexity === 'Low' ? '#10b981' : pattern.complexity === 'Medium' ? '#f59e0b' : '#ef4444',
                              color: 'white',
                              padding: '0.125rem 0.375rem',
                              borderRadius: '6px',
                              fontSize: '0.6875rem',
                              fontWeight: '500'
                            }}>
                              {pattern.complexity} Complexity
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Microservices Architecture */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Microservices Architecture Patterns
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        pattern: 'API Gateway',
                        purpose: 'Single entry point for all client requests',
                        features: ['Request routing', 'Authentication', 'Rate limiting', 'Request/response transformation'],
                        challenges: ['Single point of failure', 'Latency overhead', 'Complexity management']
                      },
                      {
                        pattern: 'Service Mesh',
                        purpose: 'Infrastructure layer for service-to-service communication',
                        features: ['Traffic management', 'Security policies', 'Observability', 'Circuit breaking'],
                        challenges: ['Operational complexity', 'Performance overhead', 'Learning curve']
                      },
                      {
                        pattern: 'Event Sourcing',
                        purpose: 'Store state changes as sequence of events',
                        features: ['Complete audit trail', 'Temporal queries', 'Event replay', 'CQRS integration'],
                        challenges: ['Event versioning', 'Snapshot complexity', 'Query performance']
                      },
                      {
                        pattern: 'Saga Pattern',
                        purpose: 'Manage distributed transactions across microservices',
                        features: ['Choreography', 'Orchestration', 'Compensation actions', 'Eventual consistency'],
                        challenges: ['Complex error handling', 'Debugging distributed flows', 'State management']
                      }
                    ].map((pattern, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                        <h5 style={{ color: '#c4b5fd', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                          {pattern.pattern}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {pattern.purpose}
                        </p>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Features:</strong>
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {pattern.features.map((feature, idx) => (
                              <span key={idx} style={{
                                backgroundColor: '#8b5cf620',
                                color: '#8b5cf6',
                                padding: '0.125rem 0.375rem',
                                borderRadius: '6px',
                                fontSize: '0.6875rem',
                                fontWeight: '500'
                              }}>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Challenges:</strong>
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {pattern.challenges.map((challenge, idx) => (
                              <li key={idx} style={{ color: '#cbd5e1', fontSize: '0.6875rem', marginBottom: '0.125rem' }}>
                                • {challenge}
                              </li>
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

        {activeTab === 'questions' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                System Design Interview Questions
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  {
                    question: "Design a URL Shortener (like bit.ly)",
                    difficulty: "Medium",
                    category: "Web Services",
                    keyComponents: ["URL encoding/decoding", "Database schema", "Caching layer", "Analytics tracking"],
                    scalingChallenges: ["Billions of URLs", "High read/write ratio", "Geographic distribution", "Custom aliases"],
                    technicalConsiderations: [
                      "Base62 encoding for short URLs",
                      "Database partitioning by URL hash",
                      "CDN for global distribution",
                      "Rate limiting and abuse prevention",
                      "Analytics data pipeline"
                    ]
                  },
                  {
                    question: "Design a Chat Messaging System (like WhatsApp)",
                    difficulty: "Hard",
                    category: "Real-time Systems",
                    keyComponents: ["Message delivery", "User presence", "Push notifications", "Media handling"],
                    scalingChallenges: ["Real-time messaging", "Message ordering", "Offline users", "Group chats"],
                    technicalConsiderations: [
                      "WebSocket connections for real-time",
                      "Message queues (Apache Kafka)",
                      "Database sharding by user/conversation",
                      "Push notification services",
                      "End-to-end encryption"
                    ]
                  },
                  {
                    question: "Design a Social Media Feed (like Twitter Timeline)",
                    difficulty: "Hard",
                    category: "Social Networks",
                    keyComponents: ["Feed generation", "Content ranking", "Real-time updates", "User relationships"],
                    scalingChallenges: ["Millions of users", "Celebrity users", "Real-time updates", "Personalization"],
                    technicalConsiderations: [
                      "Pull vs Push model for feed generation",
                      "Graph database for relationships",
                      "Machine learning for ranking",
                      "CDN for media content",
                      "Fanout strategies for updates"
                    ]
                  },
                  {
                    question: "Design a Video Streaming Platform (like Netflix)",
                    difficulty: "Expert",
                    category: "Media Systems",
                    keyComponents: ["Video encoding", "Content delivery", "Recommendation engine", "User management"],
                    scalingChallenges: ["Global distribution", "Multiple formats", "Bandwidth optimization", "Personalization"],
                    technicalConsiderations: [
                      "Adaptive bitrate streaming",
                      "CDN with edge servers",
                      "Microservices architecture",
                      "Machine learning recommendations",
                      "Multi-region data replication"
                    ]
                  },
                  {
                    question: "Design a Ride-Sharing Service (like Uber)",
                    difficulty: "Expert",
                    category: "Location-based Services",
                    keyComponents: ["Location tracking", "Matching algorithm", "Trip management", "Payment processing"],
                    scalingChallenges: ["Real-time location updates", "Geographic partitioning", "Peak demand", "Global operations"],
                    technicalConsiderations: [
                      "Geospatial databases (PostGIS)",
                      "Real-time location services",
                      "Supply-demand matching algorithms",
                      "Event-driven architecture",
                      "Microservices with API gateways"
                    ]
                  },
                  {
                    question: "Design a Distributed Cache System (like Redis Cluster)",
                    difficulty: "Expert",
                    category: "Infrastructure",
                    keyComponents: ["Consistent hashing", "Replication", "Failure detection", "Data partitioning"],
                    scalingChallenges: ["Node failures", "Data consistency", "Hot keys", "Memory management"],
                    technicalConsiderations: [
                      "Consistent hashing for distribution",
                      "Gossip protocol for node discovery",
                      "Read replicas for high availability",
                      "LRU/LFU eviction policies",
                      "Client-side sharding"
                    ]
                  }
                ].map((question, index) => (
                  <div key={index} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h4 style={{ color: '#f1f5f9', fontSize: '1.125rem', fontWeight: '600', margin: 0, flex: 1 }}>
                        {question.question}
                      </h4>
                      <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                        <span style={{ 
                          backgroundColor: question.difficulty === 'Medium' ? '#f59e0b' : question.difficulty === 'Hard' ? '#ef4444' : '#8b5cf6',
                          color: 'white',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {question.difficulty}
                        </span>
                        <span style={{ 
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {question.category}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          Key Components
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                          {question.keyComponents.map((component, idx) => (
                            <span key={idx} style={{
                              backgroundColor: '#10b98120',
                              color: '#10b981',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}>
                              {component}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          Scaling Challenges
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                          {question.scalingChallenges.map((challenge, idx) => (
                            <span key={idx} style={{
                              backgroundColor: '#f59e0b20',
                              color: '#f59e0b',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}>
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          Technical Considerations
                        </h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {question.technicalConsiderations.map((consideration, idx) => (
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
                                color: '#3b82f6' 
                              }} />
                              {consideration}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preparation' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                System Design Interview Preparation
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Preparation Timeline */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    8-Week Preparation Plan
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        weeks: 'Week 1-2',
                        focus: 'Fundamentals',
                        topics: ['Scalability concepts', 'Database basics', 'Network protocols', 'Basic algorithms'],
                        practice: 'Read system design primers, understand CAP theorem',
                        color: '#3b82f6'
                      },
                      {
                        weeks: 'Week 3-4',
                        focus: 'Core Components',
                        topics: ['Load balancers', 'Caching strategies', 'Database design', 'Message queues'],
                        practice: 'Design simple systems (URL shortener, calculator)',
                        color: '#10b981'
                      },
                      {
                        weeks: 'Week 5-6',
                        focus: 'Advanced Patterns',
                        topics: ['Microservices', 'Distributed systems', 'Consensus algorithms', 'Event sourcing'],
                        practice: 'Design medium complexity systems (social media, chat)',
                        color: '#f59e0b'
                      },
                      {
                        weeks: 'Week 7-8',
                        focus: 'Complex Systems',
                        topics: ['Large-scale architecture', 'Performance optimization', 'Monitoring', 'Security'],
                        practice: 'Design complex systems (video streaming, ride-sharing)',
                        color: '#ef4444'
                      }
                    ].map((week, index) => (
                      <div key={index} style={{ display: 'flex', padding: '1rem', backgroundColor: '#1e293b', borderRadius: '8px' }}>
                        <div style={{ 
                          backgroundColor: week.color, 
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
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{week.weeks}</h5>
                            <span style={{ color: week.color, fontSize: '0.875rem', fontWeight: '600' }}>{week.focus}</span>
                          </div>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>Topics:</strong> {week.topics.join(' • ')}
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontStyle: 'italic' }}>
                            <strong>Practice:</strong> {week.practice}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interview Framework */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    System Design Interview Framework
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        step: '1. Clarify Requirements',
                        duration: '10-15 minutes',
                        description: 'Understand functional and non-functional requirements',
                        questions: [
                          'What features need to be supported?',
                          'How many users are expected?',
                          'What is the expected read/write ratio?',
                          'Are there any latency requirements?'
                        ]
                      },
                      {
                        step: '2. Estimate Scale',
                        duration: '5-10 minutes',
                        description: 'Calculate system capacity and constraints',
                        questions: [
                          'How much data will be stored?',
                          'What is the expected QPS?',
                          'What is the bandwidth requirement?',
                          'How much memory is needed for caching?'
                        ]
                      },
                      {
                        step: '3. High-Level Design',
                        duration: '15-20 minutes',
                        description: 'Create system architecture with major components',
                        questions: [
                          'What are the main components?',
                          'How do components interact?',
                          'What APIs are needed?',
                          'How is data flowing through the system?'
                        ]
                      },
                      {
                        step: '4. Deep Dive',
                        duration: '10-15 minutes',
                        description: 'Detail critical components and address bottlenecks',
                        questions: [
                          'How to handle the identified bottlenecks?',
                          'What database schema is needed?',
                          'How to ensure data consistency?',
                          'How to handle failures?'
                        ]
                      },
                      {
                        step: '5. Scale & Wrap Up',
                        duration: '5-10 minutes',
                        description: 'Discuss scaling strategies and monitoring',
                        questions: [
                          'How to scale each component?',
                          'What metrics to monitor?',
                          'How to handle increased load?',
                          'What are potential improvements?'
                        ]
                      }
                    ].map((step, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #10b981' }}>
                        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <h5 style={{ color: '#34d399', margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                            {step.step}
                          </h5>
                          <span style={{ 
                            backgroundColor: '#10b98120',
                            color: '#10b981',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}>
                            {step.duration}
                          </span>
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                          {step.description}
                        </p>
                        <div>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Key Questions:</strong>
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {step.questions.map((question, idx) => (
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
                                {question}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Essential Resources & Tips
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        category: 'Books & Guides',
                        resources: [
                          'Designing Data-Intensive Applications',
                          'System Design Interview (Alex Xu)',
                          'Building Microservices (Sam Newman)',
                          'High Performance Browser Networking'
                        ]
                      },
                      {
                        category: 'Online Resources',
                        resources: [
                          'High Scalability blog',
                          'AWS Architecture Center',
                          'Google Cloud Architecture Center',
                          'Engineering blogs (Netflix, Uber, etc.)'
                        ]
                      },
                      {
                        category: 'Practice Platforms',
                        resources: [
                          'Pramp system design mock interviews',
                          'Interviewing.io system design practice',
                          'LeetCode system design problems',
                          'Grokking the System Design Interview'
                        ]
                      }
                    ].map((section, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#c4b5fd', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {section.category}
                        </h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {section.resources.map((resource, idx) => (
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
                                color: '#8b5cf6' 
                              }} />
                              {resource}
                            </li>
                          ))}
                        </ul>
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
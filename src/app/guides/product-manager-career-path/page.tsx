'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Target, Users, TrendingUp, CheckCircle2, Lightbulb, Briefcase } from 'lucide-react';

export default function ProductManagerCareerPathGuide() {
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Product Manager Career Path
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Complete guide to building a successful product management career with skills development, progression paths, and expert strategies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'overview', label: 'PM Overview', icon: Target },
            { id: 'skills', label: 'Skills & Frameworks', icon: Lightbulb },
            { id: 'career', label: 'Career Roadmap', icon: TrendingUp }
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
                color: activeTab === id ? '#8b5cf6' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #8b5cf6' : '2px solid transparent',
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
                What is Product Management?
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Core Definition */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Target size={20} style={{ marginRight: '0.5rem' }} />
                    Core Responsibilities
                  </h4>
                  
                  <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    Product Managers are the strategic leaders who guide product development from conception to launch and beyond. They act as the bridge between business, technology, and user experience teams.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {[
                      {
                        title: 'Strategy & Vision',
                        description: 'Define product strategy, roadmap, and long-term vision aligned with business goals',
                        responsibilities: [
                          'Market research and competitive analysis',
                          'Product vision and strategy definition',
                          'Roadmap planning and prioritization',
                          'Stakeholder alignment and communication'
                        ],
                        color: '#3b82f6'
                      },
                      {
                        title: 'Execution & Development',
                        description: 'Work with engineering and design teams to build and ship products',
                        responsibilities: [
                          'Requirements gathering and documentation',
                          'Feature specification and user stories',
                          'Sprint planning and backlog management',
                          'Quality assurance and testing coordination'
                        ],
                        color: '#10b981'
                      },
                      {
                        title: 'Analytics & Optimization',
                        description: 'Measure product performance and drive continuous improvement',
                        responsibilities: [
                          'KPI definition and tracking',
                          'User behavior analysis',
                          'A/B testing and experimentation',
                          'Product performance reporting'
                        ],
                        color: '#f59e0b'
                      }
                    ].map((area, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
                        <h5 style={{ color: area.color, fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                          {area.title}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                          {area.description}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {area.responsibilities.map((resp, idx) => (
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
                                color: area.color 
                              }} />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PM Types */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Types of Product Managers
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        type: 'B2C Product Manager',
                        focus: 'Consumer Products',
                        description: 'Focus on user experience, growth metrics, and consumer behavior',
                        examples: 'Social media apps, e-commerce, gaming, streaming services',
                        keyMetrics: ['DAU/MAU', 'User retention', 'Conversion rates', 'User satisfaction'],
                        salary: '$100K - $180K',
                        color: '#3b82f6'
                      },
                      {
                        type: 'B2B Product Manager',
                        focus: 'Enterprise Products',
                        description: 'Manage complex business solutions with longer sales cycles',
                        examples: 'CRM systems, productivity tools, enterprise software, APIs',
                        keyMetrics: ['ARR/MRR', 'Customer churn', 'Feature adoption', 'Enterprise deals'],
                        salary: '$110K - $200K',
                        color: '#10b981'
                      },
                      {
                        type: 'Technical Product Manager',
                        focus: 'Platform & Infrastructure',
                        description: 'Deep technical expertise for platform, API, and developer tools',
                        examples: 'Developer APIs, cloud platforms, infrastructure tools, SDKs',
                        keyMetrics: ['API usage', 'Developer adoption', 'Platform reliability', 'Performance metrics'],
                        salary: '$120K - $220K',
                        color: '#f59e0b'
                      },
                      {
                        type: 'Growth Product Manager',
                        focus: 'User Acquisition & Retention',
                        description: 'Specialize in user growth, acquisition funnels, and retention',
                        examples: 'Onboarding flows, referral programs, monetization features',
                        keyMetrics: ['CAC/LTV', 'Growth rate', 'Viral coefficient', 'Activation rate'],
                        salary: '$110K - $190K',
                        color: '#ef4444'
                      }
                    ].map((pmType, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${pmType.color}30` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                          <div>
                            <h5 style={{ color: pmType.color, fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                              {pmType.type}
                            </h5>
                            <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{pmType.focus}</span>
                          </div>
                          <span style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>
                            {pmType.salary}
                          </span>
                        </div>
                        
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                          {pmType.description}
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                          <div>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              Examples
                            </h6>
                            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.4' }}>
                              {pmType.examples}
                            </p>
                          </div>
                          <div>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              Key Metrics
                            </h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {pmType.keyMetrics.map((metric, idx) => (
                                <span key={idx} style={{ 
                                  backgroundColor: `${pmType.color}20`, 
                                  color: pmType.color, 
                                  padding: '0.25rem 0.5rem', 
                                  borderRadius: '12px', 
                                  fontSize: '0.75rem',
                                  border: `1px solid ${pmType.color}40`
                                }}>
                                  {metric}
                                </span>
                              ))}
                            </div>
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

        {activeTab === 'skills' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Essential PM Skills & Frameworks
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Core Skills */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Core Competencies
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {[
                      {
                        category: 'Strategic Thinking',
                        skills: [
                          'Market analysis and competitive research',
                          'Business model development',
                          'Product strategy and roadmapping',
                          'Stakeholder management',
                          'Go-to-market planning'
                        ],
                        color: '#3b82f6'
                      },
                      {
                        category: 'Technical Skills',
                        skills: [
                          'Data analysis and SQL basics',
                          'Analytics tools (Google Analytics, Mixpanel)',
                          'A/B testing and experimentation',
                          'Basic understanding of software development',
                          'API and integration concepts'
                        ],
                        color: '#10b981'
                      },
                      {
                        category: 'Communication',
                        skills: [
                          'Written and verbal communication',
                          'Presentation and storytelling',
                          'Cross-functional collaboration',
                          'User research and interviews',
                          'Negotiation and influence'
                        ],
                        color: '#f59e0b'
                      },
                      {
                        category: 'Design & UX',
                        skills: [
                          'User experience principles',
                          'Design thinking methodology',
                          'Prototyping tools (Figma, Sketch)',
                          'User journey mapping',
                          'Accessibility considerations'
                        ],
                        color: '#ef4444'
                      }
                    ].map((skillSet, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
                        <h5 style={{ color: skillSet.color, fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>
                          {skillSet.category}
                        </h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {skillSet.skills.map((skill, idx) => (
                            <li key={idx} style={{ 
                              color: '#cbd5e1', 
                              fontSize: '0.875rem', 
                              marginBottom: '0.5rem',
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
                    ))}
                  </div>
                </div>

                {/* PM Frameworks */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Product Management Frameworks
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                      {
                        framework: 'RICE Prioritization',
                        purpose: 'Feature & Initiative Prioritization',
                        description: 'Reach × Impact × Confidence ÷ Effort = Priority Score',
                        whenToUse: 'When you have many features to prioritize and need objective scoring',
                        example: 'Feature A: (1000 × 3 × 80%) ÷ 2 = 1,200 points',
                        color: '#3b82f6'
                      },
                      {
                        framework: 'Jobs-to-be-Done (JTBD)',
                        purpose: 'Understanding User Needs',
                        description: 'Focus on the job users hire your product to do',
                        whenToUse: 'When developing new products or understanding user motivation',
                        example: 'Users hire Uber to "get from point A to B quickly and conveniently"',
                        color: '#10b981'
                      },
                      {
                        framework: 'North Star Metric',
                        purpose: 'Team Alignment & Focus',
                        description: 'Single metric that captures core value delivered to customers',
                        whenToUse: 'When aligning teams around long-term product success',
                        example: 'Spotify: Time spent listening, Airbnb: Nights booked',
                        color: '#f59e0b'
                      },
                      {
                        framework: 'OKRs (Objectives & Key Results)',
                        purpose: 'Goal Setting & Tracking',
                        description: 'Qualitative objectives supported by quantitative key results',
                        whenToUse: 'For quarterly goal setting and progress tracking',
                        example: 'Objective: Improve user engagement. KR: Increase DAU by 15%',
                        color: '#ef4444'
                      },
                      {
                        framework: 'Design Thinking',
                        purpose: 'Problem Solving & Innovation',
                        description: 'Empathize → Define → Ideate → Prototype → Test',
                        whenToUse: 'When tackling complex user problems or innovating new solutions',
                        example: 'Understanding pain points in checkout flow through user interviews',
                        color: '#8b5cf6'
                      },
                      {
                        framework: 'Lean Startup',
                        purpose: 'Product Development & Validation',
                        description: 'Build → Measure → Learn cycle with MVP approach',
                        whenToUse: 'When launching new products or features with high uncertainty',
                        example: 'Launch basic version, measure user behavior, iterate quickly',
                        color: '#06b6d4'
                      }
                    ].map((framework, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${framework.color}30` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                          <div>
                            <h5 style={{ color: framework.color, fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                              {framework.framework}
                            </h5>
                            <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{framework.purpose}</span>
                          </div>
                        </div>
                        
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                          <strong>How it works:</strong> {framework.description}
                        </p>
                        
                        <div style={{ marginBottom: '1rem' }}>
                          <p style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>When to use:</strong>
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.4' }}>
                            {framework.whenToUse}
                          </p>
                        </div>
                        
                        <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '6px' }}>
                          <p style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>Example:</strong>
                          </p>
                          <p style={{ color: framework.color, fontSize: '0.875rem', lineHeight: '1.4' }}>
                            {framework.example}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Software */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Essential Tools & Software
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        category: 'Analytics',
                        tools: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Hotjar', 'Segment'],
                        color: '#3b82f6'
                      },
                      {
                        category: 'Project Management',
                        tools: ['Jira', 'Asana', 'Linear', 'Monday.com', 'Notion'],
                        color: '#10b981'
                      },
                      {
                        category: 'Design & Prototyping',
                        tools: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Miro'],
                        color: '#f59e0b'
                      },
                      {
                        category: 'Communication',
                        tools: ['Slack', 'Zoom', 'Loom', 'Confluence', 'Microsoft Teams'],
                        color: '#ef4444'
                      },
                      {
                        category: 'User Research',
                        tools: ['UserVoice', 'Typeform', 'SurveyMonkey', 'Calendly', 'Zoom'],
                        color: '#8b5cf6'
                      }
                    ].map((toolSet, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: toolSet.color, marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {toolSet.category}
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                          {toolSet.tools.map((tool, idx) => (
                            <span key={idx} style={{ 
                              backgroundColor: `${toolSet.color}20`, 
                              color: toolSet.color, 
                              padding: '0.25rem 0.5rem', 
                              borderRadius: '12px', 
                              fontSize: '0.75rem',
                              border: `1px solid ${toolSet.color}40`
                            }}>
                              {tool}
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

        {activeTab === 'career' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Product Management Career Roadmap
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Career Progression */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Career Progression Path
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      {
                        role: 'Associate Product Manager (APM)',
                        experience: '0-2 years',
                        salary: '$80,000 - $120,000',
                        focus: 'Learning fundamentals, supporting senior PMs, small feature ownership',
                        responsibilities: [
                          'Market research and competitive analysis',
                          'User story writing and requirements gathering',
                          'Data analysis and reporting',
                          'Supporting product launches and initiatives'
                        ],
                        growth: 'Focus on learning frameworks, building technical understanding, and developing communication skills',
                        color: '#3b82f6'
                      },
                      {
                        role: 'Product Manager',
                        experience: '2-5 years',
                        salary: '$100,000 - $160,000',
                        focus: 'Full ownership of product areas, cross-functional leadership, strategy execution',
                        responsibilities: [
                          'Product roadmap planning and execution',
                          'Feature prioritization and backlog management',
                          'Cross-functional team leadership',
                          'Customer research and validation'
                        ],
                        growth: 'Build domain expertise, strengthen analytical skills, develop leadership capabilities',
                        color: '#10b981'
                      },
                      {
                        role: 'Senior Product Manager',
                        experience: '5-8 years',
                        salary: '$140,000 - $200,000',
                        focus: 'Complex product areas, strategic initiatives, mentoring, platform thinking',
                        responsibilities: [
                          'Strategic product planning and vision',
                          'Complex cross-team coordination',
                          'Mentoring junior product managers',
                          'Executive stakeholder management'
                        ],
                        growth: 'Develop strategic thinking, build influence across organization, specialize in domain or type',
                        color: '#f59e0b'
                      },
                      {
                        role: 'Principal Product Manager',
                        experience: '8-12 years',
                        salary: '$180,000 - $280,000',
                        focus: 'Platform strategy, technical architecture, cross-product initiatives',
                        responsibilities: [
                          'Technical product strategy and architecture',
                          'Platform and infrastructure decisions',
                          'Cross-product integration and strategy',
                          'Technical partnership and API strategy'
                        ],
                        growth: 'Deepen technical expertise, build industry thought leadership, drive innovation',
                        color: '#ef4444'
                      },
                      {
                        role: 'Director of Product',
                        experience: '7-12 years',
                        salary: '$200,000 - $320,000',
                        focus: 'Team management, product portfolio strategy, organizational scaling',
                        responsibilities: [
                          'Team hiring, development, and management',
                          'Product portfolio strategy and planning',
                          'Cross-functional organization building',
                          'Strategic business partnership'
                        ],
                        growth: 'Develop management skills, build high-performing teams, drive organizational change',
                        color: '#8b5cf6'
                      },
                      {
                        role: 'VP of Product / CPO',
                        experience: '12+ years',
                        salary: '$250,000 - $500,000+',
                        focus: 'Company-wide product strategy, executive leadership, market positioning',
                        responsibilities: [
                          'Company product vision and strategy',
                          'Executive team collaboration and leadership',
                          'Market positioning and competitive strategy',
                          'Board-level strategic communication'
                        ],
                        growth: 'Executive presence, strategic business leadership, industry influence and networking',
                        color: '#06b6d4'
                      }
                    ].map((level, index) => (
                      <div key={index} style={{ display: 'flex', padding: '1.5rem', backgroundColor: '#1e293b', borderRadius: '8px', border: `1px solid ${level.color}30` }}>
                        <div style={{ 
                          backgroundColor: level.color, 
                          color: 'white', 
                          borderRadius: '50%', 
                          width: '40px', 
                          height: '40px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          marginRight: '1.5rem',
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>
                          {index + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: level.color, margin: 0, fontSize: '1.125rem', fontWeight: '600' }}>{level.role}</h5>
                            <span style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{level.salary}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{level.experience}</span>
                          </div>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                            <strong>Focus:</strong> {level.focus}
                          </p>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                            <div>
                              <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Key Responsibilities:</h6>
                              <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.4', paddingLeft: '1rem', margin: 0 }}>
                                {level.responsibilities.map((resp, idx) => (
                                  <li key={idx} style={{ marginBottom: '0.25rem' }}>{resp}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Growth Focus:</h6>
                              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.4', margin: 0 }}>
                                {level.growth}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Breaking into PM */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Breaking Into Product Management
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                      {
                        background: 'From Engineering',
                        advantages: ['Technical depth and credibility', 'Understanding of development process', 'Ability to make technical trade-offs'],
                        approach: 'Develop business acumen, user empathy, and communication skills. Start by taking on PM responsibilities within engineering teams.',
                        timeline: '6-12 months transition period',
                        color: '#3b82f6'
                      },
                      {
                        background: 'From Design/UX',
                        advantages: ['User-centered thinking', 'Design and prototyping skills', 'Understanding of user research'],
                        approach: 'Build analytical skills, learn business fundamentals, and develop technical understanding. Focus on data-driven decision making.',
                        timeline: '6-9 months transition period',
                        color: '#10b981'
                      },
                      {
                        background: 'From Business/Consulting',
                        advantages: ['Strategic thinking', 'Analytical and problem-solving skills', 'Stakeholder management experience'],
                        approach: 'Gain technical knowledge, understand software development, and build user empathy through research and customer interaction.',
                        timeline: '9-12 months transition period',
                        color: '#f59e0b'
                      },
                      {
                        background: 'From Marketing',
                        advantages: ['Customer understanding', 'Go-to-market experience', 'Communication and messaging skills'],
                        approach: 'Develop product development skills, learn technical concepts, and focus on product analytics and user behavior.',
                        timeline: '6-9 months transition period',
                        color: '#ef4444'
                      }
                    ].map((path, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${path.color}30` }}>
                        <h5 style={{ color: path.color, fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>
                          {path.background}
                        </h5>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                          <div>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Advantages:</h6>
                            <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.4', paddingLeft: '1rem', margin: 0 }}>
                              {path.advantages.map((advantage, idx) => (
                                <li key={idx} style={{ marginBottom: '0.25rem' }}>{advantage}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Transition Strategy:</h6>
                            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                              {path.approach}
                            </p>
                            <p style={{ color: path.color, fontSize: '0.875rem', fontWeight: '600' }}>
                              {path.timeline}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Plan */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    90-Day Action Plan for Aspiring PMs
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        period: 'Days 1-30: Foundation',
                        actions: [
                          'Read "Inspired" by Marty Cagan',
                          'Complete Google Analytics certification',
                          'Start following product blogs and newsletters',
                          'Identify products you use daily and analyze them'
                        ]
                      },
                      {
                        period: 'Days 31-60: Skills Building',
                        actions: [
                          'Learn basic SQL for data analysis',
                          'Practice framework applications (RICE, JTBD)',
                          'Conduct user interviews with friends/colleagues',
                          'Create mock product requirements documents'
                        ]
                      },
                      {
                        period: 'Days 61-90: Application',
                        actions: [
                          'Build portfolio with case studies',
                          'Network with PMs in your target companies',
                          'Apply for APM programs or PM roles',
                          'Prepare for PM interviews with mock sessions'
                        ]
                      }
                    ].map((phase, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#c4b5fd', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                          {phase.period}
                        </h5>
                        <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.4', paddingLeft: '1rem', margin: 0 }}>
                          {phase.actions.map((action, idx) => (
                            <li key={idx} style={{ marginBottom: '0.25rem' }}>{action}</li>
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
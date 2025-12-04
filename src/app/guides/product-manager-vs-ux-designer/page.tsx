'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Target, Palette, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

export default function ProductManagerVsUXDesignerGuide() {
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Product Manager vs UX Designer
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Compare these two crucial product development roles and understand which career path aligns with your interests and skills.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'comparison', label: 'Role Comparison', icon: Target },
            { id: 'skills', label: 'Skills & Paths', icon: TrendingUp },
            { id: 'transition', label: 'Career Transition', icon: Users }
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
              {/* Product Manager */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#3b82f6', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Target size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Product Manager</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Primary Focus</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    Strategy, roadmap planning, and business outcomes. Defines what to build and why.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Responsibilities</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Product strategy and vision</li>
                    <li>Roadmap prioritization</li>
                    <li>Stakeholder management</li>
                    <li>Market research and analysis</li>
                    <li>Cross-functional team coordination</li>
                    <li>Metrics and KPI tracking</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Average Salary Range</h4>
                  <p style={{ color: '#10b981', fontSize: '1.125rem', fontWeight: '600' }}>
                    $95,000 - $180,000+
                  </p>
                </div>
              </div>

              {/* UX Designer */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#8b5cf6', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Palette size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>UX Designer</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Primary Focus</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    User experience, design systems, and interface optimization. Defines how users interact with products.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Responsibilities</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>User research and testing</li>
                    <li>Wireframing and prototyping</li>
                    <li>Design system creation</li>
                    <li>Usability optimization</li>
                    <li>Design handoffs to developers</li>
                    <li>Design iteration based on feedback</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Average Salary Range</h4>
                  <p style={{ color: '#10b981', fontSize: '1.125rem', fontWeight: '600' }}>
                    $70,000 - $140,000+
                  </p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Key Differences Summary
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Product Manager Strengths</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Business strategy focus</li>
                    <li>Data-driven decision making</li>
                    <li>Cross-functional leadership</li>
                    <li>Market understanding</li>
                    <li>Resource prioritization</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>UX Designer Strengths</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>User empathy and advocacy</li>
                    <li>Creative problem solving</li>
                    <li>Visual design skills</li>
                    <li>Prototyping expertise</li>
                    <li>Usability optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
              {/* PM Skills */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#3b82f6' }}>
                  Product Manager Skills
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Technical Skills</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Analytics Tools', 'SQL Basics', 'A/B Testing', 'APIs Understanding', 'Agile/Scrum', 'Roadmapping Tools'].map(skill => (
                      <span key={skill} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Business Skills</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Market Research', 'Competitive Analysis', 'Business Modeling', 'P&L Management', 'Go-to-Market', 'Stakeholder Management'].map(skill => (
                      <span key={skill} style={{ backgroundColor: '#1d4ed8', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Soft Skills</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Leadership', 'Communication', 'Decision Making', 'Problem Solving', 'Negotiation', 'Time Management'].map(skill => (
                      <span key={skill} style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* UX Skills */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#8b5cf6' }}>
                  UX Designer Skills
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Design Tools</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Figma', 'Sketch', 'Adobe XD', 'Principle', 'InVision', 'Miro'].map(skill => (
                      <span key={skill} style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Research Skills</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['User Interviews', 'Usability Testing', 'Journey Mapping', 'Personas', 'Card Sorting', 'Analytics'].map(skill => (
                      <span key={skill} style={{ backgroundColor: '#7c3aed', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Design Skills</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Visual Design', 'Interaction Design', 'Prototyping', 'Design Systems', 'Accessibility', 'Information Architecture'].map(skill => (
                      <span key={skill} style={{ backgroundColor: '#6d28d9', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Career Progression Paths
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Product Management Path</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      'Associate Product Manager',
                      'Product Manager',
                      'Senior Product Manager',
                      'Principal Product Manager',
                      'Director of Product',
                      'VP of Product / CPO'
                    ].map((role, index) => (
                      <div key={role} style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px' }}>
                        <div style={{ backgroundColor: '#3b82f6', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          {index + 1}
                        </div>
                        <span style={{ color: '#cbd5e1' }}>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>UX Design Path</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      'Junior UX Designer',
                      'UX Designer',
                      'Senior UX Designer',
                      'Lead UX Designer',
                      'Principal UX Designer',
                      'Design Director / Head of Design'
                    ].map((role, index) => (
                      <div key={role} style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px' }}>
                        <div style={{ backgroundColor: '#8b5cf6', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          {index + 1}
                        </div>
                        <span style={{ color: '#cbd5e1' }}>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transition' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Career Transition Strategies
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>From UX Designer to Product Manager</h4>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem' }}>Leverage Your Advantages</h5>
                    <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                      <li>Deep user empathy and research skills</li>
                      <li>Understanding of design constraints and possibilities</li>
                      <li>Cross-functional collaboration experience</li>
                      <li>Problem-solving mindset</li>
                    </ul>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem' }}>Skills to Develop</h5>
                    <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                      <li>Business strategy and market analysis</li>
                      <li>Data analytics and metrics interpretation</li>
                      <li>Technical understanding of development processes</li>
                      <li>Financial modeling and business case development</li>
                      <li>Stakeholder management and communication</li>
                    </ul>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem' }}>Transition Steps</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {[
                        'Take on product strategy projects in current role',
                        'Learn analytics tools (Google Analytics, Mixpanel)',
                        'Shadow product managers in your organization',
                        'Build a portfolio showcasing business impact',
                        'Consider PM bootcamps or certification programs'
                      ].map((step, index) => (
                        <div key={step} style={{ display: 'flex', alignItems: 'flex-start', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px' }}>
                          <CheckCircle2 size={16} style={{ color: '#10b981', marginRight: '0.75rem', marginTop: '0.125rem', flexShrink: 0 }} />
                          <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>From Product Manager to UX Designer</h4>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem' }}>Leverage Your Advantages</h5>
                    <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                      <li>Strategic thinking and business understanding</li>
                      <li>Cross-functional team leadership</li>
                      <li>Data-driven decision making</li>
                      <li>Understanding of technical constraints</li>
                    </ul>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem' }}>Skills to Develop</h5>
                    <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                      <li>Design tools mastery (Figma, Sketch, Adobe XD)</li>
                      <li>Visual design principles and theory</li>
                      <li>User research methodologies</li>
                      <li>Interaction design and prototyping</li>
                      <li>Design system creation and maintenance</li>
                    </ul>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem' }}>Transition Steps</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {[
                        'Take design courses (online or bootcamp)',
                        'Practice with design challenges and personal projects',
                        'Build a design portfolio showcasing process',
                        'Collaborate closely with design team in current role',
                        'Consider starting with UX researcher role'
                      ].map((step, index) => (
                        <div key={step} style={{ display: 'flex', alignItems: 'flex-start', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px' }}>
                          <CheckCircle2 size={16} style={{ color: '#10b981', marginRight: '0.75rem', marginTop: '0.125rem', flexShrink: 0 }} />
                          <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Timeline and Preparation
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Clock size={20} style={{ color: '#3b82f6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#3b82f6', margin: 0 }}>3-6 Months</h4>
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    <strong>Skill Building Phase:</strong> Focus on learning core skills, taking courses, and building initial portfolio or business knowledge.
                  </p>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Clock size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#8b5cf6', margin: 0 }}>6-12 Months</h4>
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    <strong>Experience Phase:</strong> Apply new skills in current role, seek cross-functional projects, and build relevant portfolio pieces.
                  </p>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Clock size={20} style={{ color: '#10b981', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#10b981', margin: 0 }}>12+ Months</h4>
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    <strong>Transition Phase:</strong> Network within target role, apply for positions, and leverage internal opportunities for role changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
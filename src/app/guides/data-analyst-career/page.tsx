'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BarChart3, Database, TrendingUp, CheckCircle2, Target, Users, PieChart } from 'lucide-react';

export default function DataAnalystCareerGuide() {
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            What Does a Data Analyst Do?
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Discover the role of data analysts, their daily responsibilities, required skills, career progression paths, and salary expectations in the evolving data landscape.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'overview', label: 'Role Overview', icon: BarChart3 },
            { id: 'skills', label: 'Skills & Tools', icon: Database },
            { id: 'career', label: 'Career Path', icon: TrendingUp }
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
                Data Analyst Role Overview
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* What Data Analysts Do */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Target size={20} style={{ marginRight: '0.5rem' }} />
                    Core Responsibilities
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        responsibility: 'Data Collection & Preparation',
                        description: 'Gather data from multiple sources and clean it for analysis',
                        tasks: ['Extract data from databases', 'Clean and validate datasets', 'Handle missing values', 'Transform data formats'],
                        timeSpent: '30-40%',
                        color: '#10b981'
                      },
                      {
                        responsibility: 'Data Analysis & Modeling',
                        description: 'Apply statistical methods to discover patterns and insights',
                        tasks: ['Perform statistical analysis', 'Create predictive models', 'Identify trends and patterns', 'Test hypotheses'],
                        timeSpent: '25-35%',
                        color: '#3b82f6'
                      },
                      {
                        responsibility: 'Data Visualization',
                        description: 'Create charts, graphs, and dashboards to communicate findings',
                        tasks: ['Design interactive dashboards', 'Create compelling charts', 'Build executive reports', 'Present findings visually'],
                        timeSpent: '20-25%',
                        color: '#f59e0b'
                      },
                      {
                        responsibility: 'Business Intelligence',
                        description: 'Translate data insights into actionable business recommendations',
                        tasks: ['Collaborate with stakeholders', 'Present findings to management', 'Recommend strategic actions', 'Monitor KPIs'],
                        timeSpent: '15-20%',
                        color: '#8b5cf6'
                      }
                    ].map((item, index) => (
                      <div key={index} style={{ 
                        backgroundColor: '#1e293b', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        border: `1px solid ${item.color}`
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <h5 style={{ color: item.color, margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                            {item.responsibility}
                          </h5>
                          <span style={{ 
                            backgroundColor: `${item.color}20`,
                            color: item.color,
                            padding: '0.25rem 0.5rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                          }}>
                            {item.timeSpent}
                          </span>
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {item.description}
                        </p>
                        <div>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Key Tasks:</strong>
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {item.tasks.map((task, idx) => (
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
                                  color: item.color 
                                }} />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day in the Life */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    A Day in the Life of a Data Analyst
                  </h4>
                  
                  <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                      {[
                        { time: '9:00 AM', activity: 'Review overnight reports & KPI dashboards', type: 'monitoring' },
                        { time: '9:30 AM', activity: 'Team standup meeting', type: 'collaboration' },
                        { time: '10:00 AM', activity: 'Extract and clean data for quarterly analysis', type: 'data-prep' },
                        { time: '11:30 AM', activity: 'Statistical analysis using Python/R', type: 'analysis' },
                        { time: '1:00 PM', activity: 'Lunch break', type: 'break' },
                        { time: '2:00 PM', activity: 'Create visualizations in Tableau/Power BI', type: 'visualization' },
                        { time: '3:30 PM', activity: 'Present findings to marketing team', type: 'presentation' },
                        { time: '4:30 PM', activity: 'Update automated reporting scripts', type: 'automation' },
                        { time: '5:30 PM', activity: 'Documentation and planning tomorrow\'s tasks', type: 'planning' }
                      ].map((item, index) => {
                        const typeColors = {
                          monitoring: '#3b82f6',
                          collaboration: '#10b981',
                          'data-prep': '#f59e0b',
                          analysis: '#8b5cf6',
                          break: '#6b7280',
                          visualization: '#06b6d4',
                          presentation: '#ef4444',
                          automation: '#84cc16',
                          planning: '#f97316'
                        };
                        return (
                          <div key={index} style={{ 
                            minWidth: '200px',
                            backgroundColor: typeColors[item.type as keyof typeof typeColors],
                            color: 'white',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                          }}>
                            <h6 style={{ margin: 0, marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '600' }}>
                              {item.time}
                            </h6>
                            <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9, lineHeight: '1.2' }}>
                              {item.activity}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Industry Applications */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Data Analytics Across Industries
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        industry: 'E-commerce & Retail',
                        applications: ['Customer segmentation', 'Sales forecasting', 'Inventory optimization', 'Price analytics'],
                        keyMetrics: ['Conversion rates', 'Customer lifetime value', 'Cart abandonment', 'Inventory turnover'],
                        example: 'Analyzing customer purchase patterns to optimize product recommendations'
                      },
                      {
                        industry: 'Healthcare',
                        applications: ['Patient outcomes analysis', 'Treatment effectiveness', 'Resource allocation', 'Epidemiological studies'],
                        keyMetrics: ['Patient readmission rates', 'Treatment success rates', 'Cost per patient', 'Wait times'],
                        example: 'Identifying factors that predict patient readmission to improve care quality'
                      },
                      {
                        industry: 'Finance & Banking',
                        applications: ['Risk assessment', 'Fraud detection', 'Credit scoring', 'Investment analysis'],
                        keyMetrics: ['Default rates', 'Return on investment', 'Risk-adjusted returns', 'Customer acquisition cost'],
                        example: 'Building models to detect fraudulent transactions in real-time'
                      },
                      {
                        industry: 'Technology',
                        applications: ['User behavior analysis', 'Product analytics', 'A/B testing', 'Performance monitoring'],
                        keyMetrics: ['User engagement', 'Feature adoption', 'System performance', 'Churn rate'],
                        example: 'Analyzing user interaction data to improve app user experience'
                      },
                      {
                        industry: 'Marketing & Advertising',
                        applications: ['Campaign performance', 'Customer acquisition', 'Brand sentiment', 'Market research'],
                        keyMetrics: ['Click-through rates', 'Cost per acquisition', 'Brand awareness', 'Social media engagement'],
                        example: 'Measuring the effectiveness of multi-channel marketing campaigns'
                      },
                      {
                        industry: 'Manufacturing',
                        applications: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'Production efficiency'],
                        keyMetrics: ['Defect rates', 'Equipment uptime', 'Production throughput', 'Cost per unit'],
                        example: 'Predicting equipment failures to minimize production downtime'
                      }
                    ].map((industry, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h5 style={{ color: '#fbbf24', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                          {industry.industry}
                        </h5>
                        
                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Applications:</strong>
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.5rem' }}>
                            {industry.applications.map((app, idx) => (
                              <span key={idx} style={{
                                backgroundColor: '#f59e0b20',
                                color: '#f59e0b',
                                padding: '0.125rem 0.375rem',
                                borderRadius: '6px',
                                fontSize: '0.6875rem',
                                fontWeight: '500'
                              }}>
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Key Metrics:</strong>
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.5rem' }}>
                            {industry.keyMetrics.map((metric, idx) => (
                              <span key={idx} style={{
                                backgroundColor: '#3b82f620',
                                color: '#3b82f6',
                                padding: '0.125rem 0.375rem',
                                borderRadius: '6px',
                                fontSize: '0.6875rem',
                                fontWeight: '500'
                              }}>
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p style={{ color: '#cbd5e1', fontSize: '0.75rem', fontStyle: 'italic', lineHeight: '1.3' }}>
                          <strong>Example:</strong> {industry.example}
                        </p>
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
                Essential Skills & Tools for Data Analysts
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Technical Skills */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Database size={20} style={{ marginRight: '0.5rem' }} />
                    Technical Skills Matrix
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                      {
                        category: 'Programming Languages',
                        skills: [
                          { skill: 'SQL', proficiency: 'Essential', usage: 'Database queries, data extraction', popularity: 95 },
                          { skill: 'Python', proficiency: 'Highly Recommended', usage: 'Data analysis, automation, ML', popularity: 85 },
                          { skill: 'R', proficiency: 'Recommended', usage: 'Statistical analysis, research', popularity: 70 },
                          { skill: 'JavaScript', proficiency: 'Nice to Have', usage: 'Web-based visualizations', popularity: 45 }
                        ],
                        color: '#10b981'
                      },
                      {
                        category: 'Data Visualization Tools',
                        skills: [
                          { skill: 'Tableau', proficiency: 'Highly Recommended', usage: 'Interactive dashboards, reports', popularity: 80 },
                          { skill: 'Power BI', proficiency: 'Highly Recommended', usage: 'Business intelligence, dashboards', popularity: 75 },
                          { skill: 'Excel', proficiency: 'Essential', usage: 'Basic analysis, quick reports', popularity: 90 },
                          { skill: 'Matplotlib/Seaborn', proficiency: 'Recommended', usage: 'Python-based plotting', popularity: 65 }
                        ],
                        color: '#3b82f6'
                      },
                      {
                        category: 'Database & Big Data',
                        skills: [
                          { skill: 'MySQL/PostgreSQL', proficiency: 'Essential', usage: 'Relational database management', popularity: 85 },
                          { skill: 'MongoDB', proficiency: 'Recommended', usage: 'NoSQL database queries', popularity: 50 },
                          { skill: 'Apache Spark', proficiency: 'Nice to Have', usage: 'Big data processing', popularity: 40 },
                          { skill: 'Hadoop', proficiency: 'Nice to Have', usage: 'Distributed data storage', popularity: 35 }
                        ],
                        color: '#f59e0b'
                      },
                      {
                        category: 'Statistical & Analytics Tools',
                        skills: [
                          { skill: 'Statistical Analysis', proficiency: 'Essential', usage: 'Hypothesis testing, regression', popularity: 90 },
                          { skill: 'Google Analytics', proficiency: 'Recommended', usage: 'Web analytics, marketing data', popularity: 60 },
                          { skill: 'SAS', proficiency: 'Nice to Have', usage: 'Advanced statistical analysis', popularity: 35 },
                          { skill: 'SPSS', proficiency: 'Nice to Have', usage: 'Social science research', popularity: 30 }
                        ],
                        color: '#8b5cf6'
                      }
                    ].map((category, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: `1px solid ${category.color}` }}>
                        <h5 style={{ color: category.color, marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                          {category.category}
                        </h5>
                        
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                          {category.skills.map((skillItem, idx) => (
                            <div key={idx} style={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              backgroundColor: '#0f172a',
                              padding: '0.75rem',
                              borderRadius: '6px'
                            }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                                  <h6 style={{ color: '#f1f5f9', margin: 0, fontSize: '0.875rem', fontWeight: '600', marginRight: '0.75rem' }}>
                                    {skillItem.skill}
                                  </h6>
                                  <span style={{ 
                                    backgroundColor: skillItem.proficiency === 'Essential' ? '#10b981' : 
                                                   skillItem.proficiency === 'Highly Recommended' ? '#3b82f6' :
                                                   skillItem.proficiency === 'Recommended' ? '#f59e0b' : '#6b7280',
                                    color: 'white',
                                    padding: '0.125rem 0.375rem',
                                    borderRadius: '6px',
                                    fontSize: '0.6875rem',
                                    fontWeight: '500'
                                  }}>
                                    {skillItem.proficiency}
                                  </span>
                                </div>
                                <p style={{ color: '#cbd5e1', fontSize: '0.75rem', margin: 0 }}>
                                  {skillItem.usage}
                                </p>
                              </div>
                              <div style={{ marginLeft: '1rem', textAlign: 'right' }}>
                                <div style={{ 
                                  width: '60px',
                                  height: '6px',
                                  backgroundColor: '#334155',
                                  borderRadius: '3px',
                                  overflow: 'hidden',
                                  marginBottom: '0.25rem'
                                }}>
                                  <div style={{
                                    width: `${skillItem.popularity}%`,
                                    height: '100%',
                                    backgroundColor: category.color,
                                    borderRadius: '3px'
                                  }}></div>
                                </div>
                                <span style={{ color: '#94a3b8', fontSize: '0.6875rem' }}>
                                  {skillItem.popularity}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Users size={20} style={{ marginRight: '0.5rem' }} />
                    Essential Soft Skills
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        skill: 'Critical Thinking',
                        description: 'Analyze problems objectively and make data-driven decisions',
                        importance: 'Very High',
                        examples: ['Question data quality', 'Identify biases', 'Validate assumptions']
                      },
                      {
                        skill: 'Communication',
                        description: 'Translate complex data insights into clear business language',
                        importance: 'Very High',
                        examples: ['Present to executives', 'Write clear reports', 'Explain methodologies']
                      },
                      {
                        skill: 'Business Acumen',
                        description: 'Understand business context and strategic implications',
                        importance: 'High',
                        examples: ['Align with business goals', 'Understand KPIs', 'Industry knowledge']
                      },
                      {
                        skill: 'Curiosity & Learning',
                        description: 'Continuous learning and exploration of data patterns',
                        importance: 'High',
                        examples: ['Explore new tools', 'Ask probing questions', 'Stay updated']
                      },
                      {
                        skill: 'Attention to Detail',
                        description: 'Ensure data accuracy and quality in analysis',
                        importance: 'High',
                        examples: ['Data validation', 'Quality checks', 'Accurate reporting']
                      },
                      {
                        skill: 'Collaboration',
                        description: 'Work effectively with cross-functional teams',
                        importance: 'Medium-High',
                        examples: ['Work with stakeholders', 'Team projects', 'Knowledge sharing']
                      }
                    ].map((skill, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #10b981' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <h5 style={{ color: '#34d399', margin: 0, fontSize: '0.875rem', fontWeight: '600' }}>
                            {skill.skill}
                          </h5>
                          <span style={{ 
                            backgroundColor: skill.importance === 'Very High' ? '#ef4444' : skill.importance === 'High' ? '#f59e0b' : '#10b981',
                            color: 'white',
                            padding: '0.125rem 0.375rem',
                            borderRadius: '6px',
                            fontSize: '0.6875rem',
                            fontWeight: '500'
                          }}>
                            {skill.importance}
                          </span>
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {skill.description}
                        </p>
                        <div>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Examples:</strong>
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {skill.examples.map((example, idx) => (
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
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Path */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Data Analyst Learning Roadmap
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        phase: 'Foundation (Months 1-3)',
                        skills: ['Excel proficiency', 'Basic statistics', 'SQL fundamentals', 'Data visualization basics'],
                        resources: ['Coursera SQL courses', 'Khan Academy Statistics', 'Excel training'],
                        milestone: 'Create first dashboard using Excel/Google Sheets'
                      },
                      {
                        phase: 'Intermediate (Months 4-8)',
                        skills: ['Python/R programming', 'Advanced SQL', 'Tableau/Power BI', 'Statistical analysis'],
                        resources: ['Python for Data Analysis', 'Tableau Public training', 'Kaggle Learn'],
                        milestone: 'Complete end-to-end analysis project with Python/R'
                      },
                      {
                        phase: 'Advanced (Months 9-12)',
                        skills: ['Machine learning basics', 'Big data tools', 'Advanced visualization', 'Business intelligence'],
                        resources: ['scikit-learn documentation', 'Spark tutorials', 'Advanced Tableau'],
                        milestone: 'Build predictive model and present to stakeholders'
                      },
                      {
                        phase: 'Professional (Year 2+)',
                        skills: ['Domain expertise', 'Advanced ML', 'Data engineering', 'Leadership skills'],
                        resources: ['Industry publications', 'Professional certifications', 'Conferences'],
                        milestone: 'Lead cross-functional analytics initiatives'
                      }
                    ].map((phase, index) => (
                      <div key={index} style={{ display: 'flex', padding: '1rem', backgroundColor: '#1e293b', borderRadius: '8px' }}>
                        <div style={{ 
                          backgroundColor: '#8b5cf6', 
                          color: 'white', 
                          borderRadius: '50%', 
                          width: '40px', 
                          height: '40px', 
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
                          <h5 style={{ color: '#c4b5fd', margin: 0, fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                            {phase.phase}
                          </h5>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>Skills:</strong> {phase.skills.join(' • ')}
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                            <strong>Resources:</strong> {phase.resources.join(' • ')}
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontStyle: 'italic' }}>
                            <strong>Milestone:</strong> {phase.milestone}
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

        {activeTab === 'career' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Data Analyst Career Path & Progression
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Career Progression */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <TrendingUp size={20} style={{ marginRight: '0.5rem' }} />
                    Career Progression Levels
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        level: 'Junior Data Analyst',
                        experience: '0-2 years',
                        salary: '$45,000 - $65,000',
                        responsibilities: ['Basic data analysis', 'Report generation', 'Data cleaning', 'Simple visualizations'],
                        skills: ['Excel', 'Basic SQL', 'Tableau/Power BI basics', 'Statistics fundamentals'],
                        nextStep: 'Master advanced SQL and Python/R programming',
                        color: '#10b981'
                      },
                      {
                        level: 'Data Analyst',
                        experience: '2-4 years',
                        salary: '$60,000 - $85,000',
                        responsibilities: ['Complex analysis projects', 'Dashboard development', 'Statistical modeling', 'Stakeholder communication'],
                        skills: ['Advanced SQL', 'Python/R', 'Advanced visualization', 'Statistical analysis'],
                        nextStep: 'Develop domain expertise and leadership skills',
                        color: '#3b82f6'
                      },
                      {
                        level: 'Senior Data Analyst',
                        experience: '4-6 years',
                        salary: '$80,000 - $120,000',
                        responsibilities: ['Lead analysis initiatives', 'Mentor junior analysts', 'Strategic recommendations', 'Cross-functional collaboration'],
                        skills: ['Advanced statistics', 'Machine learning', 'Business acumen', 'Leadership'],
                        nextStep: 'Specialize in management or technical direction',
                        color: '#f59e0b'
                      },
                      {
                        level: 'Principal/Lead Data Analyst',
                        experience: '6+ years',
                        salary: '$110,000 - $160,000',
                        responsibilities: ['Strategy development', 'Team leadership', 'Executive reporting', 'Architecture decisions'],
                        skills: ['Advanced ML', 'Data strategy', 'Team management', 'Executive communication'],
                        nextStep: 'Transition to Data Science Manager or Director roles',
                        color: '#8b5cf6'
                      }
                    ].map((level, index) => (
                      <div key={index} style={{ display: 'flex', padding: '1rem', backgroundColor: '#1e293b', borderRadius: '8px', border: `1px solid ${level.color}` }}>
                        <div style={{ 
                          backgroundColor: level.color, 
                          color: 'white', 
                          borderRadius: '8px',
                          padding: '0.5rem',
                          marginRight: '1rem',
                          textAlign: 'center',
                          minWidth: '80px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold'
                        }}>
                          {level.experience}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <h5 style={{ color: level.color, margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                              {level.level}
                            </h5>
                            <span style={{ 
                              backgroundColor: `${level.color}20`,
                              color: level.color,
                              padding: '0.25rem 0.5rem',
                              borderRadius: '6px',
                              fontSize: '0.875rem',
                              fontWeight: '600'
                            }}>
                              {level.salary}
                            </span>
                          </div>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>Key Responsibilities:</strong> {level.responsibilities.join(' • ')}
                          </p>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>Required Skills:</strong> {level.skills.join(' • ')}
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontStyle: 'italic' }}>
                            <strong>Next Step:</strong> {level.nextStep}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Specializations */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Career Specialization Paths
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        path: 'Data Scientist',
                        description: 'Advanced analytics and machine learning focus',
                        requirements: ['Advanced statistics', 'Machine learning', 'Programming expertise', 'Research skills'],
                        salaryRange: '$95,000 - $180,000',
                        growth: 'Very High'
                      },
                      {
                        path: 'Business Intelligence Analyst',
                        description: 'Focus on business reporting and intelligence systems',
                        requirements: ['BI tools mastery', 'Business acumen', 'Dashboard design', 'ETL processes'],
                        salaryRange: '$70,000 - $130,000',
                        growth: 'High'
                      },
                      {
                        path: 'Product Analyst',
                        description: 'Analyze product performance and user behavior',
                        requirements: ['Product knowledge', 'A/B testing', 'User analytics', 'Experimentation'],
                        salaryRange: '$80,000 - $140,000',
                        growth: 'Very High'
                      },
                      {
                        path: 'Marketing Analyst',
                        description: 'Focus on marketing campaigns and customer insights',
                        requirements: ['Marketing knowledge', 'Customer analytics', 'Campaign analysis', 'ROI measurement'],
                        salaryRange: '$60,000 - $110,000',
                        growth: 'Medium-High'
                      },
                      {
                        path: 'Financial Analyst',
                        description: 'Financial data analysis and forecasting',
                        requirements: ['Financial modeling', 'Risk analysis', 'Forecasting', 'Regulatory knowledge'],
                        salaryRange: '$65,000 - $120,000',
                        growth: 'Medium'
                      },
                      {
                        path: 'Operations Analyst',
                        description: 'Optimize business operations and processes',
                        requirements: ['Process optimization', 'Supply chain', 'Operations research', 'Efficiency metrics'],
                        salaryRange: '$60,000 - $115,000',
                        growth: 'Medium-High'
                      }
                    ].map((path, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <h5 style={{ color: '#34d399', margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                            {path.path}
                          </h5>
                          <span style={{ 
                            backgroundColor: path.growth === 'Very High' ? '#10b981' : 
                                           path.growth === 'High' ? '#3b82f6' : 
                                           path.growth === 'Medium-High' ? '#f59e0b' : '#6b7280',
                            color: 'white',
                            padding: '0.125rem 0.375rem',
                            borderRadius: '6px',
                            fontSize: '0.6875rem',
                            fontWeight: '500'
                          }}>
                            {path.growth}
                          </span>
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {path.description}
                        </p>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Key Requirements:</strong>
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {path.requirements.map((req, idx) => (
                              <span key={idx} style={{
                                backgroundColor: '#10b98120',
                                color: '#10b981',
                                padding: '0.125rem 0.375rem',
                                borderRadius: '6px',
                                fontSize: '0.6875rem',
                                fontWeight: '500'
                              }}>
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p style={{ color: '#3b82f6', fontSize: '0.875rem', fontWeight: '600' }}>
                          {path.salaryRange}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Job Market Insights */}
                <div style={{ backgroundColor: '#3b82f620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #3b82f6' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <PieChart size={20} style={{ marginRight: '0.5rem' }} />
                    Job Market & Hiring Insights
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        metric: 'Job Growth Rate',
                        value: '25%',
                        period: '2021-2031',
                        description: 'Much faster than average occupation growth',
                        source: 'Bureau of Labor Statistics'
                      },
                      {
                        metric: 'Median Salary',
                        value: '$82,360',
                        period: '2021',
                        description: 'National median for data analysts',
                        source: 'Bureau of Labor Statistics'
                      },
                      {
                        metric: 'Remote Work',
                        value: '68%',
                        period: 'Current',
                        description: 'Data analyst positions offer remote work',
                        source: 'FlexJobs 2023'
                      },
                      {
                        metric: 'Skills Demand',
                        value: 'SQL #1',
                        period: '2023',
                        description: 'Most requested skill in job postings',
                        source: 'LinkedIn Skills Report'
                      },
                      {
                        metric: 'Industry Demand',
                        value: 'Technology',
                        period: '2023',
                        description: 'Highest hiring volume sector',
                        source: 'Indeed Job Trends'
                      },
                      {
                        metric: 'Entry Level',
                        value: '42%',
                        period: 'Current',
                        description: 'Positions open to new graduates',
                        source: 'Glassdoor Research'
                      }
                    ].map((insight, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#60a5fa', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {insight.metric}
                        </h5>
                        <p style={{ color: '#3b82f6', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                          {insight.value}
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                          {insight.period}
                        </p>
                        <p style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.25rem', lineHeight: '1.3' }}>
                          {insight.description}
                        </p>
                        <p style={{ color: '#64748b', fontSize: '0.6875rem', fontStyle: 'italic' }}>
                          Source: {insight.source}
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
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Users, Briefcase } from 'lucide-react'

export default function DataAnalystInterviewQuestions() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <Link href="/guides" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          background: '#f8f9fa',
          color: '#495057',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '500',
          fontSize: '14px',
          border: '1px solid #dee2e6',
          transition: 'all 0.2s ease',
          marginBottom: '2rem'
        }}>
          <ArrowLeft size={16} />
          Back to Guides
        </Link>

        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            color: '#1a202c',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            #23 - Data Analyst Interview Questions: Complete Preparation
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#718096',
            lineHeight: '1.6'
          }}>
            Comprehensive guide to data analyst interview questions covering SQL, Excel, visualization, and analytical thinking.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          {[
            { id: 'overview', label: 'Overview', icon: BookOpen },
            { id: 'questions', label: 'Questions', icon: Users },
            { id: 'preparation', label: 'Preparation', icon: Briefcase }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 1.5rem',
                  background: activeTab === tab.id ? '#10b981' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#64748b',
                  border: 'none',
                  borderRadius: '8px 8px 0 0',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '0 8px 8px 8px',
          padding: '2rem'
        }}>
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Data Analyst Role Overview
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Core Responsibilities
                </h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                  <li><strong>Data Collection:</strong> Gathering data from various sources and databases</li>
                  <li><strong>Data Cleaning:</strong> Identifying and correcting data quality issues</li>
                  <li><strong>Analysis & Insights:</strong> Performing statistical analysis and finding patterns</li>
                  <li><strong>Visualization:</strong> Creating charts, dashboards, and reports</li>
                  <li><strong>Reporting:</strong> Communicating findings to stakeholders</li>
                  <li><strong>Business Support:</strong> Providing data-driven recommendations</li>
                </ul>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { title: 'Technical Skills', skills: ['SQL', 'Excel/Google Sheets', 'Python/R', 'Tableau/Power BI'] },
                  { title: 'Analytical Skills', skills: ['Statistical Analysis', 'Data Interpretation', 'Pattern Recognition', 'Problem Solving'] },
                  { title: 'Business Skills', skills: ['Domain Knowledge', 'Communication', 'Presentation', 'Project Management'] },
                  { title: 'Tools', skills: ['Database Systems', 'BI Tools', 'Spreadsheet Software', 'Visualization Tools'] }
                ].map((area, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>
                      {area.title}
                    </h4>
                    <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem' }}>
                      {area.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} style={{ marginBottom: '0.25rem' }}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Common Interview Questions
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  SQL & Database Questions
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Write a query to find the second highest salary from an employees table</li>
                    <li>Explain the difference between INNER JOIN and LEFT JOIN</li>
                    <li>How do you handle duplicate rows in a dataset?</li>
                    <li>What's the difference between WHERE and HAVING clauses?</li>
                    <li>Write a query to calculate running totals</li>
                    <li>How do you optimize a slow-performing query?</li>
                    <li>Explain window functions and provide examples</li>
                    <li>How do you handle NULL values in SQL?</li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Excel & Analytical Questions
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Explain VLOOKUP vs INDEX-MATCH functions</li>
                    <li>How do you create and interpret pivot tables?</li>
                    <li>What are the different chart types and when to use them?</li>
                    <li>How do you handle missing data in your analysis?</li>
                    <li>Explain the concept of data validation</li>
                    <li>What's the difference between mean, median, and mode?</li>
                    <li>How do you identify and handle outliers?</li>
                    <li>Describe your approach to data cleaning</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Business & Scenario Questions
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>How would you analyze website traffic decline?</li>
                    <li>What metrics would you use to measure customer satisfaction?</li>
                    <li>How do you prioritize multiple analysis requests?</li>
                    <li>Explain A/B testing and its implementation</li>
                    <li>How do you present complex findings to non-technical stakeholders?</li>
                    <li>Describe a challenging data project you've worked on</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preparation' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Interview Preparation Strategy
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Preparation Timeline (3-4 Weeks)
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    { week: 'Week 1', focus: 'SQL Mastery', tasks: ['Practice basic to advanced SQL queries', 'Learn JOIN operations', 'Master aggregate functions', 'Study window functions'] },
                    { week: 'Week 2', focus: 'Excel & Tools', tasks: ['Advanced Excel functions', 'Pivot tables and charts', 'Data visualization best practices', 'BI tools overview'] },
                    { week: 'Week 3', focus: 'Business Analysis', tasks: ['Case study practice', 'Metric definition', 'A/B testing concepts', 'Communication skills'] },
                    { week: 'Week 4', focus: 'Mock Interviews', tasks: ['Practice presentations', 'Technical questions', 'Behavioral questions', 'Portfolio review'] }
                  ].map((week, index) => (
                    <div key={index} style={{
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0'
                    }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>
                        {week.week}: {week.focus}
                      </h4>
                      <ul style={{ fontSize: '14px', color: '#64748b', paddingLeft: '1rem' }}>
                        {week.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} style={{ marginBottom: '0.25rem' }}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Essential Resources
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>SQL Practice:</strong> SQLBolt, W3Schools, HackerRank SQL domain</li>
                    <li><strong>Excel Training:</strong> Microsoft Excel Help, ExcelJet, Chandoo.org</li>
                    <li><strong>Case Studies:</strong> Harvard Business Review, McKinsey insights</li>
                    <li><strong>Data Visualization:</strong> Tableau Public, Power BI learning path</li>
                    <li><strong>Statistics:</strong> Khan Academy, Coursera statistics courses</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Interview Day Tips
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Clarify Requirements:</strong> Ask questions about data sources and business context</li>
                    <li><strong>Show Your Process:</strong> Explain your analytical approach step by step</li>
                    <li><strong>Think Aloud:</strong> Verbalize your thought process during technical questions</li>
                    <li><strong>Use Examples:</strong> Reference specific projects from your experience</li>
                    <li><strong>Business Focus:</strong> Always connect technical analysis to business impact</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
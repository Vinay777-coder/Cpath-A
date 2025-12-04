'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Users, Briefcase } from 'lucide-react'

export default function DataScienceInterviewQuestions() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Back to Guides Button */}
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

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            color: '#1a202c',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            #21 - Data Science Interview Questions: Complete Guide
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#718096',
            lineHeight: '1.6'
          }}>
            Master data science interviews with comprehensive questions covering statistics, machine learning, programming, and practical scenarios.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          {[
            { id: 'overview', label: 'Overview', icon: BookOpen },
            { id: 'questions', label: 'Interview Questions', icon: Users },
            { id: 'preparation', label: 'Preparation Tips', icon: Briefcase }
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
                  background: activeTab === tab.id ? '#3b82f6' : 'transparent',
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

        {/* Tab Content */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '0 8px 8px 8px',
          padding: '2rem'
        }}>
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Data Science Interview Overview
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  What to Expect
                </h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                  <li><strong>Technical Questions:</strong> Statistics, probability, machine learning algorithms</li>
                  <li><strong>Programming Challenges:</strong> Python/R coding, data manipulation, SQL queries</li>
                  <li><strong>Case Studies:</strong> Business problems requiring analytical solutions</li>
                  <li><strong>Behavioral Questions:</strong> Communication, teamwork, project experience</li>
                  <li><strong>Portfolio Review:</strong> Discussion of past projects and methodologies</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Key Skill Areas
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {[
                    { title: 'Statistics & Math', skills: ['Hypothesis Testing', 'Probability Distributions', 'Statistical Inference', 'Experimental Design'] },
                    { title: 'Machine Learning', skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'] },
                    { title: 'Programming', skills: ['Python/R', 'SQL Queries', 'Data Structures', 'Algorithm Complexity'] },
                    { title: 'Business Acumen', skills: ['Problem Framing', 'KPI Definition', 'Stakeholder Communication', 'ROI Analysis'] }
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
            </div>
          )}

          {activeTab === 'questions' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Essential Interview Questions
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Statistics & Probability
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Explain the difference between Type I and Type II errors</li>
                    <li>What is the Central Limit Theorem and why is it important?</li>
                    <li>How do you determine if a dataset is normally distributed?</li>
                    <li>Explain p-value and statistical significance</li>
                    <li>What's the difference between correlation and causation?</li>
                    <li>How would you design an A/B test?</li>
                    <li>What is Bayes' Theorem and when would you use it?</li>
                    <li>Explain confidence intervals and their interpretation</li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Machine Learning
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Explain the bias-variance tradeoff</li>
                    <li>What's the difference between supervised and unsupervised learning?</li>
                    <li>How do you handle overfitting in machine learning models?</li>
                    <li>Explain cross-validation and its importance</li>
                    <li>What are the assumptions of linear regression?</li>
                    <li>How would you evaluate a classification model?</li>
                    <li>Explain the difference between bagging and boosting</li>
                    <li>What is feature selection and why is it important?</li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Programming & SQL
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Write a SQL query to find the second highest salary</li>
                    <li>How do you handle missing data in Python/R?</li>
                    <li>Explain the difference between list and tuple in Python</li>
                    <li>Write code to detect outliers in a dataset</li>
                    <li>How would you merge two DataFrames in pandas?</li>
                    <li>Explain GROUP BY and HAVING clauses in SQL</li>
                    <li>How do you optimize a slow SQL query?</li>
                    <li>Write a function to calculate moving averages</li>
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
                  Study Timeline (4-6 Weeks)
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    { week: 'Week 1-2', focus: 'Statistics & Probability', tasks: ['Review statistical concepts', 'Practice hypothesis testing', 'Study probability distributions', 'Learn experimental design'] },
                    { week: 'Week 3-4', focus: 'Machine Learning', tasks: ['Review ML algorithms', 'Practice model evaluation', 'Study feature engineering', 'Learn cross-validation'] },
                    { week: 'Week 5-6', focus: 'Programming & Practice', tasks: ['SQL query practice', 'Python/R coding challenges', 'Mock interviews', 'Portfolio preparation'] }
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
                  Resources & Practice Platforms
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Books:</strong> "The Elements of Statistical Learning", "Introduction to Statistical Learning"</li>
                    <li><strong>Online Courses:</strong> Coursera, edX, Udacity data science programs</li>
                    <li><strong>Practice Platforms:</strong> Kaggle, HackerRank, LeetCode, StrataScratch</li>
                    <li><strong>Mock Interviews:</strong> Pramp, InterviewBit, interviewing.io</li>
                    <li><strong>Portfolio Projects:</strong> GitHub, personal website, Kaggle competitions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Day-of-Interview Tips
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Think Out Loud:</strong> Explain your reasoning and approach</li>
                    <li><strong>Ask Clarifying Questions:</strong> Understand the problem completely</li>
                    <li><strong>Start Simple:</strong> Begin with basic approaches then optimize</li>
                    <li><strong>Show Your Work:</strong> Write down formulas and draw diagrams</li>
                    <li><strong>Discuss Assumptions:</strong> State what you're assuming about the data</li>
                    <li><strong>Consider Edge Cases:</strong> Think about limitations and special scenarios</li>
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
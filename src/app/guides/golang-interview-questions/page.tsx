'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Users, Briefcase } from 'lucide-react'

export default function GolangInterviewQuestions() {
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
            #22 - Go Programming Interview Questions: Expert Guide
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#718096',
            lineHeight: '1.6'
          }}>
            Master Go programming interviews with essential questions covering language fundamentals, concurrency, and advanced concepts.
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
            { id: 'overview', label: 'Go Fundamentals', icon: BookOpen },
            { id: 'questions', label: 'Interview Questions', icon: Users },
            { id: 'preparation', label: 'Expert Tips', icon: Briefcase }
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
                  background: activeTab === tab.id ? '#00add8' : 'transparent',
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
                Go Language Fundamentals
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Core Concepts
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {[
                    { 
                      title: 'Syntax & Types', 
                      concepts: ['Variable declarations', 'Basic data types', 'Constants and iota', 'Type conversions'] 
                    },
                    { 
                      title: 'Functions & Methods', 
                      concepts: ['Function syntax', 'Multiple return values', 'Method receivers', 'Function types'] 
                    },
                    { 
                      title: 'Data Structures', 
                      concepts: ['Arrays and slices', 'Maps', 'Structs', 'Pointers'] 
                    },
                    { 
                      title: 'Concurrency', 
                      concepts: ['Goroutines', 'Channels', 'Select statement', 'Sync package'] 
                    }
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
                        {area.concepts.map((concept, conceptIndex) => (
                          <li key={conceptIndex} style={{ marginBottom: '0.25rem' }}>{concept}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Go's Unique Features
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Simplicity:</strong> Minimalist syntax with only 25 keywords</li>
                    <li><strong>Built-in Concurrency:</strong> Goroutines and channels as first-class citizens</li>
                    <li><strong>Fast Compilation:</strong> Rapid build times for quick development cycles</li>
                    <li><strong>Static Typing:</strong> Type safety with inference capabilities</li>
                    <li><strong>Garbage Collection:</strong> Automatic memory management</li>
                    <li><strong>Standard Library:</strong> Rich standard library for common tasks</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Interview Focus Areas
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Language Syntax (30%):</strong> Basic syntax, data types, control structures</li>
                    <li><strong>Concurrency (25%):</strong> Goroutines, channels, synchronization</li>
                    <li><strong>Error Handling (15%):</strong> Error interface, panic/recover</li>
                    <li><strong>Standard Library (15%):</strong> Common packages and utilities</li>
                    <li><strong>Best Practices (15%):</strong> Code organization, testing, performance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Go Interview Questions
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Fundamentals & Syntax
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>What are the differences between arrays and slices in Go?</li>
                    <li>Explain the difference between `var`, `:=`, and `const` declarations</li>
                    <li>How do pointers work in Go? When would you use them?</li>
                    <li>What is the zero value in Go and how is it used?</li>
                    <li>Explain the difference between `make()` and `new()` functions</li>
                    <li>How do you handle multiple return values in Go?</li>
                    <li>What are struct tags and how are they used?</li>
                    <li>Explain method receivers in Go (value vs pointer receivers)</li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Concurrency & Goroutines
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>What is a goroutine and how is it different from a thread?</li>
                    <li>Explain channels in Go and their different types</li>
                    <li>What is the `select` statement and when would you use it?</li>
                    <li>How do you prevent goroutine leaks?</li>
                    <li>Explain the difference between buffered and unbuffered channels</li>
                    <li>What are WaitGroups and when would you use them?</li>
                    <li>How do you implement worker pools in Go?</li>
                    <li>Explain the `context` package and its use cases</li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Error Handling & Best Practices
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={ { paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>How does error handling work in Go? What is the `error` interface?</li>
                    <li>When would you use `panic()` and `recover()`?</li>
                    <li>How do you create custom errors in Go?</li>
                    <li>Explain the `defer` statement and its execution order</li>
                    <li>How do you write unit tests in Go?</li>
                    <li>What are Go modules and how do they work?</li>
                    <li>Explain the `go fmt` and `go vet` tools</li>
                    <li>How do you handle configuration in Go applications?</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Coding Challenges
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li>Implement a concurrent web scraper using goroutines and channels</li>
                    <li>Write a rate limiter using Go's concurrency features</li>
                    <li>Implement a simple HTTP server with middleware</li>
                    <li>Create a concurrent producer-consumer pattern</li>
                    <li>Build a simple cache with expiration using sync.Map</li>
                    <li>Implement a context-aware HTTP client with timeout</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preparation' && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Expert Preparation Strategy
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Study Roadmap (3-4 Weeks)
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    { 
                      week: 'Week 1', 
                      focus: 'Go Basics', 
                      tasks: ['Master Go syntax', 'Understand data types', 'Practice functions and methods', 'Learn struct and interfaces'] 
                    },
                    { 
                      week: 'Week 2', 
                      focus: 'Concurrency', 
                      tasks: ['Study goroutines', 'Master channels', 'Learn select statements', 'Practice synchronization'] 
                    },
                    { 
                      week: 'Week 3', 
                      focus: 'Standard Library', 
                      tasks: ['HTTP package', 'JSON handling', 'File I/O', 'String manipulation'] 
                    },
                    { 
                      week: 'Week 4', 
                      focus: 'Practice & Polish', 
                      tasks: ['Coding challenges', 'Mock interviews', 'Review best practices', 'Build sample projects'] 
                    }
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
                    <li><strong>Official Documentation:</strong> golang.org - comprehensive and up-to-date</li>
                    <li><strong>Books:</strong> "The Go Programming Language" by Donovan & Kernighan</li>
                    <li><strong>Online Courses:</strong> "Go: The Complete Developer's Guide" on Udemy</li>
                    <li><strong>Practice Platforms:</strong> Go Playground, HackerRank, LeetCode</li>
                    <li><strong>GitHub Projects:</strong> Study popular Go projects for real-world patterns</li>
                    <li><strong>Community:</strong> r/golang, Gophers Slack, golang-nuts mailing list</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Interview Performance Tips
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Code Style:</strong> Follow Go conventions (gofmt, effective Go guidelines)</li>
                    <li><strong>Error Handling:</strong> Always demonstrate proper error handling</li>
                    <li><strong>Concurrency Safety:</strong> Show awareness of race conditions and synchronization</li>
                    <li><strong>Performance Awareness:</strong> Discuss memory allocation and GC implications</li>
                    <li><strong>Testing:</strong> Be prepared to write unit tests for your code</li>
                    <li><strong>Real-world Context:</strong> Explain how your solution scales in production</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                  Common Pitfalls to Avoid
                </h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: '#475569' }}>
                    <li><strong>Channel Deadlocks:</strong> Understand channel blocking behavior</li>
                    <li><strong>Goroutine Leaks:</strong> Always ensure goroutines can terminate</li>
                    <li><strong>Slice Gotchas:</strong> Understand slice backing arrays and capacity</li>
                    <li><strong>Interface Confusion:</strong> Know when to use interfaces vs concrete types</li>
                    <li><strong>Pointer Misuse:</strong> Understand when to use pointers vs values</li>
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
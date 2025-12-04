'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Smartphone, Code, Layers, CheckCircle2, Star, Zap } from 'lucide-react';

export default function MobileAppDevelopmentInterviewGuide() {
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
            Mobile App Development Interview
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Comprehensive interview preparation for iOS, Android, and cross-platform mobile development positions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'overview', label: 'Interview Overview', icon: Smartphone },
            { id: 'questions', label: 'Technical Questions', icon: Code },
            { id: 'preparation', label: 'Preparation Strategy', icon: Layers }
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
                Mobile Development Interview Landscape
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Smartphone size={20} style={{ color: '#3b82f6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#3b82f6', margin: 0 }}>Interview Types</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>Platform-specific (iOS/Android)</li>
                    <li>Cross-platform (React Native/Flutter)</li>
                    <li>System design for mobile</li>
                    <li>UI/UX implementation</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Code size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#8b5cf6', margin: 0 }}>Key Focus Areas</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>Language proficiency</li>
                    <li>Platform-specific APIs</li>
                    <li>Architecture patterns</li>
                    <li>Data persistence</li>
                    <li>Network operations</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Layers size={20} style={{ color: '#10b981', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#10b981', margin: 0 }}>Salary Ranges</h4>
                  </div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ color: '#10b981', fontWeight: '600' }}>Junior:</span> $65,000 - $85,000
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ color: '#10b981', fontWeight: '600' }}>Mid:</span> $85,000 - $120,000
                    </div>
                    <div>
                      <span style={{ color: '#10b981', fontWeight: '600' }}>Senior:</span> $120,000 - $180,000+
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Platform Comparison</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {[
                    { platform: 'iOS (Swift)', strengths: ['Strong ecosystem', 'Premium market', 'Consistent UI guidelines'], challenges: ['Apple-specific knowledge', 'Xcode proficiency', 'App Store policies'] },
                    { platform: 'Android (Kotlin)', strengths: ['Market reach', 'Open source', 'Flexible development'], challenges: ['Device fragmentation', 'Version compatibility', 'Performance optimization'] },
                    { platform: 'React Native', strengths: ['Code sharing', 'Faster development', 'Web developer friendly'], challenges: ['Native bridge understanding', 'Platform-specific optimizations', 'Third-party dependencies'] },
                    { platform: 'Flutter', strengths: ['Single codebase', 'High performance', 'Rich UI widgets'], challenges: ['Dart language learning', 'Newer ecosystem', 'Large app size'] }
                  ].map(({ platform, strengths, challenges }) => (
                    <div key={platform} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <h5 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>{platform}</h5>
                      <div style={{ marginBottom: '0.75rem' }}>
                        <h6 style={{ color: '#10b981', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Strengths:</h6>
                        <ul style={{ color: '#cbd5e1', fontSize: '0.75rem', paddingLeft: '1rem', margin: 0 }}>
                          {strengths.map(strength => <li key={strength}>{strength}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h6 style={{ color: '#f59e0b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Challenges:</h6>
                        <ul style={{ color: '#cbd5e1', fontSize: '0.75rem', paddingLeft: '1rem', margin: 0 }}>
                          {challenges.map(challenge => <li key={challenge}>{challenge}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'questions' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Technical Interview Questions by Category
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    category: 'iOS Development (Swift)',
                    color: '#3b82f6',
                    questions: [
                      {
                        question: 'Explain the difference between weak, strong, and unowned references in Swift',
                        difficulty: 'Medium',
                        topics: ['Memory Management', 'ARC', 'Reference Cycles'],
                        expectedAnswer: 'Strong references increase retain count, weak references don\'t and become nil when deallocated, unowned references don\'t increase count but assume object exists.'
                      },
                      {
                        question: 'What is the difference between a frame and bounds in UIView?',
                        difficulty: 'Easy',
                        topics: ['UI Framework', 'Coordinate System', 'Views'],
                        expectedAnswer: 'Frame is position and size relative to superview, bounds is internal coordinate system starting at (0,0).'
                      },
                      {
                        question: 'Explain the iOS app lifecycle methods',
                        difficulty: 'Medium',
                        topics: ['App Lifecycle', 'UIApplication', 'State Management'],
                        expectedAnswer: 'applicationDidFinishLaunching, applicationDidBecomeActive, applicationWillResignActive, applicationDidEnterBackground, applicationWillTerminate.'
                      },
                      {
                        question: 'How would you implement offline caching for network requests?',
                        difficulty: 'Hard',
                        topics: ['Networking', 'Data Persistence', 'URLSession'],
                        expectedAnswer: 'Use URLCache, NSURLRequestCachePolicy, Core Data or SQLite for custom caching, check network reachability.'
                      }
                    ]
                  },
                  {
                    category: 'Android Development (Kotlin)',
                    color: '#10b981',
                    questions: [
                      {
                        question: 'Explain the Android activity lifecycle',
                        difficulty: 'Easy',
                        topics: ['Activity Lifecycle', 'State Management', 'Android Framework'],
                        expectedAnswer: 'onCreate → onStart → onResume → onPause → onStop → onDestroy, with onRestart between onStop and onStart.'
                      },
                      {
                        question: 'What is the difference between lateinit and lazy in Kotlin?',
                        difficulty: 'Medium',
                        topics: ['Kotlin Features', 'Initialization', 'Properties'],
                        expectedAnswer: 'lateinit for non-null properties initialized later, lazy for thread-safe initialization on first access with lambda.'
                      },
                      {
                        question: 'How do you handle different screen sizes and densities?',
                        difficulty: 'Medium',
                        topics: ['UI Adaptation', 'Resources', 'Screen Compatibility'],
                        expectedAnswer: 'Use dp units, provide alternative resources (drawable-hdpi, layout-sw600dp), use ConstraintLayout, test on different devices.'
                      },
                      {
                        question: 'Explain the difference between Service, IntentService, and JobScheduler',
                        difficulty: 'Hard',
                        topics: ['Background Processing', 'Services', 'Job Scheduling'],
                        expectedAnswer: 'Service runs on main thread, IntentService handles requests sequentially on background thread, JobScheduler for efficient battery-aware background tasks.'
                      }
                    ]
                  },
                  {
                    category: 'Cross-Platform (React Native/Flutter)',
                    color: '#8b5cf6',
                    questions: [
                      {
                        question: 'How does React Native bridge work between JavaScript and native code?',
                        difficulty: 'Hard',
                        topics: ['Bridge Architecture', 'Native Modules', 'Performance'],
                        expectedAnswer: 'Asynchronous message passing between JS thread and native threads, JSON serialization, batch processing for efficiency.'
                      },
                      {
                        question: 'Explain Flutter\'s widget tree and how rendering works',
                        difficulty: 'Medium',
                        topics: ['Widget Architecture', 'Rendering', 'Dart Framework'],
                        expectedAnswer: 'Three trees: Widget (configuration), Element (lifecycle), RenderObject (layout/paint). Widgets are immutable, elements manage lifecycle.'
                      },
                      {
                        question: 'How would you optimize performance in a cross-platform app?',
                        difficulty: 'Hard',
                        topics: ['Performance', 'Optimization', 'Profiling'],
                        expectedAnswer: 'Minimize bridge calls, use native modules for heavy operations, optimize images, implement virtualization for lists, profile memory usage.'
                      },
                      {
                        question: 'What are the pros and cons of cross-platform vs native development?',
                        difficulty: 'Easy',
                        topics: ['Architecture Decisions', 'Trade-offs', 'Development Strategy'],
                        expectedAnswer: 'Cross-platform: faster development, code sharing vs Native: better performance, platform-specific features, optimization.'
                      }
                    ]
                  },
                  {
                    category: 'General Mobile Development',
                    color: '#f59e0b',
                    questions: [
                      {
                        question: 'How would you design a mobile app for offline-first functionality?',
                        difficulty: 'Hard',
                        topics: ['Architecture', 'Data Sync', 'Offline Strategy'],
                        expectedAnswer: 'Local database as single source of truth, sync queue for pending operations, conflict resolution, optimistic updates.'
                      },
                      {
                        question: 'Explain mobile app security best practices',
                        difficulty: 'Medium',
                        topics: ['Security', 'Encryption', 'Best Practices'],
                        expectedAnswer: 'Certificate pinning, data encryption, secure storage (Keychain/Keystore), input validation, obfuscation, runtime security checks.'
                      },
                      {
                        question: 'How do you handle push notifications across platforms?',
                        difficulty: 'Medium',
                        topics: ['Push Notifications', 'FCM', 'APNs'],
                        expectedAnswer: 'FCM for Android, APNs for iOS, handle registration tokens, manage notification permissions, deep linking.'
                      },
                      {
                        question: 'Describe your approach to mobile app testing',
                        difficulty: 'Medium',
                        topics: ['Testing', 'QA', 'Automation'],
                        expectedAnswer: 'Unit tests for business logic, integration tests for APIs, UI tests for critical flows, device testing matrix, automated CI/CD testing.'
                      }
                    ]
                  }
                ].map(({ category, color, questions }) => (
                  <div key={category} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: color, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                      {category}
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {questions.map(({ question, difficulty, topics, expectedAnswer }) => (
                        <div key={question} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', border: `1px solid ${color}20` }}>
                          <div style={{ marginBottom: '0.75rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                              <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.4', flex: 1, marginRight: '1rem' }}>
                                {question}
                              </h5>
                              <span style={{ 
                                backgroundColor: difficulty === 'Easy' ? '#10b981' : difficulty === 'Medium' ? '#f59e0b' : '#ef4444',
                                color: 'white',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                whiteSpace: 'nowrap'
                              }}>
                                {difficulty}
                              </span>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.5rem' }}>
                              {topics.map(topic => (
                                <span key={topic} style={{ 
                                  backgroundColor: `${color}15`,
                                  color: color,
                                  padding: '0.125rem 0.5rem',
                                  borderRadius: '3px',
                                  fontSize: '0.75rem'
                                }}>
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '4px' }}>
                            <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0, lineHeight: '1.4' }}>
                              <strong style={{ color: '#cbd5e1' }}>Key Answer Points:</strong> {expectedAnswer}
                            </p>
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

        {activeTab === 'preparation' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Interview Preparation Strategy
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Pre-Interview Preparation (2-4 weeks)
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        week: 'Week 1-2: Foundation Review',
                        tasks: [
                          'Review platform-specific fundamentals (Swift/Kotlin syntax, frameworks)',
                          'Practice common algorithms and data structures',
                          'Study mobile-specific patterns (MVC, MVP, MVVM)',
                          'Review memory management and performance concepts'
                        ]
                      },
                      {
                        week: 'Week 3: Hands-on Practice',
                        tasks: [
                          'Build small demo apps showcasing key concepts',
                          'Practice whiteboard coding of mobile scenarios',
                          'Review your previous projects and be ready to discuss architecture',
                          'Mock interview practice with technical questions'
                        ]
                      },
                      {
                        week: 'Week 4: Company-Specific Prep',
                        tasks: [
                          'Research company\'s mobile apps and tech stack',
                          'Prepare questions about their development process',
                          'Review recent mobile development trends and best practices',
                          'Prepare your portfolio and demo projects'
                        ]
                      }
                    ].map(({ week, tasks }) => (
                      <div key={week} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#8b5cf6', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                          {week}
                        </h5>
                        <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem', margin: 0 }}>
                          {tasks.map(task => (
                            <li key={task} style={{ marginBottom: '0.25rem' }}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Technical Skills Checklist
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        category: 'Core Programming',
                        skills: [
                          'Language proficiency (Swift/Kotlin/JavaScript/Dart)',
                          'Object-oriented programming concepts',
                          'Memory management and optimization',
                          'Asynchronous programming patterns',
                          'Error handling and debugging techniques'
                        ]
                      },
                      {
                        category: 'Platform APIs & Frameworks',
                        skills: [
                          'UI framework (UIKit/SwiftUI/Android Views/Flutter)',
                          'Navigation patterns and routing',
                          'Data persistence (Core Data/Room/SQLite)',
                          'Network operations and API integration',
                          'Platform-specific features (camera, location, etc.)'
                        ]
                      },
                      {
                        category: 'Architecture & Patterns',
                        skills: [
                          'MVC, MVP, MVVM architecture patterns',
                          'Dependency injection and inversion of control',
                          'Design patterns (Observer, Singleton, Factory)',
                          'Clean architecture principles',
                          'State management approaches'
                        ]
                      },
                      {
                        category: 'Development Tools & Practices',
                        skills: [
                          'IDE proficiency (Xcode/Android Studio/VS Code)',
                          'Version control with Git',
                          'Unit testing and UI testing',
                          'Debugging and profiling tools',
                          'CI/CD for mobile applications'
                        ]
                      }
                    ].map(({ category, skills }) => (
                      <div key={category} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#f59e0b', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                          {category}
                        </h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {skills.map(skill => (
                            <div key={skill} style={{ display: 'flex', alignItems: 'flex-start' }}>
                              <CheckCircle2 size={14} style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.125rem', flexShrink: 0 }} />
                              <span style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.4' }}>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Day of Interview Tips
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        phase: 'Before the Interview',
                        tips: [
                          'Test your demo app on the device you\'ll present with',
                          'Prepare questions about the company\'s mobile development process',
                          'Review the job description and align your experience',
                          'Bring printed copies of your portfolio/code samples'
                        ]
                      },
                      {
                        phase: 'During Technical Discussions',
                        tips: [
                          'Think out loud and explain your reasoning',
                          'Ask clarifying questions before diving into solutions',
                          'Discuss trade-offs and alternative approaches',
                          'Be honest about what you don\'t know'
                        ]
                      },
                      {
                        phase: 'Code Review & Architecture',
                        tips: [
                          'Walk through your code systematically',
                          'Explain architectural decisions and patterns used',
                          'Discuss how you would scale or improve the solution',
                          'Be prepared to discuss testing strategies'
                        ]
                      },
                      {
                        phase: 'Behavioral Questions',
                        tips: [
                          'Prepare STAR format examples from mobile projects',
                          'Discuss challenges specific to mobile development',
                          'Show passion for mobile user experience',
                          'Demonstrate continuous learning mindset'
                        ]
                      }
                    ].map(({ phase, tips }) => (
                      <div key={phase} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                          {phase}
                        </h5>
                        <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem', margin: 0 }}>
                          {tips.map(tip => (
                            <li key={tip} style={{ marginBottom: '0.25rem' }}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Star size={20} style={{ marginRight: '0.5rem' }} />
                    Portfolio Project Ideas
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      { project: 'Weather App', features: ['Location services', 'API integration', 'Offline caching', 'Custom animations'] },
                      { project: 'Task Manager', features: ['Local storage', 'Push notifications', 'Dark mode', 'Data synchronization'] },
                      { project: 'Photo Gallery', features: ['Camera integration', 'Image processing', 'Cloud storage', 'Sharing functionality'] },
                      { project: 'Chat Application', features: ['Real-time messaging', 'Socket connections', 'User authentication', 'File uploads'] }
                    ].map(({ project, features }) => (
                      <div key={project} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                          {project}
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                          {features.map(feature => (
                            <span key={feature} style={{ 
                              backgroundColor: '#8b5cf615',
                              color: '#c4b5fd',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '3px',
                              fontSize: '0.75rem'
                            }}>
                              {feature}
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
      </div>
    </div>
  );
}
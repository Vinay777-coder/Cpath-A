"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, BookOpen, CheckCircle, AlertTriangle, TrendingUp, Users, Zap, Calendar, Award } from 'lucide-react';

export default function HowLongToLearnJavaScriptPage() {
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back to Guides Button */}
        <div className="mb-6">
          <Link 
            href="/guides" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How Long Does It Take to Learn JavaScript? A Career Seeker's Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete timeline analysis for learning JavaScript from scratch to job-ready, with realistic expectations and actionable roadmaps
          </p>
        </div>

        {/* Quick Answer Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-yellow-500">
          <div className="flex items-start">
            <Clock className="w-8 h-8 text-yellow-500 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Quick Answer</h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong>3-9 months</strong> to become job-ready, depending on your background and learning intensity. 
                Here's the realistic breakdown:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3-4 months</div>
                  <div className="text-sm text-gray-700">With programming background</div>
                  <div className="text-sm text-gray-700">Full-time study (6-8 hrs/day)</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">6-9 months</div>
                  <div className="text-sm text-gray-700">Complete beginner</div>
                  <div className="text-sm text-gray-700">Part-time study (2-3 hrs/day)</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">1-2 years</div>
                  <div className="text-sm text-gray-700">Master level proficiency</div>
                  <div className="text-sm text-gray-700">Advanced frameworks & tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Choose Your Learning Path</h2>
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedLevel === 'beginner'
                    ? 'bg-green-500 text-white'
                    : 'text-gray-600 hover:text-green-500'
                }`}
              >
                Complete Beginner
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedLevel === 'intermediate'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Some Programming
              </button>
              <button
                onClick={() => setSelectedLevel('advanced')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedLevel === 'advanced'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                Advanced Goals
              </button>
            </div>
          </div>

          {/* Beginner Path */}
          {selectedLevel === 'beginner' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Complete Beginner Path</h3>
                <p className="text-gray-600">No programming experience → Job-ready JavaScript developer</p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 1-2: Programming Fundamentals</h4>
                    <p className="text-gray-700 mb-3">Learn basic programming concepts, HTML/CSS basics, and JavaScript syntax</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Variables & Data Types</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Functions</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Loops & Conditions</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Basic HTML/CSS</span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Time Investment:</strong> 2-3 hours/day • <strong>Study Mode:</strong> Interactive tutorials, coding exercises
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 3-4: DOM & Interactive Web</h4>
                    <p className="text-gray-700 mb-3">Build interactive web pages and understand how JavaScript works with HTML</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">DOM Manipulation</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Event Handling</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Basic Projects</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Form Validation</span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Time Investment:</strong> 3-4 hours/day • <strong>Study Mode:</strong> Project-based learning
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 5-6: Modern JavaScript & Frameworks</h4>
                    <p className="text-gray-700 mb-3">Learn ES6+ features, async programming, and introduction to React</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">ES6+ Features</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Promises & Async/Await</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">APIs & Fetch</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">React Basics</span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Time Investment:</strong> 4-5 hours/day • <strong>Study Mode:</strong> Framework tutorials, portfolio projects
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 7-9: Job Preparation</h4>
                    <p className="text-gray-700 mb-3">Build portfolio, practice interviews, and apply for entry-level positions</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Portfolio Projects</span>
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Interview Prep</span>
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Algorithm Practice</span>
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Job Applications</span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Time Investment:</strong> 3-4 hours/day • <strong>Study Mode:</strong> Portfolio building, mock interviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Intermediate Path */}
          {selectedLevel === 'intermediate' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Some Programming Experience Path</h3>
                <p className="text-gray-600">Basic programming knowledge → Job-ready JavaScript developer</p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Month 1: JavaScript Fundamentals</h4>
                    <p className="text-gray-700 mb-3">Quick ramp-up on JavaScript syntax and web development basics</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">JS Syntax & Types</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">DOM Basics</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Event Handling</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Web APIs</span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Time Investment:</strong> 4-6 hours/day • <strong>Study Mode:</strong> Fast-paced tutorials, hands-on coding
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 2-3: Modern JavaScript & Tools</h4>
                    <p className="text-gray-700 mb-3">ES6+ features, build tools, and modern development workflow</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">ES6+ Features</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Modules & Bundlers</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Async Programming</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Testing Basics</span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Time Investment:</strong> 5-6 hours/day • <strong>Study Mode:</strong> Advanced tutorials, real projects
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Month 4: Framework Mastery</h4>
                    <p className="text-gray-700 mb-3">Deep dive into React or Vue.js, state management, and best practices</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">React/Vue Deep Dive</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">State Management</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Routing</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Component Patterns</span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Time Investment:</strong> 6-8 hours/day • <strong>Study Mode:</strong> Framework documentation, complex projects
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 5-6: Job Preparation & Specialization</h4>
                    <p className="text-gray-700 mb-3">Portfolio polish, interview preparation, and backend basics</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Portfolio Projects</span>
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Node.js Basics</span>
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Algorithm Practice</span>
                      <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm">Interview Prep</span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Time Investment:</strong> 4-6 hours/day • <strong>Study Mode:</strong> Portfolio building, technical interviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Advanced Path */}
          {selectedLevel === 'advanced' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Advanced Mastery Path</h3>
                <p className="text-gray-600">Job-ready → Senior-level JavaScript expertise</p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 1-3: Advanced JavaScript Concepts</h4>
                    <p className="text-gray-700 mb-3">Master closures, prototypes, advanced async patterns, and performance</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Advanced Closures</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Prototype Chain</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Memory Management</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Performance Optimization</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 4-8: Full-Stack & Architecture</h4>
                    <p className="text-gray-700 mb-3">Backend development, databases, system design, and scalability</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Node.js Advanced</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Database Design</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">System Architecture</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">DevOps Basics</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Months 9-12: Specialization & Leadership</h4>
                    <p className="text-gray-700 mb-3">Choose specialization, contribute to open source, mentor others</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Framework Mastery</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Open Source</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Technical Leadership</span>
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Mentoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Factors That Affect Learning Speed */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Factors That Affect Your Learning Speed</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">Speed Boosters 🚀</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Programming Background:</strong> Cuts learning time by 40-60%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Full-time Focus:</strong> 6-8 hours daily vs 2-3 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Structured Learning:</strong> Bootcamp or comprehensive course</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Project-Based Practice:</strong> Building real applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Mentorship/Community:</strong> Getting help when stuck</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4">Common Slowdowns ⚠️</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Tutorial Hell:</strong> Watching without building projects</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Inconsistent Practice:</strong> Long breaks between sessions</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>No Clear Goals:</strong> Learning without direction</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Perfectionism:</strong> Over-studying basics instead of progressing</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                  <span className="text-gray-700"><strong>Isolation:</strong> Learning alone without feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning Schedule Templates */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Realistic Learning Schedules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Intensive Track</h3>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-yellow-600">3-4 months</div>
                <div className="text-sm text-gray-600 mb-3">Full-time commitment</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 6-8 hours daily coding</li>
                  <li>• Weekend projects</li>
                  <li>• Bootcamp or intensive course</li>
                  <li>• Daily practice without breaks</li>
                </ul>
                <div className="bg-yellow-50 p-3 rounded mt-4">
                  <div className="text-sm font-medium text-gray-800">Best for:</div>
                  <div className="text-sm text-gray-600">Career changers, recent graduates, between jobs</div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Balanced Track</h3>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-blue-600">6-9 months</div>
                <div className="text-sm text-gray-600 mb-3">Part-time commitment</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 2-3 hours daily coding</li>
                  <li>• 4-6 hours weekends</li>
                  <li>• Online courses + projects</li>
                  <li>• Sustainable pace</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded mt-4">
                  <div className="text-sm font-medium text-gray-800">Best for:</div>
                  <div className="text-sm text-gray-600">Working professionals, students, parents</div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Gradual Track</h3>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-green-600">12+ months</div>
                <div className="text-sm text-gray-600 mb-3">Flexible commitment</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 1-2 hours daily coding</li>
                  <li>• Weekend learning sessions</li>
                  <li>• Self-paced online courses</li>
                  <li>• Hobby-level intensity</li>
                </ul>
                <div className="bg-green-50 p-3 rounded mt-4">
                  <div className="text-sm font-medium text-gray-800">Best for:</div>
                  <div className="text-sm text-gray-600">Busy professionals, casual learners, side project enthusiasts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones & Assessment */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Milestones & Self-Assessment</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-green-600 mb-2">Month 1-2: Foundation ✅</h3>
              <p className="text-gray-700 mb-3">You can build simple interactive web pages</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="text-sm font-medium text-gray-800 mb-2">Can you build:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• A calculator with basic operations</li>
                  <li>• A to-do list with add/remove functionality</li>
                  <li>• A simple form with validation</li>
                  <li>• A basic image carousel</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Month 3-4: Intermediate Skills ⚡</h3>
              <p className="text-gray-700 mb-3">You can work with APIs and build dynamic applications</p>
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-sm font-medium text-gray-800 mb-2">Can you build:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• A weather app using external API</li>
                  <li>• A quiz app with multiple pages</li>
                  <li>• A shopping cart with local storage</li>
                  <li>• A basic game (tic-tac-toe, memory)</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Month 6-9: Job Ready 🚀</h3>
              <p className="text-gray-700 mb-3">You can build full applications using modern frameworks</p>
              <div className="bg-purple-50 p-4 rounded">
                <div className="text-sm font-medium text-gray-800 mb-2">Can you build:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• A full CRUD application with React</li>
                  <li>• A responsive social media clone</li>
                  <li>• An e-commerce site with authentication</li>
                  <li>• A real-time chat application</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Tips */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Pro Tips for Faster Learning</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-3">Learning Strategy</h3>
              <ul className="space-y-2 text-sm">
                <li>• Focus on building projects, not just watching tutorials</li>
                <li>• Practice coding every single day, even if just 30 minutes</li>
                <li>• Join developer communities (Discord, Reddit, Twitter)</li>
                <li>• Find accountability partners or study groups</li>
                <li>• Don't skip the fundamentals to rush to frameworks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Career Preparation</h3>
              <ul className="space-y-2 text-sm">
                <li>• Start building your portfolio from day one</li>
                <li>• Document your learning journey on social media</li>
                <li>• Contribute to open source projects early</li>
                <li>• Network with other developers and potential employers</li>
                <li>• Practice technical interviews and whiteboarding</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-lg opacity-90">
              Remember: Consistency beats intensity. Better to code 2 hours daily for 6 months than 8 hours for 6 weeks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette, Server, Users, TrendingUp, CheckCircle, AlertTriangle, Briefcase, Clock, DollarSign, Target, Eye, Code, Smartphone, Monitor } from 'lucide-react';

export default function FrontendVsBackendPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'decision'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-8">
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
            Frontend vs Backend Development: Complete Career Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Understand the fundamental differences between frontend and backend development, explore career paths, technologies, and discover which path aligns with your interests and skills.
          </p>
        </div>

        {/* Quick Comparison Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Essential Difference</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <Eye className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-700">Frontend Developer</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Client-Side Focus</strong> - Create the visual interface and user experience that people directly interact with in websites and applications.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• User interface design and implementation</li>
                <li>• Interactive features and animations</li>
                <li>• Cross-browser compatibility</li>
                <li>• Performance optimization for users</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-3">
                <Server className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-purple-700">Backend Developer</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Server-Side Focus</strong> - Build the behind-the-scenes logic, databases, and infrastructure that power applications and handle data processing.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Server logic and API development</li>
                <li>• Database design and management</li>
                <li>• Security and authentication systems</li>
                <li>• Performance and scalability optimization</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-center font-semibold text-yellow-700">
              💡 <strong>Key Insight:</strong> Frontend is what users see and interact with, Backend is what makes everything work behind the scenes
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Role Overview
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'skills'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Skills & Technologies
              </button>
              <button
                onClick={() => setActiveTab('decision')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'decision'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Career Decision Guide
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Role Responsibilities & Daily Work</h2>

                {/* Daily Tasks */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Work On Daily</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Frontend Developer Day</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-gray-800">Morning: UI Implementation</div>
                          <div className="text-gray-600">Convert designs to code, build responsive layouts, implement interactive features</div>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-gray-800">Afternoon: User Experience</div>
                          <div className="text-gray-600">Optimize performance, test across devices, improve accessibility</div>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-gray-800">Evening: Integration & Testing</div>
                          <div className="text-gray-600">Connect to APIs, debug user issues, cross-browser testing</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Developer Day</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Morning: API Development</div>
                          <div className="text-gray-600">Design endpoints, implement business logic, handle data processing</div>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Afternoon: Database Work</div>
                          <div className="text-gray-600">Design schemas, optimize queries, ensure data integrity</div>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Evening: System Architecture</div>
                          <div className="text-gray-600">Plan scalability, implement security, monitor performance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problem Types */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Problems You'll Solve</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Frontend Challenges</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">User Experience Problems</div>
                          <div className="text-gray-600">"How can we make this form easier to use?" "Why is this button confusing users?"</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Performance Issues</div>
                          <div className="text-gray-600">"Why is this page loading slowly?" "How can we reduce bundle size?"</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Cross-Platform Compatibility</div>
                          <div className="text-gray-600">"This works in Chrome but not Safari" "How do we support mobile users?"</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Challenges</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-purple-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Data & Logic Problems</div>
                          <div className="text-gray-600">"How do we handle 1M users?" "What's the best way to structure this data?"</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Security Concerns</div>
                          <div className="text-gray-600">"How do we protect user data?" "What if someone tries to hack our API?"</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">System Architecture</div>
                          <div className="text-gray-600">"How do we scale this system?" "What happens when the database is down?"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Progression */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Career Progression Paths
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-4">Frontend Career Path</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Junior Frontend Developer</div>
                            <div className="text-sm text-green-600 font-bold">$50K - $75K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            HTML/CSS basics, JavaScript fundamentals, simple component development
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Senior Frontend Developer</div>
                            <div className="text-sm text-green-600 font-bold">$80K - $120K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Advanced frameworks, performance optimization, team leadership, architecture decisions
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Frontend Architect / Principal</div>
                            <div className="text-sm text-green-600 font-bold">$130K - $180K+</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Technical strategy, team mentoring, cross-functional leadership, innovation
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-4">Backend Career Path</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Junior Backend Developer</div>
                            <div className="text-sm text-green-600 font-bold">$55K - $80K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Basic API development, database queries, simple business logic implementation
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Senior Backend Developer</div>
                            <div className="text-sm text-green-600 font-bold">$85K - $130K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Complex system design, performance optimization, security implementation, mentoring
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Backend Architect / Principal</div>
                            <div className="text-sm text-green-600 font-bold">$140K - $200K+</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            System architecture, technology strategy, cross-team coordination, innovation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Collaboration */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-600" />
                    Who You'll Work With
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Team Interaction</th>
                          <th className="text-left p-3 border">Frontend Developer</th>
                          <th className="text-left p-3 border">Backend Developer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Primary Collaboration</td>
                          <td className="p-3 border">Designers, Product Managers, Backend Developers</td>
                          <td className="p-3 border">Frontend Developers, DevOps, Database Administrators</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Daily Meetings</td>
                          <td className="p-3 border">Design reviews, user testing sessions, sprint planning</td>
                          <td className="p-3 border">Architecture discussions, code reviews, technical planning</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Stakeholder Interaction</td>
                          <td className="p-3 border">High - directly impacts user-facing features</td>
                          <td className="p-3 border">Moderate - focus on technical requirements and performance</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Communication Style</td>
                          <td className="p-3 border">Visual demonstrations, prototypes, user feedback</td>
                          <td className="p-3 border">Technical documentation, API specifications, system diagrams</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Work Environment */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Work Environment & Company Types</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Frontend Opportunities</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Agencies & Studios:</strong> Client websites, marketing campaigns, creative projects</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>E-commerce:</strong> Shopping experiences, conversion optimization</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>SaaS Products:</strong> User dashboards, complex web applications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Startups:</strong> Rapid prototyping, user-focused development</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Opportunities</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Fintech:</strong> Payment processing, security-critical systems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Big Tech:</strong> Scalable infrastructure, distributed systems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Enterprise:</strong> Business systems, data processing pipelines</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>API Companies:</strong> Platform services, developer tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills & Learning Paths</h2>

                {/* Core Technologies */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Essential Technologies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-4">Frontend Technology Stack</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Core Languages (Must Learn)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">HTML5</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">CSS3</span>
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">JavaScript</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">TypeScript</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Frameworks (Pick 1-2)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-sm">React</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Vue.js</span>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Angular</span>
                            <span className="bg-black text-white px-2 py-1 rounded text-sm">Next.js</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Tools & Build Systems</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Webpack</span>
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">Vite</span>
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Git</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">NPM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-4">Backend Technology Stack</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Programming Languages (Pick 1-2)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Python</span>
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">JavaScript/Node.js</span>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Java</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">C#</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Frameworks (Essential)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Express.js</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Django</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Spring Boot</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">FastAPI</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Databases & Tools</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">PostgreSQL</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">MongoDB</span>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Redis</span>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Docker</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Difficulty & Learning Time */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Learning Timeline & Difficulty
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Frontend Learning Path</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-green-500 pl-3">
                          <div className="font-medium text-gray-800">Months 1-2: HTML/CSS Basics</div>
                          <div className="text-sm text-gray-600">Structure, styling, responsive design, CSS Grid/Flexbox</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '40%'}}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Beginner Friendly</div>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-3">
                          <div className="font-medium text-gray-800">Months 3-5: JavaScript Fundamentals</div>
                          <div className="text-sm text-gray-600">DOM manipulation, events, async programming, ES6+ features</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Moderate Challenge</div>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-3">
                          <div className="font-medium text-gray-800">Months 6-8: React/Framework</div>
                          <div className="text-sm text-gray-600">Component architecture, state management, routing, API integration</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Advanced Concepts</div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-blue-50 rounded">
                        <div className="font-medium text-blue-700">Job Ready: 6-10 months</div>
                        <div className="text-sm text-gray-600">Visual feedback makes learning more engaging</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Learning Path</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-gray-800">Months 1-3: Programming Language</div>
                          <div className="text-sm text-gray-600">Python/Java basics, data structures, algorithms, OOP</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Programming Foundation Required</div>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Months 4-6: Web Development</div>
                          <div className="text-sm text-gray-600">HTTP, REST APIs, frameworks, basic database operations</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{width: '70%'}}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Web Concepts</div>
                        </div>
                        <div className="border-l-4 border-red-500 pl-3">
                          <div className="font-medium text-gray-800">Months 7-10: Advanced Topics</div>
                          <div className="text-sm text-gray-600">Database design, security, testing, deployment, performance</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">Complex System Concepts</div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-purple-50 rounded">
                        <div className="font-medium text-purple-700">Job Ready: 8-12 months</div>
                        <div className="text-sm text-gray-600">Requires deeper programming knowledge</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Soft Skills</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Frontend Developer Skills</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Palette className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                          <span><strong>Design Sense:</strong> Understanding of visual hierarchy, color theory, typography</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                          <span><strong>User Empathy:</strong> Ability to think from the user's perspective</span>
                        </li>
                        <li className="flex items-start">
                          <Smartphone className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                          <span><strong>Cross-Platform Thinking:</strong> Understanding different devices and browsers</span>
                        </li>
                        <li className="flex items-start">
                          <Users className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                          <span><strong>Collaboration:</strong> Working closely with designers and product teams</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Developer Skills</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Code className="w-4 h-4 text-purple-500 mr-2 mt-1" />
                          <span><strong>Logical Thinking:</strong> Breaking down complex problems into smaller parts</span>
                        </li>
                        <li className="flex items-start">
                          <Server className="w-4 h-4 text-purple-500 mr-2 mt-1" />
                          <span><strong>System Thinking:</strong> Understanding how different parts work together</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-purple-500 mr-2 mt-1" />
                          <span><strong>Security Mindset:</strong> Always considering potential vulnerabilities</span>
                        </li>
                        <li className="flex items-start">
                          <Target className="w-4 h-4 text-purple-500 mr-2 mt-1" />
                          <span><strong>Performance Focus:</strong> Optimizing for speed and efficiency</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Learning Resources */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Learning Resources</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">Frontend Learning Resources</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800">Free Resources</div>
                          <div className="text-sm text-gray-600">FreeCodeCamp, MDN Web Docs, CSS-Tricks, JavaScript.info</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800">Practice Projects</div>
                          <div className="text-sm text-gray-600">Personal portfolio, Todo app, Weather app, E-commerce site</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800">Communities</div>
                          <div className="text-sm text-gray-600">Frontend Mentor, Dev.to, CodePen, Stack Overflow</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Learning Resources</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800">Programming Fundamentals</div>
                          <div className="text-sm text-gray-600">Codecademy, LeetCode, HackerRank, Coursera</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800">Project Ideas</div>
                          <div className="text-sm text-gray-600">REST API, Chat application, Blog backend, Authentication system</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800">Advanced Topics</div>
                          <div className="text-sm text-gray-600">System Design Primer, Database courses, Cloud platforms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Decision Tab */}
            {activeTab === 'decision' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Which Path Should You Choose?</h2>

                {/* Decision Framework */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Decision-Making Questions
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">1. What excites you more?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-4 rounded border">
                          <div className="font-medium text-blue-700 mb-2">Choose Frontend If:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• You love visual design and creativity</li>
                            <li>• You enjoy seeing immediate results of your work</li>
                            <li>• You want to directly impact user experience</li>
                            <li>• You like experimenting with animations and interactions</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Choose Backend If:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• You enjoy solving complex logic puzzles</li>
                            <li>• You're interested in data and how systems work</li>
                            <li>• You like building the foundation that powers everything</li>
                            <li>• You want to work on performance and security challenges</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">2. What's your learning style?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-4 rounded border">
                          <div className="font-medium text-blue-700 mb-2">Frontend Learning</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Visual feedback helps you learn faster</li>
                            <li>• You can see progress immediately in the browser</li>
                            <li>• Easier to get started with basic HTML/CSS</li>
                            <li>• More forgiving for beginners</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Backend Learning</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Requires stronger programming foundation</li>
                            <li>• More abstract concepts to understand</li>
                            <li>• Need to think about system architecture</li>
                            <li>• Deeper technical knowledge required</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">3. What type of problems do you want to solve?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-4 rounded border">
                          <div className="font-medium text-blue-700 mb-2">Frontend Problems</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• "How can we make this more user-friendly?"</li>
                            <li>• "Why is this confusing for users?"</li>
                            <li>• "How do we make this work on all devices?"</li>
                            <li>• "How can we make this load faster?"</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Backend Problems</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• "How do we handle millions of users?"</li>
                            <li>• "How do we keep data secure?"</li>
                            <li>• "What's the most efficient algorithm?"</li>
                            <li>• "How do we design this system to scale?"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Salary Comparison */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                    Salary Expectations & Job Market
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Experience Level</th>
                          <th className="text-left p-3 border">Frontend Developer</th>
                          <th className="text-left p-3 border">Backend Developer</th>
                          <th className="text-left p-3 border">Job Market</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Entry Level (0-2 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$50K - $75K</td>
                          <td className="p-3 border text-green-600 font-bold">$55K - $80K</td>
                          <td className="p-3 border text-gray-600">Frontend has more entry opportunities</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Mid Level (2-5 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$75K - $120K</td>
                          <td className="p-3 border text-green-600 font-bold">$85K - $130K</td>
                          <td className="p-3 border text-gray-600">Backend starts pulling ahead</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Senior Level (5-10 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$120K - $180K</td>
                          <td className="p-3 border text-green-600 font-bold">$130K - $200K</td>
                          <td className="p-3 border text-gray-600">Both reach high compensation</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Staff/Principal (10+ years)</td>
                          <td className="p-3 border text-green-600 font-bold">$180K - $250K</td>
                          <td className="p-3 border text-green-600 font-bold">$200K - $300K+</td>
                          <td className="p-3 border text-gray-600">Backend specialists command higher rates</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Career Flexibility */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Career Flexibility & Growth Options
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Frontend Career Paths</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="space-y-2 text-gray-700">
                          <div><strong>→ UI/UX Designer:</strong> Move towards design</div>
                          <div><strong>→ Full Stack Developer:</strong> Add backend skills</div>
                          <div><strong>→ Frontend Architect:</strong> Technical leadership</div>
                          <div><strong>→ Product Manager:</strong> User-focused product decisions</div>
                          <div><strong>→ Freelance/Agency:</strong> Client work and consulting</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Backend Career Paths</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="space-y-2 text-gray-700">
                          <div><strong>→ Full Stack Developer:</strong> Add frontend skills</div>
                          <div><strong>→ DevOps Engineer:</strong> Focus on infrastructure</div>
                          <div><strong>→ Solutions Architect:</strong> System design leadership</div>
                          <div><strong>→ Data Engineer:</strong> Specialize in data pipelines</div>
                          <div><strong>→ Security Engineer:</strong> Focus on cybersecurity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Decision Matrix */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Decision Matrix</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">You're Likely a Frontend Person If:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You care deeply about user experience</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You have an eye for design and visual details</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You like to see immediate visual results</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You enjoy creative problem-solving</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You want a lower barrier to entry</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">You're Likely a Backend Person If:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You love solving complex logic problems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You're fascinated by how systems work</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You enjoy working with data and databases</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You're interested in security and performance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>You're willing to invest in deeper learning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hybrid Option */}
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Monitor className="w-5 h-5 mr-2 text-indigo-600" />
                    Can't Decide? Consider Full Stack Development
                  </h3>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-gray-700 mb-4">
                      If you're torn between frontend and backend, full stack development lets you work on both sides. 
                      You can start with frontend (easier entry) and gradually add backend skills, or vice versa.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-indigo-50 p-3 rounded">
                        <div className="font-medium text-indigo-700 mb-1">Pros</div>
                        <div className="text-gray-600">Versatility, more job opportunities, complete project ownership</div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded">
                        <div className="font-medium text-yellow-700 mb-1">Cons</div>
                        <div className="text-gray-600">Longer learning curve, less specialized expertise initially</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <div className="font-medium text-green-700 mb-1">Best For</div>
                        <div className="text-gray-600">Startups, small teams, entrepreneurial mindset</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Start Your Development Journey</h2>
          <p className="text-lg mb-6 opacity-90">
            Both frontend and backend development offer exciting career opportunities. Choose the path that aligns with your interests and start building projects to develop your skills.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              🚀 Remember: You can always transition between frontend and backend as your career evolves!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Frontend Learning Path
            </button>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Backend Learning Path
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Full Stack Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Server, Users, TrendingUp, CheckCircle, AlertTriangle, Briefcase, Clock, DollarSign, Target } from 'lucide-react';

export default function BackendvsFullStackPage() {
  const [activeTab, setActiveTab] = useState<'roles' | 'skills' | 'decision'>('roles');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8">
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
            Backend vs Full Stack Developer: Complete Career Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Understand the differences between backend and full stack development roles, career paths, salary expectations, and how to choose the right path for your goals.
          </p>
        </div>

        {/* Quick Comparison Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Core Difference</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-3">
                <Server className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-purple-700">Backend Developer</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Server-side specialist</strong> - Focus deeply on databases, APIs, server logic, and system architecture.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Deep expertise in server technologies</li>
                <li>• Database design and optimization</li>
                <li>• API development and microservices</li>
                <li>• System performance and scaling</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <div className="flex items-center mb-3">
                <Code className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-indigo-700">Full Stack Developer</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>End-to-end generalist</strong> - Work across frontend, backend, and everything in between for complete applications.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Frontend UI/UX development</li>
                <li>• Backend API and database work</li>
                <li>• DevOps and deployment knowledge</li>
                <li>• Product development lifecycle</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-center font-semibold text-yellow-700">
              💡 <strong>Key Decision:</strong> Depth vs Breadth - Do you want to master server-side systems or build complete applications end-to-end?
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('roles')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'roles'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-purple-500'
                }`}
              >
                Role Comparison
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'skills'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-purple-500'
                }`}
              >
                Skills & Technologies
              </button>
              <button
                onClick={() => setActiveTab('decision')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'decision'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-purple-500'
                }`}
              >
                Career Decision Guide
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Roles Tab */}
            {activeTab === 'roles' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Role Responsibilities & Career Paths</h2>

                {/* Daily Responsibilities */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Responsibilities</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Developer Day</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Morning: API Development</div>
                          <div className="text-gray-600">Design and build RESTful APIs, handle authentication, optimize database queries</div>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Afternoon: System Architecture</div>
                          <div className="text-gray-600">Plan microservices, configure servers, implement caching strategies</div>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Evening: Performance Optimization</div>
                          <div className="text-gray-600">Monitor system performance, fix bottlenecks, scale infrastructure</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-indigo-600 mb-3">Full Stack Developer Day</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-indigo-500 pl-3">
                          <div className="font-medium text-gray-800">Morning: Frontend Features</div>
                          <div className="text-gray-600">Build user interfaces, implement responsive design, integrate with APIs</div>
                        </div>
                        <div className="border-l-4 border-indigo-500 pl-3">
                          <div className="font-medium text-gray-800">Afternoon: Backend Integration</div>
                          <div className="text-gray-600">Create API endpoints, manage database connections, handle business logic</div>
                        </div>
                        <div className="border-l-4 border-indigo-500 pl-3">
                          <div className="font-medium text-gray-800">Evening: Deployment & Testing</div>
                          <div className="text-gray-600">Deploy applications, run end-to-end tests, monitor user experience</div>
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
                      <h4 className="font-semibold text-purple-600 mb-4">Backend Developer Path</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Junior Backend Developer</div>
                            <div className="text-sm text-green-600 font-bold">$60K - $85K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Learn server technologies, basic API development, database fundamentals
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Senior Backend Developer</div>
                            <div className="text-sm text-green-600 font-bold">$90K - $130K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            System architecture, microservices, performance optimization, team mentoring
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Principal Engineer / Architect</div>
                            <div className="text-sm text-green-600 font-bold">$140K - $200K+</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            System design leadership, technology strategy, cross-team architecture
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-600 mb-4">Full Stack Developer Path</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Junior Full Stack Developer</div>
                            <div className="text-sm text-green-600 font-bold">$55K - $80K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Basic frontend/backend skills, simple CRUD applications, guided development
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Senior Full Stack Developer</div>
                            <div className="text-sm text-green-600 font-bold">$85K - $120K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Complete product development, technical leadership, deployment expertise
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Technical Lead / Product Engineer</div>
                            <div className="text-sm text-green-600 font-bold">$120K - $180K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Product strategy, team coordination, end-to-end product ownership
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Preferences */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-orange-600" />
                    Company & Industry Preferences
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Developers Thrive At:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Large Tech Companies:</strong> Google, Amazon, Microsoft - complex systems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Financial Services:</strong> Banks, trading firms - high performance requirements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Enterprise Software:</strong> B2B SaaS companies with complex backends</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Data Companies:</strong> Analytics platforms, data processing pipelines</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-indigo-600 mb-3">Full Stack Developers Thrive At:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Startups:</strong> Early-stage companies needing versatile developers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Agencies:</strong> Digital agencies building client websites/apps</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Product Companies:</strong> Consumer-facing apps and web platforms</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Small/Medium Businesses:</strong> Companies needing complete solutions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Work Environment */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Work Environment & Team Dynamics</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Aspect</th>
                          <th className="text-left p-3 border">Backend Developer</th>
                          <th className="text-left p-3 border">Full Stack Developer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Team Collaboration</td>
                          <td className="p-3 border">Deep collaboration with DevOps, Database teams, other backend developers</td>
                          <td className="p-3 border">Broad collaboration with designers, product managers, stakeholders</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Problem Focus</td>
                          <td className="p-3 border">Performance, scalability, data integrity, system reliability</td>
                          <td className="p-3 border">User experience, feature delivery, product functionality</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Meeting Types</td>
                          <td className="p-3 border">Architecture reviews, technical deep dives, system design</td>
                          <td className="p-3 border">Sprint planning, product demos, cross-functional meetings</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Autonomy Level</td>
                          <td className="p-3 border">High technical autonomy, structured project work</td>
                          <td className="p-3 border">Moderate autonomy, more stakeholder interaction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Required Skills & Technology Stacks</h2>

                {/* Core Skills Comparison */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Technical Skills</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-4">Backend Developer Must-Haves</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Programming Languages (Pick 1-2)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Python</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Java</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Node.js</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Go</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">C#</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Databases (Essential)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">SQL</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">PostgreSQL</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">MongoDB</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Redis</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">System Design (Critical)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Microservices</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">APIs</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Caching</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Load Balancing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-indigo-600 mb-4">Full Stack Developer Must-Haves</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Frontend (Essential)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">JavaScript</span>
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">React/Vue</span>
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">HTML/CSS</span>
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">TypeScript</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Backend (Moderate Depth)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Node.js/Python</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">REST APIs</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Database Basics</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">DevOps (Basic)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Git</span>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Docker</span>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">AWS/Vercel</span>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">CI/CD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Path Comparison */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Learning Timeline & Difficulty
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Backend Learning Path</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-green-500 pl-3">
                          <div className="font-medium text-gray-800">Months 1-3: Foundation</div>
                          <div className="text-sm text-gray-600">Programming language, basic web concepts, database fundamentals</div>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-3">
                          <div className="font-medium text-gray-800">Months 4-8: Intermediate</div>
                          <div className="text-sm text-gray-600">API development, database design, basic system architecture</div>
                        </div>
                        <div className="border-l-4 border-red-500 pl-3">
                          <div className="font-medium text-gray-800">Months 9-18: Advanced</div>
                          <div className="text-sm text-gray-600">Microservices, performance optimization, scalability patterns</div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-purple-50 rounded">
                        <div className="font-medium text-purple-700">Job Ready Timeline: 6-12 months</div>
                        <div className="text-sm text-gray-600">Deep expertise takes years to develop</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-indigo-600 mb-3">Full Stack Learning Path</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-gray-800">Months 1-4: Frontend Focus</div>
                          <div className="text-sm text-gray-600">HTML/CSS, JavaScript, React, basic responsive design</div>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                          <div className="font-medium text-gray-800">Months 5-8: Backend Addition</div>
                          <div className="text-sm text-gray-600">Node.js/Python, databases, API integration, authentication</div>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Months 9-12: Full Integration</div>
                          <div className="text-sm text-gray-600">Deployment, testing, project management, soft skills</div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-indigo-50 rounded">
                        <div className="font-medium text-indigo-700">Job Ready Timeline: 8-15 months</div>
                        <div className="text-sm text-gray-600">Broader scope but less depth initially</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stacks */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Technology Stacks</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-4">Backend-Focused Stacks</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Python Backend</div>
                          <div className="text-xs text-gray-600">Django/FastAPI + PostgreSQL + Redis + Docker</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Java Enterprise</div>
                          <div className="text-xs text-gray-600">Spring Boot + MySQL + Kafka + Kubernetes</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Node.js Microservices</div>
                          <div className="text-xs text-gray-600">Express + MongoDB + RabbitMQ + AWS</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-600 mb-4">Full Stack Stacks</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">MERN Stack</div>
                          <div className="text-xs text-gray-600">MongoDB + Express + React + Node.js</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Next.js Full Stack</div>
                          <div className="text-xs text-gray-600">Next.js + PostgreSQL + Prisma + Vercel</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Django Full Stack</div>
                          <div className="text-xs text-gray-600">Django + React + PostgreSQL + Heroku</div>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Decision Framework</h2>

                {/* Decision Matrix */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Choose Your Path: Key Questions
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">1. What's your learning preference?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Choose Backend If:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• You prefer deep, focused learning</li>
                            <li>• You enjoy solving complex technical problems</li>
                            <li>• You like working with data and systems</li>
                            <li>• You want to become an expert in server technologies</li>
                          </ul>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded border">
                          <div className="font-medium text-indigo-700 mb-2">Choose Full Stack If:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• You enjoy learning diverse technologies</li>
                            <li>• You like seeing the complete user experience</li>
                            <li>• You want flexibility in your work</li>
                            <li>• You're comfortable being a generalist</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">2. What type of problems excite you?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Backend Problems</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• How to make this system handle 1M users?</li>
                            <li>• How to optimize this database query?</li>
                            <li>• How to design a scalable microservices architecture?</li>
                            <li>• How to ensure data consistency across systems?</li>
                          </ul>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded border">
                          <div className="font-medium text-indigo-700 mb-2">Full Stack Problems</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• How to build a complete user workflow?</li>
                            <li>• How to make this feature work end-to-end?</li>
                            <li>• How to deploy this application to production?</li>
                            <li>• How to integrate frontend and backend seamlessly?</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">3. What's your career timeline?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Backend Path (Longer Investment)</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• 6-12 months to job-ready</li>
                            <li>• 2-3 years to senior level</li>
                            <li>• Higher long-term earning potential</li>
                            <li>• More specialized, fewer but higher-paying roles</li>
                          </ul>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded border">
                          <div className="font-medium text-indigo-700 mb-2">Full Stack Path (Faster Entry)</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• 8-15 months to job-ready</li>
                            <li>• 1-2 years to solid mid-level</li>
                            <li>• More job opportunities available</li>
                            <li>• Easier to start freelancing or consulting</li>
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
                    Salary Expectations by Experience Level
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Experience Level</th>
                          <th className="text-left p-3 border">Backend Developer</th>
                          <th className="text-left p-3 border">Full Stack Developer</th>
                          <th className="text-left p-3 border">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Entry Level (0-2 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$60K - $85K</td>
                          <td className="p-3 border text-green-600 font-bold">$55K - $80K</td>
                          <td className="p-3 border text-gray-600">Backend slightly higher due to specialization</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Mid Level (2-5 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$85K - $130K</td>
                          <td className="p-3 border text-green-600 font-bold">$80K - $120K</td>
                          <td className="p-3 border text-gray-600">Backend premium grows with experience</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Senior Level (5-10 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$130K - $180K</td>
                          <td className="p-3 border text-green-600 font-bold">$120K - $160K</td>
                          <td className="p-3 border text-gray-600">Both can reach high compensation</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Principal/Staff (10+ years)</td>
                          <td className="p-3 border text-green-600 font-bold">$180K - $300K+</td>
                          <td className="p-3 border text-green-600 font-bold">$160K - $250K+</td>
                          <td className="p-3 border text-gray-600">Backend architects command highest premiums</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Transition Paths */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Career Transition & Flexibility
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">From Backend to Full Stack</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-green-600 mb-2">✅ Relatively Easy</div>
                        <div className="space-y-2 text-gray-700">
                          <div><strong>Add:</strong> Frontend frameworks (React/Vue)</div>
                          <div><strong>Add:</strong> UI/UX design basics</div>
                          <div><strong>Add:</strong> Client-side development</div>
                          <div><strong>Timeline:</strong> 3-6 months of learning</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">From Full Stack to Backend</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-yellow-600 mb-2">⚠️ Requires Deepening</div>
                        <div className="space-y-2 text-gray-700">
                          <div><strong>Deepen:</strong> System design knowledge</div>
                          <div><strong>Deepen:</strong> Database optimization</div>
                          <div><strong>Add:</strong> Advanced architecture patterns</div>
                          <div><strong>Timeline:</strong> 6-12 months of focused study</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Recommendations */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Final Recommendations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Choose Backend If You:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Love solving complex technical challenges</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Want to work at large tech companies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Prefer depth over breadth in learning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Are comfortable with longer learning curve</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Want maximum long-term earning potential</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded border">
                      <h4 className="font-semibold text-indigo-600 mb-3">Choose Full Stack If You:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Want to build complete applications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Enjoy variety in your daily work</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Want more job opportunities available</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Are interested in startups or freelancing</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Prefer faster entry into the job market</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Choose Your Development Path</h2>
          <p className="text-lg mb-6 opacity-90">
            Both backend and full stack development offer excellent career opportunities. The key is choosing the path that aligns with your interests, learning style, and career goals.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              💡 Remember: You can always transition between paths as your career evolves. Start with what excites you most!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Backend Learning Path
            </button>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Full Stack Learning Path
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors">
              Career Assessment Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
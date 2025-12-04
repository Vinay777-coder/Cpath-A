"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Wrench, Users, TrendingUp, CheckCircle, AlertTriangle, Briefcase, Clock, DollarSign, Target, Zap, Server, Code2 } from 'lucide-react';

export default function DevOpsVsSREPage() {
  const [activeTab, setActiveTab] = useState<'roles' | 'skills' | 'decision'>('roles');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-8">
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
            DevOps vs SRE: Understanding Modern Operations Roles
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore the differences between DevOps Engineers and Site Reliability Engineers (SRE), their responsibilities, career paths, and how to choose the right operations role for your future.
          </p>
        </div>

        {/* Quick Comparison Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Core Difference</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <div className="flex items-center mb-3">
                <Wrench className="w-6 h-6 text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold text-orange-700">DevOps Engineer</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Build and Deploy Focus</strong> - Streamline development workflows, automate deployments, and bridge development and operations teams.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• CI/CD pipeline development</li>
                <li>• Infrastructure automation</li>
                <li>• Developer tooling and workflows</li>
                <li>• Cultural transformation initiatives</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-700">Site Reliability Engineer (SRE)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Reliability and Scale Focus</strong> - Ensure system reliability, performance, and availability through engineering practices and data-driven approaches.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Service level objectives (SLOs)</li>
                <li>• Incident response and postmortems</li>
                <li>• Capacity planning and scaling</li>
                <li>• Error budgets and reliability metrics</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-center font-semibold text-yellow-700">
              💡 <strong>Key Insight:</strong> DevOps focuses on velocity and automation, while SRE focuses on reliability and operational excellence
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
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-orange-500'
                }`}
              >
                Role Comparison
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'skills'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-orange-500'
                }`}
              >
                Skills & Technologies
              </button>
              <button
                onClick={() => setActiveTab('decision')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'decision'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-orange-500'
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Role Responsibilities & Career Evolution</h2>

                {/* Daily Responsibilities */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Responsibilities</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-3">DevOps Engineer Day</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-orange-500 pl-3">
                          <div className="font-medium text-gray-800">Morning: Pipeline Optimization</div>
                          <div className="text-gray-600">Improve CI/CD workflows, reduce build times, automate testing processes</div>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-3">
                          <div className="font-medium text-gray-800">Afternoon: Infrastructure as Code</div>
                          <div className="text-gray-600">Write Terraform/Ansible scripts, provision cloud resources, manage environments</div>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-3">
                          <div className="font-medium text-gray-800">Evening: Developer Support</div>
                          <div className="text-gray-600">Help developers with deployment issues, improve tooling, facilitate releases</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-red-600 mb-3">Site Reliability Engineer Day</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-red-500 pl-3">
                          <div className="font-medium text-gray-800">Morning: SLO Monitoring</div>
                          <div className="text-gray-600">Review service health metrics, analyze error budgets, investigate reliability trends</div>
                        </div>
                        <div className="border-l-4 border-red-500 pl-3">
                          <div className="font-medium text-gray-800">Afternoon: System Improvements</div>
                          <div className="text-gray-600">Implement reliability features, capacity planning, performance optimization</div>
                        </div>
                        <div className="border-l-4 border-red-500 pl-3">
                          <div className="font-medium text-gray-800">Evening: Incident Response</div>
                          <div className="text-gray-600">On-call duties, incident investigation, writing postmortems</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Philosophies */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Philosophies & Approaches</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-3">DevOps Philosophy</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-orange-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Culture First</div>
                          <div className="text-gray-600">Break down silos between development and operations teams</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Automation Everything</div>
                          <div className="text-gray-600">Automate repetitive tasks to increase efficiency and reduce errors</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Continuous Improvement</div>
                          <div className="text-gray-600">Iterative improvements to processes, tools, and workflows</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-red-600 mb-3">SRE Philosophy</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-red-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Reliability Engineering</div>
                          <div className="text-gray-600">Apply software engineering practices to operations problems</div>
                        </div>
                        <div className="bg-red-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Error Budgets</div>
                          <div className="text-gray-600">Balance reliability goals with feature velocity using data</div>
                        </div>
                        <div className="bg-red-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Blameless Culture</div>
                          <div className="text-gray-600">Focus on systems and processes, not individual blame</div>
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
                      <h4 className="font-semibold text-orange-600 mb-4">DevOps Career Path</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Junior DevOps Engineer</div>
                            <div className="text-sm text-green-600 font-bold">$65K - $90K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Learn CI/CD basics, cloud fundamentals, scripting, basic automation
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Senior DevOps Engineer</div>
                            <div className="text-sm text-green-600 font-bold">$95K - $140K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Infrastructure as Code, complex automation, security integration, team mentoring
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">DevOps Architect / Principal</div>
                            <div className="text-sm text-green-600 font-bold">$150K - $220K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Platform strategy, organizational transformation, technology leadership
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-4">SRE Career Path</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Junior SRE</div>
                            <div className="text-sm text-green-600 font-bold">$70K - $95K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Monitoring setup, basic incident response, SLI/SLO understanding
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Senior SRE</div>
                            <div className="text-sm text-green-600 font-bold">$100K - $150K</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Complex system design, incident leadership, reliability engineering
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium text-gray-800">Staff SRE / SRE Manager</div>
                            <div className="text-sm text-green-600 font-bold">$160K - $250K+</div>
                          </div>
                          <div className="text-sm text-gray-600">
                            Reliability strategy, cross-team coordination, incident command
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
                    Company Types & Work Environments
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-3">DevOps Engineers Excel At:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Growth Companies:</strong> Scaling infrastructure and improving velocity</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Product Companies:</strong> Feature-focused teams needing fast deployment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Consulting/Agencies:</strong> Implementing DevOps practices for clients</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Traditional Enterprises:</strong> Digital transformation initiatives</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-red-600 mb-3">SREs Thrive At:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Big Tech:</strong> Google, Amazon, Netflix - massive scale systems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Financial Services:</strong> High-availability, compliance-focused environments</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>SaaS Platforms:</strong> Customer-facing services with strict uptime requirements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Infrastructure Companies:</strong> Companies where reliability is core business</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Work-Life Balance */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Work Environment & Stress Factors</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Aspect</th>
                          <th className="text-left p-3 border">DevOps Engineer</th>
                          <th className="text-left p-3 border">Site Reliability Engineer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">On-Call Requirements</td>
                          <td className="p-3 border">Moderate - deployment issues, infrastructure problems</td>
                          <td className="p-3 border">High - 24/7 service availability, incident response</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Stress Level</td>
                          <td className="p-3 border">Medium - project deadlines, automation challenges</td>
                          <td className="p-3 border">High - service outages, reliability pressure</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Work Schedule</td>
                          <td className="p-3 border">Regular hours with occasional deployment windows</td>
                          <td className="p-3 border">Rotation-based on-call, irregular hours during incidents</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Learning Curve</td>
                          <td className="p-3 border">Broad but manageable - many tools, cultural aspects</td>
                          <td className="p-3 border">Steep - deep system knowledge, reliability engineering</td>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills & Tool Mastery</h2>

                {/* Core Skills Comparison */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Essential Technical Skills</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-4">DevOps Engineer Core Skills</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-2">CI/CD Pipelines (Essential)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Jenkins</span>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">GitLab CI</span>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">GitHub Actions</span>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Azure DevOps</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Infrastructure as Code (Critical)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Terraform</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Ansible</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">CloudFormation</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Pulumi</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Containerization (Must-Have)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Docker</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Kubernetes</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Helm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-red-600 mb-4">SRE Core Skills</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Monitoring & Observability (Critical)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Prometheus</span>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Grafana</span>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Jaeger</span>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">ELK Stack</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Programming (Essential)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Python</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Go</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Java</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Bash/Shell</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-2">Reliability Engineering (Core)</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">SLI/SLO Design</span>
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">Error Budgets</span>
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">Postmortems</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Depth Comparison */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Skill Depth Requirements</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3">Programming Skills</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="font-medium text-orange-600 mb-2">DevOps: Scripting Focus</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                          </div>
                          <div className="text-sm text-gray-600">Automation scripts, infrastructure code, basic application knowledge</div>
                        </div>
                        <div>
                          <div className="font-medium text-red-600 mb-2">SRE: Software Engineering</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <div className="text-sm text-gray-600">Production software, system design, complex debugging skills</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3">System Design Knowledge</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="font-medium text-orange-600 mb-2">DevOps: Infrastructure Design</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '70%'}}></div>
                          </div>
                          <div className="text-sm text-gray-600">Cloud architecture, deployment patterns, automation workflows</div>
                        </div>
                        <div>
                          <div className="font-medium text-red-600 mb-2">SRE: Distributed Systems</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                          </div>
                          <div className="text-sm text-gray-600">Scalability patterns, fault tolerance, performance engineering</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Paths */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Learning Path Recommendations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-3">DevOps Learning Journey</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-gray-800">Months 1-2: Foundations</div>
                          <div className="text-sm text-gray-600">Linux basics, Git, basic scripting (Python/Bash)</div>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                          <div className="font-medium text-gray-800">Months 3-5: Cloud & Containers</div>
                          <div className="text-sm text-gray-600">AWS/Azure basics, Docker, basic Kubernetes</div>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-3">
                          <div className="font-medium text-gray-800">Months 6-8: Automation</div>
                          <div className="text-sm text-gray-600">Terraform, CI/CD pipelines, Ansible</div>
                        </div>
                        <div className="border-l-4 border-red-500 pl-3">
                          <div className="font-medium text-gray-800">Months 9-12: Advanced</div>
                          <div className="text-sm text-gray-600">Monitoring, security, advanced K8s, team collaboration</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-red-600 mb-3">SRE Learning Journey</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-purple-500 pl-3">
                          <div className="font-medium text-gray-800">Months 1-3: Programming Base</div>
                          <div className="text-sm text-gray-600">Strong programming (Python/Go), system administration</div>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-gray-800">Months 4-7: Systems Knowledge</div>
                          <div className="text-sm text-gray-600">Distributed systems, networking, database fundamentals</div>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                          <div className="font-medium text-gray-800">Months 8-12: SRE Practices</div>
                          <div className="text-sm text-gray-600">SLI/SLO design, monitoring, incident response</div>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-3">
                          <div className="font-medium text-gray-800">Year 2+: Reliability Engineering</div>
                          <div className="text-sm text-gray-600">Capacity planning, chaos engineering, advanced troubleshooting</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Valuable Certifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-4">DevOps Certifications</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">AWS Certified DevOps Engineer</div>
                          <div className="text-xs text-gray-600">Professional-level AWS automation and deployment</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Azure DevOps Engineer Expert</div>
                          <div className="text-xs text-gray-600">Microsoft Azure DevOps practices and tools</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Certified Kubernetes Administrator</div>
                          <div className="text-xs text-gray-600">Container orchestration and management</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-4">SRE-Relevant Certifications</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Google Cloud Professional Cloud Architect</div>
                          <div className="text-xs text-gray-600">Large-scale system design and reliability</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">Certified Kubernetes Administrator</div>
                          <div className="text-xs text-gray-600">Container platform reliability and operations</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-gray-800 mb-1">AWS Solutions Architect Professional</div>
                          <div className="text-xs text-gray-600">Complex system design and operational excellence</div>
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

                {/* Decision Questions */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Key Decision Factors
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">1. What motivates you more?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-orange-50 p-4 rounded border">
                          <div className="font-medium text-orange-700 mb-2">Choose DevOps If:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Building and improving development workflows</li>
                            <li>• Automating repetitive processes</li>
                            <li>• Enabling team productivity and velocity</li>
                            <li>• Creating seamless deployment experiences</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded border">
                          <div className="font-medium text-red-700 mb-2">Choose SRE If:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Ensuring systems run reliably at scale</li>
                            <li>• Solving complex performance problems</li>
                            <li>• Designing fault-tolerant architectures</li>
                            <li>• Data-driven operational decisions</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">2. How do you handle pressure?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-orange-50 p-4 rounded border">
                          <div className="font-medium text-orange-700 mb-2">DevOps Pressure</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Project deadlines and feature releases</li>
                            <li>• Deployment windows and rollbacks</li>
                            <li>• Moderate on-call responsibilities</li>
                            <li>• Process improvement pressure</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded border">
                          <div className="font-medium text-red-700 mb-2">SRE Pressure</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• High-stakes incident response</li>
                            <li>• 24/7 service availability responsibility</li>
                            <li>• Customer-impacting outages</li>
                            <li>• Performance and reliability targets</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">3. What's your technical preference?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-orange-50 p-4 rounded border">
                          <div className="font-medium text-orange-700 mb-2">DevOps Technical Focus</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Infrastructure automation tools</li>
                            <li>• CI/CD pipeline development</li>
                            <li>• Cloud platform expertise</li>
                            <li>• Developer experience improvement</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded border">
                          <div className="font-medium text-red-700 mb-2">SRE Technical Focus</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Software engineering practices</li>
                            <li>• System performance optimization</li>
                            <li>• Distributed systems design</li>
                            <li>• Observability and monitoring</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Salary & Growth Comparison */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                    Compensation & Career Growth
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Level</th>
                          <th className="text-left p-3 border">DevOps Engineer</th>
                          <th className="text-left p-3 border">Site Reliability Engineer</th>
                          <th className="text-left p-3 border">Growth Factors</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Junior (0-2 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$65K - $90K</td>
                          <td className="p-3 border text-green-600 font-bold">$70K - $95K</td>
                          <td className="p-3 border text-gray-600">SRE slight premium due to technical depth</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Mid-Level (3-5 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$95K - $140K</td>
                          <td className="p-3 border text-green-600 font-bold">$100K - $150K</td>
                          <td className="p-3 border text-gray-600">Both roles show strong growth trajectory</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Senior (5-8 years)</td>
                          <td className="p-3 border text-green-600 font-bold">$140K - $200K</td>
                          <td className="p-3 border text-green-600 font-bold">$150K - $220K</td>
                          <td className="p-3 border text-gray-600">SRE commands higher premiums at scale</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Staff/Principal (8+ years)</td>
                          <td className="p-3 border text-green-600 font-bold">$200K - $300K</td>
                          <td className="p-3 border text-green-600 font-bold">$220K - $350K+</td>
                          <td className="p-3 border text-gray-600">SRE expertise highly valued at top tech companies</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Career Transition */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Career Flexibility & Transitions
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">From DevOps to SRE</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-orange-600 mb-2">⚠️ Significant Skill Gap</div>
                        <div className="space-y-2 text-gray-700">
                          <div><strong>Add:</strong> Strong programming skills</div>
                          <div><strong>Add:</strong> System design knowledge</div>
                          <div><strong>Add:</strong> Reliability engineering practices</div>
                          <div><strong>Timeline:</strong> 12-18 months intensive learning</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">From SRE to DevOps</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-green-600 mb-2">✅ Natural Transition</div>
                        <div className="space-y-2 text-gray-700">
                          <div><strong>Leverage:</strong> System knowledge and automation</div>
                          <div><strong>Add:</strong> CI/CD pipeline focus</div>
                          <div><strong>Add:</strong> Developer workflow understanding</div>
                          <div><strong>Timeline:</strong> 3-6 months to pivot</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Recommendations */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Final Recommendations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-3">Choose DevOps If You:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Want to improve developer productivity</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Enjoy automation and tooling challenges</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Prefer regular working hours</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Like working across diverse tools and platforms</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Want to drive organizational change</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded border">
                      <h4 className="font-semibold text-red-600 mb-3">Choose SRE If You:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Love solving complex system problems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Thrive under high-pressure situations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Want to work at large tech companies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Are comfortable with on-call responsibilities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Prefer deep technical expertise</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Alternative Paths */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Alternative Career Considerations</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-4 rounded border">
                      <div className="font-medium text-gray-800 mb-2">Platform Engineering</div>
                      <div className="text-gray-600">Blend of DevOps and SRE focused on internal developer platforms</div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <div className="font-medium text-gray-800 mb-2">Cloud Architecture</div>
                      <div className="text-gray-600">Design large-scale cloud solutions with operational expertise</div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <div className="font-medium text-gray-800 mb-2">Security Engineering</div>
                      <div className="text-gray-600">Apply ops skills to cybersecurity and compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Choose Your Operations Path</h2>
          <p className="text-lg mb-6 opacity-90">
            Both DevOps and SRE offer rewarding careers in modern technology operations. Consider your interests in automation vs. reliability, work-life balance preferences, and long-term career goals.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              🎯 Pro Tip: Start with DevOps if you're unsure - it provides a good foundation and easier transition to SRE later!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              DevOps Learning Path
            </button>
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              SRE Learning Path
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors">
              Operations Skills Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
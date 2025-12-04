"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, Users, Database, BarChart3, Brain, Target, DollarSign, Clock, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function DataAnalystVsBusinessAnalystPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'career'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
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
            Data Analyst vs Business Analyst: Complete Comparison 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the key differences, similarities, and career paths for Data Analysts and Business Analysts to make the right career choice
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Database className="inline w-4 h-4 mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'comparison'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <BarChart3 className="inline w-4 h-4 mr-2" />
              Detailed Comparison
            </button>
            <button
              onClick={() => setActiveTab('career')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'career'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Briefcase className="inline w-4 h-4 mr-2" />
              Career Guide
            </button>
          </div>
        </div>

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Database className="w-8 h-8 text-blue-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Data Analyst</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Focuses on collecting, processing, and analyzing data to extract insights and support decision-making through statistical analysis and data visualization.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span>Primary Focus: Data interpretation and statistical analysis</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Brain className="w-4 h-4 mr-2" />
                      <span>Key Skills: SQL, Python/R, Tableau, Excel</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>Average Salary: $65K - $95K</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-green-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Business Analyst</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Bridges the gap between business stakeholders and IT teams by analyzing business processes, requirements, and recommending solutions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="w-4 h-4 mr-2" />
                      <span>Primary Focus: Business process optimization</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Brain className="w-4 h-4 mr-2" />
                      <span>Key Skills: Process modeling, stakeholder management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>Average Salary: $70K - $100K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Differences */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Differences at a Glance</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Aspect</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-600">Data Analyst</th>
                      <th className="text-left py-3 px-4 font-semibold text-green-600">Business Analyst</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Primary Focus</td>
                      <td className="py-3 px-4">Data interpretation & insights</td>
                      <td className="py-3 px-4">Business process improvement</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Key Output</td>
                      <td className="py-3 px-4">Reports, dashboards, models</td>
                      <td className="py-3 px-4">Requirements, process maps, solutions</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Technical Skills</td>
                      <td className="py-3 px-4">High (SQL, Python, R)</td>
                      <td className="py-3 px-4">Medium (Excel, Visio, BPMN)</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="py-3 px-4 font-medium">Stakeholder Interaction</td>
                      <td className="py-3 px-4">Medium (mostly internal teams)</td>
                      <td className="py-3 px-4">High (cross-functional teams)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Math/Statistics</td>
                      <td className="py-3 px-4">Essential</td>
                      <td className="py-3 px-4">Helpful but not critical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Comparison Section */}
        {activeTab === 'comparison' && (
          <div className="space-y-8">
            {/* Responsibilities */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Data Analyst Responsibilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Collect and clean large datasets from various sources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Perform statistical analysis and hypothesis testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Create data visualizations and interactive dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Identify trends, patterns, and correlations in data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Build predictive models and forecasts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Present findings to stakeholders through reports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">Business Analyst Responsibilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Gather and document business requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Analyze current business processes and workflows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Identify process improvement opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Facilitate meetings between stakeholders and IT teams</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Create process maps and system documentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Support project implementation and change management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills & Tools Comparison</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Data Analyst Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Technical Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {['SQL', 'Python', 'R', 'Excel', 'Tableau', 'Power BI', 'Statistics', 'Machine Learning'].map((skill) => (
                          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Soft Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Critical Thinking', 'Problem Solving', 'Communication', 'Attention to Detail'].map((skill) => (
                          <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Business Analyst Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Technical Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Excel', 'Visio', 'BPMN', 'SQL (Basic)', 'Jira', 'Confluence', 'Process Modeling'].map((skill) => (
                          <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Soft Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Communication', 'Stakeholder Management', 'Project Management', 'Facilitation'].map((skill) => (
                          <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Applications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Industry Applications</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <TrendingUp className="w-12 h-12 mx-auto text-blue-500 mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Finance</h3>
                  <p className="text-sm text-gray-600">Risk analysis, fraud detection, investment insights vs. process optimization, compliance management</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <BarChart3 className="w-12 h-12 mx-auto text-green-500 mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Healthcare</h3>
                  <p className="text-sm text-gray-600">Patient outcome analysis, clinical data vs. workflow optimization, system implementations</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Users className="w-12 h-12 mx-auto text-purple-500 mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">E-commerce</h3>
                  <p className="text-sm text-gray-600">Customer behavior analysis, sales forecasting vs. user experience improvements, business process redesign</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Career Guide Section */}
        {activeTab === 'career' && (
          <div className="space-y-8">
            {/* Career Paths */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Data Analyst Career Path</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-800 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Junior Data Analyst</div>
                      <div className="text-sm text-gray-600">$50K - $65K</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-800 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Data Analyst</div>
                      <div className="text-sm text-gray-600">$65K - $85K</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Senior Data Analyst</div>
                      <div className="text-sm text-gray-600">$85K - $110K</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Data Scientist / Analytics Manager</div>
                      <div className="text-sm text-gray-600">$110K - $150K+</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">Business Analyst Career Path</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-800 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Junior Business Analyst</div>
                      <div className="text-sm text-gray-600">$55K - $70K</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-800 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Business Analyst</div>
                      <div className="text-sm text-gray-600">$70K - $90K</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Senior Business Analyst</div>
                      <div className="text-sm text-gray-600">$90K - $115K</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Product Manager / IT Director</div>
                      <div className="text-sm text-gray-600">$115K - $160K+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Choose */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Which Career Should You Choose?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Choose Data Analyst If You:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Enjoy working with numbers and statistics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Like programming and technical tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Prefer deep-dive analysis over broad overview</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Are comfortable with uncertainty and exploration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Want to work in data-driven industries</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Choose Business Analyst If You:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Enjoy communicating with diverse stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Like understanding business processes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Prefer structured, process-oriented work</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Are good at facilitation and project management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Want to bridge business and technology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Getting Started Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Data Analyst Path</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">1. Learn Core Skills (3-6 months)</h4>
                      <p className="text-sm text-gray-600">Excel, SQL, Python basics, Statistics fundamentals</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">2. Build Portfolio (2-3 months)</h4>
                      <p className="text-sm text-gray-600">Personal projects, Kaggle competitions, GitHub portfolio</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">3. Get Certified</h4>
                      <p className="text-sm text-gray-600">Google Data Analytics, Microsoft Power BI, Tableau</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">4. Apply for Entry-Level Roles</h4>
                      <p className="text-sm text-gray-600">Junior Data Analyst, Reporting Analyst positions</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Business Analyst Path</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">1. Learn Business Fundamentals (2-4 months)</h4>
                      <p className="text-sm text-gray-600">Business process modeling, Requirements gathering</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">2. Develop Technical Skills (2-3 months)</h4>
                      <p className="text-sm text-gray-600">Excel, Visio, Basic SQL, Project management tools</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">3. Get Certified</h4>
                      <p className="text-sm text-gray-600">CBAP, PMI-PBA, Agile/Scrum certifications</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">4. Apply for Entry-Level Roles</h4>
                      <p className="text-sm text-gray-600">Junior BA, Systems Analyst, Process Analyst positions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white mt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-lg mb-6 opacity-90">
            Both roles offer excellent career prospects in the growing data and technology sector
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Explore Data Analyst Roadmap
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Explore Business Analyst Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
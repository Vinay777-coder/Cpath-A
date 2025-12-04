"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BarChart, Database, Code, TrendingUp, Award, DollarSign, Briefcase, Clock, Target, CheckCircle, Users, Zap } from 'lucide-react';

export default function DataAnalystVsDataEngineerPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'career'>('overview');

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
            Data Analyst vs Data Engineer: Complete Career Guide 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the key differences, career paths, and which data role aligns with your skills and interests
          </p>
        </div>

        {/* Quick Decision Helper */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Decision Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-700">Choose Data Analyst If You:</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Love discovering insights from data</li>
                <li>• Enjoy creating visualizations and reports</li>
                <li>• Want to directly impact business decisions</li>
                <li>• Prefer working with business stakeholders</li>
                <li>• Like SQL, Excel, and BI tools</li>
                <li>• Want faster entry into data careers</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Choose Data Engineer If You:</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Enjoy building systems and infrastructure</li>
                <li>• Love programming and software engineering</li>
                <li>• Want to work with big data and cloud platforms</li>
                <li>• Interested in data pipelines and automation</li>
                <li>• Like Python, Spark, and DevOps tools</li>
                <li>• Prefer behind-the-scenes technical work</li>
              </ul>
            </div>
          </div>
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
              <Target className="inline w-4 h-4 mr-2" />
              Role Overview
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'comparison'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <CheckCircle className="inline w-4 h-4 mr-2" />
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
              Career Paths
            </button>
          </div>
        </div>

        {/* Role Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Data Analyst Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Data Analyst</h2>
                    <p className="text-gray-600">The business insight detective</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Primary Responsibilities</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Analyze data to find business insights</li>
                      <li>• Create reports and dashboards</li>
                      <li>• Present findings to stakeholders</li>
                      <li>• Identify trends and patterns</li>
                      <li>• Support data-driven decision making</li>
                      <li>• Clean and prepare data for analysis</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Daily Activities</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Writing SQL queries to extract data</li>
                      <li>• Creating charts and visualizations</li>
                      <li>• Meeting with business teams</li>
                      <li>• Updating automated reports</li>
                      <li>• Investigating data anomalies</li>
                      <li>• Documenting analysis methods</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Key Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">SQL</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Excel</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tableau</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Power BI</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Python/R</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Google Analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Engineer Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Data Engineer</h2>
                    <p className="text-gray-600">The data infrastructure architect</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Primary Responsibilities</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Build and maintain data pipelines</li>
                      <li>• Design data storage systems</li>
                      <li>• Ensure data quality and reliability</li>
                      <li>• Optimize data processing performance</li>
                      <li>• Implement data security measures</li>
                      <li>• Scale systems for large data volumes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Daily Activities</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Writing Python/Scala code</li>
                      <li>• Configuring cloud services</li>
                      <li>• Monitoring pipeline performance</li>
                      <li>• Debugging data processing issues</li>
                      <li>• Collaborating with software engineers</li>
                      <li>• Implementing new data sources</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Key Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Apache Spark</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS/Azure</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Kafka</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Airflow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Required Skills Breakdown</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Data Analyst Skills</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">SQL</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Critical</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Statistics</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Important</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Data Visualization</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Critical</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Business Acumen</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Important</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Programming</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Helpful</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Data Engineer Skills</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Programming</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Critical</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">System Architecture</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Critical</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Cloud Platforms</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Important</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">DevOps</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Important</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Business Knowledge</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Helpful</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Entry Requirements & Learning Path</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-700 mb-4">Data Analyst Path</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Education Requirements</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Bachelor's degree (any field) or equivalent experience</li>
                        <li>• Business, economics, math, or statistics preferred</li>
                        <li>• Bootcamps and certificates often sufficient</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Learning Timeline</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 3-6 months intensive study</li>
                        <li>• Can start with Excel and SQL</li>
                        <li>• Add visualization tools gradually</li>
                        <li>• Portfolio projects essential</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Entry-Level Jobs</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Business Analyst</li>
                        <li>• Junior Data Analyst</li>
                        <li>• Reporting Analyst</li>
                        <li>• Marketing Analyst</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">Data Engineer Path</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Education Requirements</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Computer science degree strongly preferred</li>
                        <li>• Software engineering background helpful</li>
                        <li>• Bootcamps possible but challenging</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Learning Timeline</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 12-18 months intensive study</li>
                        <li>• Strong programming foundation required</li>
                        <li>• Cloud certifications recommended</li>
                        <li>• Complex projects needed for portfolio</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Entry-Level Jobs</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Junior Data Engineer</li>
                        <li>• ETL Developer</li>
                        <li>• Backend Engineer (data focus)</li>
                        <li>• Data Pipeline Developer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Comparison */}
        {activeTab === 'comparison' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white">
                <h2 className="text-2xl font-bold">Head-to-Head Comparison</h2>
                <p className="mt-2 opacity-90">Comprehensive analysis across all key dimensions</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Aspect</th>
                      <th className="px-6 py-4 text-center font-semibold text-green-700">Data Analyst</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-700">Data Engineer</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Comments</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Entry Barrier</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Analyst roles more accessible to career changers</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Learning Curve</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Engineering requires deeper technical skills</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Job Availability</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-sm text-gray-600">More analyst positions across all industries</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Salary Potential</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Engineers command higher salaries</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Work-Life Balance</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Analysts typically have more regular hours</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Growth Potential</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Engineers can transition to senior tech roles</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Remote Work</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Both roles very remote-friendly</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Job Security</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Both in high demand, engineers more specialized</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Day in the Life */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-green-600 mb-6">A Day in the Life: Data Analyst</h2>
                <div className="space-y-4">
                  <div className="flex items-start p-3 bg-green-50 rounded">
                    <Clock className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">9:00 AM - Check Reports</div>
                      <div className="text-sm text-gray-600">Review automated dashboards for anomalies</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-green-50 rounded">
                    <Clock className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">10:00 AM - Stakeholder Meeting</div>
                      <div className="text-sm text-gray-600">Discuss marketing campaign performance with team</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-green-50 rounded">
                    <Clock className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">11:00 AM - Data Analysis</div>
                      <div className="text-sm text-gray-600">Write SQL queries to investigate user behavior</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-green-50 rounded">
                    <Clock className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">2:00 PM - Create Visualizations</div>
                      <div className="text-sm text-gray-600">Build charts in Tableau for executive presentation</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-green-50 rounded">
                    <Clock className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">4:00 PM - Report Writing</div>
                      <div className="text-sm text-gray-600">Document findings and recommendations</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-blue-600 mb-6">A Day in the Life: Data Engineer</h2>
                <div className="space-y-4">
                  <div className="flex items-start p-3 bg-blue-50 rounded">
                    <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">9:00 AM - System Monitoring</div>
                      <div className="text-sm text-gray-600">Check data pipeline health and performance metrics</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 rounded">
                    <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">10:00 AM - Code Development</div>
                      <div className="text-sm text-gray-600">Write Python script for new data ingestion pipeline</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 rounded">
                    <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">11:30 AM - Infrastructure Setup</div>
                      <div className="text-sm text-gray-600">Configure AWS services for data processing</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 rounded">
                    <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">2:00 PM - Troubleshooting</div>
                      <div className="text-sm text-gray-600">Debug failing data transformation job</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 rounded">
                    <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-800">4:00 PM - Team Collaboration</div>
                      <div className="text-sm text-gray-600">Code review with senior engineers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Challenges in Each Role</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Data Analyst Challenges</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-gray-800">Data Quality Issues</h4>
                      <p className="text-sm text-gray-600">Spending time cleaning messy, inconsistent data</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-gray-800">Stakeholder Management</h4>
                      <p className="text-sm text-gray-600">Translating complex findings into business language</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-gray-800">Tool Limitations</h4>
                      <p className="text-sm text-gray-600">Working within constraints of available tools and data access</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-gray-800">Repetitive Requests</h4>
                      <p className="text-sm text-gray-600">Handling similar ad-hoc analysis requests repeatedly</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Data Engineer Challenges</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-gray-800">System Complexity</h4>
                      <p className="text-sm text-gray-600">Managing intricate, interconnected data systems</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-gray-800">On-Call Responsibilities</h4>
                      <p className="text-sm text-gray-600">Responding to pipeline failures outside business hours</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-gray-800">Technology Evolution</h4>
                      <p className="text-sm text-gray-600">Keeping up with rapidly changing tools and platforms</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-gray-800">Scale Challenges</h4>
                      <p className="text-sm text-gray-600">Optimizing systems for massive data volumes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Career Paths */}
        {activeTab === 'career' && (
          <div className="space-y-8">
            {/* Salary Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Salary Comparison by Experience Level</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Data Analyst Salaries</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Entry Level (0-2 years)</span>
                      <span className="font-bold text-green-600">$55k - $75k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Mid Level (3-5 years)</span>
                      <span className="font-bold text-green-600">$75k - $100k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Senior Level (5+ years)</span>
                      <span className="font-bold text-green-600">$100k - $130k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded border border-green-200">
                      <span className="font-medium">Average</span>
                      <span className="font-bold text-green-700">$85k</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Data Engineer Salaries</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="font-medium">Entry Level (0-2 years)</span>
                      <span className="font-bold text-blue-600">$85k - $110k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="font-medium">Mid Level (3-5 years)</span>
                      <span className="font-bold text-blue-600">$110k - $150k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="font-medium">Senior Level (5+ years)</span>
                      <span className="font-bold text-blue-600">$150k - $200k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded border border-blue-200">
                      <span className="font-medium">Average</span>
                      <span className="font-bold text-blue-700">$135k</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700">
                  <strong>Geographic Impact:</strong> Salaries can vary significantly by location. 
                  Tech hubs (SF, NYC, Seattle) typically offer 30-50% higher salaries but also have higher living costs.
                </p>
              </div>
            </div>

            {/* Career Progression */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Progression Paths</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Data Analyst Career Ladder</h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium text-gray-800">Junior Data Analyst</div>
                        <div className="text-sm text-gray-600 mt-1">Basic SQL, Excel, simple reporting</div>
                        <div className="text-xs text-green-600 font-medium mt-1">$55k - $75k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium text-gray-800">Data Analyst</div>
                        <div className="text-sm text-gray-600 mt-1">Advanced analytics, visualization tools</div>
                        <div className="text-xs text-green-600 font-medium mt-1">$75k - $100k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium text-gray-800">Senior Data Analyst</div>
                        <div className="text-sm text-gray-600 mt-1">Statistical modeling, team leadership</div>
                        <div className="text-xs text-green-600 font-medium mt-1">$100k - $130k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg border">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                      <div>
                        <div className="font-medium text-gray-800">Specialization Options</div>
                        <div className="text-sm text-gray-600 mt-1">
                          • Analytics Manager ($120k-160k)<br/>
                          • Business Intelligence Lead ($110k-140k)<br/>
                          • Data Scientist ($130k-180k)<br/>
                          • Product Analyst ($120k-150k)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Data Engineer Career Ladder</h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium text-gray-800">Junior Data Engineer</div>
                        <div className="text-sm text-gray-600 mt-1">ETL scripts, basic pipeline maintenance</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">$85k - $110k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium text-gray-800">Data Engineer</div>
                        <div className="text-sm text-gray-600 mt-1">Full pipeline development, cloud platforms</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">$110k - $150k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium text-gray-800">Senior Data Engineer</div>
                        <div className="text-sm text-gray-600 mt-1">System architecture, performance optimization</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">$150k - $200k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-blue-50 rounded-lg border">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                      <div>
                        <div className="font-medium text-gray-800">Specialization Options</div>
                        <div className="text-sm text-gray-600 mt-1">
                          • Staff Engineer ($200k-300k)<br/>
                          • Data Architecture Lead ($180k-250k)<br/>
                          • Platform Engineer ($170k-220k)<br/>
                          • Engineering Manager ($200k-300k)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Demand */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Industry Demand & Growth Outlook</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Data Analyst Market</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <div className="font-medium">Job Growth: 📈 25% (2022-2032)</div>
                        <div className="text-sm text-gray-600">Much faster than average</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <Users className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <div className="font-medium">Industries: 🌐 Universal Demand</div>
                        <div className="text-sm text-gray-600">Every industry needs data insights</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <Briefcase className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <div className="font-medium">Job Security: 🔒 High</div>
                        <div className="text-sm text-gray-600">Data-driven decisions are essential</div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-100 rounded">
                      <h4 className="font-medium text-gray-800 mb-2">Top Hiring Industries:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Healthcare & Pharmaceuticals</li>
                        <li>• Financial Services</li>
                        <li>• E-commerce & Retail</li>
                        <li>• Marketing & Advertising</li>
                        <li>• Government & Non-profit</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Data Engineer Market</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                      <div>
                        <div className="font-medium">Job Growth: 🚀 35% (2022-2032)</div>
                        <div className="text-sm text-gray-600">One of fastest-growing tech roles</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <Users className="w-6 h-6 text-blue-500 mr-3" />
                      <div>
                        <div className="font-medium">Industries: ⚡ Tech-Heavy</div>
                        <div className="text-sm text-gray-600">Focus on data-intensive companies</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                      <div>
                        <div className="font-medium">Job Security: 🔒 Very High</div>
                        <div className="text-sm text-gray-600">Critical infrastructure role</div>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-100 rounded">
                      <h4 className="font-medium text-gray-800 mb-2">Top Hiring Industries:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Technology Companies</li>
                        <li>• Financial Technology</li>
                        <li>• Cloud Service Providers</li>
                        <li>• Streaming & Media</li>
                        <li>• Data-Heavy Startups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Decision Framework: Which Path Is Right for You?</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Business-Oriented</h3>
                    <p className="text-sm text-gray-600">You enjoy understanding business problems and finding data-driven solutions</p>
                    <div className="mt-3 font-medium text-green-600">→ Data Analyst</div>
                  </div>

                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Technology-Focused</h3>
                    <p className="text-sm text-gray-600">You love building systems, coding, and working with infrastructure</p>
                    <div className="mt-3 font-medium text-blue-600">→ Data Engineer</div>
                  </div>

                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Hybrid Approach</h3>
                    <p className="text-sm text-gray-600">Consider starting as analyst and transitioning to engineering later</p>
                    <div className="mt-3 font-medium text-purple-600">→ Analyst → Engineer</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Quick Assessment Questions:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Choose Data Analyst if you answer "Yes":</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Do you enjoy presenting findings to others?</li>
                        <li>• Are you comfortable with business terminology?</li>
                        <li>• Do you like finding patterns in data?</li>
                        <li>• Would you prefer faster entry into data careers?</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Choose Data Engineer if you answer "Yes":</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Do you enjoy programming and coding challenges?</li>
                        <li>• Are you interested in system architecture?</li>
                        <li>• Do you like optimizing performance?</li>
                        <li>• Are you willing to invest more time in learning?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Data Career?</h2>
          <p className="text-lg mb-6 opacity-90">
            Both data analysts and data engineers are in high demand with excellent career prospects. 
            The key is choosing the path that aligns with your interests and strengths.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Start with Data Analysis If:</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• You want faster entry into data careers</li>
                <li>• You enjoy business context and insights</li>
                <li>• You prefer working with stakeholders</li>
                <li>• You want to see immediate impact</li>
              </ul>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Go for Data Engineering If:</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• You have strong programming background</li>
                <li>• You enjoy building systems and infrastructure</li>
                <li>• You're willing to invest in deeper technical skills</li>
                <li>• You want higher salary potential</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Start Data Analysis Path
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Start Data Engineering Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
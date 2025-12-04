"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Database, TrendingUp, Users, CheckCircle, AlertCircle, Zap, Target, BookOpen, Trophy, Briefcase, Clock } from 'lucide-react';

export default function SQLvsPythonPage() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'use-cases' | 'decision'>('comparison');

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
            SQL vs Python: Complete Comparison Guide 2024
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Should you learn SQL or Python first? Understand the strengths, use cases, and career implications of both technologies to make the right choice for your goals.
          </p>
        </div>

        {/* Quick Comparison Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Short Answer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <Database className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-700">Choose SQL If:</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />You need to work with existing databases</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />You want quick results with data queries</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />You're in business analysis or reporting</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />You need to learn fast (2-4 weeks)</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-3">
                <Code className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-purple-700">Choose Python If:</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />You want to do machine learning/AI</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />You need data visualization and analysis</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />You're building applications or automation</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />You want versatile programming skills</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-center font-semibold text-green-700">
              💡 <strong>Pro Tip:</strong> Most data professionals use BOTH. SQL for data retrieval, Python for analysis and modeling. They're complementary, not competing technologies!
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'comparison'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Detailed Comparison
              </button>
              <button
                onClick={() => setActiveTab('use-cases')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'use-cases'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Use Cases & Examples
              </button>
              <button
                onClick={() => setActiveTab('decision')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'decision'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Decision Framework
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Detailed Comparison Tab */}
            {activeTab === 'comparison' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Head-to-Head Comparison</h2>
                
                {/* Learning Curve */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Learning Curve & Time Investment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">SQL</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Learning Time:</span>
                          <span className="font-medium">2-8 weeks to proficiency</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Syntax Complexity:</span>
                          <span className="font-medium text-green-600">Simple & English-like</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Concepts to Master:</span>
                          <span className="font-medium">5-7 core concepts</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Immediate Productivity:</span>
                          <span className="font-medium text-green-600">Within days</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Python</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Learning Time:</span>
                          <span className="font-medium">3-6 months to proficiency</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Syntax Complexity:</span>
                          <span className="font-medium text-yellow-600">Moderate programming syntax</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Concepts to Master:</span>
                          <span className="font-medium">15+ programming concepts</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Immediate Productivity:</span>
                          <span className="font-medium text-yellow-600">2-4 weeks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance & Efficiency */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                    Performance & Efficiency
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">SQL Strengths</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Optimized for large datasets (millions+ rows)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Runs directly on database servers (faster)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Built-in query optimization
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Minimal memory usage for aggregations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Parallel processing capabilities
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Python Strengths</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Better for complex data transformations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Advanced statistical and ML libraries
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Flexible data manipulation (Pandas)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Rich visualization capabilities
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Integration with web apps and APIs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career & Salary Impact */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                    Career & Salary Impact
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">SQL Career Path</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="font-medium text-gray-800">Entry Level Roles:</div>
                          <div className="text-sm text-gray-600">Data Analyst, Business Analyst, Report Developer</div>
                          <div className="text-lg font-bold text-green-600">$45K - $70K</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Mid Level Roles:</div>
                          <div className="text-sm text-gray-600">Senior Analyst, Database Developer, BI Developer</div>
                          <div className="text-lg font-bold text-green-600">$60K - $95K</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Senior Level Roles:</div>
                          <div className="text-sm text-gray-600">Database Architect, Analytics Manager</div>
                          <div className="text-lg font-bold text-green-600">$85K - $130K</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Python Career Path</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="font-medium text-gray-800">Entry Level Roles:</div>
                          <div className="text-sm text-gray-600">Data Analyst, Junior Developer, Automation Specialist</div>
                          <div className="text-lg font-bold text-green-600">$50K - $75K</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Mid Level Roles:</div>
                          <div className="text-sm text-gray-600">Data Scientist, Software Engineer, ML Engineer</div>
                          <div className="text-lg font-bold text-green-600">$70K - $120K</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Senior Level Roles:</div>
                          <div className="text-sm text-gray-600">Senior Data Scientist, ML Architect, Tech Lead</div>
                          <div className="text-lg font-bold text-green-600">$100K - $180K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Market Demand */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                    Market Demand & Job Opportunities
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">SQL Job Market</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Job Openings:</span>
                          <span className="font-medium text-green-600">Very High (200K+ listings)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Industries:</span>
                          <span className="font-medium">All sectors with databases</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Remote Opportunities:</span>
                          <span className="font-medium text-green-600">Excellent</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Entry Barrier:</span>
                          <span className="font-medium text-green-600">Low</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Job Security:</span>
                          <span className="font-medium text-green-600">Very High</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Python Job Market</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Job Openings:</span>
                          <span className="font-medium text-green-600">High (150K+ listings)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Industries:</span>
                          <span className="font-medium">Tech, Finance, Healthcare, Research</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Remote Opportunities:</span>
                          <span className="font-medium text-green-600">Excellent</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Entry Barrier:</span>
                          <span className="font-medium text-yellow-600">Moderate</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Growth Potential:</span>
                          <span className="font-medium text-green-600">Very High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Use Cases Tab */}
            {activeTab === 'use-cases' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Real-World Use Cases & Examples</h2>

                {/* SQL Use Cases */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    When SQL is the Perfect Choice
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Business Intelligence & Reporting</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-blue-600 mb-2">Example Scenario:</div>
                        <p className="text-gray-700 mb-3">"I need to create a monthly sales dashboard showing revenue by region, top-performing products, and customer acquisition metrics."</p>
                        <div className="font-medium text-blue-600 mb-1">Why SQL wins:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Direct connection to sales database</li>
                          <li>• Fast aggregation of millions of transactions</li>
                          <li>• Easy to schedule automated reports</li>
                          <li>• Results can feed directly into BI tools</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Data Quality & Validation</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-blue-600 mb-2">Example Scenario:</div>
                        <p className="text-gray-700 mb-3">"I need to find duplicate customer records, identify missing data, and validate email formats across our CRM database."</p>
                        <div className="font-medium text-blue-600 mb-1">Why SQL wins:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Built-in functions for pattern matching</li>
                          <li>• Efficient duplicate detection with GROUP BY</li>
                          <li>• Can update/clean data in place</li>
                          <li>• Handles large datasets without memory issues</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Financial Analysis & Compliance</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-blue-600 mb-2">Example Scenario:</div>
                        <p className="text-gray-700 mb-3">"Generate audit trails, calculate financial ratios, and ensure regulatory compliance with transaction monitoring."</p>
                        <div className="font-medium text-blue-600 mb-1">Why SQL wins:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• ACID compliance for data integrity</li>
                          <li>• Complex joins across financial tables</li>
                          <li>• Time-based calculations and window functions</li>
                          <li>• Integration with existing financial systems</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">E-commerce & Web Analytics</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-blue-600 mb-2">Example Scenario:</div>
                        <p className="text-gray-700 mb-3">"Track user behavior, analyze conversion funnels, and optimize product recommendations based on purchase history."</p>
                        <div className="font-medium text-blue-600 mb-1">Why SQL wins:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Real-time query performance</li>
                          <li>• Session-based analysis capabilities</li>
                          <li>• Integration with web application databases</li>
                          <li>• Cohort analysis and retention calculations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Python Use Cases */}
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    When Python is the Perfect Choice
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Machine Learning & Predictive Analytics</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-purple-600 mb-2">Example Scenario:</div>
                        <p className="text-gray-700 mb-3">"Build a model to predict customer churn, optimize pricing strategies, or detect fraudulent transactions using historical data."</p>
                        <div className="font-medium text-purple-600 mb-1">Why Python wins:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Scikit-learn, TensorFlow, PyTorch libraries</li>
                          <li>• Feature engineering and data preprocessing</li>
                          <li>• Model training, validation, and deployment</li>
                          <li>• Integration with cloud ML platforms</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Data Visualization & Storytelling</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-purple-600 mb-2">Example Scenario:</div>
                        <p className="text-gray-700 mb-3">"Create interactive dashboards, custom charts, and compelling data stories for executive presentations and public reports."</p>
                        <div className="font-medium text-purple-600 mb-1">Why Python wins:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Matplotlib, Seaborn, Plotly for advanced charts</li>
                          <li>• Custom visualization capabilities</li>
                          <li>• Interactive web apps with Streamlit/Dash</li>
                          <li>• Statistical visualization and hypothesis testing</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Data Engineering & ETL Pipelines</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-purple-600 mb-2">Example Scenario:</div>
                        <p className="text-gray-700 mb-3">"Automate data collection from APIs, transform messy data formats, and build automated pipelines for daily data processing."</p>
                        <div className="font-medium text-purple-600 mb-1">Why Python wins:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Pandas for complex data transformations</li>
                          <li>• API integration and web scraping</li>
                          <li>• Workflow orchestration with Airflow</li>
                          <li>• Error handling and data validation logic</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Research & Scientific Analysis</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-purple-600 mb-2">Example Scenario:</div>
                        <p className="text-gray-700 mb-3">"Conduct A/B testing, perform statistical analysis, and create reproducible research workflows with proper documentation."</p>
                        <div className="font-medium text-purple-600 mb-1">Why Python wins:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• SciPy, NumPy for statistical computing</li>
                          <li>• Jupyter notebooks for reproducible research</li>
                          <li>• Hypothesis testing and experimental design</li>
                          <li>• Integration with academic libraries and tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Combined Workflow */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    The Power Combo: SQL + Python Workflows
                  </h3>
                  <div className="bg-white p-6 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-3">Typical Data Science Project Workflow</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">1</div>
                        <div>
                          <div className="font-medium text-blue-600">Data Extraction (SQL)</div>
                          <div className="text-sm text-gray-600">Pull relevant datasets from production databases, join multiple tables, filter for date ranges</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">2</div>
                        <div>
                          <div className="font-medium text-purple-600">Data Cleaning & Exploration (Python)</div>
                          <div className="text-sm text-gray-600">Handle missing values, outliers, feature engineering, exploratory data analysis</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">3</div>
                        <div>
                          <div className="font-medium text-purple-600">Modeling & Analysis (Python)</div>
                          <div className="text-sm text-gray-600">Build predictive models, perform statistical tests, create visualizations</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">4</div>
                        <div>
                          <div className="font-medium text-blue-600">Results Storage (SQL)</div>
                          <div className="text-sm text-gray-600">Store model results, predictions, and insights back to database for production use</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Decision Framework Tab */}
            {activeTab === 'decision' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Decision Framework: Which Should You Learn First?</h2>

                {/* Decision Tree */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Step-by-Step Decision Guide
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Question 1 */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">1. What's your current role or career goal?</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-blue-50 p-4 rounded border">
                          <div className="font-medium text-blue-700 mb-2">Business/Operations Focus</div>
                          <div className="text-gray-600 mb-2">Analyst, Manager, Consultant, Operations</div>
                          <div className="font-bold text-blue-600">→ Start with SQL</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Tech/Development Focus</div>
                          <div className="text-gray-600 mb-2">Engineer, Developer, Data Scientist</div>
                          <div className="font-bold text-purple-600">→ Start with Python</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded border">
                          <div className="font-medium text-green-700 mb-2">Research/Academic Focus</div>
                          <div className="text-gray-600 mb-2">Researcher, Statistician, PhD student</div>
                          <div className="font-bold text-green-600">→ Start with Python</div>
                        </div>
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">2. What's your timeline and learning capacity?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-4 rounded border">
                          <div className="font-medium text-blue-700 mb-2">Need Results Fast (1-2 months)</div>
                          <ul className="text-gray-600 space-y-1 mb-2">
                            <li>• Job interviews coming up</li>
                            <li>• Immediate work requirements</li>
                            <li>• Limited time available</li>
                          </ul>
                          <div className="font-bold text-blue-600">→ Choose SQL</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Long-term Investment (3-6 months)</div>
                          <ul className="text-gray-600 space-y-1 mb-2">
                            <li>• Career transition planning</li>
                            <li>• Building comprehensive skills</li>
                            <li>• Time for deeper learning</li>
                          </ul>
                          <div className="font-bold text-purple-600">→ Choose Python</div>
                        </div>
                      </div>
                    </div>

                    {/* Question 3 */}
                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">3. What's your data context?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-4 rounded border">
                          <div className="font-medium text-blue-700 mb-2">Working with Existing Databases</div>
                          <ul className="text-gray-600 space-y-1 mb-2">
                            <li>• Company has SQL databases</li>
                            <li>• Need to generate reports</li>
                            <li>• Working with business metrics</li>
                            <li>• Data is already structured</li>
                          </ul>
                          <div className="font-bold text-blue-600">→ SQL is Essential</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded border">
                          <div className="font-medium text-purple-700 mb-2">Building Something New</div>
                          <ul className="text-gray-600 space-y-1 mb-2">
                            <li>• Creating predictive models</li>
                            <li>• Working with APIs/web data</li>
                            <li>• Need custom analysis tools</li>
                            <li>• Data needs heavy processing</li>
                          </ul>
                          <div className="font-bold text-purple-600">→ Python Provides Flexibility</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Path Recommendations */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Recommended Learning Paths
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Fast Track */}
                    <div className="bg-white p-6 rounded border">
                      <div className="text-center mb-4">
                        <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                        <h4 className="font-semibold text-yellow-600">Fast Track (2-3 months)</h4>
                        <p className="text-sm text-gray-600">Quick job readiness</p>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-2 border-blue-500 pl-3">
                          <div className="font-medium">Month 1-2: SQL Mastery</div>
                          <div className="text-gray-600">Focus 100% on SQL until job-ready</div>
                        </div>
                        <div className="border-l-2 border-purple-500 pl-3">
                          <div className="font-medium">Month 3: Python Basics</div>
                          <div className="text-gray-600">Add Python for enhanced capabilities</div>
                        </div>
                        <div className="mt-4 p-3 bg-yellow-50 rounded">
                          <div className="font-medium text-yellow-700">Best For:</div>
                          <div className="text-gray-600">Job seekers, career changers</div>
                        </div>
                      </div>
                    </div>

                    {/* Balanced Approach */}
                    <div className="bg-white p-6 rounded border">
                      <div className="text-center mb-4">
                        <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <h4 className="font-semibold text-green-600">Balanced (4-6 months)</h4>
                        <p className="text-sm text-gray-600">Comprehensive foundation</p>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-2 border-blue-500 pl-3">
                          <div className="font-medium">Month 1-2: SQL Foundation</div>
                          <div className="text-gray-600">Build solid database skills</div>
                        </div>
                        <div className="border-l-2 border-purple-500 pl-3">
                          <div className="font-medium">Month 3-4: Python Core</div>
                          <div className="text-gray-600">Programming and data analysis</div>
                        </div>
                        <div className="border-l-2 border-green-500 pl-3">
                          <div className="font-medium">Month 5-6: Integration</div>
                          <div className="text-gray-600">Combine both in real projects</div>
                        </div>
                        <div className="mt-4 p-3 bg-green-50 rounded">
                          <div className="font-medium text-green-700">Best For:</div>
                          <div className="text-gray-600">Students, working professionals</div>
                        </div>
                      </div>
                    </div>

                    {/* Deep Dive */}
                    <div className="bg-white p-6 rounded border">
                      <div className="text-center mb-4">
                        <Trophy className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                        <h4 className="font-semibold text-purple-600">Deep Dive (6-12 months)</h4>
                        <p className="text-sm text-gray-600">Expert-level skills</p>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-2 border-purple-500 pl-3">
                          <div className="font-medium">Month 1-3: Python Mastery</div>
                          <div className="text-gray-600">Advanced programming concepts</div>
                        </div>
                        <div className="border-l-2 border-blue-500 pl-3">
                          <div className="font-medium">Month 4-6: SQL + Databases</div>
                          <div className="text-gray-600">Database design and optimization</div>
                        </div>
                        <div className="border-l-2 border-orange-500 pl-3">
                          <div className="font-medium">Month 7-12: Specialization</div>
                          <div className="text-gray-600">ML, Data Engineering, or Analytics</div>
                        </div>
                        <div className="mt-4 p-3 bg-purple-50 rounded">
                          <div className="font-medium text-purple-700">Best For:</div>
                          <div className="text-gray-600">Data scientists, engineers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Recommendation Matrix */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Quick Decision Matrix
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 border">Your Situation</th>
                          <th className="text-left p-3 border">Start With</th>
                          <th className="text-left p-3 border">Add Later</th>
                          <th className="text-left p-3 border">Timeline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border">Business analyst needing reports</td>
                          <td className="p-3 border"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">SQL</span></td>
                          <td className="p-3 border">Python (for advanced viz)</td>
                          <td className="p-3 border">2-4 weeks</td>
                        </tr>
                        <tr>
                          <td className="p-3 border">Aspiring data scientist</td>
                          <td className="p-3 border"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Python</span></td>
                          <td className="p-3 border">SQL (for data access)</td>
                          <td className="p-3 border">3-6 months</td>
                        </tr>
                        <tr>
                          <td className="p-3 border">Excel user wanting to level up</td>
                          <td className="p-3 border"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">SQL</span></td>
                          <td className="p-3 border">Python (for automation)</td>
                          <td className="p-3 border">1-3 weeks</td>
                        </tr>
                        <tr>
                          <td className="p-3 border">Software developer entering data</td>
                          <td className="p-3 border"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Python</span></td>
                          <td className="p-3 border">SQL (for databases)</td>
                          <td className="p-3 border">2-4 weeks</td>
                        </tr>
                        <tr>
                          <td className="p-3 border">Complete beginner, need job fast</td>
                          <td className="p-3 border"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">SQL</span></td>
                          <td className="p-3 border">Python (after employment)</td>
                          <td className="p-3 border">6-8 weeks</td>
                        </tr>
                        <tr>
                          <td className="p-3 border">Research/academic background</td>
                          <td className="p-3 border"><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Python</span></td>
                          <td className="p-3 border">SQL (for larger datasets)</td>
                          <td className="p-3 border">2-4 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Data Journey?</h2>
          <p className="text-lg mb-6 opacity-90">
            Whether you choose SQL or Python first, both skills are essential for modern data work. 
            The key is to start with the one that matches your immediate goals and timeline.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              💡 Remember: Most successful data professionals use both SQL and Python. 
              Think of this as choosing your first skill, not your only skill.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Learning SQL
            </button>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Learning Python
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Get Learning Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
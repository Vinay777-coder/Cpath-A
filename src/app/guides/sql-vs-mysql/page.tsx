"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, Code, Server, CheckCircle, AlertTriangle, Zap, Users, Globe, Shield, Settings, TrendingUp } from 'lucide-react';

export default function SQLvsMySQLPage() {
  const [activeTab, setActiveTab] = useState<'fundamentals' | 'comparison' | 'practical'>('fundamentals');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 py-8">
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
            SQL vs MySQL: Understanding the Difference
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Clear explanation of SQL language vs MySQL database system - what they are, how they relate, and when to use each term correctly.
          </p>
        </div>

        {/* Quick Clarification Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Simple Truth</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <Code className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-700">SQL (Language)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Structured Query Language</strong> - A standardized language for communicating with relational databases.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Like English for databases</li>
                <li>• Works with any SQL database</li>
                <li>• Standardized syntax and commands</li>
                <li>• What you learn and write</li>
              </ul>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <div className="flex items-center mb-3">
                <Database className="w-6 h-6 text-teal-600 mr-2" />
                <h3 className="text-lg font-semibold text-teal-700">MySQL (Database System)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Database Management System</strong> - Software that stores data and understands SQL commands.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Like a specific brand of database</li>
                <li>• Interprets and executes SQL</li>
                <li>• Has its own features and extensions</li>
                <li>• What runs on servers</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-center font-semibold text-green-700">
              💡 <strong>Key Point:</strong> You write SQL commands that MySQL (and other databases) execute. Think of SQL as the language and MySQL as one interpreter of that language.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('fundamentals')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'fundamentals'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Fundamentals Explained
              </button>
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
                onClick={() => setActiveTab('practical')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'practical'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Practical Examples
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Fundamentals Tab */}
            {activeTab === 'fundamentals' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding the Relationship</h2>
                
                {/* Analogy Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    Real-World Analogy
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">SQL = English Language</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Standard grammar and vocabulary
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Understood by many different people
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Has dialects but core remains same
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          You learn the language once
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">MySQL = American Person</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Understands English (SQL)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Has specific accent and expressions
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          One of many English speakers
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          You can talk to them in English
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
                    <p className="text-center text-gray-700">
                      <strong>Just like English can be spoken to Americans, British, Australians...</strong><br/>
                      <strong>SQL can be "spoken" to MySQL, PostgreSQL, Oracle, SQL Server...</strong>
                    </p>
                  </div>
                </div>

                {/* Technical Relationship */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-orange-600" />
                    How They Work Together
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">1. You Write SQL Commands</h4>
                      <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                        SELECT * FROM customers WHERE city = 'New York';
                      </div>
                      <p className="text-gray-600 mt-2">This is pure SQL - standard database language</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto">
                        ↓
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">2. MySQL Receives and Processes</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• MySQL server receives your SQL command</li>
                        <li>• Parses and validates the syntax</li>
                        <li>• Optimizes the query for best performance</li>
                        <li>• Executes against the stored data</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto">
                        ↓
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">3. MySQL Returns Results</h4>
                      <div className="bg-gray-100 p-3 rounded text-sm">
                        <div className="font-mono">
                          | id | name        | city     |<br/>
                          |----|-------------|----------|<br/>
                          | 1  | John Smith  | New York |<br/>
                          | 2  | Jane Doe    | New York |
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">Results formatted according to SQL standards</p>
                    </div>
                  </div>
                </div>

                {/* Common Misconceptions */}
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                    Common Misconceptions Cleared
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">❌ Wrong Thinking</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm text-gray-700">"I need to choose between SQL or MySQL"</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm text-gray-700">"SQL and MySQL are competing technologies"</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm text-gray-700">"Learning MySQL means I can't use other databases"</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm text-gray-700">"MySQL has its own language separate from SQL"</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">✅ Correct Understanding</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm text-gray-700">"I learn SQL and use it with MySQL"</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm text-gray-700">"SQL is the language, MySQL implements it"</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm text-gray-700">"SQL knowledge transfers to other databases"</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm text-gray-700">"MySQL extends standard SQL with extra features"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Comparison Tab */}
            {activeTab === 'comparison' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Side-by-Side Comparison</h2>

                {/* What They Are */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">What They Actually Are</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        SQL (Structured Query Language)
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Type:</span>
                          <span className="ml-2 text-gray-600">Programming Language</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Purpose:</span>
                          <span className="ml-2 text-gray-600">Database Communication</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Standard:</span>
                          <span className="ml-2 text-gray-600">ANSI/ISO Standard</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Created:</span>
                          <span className="ml-2 text-gray-600">1974 (IBM)</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Scope:</span>
                          <span className="ml-2 text-gray-600">Universal Database Language</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-4 flex items-center">
                        <Database className="w-5 h-5 mr-2" />
                        MySQL (Database Management System)
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Type:</span>
                          <span className="ml-2 text-gray-600">Database Software</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Purpose:</span>
                          <span className="ml-2 text-gray-600">Data Storage & Management</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">License:</span>
                          <span className="ml-2 text-gray-600">Open Source (GPL)</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Created:</span>
                          <span className="ml-2 text-gray-600">1995 (MySQL AB)</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Scope:</span>
                          <span className="ml-2 text-gray-600">Specific Database Implementation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features & Capabilities */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Features & Capabilities</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Aspect</th>
                          <th className="text-left p-3 border">SQL</th>
                          <th className="text-left p-3 border">MySQL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Learning Focus</td>
                          <td className="p-3 border">Syntax, commands, logic</td>
                          <td className="p-3 border">Installation, configuration, optimization</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Standardization</td>
                          <td className="p-3 border">ISO/ANSI standardized</td>
                          <td className="p-3 border">Follows SQL standards + extensions</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Portability</td>
                          <td className="p-3 border">Works across all SQL databases</td>
                          <td className="p-3 border">MySQL-specific features</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Cost</td>
                          <td className="p-3 border">Free (it's a language)</td>
                          <td className="p-3 border">Free Community / Paid Enterprise</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Performance</td>
                          <td className="p-3 border">Depends on implementation</td>
                          <td className="p-3 border">Fast, optimized for web applications</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Scalability</td>
                          <td className="p-3 border">Language doesn't scale</td>
                          <td className="p-3 border">Horizontal and vertical scaling</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* MySQL vs Other Databases */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">MySQL vs Other SQL Databases</h3>
                  <p className="text-gray-600 mb-4">Since all these databases use SQL, the comparison is really about their specific implementations:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-3">MySQL</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Fast for web applications</li>
                        <li>• Easy to set up and use</li>
                        <li>• Great community support</li>
                        <li>• Owned by Oracle</li>
                        <li>• Popular with startups</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">PostgreSQL</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Advanced SQL features</li>
                        <li>• Better for complex queries</li>
                        <li>• Strong data integrity</li>
                        <li>• Open source (truly free)</li>
                        <li>• Popular with enterprises</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-green-600 mb-3">SQL Server</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Microsoft ecosystem</li>
                        <li>• Enterprise features</li>
                        <li>• Windows integration</li>
                        <li>• Paid licensing</li>
                        <li>• Popular in corporations</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
                    <p className="text-center text-gray-700">
                      <strong>Important:</strong> Your SQL knowledge transfers between all of these! 
                      Learning SQL once lets you work with any SQL database.
                    </p>
                  </div>
                </div>

                {/* Job Market Perspective */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Job Market Perspective
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">What Employers Want</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>SQL skills</strong> (the language)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Experience with specific databases (MySQL, PostgreSQL, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Understanding of database concepts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Query optimization and performance tuning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">How to Position Yourself</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                          <span>Say "I know SQL" (not "I know MySQL")</span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                          <span>Specify databases you've used (MySQL, PostgreSQL, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                          <span>Highlight transferable SQL skills</span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                          <span>Show database administration experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Practical Examples Tab */}
            {activeTab === 'practical' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Practical Examples & Use Cases</h2>

                {/* Real Code Examples */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Same SQL, Different Databases</h3>
                  <p className="text-gray-600 mb-4">Here's the same SQL query running on different database systems:</p>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3">Standard SQL Query (works everywhere)</h4>
                      <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                        <div className="text-gray-500">-- Get top 5 customers by total orders</div>
                        <div>SELECT</div>
                        <div className="ml-4">c.customer_name,</div>
                        <div className="ml-4">COUNT(o.order_id) as total_orders,</div>
                        <div className="ml-4">SUM(o.order_total) as total_spent</div>
                        <div>FROM customers c</div>
                        <div>JOIN orders o ON c.customer_id = o.customer_id</div>
                        <div>GROUP BY c.customer_id, c.customer_name</div>
                        <div>ORDER BY total_orders DESC</div>
                        <div>LIMIT 5;</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-orange-600 mb-2">MySQL</h4>
                        <p className="text-sm text-gray-600">✅ Runs perfectly as written</p>
                        <ul className="text-xs text-gray-500 mt-2">
                          <li>• LIMIT syntax supported</li>
                          <li>• Fast execution</li>
                          <li>• Good for web apps</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-blue-600 mb-2">PostgreSQL</h4>
                        <p className="text-sm text-gray-600">✅ Runs perfectly as written</p>
                        <ul className="text-xs text-gray-500 mt-2">
                          <li>• LIMIT syntax supported</li>
                          <li>• Advanced optimization</li>
                          <li>• Better for complex queries</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold text-green-600 mb-2">SQL Server</h4>
                        <p className="text-sm text-gray-600">⚠️ Needs small change</p>
                        <div className="text-xs text-gray-500 mt-2">
                          <div>Replace LIMIT with:</div>
                          <code className="bg-gray-100 px-1">TOP 5</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MySQL-Specific Features */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">MySQL-Specific Extensions</h3>
                  <p className="text-gray-600 mb-4">While MySQL follows SQL standards, it adds some useful extensions:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-orange-600 mb-3">MySQL Extensions (Non-Standard)</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-1">SHOW Commands</div>
                          <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                            SHOW DATABASES;<br/>
                            SHOW TABLES;<br/>
                            SHOW COLUMNS FROM users;
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Quick database exploration</p>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-1">DESCRIBE Shortcut</div>
                          <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                            DESC users;  -- Same as DESCRIBE users
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Quick table structure view</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Standard SQL Equivalents</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="font-medium text-gray-800 mb-1">Information Schema Queries</div>
                          <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                            SELECT SCHEMA_NAME FROM<br/>
                            INFORMATION_SCHEMA.SCHEMATA;<br/>
                            <br/>
                            SELECT TABLE_NAME FROM<br/>
                            INFORMATION_SCHEMA.TABLES;
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Works on all SQL databases</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Path Examples */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Real Learning Journey</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">Week 1-2: Learn SQL Fundamentals</h4>
                      <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                        SELECT, FROM, WHERE, ORDER BY, GROUP BY, JOIN
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Focus on the language itself - works everywhere</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">Week 3: Practice with MySQL</h4>
                      <div className="space-y-2 text-sm">
                        <div className="bg-gray-100 p-2 rounded font-mono">mysql -u root -p</div>
                        <div className="bg-gray-100 p-2 rounded font-mono">CREATE DATABASE practice;</div>
                        <div className="bg-gray-100 p-2 rounded font-mono">USE practice;</div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Learn MySQL-specific setup and commands</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">Week 4+: Transfer to Other Databases</h4>
                      <div className="text-sm text-gray-600">
                        Your SQL knowledge now works with PostgreSQL, SQL Server, Oracle, SQLite...
                        Just learn their specific setup and extensions.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Common Scenarios */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Common Real-World Scenarios
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Scenario 1: Job Interview</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-sm space-y-2">
                          <div><strong>Wrong:</strong> "I know MySQL"</div>
                          <div><strong>Better:</strong> "I know SQL and have experience with MySQL databases"</div>
                          <div><strong>Best:</strong> "I'm proficient in SQL and have worked with MySQL in production environments, including query optimization and database design"</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Scenario 2: New Job with PostgreSQL</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="text-sm space-y-2">
                          <div><strong>Reality:</strong> Your SQL skills transfer immediately</div>
                          <div><strong>Learning needed:</strong> PostgreSQL-specific features and setup</div>
                          <div><strong>Timeline:</strong> 1-2 weeks to be productive</div>
                          <div><strong>Confidence:</strong> You already know the hard part (SQL)!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Advice */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Practical Advice for Learners
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Do This:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Learn SQL syntax and concepts first
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Practice with any SQL database (MySQL is fine)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Focus on standard SQL commands
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Learn database concepts (normalization, indexes)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          Understand when databases differ
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Avoid This:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                          Thinking SQL and MySQL are the same thing
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                          Only learning MySQL-specific commands
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                          Avoiding other databases due to fear
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                          Ignoring standard SQL documentation
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                          Saying "I only know MySQL"
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
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Master SQL and Use It Everywhere</h2>
          <p className="text-lg mb-6 opacity-90">
            Understanding the difference between SQL and MySQL gives you clarity on what to learn and how your skills transfer between different database systems.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              💡 Learn SQL once, use it everywhere. MySQL is just one of many databases that speak SQL!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Learning SQL
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              MySQL Setup Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
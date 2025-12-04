"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, Grid, CheckCircle, AlertTriangle, Zap, TrendingUp, Users, Shield, Globe, Code, BarChart3 } from 'lucide-react';

export default function SQLvsNoSQLPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'decision'>('overview');

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
            SQL vs NoSQL: Complete Database Comparison Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Understand the fundamental differences between SQL and NoSQL databases, their strengths, use cases, and how to choose the right one for your project.
          </p>
        </div>

        {/* Quick Comparison Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Essential Difference</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <Database className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-700">SQL (Relational)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Structured data</strong> in tables with predefined relationships and strict rules.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Tables with rows and columns</li>
                <li>• ACID compliance (reliability)</li>
                <li>• Complex queries and joins</li>
                <li>• Examples: MySQL, PostgreSQL, Oracle</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <div className="flex items-center mb-3">
                <Grid className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-indigo-700">NoSQL (Non-Relational)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Flexible data</strong> in various formats with dynamic schema and horizontal scaling.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Documents, key-value, graphs</li>
                <li>• Eventually consistent</li>
                <li>• High performance & scalability</li>
                <li>• Examples: MongoDB, Redis, Cassandra</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-center font-semibold text-yellow-700">
              ⚖️ <strong>It's not either/or:</strong> Many modern applications use both SQL and NoSQL databases together, each for what they do best!
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
                Database Types Overview
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'comparison'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-blue-500'
                }`}
              >
                Head-to-Head Comparison
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
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Database Paradigms</h2>

                {/* SQL Databases Deep Dive */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    SQL (Relational) Databases
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Core Principles</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>ACID Properties:</strong> Atomic, Consistent, Isolated, Durable</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Schema-based:</strong> Predefined structure with data types</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Normalization:</strong> Eliminates data redundancy</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Relationships:</strong> Foreign keys connect tables</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Popular SQL Databases</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-blue-600">MySQL</div>
                          <div className="text-xs text-gray-600">Open-source, web-friendly, easy to learn</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-blue-600">PostgreSQL</div>
                          <div className="text-xs text-gray-600">Advanced features, JSON support, extensible</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-blue-600">SQL Server</div>
                          <div className="text-xs text-gray-600">Microsoft ecosystem, enterprise features</div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-medium text-blue-600">Oracle</div>
                          <div className="text-xs text-gray-600">Enterprise-grade, high performance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">Example SQL Structure</h4>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                      <div className="text-gray-500">-- Users table</div>
                      <div>CREATE TABLE users (</div>
                      <div className="ml-4">id INT PRIMARY KEY AUTO_INCREMENT,</div>
                      <div className="ml-4">name VARCHAR(100) NOT NULL,</div>
                      <div className="ml-4">email VARCHAR(100) UNIQUE,</div>
                      <div className="ml-4">created_at TIMESTAMP DEFAULT NOW()</div>
                      <div>);</div>
                      <div className="mt-2 text-gray-500">-- Orders table (with foreign key)</div>
                      <div>CREATE TABLE orders (</div>
                      <div className="ml-4">id INT PRIMARY KEY,</div>
                      <div className="ml-4">user_id INT REFERENCES users(id),</div>
                      <div className="ml-4">total DECIMAL(10,2),</div>
                      <div className="ml-4">order_date TIMESTAMP</div>
                      <div>);</div>
                    </div>
                  </div>
                </div>

                {/* NoSQL Databases Deep Dive */}
                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center">
                    <Grid className="w-5 h-5 mr-2" />
                    NoSQL (Non-Relational) Databases
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Core Principles</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>BASE Properties:</strong> Basically Available, Soft state, Eventually consistent</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Schema-less:</strong> Dynamic, flexible structure</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Horizontal scaling:</strong> Distribute across servers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>High performance:</strong> Optimized for specific use cases</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">CAP Theorem Trade-offs</h4>
                      <div className="text-sm text-gray-700">
                        <p className="mb-2">NoSQL databases choose 2 out of 3:</p>
                        <div className="space-y-2">
                          <div className="bg-white p-2 rounded border">
                            <strong>Consistency:</strong> All nodes see same data
                          </div>
                          <div className="bg-white p-2 rounded border">
                            <strong>Availability:</strong> System remains operational
                          </div>
                          <div className="bg-white p-2 rounded border">
                            <strong>Partition tolerance:</strong> Works despite network failures
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* NoSQL Types */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Document Databases</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="font-medium text-indigo-600 mb-2">MongoDB, CouchDB</div>
                        <div className="text-sm text-gray-700 mb-3">Store JSON-like documents with nested fields</div>
                        <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                          {`{
  "_id": "507f1f77...",
  "name": "John Doe",
  "email": "john@example.com",
  "addresses": [
    {"type": "home", "city": "NYC"},
    {"type": "work", "city": "LA"}
  ]
}`}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key-Value Stores</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="font-medium text-indigo-600 mb-2">Redis, DynamoDB</div>
                        <div className="text-sm text-gray-700 mb-3">Simple key-value pairs, ultra-fast lookups</div>
                        <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                          {`key: "user:12345"
value: {
  "name": "John Doe",
  "status": "active"
}

key: "session:abc123"
value: "logged_in"`}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Column-Family</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="font-medium text-indigo-600 mb-2">Cassandra, HBase</div>
                        <div className="text-sm text-gray-700 mb-3">Wide columns, great for time-series data</div>
                        <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                          {`Row Key: "user123"
  name: "John"
  email: "john@example.com"
  last_login: "2024-01-15"
  
Row Key: "user456"  
  name: "Jane"
  phone: "555-1234"`}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Graph Databases</h4>
                      <div className="bg-white p-4 rounded border">
                        <div className="font-medium text-indigo-600 mb-2">Neo4j, Amazon Neptune</div>
                        <div className="text-sm text-gray-700 mb-3">Nodes and relationships, perfect for connections</div>
                        <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                          {`(John)-[:FRIENDS_WITH]->(Jane)
(John)-[:WORKS_AT]->(Company A)
(Jane)-[:LIVES_IN]->(New York)
(Company A)-[:LOCATED_IN]->(California)`}
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Feature Comparison</h2>

                {/* Performance & Scalability */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                    Performance & Scalability
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Aspect</th>
                          <th className="text-left p-3 border">SQL Databases</th>
                          <th className="text-left p-3 border">NoSQL Databases</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Vertical Scaling</td>
                          <td className="p-3 border">
                            <span className="text-green-600">✅ Excellent</span><br/>
                            <span className="text-xs text-gray-600">More powerful single server</span>
                          </td>
                          <td className="p-3 border">
                            <span className="text-yellow-600">⚠️ Limited</span><br/>
                            <span className="text-xs text-gray-600">Hardware limitations</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Horizontal Scaling</td>
                          <td className="p-3 border">
                            <span className="text-yellow-600">⚠️ Complex</span><br/>
                            <span className="text-xs text-gray-600">Sharding can be difficult</span>
                          </td>
                          <td className="p-3 border">
                            <span className="text-green-600">✅ Excellent</span><br/>
                            <span className="text-xs text-gray-600">Built for distribution</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Complex Queries</td>
                          <td className="p-3 border">
                            <span className="text-green-600">✅ Superior</span><br/>
                            <span className="text-xs text-gray-600">JOINs, subqueries, aggregations</span>
                          </td>
                          <td className="p-3 border">
                            <span className="text-red-600">❌ Limited</span><br/>
                            <span className="text-xs text-gray-600">Simple queries only</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Read Performance</td>
                          <td className="p-3 border">
                            <span className="text-yellow-600">⚠️ Good</span><br/>
                            <span className="text-xs text-gray-600">Depends on indexing</span>
                          </td>
                          <td className="p-3 border">
                            <span className="text-green-600">✅ Very Fast</span><br/>
                            <span className="text-xs text-gray-600">Optimized data access</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Write Performance</td>
                          <td className="p-3 border">
                            <span className="text-yellow-600">⚠️ Moderate</span><br/>
                            <span className="text-xs text-gray-600">ACID overhead</span>
                          </td>
                          <td className="p-3 border">
                            <span className="text-green-600">✅ Very Fast</span><br/>
                            <span className="text-xs text-gray-600">Eventually consistent</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Data Consistency & Reliability */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    Data Consistency & Reliability
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">SQL: ACID Compliance</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <div className="font-medium text-gray-800">Atomicity</div>
                          <div className="text-gray-600">All-or-nothing transactions</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Consistency</div>
                          <div className="text-gray-600">Data integrity rules enforced</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Isolation</div>
                          <div className="text-gray-600">Concurrent transactions don't interfere</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Durability</div>
                          <div className="text-gray-600">Committed data survives system failures</div>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-green-50 rounded">
                        <div className="font-medium text-green-700">Perfect for:</div>
                        <div className="text-sm text-gray-600">Banking, e-commerce, financial transactions</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-indigo-600 mb-3">NoSQL: BASE Properties</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <div className="font-medium text-gray-800">Basically Available</div>
                          <div className="text-gray-600">System remains operational</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Soft State</div>
                          <div className="text-gray-600">Data may be inconsistent temporarily</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">Eventually Consistent</div>
                          <div className="text-gray-600">Data becomes consistent over time</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">High Availability</div>
                          <div className="text-gray-600">Prioritizes uptime over consistency</div>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-indigo-50 rounded">
                        <div className="font-medium text-indigo-700">Perfect for:</div>
                        <div className="text-sm text-gray-600">Social media, content delivery, analytics</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Development & Learning */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-purple-600" />
                    Development Experience
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">SQL Development</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Learning Curve:</span>
                          <span className="font-medium">Moderate</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Query Language:</span>
                          <span className="font-medium">Standardized SQL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Schema Changes:</span>
                          <span className="font-medium text-red-600">Complex migrations</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Debugging:</span>
                          <span className="font-medium text-green-600">Excellent tools</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Documentation:</span>
                          <span className="font-medium text-green-600">Extensive</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Community:</span>
                          <span className="font-medium text-green-600">Large & mature</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-indigo-600 mb-3">NoSQL Development</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Learning Curve:</span>
                          <span className="font-medium">Varies by type</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Query Language:</span>
                          <span className="font-medium">Database-specific APIs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Schema Changes:</span>
                          <span className="font-medium text-green-600">Flexible & easy</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Debugging:</span>
                          <span className="font-medium text-yellow-600">Limited tools</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Documentation:</span>
                          <span className="font-medium text-yellow-600">Varies</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Community:</span>
                          <span className="font-medium text-yellow-600">Growing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost & Maintenance */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                    Cost & Operational Considerations
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3">Initial Setup</h4>
                      <div className="text-sm space-y-2">
                        <div>
                          <span className="font-medium text-blue-600">SQL:</span>
                          <span className="ml-1 text-gray-600">Complex schema design</span>
                        </div>
                        <div>
                          <span className="font-medium text-indigo-600">NoSQL:</span>
                          <span className="ml-1 text-gray-600">Quick to start</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3">Scaling Costs</h4>
                      <div className="text-sm space-y-2">
                        <div>
                          <span className="font-medium text-blue-600">SQL:</span>
                          <span className="ml-1 text-gray-600">Expensive vertical scaling</span>
                        </div>
                        <div>
                          <span className="font-medium text-indigo-600">NoSQL:</span>
                          <span className="ml-1 text-gray-600">Cost-effective horizontal</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3">Maintenance</h4>
                      <div className="text-sm space-y-2">
                        <div>
                          <span className="font-medium text-blue-600">SQL:</span>
                          <span className="ml-1 text-gray-600">Predictable, well-known</span>
                        </div>
                        <div>
                          <span className="font-medium text-indigo-600">NoSQL:</span>
                          <span className="ml-1 text-gray-600">Requires specialized skills</span>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Choosing the Right Database</h2>

                {/* Decision Tree */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                    Decision Framework
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Question 1 */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">1. What type of data are you storing?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-4 rounded border">
                          <div className="font-medium text-blue-700 mb-2">Choose SQL if:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Structured, predictable data</li>
                            <li>• Complex relationships between entities</li>
                            <li>• Financial or transactional data</li>
                            <li>• Need strict data validation</li>
                            <li>• Regulatory compliance required</li>
                          </ul>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded border">
                          <div className="font-medium text-indigo-700 mb-2">Choose NoSQL if:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Unstructured or semi-structured data</li>
                            <li>• Rapidly changing data requirements</li>
                            <li>• JSON documents, logs, media files</li>
                            <li>• Real-time analytics data</li>
                            <li>• Content management systems</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">2. What are your consistency requirements?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-green-50 p-4 rounded border">
                          <div className="font-medium text-green-700 mb-2">Strong Consistency (SQL)</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Banking and financial systems</li>
                            <li>• E-commerce transactions</li>
                            <li>• Inventory management</li>
                            <li>• Healthcare records</li>
                            <li>• Government systems</li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded border">
                          <div className="font-medium text-yellow-700 mb-2">Eventual Consistency (NoSQL)</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Social media feeds</li>
                            <li>• Content delivery networks</li>
                            <li>• Analytics and logging</li>
                            <li>• Gaming leaderboards</li>
                            <li>• IoT sensor data</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Question 3 */}
                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">3. What are your scaling needs?</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-orange-50 p-4 rounded border">
                          <div className="font-medium text-orange-700 mb-2">Moderate Scale (SQL)</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Up to millions of records</li>
                            <li>• Hundreds of concurrent users</li>
                            <li>• Traditional business applications</li>
                            <li>• Budget constraints for hardware</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded border">
                          <div className="font-medium text-red-700 mb-2">Massive Scale (NoSQL)</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Billions of records</li>
                            <li>• Thousands+ concurrent users</li>
                            <li>• Global distributed systems</li>
                            <li>• Need for 99.99% availability</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Use Case Examples */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Real-World Use Case Examples</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-4">SQL Database Wins</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="font-medium text-gray-800 mb-2">E-commerce Platform</div>
                          <div className="text-sm text-gray-600 mb-2">
                            Need to track orders, inventory, payments, and customer relationships with perfect accuracy.
                          </div>
                          <div className="text-xs text-blue-600">
                            <strong>Why SQL:</strong> ACID transactions, complex queries for reports, established relationships
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="font-medium text-gray-800 mb-2">Banking System</div>
                          <div className="text-sm text-gray-600 mb-2">
                            Account balances, transfers, and transactions must be 100% accurate and consistent.
                          </div>
                          <div className="text-xs text-blue-600">
                            <strong>Why SQL:</strong> Strong consistency, regulatory compliance, audit trails
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="font-medium text-gray-800 mb-2">HR Management System</div>
                          <div className="text-sm text-gray-600 mb-2">
                            Employee data, payroll, benefits with complex relationships and reporting needs.
                          </div>
                          <div className="text-xs text-blue-600">
                            <strong>Why SQL:</strong> Complex reporting, data integrity, established workflows
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-indigo-600 mb-4">NoSQL Database Wins</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="font-medium text-gray-800 mb-2">Social Media Platform</div>
                          <div className="text-sm text-gray-600 mb-2">
                            User posts, comments, likes, and feeds that need to scale to millions of users globally.
                          </div>
                          <div className="text-xs text-indigo-600">
                            <strong>Why NoSQL:</strong> Massive scale, flexible content, eventual consistency OK
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="font-medium text-gray-800 mb-2">IoT Data Collection</div>
                          <div className="text-sm text-gray-600 mb-2">
                            Sensors generating millions of data points per second with varying data structures.
                          </div>
                          <div className="text-xs text-indigo-600">
                            <strong>Why NoSQL:</strong> High write volume, flexible schema, time-series optimized
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                          <div className="font-medium text-gray-800 mb-2">Content Management</div>
                          <div className="text-sm text-gray-600 mb-2">
                            Blog posts, articles, media files with varying structures and metadata.
                          </div>
                          <div className="text-xs text-indigo-600">
                            <strong>Why NoSQL:</strong> Document structure, flexible fields, content delivery
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hybrid Approach */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    The Polyglot Persistence Approach
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Modern applications often use <strong>both</strong> SQL and NoSQL databases together, each handling what they do best:
                  </p>
                  <div className="bg-white p-6 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-4">Example: E-commerce Application</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="font-medium text-blue-600 mb-2">SQL Database</div>
                        <div className="text-gray-600">
                          • User accounts & authentication<br/>
                          • Order processing & payments<br/>
                          • Inventory management<br/>
                          • Financial reporting
                        </div>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <div className="font-medium text-indigo-600 mb-2">NoSQL Database</div>
                        <div className="text-gray-600">
                          • Product catalog & search<br/>
                          • User behavior tracking<br/>
                          • Recommendation engine<br/>
                          • Session management
                        </div>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <div className="font-medium text-purple-600 mb-2">Cache Layer</div>
                        <div className="text-gray-600">
                          • Redis for session storage<br/>
                          • Frequently accessed data<br/>
                          • Real-time analytics<br/>
                          • Shopping cart data
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Migration Considerations */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Migration & Future-Proofing
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Starting with SQL</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-blue-600 mb-2">Pros:</div>
                        <ul className="text-gray-600 space-y-1 mb-3">
                          <li>• Easier to add NoSQL later</li>
                          <li>• Better for MVP and early stages</li>
                          <li>• More developers familiar with SQL</li>
                          <li>• Established best practices</li>
                        </ul>
                        <div className="font-medium text-red-600 mb-2">Cons:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• May hit scaling limits</li>
                          <li>• Schema changes can be difficult</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Starting with NoSQL</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-green-600 mb-2">Pros:</div>
                        <ul className="text-gray-600 space-y-1 mb-3">
                          <li>• Built for scale from day one</li>
                          <li>• Flexible development process</li>
                          <li>• Better for rapid prototyping</li>
                          <li>• Modern development practices</li>
                        </ul>
                        <div className="font-medium text-red-600 mb-2">Cons:</div>
                        <ul className="text-gray-600 space-y-1">
                          <li>• May need SQL for complex queries</li>
                          <li>• Less mature ecosystem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Choose the Right Database for Your Project</h2>
          <p className="text-lg mb-6 opacity-90">
            Both SQL and NoSQL databases have their place in modern applications. The key is understanding when to use each one and how they can work together.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              💡 Start with your data and requirements, not the technology. Let your use case guide your database choice!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              SQL Database Guide
            </button>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              NoSQL Database Guide
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Database Comparison Tool
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
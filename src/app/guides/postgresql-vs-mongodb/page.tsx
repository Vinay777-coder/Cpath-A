"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, Grid, Users, TrendingUp, CheckCircle, AlertTriangle, Briefcase, Clock, DollarSign, Target, Zap, FileText, Code2, BarChart3 } from 'lucide-react';

export default function PostgreSQLVsMongoDBPage() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'use-cases' | 'decision'>('comparison');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-8">
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
            PostgreSQL vs MongoDB: Complete Database Comparison
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Understand the key differences between PostgreSQL (relational) and MongoDB (document) databases, their strengths, use cases, and how to choose the right database for your project.
          </p>
        </div>

        {/* Quick Comparison Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-emerald-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Fundamental Difference</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <div className="flex items-center mb-3">
                <Database className="w-6 h-6 text-emerald-600 mr-2" />
                <h3 className="text-lg font-semibold text-emerald-700">PostgreSQL</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Relational Database (SQL)</strong> - Structured data in tables with strict relationships, ACID compliance, and powerful query capabilities.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Tables, rows, and columns structure</li>
                <li>• Strong data consistency and integrity</li>
                <li>• Complex SQL queries and joins</li>
                <li>• ACID transactions guarantee</li>
              </ul>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <div className="flex items-center mb-3">
                <FileText className="w-6 h-6 text-teal-600 mr-2" />
                <h3 className="text-lg font-semibold text-teal-700">MongoDB</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Document Database (NoSQL)</strong> - Flexible JSON-like documents with dynamic schemas, horizontal scaling, and rapid development.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Collections of JSON documents</li>
                <li>• Flexible, schema-less structure</li>
                <li>• Easy horizontal scaling</li>
                <li>• Rapid prototyping and iteration</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-center font-semibold text-yellow-700">
              💡 <strong>Key Decision:</strong> Structure vs Flexibility - Do you need strict data relationships or flexible document storage?
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
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-emerald-500'
                }`}
              >
                Technical Comparison
              </button>
              <button
                onClick={() => setActiveTab('use-cases')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'use-cases'
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-emerald-500'
                }`}
              >
                Use Cases & Examples
              </button>
              <button
                onClick={() => setActiveTab('decision')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'decision'
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-emerald-500'
                }`}
              >
                Decision Guide
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Comparison Tab */}
            {activeTab === 'comparison' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Architecture & Features</h2>

                {/* Data Structure Comparison */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Structure & Schema</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-emerald-600 mb-3">PostgreSQL Structure</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-emerald-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Fixed Schema</div>
                          <div className="text-gray-600">Tables with predefined columns, data types, and constraints</div>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Relationships</div>
                          <div className="text-gray-600">Foreign keys, joins, and complex relationships between tables</div>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Data Integrity</div>
                          <div className="text-gray-600">Strict validation, constraints, and referential integrity</div>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
                        <code className="text-gray-700">
                          CREATE TABLE users (<br/>
                          &nbsp;&nbsp;id SERIAL PRIMARY KEY,<br/>
                          &nbsp;&nbsp;email VARCHAR(255) UNIQUE,<br/>
                          &nbsp;&nbsp;created_at TIMESTAMP<br/>
                          );
                        </code>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">MongoDB Structure</h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-teal-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Dynamic Schema</div>
                          <div className="text-gray-600">Documents can have different fields and structures</div>
                        </div>
                        <div className="bg-teal-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Embedded Data</div>
                          <div className="text-gray-600">Nested objects and arrays within documents</div>
                        </div>
                        <div className="bg-teal-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Flexible Fields</div>
                          <div className="text-gray-600">Add/remove fields without schema changes</div>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
                        <code className="text-gray-700">
                          {'{'}<br/>
                          &nbsp;&nbsp;"_id": ObjectId("..."),<br/>
                          &nbsp;&nbsp;"email": "user@example.com",<br/>
                          &nbsp;&nbsp;"profile": {'{'} "age": 25 {'}'},<br/>
                          &nbsp;&nbsp;"tags": ["developer", "js"]<br/>
                          {'}'}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance & Scalability */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Performance & Scalability
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Aspect</th>
                          <th className="text-left p-3 border">PostgreSQL</th>
                          <th className="text-left p-3 border">MongoDB</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Read Performance</td>
                          <td className="p-3 border">Excellent for complex queries with joins</td>
                          <td className="p-3 border">Faster for simple document retrieval</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Write Performance</td>
                          <td className="p-3 border">Slower due to ACID compliance overhead</td>
                          <td className="p-3 border">Faster writes with eventual consistency</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Horizontal Scaling</td>
                          <td className="p-3 border">Challenging, requires partitioning/sharding</td>
                          <td className="p-3 border">Built-in sharding and replica sets</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Vertical Scaling</td>
                          <td className="p-3 border">Excellent - can handle very large datasets</td>
                          <td className="p-3 border">Good, but horizontal scaling preferred</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Transaction Support</td>
                          <td className="p-3 border">Full ACID transactions across tables</td>
                          <td className="p-3 border">Multi-document ACID (v4.0+), single doc atomic</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Query Languages */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Query Languages & Capabilities</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-emerald-600 mb-3">PostgreSQL - SQL</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="font-medium text-gray-800 mb-1">Complex Joins</div>
                          <div className="text-xs bg-gray-100 p-2 rounded">
                            <code>
                              SELECT u.name, COUNT(o.id) as orders<br/>
                              FROM users u<br/>
                              LEFT JOIN orders o ON u.id = o.user_id<br/>
                              GROUP BY u.id<br/>
                              HAVING COUNT(o.id) {'>'} 5;
                            </code>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-1">Window Functions</div>
                          <div className="text-xs bg-gray-100 p-2 rounded">
                            <code>
                              SELECT name, salary,<br/>
                              &nbsp;&nbsp;RANK() OVER (ORDER BY salary DESC)<br/>
                              FROM employees;
                            </code>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-1">JSON Support</div>
                          <div className="text-xs bg-gray-100 p-2 rounded">
                            <code>
                              SELECT data-{'>'}{'>'}name as name<br/>
                              FROM products<br/>
                              WHERE data @{'>'} JSON;
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">MongoDB - MQL</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="font-medium text-gray-800 mb-1">Document Queries</div>
                          <div className="text-xs bg-gray-100 p-2 rounded">
                            <code>
                              db.users.find({'{'}<br/>
                              &nbsp;&nbsp;"profile.age": {'{'} $gte: 21 {'}'},<br/>
                              &nbsp;&nbsp;"tags": "developer"<br/>
                              {'}'});
                            </code>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-1">Aggregation Pipeline</div>
                          <div className="text-xs bg-gray-100 p-2 rounded">
                            <code>
                              db.orders.aggregate([<br/>
                              &nbsp;&nbsp;{'{'} $group: {'{'} _id: "$userId", <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;total: {'{'} $sum: "$amount" {'}'} {'}'} {'}'}<br/>
                              ]);
                            </code>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 mb-1">Text Search</div>
                          <div className="text-xs bg-gray-100 p-2 rounded">
                            <code>
                              db.articles.find({'{'}<br/>
                              &nbsp;&nbsp;$text: {'{'} $search: "mongodb database" {'}'}<br/>
                              {'}'});
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Development Experience */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Development Experience</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-emerald-600 mb-3">PostgreSQL Advantages</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Mature ecosystem with excellent tooling</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Standardized SQL knowledge transferable</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Strong data consistency guarantees</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Excellent performance for complex analytics</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Advanced features: arrays, JSON, full-text search</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">MongoDB Advantages</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Rapid prototyping and schema evolution</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Native JSON/JavaScript integration</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Easy horizontal scaling</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Intuitive document-based thinking</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span>Great for agile development workflows</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Challenges & Limitations */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Challenges & Limitations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-emerald-600 mb-3">PostgreSQL Challenges</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                          <span>Schema changes can be complex and slow</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                          <span>Horizontal scaling requires significant effort</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                          <span>Can be overkill for simple applications</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                          <span>Learning curve for advanced SQL features</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">MongoDB Challenges</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                          <span>Data duplication and potential inconsistency</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                          <span>Complex queries can be difficult</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                          <span>Memory usage can be high</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                          <span>Limited ACID transactions (improved in recent versions)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Use Cases Tab */}
            {activeTab === 'use-cases' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Real-World Applications & Use Cases</h2>

                {/* Ideal Use Cases */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">When to Choose Each Database</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-emerald-600 mb-3">PostgreSQL Excels For</h4>
                      <div className="space-y-3">
                        <div className="bg-emerald-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Financial Applications</div>
                          <div className="text-sm text-gray-600">Banking systems, accounting software, payment processing - where ACID compliance is critical</div>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Complex Analytics</div>
                          <div className="text-sm text-gray-600">Business intelligence, reporting systems, data warehousing with complex relationships</div>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Enterprise Applications</div>
                          <div className="text-sm text-gray-600">ERP systems, CRM platforms, inventory management with strict data integrity</div>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Geographic Information Systems</div>
                          <div className="text-sm text-gray-600">PostGIS extension for spatial data, mapping applications, location-based services</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">MongoDB Excels For</h4>
                      <div className="space-y-3">
                        <div className="bg-teal-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Content Management</div>
                          <div className="text-sm text-gray-600">Blogs, news sites, content platforms where document structure varies</div>
                        </div>
                        <div className="bg-teal-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Real-time Applications</div>
                          <div className="text-sm text-gray-600">Chat applications, gaming leaderboards, live activity feeds</div>
                        </div>
                        <div className="bg-teal-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">Product Catalogs</div>
                          <div className="text-sm text-gray-600">E-commerce with varied product attributes, inventory with flexible schemas</div>
                        </div>
                        <div className="bg-teal-50 p-3 rounded">
                          <div className="font-medium text-gray-800 mb-1">IoT & Analytics</div>
                          <div className="text-sm text-gray-600">Sensor data collection, log aggregation, time-series data</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real Example Scenarios */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Example Scenarios</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-emerald-600" />
                        E-commerce Platform Comparison
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50 p-4 rounded">
                          <div className="font-medium text-emerald-700 mb-2">PostgreSQL Approach</div>
                          <div className="text-sm text-gray-700 mb-3">
                            <strong>When:</strong> Complex product relationships, inventory tracking, financial transactions
                          </div>
                          <div className="text-xs bg-white p-2 rounded">
                            <div className="font-mono">
                              Tables: users, products, categories,<br/>
                              orders, order_items, payments<br/><br/>
                              Strong consistency for inventory<br/>
                              Complex reporting queries<br/>
                              ACID transactions for payments
                            </div>
                          </div>
                        </div>
                        <div className="bg-teal-50 p-4 rounded">
                          <div className="font-medium text-teal-700 mb-2">MongoDB Approach</div>
                          <div className="text-sm text-gray-700 mb-3">
                            <strong>When:</strong> Flexible product attributes, rapid feature development, content-heavy
                          </div>
                          <div className="text-xs bg-white p-2 rounded">
                            <div className="font-mono">
                              Collections: users, products, orders<br/><br/>
                              Embedded product variations<br/>
                              Flexible product schemas<br/>
                              Fast reads, denormalized data
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-teal-600" />
                        Social Media Application
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50 p-4 rounded">
                          <div className="font-medium text-emerald-700 mb-2">PostgreSQL Scenario</div>
                          <div className="text-sm text-gray-700 mb-3">
                            <strong>Best for:</strong> Complex social graphs, advanced analytics, user relationships
                          </div>
                          <div className="text-xs bg-white p-2 rounded">
                            <div className="font-mono">
                              Advanced friend recommendations<br/>
                              Complex privacy settings<br/>
                              Detailed analytics & reporting<br/>
                              Graph-like relationship queries
                            </div>
                          </div>
                        </div>
                        <div className="bg-teal-50 p-4 rounded">
                          <div className="font-medium text-teal-700 mb-2">MongoDB Scenario</div>
                          <div className="text-sm text-gray-700 mb-3">
                            <strong>Best for:</strong> Activity feeds, user-generated content, rapid scaling
                          </div>
                          <div className="text-xs bg-white p-2 rounded">
                            <div className="font-mono">
                              Embedded comments & likes<br/>
                              Flexible post types (text, media)<br/>
                              Real-time activity feeds<br/>
                              Horizontal scaling for growth
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Examples */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Companies Using Each Database</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-emerald-600 mb-3">PostgreSQL Users</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-emerald-500 pl-3">
                          <div className="font-medium text-gray-800">Spotify</div>
                          <div className="text-gray-600">Music metadata, user playlists, complex recommendations</div>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-3">
                          <div className="font-medium text-gray-800">Instagram</div>
                          <div className="text-gray-600">User data, relationships, photo metadata</div>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-3">
                          <div className="font-medium text-gray-800">Uber</div>
                          <div className="text-gray-600">Trip data, driver/rider matching, financial transactions</div>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-3">
                          <div className="font-medium text-gray-800">Robinhood</div>
                          <div className="text-gray-600">Financial data, trading transactions, regulatory compliance</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">MongoDB Users</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-teal-500 pl-3">
                          <div className="font-medium text-gray-800">Facebook</div>
                          <div className="text-gray-600">User posts, activity feeds, diverse content types</div>
                        </div>
                        <div className="border-l-4 border-teal-500 pl-3">
                          <div className="font-medium text-gray-800">Adobe</div>
                          <div className="text-gray-600">Creative Cloud assets, user-generated content</div>
                        </div>
                        <div className="border-l-4 border-teal-500 pl-3">
                          <div className="font-medium text-gray-800">eBay</div>
                          <div className="text-gray-600">Product catalogs, varied listing attributes</div>
                        </div>
                        <div className="border-l-4 border-teal-500 pl-3">
                          <div className="font-medium text-gray-800">Bosch</div>
                          <div className="text-gray-600">IoT sensor data, manufacturing analytics</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Migration Scenarios */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Migration & Hybrid Approaches
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">PostgreSQL to MongoDB</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-blue-600 mb-2">Common Reasons</div>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Need for rapid scaling</li>
                          <li>• Flexible schema requirements</li>
                          <li>• Simplified development model</li>
                          <li>• Better fit for document-oriented data</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">MongoDB to PostgreSQL</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="font-medium text-blue-600 mb-2">Common Reasons</div>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Need for stronger consistency</li>
                          <li>• Complex analytical queries</li>
                          <li>• Regulatory compliance requirements</li>
                          <li>• Better SQL tooling ecosystem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-white rounded border">
                    <div className="font-medium text-gray-800 mb-2">💡 Hybrid Approach</div>
                    <div className="text-sm text-gray-600">
                      Many companies use both: PostgreSQL for critical transactional data and MongoDB for content, logs, or cache layers. This polyglot persistence approach leverages strengths of each database.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Decision Tab */}
            {activeTab === 'decision' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Choose the Right Database</h2>

                {/* Decision Framework */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Decision Matrix
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">1. Data Structure & Relationships</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-emerald-50 p-4 rounded border">
                          <div className="font-medium text-emerald-700 mb-2">Choose PostgreSQL If:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Your data has clear, stable relationships</li>
                            <li>• You need referential integrity</li>
                            <li>• Schema is well-defined and stable</li>
                            <li>• You perform complex joins across tables</li>
                          </ul>
                        </div>
                        <div className="bg-teal-50 p-4 rounded border">
                          <div className="font-medium text-teal-700 mb-2">Choose MongoDB If:</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Your data is document-oriented</li>
                            <li>• Schema changes frequently</li>
                            <li>• You have nested/hierarchical data</li>
                            <li>• Different records have different fields</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">2. Scaling Requirements</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-emerald-50 p-4 rounded border">
                          <div className="font-medium text-emerald-700 mb-2">PostgreSQL Scaling</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Vertical scaling (more powerful hardware)</li>
                            <li>• Read replicas for read-heavy workloads</li>
                            <li>• Partitioning for large datasets</li>
                            <li>• Best for predictable growth patterns</li>
                          </ul>
                        </div>
                        <div className="bg-teal-50 p-4 rounded border">
                          <div className="font-medium text-teal-700 mb-2">MongoDB Scaling</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Horizontal scaling (add more servers)</li>
                            <li>• Built-in sharding capabilities</li>
                            <li>• Automatic load balancing</li>
                            <li>• Best for unpredictable growth</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="font-semibold text-gray-800 mb-2">3. Development & Team Considerations</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-emerald-50 p-4 rounded border">
                          <div className="font-medium text-emerald-700 mb-2">PostgreSQL Advantages</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• Team knows SQL already</li>
                            <li>• Extensive tooling ecosystem</li>
                            <li>• Mature ORMs and frameworks</li>
                            <li>• Strong data governance needs</li>
                          </ul>
                        </div>
                        <div className="bg-teal-50 p-4 rounded border">
                          <div className="font-medium text-teal-700 mb-2">MongoDB Advantages</div>
                          <ul className="text-gray-600 space-y-1">
                            <li>• JavaScript/JSON-heavy development</li>
                            <li>• Rapid prototyping requirements</li>
                            <li>• Agile development methodology</li>
                            <li>• Less rigid data requirements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance & Cost Considerations */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                    Performance & Cost Analysis
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">Factor</th>
                          <th className="text-left p-3 border">PostgreSQL</th>
                          <th className="text-left p-3 border">MongoDB</th>
                          <th className="text-left p-3 border">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Simple Reads</td>
                          <td className="p-3 border">Very fast with proper indexing</td>
                          <td className="p-3 border">Faster for document retrieval</td>
                          <td className="p-3 border text-teal-600 font-bold">MongoDB</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Complex Queries</td>
                          <td className="p-3 border">Excellent with SQL optimization</td>
                          <td className="p-3 border">Limited aggregation capabilities</td>
                          <td className="p-3 border text-emerald-600 font-bold">PostgreSQL</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Write Performance</td>
                          <td className="p-3 border">Slower due to ACID compliance</td>
                          <td className="p-3 border">Faster with eventual consistency</td>
                          <td className="p-3 border text-teal-600 font-bold">MongoDB</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Storage Efficiency</td>
                          <td className="p-3 border">More efficient, normalized data</td>
                          <td className="p-3 border">More storage due to denormalization</td>
                          <td className="p-3 border text-emerald-600 font-bold">PostgreSQL</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Infrastructure Costs</td>
                          <td className="p-3 border">Lower for small-medium scale</td>
                          <td className="p-3 border">Scales cost-effectively</td>
                          <td className="p-3 border text-gray-600 font-bold">Depends on scale</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Learning Curve */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Learning Curve & Adoption
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-emerald-600 mb-3">PostgreSQL Learning Path</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-gray-800">Beginner (1-2 months)</div>
                          <div className="text-sm text-gray-600">Basic SQL, tables, queries, indexes</div>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                          <div className="font-medium text-gray-800">Intermediate (2-4 months)</div>
                          <div className="text-sm text-gray-600">Joins, constraints, stored procedures, performance tuning</div>
                        </div>
                        <div className="border-l-4 border-red-500 pl-3">
                          <div className="font-medium text-gray-800">Advanced (6+ months)</div>
                          <div className="text-sm text-gray-600">Partitioning, replication, JSON operations, extensions</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-teal-600 mb-3">MongoDB Learning Path</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-green-500 pl-3">
                          <div className="font-medium text-gray-800">Beginner (2-4 weeks)</div>
                          <div className="text-sm text-gray-600">Documents, collections, basic CRUD operations</div>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-3">
                          <div className="font-medium text-gray-800">Intermediate (1-2 months)</div>
                          <div className="text-sm text-gray-600">Aggregation pipeline, indexing, schema design</div>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-3">
                          <div className="font-medium text-gray-800">Advanced (3-6 months)</div>
                          <div className="text-sm text-gray-600">Sharding, replica sets, performance optimization</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Recommendation Engine */}
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Recommendation Engine</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-emerald-50 p-4 rounded border">
                        <h4 className="font-semibold text-emerald-600 mb-3">Strongly Consider PostgreSQL If:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Financial or banking application</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Complex reporting requirements</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Team already knows SQL well</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Data integrity is critical</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Predictable, structured data</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-teal-50 p-4 rounded border">
                        <h4 className="font-semibold text-teal-600 mb-3">Strongly Consider MongoDB If:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Rapid prototyping and iteration</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Highly variable data structures</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>JavaScript/JSON heavy development</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Need to scale horizontally</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span>Content management systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hybrid Considerations */}
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Grid className="w-5 h-5 mr-2 text-indigo-600" />
                    Don't Forget: You Can Use Both!
                  </h3>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-gray-700 mb-4">
                      Many successful applications use both databases in a polyglot persistence approach:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-emerald-50 p-3 rounded">
                        <div className="font-medium text-emerald-700 mb-1">PostgreSQL For</div>
                        <div className="text-gray-600">User accounts, transactions, billing, core business logic</div>
                      </div>
                      <div className="bg-teal-50 p-3 rounded">
                        <div className="font-medium text-teal-700 mb-1">MongoDB For</div>
                        <div className="text-gray-600">Content, logs, caching, user-generated data, analytics events</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <div className="font-medium text-blue-700 mb-1">Benefits</div>
                        <div className="text-gray-600">Leverage strengths of both, optimize for specific use cases</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Make Your Database Decision</h2>
          <p className="text-lg mb-6 opacity-90">
            Both PostgreSQL and MongoDB are excellent databases with different strengths. Choose based on your specific requirements, team expertise, and long-term scalability needs.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              🎯 Remember: Start with one, but don't be afraid to use both as your application grows and requirements become more diverse!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              PostgreSQL Learning Path
            </button>
            <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              MongoDB Learning Path
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors">
              Database Architecture Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
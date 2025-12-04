"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, Code, Shield, Zap, CheckCircle, AlertTriangle, Users, TrendingUp, Globe, Star } from 'lucide-react';

export default function SQLvsPostgreSQLPage() {
  const [activeTab, setActiveTab] = useState<'relationship' | 'features' | 'practical'>('relationship');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-8">
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
            SQL vs PostgreSQL: Language vs Implementation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Understand how PostgreSQL extends and implements the SQL standard with advanced features and enterprise capabilities.
          </p>
        </div>

        {/* Quick Clarification Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Key Relationship</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <Code className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-700">SQL (Standard Language)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>ISO/ANSI Standard</strong> - The official specification for database query language.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Defines syntax and semantics</li>
                <li>• Universal database language</li>
                <li>• Continuously evolving standard</li>
                <li>• Foundation for all SQL databases</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <Database className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-700">PostgreSQL (Implementation + Extensions)</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Advanced SQL Implementation</strong> - Implements SQL standard plus powerful extensions.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 95%+ SQL standard compliance</li>
                <li>• Advanced data types and functions</li>
                <li>• Enterprise-grade features</li>
                <li>• Extensible architecture</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-center font-semibold text-green-700">
              💡 <strong>Think of it this way:</strong> SQL is like the English language standard, PostgreSQL is like a brilliant writer who uses English plus advanced literary techniques!
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('relationship')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'relationship'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-green-500'
                }`}
              >
                SQL Standard vs PostgreSQL
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'features'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-green-500'
                }`}
              >
                Advanced Features
              </button>
              <button
                onClick={() => setActiveTab('practical')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'practical'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-green-500'
                }`}
              >
                Practical Examples
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Relationship Tab */}
            {activeTab === 'relationship' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">SQL Standard Compliance & Extensions</h2>

                {/* Compliance Level */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    SQL Standard Compliance
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-green-600 mb-3">Core SQL Features</h4>
                      <div className="text-center mb-3">
                        <div className="text-3xl font-bold text-green-600">99%</div>
                        <div className="text-sm text-gray-600">Compliance</div>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• SELECT, INSERT, UPDATE, DELETE</li>
                        <li>• JOINs and subqueries</li>
                        <li>• Aggregate functions</li>
                        <li>• Data types and constraints</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Advanced SQL Features</h4>
                      <div className="text-center mb-3">
                        <div className="text-3xl font-bold text-blue-600">95%</div>
                        <div className="text-sm text-gray-600">Compliance</div>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Window functions</li>
                        <li>• Common Table Expressions</li>
                        <li>• Recursive queries</li>
                        <li>• Advanced data types</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">PostgreSQL Extensions</h4>
                      <div className="text-center mb-3">
                        <div className="text-3xl font-bold text-purple-600">100+</div>
                        <div className="text-sm text-gray-600">Extensions</div>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• JSON/JSONB operations</li>
                        <li>• Full-text search</li>
                        <li>• Geographic data (PostGIS)</li>
                        <li>• Custom data types</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Standard vs Extensions */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Standard SQL vs PostgreSQL Extensions</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3">Standard SQL Query</h4>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                        <div className="text-gray-500">-- Works in any SQL database</div>
                        <div>SELECT</div>
                        <div className="ml-4">c.name,</div>
                        <div className="ml-4">COUNT(o.order_id) as order_count,</div>
                        <div className="ml-4">AVG(o.total) as avg_order</div>
                        <div>FROM customers c</div>
                        <div>LEFT JOIN orders o ON c.id = o.customer_id</div>
                        <div>GROUP BY c.id, c.name</div>
                        <div>HAVING COUNT(o.order_id) {'>'} 5;</div>
                      </div>
                      <p className="text-sm text-gray-600">✅ This runs identically on PostgreSQL, MySQL, SQL Server, Oracle</p>
                    </div>

                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-3">PostgreSQL Enhanced Query</h4>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                        <div className="text-gray-500">-- PostgreSQL-specific extensions</div>
                        <div>SELECT</div>
                        <div className="ml-4">c.name,</div>
                        <div className="ml-4">c.preferences-{'>'}{'>'}'theme' as theme,</div>
                        <div className="ml-4">COUNT(o.order_id) as order_count,</div>
                        <div className="ml-4">AVG(o.total) as avg_order,</div>
                        <div className="ml-4">PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY o.total) as median</div>
                        <div>FROM customers c</div>
                        <div>LEFT JOIN orders o ON c.id = o.customer_id</div>
                        <div>WHERE c.preferences @{'>'}  {'{'}"notifications": true{'}'}</div>
                        <div>GROUP BY c.id, c.name, c.preferences-{'>'}{'>'}'theme'</div>
                        <div>HAVING COUNT(o.order_id) {'>'} 5;</div>
                      </div>
                      <p className="text-sm text-gray-600">⚠️ Uses PostgreSQL-specific JSON operators and window functions</p>
                    </div>
                  </div>
                </div>

                {/* Compatibility Matrix */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature Compatibility Matrix</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-left p-3 border">SQL Feature</th>
                          <th className="text-left p-3 border">SQL Standard</th>
                          <th className="text-left p-3 border">PostgreSQL</th>
                          <th className="text-left p-3 border">Portability</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-medium">Basic Queries</td>
                          <td className="p-3 border">✅ Core SQL</td>
                          <td className="p-3 border">✅ Full support</td>
                          <td className="p-3 border">🌍 Universal</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Window Functions</td>
                          <td className="p-3 border">✅ SQL:2003</td>
                          <td className="p-3 border">✅ Full support</td>
                          <td className="p-3 border">🌍 Most databases</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">JSON Operations</td>
                          <td className="p-3 border">✅ SQL:2016</td>
                          <td className="p-3 border">✅ Enhanced JSONB</td>
                          <td className="p-3 border">⚠️ Syntax varies</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Full Text Search</td>
                          <td className="p-3 border">❌ Not standardized</td>
                          <td className="p-3 border">✅ Built-in</td>
                          <td className="p-3 border">❌ PostgreSQL only</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Custom Data Types</td>
                          <td className="p-3 border">❌ Not standardized</td>
                          <td className="p-3 border">✅ Extensible</td>
                          <td className="p-3 border">❌ PostgreSQL only</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-medium">Geometric Data</td>
                          <td className="p-3 border">❌ Not standardized</td>
                          <td className="p-3 border">✅ Native + PostGIS</td>
                          <td className="p-3 border">❌ PostgreSQL only</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">PostgreSQL's Advanced Capabilities</h2>

                {/* Data Types */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    Advanced Data Types
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Standard SQL Types</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="space-y-2">
                          <div><code className="bg-gray-100 px-2 py-1 rounded">INTEGER, VARCHAR, DATE</code></div>
                          <div><code className="bg-gray-100 px-2 py-1 rounded">DECIMAL, BOOLEAN, TIMESTAMP</code></div>
                          <div><code className="bg-gray-100 px-2 py-1 rounded">CHAR, TEXT, TIME</code></div>
                        </div>
                        <p className="text-gray-600 mt-2">Works everywhere, basic functionality</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">PostgreSQL Enhanced Types</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="space-y-2">
                          <div><code className="bg-gray-100 px-2 py-1 rounded">JSON, JSONB, XML</code></div>
                          <div><code className="bg-gray-100 px-2 py-1 rounded">ARRAY, HSTORE, UUID</code></div>
                          <div><code className="bg-gray-100 px-2 py-1 rounded">INET, CIDR, MACADDR</code></div>
                          <div><code className="bg-gray-100 px-2 py-1 rounded">POINT, LINE, POLYGON</code></div>
                        </div>
                        <p className="text-gray-600 mt-2">PostgreSQL-specific, powerful features</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* JSON Operations */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">JSON/JSONB Operations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Standard SQL Approach</h4>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-2">
                        <div>-- Limited JSON support in most databases</div>
                        <div>SELECT JSON_EXTRACT(data, '$.name') FROM users;</div>
                        <div>-- Syntax varies by database</div>
                      </div>
                      <p className="text-sm text-gray-600">Basic JSON parsing, limited operators</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-green-600 mb-3">PostgreSQL JSONB</h4>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mb-2">
                        <div>-- Rich JSON operations</div>
                        <div>SELECT data-{'>'}{'>'}'name' as name,</div>
                        <div className="ml-6">data-{'>'}'address'-{'>'}{'>'}'city' as city</div>
                        <div>FROM users</div>
                        <div>WHERE data @{'>'}  {'{'}"active": true{'}'};</div>
                        <div>-- Indexable and fast!</div>
                      </div>
                      <p className="text-sm text-gray-600">Binary JSON storage, indexable, fast queries</p>
                    </div>
                  </div>
                </div>

                {/* Advanced Functions */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                    Advanced SQL Functions
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">Window Functions Enhanced</h4>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                        <div className="text-gray-500">-- PostgreSQL-specific window functions</div>
                        <div>SELECT</div>
                        <div className="ml-4">name,</div>
                        <div className="ml-4">salary,</div>
                        <div className="ml-4">PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) OVER (PARTITION BY department) as dept_median,</div>
                        <div className="ml-4">CUME_DIST() OVER (ORDER BY salary) as salary_percentile</div>
                        <div>FROM employees;</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">Array Operations</h4>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                        <div className="text-gray-500">-- Native array support</div>
                        <div>SELECT</div>
                        <div className="ml-4">name,</div>
                        <div className="ml-4">skills,</div>
                        <div className="ml-4">array_length(skills, 1) as skill_count</div>
                        <div>FROM developers</div>
                        <div>WHERE 'PostgreSQL' = ANY(skills);</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-800 mb-2">Full Text Search</h4>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                        <div className="text-gray-500">-- Built-in search capabilities</div>
                        <div>SELECT title, content</div>
                        <div>FROM articles</div>
                        <div>WHERE to_tsvector('english', content) @@ to_tsquery('postgresql & database');</div>
                        <div className="text-gray-500">-- With ranking and highlighting</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extensions Ecosystem */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-purple-600" />
                    Popular Extensions
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-2">PostGIS</h4>
                      <div className="text-sm text-gray-700 mb-2">Geographic Information Systems</div>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Spatial data types</li>
                        <li>• Geographic queries</li>
                        <li>• Distance calculations</li>
                        <li>• Mapping applications</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-green-600 mb-2">pg_stat_statements</h4>
                      <div className="text-sm text-gray-700 mb-2">Query Performance Tracking</div>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Query execution stats</li>
                        <li>• Performance monitoring</li>
                        <li>• Slow query identification</li>
                        <li>• Database optimization</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-2">TimescaleDB</h4>
                      <div className="text-sm text-gray-700 mb-2">Time-Series Data Extension</div>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Time-series optimization</li>
                        <li>• IoT data handling</li>
                        <li>• Metrics and monitoring</li>
                        <li>• Automatic partitioning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Practical Tab */}
            {activeTab === 'practical' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning & Migration Guide</h2>

                {/* Learning Path */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Learning Path from SQL to PostgreSQL
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                        <h4 className="font-semibold text-gray-800">Master Standard SQL First</h4>
                      </div>
                      <div className="ml-11 text-sm text-gray-600">
                        <p className="mb-2">Build a solid foundation with standard SQL that works everywhere:</p>
                        <ul className="space-y-1">
                          <li>• SELECT, INSERT, UPDATE, DELETE operations</li>
                          <li>• JOINs, subqueries, and aggregations</li>
                          <li>• Data types, constraints, and indexes</li>
                          <li>• Basic functions and window functions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                        <h4 className="font-semibold text-gray-800">Add PostgreSQL-Specific Features</h4>
                      </div>
                      <div className="ml-11 text-sm text-gray-600">
                        <p className="mb-2">Layer on PostgreSQL enhancements while keeping standard SQL knowledge:</p>
                        <ul className="space-y-1">
                          <li>• JSON/JSONB operations for modern web apps</li>
                          <li>• Array data types and operations</li>
                          <li>• Full-text search capabilities</li>
                          <li>• Advanced data types (UUID, INET, etc.)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                        <h4 className="font-semibold text-gray-800">Explore Extensions & Advanced Features</h4>
                      </div>
                      <div className="ml-11 text-sm text-gray-600">
                        <p className="mb-2">Dive deep into PostgreSQL's ecosystem for specialized use cases:</p>
                        <ul className="space-y-1">
                          <li>• PostGIS for geographic applications</li>
                          <li>• Performance monitoring and optimization</li>
                          <li>• Custom functions and stored procedures</li>
                          <li>• Database administration and tuning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Migration Examples */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Migration from Other Databases</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">From MySQL to PostgreSQL</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="mb-3">
                          <div className="font-medium text-red-600 mb-1">MySQL Syntax:</div>
                          <div className="bg-gray-100 p-2 rounded font-mono text-xs">
                            SELECT * FROM users LIMIT 10;
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="font-medium text-green-600 mb-1">PostgreSQL (Same):</div>
                          <div className="bg-gray-100 p-2 rounded font-mono text-xs">
                            SELECT * FROM users LIMIT 10;
                          </div>
                        </div>
                        <div className="text-green-600 text-xs">✅ Most MySQL queries work unchanged!</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Enhanced with PostgreSQL Features</h4>
                      <div className="bg-white p-4 rounded border text-sm">
                        <div className="mb-3">
                          <div className="font-medium text-purple-600 mb-1">PostgreSQL Enhanced:</div>
                          <div className="bg-gray-100 p-2 rounded font-mono text-xs">
                            {`SELECT * FROM users
WHERE preferences @> '{"theme": "dark"}'
ORDER BY last_login DESC
LIMIT 10;`}
                          </div>
                        </div>
                        <div className="text-purple-600 text-xs">🚀 JSON queries impossible in MySQL!</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* When to Choose PostgreSQL */}
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    When to Choose PostgreSQL Over Other SQL Databases
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">PostgreSQL is Perfect For:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Complex applications:</strong> Need advanced data types and queries</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>JSON-heavy apps:</strong> Modern web applications with API data</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Geographic apps:</strong> Maps, location services, GIS applications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Full-text search:</strong> Content management, knowledge bases</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                          <span><strong>Data analysis:</strong> Advanced analytics and reporting</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Consider Alternatives For:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                          <span><strong>Simple applications:</strong> Basic CRUD, MySQL might be simpler</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                          <span><strong>Microsoft environment:</strong> SQL Server integrates better</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                          <span><strong>Enterprise Oracle:</strong> Large enterprise with Oracle infrastructure</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                          <span><strong>Team unfamiliarity:</strong> Team only knows MySQL/SQL Server</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Career Impact */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-orange-600" />
                    Career & Industry Impact
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-blue-600 mb-3">Market Demand</h4>
                      <div className="text-sm space-y-2">
                        <div>
                          <span className="font-medium">Job Growth:</span>
                          <span className="ml-1 text-green-600">+25% annually</span>
                        </div>
                        <div>
                          <span className="font-medium">Avg Salary:</span>
                          <span className="ml-1 text-green-600">$95K - $140K</span>
                        </div>
                        <div>
                          <span className="font-medium">Industries:</span>
                          <span className="ml-1 text-gray-600">Tech, Finance, Healthcare</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-green-600 mb-3">Skill Value</h4>
                      <div className="text-sm space-y-2">
                        <div>Standard SQL skills transfer to any database</div>
                        <div>PostgreSQL expertise adds premium value</div>
                        <div>Open-source knowledge increasingly valued</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-purple-600 mb-3">Learning ROI</h4>
                      <div className="text-sm space-y-2">
                        <div>
                          <span className="font-medium">Time Investment:</span>
                          <span className="ml-1">2-4 weeks beyond SQL</span>
                        </div>
                        <div>
                          <span className="font-medium">Salary Boost:</span>
                          <span className="ml-1 text-green-600">$10K - $20K</span>
                        </div>
                        <div>
                          <span className="font-medium">Job Opportunities:</span>
                          <span className="ml-1 text-green-600">3x more options</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Master SQL, Excel with PostgreSQL</h2>
          <p className="text-lg mb-6 opacity-90">
            Your SQL knowledge is the foundation. PostgreSQL adds powerful extensions that make you more versatile and valuable in the job market.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              💡 Learn SQL first for universal skills, then add PostgreSQL features for specialized capabilities!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start with SQL Basics
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              PostgreSQL Tutorial
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors">
              Download Learning Path
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
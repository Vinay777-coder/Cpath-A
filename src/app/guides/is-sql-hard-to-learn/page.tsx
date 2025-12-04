"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, Target, TrendingUp, AlertTriangle, CheckCircle, Users, Lightbulb, Zap, BookOpen, Trophy, Code } from 'lucide-react';

export default function IsSQLHardToLearnPage() {
  const [activeTab, setActiveTab] = useState<'difficulty' | 'challenges' | 'solutions'>('difficulty');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-8">
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
            Is SQL Hard to Learn? Expert Analysis for Beginners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honest assessment of SQL learning difficulty, common challenges, and proven strategies to master database querying skills
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-start">
            <Database className="w-8 h-8 text-blue-500 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">The Honest Answer</h2>
              <div className="text-lg text-gray-700 mb-4">
                <strong>SQL is relatively easy to learn</strong> - easier than most programming languages and one of the best entry points into tech. Here's why:
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">✅ What Makes SQL Easy</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• English-like syntax that's intuitive to read</li>
                    <li>• Immediate visual results when querying data</li>
                    <li>• No complex programming concepts like loops or functions</li>
                    <li>• Huge demand in job market with good salaries</li>
                    <li>• Can start being productive in just a few weeks</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700 mb-2">⚠️ What Can Be Tricky</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Complex JOINs with multiple tables can be confusing</li>
                    <li>• Advanced functions and window functions take practice</li>
                    <li>• Database-specific syntax differences (MySQL vs PostgreSQL)</li>
                    <li>• Performance optimization requires deeper understanding</li>
                    <li>• Thinking in sets rather than procedural logic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('difficulty')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'difficulty'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Database className="inline w-4 h-4 mr-2" />
              Difficulty Breakdown
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'challenges'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <AlertTriangle className="inline w-4 h-4 mr-2" />
              Common Challenges
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'solutions'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Lightbulb className="inline w-4 h-4 mr-2" />
              Learning Strategies
            </button>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        {activeTab === 'difficulty' && (
          <div className="space-y-8">
            {/* Difficulty Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SQL vs Other Technologies</h2>
              <div className="grid gap-6">
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-green-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Excel</div>
                    <div className="text-sm text-gray-600 mt-2">Easiest</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-100 rounded-lg border-2 border-blue-500">
                    <div className="text-2xl font-bold text-blue-600">SQL</div>
                    <div className="text-sm text-gray-600 mt-2">Easy</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-yellow-100 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">Python</div>
                    <div className="text-sm text-gray-600 mt-2">Moderate</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-100 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">JavaScript</div>
                    <div className="text-sm text-gray-600 mt-2">Moderate+</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-red-100 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">Java</div>
                    <div className="text-sm text-gray-600 mt-2">Hard</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Phases */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SQL Learning Difficulty by Phase</h2>
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Beginner Phase: Basic Queries (Very Easy) 😊</h3>
                    <p className="text-gray-700 mb-3">Most people can write useful queries within days</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-green-700">Easy Concepts:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• SELECT, FROM, WHERE clauses</li>
                          <li>• Filtering data with conditions</li>
                          <li>• Sorting with ORDER BY</li>
                          <li>• Basic aggregate functions (COUNT, SUM, AVG)</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-green-700">Why It's Easy:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Reads like English sentences</li>
                          <li>• Immediate visual feedback</li>
                          <li>• No complex syntax to remember</li>
                          <li>• Logical flow matches human thinking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Intermediate Phase: JOINs & Grouping (Moderate) 🤔</h3>
                    <p className="text-gray-700 mb-3">Requires understanding relationships between tables</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-yellow-700">Moderate Concepts:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• INNER, LEFT, RIGHT, FULL JOINs</li>
                          <li>• GROUP BY and HAVING clauses</li>
                          <li>• Multiple table relationships</li>
                          <li>• Subqueries and nested queries</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-yellow-700">Why It Gets Trickier:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Must understand table relationships</li>
                          <li>• Multiple ways to achieve same result</li>
                          <li>• JOIN types can be confusing initially</li>
                          <li>• Requires more planning and thinking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Advanced Phase: Window Functions & Optimization (Challenging) 😤</h3>
                    <p className="text-gray-700 mb-3">Complex analytical functions and performance considerations</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-orange-700">Advanced Concepts:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Window functions (ROW_NUMBER, RANK, LAG)</li>
                          <li>• Common Table Expressions (CTEs)</li>
                          <li>• Query optimization and indexing</li>
                          <li>• Complex analytical queries</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-orange-700">Why It's Challenging:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Abstract analytical concepts</li>
                          <li>• Performance implications matter</li>
                          <li>• Database-specific variations</li>
                          <li>• Requires strong logical thinking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* By Background */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Difficulty by Your Background</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Complete Beginner</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">4/10</div>
                  <p className="text-gray-700 text-sm mb-4">SQL is often the easiest entry point into data and tech careers.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>English-like syntax</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Immediate visual results</span>
                    </div>
                    <div className="flex items-center text-orange-700">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      <span>Need to learn database concepts</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Excel/Spreadsheet User</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">3/10</div>
                  <p className="text-gray-700 text-sm mb-4">Natural transition since concepts are very similar to Excel formulas.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Understand data filtering/sorting</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Familiar with functions like SUM, COUNT</span>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <Target className="w-4 h-4 mr-2" />
                      <span>Just need to learn SQL syntax</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-600 mb-3">Programming Background</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">2/10</div>
                  <p className="text-gray-700 text-sm mb-4">Easiest transition since you already understand logic and syntax.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Comfortable with syntax and logic</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Understand data types and structures</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Can learn SQL in days, not weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Common Challenges */}
        {activeTab === 'challenges' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">The Top 8 SQL Challenges for Beginners</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Understanding JOINs",
                    difficulty: "High",
                    explanation: "Different JOIN types and when to use each one",
                    example: "INNER JOIN vs LEFT JOIN vs RIGHT JOIN - when do you use what?"
                  },
                  {
                    title: "Table Relationships",
                    difficulty: "Medium",
                    explanation: "Understanding how tables relate to each other via foreign keys",
                    example: "How customers, orders, and products tables connect together"
                  },
                  {
                    title: "GROUP BY Logic",
                    difficulty: "Medium",
                    explanation: "Understanding when and how to group data for aggregations",
                    example: "GROUP BY customer_id vs GROUP BY order_date - different insights"
                  },
                  {
                    title: "NULL Value Handling",
                    difficulty: "Medium",
                    explanation: "NULL values behave differently than empty strings or zeros",
                    example: "WHERE column IS NULL vs WHERE column = '' - very different results"
                  },
                  {
                    title: "Subqueries vs JOINs",
                    difficulty: "High",
                    explanation: "Multiple ways to achieve the same result can be confusing",
                    example: "When to use a subquery vs when to use a JOIN for the same data"
                  },
                  {
                    title: "Aggregation with HAVING",
                    difficulty: "Medium",
                    explanation: "Difference between WHERE (filters rows) and HAVING (filters groups)",
                    example: "WHERE sales > 1000 vs HAVING SUM(sales) > 1000"
                  },
                  {
                    title: "Date/Time Functions",
                    difficulty: "Medium",
                    explanation: "Working with dates can be tricky and database-specific",
                    example: "DATEADD vs DATE_ADD vs INTERVAL - different databases, different syntax"
                  },
                  {
                    title: "Case Sensitivity",
                    difficulty: "Low",
                    explanation: "Some databases are case-sensitive, others aren't",
                    example: "'Name' vs 'name' - might be different depending on your database"
                  }
                ].map((challenge, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">{index + 1}. {challenge.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        challenge.difficulty === 'High' ? 'bg-red-100 text-red-800' :
                        challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{challenge.explanation}</p>
                    <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                      <strong>Example:</strong> {challenge.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Misconceptions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Misconceptions That Make It Harder</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-4">❌ Myths That Hurt Learning</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-red-50 rounded">
                      <div className="font-medium text-gray-800">"SQL is just for database administrators"</div>
                      <div className="text-sm text-gray-600">Everyone working with data needs SQL - analysts, scientists, marketers</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <div className="font-medium text-gray-800">"I need to memorize all the functions"</div>
                      <div className="text-sm text-gray-600">Focus on understanding concepts; you can always look up syntax</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <div className="font-medium text-gray-800">"SQL is old and outdated"</div>
                      <div className="text-sm text-gray-600">SQL is more relevant than ever - it's the foundation of data analysis</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <div className="font-medium text-gray-800">"I need to master one database first"</div>
                      <div className="text-sm text-gray-600">Basic SQL works across all databases; differences are minor</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">✅ Helpful Mindsets</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-gray-800">"Think in terms of what you want, not how"</div>
                      <div className="text-sm text-gray-600">SQL is declarative - you describe what you want, not step-by-step how</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-gray-800">"Start with simple queries and build up"</div>
                      <div className="text-sm text-gray-600">Complex queries are just combinations of simple concepts</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-gray-800">"Practice with real data"</div>
                      <div className="text-sm text-gray-600">Toy examples are fine, but real data makes learning stick</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-gray-800">"Embrace the errors - they teach you"</div>
                      <div className="text-sm text-gray-600">SQL error messages are usually helpful and specific</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Learning Strategies */}
        {activeTab === 'solutions' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Proven Strategies to Make SQL Easy</h2>
              
              <div className="grid gap-6">
                <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">1. Start with Real Data You Care About</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-700">Use Datasets Like:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Your own business/work data</li>
                        <li>• Sports statistics (if you're a fan)</li>
                        <li>• Movie databases, music data</li>
                        <li>• Financial data, stock prices</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-blue-700">Why It Helps:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• You already understand the context</li>
                        <li>• Questions come naturally</li>
                        <li>• Results are meaningful to you</li>
                        <li>• Motivation stays high</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">2. Learn by Building Up Complexity</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-green-700">Progressive Learning Path:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Week 1: SELECT, FROM, WHERE</li>
                        <li>• Week 2: ORDER BY, LIMIT, basic functions</li>
                        <li>• Week 3: GROUP BY, COUNT, SUM, AVG</li>
                        <li>• Week 4: JOINs (start with INNER JOIN)</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-green-700">Benefits:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Build confidence with early wins</li>
                        <li>• Each concept builds on previous</li>
                        <li>• Avoid overwhelming complexity</li>
                        <li>• Create muscle memory through practice</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-purple-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">3. Use the Right Learning Resources</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-purple-700">Best Free Resources:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• W3Schools SQL Tutorial (structured)</li>
                        <li>• SQLBolt (interactive exercises)</li>
                        <li>• HackerRank SQL challenges</li>
                        <li>• Mode Analytics SQL Tutorial</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-purple-700">Premium Options:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• DataCamp SQL courses</li>
                        <li>• Codecademy SQL track</li>
                        <li>• Udemy SQL bootcamps</li>
                        <li>• Coursera database courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Strategy */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">The 15-Minute Daily Practice Method</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Week 1-2: Basics</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Daily: Write 3 SELECT statements</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Practice WHERE with different conditions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Try ORDER BY with multiple columns</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Experiment with LIMIT/TOP</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-600 mb-3">Week 3-4: Aggregation</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Daily: One GROUP BY query</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Practice COUNT, SUM, AVG, MAX, MIN</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Learn HAVING vs WHERE</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Group by multiple columns</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Week 5-6: JOINs</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Daily: Practice one JOIN type</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Start with INNER JOIN</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Progress to LEFT JOIN</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Try joining 3+ tables</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Mistakes to Avoid */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">5 Mistakes That Make SQL Seem Harder</h2>
              <div className="space-y-4">
                {[
                  {
                    mistake: "Trying to learn everything at once",
                    solution: "Focus on one concept per week. Master SELECT before moving to JOINs."
                  },
                  {
                    mistake: "Not practicing with real data",
                    solution: "Use datasets from your industry or interests, not just toy examples."
                  },
                  {
                    mistake: "Memorizing syntax instead of understanding logic",
                    solution: "Understand WHY you use GROUP BY, not just HOW to write it."
                  },
                  {
                    mistake: "Getting discouraged by complex queries",
                    solution: "Break complex queries into smaller parts. Every expert started with SELECT *"
                  },
                  {
                    mistake: "Not using SQL tools and interfaces effectively",
                    solution: "Learn your database interface well. Use auto-complete and error messages."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">❌ {item.mistake}</h4>
                        <p className="text-sm text-gray-700">✅ <strong>Better approach:</strong> {item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-lg mb-6 opacity-90">
            SQL is one of the easiest and most rewarding skills to learn in tech. With consistent daily practice, 
            you can be writing useful queries in weeks and job-ready in 2-3 months.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              💡 Remember: Every data professional uses SQL daily. It's not just nice to have - it's essential. 
              Start today and you'll thank yourself in a month.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Learning SQL Today
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Find Free SQL Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, BookOpen, CheckCircle, AlertTriangle, TrendingUp, Users, Zap, Calendar, Award, Database } from 'lucide-react';

export default function HowLongToLearnSQLPage() {
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-8">
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
            How Long Does It Take to Learn SQL? Expert Timeline Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Realistic timelines for learning SQL from complete beginner to job-ready professional, with actionable roadmaps for every skill level
          </p>
        </div>

        {/* Quick Answer Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-cyan-500">
          <div className="flex items-start">
            <Clock className="w-8 h-8 text-cyan-500 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Quick Answer</h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong>2-8 weeks</strong> to become job-ready, depending on your background and learning intensity. 
                Here's the realistic breakdown:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="font-semibold text-green-700 mb-2">Complete Beginner</div>
                  <div className="text-2xl font-bold text-green-600 mb-1">6-8 weeks</div>
                  <div className="text-gray-600">1-2 hours daily practice</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-700 mb-2">Excel/Data User</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">3-4 weeks</div>
                  <div className="text-gray-600">1 hour daily practice</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="font-semibold text-purple-700 mb-2">Programming Experience</div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">1-2 weeks</div>
                  <div className="text-gray-600">30 min daily practice</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Learning Path</h2>
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedLevel === 'beginner'
                    ? 'bg-green-500 text-white'
                    : 'text-gray-600 hover:text-green-500'
                }`}
              >
                Complete Beginner
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedLevel === 'intermediate'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                Excel/Data User
              </button>
              <button
                onClick={() => setSelectedLevel('advanced')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedLevel === 'advanced'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                Programming Experience
              </button>
            </div>
          </div>

          {/* Learning Timeline for Complete Beginner */}
          {selectedLevel === 'beginner' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Complete Beginner Path: 6-8 Weeks</h3>
                <p className="text-gray-600">Perfect for those new to databases and data analysis</p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    week: "Week 1-2",
                    title: "Database Fundamentals & Basic Queries",
                    time: "10-12 hours",
                    color: "green",
                    tasks: [
                      "Understand what databases and tables are",
                      "Learn SELECT, FROM, WHERE clauses",
                      "Practice filtering data with conditions",
                      "Master ORDER BY and LIMIT",
                      "Get comfortable with basic data types"
                    ]
                  },
                  {
                    week: "Week 3-4", 
                    title: "Aggregate Functions & Grouping",
                    time: "12-14 hours",
                    color: "green",
                    tasks: [
                      "Learn COUNT, SUM, AVG, MAX, MIN functions",
                      "Understand GROUP BY clause",
                      "Practice HAVING vs WHERE",
                      "Work with NULL values",
                      "Create summary reports"
                    ]
                  },
                  {
                    week: "Week 5-6",
                    title: "Table Relationships & JOINs",
                    time: "14-16 hours", 
                    color: "green",
                    tasks: [
                      "Understand primary and foreign keys",
                      "Master INNER JOIN",
                      "Learn LEFT and RIGHT JOINs",
                      "Practice joining multiple tables",
                      "Handle duplicate data in joins"
                    ]
                  },
                  {
                    week: "Week 7-8",
                    title: "Advanced Queries & Real Projects",
                    time: "16-18 hours",
                    color: "green", 
                    tasks: [
                      "Write subqueries and nested queries",
                      "Learn CASE statements",
                      "Practice with real business scenarios",
                      "Build complete reports and dashboards",
                      "Prepare for job interviews"
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 bg-${phase.color}-500 text-white rounded-full flex items-center justify-center mr-4`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{phase.week}: {phase.title}</h4>
                          <p className="text-sm text-gray-600">Total time commitment: {phase.time}</p>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learning Timeline for Excel/Data User */}
          {selectedLevel === 'intermediate' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Excel/Data User Path: 3-4 Weeks</h3>
                <p className="text-gray-600">You already understand data concepts, just need to learn SQL syntax</p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    week: "Week 1",
                    title: "SQL Syntax & Basic Queries",
                    time: "6-8 hours",
                    color: "blue",
                    tasks: [
                      "Map Excel concepts to SQL (filters = WHERE, sorts = ORDER BY)",
                      "Learn SELECT, FROM, WHERE - like Excel filtering",
                      "Practice conditions (like Excel IF statements)",
                      "Master ORDER BY (like Excel sorting)",
                      "Understand LIMIT vs Excel row limits"
                    ]
                  },
                  {
                    week: "Week 2",
                    title: "Aggregations & Functions", 
                    time: "7-9 hours",
                    color: "blue",
                    tasks: [
                      "SQL functions = Excel functions (SUM, COUNT, AVG)",
                      "GROUP BY = Excel Pivot Tables",
                      "HAVING = additional filtering on aggregated data",
                      "Date functions (like Excel date formulas)",
                      "String functions for text manipulation"
                    ]
                  },
                  {
                    week: "Week 3",
                    title: "JOINs & Multi-table Analysis",
                    time: "8-10 hours",
                    color: "blue", 
                    tasks: [
                      "JOINs = Excel VLOOKUP/XLOOKUP on steroids",
                      "INNER JOIN for exact matches",
                      "LEFT JOIN for keeping all records (like Excel)",
                      "Join multiple tables (like complex Excel references)",
                      "Handle lookup errors and missing data"
                    ]
                  },
                  {
                    week: "Week 4",
                    title: "Advanced Techniques & Projects",
                    time: "8-12 hours",
                    color: "blue",
                    tasks: [
                      "Subqueries = nested Excel formulas",
                      "CASE statements = complex IF statements",
                      "Window functions = advanced Excel analytics",
                      "Recreate your Excel reports in SQL",
                      "Practice with real work scenarios"
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 bg-${phase.color}-500 text-white rounded-full flex items-center justify-center mr-4`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{phase.week}: {phase.title}</h4>
                          <p className="text-sm text-gray-600">Total time commitment: {phase.time}</p>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learning Timeline for Programming Experience */}
          {selectedLevel === 'advanced' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Programming Experience Path: 1-2 Weeks</h3>
                <p className="text-gray-600">You understand logic and syntax - just need to learn SQL specifics</p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    week: "Days 1-3",
                    title: "SQL Fundamentals Speed Run", 
                    time: "4-6 hours",
                    color: "purple",
                    tasks: [
                      "SELECT, FROM, WHERE (like if statements)",
                      "Data types and operators (familiar territory)", 
                      "ORDER BY, LIMIT (simple logic)",
                      "Basic functions (like method calls)",
                      "Compare to arrays/objects you know"
                    ]
                  },
                  {
                    week: "Days 4-7",
                    title: "Aggregations & Grouping",
                    time: "6-8 hours", 
                    color: "purple",
                    tasks: [
                      "Aggregate functions (like reduce() in JS)",
                      "GROUP BY (like groupBy in programming)",
                      "HAVING clause (additional filtering)",
                      "NULL handling (like null/undefined)",
                      "Set-based thinking vs procedural"
                    ]
                  },
                  {
                    week: "Days 8-10",
                    title: "JOINs & Relationships",
                    time: "6-8 hours",
                    color: "purple",
                    tasks: [
                      "Foreign keys (like object references)",
                      "INNER JOIN (intersection logic)",
                      "LEFT/RIGHT JOIN (union logic)",
                      "Multiple table JOINs (complex queries)",
                      "Performance considerations"
                    ]
                  },
                  {
                    week: "Days 11-14",
                    title: "Advanced SQL & Optimization",
                    time: "8-10 hours",
                    color: "purple", 
                    tasks: [
                      "Subqueries (nested function calls)",
                      "Window functions (advanced analytics)",
                      "CTEs (like function composition)",
                      "Query optimization and indexing",
                      "Database-specific features"
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 bg-${phase.color}-500 text-white rounded-full flex items-center justify-center mr-4`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{phase.week}: {phase.title}</h4>
                          <p className="text-sm text-gray-600">Total time commitment: {phase.time}</p>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Factors That Affect Learning Speed */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Factors That Affect Your Learning Speed</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">⚡ Factors That Speed Up Learning</h3>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-green-50 rounded">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Previous Data Experience</div>
                    <div className="text-sm text-gray-600">Excel, Google Sheets, or data analysis background</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded">
                  <Zap className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Consistent Daily Practice</div>
                    <div className="text-sm text-gray-600">30 minutes daily beats 3 hours once a week</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded">
                  <BookOpen className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Real-World Projects</div>
                    <div className="text-sm text-gray-600">Using data relevant to your work or interests</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded">
                  <Users className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Having a Clear Goal</div>
                    <div className="text-sm text-gray-600">Specific job target or project in mind</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4">🐌 Factors That Slow Down Learning</h3>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-red-50 rounded">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Irregular Study Schedule</div>
                    <div className="text-sm text-gray-600">Long breaks between practice sessions</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-red-50 rounded">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Theory Without Practice</div>
                    <div className="text-sm text-gray-600">Reading about SQL without writing queries</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-red-50 rounded">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Perfectionism</div>
                    <div className="text-sm text-gray-600">Trying to learn everything before practicing</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-red-50 rounded">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Using Only Toy Examples</div>
                    <div className="text-sm text-gray-600">Not working with realistic, messy data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Schedules */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Study Schedules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <div className="text-center mb-4">
                <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-600">Intensive Schedule</h3>
                <p className="text-sm text-gray-600">Fast track to job readiness</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Daily Time:</span>
                  <span>2-3 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Timeline:</span>
                  <span>2-4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Best For:</span>
                  <span>Job seekers, bootcamp students</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="font-medium text-blue-700 mb-2">Daily Routine:</div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• 1 hour: New concepts/theory</li>
                    <li>• 1 hour: Hands-on practice</li>
                    <li>• 30 min: Review and challenges</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="text-center mb-4">
                <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-green-600">Balanced Schedule</h3>
                <p className="text-sm text-gray-600">Sustainable long-term learning</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Daily Time:</span>
                  <span>1-1.5 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Timeline:</span>
                  <span>6-8 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Best For:</span>
                  <span>Working professionals</span>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="font-medium text-green-700 mb-2">Daily Routine:</div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• 30 min: Learning new concepts</li>
                    <li>• 45 min: Practice and exercises</li>
                    <li>• Weekends: Longer project work</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="text-center mb-4">
                <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold text-purple-600">Casual Schedule</h3>
                <p className="text-sm text-gray-600">Flexible learning pace</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Daily Time:</span>
                  <span>30-45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Timeline:</span>
                  <span>3-4 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Best For:</span>
                  <span>Busy schedules, gradual learning</span>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="font-medium text-purple-700 mb-2">Daily Routine:</div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• 15 min: Quick review</li>
                    <li>• 30 min: New concept or practice</li>
                    <li>• Focus on consistency over intensity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones and Progress Tracking */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Milestones & Job Readiness Checklist</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">📈 Progress Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start p-3 border rounded">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">1</div>
                  <div>
                    <div className="font-medium text-gray-800">Week 1: Basic Queries</div>
                    <div className="text-sm text-gray-600">Can write SELECT statements with WHERE conditions</div>
                  </div>
                </div>
                <div className="flex items-start p-3 border rounded">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">2</div>
                  <div>
                    <div className="font-medium text-gray-800">Week 2-3: Aggregations</div>
                    <div className="text-sm text-gray-600">Can create summary reports with GROUP BY</div>
                  </div>
                </div>
                <div className="flex items-start p-3 border rounded">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">3</div>
                  <div>
                    <div className="font-medium text-gray-800">Week 4-5: JOINs</div>
                    <div className="text-sm text-gray-600">Can combine data from multiple tables</div>
                  </div>
                </div>
                <div className="flex items-start p-3 border rounded">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">4</div>
                  <div>
                    <div className="font-medium text-gray-800">Week 6+: Advanced</div>
                    <div className="text-sm text-gray-600">Can write complex analytical queries</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">✅ Job Readiness Checklist</h3>
              <div className="space-y-2 text-sm">
                {[
                  "Write SELECT queries with multiple conditions",
                  "Use aggregate functions (COUNT, SUM, AVG, MAX, MIN)",
                  "Group data and filter groups with HAVING",
                  "Join 2-3 tables using different JOIN types",
                  "Handle NULL values properly",
                  "Write subqueries and understand when to use them",
                  "Use CASE statements for conditional logic",
                  "Format dates and work with date functions",
                  "Optimize queries for better performance",
                  "Explain your queries to non-technical stakeholders"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Pitfalls That Extend Learning Time</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4">❌ What Slows People Down</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                  <div className="font-medium text-gray-800">Analysis Paralysis</div>
                  <div className="text-sm text-gray-600">Spending weeks choosing the "perfect" database or course</div>
                </div>
                <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                  <div className="font-medium text-gray-800">Tutorial Hell</div>
                  <div className="text-sm text-gray-600">Watching endless videos without actually writing queries</div>
                </div>
                <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                  <div className="font-medium text-gray-800">Perfectionism</div>
                  <div className="text-sm text-gray-600">Trying to understand everything 100% before moving forward</div>
                </div>
                <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                  <div className="font-medium text-gray-800">No Real Practice</div>
                  <div className="text-sm text-gray-600">Only using clean, simple datasets without real-world messiness</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">✅ How to Stay on Track</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <div className="font-medium text-gray-800">Start Today, Perfect Later</div>
                  <div className="text-sm text-gray-600">Pick any SQL database and start writing queries immediately</div>
                </div>
                <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <div className="font-medium text-gray-800">70% Rule</div>
                  <div className="text-sm text-gray-600">Move to next topic when you understand 70%, not 100%</div>
                </div>
                <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <div className="font-medium text-gray-800">Daily Writing</div>
                  <div className="text-sm text-gray-600">Write at least one SQL query every single day</div>
                </div>
                <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <div className="font-medium text-gray-800">Real Data Practice</div>
                  <div className="text-sm text-gray-600">Use datasets from your industry or work domain</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your SQL Journey?</h2>
          <p className="text-lg mb-6 opacity-90">
            SQL is one of the fastest skills to learn with the highest return on investment. 
            Start today and you could be job-ready in just weeks, not months.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              💡 Success Formula: Consistency beats intensity. 
              30 minutes daily for 6 weeks {'>'}  6 hours once a week.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Learning SQL Now
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Download Learning Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
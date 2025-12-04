"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Brain, Target, TrendingUp, AlertTriangle, CheckCircle, Users, Lightbulb, Zap, BookOpen, Trophy } from 'lucide-react';

export default function IsJavaScriptHardToLearnPage() {
  const [activeTab, setActiveTab] = useState<'difficulty' | 'challenges' | 'solutions'>('difficulty');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
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
            Is JavaScript Hard to Learn? Honest Analysis for Beginners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Straightforward assessment of JavaScript learning difficulty, common challenges, and proven strategies to overcome them
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-purple-500">
          <div className="flex items-start">
            <Brain className="w-8 h-8 text-purple-500 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">The Honest Answer</h2>
              <div className="text-lg text-gray-700 mb-4">
                <strong>JavaScript is moderately difficult</strong> - easier than languages like C++ or Java for beginners, 
                but has unique quirks that can be confusing. Here's why:
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">✅ What Makes It Easier</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• No need to set up complex development environment</li>
                    <li>• Immediate visual feedback in web browsers</li>
                    <li>• Forgiving syntax with automatic type conversion</li>
                    <li>• Huge community and learning resources</li>
                    <li>• Can start building useful projects quickly</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-700 mb-2">⚠️ What Makes It Challenging</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Unusual behaviors and "gotchas" that confuse beginners</li>
                    <li>• Multiple ways to do the same thing</li>
                    <li>• Rapidly evolving ecosystem and frameworks</li>
                    <li>• Async programming concepts can be complex</li>
                    <li>• Scope and closure concepts take time to master</li>
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
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-600 hover:text-purple-500'
              }`}
            >
              <Brain className="inline w-4 h-4 mr-2" />
              Difficulty Breakdown
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'challenges'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-600 hover:text-purple-500'
              }`}
            >
              <AlertTriangle className="inline w-4 h-4 mr-2" />
              Common Challenges
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'solutions'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-600 hover:text-purple-500'
              }`}
            >
              <Lightbulb className="inline w-4 h-4 mr-2" />
              Success Strategies
            </button>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        {activeTab === 'difficulty' && (
          <div className="space-y-8">
            {/* Difficulty Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JavaScript vs Other Languages</h2>
              <div className="grid gap-6">
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-green-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">HTML/CSS</div>
                    <div className="text-sm text-gray-600 mt-2">Easiest</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-100 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">Python</div>
                    <div className="text-sm text-gray-600 mt-2">Easy</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-100 rounded-lg border-2 border-purple-500">
                    <div className="text-2xl font-bold text-purple-600">JavaScript</div>
                    <div className="text-sm text-gray-600 mt-2">Moderate</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-100 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">Java</div>
                    <div className="text-sm text-gray-600 mt-2">Hard</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-red-100 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">C++</div>
                    <div className="text-sm text-gray-600 mt-2">Hardest</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Phases */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JavaScript Learning Difficulty by Phase</h2>
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Beginner Phase: Variables & Functions (Easy) 😊</h3>
                    <p className="text-gray-700 mb-3">Most concepts are straightforward and similar to other languages</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-green-700">Easy Concepts:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Variables and data types</li>
                          <li>• Basic functions</li>
                          <li>• If/else statements</li>
                          <li>• Loops (for, while)</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-green-700">Why It's Easy:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Intuitive syntax</li>
                          <li>• Immediate feedback in browser</li>
                          <li>• No compilation step</li>
                          <li>• Forgiving error handling</li>
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
                    <h3 className="font-semibold text-gray-800 mb-2">Intermediate Phase: Objects & DOM (Moderate) 🤔</h3>
                    <p className="text-gray-700 mb-3">New concepts appear that don't exist in other languages</p>
                    <div className="grid md:grid-columns-2 gap-4 text-sm">
                      <div>
                        <strong className="text-yellow-700">Challenging Concepts:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Objects and prototypes</li>
                          <li>• DOM manipulation</li>
                          <li>• Event handling</li>
                          <li>• Array methods (map, filter, reduce)</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-yellow-700">Why It Gets Harder:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Web-specific concepts</li>
                          <li>• Multiple ways to do things</li>
                          <li>• Browser compatibility issues</li>
                          <li>• Debugging becomes more complex</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Advanced Phase: Async & Closures (Hard) 😤</h3>
                    <p className="text-gray-700 mb-3">Complex concepts that even experienced developers find challenging</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-red-700">Hard Concepts:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Closures and scope</li>
                          <li>• Promises and async/await</li>
                          <li>• Event loop</li>
                          <li>• 'this' keyword behavior</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-red-700">Why It's Hard:</strong>
                        <ul className="text-gray-600 mt-1 space-y-1">
                          <li>• Abstract concepts</li>
                          <li>• Non-intuitive behaviors</li>
                          <li>• Requires mental model shift</li>
                          <li>• Easy to write buggy code</li>
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
                  <div className="text-3xl font-bold text-green-600 mb-2">6/10</div>
                  <p className="text-gray-700 text-sm mb-4">JavaScript is actually a good first language due to immediate visual feedback and forgiving nature.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>No preconceived notions</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Visual progress motivation</span>
                    </div>
                    <div className="flex items-center text-red-700">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      <span>Need to learn programming concepts</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Other Programming Background</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">4/10</div>
                  <p className="text-gray-700 text-sm mb-4">Easier due to programming fundamentals, but JS quirks can be confusing.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Understand programming logic</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Familiar with debugging</span>
                    </div>
                    <div className="flex items-center text-red-700">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      <span>JS-specific behaviors surprise you</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-600 mb-3">Web Development Background</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">3/10</div>
                  <p className="text-gray-700 text-sm mb-4">Easiest transition since you understand web concepts and the development environment.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Know HTML/CSS integration</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Familiar with browser dev tools</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Understand web context</span>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">The Top 10 JavaScript Challenges for Beginners</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Undefined vs Null vs Empty String",
                    difficulty: "High",
                    explanation: "JavaScript has multiple 'empty' values that behave differently",
                    example: "'' vs null vs undefined - all falsy but not equal to each other"
                  },
                  {
                    title: "The 'this' Keyword",
                    difficulty: "Very High", 
                    explanation: "'this' changes meaning based on how a function is called",
                    example: "this.name in a method vs arrow function vs regular function"
                  },
                  {
                    title: "Asynchronous Programming",
                    difficulty: "High",
                    explanation: "Callbacks, Promises, and async/await can be mind-bending",
                    example: "Code doesn't run in the order it's written"
                  },
                  {
                    title: "Scope and Closures",
                    difficulty: "High",
                    explanation: "Variables accessible in unexpected places due to closures",
                    example: "Functions 'remembering' variables from outer scopes"
                  },
                  {
                    title: "Type Coercion",
                    difficulty: "Medium",
                    explanation: "JavaScript automatically converts types, sometimes unexpectedly",
                    example: "'5' + 3 = '53' but '5' - 3 = 2"
                  },
                  {
                    title: "Event Loop Confusion", 
                    difficulty: "Very High",
                    explanation: "Understanding how JavaScript handles timing and execution",
                    example: "setTimeout with 0ms delay doesn't run immediately"
                  },
                  {
                    title: "Object Reference vs Value",
                    difficulty: "Medium",
                    explanation: "Objects are passed by reference, primitives by value",
                    example: "Modifying an object parameter affects the original"
                  },
                  {
                    title: "Hoisting Behavior",
                    difficulty: "Medium", 
                    explanation: "Variables and functions are 'moved' to the top of their scope",
                    example: "Using variables before they're declared"
                  }
                ].map((challenge, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">{index + 1}. {challenge.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        challenge.difficulty === 'Very High' ? 'bg-red-100 text-red-800' :
                        challenge.difficulty === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
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
                      <div className="font-medium text-gray-800">"JavaScript is just HTML scripting"</div>
                      <div className="text-sm text-gray-600">JS is a full programming language used everywhere</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <div className="font-medium text-gray-800">"I should learn frameworks first"</div>
                      <div className="text-sm text-gray-600">Frameworks are harder without JS fundamentals</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <div className="font-medium text-gray-800">"JavaScript is a toy language"</div>
                      <div className="text-sm text-gray-600">Major apps like Netflix, Facebook use JavaScript</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <div className="font-medium text-gray-800">"I need to memorize all syntax"</div>
                      <div className="text-sm text-gray-600">Understanding concepts is more important than memorizing syntax</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">✅ Helpful Mindsets</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-gray-800">"Weird behaviors have logical reasons"</div>
                      <div className="text-sm text-gray-600">JS quirks make sense once you understand why</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-gray-800">"Focus on one concept at a time"</div>
                      <div className="text-sm text-gray-600">Master basics before moving to advanced topics</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-gray-800">"Practice is more important than theory"</div>
                      <div className="text-sm text-gray-600">Build projects to solidify understanding</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-gray-800">"It's okay to be confused initially"</div>
                      <div className="text-sm text-gray-600">Complex concepts take time to click</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Strategies */}
        {activeTab === 'solutions' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Proven Strategies to Make JavaScript Easier</h2>
              
              <div className="grid gap-6">
                <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">1. Master the Fundamentals First</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-700">Focus Areas:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Variables (let, const, var differences)</li>
                        <li>• Functions (regular vs arrow)</li>
                        <li>• Objects and arrays</li>
                        <li>• Conditional logic and loops</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-blue-700">Why It Helps:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Strong foundation prevents confusion later</li>
                        <li>• Advanced concepts build on basics</li>
                        <li>• Debugging becomes much easier</li>
                        <li>• Framework learning is smoother</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">2. Use Browser Developer Tools Extensively</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-green-700">Essential Tools:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Console for testing code snippets</li>
                        <li>• Debugger for step-through debugging</li>
                        <li>• Network tab for API requests</li>
                        <li>• Elements tab for DOM inspection</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-green-700">Benefits:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Instant feedback and experimentation</li>
                        <li>• Understand code execution flow</li>
                        <li>• Debug issues more effectively</li>
                        <li>• Learn by exploring existing websites</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-purple-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">3. Build Projects Immediately</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-purple-700">Beginner Projects:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Interactive to-do list</li>
                        <li>• Simple calculator</li>
                        <li>• Random quote generator</li>
                        <li>• Basic quiz application</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-purple-700">Why Projects Help:</strong>
                      <ul className="text-gray-600 mt-2 space-y-1">
                        <li>• Apply concepts in real context</li>
                        <li>• Encounter and solve actual problems</li>
                        <li>• Build portfolio for job hunting</li>
                        <li>• Maintain motivation through progress</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Learning Resources by Difficulty</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Beginner-Friendly</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>freeCodeCamp (free, comprehensive)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>JavaScript.info (detailed explanations)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Codecademy (interactive)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>MDN Web Docs (reference)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Intermediate</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Eloquent JavaScript (book)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>You Don't Know JS (book series)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>JavaScript30 (projects)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>The Odin Project</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-600 mb-3">Advanced</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>Frontend Masters courses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>JavaScript: The Good Parts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>TC39 proposals (cutting-edge)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>Deep JavaScript foundations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mindset Tips */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Mental Strategies for Success</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Embrace the Confusion</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• <strong>Expect to be confused:</strong> JS has genuine complexity</p>
                    <p>• <strong>Confusion is normal:</strong> Even experts were confused initially</p>
                    <p>• <strong>Take breaks:</strong> Let concepts marinate in your mind</p>
                    <p>• <strong>Ask questions:</strong> Use Stack Overflow, Reddit, Discord</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Focus on Problem-Solving</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• <strong>Start with logic:</strong> What do you want to achieve?</p>
                    <p>• <strong>Break down problems:</strong> Solve one piece at a time</p>
                    <p>• <strong>Learn from errors:</strong> Read error messages carefully</p>
                    <p>• <strong>Celebrate small wins:</strong> Every working feature counts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-lg mb-6 opacity-90">
            JavaScript has a moderate learning curve, but millions of developers have successfully learned it. 
            With the right approach, consistent practice, and patience with yourself, you can master it too.
          </p>
          <div className="bg-white/20 p-4 rounded-lg mb-6">
            <p className="text-xl font-semibold">
              💡 Remember: The difficulty comes from JavaScript's power and flexibility, not from poor design. 
              Those "weird" parts become features once you understand them.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Learning JavaScript
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors">
              Find Study Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
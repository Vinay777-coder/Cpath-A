"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Zap, Users, TrendingUp, Award, DollarSign, Briefcase, Clock, Target, CheckCircle } from 'lucide-react';

export default function GoVsPythonPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'career'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-8">
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
            Go vs Python: Complete Developer's Guide 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive comparison to help you choose between Go and Python for your next project or career path
          </p>
        </div>

        {/* Quick Decision Helper */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Decision Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-700">Choose Go When:</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Building high-performance web services</li>
                <li>• Developing microservices architecture</li>
                <li>• Creating system-level applications</li>
                <li>• Need excellent concurrency handling</li>
                <li>• Want fast compilation and deployment</li>
                <li>• Building cloud-native applications</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Choose Python When:</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Data science and machine learning projects</li>
                <li>• Rapid prototyping and development</li>
                <li>• Web development with Django/Flask</li>
                <li>• Automation and scripting tasks</li>
                <li>• Academic or research work</li>
                <li>• Need extensive third-party libraries</li>
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
              Language Overview
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
              Head-to-Head
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
              Career & Market
            </button>
          </div>
        </div>

        {/* Language Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Go Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Go (Golang)</h2>
                    <p className="text-gray-600">Google's fast, concurrent language</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Key Strengths</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Excellent performance and speed</li>
                      <li>• Built-in concurrency (goroutines)</li>
                      <li>• Simple, clean syntax</li>
                      <li>• Fast compilation times</li>
                      <li>• Strong standard library</li>
                      <li>• Statically typed with type inference</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Common Use Cases</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Web servers and APIs</li>
                      <li>• Microservices</li>
                      <li>• DevOps tools</li>
                      <li>• Network programming</li>
                      <li>• Cloud infrastructure</li>
                      <li>• Command-line tools</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Popular Companies Using Go</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Google</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Docker</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Kubernetes</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Uber</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Dropbox</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Python Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Python</h2>
                    <p className="text-gray-600">Versatile, readable programming language</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Key Strengths</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Easy to learn and read</li>
                      <li>• Massive ecosystem of libraries</li>
                      <li>• Excellent for data science/ML</li>
                      <li>• Rapid development and prototyping</li>
                      <li>• Strong community support</li>
                      <li>• Cross-platform compatibility</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Common Use Cases</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Data science and analytics</li>
                      <li>• Machine learning and AI</li>
                      <li>• Web development</li>
                      <li>• Automation and scripting</li>
                      <li>• Scientific computing</li>
                      <li>• Desktop applications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Popular Companies Using Python</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Netflix</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Instagram</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spotify</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">NASA</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tesla</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Curve */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Curve Comparison</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Go Learning Path</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium">Basic Syntax (1-2 weeks)</div>
                        <div className="text-sm text-gray-600">Variables, functions, control structures</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium">Structs & Interfaces (2-3 weeks)</div>
                        <div className="text-sm text-gray-600">Object-oriented concepts in Go</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium">Concurrency (3-4 weeks)</div>
                        <div className="text-sm text-gray-600">Goroutines, channels, patterns</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                      <div>
                        <div className="font-medium">Web Development (2-3 weeks)</div>
                        <div className="text-sm text-gray-600">HTTP servers, frameworks, APIs</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <div className="font-medium text-green-800">Total: 8-12 weeks to proficiency</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Python Learning Path</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium">Basic Syntax (1-2 weeks)</div>
                        <div className="text-sm text-gray-600">Variables, functions, basic data structures</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium">OOP & Libraries (2-3 weeks)</div>
                        <div className="text-sm text-gray-600">Classes, modules, popular packages</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium">Specialization (4-6 weeks)</div>
                        <div className="text-sm text-gray-600">Web dev, data science, or automation</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                      <div>
                        <div className="font-medium">Advanced Topics (3-4 weeks)</div>
                        <div className="text-sm text-gray-600">Frameworks, testing, deployment</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <div className="font-medium text-blue-800">Total: 10-15 weeks to proficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Head-to-Head Comparison */}
        {activeTab === 'comparison' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <h2 className="text-2xl font-bold">Detailed Feature Comparison</h2>
                <p className="mt-2 opacity-90">Side-by-side analysis of Go vs Python across key dimensions</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold text-green-700">Go</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-700">Python</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Winner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Performance</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-green-600 font-medium">Go (3-10x faster)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Learning Curve</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">Python (easier syntax)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Concurrency</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐</td>
                      <td className="px-6 py-4 text-green-600 font-medium">Go (built-in goroutines)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Library Ecosystem</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">Python (massive PyPI)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Development Speed</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">Python (rapid prototyping)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Memory Usage</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-green-600 font-medium">Go (more efficient)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Deployment</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐</td>
                      <td className="px-6 py-4 text-green-600 font-medium">Go (single binary)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Data Science</td>
                      <td className="px-6 py-4 text-center text-green-600">⭐⭐</td>
                      <td className="px-6 py-4 text-center text-blue-600">⭐⭐⭐⭐⭐</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">Python (NumPy, pandas, etc.)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Use Case Recommendations */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-green-600 mb-6">When Go Wins</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">🚀 High-Performance Web Services</h3>
                    <p className="text-sm text-gray-700">Go's goroutines and efficient runtime make it perfect for handling thousands of concurrent requests.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">🔧 DevOps and Infrastructure Tools</h3>
                    <p className="text-sm text-gray-700">Single binary deployment and cross-compilation make Go ideal for CLI tools and system utilities.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">☁️ Cloud-Native Applications</h3>
                    <p className="text-sm text-gray-700">Docker, Kubernetes, and many cloud tools are built with Go for good reason.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">🏗️ Microservices Architecture</h3>
                    <p className="text-sm text-gray-700">Lightweight, fast startup, and excellent networking make Go perfect for microservices.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-blue-600 mb-6">When Python Wins</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">📊 Data Science & Analytics</h3>
                    <p className="text-sm text-gray-700">Unmatched ecosystem with pandas, NumPy, scikit-learn, and Jupyter notebooks.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">🤖 Machine Learning & AI</h3>
                    <p className="text-sm text-gray-700">TensorFlow, PyTorch, and countless ML libraries make Python the go-to choice.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">⚡ Rapid Prototyping</h3>
                    <p className="text-sm text-gray-700">Quick development cycles and readable code help you test ideas fast.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibent text-gray-800 mb-2">🔬 Scientific Computing</h3>
                    <p className="text-sm text-gray-700">Strong adoption in academia and research with specialized libraries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Career & Market Analysis */}
        {activeTab === 'career' && (
          <div className="space-y-8">
            {/* Salary Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Salary & Job Market Analysis</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Go Developer Salaries</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Entry Level (0-2 years)</span>
                      <span className="font-bold text-green-600">$85k - $120k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Mid Level (3-5 years)</span>
                      <span className="font-bold text-green-600">$120k - $160k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Senior Level (5+ years)</span>
                      <span className="font-bold text-green-600">$160k - $220k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded border border-green-200">
                      <span className="font-medium">Average</span>
                      <span className="font-bold text-green-700">$135k</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Python Developer Salaries</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="font-medium">Entry Level (0-2 years)</span>
                      <span className="font-bold text-blue-600">$70k - $100k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="font-medium">Mid Level (3-5 years)</span>
                      <span className="font-bold text-blue-600">$100k - $140k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="font-medium">Senior Level (5+ years)</span>
                      <span className="font-bold text-blue-600">$140k - $200k</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-100 rounded border border-blue-200">
                      <span className="font-medium">Average</span>
                      <span className="font-bold text-blue-700">$120k</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Salaries vary significantly by location, company size, and specialization. 
                  Go developers often command higher salaries due to specialized skills, while Python has more job opportunities overall.
                </p>
              </div>
            </div>

            {/* Job Market Trends */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Market & Growth Trends</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Go Market Position</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <div className="font-medium">Job Growth: 📈 Fast Growing</div>
                        <div className="text-sm text-gray-600">25%+ year-over-year growth in job postings</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <Users className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <div className="font-medium">Competition: 🎯 Lower</div>
                        <div className="text-sm text-gray-600">Fewer candidates, specialized skill set</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded">
                      <Briefcase className="w-6 h-6 text-green-500 mr-3" />
                      <div>
                        <div className="font-medium">Industries: 🏢 Tech-focused</div>
                        <div className="text-sm text-gray-600">Cloud, fintech, infrastructure companies</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Python Market Position</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                      <div>
                        <div className="font-medium">Job Growth: 📊 Steady Growth</div>
                        <div className="text-sm text-gray-600">15%+ growth, especially in data roles</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <Users className="w-6 h-6 text-blue-500 mr-3" />
                      <div>
                        <div className="font-medium">Competition: 👥 Higher</div>
                        <div className="text-sm text-gray-600">More candidates, but more opportunities</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded">
                      <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                      <div>
                        <div className="font-medium">Industries: 🌐 Diverse</div>
                        <div className="text-sm text-gray-600">Finance, healthcare, research, web dev</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Paths */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Typical Career Progression Paths</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">Go Developer Career Path</h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium text-gray-800">Junior Go Developer</div>
                        <div className="text-sm text-gray-600 mt-1">Basic Go syntax, simple web services</div>
                        <div className="text-xs text-green-600 font-medium mt-1">$85k - $120k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium text-gray-800">Mid-Level Go Developer</div>
                        <div className="text-sm text-gray-600 mt-1">Microservices, concurrency patterns, APIs</div>
                        <div className="text-xs text-green-600 font-medium mt-1">$120k - $160k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium text-gray-800">Senior/Lead Go Developer</div>
                        <div className="text-sm text-gray-600 mt-1">System architecture, team leadership</div>
                        <div className="text-xs text-green-600 font-medium mt-1">$160k - $220k+</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                      <div>
                        <div className="font-medium text-gray-800">Specialization Options</div>
                        <div className="text-sm text-gray-600 mt-1">DevOps Engineer, Cloud Architect, CTO</div>
                        <div className="text-xs text-green-600 font-medium mt-1">$180k - $300k+</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Python Developer Career Path</h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                      <div>
                        <div className="font-medium text-gray-800">Junior Python Developer</div>
                        <div className="text-sm text-gray-600 mt-1">Basic Python, web frameworks, scripting</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">$70k - $100k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                      <div>
                        <div className="font-medium text-gray-800">Mid-Level Python Developer</div>
                        <div className="text-sm text-gray-600 mt-1">Full-stack web dev, data analysis, testing</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">$100k - $140k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                      <div>
                        <div className="font-medium text-gray-800">Senior Python Developer</div>
                        <div className="text-sm text-gray-600 mt-1">Advanced frameworks, architecture, optimization</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">$140k - $200k</div>
                      </div>
                    </div>
                    <div className="flex items-start p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                      <div>
                        <div className="font-medium text-gray-800">Specialization Options</div>
                        <div className="text-sm text-gray-600 mt-1">Data Scientist, ML Engineer, Tech Lead</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">$150k - $350k+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Outlook */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">5-Year Future Outlook</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Go's Future 📈</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Cloud-native dominance:</strong> More companies adopting microservices</li>
                    <li>• <strong>Performance critical apps:</strong> Growing demand for efficient backend services</li>
                    <li>• <strong>DevOps integration:</strong> Kubernetes ecosystem driving adoption</li>
                    <li>• <strong>Enterprise adoption:</strong> Large companies recognizing Go's benefits</li>
                    <li>• <strong>Continued growth:</strong> Expected 20-30% yearly job market growth</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">Python's Future 🚀</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>AI/ML explosion:</strong> Leading the artificial intelligence revolution</li>
                    <li>• <strong>Data science growth:</strong> Every company needs data analysis</li>
                    <li>• <strong>Automation trends:</strong> Increasing demand for process automation</li>
                    <li>• <strong>Education sector:</strong> Becoming the standard teaching language</li>
                    <li>• <strong>Stable demand:</strong> Expected 15-20% yearly growth in opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Choose Your Path?</h2>
          <p className="text-lg mb-6 opacity-90">
            Both Go and Python are excellent choices with strong career prospects. Your decision should align with your interests, career goals, and the type of problems you want to solve.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Choose Go If You Want:</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• High-performance backend development</li>
                <li>• Cloud and infrastructure work</li>
                <li>• Higher starting salaries</li>
                <li>• Less competition for jobs</li>
              </ul>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Choose Python If You Want:</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Data science and machine learning</li>
                <li>• Rapid development and prototyping</li>
                <li>• More job opportunities</li>
                <li>• Easier learning curve</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Start Learning Go
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Start Learning Python
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
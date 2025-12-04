'use client'

import { useState } from 'react'
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  User, 
  Calendar, 
  Code, 
  Database, 
  Globe, 
  Zap, 
  TrendingUp,
  Brain,
  Monitor,
  Server,
  Smartphone
} from 'lucide-react'
import Link from 'next/link'

export default function PythonVsJavaScriptPage() {
  const [activeSection, setActiveSection] = useState('intro')

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Guides Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors duration-200"
        >
          <Link href="/guides" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Career Path Team</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>Updated November 2025</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Python vs JavaScript: The Ultimate Guide for 2025
              </h1>

              {/* Hero Image */}
              <div className="rounded-lg p-8 mb-6 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #3776ab 0%, #f7df1e 50%, #764abc 100%)'}}>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Python vs JavaScript</h2>
                  <h3 className="text-xl text-blue-100 mb-4">The Ultimate Programming Language Comparison</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">PY</span>
                      </div>
                      <span className="text-white font-semibold">vs</span>
                      <div className="w-16 h-16 bg-yellow-400 rounded flex items-center justify-center">
                        <span className="text-black font-bold text-lg">JS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white/90 text-sm font-bold">
                  CareerPath.com
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Choosing between Python and JavaScript is one of the most important decisions for aspiring developers. 
                Both languages dominate their respective domains, but they serve very different purposes in the programming world.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg overflow-x-auto">
              {[
                { id: 'intro', name: 'Quick Guide', icon: <Zap className="w-4 h-4" /> },
                { id: 'comparison', name: 'Comparison', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'career', name: 'Career Paths', icon: <User className="w-4 h-4" /> },
                { id: 'projects', name: 'Project Types', icon: <Code className="w-4 h-4" /> },
                { id: 'proscons', name: 'Pros & Cons', icon: <CheckCircle className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-colors whitespace-nowrap ${
                    activeSection === tab.id 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Quick Recommendations Section */}
            {activeSection === 'intro' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Recommendations (TL;DR)</h2>
                
                {/* Choose JavaScript */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-900">Choose JavaScript if your primary goal is building for the web</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🎨 Front-End Web Development</h4>
                      <p className="text-gray-700 text-sm">
                        JavaScript is the only language that runs natively in web browsers. If you want to create interactive 
                        user interfaces, handle user interactions, or build modern single-page applications, JavaScript is essential.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">⚡ Full-Stack Development</h4>
                      <p className="text-gray-700 text-sm">
                        With Node.js, you can use JavaScript for both frontend and backend development. This allows you to 
                        build complete web applications using a single language, streamlining your development workflow.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">📱 Mobile App Development</h4>
                      <p className="text-gray-700 text-sm">
                        Frameworks like React Native and Expo allow you to build mobile apps for both iOS and Android 
                        using JavaScript, making it possible to target multiple platforms with one codebase.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Choose Python */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Choose Python if you're interested in data, AI, or scientific computing</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🔬 Data Science & Machine Learning</h4>
                      <p className="text-gray-700 text-sm">
                        Python's ecosystem of libraries (Pandas, NumPy, Scikit-learn, TensorFlow) makes it the industry 
                        standard for data analysis, machine learning, and artificial intelligence development.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🖥️ Backend Web Development</h4>
                      <p className="text-gray-700 text-sm">
                        Python's clean syntax and powerful frameworks like Django and Flask make it excellent for building 
                        robust, scalable backend systems and APIs.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🤖 Automation & Scripting</h4>
                      <p className="text-gray-700 text-sm">
                        Python excels at automating repetitive tasks, web scraping, system administration, and creating 
                        utility scripts due to its simple syntax and extensive standard library.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Comparison Table Section */}
            {activeSection === 'comparison' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Python vs JavaScript: Detailed Comparison</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Aspect</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 border-b">Python</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-yellow-600 border-b">JavaScript</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Primary Domain</td>
                        <td className="px-6 py-4 text-gray-700">Data Science, AI, Backend Development, Automation</td>
                        <td className="px-6 py-4 text-gray-700">Web Development (Frontend & Backend), Mobile Apps</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Syntax Style</td>
                        <td className="px-6 py-4 text-gray-700">Clean, readable, English-like syntax</td>
                        <td className="px-6 py-4 text-gray-700">C-style syntax with curly braces and semicolons</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Learning Curve</td>
                        <td className="px-6 py-4 text-gray-700">Gentle learning curve, beginner-friendly</td>
                        <td className="px-6 py-4 text-gray-700">Steeper initial curve due to web environment complexity</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Type System</td>
                        <td className="px-6 py-4 text-gray-700">Dynamically typed (optional static typing with mypy)</td>
                        <td className="px-6 py-4 text-gray-700">Dynamically typed (TypeScript adds static typing)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Performance</td>
                        <td className="px-6 py-4 text-gray-700">Generally slower, but optimized libraries for data tasks</td>
                        <td className="px-6 py-4 text-gray-700">Faster execution, especially with V8 engine</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Key Strengths</td>
                        <td className="px-6 py-4 text-gray-700">Data libraries, AI/ML ecosystem, code readability</td>
                        <td className="px-6 py-4 text-gray-700">Web browser compatibility, vast npm ecosystem</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Popular Frameworks</td>
                        <td className="px-6 py-4 text-gray-700">Django, Flask, FastAPI, Pandas, TensorFlow</td>
                        <td className="px-6 py-4 text-gray-700">React, Vue, Angular, Express.js, Next.js</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Career Paths Section */}
            {activeSection === 'career' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Path Comparison</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* JavaScript Career Path */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Monitor className="w-8 h-8 text-yellow-600" />
                      <h3 className="text-xl font-bold text-gray-900">JavaScript Career Path</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🎨 Frontend Developer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $75,000 - $120,000</p>
                        <p className="text-sm text-gray-700">Create user interfaces, implement designs, optimize user experience</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🔄 Full-Stack Developer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $85,000 - $140,000</p>
                        <p className="text-sm text-gray-700">Work on both frontend and backend using JavaScript ecosystem</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">📱 Mobile App Developer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $80,000 - $130,000</p>
                        <p className="text-sm text-gray-700">Build cross-platform mobile apps with React Native or similar</p>
                      </div>
                      
                      <div className="bg-yellow-100 p-3 rounded-md">
                        <p className="text-sm text-yellow-800">
                          <strong>Best for:</strong> Visual learners, those who enjoy immediate feedback, 
                          and developers who want to see their work in action quickly.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Python Career Path */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Python Career Path</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🔬 Data Scientist</h4>
                        <p className="text-sm text-gray-600">Average Salary: $95,000 - $160,000</p>
                        <p className="text-sm text-gray-700">Analyze data, build predictive models, extract business insights</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🤖 Machine Learning Engineer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $100,000 - $180,000</p>
                        <p className="text-sm text-gray-700">Develop AI systems, deploy ML models, optimize algorithms</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🖥️ Backend Developer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $80,000 - $135,000</p>
                        <p className="text-sm text-gray-700">Build APIs, manage databases, handle server-side logic</p>
                      </div>
                      
                      <div className="bg-blue-100 p-3 rounded-md">
                        <p className="text-sm text-blue-800">
                          <strong>Best for:</strong> Analytical thinkers, math enthusiasts, 
                          and those interested in solving complex problems with data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Project Types Section */}
            {activeSection === 'projects' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Each Language</h2>
                
                {/* JavaScript Projects */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-yellow-600">Choose JavaScript for:</h3>
                  
                  <div className="grid gap-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🌐 Interactive Websites</h4>
                      <p className="text-gray-700 text-sm">
                        Any website that needs user interaction, form validation, dynamic content updates, 
                        or visual effects requires JavaScript.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📱 Single-Page Applications (SPAs)</h4>
                      <p className="text-gray-700 text-sm">
                        Complex web applications like Gmail, Facebook, or Twitter that update content 
                        without page refreshes are built with JavaScript frameworks.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">⚡ Real-Time Applications</h4>
                      <p className="text-gray-700 text-sm">
                        Chat applications, live dashboards, multiplayer games, and collaborative tools 
                        benefit from JavaScript's event-driven architecture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Python Projects */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-600">Choose Python for:</h3>
                  
                  <div className="grid gap-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🤖 Machine Learning Models</h4>
                      <p className="text-gray-700 text-sm">
                        Image recognition, natural language processing, recommendation systems, 
                        and predictive analytics are Python's sweet spot.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📊 Data Analysis & Visualization</h4>
                      <p className="text-gray-700 text-sm">
                        Processing large datasets, creating reports, statistical analysis, 
                        and generating charts and graphs for business intelligence.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🔧 Automation Scripts</h4>
                      <p className="text-gray-700 text-sm">
                        Web scraping, file organization, system administration, 
                        and automating repetitive tasks across different platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pros and Cons Section */}
            {activeSection === 'proscons' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Pros & Cons</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Python Pros & Cons */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Python</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Pros
                        </h4>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li>• <strong>Readable Syntax:</strong> Almost like plain English, easy to learn</li>
                          <li>• <strong>Rich Libraries:</strong> Extensive ecosystem for data science and AI</li>
                          <li>• <strong>Versatility:</strong> Great for scripting, web dev, and scientific computing</li>
                          <li>• <strong>Community:</strong> Strong support and extensive documentation</li>
                          <li>• <strong>Cross-Platform:</strong> Runs on Windows, Mac, Linux seamlessly</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                          <XCircle className="w-5 h-5" />
                          Cons
                        </h4>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li>• <strong>Performance:</strong> Slower execution compared to compiled languages</li>
                          <li>• <strong>Mobile Development:</strong> Limited options for native mobile apps</li>
                          <li>• <strong>Memory Usage:</strong> Can consume more memory than other languages</li>
                          <li>• <strong>GIL Limitation:</strong> Global Interpreter Lock limits true multithreading</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* JavaScript Pros & Cons */}
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-600 mb-4">JavaScript</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Pros
                        </h4>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li>• <strong>Web Dominance:</strong> The only language that runs in all browsers</li>
                          <li>• <strong>Full-Stack:</strong> Use one language for frontend and backend</li>
                          <li>• <strong>Fast Development:</strong> See results immediately in the browser</li>
                          <li>• <strong>Huge Ecosystem:</strong> NPM has millions of packages available</li>
                          <li>• <strong>Event-Driven:</strong> Perfect for interactive and real-time apps</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                          <XCircle className="w-5 h-5" />
                          Cons
                        </h4>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li>• <strong>Complexity:</strong> Asynchronous programming can be confusing</li>
                          <li>• <strong>Rapid Changes:</strong> Framework fatigue from constantly evolving ecosystem</li>
                          <li>• <strong>Browser Differences:</strong> Inconsistent behavior across browsers</li>
                          <li>• <strong>Debugging:</strong> Dynamic typing can lead to runtime errors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decision Framework */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Decision Framework</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">1</span>
                      <p className="text-gray-700">
                        <strong>Want to build websites or web apps?</strong> → Choose JavaScript
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">2</span>
                      <p className="text-gray-700">
                        <strong>Interested in data science or AI?</strong> → Choose Python
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">3</span>
                      <p className="text-gray-700">
                        <strong>Want the easiest learning curve?</strong> → Choose Python
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">4</span>
                      <p className="text-gray-700">
                        <strong>Need immediate visual feedback?</strong> → Choose JavaScript
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-80 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="space-y-3">
                <Link href="/guides/javascript-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  JavaScript Interview Questions
                </Link>
                <Link href="/guides/python-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Python Interview Questions
                </Link>
                <Link href="/guides/how-long-to-learn-javascript" className="block text-blue-600 hover:text-blue-800 text-sm">
                  How Long to Learn JavaScript?
                </Link>
                <Link href="/guides/golang-vs-rust" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Go vs Rust Comparison
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Start Learning?
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Both Python and JavaScript offer excellent career opportunities. Choose based on your interests and goals.
              </p>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <Code className="w-4 h-4" />
                View Learning Roadmaps
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Takeaways</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p>JavaScript is essential for web development</p>
                </div>
                <div className="flex items-start gap-2">
                  <Brain className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>Python dominates data science and AI</p>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Both offer excellent career prospects</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>You can learn both over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
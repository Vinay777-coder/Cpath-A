'use client'

import { useState } from 'react'
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  User, 
  Calendar, 
  Code, 
  Zap, 
  TrendingUp,
  Server,
  Shield,
  Cpu,
  Globe,
  Settings,
  Gauge
} from 'lucide-react'
import Link from 'next/link'

export default function GoVsRustPage() {
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
                Go vs Rust: Which Programming Language is Right for You?
              </h1>

              {/* Hero Image */}
              <div className="rounded-lg p-8 mb-6 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #00add8 0%, #ce422b 50%, #dea584 100%)'}}>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Go vs Rust</h2>
                  <h3 className="text-xl text-blue-100 mb-4">Systems Programming Language Showdown</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">GO</span>
                      </div>
                      <span className="text-white font-semibold">vs</span>
                      <div className="w-16 h-16 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-lg">RS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white/90 text-sm font-bold">
                  CareerPath.com
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Go and Rust are two of the most exciting modern programming languages, both designed to solve today's 
                software challenges. While both offer excellent performance and are compiled languages, they serve very different purposes.
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
                
                {/* Choose Go */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Choose Go if you prioritize simplicity and fast development</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🚀 Microservices & API Development</h4>
                      <p className="text-gray-700 text-sm">
                        Go was designed for building scalable network services. Its excellent concurrency model with Goroutines 
                        makes it perfect for handling thousands of simultaneous connections with minimal overhead.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">☁️ DevOps & Cloud Tools</h4>
                      <p className="text-gray-700 text-sm">
                        Docker, Kubernetes, and many other cloud-native tools are built with Go. Single binary deployment 
                        makes distribution incredibly simple - just copy and run, no dependencies needed.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">⚡ Data Processing Pipelines</h4>
                      <p className="text-gray-700 text-sm">
                        Go's concurrent programming model excels at building data processing systems that can efficiently 
                        utilize all CPU cores while maintaining simple, readable code.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Choose Rust */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">Choose Rust if you need maximum performance and safety</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🔧 Systems Programming</h4>
                      <p className="text-gray-700 text-sm">
                        Rust provides C/C++ level performance with memory safety guarantees. Perfect for operating systems, 
                        database engines, and other foundational software where bugs can be catastrophic.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🎮 Performance-Critical Applications</h4>
                      <p className="text-gray-700 text-sm">
                        Game engines, real-time systems, and high-frequency trading platforms benefit from Rust's 
                        zero-cost abstractions and predictable performance without garbage collection pauses.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🤖 Embedded & IoT Systems</h4>
                      <p className="text-gray-700 text-sm">
                        Rust's precise memory control and small runtime footprint make it ideal for resource-constrained 
                        devices where every byte and cycle matters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Comparison Table Section */}
            {activeSection === 'comparison' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Go vs Rust: Detailed Comparison</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Aspect</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 border-b">Go</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-orange-600 border-b">Rust</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Core Philosophy</td>
                        <td className="px-6 py-4 text-gray-700">Simplicity first, rapid development for teams</td>
                        <td className="px-6 py-4 text-gray-700">Safety without compromise, maximum performance</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Memory Management</td>
                        <td className="px-6 py-4 text-gray-700">Garbage collection (automatic, convenient)</td>
                        <td className="px-6 py-4 text-gray-700">Ownership system (compile-time, zero-cost)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Performance</td>
                        <td className="px-6 py-4 text-gray-700">Fast, but GC can cause small pauses</td>
                        <td className="px-6 py-4 text-gray-700">Extremely fast, predictable performance</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Learning Curve</td>
                        <td className="px-6 py-4 text-gray-700">Gentle, productive in days</td>
                        <td className="px-6 py-4 text-gray-700">Steep, requires significant investment</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Concurrency</td>
                        <td className="px-6 py-4 text-gray-700">Goroutines & channels (simple, intuitive)</td>
                        <td className="px-6 py-4 text-gray-700">Async/await & threads (powerful, complex)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Compilation Speed</td>
                        <td className="px-6 py-4 text-gray-700">Very fast compilation times</td>
                        <td className="px-6 py-4 text-gray-700">Slower compilation, but improving</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Error Handling</td>
                        <td className="px-6 py-4 text-gray-700">Explicit `if err != nil` pattern</td>
                        <td className="px-6 py-4 text-gray-700">Result&lt;T, E&gt; and Option&lt;T&gt; types</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Best Use Cases</td>
                        <td className="px-6 py-4 text-gray-700">Web backends, cloud services, CLI tools</td>
                        <td className="px-6 py-4 text-gray-700">Systems programming, embedded, game engines</td>
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
                  {/* Go Career Path */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Go Career Path</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🌐 Backend Developer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $90,000 - $150,000</p>
                        <p className="text-sm text-gray-700">Build scalable APIs, microservices, and web backends</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">☁️ DevOps Engineer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $95,000 - $160,000</p>
                        <p className="text-sm text-gray-700">Create infrastructure tools and automation systems</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">📊 Site Reliability Engineer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $100,000 - $170,000</p>
                        <p className="text-sm text-gray-700">Ensure system reliability and performance at scale</p>
                      </div>
                      
                      <div className="bg-blue-100 p-3 rounded-md">
                        <p className="text-sm text-blue-800">
                          <strong>Work Environment:</strong> Startups to tech giants, fast-paced product teams, 
                          focus on shipping reliable software quickly.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rust Career Path */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu className="w-8 h-8 text-orange-600" />
                      <h3 className="text-xl font-bold text-gray-900">Rust Career Path</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🔧 Systems Programmer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $100,000 - $180,000</p>
                        <p className="text-sm text-gray-700">Build operating systems, databases, and core infrastructure</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🎮 Game Engine Developer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $95,000 - $170,000</p>
                        <p className="text-sm text-gray-700">Create high-performance game engines and real-time systems</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🤖 Embedded Systems Engineer</h4>
                        <p className="text-sm text-gray-600">Average Salary: $90,000 - $160,000</p>
                        <p className="text-sm text-gray-700">Develop firmware for IoT devices and embedded systems</p>
                      </div>
                      
                      <div className="bg-orange-100 p-3 rounded-md">
                        <p className="text-sm text-orange-800">
                          <strong>Work Environment:</strong> Big tech infrastructure teams, automotive, aerospace, 
                          gaming companies, focus on correctness and performance.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose Based on Project Type</h2>
                
                {/* Go Projects */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-600">Choose Go for:</h3>
                  
                  <div className="grid gap-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🌐 REST APIs & Microservices</h4>
                      <p className="text-gray-700 text-sm">
                        Go's HTTP standard library and Goroutines make it perfect for building scalable web services 
                        that can handle thousands of concurrent requests efficiently.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🔧 CLI Tools & DevOps</h4>
                      <p className="text-gray-700 text-sm">
                        Single binary compilation means no dependency management headaches. Perfect for creating 
                        portable tools that work across different environments.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📊 Data Processing Pipelines</h4>
                      <p className="text-gray-700 text-sm">
                        Channels and Goroutines create elegant concurrent data processing systems that are easy 
                        to understand and maintain while utilizing all available CPU cores.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rust Projects */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-orange-600">Choose Rust for:</h3>
                  
                  <div className="grid gap-4">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🏎️ High-Performance Applications</h4>
                      <p className="text-gray-700 text-sm">
                        When every microsecond matters - game engines, trading systems, real-time audio/video processing. 
                        Rust's zero-cost abstractions provide C++ performance with safety.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🔒 Systems & Security Software</h4>
                      <p className="text-gray-700 text-sm">
                        Operating system components, database engines, cryptographic libraries. Memory safety 
                        guarantees prevent entire classes of security vulnerabilities.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🤖 Embedded & IoT Systems</h4>
                      <p className="text-gray-700 text-sm">
                        Resource-constrained devices where you need precise control over memory and CPU usage. 
                        Rust provides safety without the overhead of a garbage collector.
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
                  {/* Go Pros & Cons */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Go (Golang)</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Pros
                        </h4>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li>• <strong>Simple Learning Curve:</strong> Clean syntax, small language spec</li>
                          <li>• <strong>Fast Compilation:</strong> Near-instant build times for rapid iteration</li>
                          <li>• <strong>Excellent Concurrency:</strong> Goroutines make concurrent programming easy</li>
                          <li>• <strong>Strong Standard Library:</strong> Built-in HTTP, JSON, crypto support</li>
                          <li>• <strong>Single Binary:</strong> No dependency hell, easy deployment</li>
                          <li>• <strong>Great Tooling:</strong> Built-in formatter, linter, and test runner</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                          <XCircle className="w-5 h-5" />
                          Cons
                        </h4>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li>• <strong>Garbage Collector:</strong> Can cause unpredictable pauses</li>
                          <li>• <strong>Verbose Error Handling:</strong> Repetitive `if err != nil` checks</li>
                          <li>• <strong>Limited Generics:</strong> Less flexible than other modern languages</li>
                          <li>• <strong>Simplicity Trade-offs:</strong> Sometimes forces verbose solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Rust Pros & Cons */}
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Rust</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Pros
                        </h4>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li>• <strong>Memory Safety:</strong> Prevents crashes and security vulnerabilities</li>
                          <li>• <strong>Zero-Cost Abstractions:</strong> High-level code with C++ performance</li>
                          <li>• <strong>Fearless Concurrency:</strong> Compiler prevents data races</li>
                          <li>• <strong>Excellent Tooling:</strong> Cargo package manager and build system</li>
                          <li>• <strong>Growing Ecosystem:</strong> High-quality crates for everything</li>
                          <li>• <strong>No Runtime Overhead:</strong> Predictable performance, no GC</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                          <XCircle className="w-5 h-5" />
                          Cons
                        </h4>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li>• <strong>Steep Learning Curve:</strong> Borrow checker can be frustrating</li>
                          <li>• <strong>Slower Development:</strong> More time fighting the compiler</li>
                          <li>• <strong>Complex Syntax:</strong> More mental overhead than Go</li>
                          <li>• <strong>Longer Compile Times:</strong> Can slow down development workflow</li>
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
                        <strong>Need maximum performance and safety?</strong> → Choose Rust
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">2</span>
                      <p className="text-gray-700">
                        <strong>Building web backends or network services?</strong> → Choose Go
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">3</span>
                      <p className="text-gray-700">
                        <strong>Working on embedded or systems programming?</strong> → Choose Rust
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">4</span>
                      <p className="text-gray-700">
                        <strong>Want to get productive quickly?</strong> → Choose Go
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
                <Link href="/guides/python-vs-javascript" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Python vs JavaScript Guide
                </Link>
                <Link href="/guides/nodejs-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Node.js Interview Questions
                </Link>
                <Link href="/guides/javascript-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  JavaScript Interview Questions
                </Link>
                <Link href="/guides/golang-vs-python" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Go vs Python Comparison
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Choose?
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Both Go and Rust offer excellent career opportunities in different domains. 
                Choose based on your project needs and learning preferences.
              </p>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-orange-700 transition-colors"
              >
                <Code className="w-4 h-4" />
                Explore Learning Paths
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Comparison</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Learning Curve</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Go: Easy</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Rust: Hard</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Performance</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Go: Fast</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Rust: Fastest</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Memory Safety</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Go: GC</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Rust: Zero-cost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
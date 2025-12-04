'use client'

import { useState } from 'react'
import { 
  ArrowLeft, 
  Monitor, 
  Palette,
  Code,
  Github,
  ExternalLink,
  Star,
  Eye,
  Users,
  Award,
  Briefcase,
  Target,
  Globe,
  Smartphone,
  Layers,
  Database,
  Settings,
  TrendingUp,
  MessageCircle,
  Download,
  Share2,
  Heart,
  Coffee,
  Lightbulb,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react'
import Link from 'next/link'

export default function WebDeveloperPortfolioPage() {
  const [activeTab, setActiveTab] = useState('essentials')

  const portfolioEssentials = [
    {
      title: 'Home/Landing Page',
      description: 'First impression with clear value proposition',
      icon: <Monitor className="w-5 h-5" />,
      elements: [
        'Professional headshot or avatar',
        'Brief compelling introduction',
        'Key skills and technologies',
        'Call-to-action buttons',
        'Navigation menu'
      ],
      tips: [
        'Keep it clean and uncluttered',
        'Use consistent branding',
        'Ensure fast loading times',
        'Mobile-first responsive design'
      ]
    },
    {
      title: 'About Section',
      description: 'Your story and professional journey',
      icon: <Users className="w-5 h-5" />,
      elements: [
        'Professional background',
        'Technical expertise',
        'Career goals and passion',
        'Personal interests',
        'Contact information'
      ],
      tips: [
        'Write in first person',
        'Show personality while staying professional',
        'Include a professional photo',
        'Keep it concise but engaging'
      ]
    },
    {
      title: 'Projects Showcase',
      description: 'Demonstrate your technical abilities',
      icon: <Code className="w-5 h-5" />,
      elements: [
        'Project thumbnails/screenshots',
        'Technology stack used',
        'Live demo links',
        'Source code repositories',
        'Problem solved and impact'
      ],
      tips: [
        'Quality over quantity (3-6 best projects)',
        'Include diverse project types',
        'Show progression in complexity',
        'Document your process'
      ]
    },
    {
      title: 'Skills & Technologies',
      description: 'Technical proficiency overview',
      icon: <Settings className="w-5 h-5" />,
      elements: [
        'Programming languages',
        'Frameworks and libraries',
        'Tools and platforms',
        'Databases and APIs',
        'Soft skills'
      ],
      tips: [
        'Organize by categories',
        'Use visual indicators (progress bars)',
        'Focus on relevant skills',
        'Include proficiency levels'
      ]
    },
    {
      title: 'Contact & Social',
      description: 'Easy ways to connect with you',
      icon: <MessageCircle className="w-5 h-5" />,
      elements: [
        'Contact form or email',
        'LinkedIn profile',
        'GitHub repositories',
        'Twitter/social media',
        'Resume download link'
      ],
      tips: [
        'Make contact information prominent',
        'Ensure all links work',
        'Keep profiles updated',
        'Professional email address'
      ]
    }
  ]

  const projectTypes = [
    {
      category: 'Full-Stack Applications',
      icon: <Layers className="w-6 h-6" />,
      difficulty: 'Advanced',
      examples: [
        {
          name: 'E-commerce Platform',
          tech: 'React, Node.js, MongoDB, Stripe',
          features: ['User authentication', 'Payment processing', 'Admin dashboard', 'Inventory management']
        },
        {
          name: 'Social Media Dashboard',
          tech: 'Vue.js, Express, PostgreSQL, Socket.io',
          features: ['Real-time messaging', 'Content management', 'Analytics', 'User profiles']
        },
        {
          name: 'Project Management Tool',
          tech: 'Angular, .NET Core, SQL Server',
          features: ['Task tracking', 'Team collaboration', 'File sharing', 'Reporting']
        }
      ],
      impact: 'Shows end-to-end development skills'
    },
    {
      category: 'Frontend Showcases',
      icon: <Palette className="w-6 h-6" />,
      difficulty: 'Intermediate',
      examples: [
        {
          name: 'Interactive Data Visualization',
          tech: 'D3.js, React, Chart.js',
          features: ['Real-time updates', 'Interactive charts', 'Data filtering', 'Export functionality']
        },
        {
          name: 'Responsive Landing Page',
          tech: 'HTML5, CSS3, JavaScript, GSAP',
          features: ['Smooth animations', 'Mobile optimization', 'Performance optimization', 'Accessibility']
        },
        {
          name: 'Component Library',
          tech: 'React, Storybook, TypeScript',
          features: ['Reusable components', 'Documentation', 'Testing', 'npm package']
        }
      ],
      impact: 'Demonstrates UI/UX and design skills'
    },
    {
      category: 'API & Backend Projects',
      icon: <Database className="w-6 h-6" />,
      difficulty: 'Intermediate',
      examples: [
        {
          name: 'RESTful API Service',
          tech: 'Node.js, Express, MongoDB, JWT',
          features: ['Authentication', 'CRUD operations', 'Rate limiting', 'API documentation']
        },
        {
          name: 'GraphQL Server',
          tech: 'Apollo Server, Prisma, PostgreSQL',
          features: ['Schema design', 'Query optimization', 'Subscriptions', 'Caching']
        },
        {
          name: 'Microservices Architecture',
          tech: 'Docker, Kubernetes, Redis',
          features: ['Service communication', 'Load balancing', 'Health monitoring', 'CI/CD pipeline']
        }
      ],
      impact: 'Shows backend and architecture expertise'
    },
    {
      category: 'Mobile Applications',
      icon: <Smartphone className="w-6 h-6" />,
      difficulty: 'Advanced',
      examples: [
        {
          name: 'React Native App',
          tech: 'React Native, Redux, Firebase',
          features: ['Cross-platform', 'Push notifications', 'Offline functionality', 'App store deployment']
        },
        {
          name: 'Progressive Web App',
          tech: 'Service Workers, IndexedDB, PWA',
          features: ['Offline support', 'Push notifications', 'App-like experience', 'Performance optimization']
        },
        {
          name: 'Flutter Application',
          tech: 'Flutter, Dart, SQLite',
          features: ['Native performance', 'Custom animations', 'Local storage', 'Platform integration']
        }
      ],
      impact: 'Demonstrates mobile development capabilities'
    }
  ]

  const portfolioTips = [
    {
      phase: 'Planning & Design',
      icon: <Target className="w-6 h-6" />,
      strategies: [
        {
          tip: 'Define Your Brand',
          description: 'Establish consistent colors, fonts, and visual identity',
          importance: 'High',
          timeToImplement: '2-3 hours'
        },
        {
          tip: 'Research Competitors',
          description: 'Study other developer portfolios for inspiration',
          importance: 'Medium',
          timeToImplement: '1-2 hours'
        },
        {
          tip: 'Plan User Journey',
          description: 'Map out how visitors will navigate through your portfolio',
          importance: 'High',
          timeToImplement: '1 hour'
        },
        {
          tip: 'Choose Tech Stack',
          description: 'Select technologies that align with your target roles',
          importance: 'High',
          timeToImplement: '30 minutes'
        }
      ]
    },
    {
      phase: 'Content Creation',
      icon: <Code className="w-6 h-6" />,
      strategies: [
        {
          tip: 'Document Your Process',
          description: 'Create case studies showing your problem-solving approach',
          importance: 'High',
          timeToImplement: '2-4 hours per project'
        },
        {
          tip: 'Write Clean Code',
          description: 'Ensure your portfolio code itself is exemplary',
          importance: 'High',
          timeToImplement: 'Ongoing'
        },
        {
          tip: 'Create Compelling Copy',
          description: 'Write engaging descriptions that highlight impact',
          importance: 'Medium',
          timeToImplement: '1-2 hours'
        },
        {
          tip: 'Professional Photography',
          description: 'Invest in quality photos and screenshots',
          importance: 'Medium',
          timeToImplement: '2-3 hours'
        }
      ]
    },
    {
      phase: 'Technical Implementation',
      icon: <Settings className="w-6 h-6" />,
      strategies: [
        {
          tip: 'Performance Optimization',
          description: 'Optimize images, minimize bundles, enable caching',
          importance: 'High',
          timeToImplement: '3-4 hours'
        },
        {
          tip: 'SEO Optimization',
          description: 'Implement meta tags, structured data, and sitemap',
          importance: 'Medium',
          timeToImplement: '2-3 hours'
        },
        {
          tip: 'Accessibility Compliance',
          description: 'Ensure WCAG compliance and screen reader compatibility',
          importance: 'High',
          timeToImplement: '2-4 hours'
        },
        {
          tip: 'Analytics Integration',
          description: 'Add Google Analytics or similar tracking',
          importance: 'Low',
          timeToImplement: '30 minutes'
        }
      ]
    },
    {
      phase: 'Launch & Promotion',
      icon: <TrendingUp className="w-6 h-6" />,
      strategies: [
        {
          tip: 'Domain & Hosting',
          description: 'Use professional domain name and reliable hosting',
          importance: 'High',
          timeToImplement: '1 hour'
        },
        {
          tip: 'Social Media Integration',
          description: 'Share on LinkedIn, Twitter, and developer communities',
          importance: 'Medium',
          timeToImplement: '1-2 hours'
        },
        {
          tip: 'Continuous Updates',
          description: 'Regularly add new projects and update content',
          importance: 'High',
          timeToImplement: 'Ongoing'
        },
        {
          tip: 'Gather Feedback',
          description: 'Ask peers and mentors for constructive feedback',
          importance: 'Medium',
          timeToImplement: '1-2 hours'
        }
      ]
    }
  ]

  const commonMistakes = [
    {
      mistake: 'Too Many Projects',
      description: 'Including every project ever built instead of curating the best',
      solution: 'Select 3-6 high-quality, diverse projects that show growth and different skills',
      impact: 'Dilutes your strongest work'
    },
    {
      mistake: 'No Live Demos',
      description: 'Only showing screenshots without working applications',
      solution: 'Deploy projects to platforms like Vercel, Netlify, or Heroku for live demonstrations',
      impact: 'Employers cannot interact with your work'
    },
    {
      mistake: 'Poor Mobile Experience',
      description: 'Portfolio not optimized for mobile devices',
      solution: 'Implement responsive design and test on various devices and screen sizes',
      impact: 'Eliminates mobile users and shows poor attention to detail'
    },
    {
      mistake: 'Outdated Information',
      description: 'Old projects, broken links, or stale content',
      solution: 'Regular maintenance schedule to update projects, fix links, and refresh content',
      impact: 'Creates impression of being out of touch'
    },
    {
      mistake: 'No Contact Information',
      description: 'Making it difficult for employers to reach you',
      solution: 'Clear contact section with multiple ways to connect (email, LinkedIn, etc.)',
      impact: 'Missed opportunities due to poor accessibility'
    },
    {
      mistake: 'Generic Design',
      description: 'Using templates without customization or personal branding',
      solution: 'Customize templates significantly or create original design reflecting your style',
      impact: 'Fails to stand out from other candidates'
    }
  ]

  const platformOptions = [
    {
      platform: 'Custom Built',
      tech: 'React/Vue/Angular + Hosting',
      pros: ['Complete control', 'Shows coding skills', 'Unlimited customization'],
      cons: ['Time intensive', 'Requires maintenance', 'Hosting costs'],
      bestFor: 'Developers who want to showcase frontend skills',
      cost: '$50-200/year'
    },
    {
      platform: 'GitHub Pages',
      tech: 'Jekyll/Static Site Generators',
      pros: ['Free hosting', 'Version control', 'Easy deployment'],
      cons: ['Limited backend', 'Technical setup', 'GitHub dependency'],
      bestFor: 'Developers comfortable with Git and static sites',
      cost: 'Free'
    },
    {
      platform: 'WordPress',
      tech: 'WordPress + Premium Theme',
      pros: ['Easy to use', 'Many themes', 'Good SEO'],
      cons: ['Less customizable', 'Security concerns', 'Plugin dependencies'],
      bestFor: 'Quick setup with professional appearance',
      cost: '$100-300/year'
    },
    {
      platform: 'Portfolio Builders',
      tech: 'Webflow/Squarespace/Wix',
      pros: ['No coding required', 'Professional templates', 'Built-in features'],
      cons: ['Monthly fees', 'Limited customization', 'Platform lock-in'],
      bestFor: 'Non-technical roles or quick professional presence',
      cost: '$144-300/year'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/guides" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Guides
              </Link>
              <div className="h-6 border-l border-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <Monitor className="w-6 h-6 mr-3 text-blue-600" />
                Web Developer Portfolio Guide
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>Portfolio Development</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'essentials', label: 'Portfolio Essentials', icon: Monitor },
              { id: 'projects', label: 'Project Showcase', icon: Code },
              { id: 'strategy', label: 'Build Strategy', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Portfolio Essentials Tab */}
        {activeTab === 'essentials' && (
          <div className="space-y-8">
            {/* Essential Sections */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Monitor className="w-8 h-8 mr-3 text-blue-600" />
                Essential Portfolio Sections
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioEssentials.map((section, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{section.title}</h3>
                        <p className="text-sm text-gray-600">{section.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Key Elements:</h4>
                        <ul className="space-y-1">
                          {section.elements.map((element, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {element}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Pro Tips:</h4>
                        <ul className="space-y-1">
                          {section.tips.map((tip, idx) => (
                            <li key={idx} className="text-sm text-green-700 flex items-start">
                              <Lightbulb className="w-3 h-3 mt-0.5 mr-2 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Platform Options */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-3 text-blue-600" />
                Platform & Technology Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {platformOptions.map((platform, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{platform.platform}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {platform.cost}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{platform.tech}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Pros:</h4>
                        <ul className="space-y-1">
                          {platform.pros.map((pro, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Cons:</h4>
                        <ul className="space-y-1">
                          {platform.cons.map((con, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <XCircle className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-700">Best For: {platform.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3 text-red-600" />
                Common Portfolio Mistakes to Avoid
              </h2>
              <div className="space-y-4">
                {commonMistakes.map((mistake, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <XCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-red-900 mb-2">{mistake.mistake}</h3>
                        <p className="text-red-700 mb-3">{mistake.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-green-800 mb-1">Solution:</h4>
                            <p className="text-sm text-green-700">{mistake.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-1">Impact:</h4>
                            <p className="text-sm text-gray-700">{mistake.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Projects Showcase Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-8 h-8 mr-3 text-blue-600" />
                Project Categories & Examples
              </h2>
              <div className="space-y-8">
                {projectTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{type.category}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            type.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                            type.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {type.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-blue-600">{type.impact}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {type.examples.map((project, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-gray-900 mb-2">{project.name}</h4>
                          <p className="text-sm text-blue-600 mb-3">{project.tech}</p>
                          
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">Key Features:</h5>
                            <ul className="space-y-1">
                              {project.features.map((feature, featureIdx) => (
                                <li key={featureIdx} className="text-sm text-gray-600 flex items-center">
                                  <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Build Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-blue-600" />
                Portfolio Development Strategy
              </h2>
              <div className="space-y-8">
                {portfolioTips.map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        {phase.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {phase.strategies.map((strategy, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-gray-900">{strategy.tip}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              strategy.importance === 'High' ? 'bg-red-100 text-red-800' :
                              strategy.importance === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {strategy.importance}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-3">{strategy.description}</p>
                          
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-blue-600 font-medium">
                              <Clock className="w-4 h-4 inline mr-1" />
                              {strategy.timeToImplement}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Metrics */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                Portfolio Success Metrics
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-lg mb-4 mx-auto w-fit">
                      <Eye className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Page Views</h3>
                    <p className="text-sm text-gray-600">Track visitor engagement and content popularity</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-lg mb-4 mx-auto w-fit">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Rate</h3>
                    <p className="text-sm text-gray-600">Measure how many visitors reach out</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-yellow-100 p-4 rounded-lg mb-4 mx-auto w-fit">
                      <Download className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Resume Downloads</h3>
                    <p className="text-sm text-gray-600">Track hiring manager interest</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 p-4 rounded-lg mb-4 mx-auto w-fit">
                      <Share2 className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Social Shares</h3>
                    <p className="text-sm text-gray-600">Measure portfolio virality and reach</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Optimization Tips:</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-blue-800 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-blue-600" />
                      A/B test different layouts and content to improve conversion rates
                    </li>
                    <li className="text-sm text-blue-800 flex items-center">
                      <Coffee className="w-4 h-4 mr-2 text-blue-600" />
                      Regular updates keep content fresh and improve search rankings
                    </li>
                    <li className="text-sm text-blue-800 flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-blue-600" />
                      Mobile optimization is crucial as many recruiters browse on phones
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  )
}
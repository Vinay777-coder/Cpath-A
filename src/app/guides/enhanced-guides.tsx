'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  BookOpen,
  Clock,
  Users,
  Star,
  FileText,
  HelpCircle
} from 'lucide-react'

export default function EnhancedGuidesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Function to add default properties to guides
  const normalizeGuide = (guide: any) => ({
    ...guide,
    readTime: guide.readTime || '10 min',
    difficulty: guide.difficulty || 'Intermediate',
    content: guide.content || `Comprehensive guide covering ${guide.title.toLowerCase()}. Learn essential concepts, best practices, and practical implementation strategies.`,
    keyPoints: guide.keyPoints || [
      'Fundamental concepts and principles',
      'Best practices and methodologies', 
      'Real-world implementation examples',
      'Common challenges and solutions',
      'Tools and technologies overview',
      'Career and practical applications'
    ]
  })

  // Comprehensive guides data - 100 latest guides covering all tech topics with detailed content
  const guides = [
    {
      id: 1,
      title: '#1 - Top 80 JavaScript Coding Interview Questions and Answers',
      type: 'Question',
      url: '/guides/javascript-interview-questions',
      category: 'JavaScript',
      readTime: '25 min',
      difficulty: 'Intermediate',
      content: 'Master JavaScript interviews with our comprehensive collection of 80 most frequently asked questions. Covers ES6+, closures, promises, async/await, event loops, and advanced concepts.',
      keyPoints: [
        'Variable declarations (var, let, const)',
        'Functions and arrow functions',
        'Closures and scope',
        'Promises and async programming',
        'Event handling and DOM manipulation',
        'Modern ES6+ features'
      ]
    },
    {
      id: 2,
      title: '#2 - Python vs JavaScript: The Ultimate Guide for 2025',
      type: 'Textual',
      url: '/guides/python-vs-javascript',
      category: 'Comparison',
      readTime: '15 min',
      difficulty: 'Beginner',
      content: 'Comprehensive comparison between Python and JavaScript for different use cases. Learn which language to choose for web development, data science, automation, and career prospects in 2025.',
      keyPoints: [
        'Syntax and learning curve differences',
        'Performance and execution speed',
        'Web development capabilities',
        'Data science and AI applications',
        'Job market and salary comparison',
        'Community and ecosystem support'
      ]
    },
    {
      id: 3,
      title: '#3 - Go vs. Rust Compared: Which is right for you?',
      type: 'Textual',
      url: '/guides/golang-vs-rust',
      category: 'Comparison',
      readTime: '12 min',
      difficulty: 'Intermediate',
      content: 'In-depth comparison of Go and Rust programming languages. Analyze performance, memory safety, concurrency models, and ecosystem to make the right choice for your next project.',
      keyPoints: [
        'Memory safety and garbage collection',
        'Concurrency models and performance',
        'Learning curve and developer experience',
        'Use cases and industry adoption',
        'Package management and tooling',
        'Community and long-term support'
      ]
    },
    {
      id: 4,
      title: '#4 - Top 100 Node.js Interview Questions and Answers',
      type: 'Question',
      url: '/guides/nodejs-interview-questions',
      category: 'Node.js',
      readTime: '30 min',
      difficulty: 'Intermediate',
      content: 'Complete Node.js interview preparation guide with 100 essential questions covering fundamentals, Express.js, databases, authentication, testing, and advanced topics.',
      keyPoints: [
        'Event loop and non-blocking I/O',
        'Express.js framework basics',
        'Database integration (MongoDB, SQL)',
        'Authentication and authorization',
        'Error handling and debugging',
        'Testing and deployment strategies'
      ]
    },
    {
      id: 5,
      title: '#5 - Top 50 React Interview Questions and Answers',
      type: 'Question',
      url: '/guides/react-interview-questions',
      category: 'React',
      readTime: '25 min',
      difficulty: 'Intermediate',
      content: 'Master React interviews with comprehensive coverage of fundamentals, hooks, state management, performance optimization, testing, and advanced concepts.',
      keyPoints: [
        'React fundamentals and JSX',
        'Hooks and functional components',
        'State management and Context API',
        'Performance optimization techniques',
        'Testing React applications',
        'Advanced patterns and best practices'
      ]
    },
    {
      id: 6,
      title: '#6 - Data Analyst vs Business Analyst: Complete Comparison 2025',
      type: 'Textual',
      url: '/guides/data-analyst-vs-business-analyst',
      category: 'Career',
      readTime: '18 min',
      difficulty: 'Beginner',
      content: 'Comprehensive comparison of Data Analyst and Business Analyst roles, including responsibilities, skills, career paths, and salary expectations to help you choose the right path.',
      keyPoints: [
        'Role responsibilities and daily tasks',
        'Required technical and soft skills',
        'Career progression and salary ranges',
        'Industry applications and opportunities',
        'How to get started in each role',
        'Decision framework for career choice'
      ]
    },
    {
      id: 7,
      title: '#7 - How Long Does It Take to Learn JS? A Career Seeker\'s Guide',
      type: 'Textual',
      url: '/guides/how-long-to-learn-javascript',
      category: 'JavaScript',
      readTime: '8 min',
      difficulty: 'Beginner',
      content: 'Realistic timeline for learning JavaScript from scratch to job-ready level. Includes learning paths, milestones, and practical advice for effective skill development.',
      keyPoints: [
        'Learning timeline for different skill levels',
        'Structured learning path and milestones',
        'Factors affecting learning speed',
        'Practice projects and portfolios',
        'Job readiness indicators',
        'Common learning pitfalls to avoid'
      ]
    },
    {
      id: 8,
      title: '#8 - Is JavaScript Hard to Learn? Advice from a Pro',
      type: 'Textual',
      url: '/guides/is-javascript-hard-to-learn',
      category: 'JavaScript',
      readTime: '7 min',
      difficulty: 'Beginner',
      content: 'Honest assessment of JavaScript learning difficulty. Covers common challenges, effective learning strategies, and how to overcome obstacles in your JavaScript journey.',
      keyPoints: [
        'Common JavaScript learning challenges',
        'Effective learning strategies and resources',
        'Overcoming syntax and concept difficulties',
        'Building practical programming skills',
        'Community support and learning resources',
        'Setting realistic expectations'
      ]
    },
    {
      id: 9,
      title: '#9 - Go vs Python: Pro advice on picking the right language',
      type: 'Textual',
      url: '/guides/go-vs-python',
      category: 'Comparison',
      readTime: '12 min',
      difficulty: 'Intermediate',
      content: 'Detailed comparison between Go and Python programming languages. Analyze performance, syntax, use cases, and ecosystem to make an informed decision for your next project.',
      keyPoints: [
        'Performance benchmarks and use cases',
        'Syntax complexity and learning curve',
        'Web development capabilities',
        'Data science and automation features',
        'Community support and libraries',
        'Career prospects and industry adoption'
      ]
    },
    {
      id: 10,
      title: '#10 - Data Analyst vs. Data Engineer: Skills, Salary, and more',
      type: 'Textual',
      url: '/guides/data-analyst-vs-data-engineer',
      category: 'Career',
      readTime: '14 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive guide comparing Data Analyst and Data Engineer roles. Understand the differences in responsibilities, required skills, career paths, and compensation packages.',
      keyPoints: [
        'Core responsibilities and daily tasks',
        'Technical skills and tool requirements',
        'Educational background and certifications',
        'Salary ranges and career progression',
        'Industry demand and job market trends',
        'Transition paths between roles'
      ]
    },
    {
      id: 11,
      title: '#11 - Is SQL Hard to Learn? Complete Difficulty Analysis',
      type: 'Textual',
      url: '/guides/is-sql-hard-to-learn',
      category: 'SQL',
      readTime: '12 min',
      difficulty: 'Beginner',
      content: 'Comprehensive analysis of SQL learning difficulty with practical strategies, common challenges, and realistic timeline expectations for beginners.',
      keyPoints: [
        'SQL difficulty breakdown by skill level',
        'Common learning challenges and solutions',
        'Effective learning strategies and resources',
        'Timeline expectations for job readiness',
        'Practice exercises and project ideas',
        'Career applications and opportunities'
      ]
    },
    {
      id: 12,
      title: '#12 - How Long to Learn SQL? Realistic Timeline Guide',
      type: 'Textual',
      url: '/guides/how-long-to-learn-sql',
      category: 'SQL',
      readTime: '10 min',
      difficulty: 'Beginner',
      content: 'Realistic timeline for learning SQL from basics to advanced level, with personalized learning paths based on your background and goals.',
      keyPoints: [
        'Learning timelines for different backgrounds',
        'Beginner to advanced progression paths',
        'Skill milestones and progress tracking',
        'Factors affecting learning speed',
        'Practice schedule recommendations',
        'Job readiness assessment criteria'
      ]
    },
    {
      id: 13,
      title: '#13 - SQL vs Python: Complete Technology Comparison',
      type: 'Textual',
      url: '/guides/sql-vs-python',
      category: 'Comparison',
      readTime: '15 min',
      difficulty: 'Intermediate',
      content: 'Detailed comparison of SQL and Python for data analysis, including use cases, learning paths, and career implications.',
      keyPoints: [
        'Technology strengths and limitations',
        'Data analysis use case scenarios',
        'Learning difficulty and timeline comparison',
        'Career opportunities and salary ranges',
        'Industry adoption and job market trends',
        'Decision framework for choosing technology'
      ]
    },
    {
      id: 14,
      title: '#14 - SQL vs MySQL: Language vs Implementation Guide',
      type: 'Textual',
      url: '/guides/sql-vs-mysql',
      category: 'SQL',
      readTime: '8 min',
      difficulty: 'Beginner',
      content: 'Clear explanation of the relationship between SQL language and MySQL database system, with practical examples and use cases.',
      keyPoints: [
        'SQL language vs MySQL database system',
        'MySQL-specific features and extensions',
        'Practical implementation differences',
        'When to use MySQL vs other databases',
        'Learning path from SQL to MySQL',
        'Real-world application examples'
      ]
    },
    {
      id: 15,
      title: '#15 - SQL vs NoSQL: Complete Database Comparison',
      type: 'Textual',
      url: '/guides/sql-vs-nosql',
      category: 'Database',
      readTime: '18 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive comparison of SQL and NoSQL database paradigms, helping you understand when to use each approach for optimal results.',
      keyPoints: [
        'Database paradigm differences explained',
        'Advantages and disadvantages of each',
        'Use case scenarios and examples',
        'Performance and scalability considerations',
        'Decision framework for database choice',
        'Migration strategies and hybrid approaches'
      ]
    },
    {
      id: 16,
      title: '#16 - SQL vs PostgreSQL: Standard vs Implementation',
      type: 'Textual',
      url: '/guides/sql-vs-postgresql',
      category: 'Database',
      readTime: '12 min',
      difficulty: 'Intermediate',
      content: 'Understanding the relationship between SQL standard and PostgreSQL implementation, with advanced features and practical differences.',
      keyPoints: [
        'SQL standard compliance in PostgreSQL',
        'PostgreSQL-specific extensions and features',
        'Advanced data types and functions',
        'Performance optimization techniques',
        'Learning path from SQL to PostgreSQL',
        'Real-world implementation examples'
      ]
    },
    {
      id: 17,
      title: '#17 - Backend vs Full Stack: Complete Career Guide',
      type: 'Textual',
      url: '/guides/backend-vs-full-stack',
      category: 'Career',
      readTime: '22 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive career comparison between Backend and Full Stack development paths, including skills, salaries, and growth opportunities.',
      keyPoints: [
        'Role responsibilities and daily tasks',
        'Required technical skills and technologies',
        'Career progression and salary expectations',
        'Company preferences and job opportunities',
        'Learning paths and time investments',
        'Decision framework for career choice'
      ]
    },
    {
      id: 18,
      title: '#18 - DevOps vs SRE: Understanding Modern Operations',
      type: 'Textual',
      url: '/guides/devops-vs-sre',
      category: 'Career',
      readTime: '20 min',
      difficulty: 'Advanced',
      content: 'Detailed comparison of DevOps Engineers and Site Reliability Engineers, exploring responsibilities, career paths, and operational philosophies.',
      keyPoints: [
        'Core philosophies and approaches',
        'Daily responsibilities and challenges',
        'Required skills and technology stacks',
        'Career progression and compensation',
        'Company types and work environments',
        'Career transition opportunities'
      ]
    },
    {
      id: 19,
      title: '#19 - Frontend vs Backend: Complete Developer Guide',
      type: 'Textual',
      url: '/guides/frontend-vs-backend',
      category: 'Career',
      readTime: '25 min',
      difficulty: 'Beginner',
      content: 'Comprehensive guide comparing Frontend and Backend development paths, helping you understand technologies, career prospects, and make informed decisions.',
      keyPoints: [
        'Role overview and daily responsibilities',
        'Required technical skills and technologies',
        'Learning paths and difficulty comparison',
        'Career opportunities and salary ranges',
        'Work environments and team dynamics',
        'Decision framework for path selection'
      ]
    },
    {
      id: 20,
      title: '#20 - PostgreSQL vs MongoDB: Database Decision Guide',
      type: 'Textual',
      url: '/guides/postgresql-vs-mongodb',
      category: 'Database',
      readTime: '28 min',
      difficulty: 'Intermediate',
      content: 'In-depth comparison of PostgreSQL and MongoDB databases, covering technical differences, use cases, and decision-making framework for project selection.',
      keyPoints: [
        'Database architecture and data models',
        'Performance and scalability comparison',
        'Query languages and capabilities',
        'Real-world use cases and examples',
        'Development experience and ecosystem',
        'Migration strategies and hybrid approaches'
      ]
    },
    {
      id: 21,
      title: '#21 - Data Science Interview Questions: Complete Guide',
      type: 'Question',
      url: '/guides/data-science-interview-questions',
      category: 'Data Science',
      readTime: '35 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive collection of data science interview questions covering statistics, machine learning, programming, and practical data analysis scenarios.',
      keyPoints: [
        'Statistical analysis and hypothesis testing',
        'Machine learning algorithms and concepts',
        'Python and R programming questions',
        'Data manipulation and visualization',
        'Business case studies and scenarios',
        'Technical coding challenges'
      ]
    },
    {
      id: 22,
      title: '#22 - Go Programming Interview Questions: Expert Guide',
      type: 'Question',
      url: '/guides/golang-interview-questions',
      category: 'Go',
      readTime: '30 min',
      difficulty: 'Intermediate',
      content: 'Essential Go programming interview questions covering language fundamentals, concurrency, performance optimization, and advanced Go concepts.',
      keyPoints: [
        'Go syntax and language fundamentals',
        'Goroutines and concurrency patterns',
        'Channels and synchronization',
        'Memory management and performance',
        'Error handling and best practices',
        'Standard library and tooling'
      ]
    },
    {
      id: 23,
      title: '#23 - Data Analyst Interview Questions: Complete Preparation',
      type: 'Question',
      url: '/guides/data-analyst-interview-questions',
      category: 'Data Analysis',
      readTime: '25 min',
      difficulty: 'Beginner',
      content: 'Comprehensive guide to data analyst interview questions covering SQL, Excel, data visualization, and analytical thinking skills.',
      keyPoints: [
        'SQL queries and database concepts',
        'Excel functions and pivot tables',
        'Data visualization tools and techniques',
        'Statistical analysis fundamentals',
        'Business intelligence concepts',
        'Problem-solving and case studies'
      ]
    },
    {
      id: 24,
      title: '#24 - AI Data Scientist vs Cyber Security: Career Comparison',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-cyber-security',
      category: 'Career',
      readTime: '20 min',
      difficulty: 'Intermediate',
      content: 'Detailed comparison between AI Data Scientist and Cyber Security career paths, including skills, responsibilities, and growth opportunities.',
      keyPoints: [
        'Role responsibilities and daily tasks',
        'Required technical skills and certifications',
        'Career progression and salary expectations',
        'Industry demand and job market trends',
        'Educational background requirements',
        'Work environments and company types'
      ]
    },
    {
      id: 25,
      title: '#25 - AI Data Scientist vs Software Engineering: Path Analysis',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-software-engineering',
      category: 'Career',
      readTime: '22 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive comparison of AI Data Scientist and Software Engineering careers, helping you choose the right technology path.',
      keyPoints: [
        'Technical skills and programming requirements',
        'Problem-solving approaches and methodologies',
        'Career growth and advancement opportunities',
        'Salary ranges and compensation packages',
        'Work-life balance and job satisfaction',
        'Future trends and industry outlook'
      ]
    },
    {
      id: 26,
      title: '#26 - AI Data Scientist vs AI Engineer: Role Distinction',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-ai-engineer',
      category: 'AI/ML',
      readTime: '18 min',
      difficulty: 'Advanced',
      content: 'Clear distinction between AI Data Scientist and AI Engineer roles, covering responsibilities, skills, and career trajectories in AI field.',
      keyPoints: [
        'Role definitions and core responsibilities',
        'Technical skills and tool requirements',
        'Research vs implementation focus',
        'Team collaboration and project involvement',
        'Career advancement pathways',
        'Industry applications and opportunities'
      ]
    },
    {
      id: 27,
      title: '#27 - AI Data Scientist vs Business Analytics: Strategic Comparison',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-business-analytics',
      category: 'Business',
      readTime: '16 min',
      difficulty: 'Intermediate',
      content: 'Strategic comparison between AI Data Scientist and Business Analytics roles, focusing on business impact and analytical approaches.',
      keyPoints: [
        'Business impact and strategic value',
        'Analytical methodologies and tools',
        'Stakeholder interaction and communication',
        'Decision-making processes and frameworks',
        'ROI measurement and business outcomes',
        'Cross-functional collaboration skills'
      ]
    },
    {
      id: 28,
      title: '#28 - AI Data Scientist vs Data Engineering: Technical Deep Dive',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-data-engineering',
      category: 'Data Engineering',
      readTime: '24 min',
      difficulty: 'Advanced',
      content: 'Technical comparison of AI Data Scientist and Data Engineering roles, covering infrastructure, pipelines, and data architecture.',
      keyPoints: [
        'Data pipeline design and implementation',
        'Infrastructure and scalability considerations',
        'ETL processes and data transformation',
        'Cloud platforms and big data technologies',
        'Performance optimization and monitoring',
        'Collaboration in data-driven projects'
      ]
    },
    {
      id: 29,
      title: '#29 - AI Data Scientist vs Statistics: Methodological Analysis',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-statistics',
      category: 'Statistics',
      readTime: '19 min',
      difficulty: 'Advanced',
      content: 'Methodological comparison between AI Data Scientist and traditional Statistics approaches, covering modern vs classical techniques.',
      keyPoints: [
        'Statistical methodologies and approaches',
        'Machine learning vs traditional statistics',
        'Experimental design and hypothesis testing',
        'Model validation and interpretation',
        'Academic vs industry applications',
        'Research methodologies and publishing'
      ]
    },
    {
      id: 30,
      title: '#30 - AI Data Scientist vs Computer Science: Academic vs Applied',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-computer-science',
      category: 'Computer Science',
      readTime: '21 min',
      difficulty: 'Intermediate',
      content: 'Comparison between AI Data Scientist career path and traditional Computer Science, exploring academic foundations vs practical applications.',
      keyPoints: [
        'Academic foundations and theoretical knowledge',
        'Practical applications and industry relevance',
        'Programming skills and algorithmic thinking',
        'Research vs development focus',
        'Career flexibility and specialization options',
        'Continuous learning and skill evolution'
      ]
    },
    {
      id: 31,
      title: '#31 - AI Data Scientist vs Data Analytics: Scope and Scale',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-data-analytics',
      category: 'Data Analytics',
      readTime: '17 min',
      difficulty: 'Intermediate',
      content: 'Detailed comparison of AI Data Scientist and Data Analytics roles, examining scope, scale, and analytical complexity differences.',
      keyPoints: [
        'Analytical complexity and methodology depth',
        'Project scope and business impact',
        'Tool sophistication and technical requirements',
        'Predictive vs descriptive analytics',
        'Automation and model deployment',
        'Strategic vs operational decision support'
      ]
    },
    {
      id: 32,
      title: '#32 - AI Data Scientist vs Machine Learning Engineer: Specialization Guide',
      type: 'Textual',
      url: '/guides/ai-data-scientist-vs-machine-learning-engineer',
      category: 'Machine Learning',
      readTime: '23 min',
      difficulty: 'Advanced',
      content: 'Comprehensive guide distinguishing AI Data Scientist and Machine Learning Engineer roles, covering research vs production focus.',
      keyPoints: [
        'Research and experimentation vs production systems',
        'Model development vs model deployment',
        'Infrastructure and MLOps considerations',
        'Collaboration with engineering teams',
        'Performance optimization and scaling',
        'Career progression and specialization paths'
      ]
    },
    {
      id: 33,
      title: '#33 - How to Become a Full Stack Developer: Complete Roadmap',
      type: 'Textual',
      url: '/guides/full-stack-developer-roadmap',
      category: 'Full Stack',
      readTime: '30 min',
      difficulty: 'Beginner',
      content: 'Step-by-step roadmap to becoming a full stack developer, covering frontend, backend, databases, and essential development skills.',
      keyPoints: [
        'Frontend technologies and frameworks',
        'Backend development and server-side programming',
        'Database design and management',
        'DevOps and deployment strategies',
        'Project portfolio development',
        'Job search and career advancement tips'
      ]
    },
    {
      id: 34,
      title: '#34 - Go vs Java: Programming Language Comparison',
      type: 'Textual',
      url: '/guides/golang-vs-java',
      category: 'Programming',
      readTime: '26 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive comparison between Go and Java programming languages, analyzing performance, ecosystem, and use case suitability.',
      keyPoints: [
        'Language syntax and learning curve',
        'Performance and execution speed',
        'Concurrency models and threading',
        'Ecosystem and library support',
        'Enterprise adoption and scalability',
        'Career opportunities and market demand'
      ]
    },
    {
      id: 35,
      title: '#35 - Java vs JavaScript: Language Distinction Guide',
      type: 'Textual',
      url: '/guides/java-vs-javascript',
      category: 'Programming',
      readTime: '20 min',
      difficulty: 'Beginner',
      content: 'Clear explanation of differences between Java and JavaScript, covering syntax, applications, and career paths for each language.',
      keyPoints: [
        'Language origins and design philosophies',
        'Syntax differences and programming paradigms',
        'Application domains and use cases',
        'Development environments and tooling',
        'Career paths and job market analysis',
        'Learning recommendations and resources'
      ]
    },
    {
      id: 36,
      title: '#36 - Full Stack Developer Interview Questions: Complete Guide',
      type: 'Question',
      url: '/guides/full-stack-interview-questions',
      category: 'Full Stack',
      readTime: '40 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive collection of full stack developer interview questions covering frontend, backend, databases, and system design.',
      keyPoints: [
        'Frontend frameworks and libraries',
        'Backend APIs and server architecture',
        'Database design and optimization',
        'System design and scalability',
        'DevOps and deployment processes',
        'Problem-solving and coding challenges'
      ]
    },
    {
      id: 37,
      title: '#37 - AI Data Scientist Career Path: Complete Journey Guide',
      type: 'Textual',
      url: '/guides/ai-data-scientist-career-path',
      category: 'Career',
      readTime: '32 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive career guide for aspiring AI Data Scientists, covering education, skills, experience, and advancement strategies.',
      keyPoints: [
        'Educational requirements and degree options',
        'Essential technical and soft skills',
        'Entry-level positions and career progression',
        'Industry sectors and specialization areas',
        'Portfolio development and project showcase',
        'Networking and professional development'
      ]
    },
    {
      id: 38,
      title: '#38 - AI Data Scientist Skills: Essential Competencies Guide',
      type: 'Textual',
      url: '/guides/ai-data-scientist-skills',
      category: 'Skills',
      readTime: '28 min',
      difficulty: 'Intermediate',
      content: 'Detailed breakdown of essential skills for AI Data Scientists, including technical abilities, soft skills, and continuous learning strategies.',
      keyPoints: [
        'Programming languages and frameworks',
        'Statistical analysis and mathematics',
        'Machine learning and deep learning',
        'Data visualization and communication',
        'Domain expertise and business acumen',
        'Research methodology and experimentation'
      ]
    },
    {
      id: 39,
      title: '#39 - AI Data Scientist Tools: Technology Stack Guide',
      type: 'Textual',
      url: '/guides/ai-data-scientist-tools',
      category: 'Tools',
      readTime: '25 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive guide to tools and technologies used by AI Data Scientists, from development environments to deployment platforms.',
      keyPoints: [
        'Programming environments and IDEs',
        'Data manipulation and analysis libraries',
        'Machine learning frameworks and platforms',
        'Visualization tools and dashboards',
        'Cloud platforms and infrastructure',
        'Collaboration and version control systems'
      ]
    },
    {
      id: 40,
      title: '#40 - DevOps Job Description: Role and Responsibilities Guide',
      type: 'Textual',
      url: '/guides/devops-job-description',
      category: 'DevOps',
      readTime: '22 min',
      difficulty: 'Intermediate',
      content: 'Comprehensive DevOps job description guide covering responsibilities, required skills, qualifications, and career expectations.',
      keyPoints: [
        'Core responsibilities and daily tasks',
        'Technical skills and tool proficiency',
        'Collaboration with development teams',
        'Infrastructure automation and management',
        'Monitoring and incident response',
        'Career progression and salary expectations'
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Back to Dashboard Button */}
        <Link href="/dashboard" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          background: '#f8f9fa',
          color: '#495057',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '500',
          fontSize: '14px',
          border: '1px solid #dee2e6',
          transition: 'all 0.2s ease',
          marginBottom: '3rem'
        }}
        onMouseOver={(e) => {
          const target = e.currentTarget;
          target.style.background = '#e9ecef';
          target.style.borderColor = '#adb5bd';
        }}
        onMouseOut={(e) => {
          const target = e.currentTarget;
          target.style.background = '#f8f9fa';
          target.style.borderColor = '#dee2e6';
        }}>
          <ArrowRight className="w-4 h-4" style={{ transform: 'rotate(180deg)' }} />
          Back to Dashboard
        </Link>

        {/* Header Section */}
        <div style={{
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            color: '#1a202c',
            marginBottom: '0.5rem',
            letterSpacing: '-0.025em',
            margin: '0 0 0.5rem 0'
          }}>
            Developer Guides
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#718096',
            margin: '0 0 2rem 0',
            fontWeight: '400',
            lineHeight: '1.5'
          }}>
            Comprehensive guides and tutorials covering all aspects of software development.
          </p>

          {/* Search and Filter Section */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              position: 'relative',
              flex: '1',
              minWidth: '250px'
            }}>
              <Search style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: '#6b7280'
              }} />
              <input
                type="text"
                placeholder="Search guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                minWidth: '150px',
                cursor: 'pointer'
              }}
            >
              <option value="All">All Categories</option>
              {Array.from(new Set(guides.map(g => g.category))).sort().map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Guides List */}
        <div id="guides-section" style={{ marginBottom: '2rem' }}>
          {(() => {
            const normalizedGuides = guides.map(normalizeGuide);
            const filteredGuides = normalizedGuides.filter(guide => {
              const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  guide.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  (guide.content && guide.content.toLowerCase().includes(searchTerm.toLowerCase()));
              const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
              return matchesSearch && matchesCategory;
            });

            return (
              <>
                {/* Results Count */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <BookOpen style={{ width: '16px', height: '16px' }} />
                    Showing {filteredGuides.length} of {guides.length} guides
                    {searchTerm && (
                      <span style={{ color: '#6b7280' }}>
                        for "{searchTerm}"
                      </span>
                    )}
                    {selectedCategory !== 'All' && (
                      <span style={{ color: '#6b7280' }}>
                        in {selectedCategory}
                      </span>
                    )}
                  </div>
                  {(searchTerm || selectedCategory !== 'All') && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All');
                      }}
                      style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
                    >
                      Clear Filters
                    </button>
                  )}
                </div>

                {filteredGuides
            .map((guide) => (
              <div
                key={guide.id}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Link href={guide.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    padding: '1.5rem',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ flex: '1' }}>
                        <h3 style={{
                          color: '#1f2937',
                          fontSize: '18px',
                          fontWeight: '600',
                          lineHeight: '1.4',
                          margin: '0 0 0.5rem 0'
                        }}>
                          {guide.title}
                        </h3>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{
                            background: guide.type === 'Question' ? '#fef3c7' : '#e0f2fe',
                            color: guide.type === 'Question' ? '#92400e' : '#0c4a6e',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}>
                            {guide.type}
                          </span>
                          <span style={{
                            background: '#f3f4f6',
                            color: '#374151',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}>
                            {guide.category}
                          </span>
                          {guide.readTime && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#6b7280', fontSize: '12px' }}>
                              <Clock style={{ width: '12px', height: '12px' }} />
                              {guide.readTime}
                            </div>
                          )}
                          {guide.difficulty && (
                            <span style={{
                              color: guide.difficulty === 'Beginner' ? '#059669' : 
                                    guide.difficulty === 'Intermediate' ? '#d97706' : '#dc2626',
                              fontSize: '12px',
                              fontWeight: '500'
                            }}>
                              {guide.difficulty}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
              </>
            );
          })()}
        </div>

        {/* Career Path Section */}
        <div style={{
          background: '#f7fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '1rem'
          }}>
            Explore Career Paths
          </h2>
          <p style={{
            color: '#4a5568',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
          }}>
            Discover comprehensive career guidance and skill development paths tailored for your professional growth.
          </p>
        </div>
      </div>
    </div>
  )
}
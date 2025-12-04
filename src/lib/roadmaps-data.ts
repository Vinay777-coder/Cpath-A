// Types for our comprehensive roadmap system
export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  resources?: Array<{
    title: string;
    url: string;
    type: 'article' | 'video' | 'course' | 'documentation' | 'tool';
  }>;
  skills_gained: string[];
  completed?: boolean;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  
  // Role-based classification
  role: string; // e.g., "Frontend Developer", "Data Scientist", "DevOps Engineer"
  
  // Skill-based classification
  primary_skills: string[]; // Main skills this roadmap teaches
  secondary_skills: string[]; // Additional skills gained
  
  // Category classification
  category: string; // e.g., "Web Development", "Data Science", "Mobile Development"
  subcategory?: string; // e.g., "React Development", "Machine Learning"
  
  // Roadmap details
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  prerequisites: string[];
  
  // Learning path
  steps: RoadmapStep[];
  
  // Additional metadata
  tags: string[];
  popularity_score?: number;
  icon?: string;
  color?: string;
  featured?: boolean;
  created_at: string;
  updated_at: string;
  
  // Career information
  salary_range?: string;
  job_opportunities?: string[];
  industry_demand?: 'High' | 'Medium' | 'Low';
}

// This will store all your roadmaps - we'll add them in batches
export const roadmapsDatabase: Roadmap[] = [
  // ROLE-BASED ROADMAPS
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Master modern frontend technologies to build responsive and interactive user interfaces',
    role: 'Frontend Developer',
    primary_skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
    secondary_skills: ['UI/UX Design', 'Performance Optimization', 'Testing'],
    category: 'Web Development',
    subcategory: 'Frontend',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Basic programming knowledge', 'Understanding of web fundamentals'],
    steps: [
      {
        id: 'step-1-html-basics',
        title: 'Step 1: HTML Fundamentals',
        description: 'Learn the structure and markup language of web pages',
        duration: '1-2 weeks',
        topics: ['HTML5 Elements', 'Semantic HTML', 'Forms and Input', 'HTML Best Practices'],
        skills_gained: ['HTML5', 'Semantic Markup', 'Web Structure']
      },
      {
        id: 'step-2-css-basics',
        title: 'Step 2: CSS Styling',
        description: 'Master cascading style sheets for web design',
        duration: '2-3 weeks',
        topics: ['CSS Selectors', 'Box Model', 'Positioning', 'Colors and Typography'],
        skills_gained: ['CSS3', 'Styling', 'Layout Design']
      },
      {
        id: 'step-3-responsive-design',
        title: 'Step 3: Responsive Web Design',
        description: 'Create layouts that work on all devices',
        duration: '1-2 weeks',
        topics: ['Media Queries', 'Flexbox', 'CSS Grid', 'Mobile-First Design'],
        skills_gained: ['Responsive Design', 'Flexbox', 'CSS Grid']
      },
      {
        id: 'step-4-javascript-basics',
        title: 'Step 4: JavaScript Fundamentals',
        description: 'Learn programming concepts and JavaScript basics',
        duration: '3-4 weeks',
        topics: ['Variables & Data Types', 'Functions', 'Control Flow', 'Objects & Arrays'],
        skills_gained: ['JavaScript', 'Programming Logic', 'Data Structures']
      },
      {
        id: 'step-5-dom-manipulation',
        title: 'Step 5: DOM Manipulation',
        description: 'Interact with web pages using JavaScript',
        duration: '2-3 weeks',
        topics: ['DOM Selection', 'Event Handling', 'Dynamic Content', 'Form Validation'],
        skills_gained: ['DOM', 'Events', 'Interactive Web Pages']
      },
      {
        id: 'step-6-modern-javascript',
        title: 'Step 6: Modern JavaScript (ES6+)',
        description: 'Master modern JavaScript features and syntax',
        duration: '2-3 weeks',
        topics: ['Arrow Functions', 'Promises & Async/Await', 'Modules', 'Destructuring'],
        skills_gained: ['ES6+', 'Async Programming', 'Modern Syntax']
      },
      {
        id: 'step-7-version-control',
        title: 'Step 7: Version Control with Git',
        description: 'Learn to track and manage your code changes',
        duration: '1 week',
        topics: ['Git Basics', 'GitHub', 'Branching & Merging', 'Collaboration'],
        skills_gained: ['Git', 'GitHub', 'Version Control']
      },
      {
        id: 'step-8-react-fundamentals',
        title: 'Step 8: React Fundamentals',
        description: 'Build dynamic user interfaces with React',
        duration: '3-4 weeks',
        topics: ['Components', 'JSX', 'Props & State', 'Event Handling'],
        skills_gained: ['React', 'Components', 'JSX']
      },
      {
        id: 'step-9-react-hooks',
        title: 'Step 9: React Hooks & Advanced Concepts',
        description: 'Master modern React development patterns',
        duration: '2-3 weeks',
        topics: ['useState', 'useEffect', 'Custom Hooks', 'Context API'],
        skills_gained: ['React Hooks', 'State Management', 'React Patterns']
      },
      {
        id: 'step-10-routing-navigation',
        title: 'Step 10: Routing & Navigation',
        description: 'Create multi-page applications with React Router',
        duration: '1-2 weeks',
        topics: ['React Router', 'Navigation', 'Route Parameters', 'Protected Routes'],
        skills_gained: ['React Router', 'SPA Navigation', 'Routing']
      },
      {
        id: 'step-11-api-integration',
        title: 'Step 11: API Integration',
        description: 'Connect your frontend to backend services',
        duration: '2-3 weeks',
        topics: ['Fetch API', 'REST APIs', 'HTTP Methods', 'Error Handling'],
        skills_gained: ['API Integration', 'HTTP', 'Data Fetching']
      },
      {
        id: 'step-12-build-tools',
        title: 'Step 12: Build Tools & Deployment',
        description: 'Optimize and deploy your applications',
        duration: '1-2 weeks',
        topics: ['Vite/Webpack', 'Build Process', 'Deployment', 'Performance Optimization'],
        skills_gained: ['Build Tools', 'Deployment', 'Optimization']
      }
    ],
    tags: ['frontend', 'react', 'javascript', 'web'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $120k',
    job_opportunities: ['Frontend Developer', 'React Developer', 'UI Developer'],
    industry_demand: 'High'
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Build robust server-side applications and APIs that power modern web applications',
    role: 'Backend Developer',
    primary_skills: ['Node.js', 'Express', 'Database Design', 'API Development'],
    secondary_skills: ['Security', 'Performance Optimization', 'Cloud Services'],
    category: 'Web Development',
    subcategory: 'Backend',
    difficulty: 'Intermediate',
    duration: '5-7 months',
    prerequisites: ['Programming fundamentals', 'Basic understanding of databases'],
    steps: [
      {
        id: 'step-1-programming-basics',
        title: 'Step 1: Programming Fundamentals',
        description: 'Learn core programming concepts and choose a backend language',
        duration: '2-3 weeks',
        topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'Object-Oriented Programming'],
        skills_gained: ['Programming Logic', 'Problem Solving', 'Code Organization']
      },
      {
        id: 'step-2-server-basics',
        title: 'Step 2: Server & HTTP Fundamentals',
        description: 'Understand how servers work and HTTP protocol',
        duration: '1-2 weeks',
        topics: ['HTTP Methods', 'Status Codes', 'Request/Response Cycle', 'Client-Server Architecture'],
        skills_gained: ['HTTP Protocol', 'Server Concepts', 'Web Architecture']
      },
      {
        id: 'step-3-nodejs-basics',
        title: 'Step 3: Node.js Fundamentals',
        description: 'Get started with Node.js for backend development',
        duration: '2-3 weeks',
        topics: ['Node.js Runtime', 'NPM', 'File System', 'Event Loop'],
        skills_gained: ['Node.js', 'JavaScript Runtime', 'Package Management']
      },
      {
        id: 'step-4-express-framework',
        title: 'Step 4: Express.js Framework',
        description: 'Build web servers and APIs with Express.js',
        duration: '2-3 weeks',
        topics: ['Express Setup', 'Routing', 'Middleware', 'Request Handling'],
        skills_gained: ['Express.js', 'Web Framework', 'API Development']
      },
      {
        id: 'step-5-database-basics',
        title: 'Step 5: Database Fundamentals',
        description: 'Learn database concepts and SQL',
        duration: '3-4 weeks',
        topics: ['Database Design', 'SQL Queries', 'Relationships', 'Normalization'],
        skills_gained: ['SQL', 'Database Design', 'Data Modeling']
      },
      {
        id: 'step-6-mongodb',
        title: 'Step 6: MongoDB & NoSQL',
        description: 'Work with NoSQL databases using MongoDB',
        duration: '2-3 weeks',
        topics: ['Document Databases', 'MongoDB Queries', 'Mongoose ODM', 'Schema Design'],
        skills_gained: ['MongoDB', 'NoSQL', 'Document Databases']
      },
      {
        id: 'step-7-rest-api',
        title: 'Step 7: RESTful API Development',
        description: 'Build RESTful APIs following best practices',
        duration: '2-3 weeks',
        topics: ['REST Principles', 'CRUD Operations', 'API Design', 'Status Codes'],
        skills_gained: ['REST APIs', 'API Design', 'HTTP Methods']
      },
      {
        id: 'step-8-authentication',
        title: 'Step 8: Authentication & Security',
        description: 'Implement user authentication and security measures',
        duration: '2-3 weeks',
        topics: ['JWT Tokens', 'Password Hashing', 'Session Management', 'CORS'],
        skills_gained: ['Authentication', 'Security', 'User Management']
      },
      {
        id: 'step-9-testing',
        title: 'Step 9: Testing & Validation',
        description: 'Test your backend applications thoroughly',
        duration: '1-2 weeks',
        topics: ['Unit Testing', 'Integration Testing', 'API Testing', 'Test Frameworks'],
        skills_gained: ['Testing', 'Quality Assurance', 'Test Automation']
      },
      {
        id: 'step-10-deployment',
        title: 'Step 10: Deployment & DevOps',
        description: 'Deploy and manage backend applications in production',
        duration: '1-2 weeks',
        topics: ['Cloud Platforms', 'Environment Variables', 'Process Management', 'Monitoring'],
        skills_gained: ['Deployment', 'DevOps', 'Cloud Services']
      }
    ],
    tags: ['backend', 'api', 'database', 'server'],
    popularity_score: 8,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Backend Developer', 'API Developer', 'Server Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'fullstack-development',
    title: 'Full Stack Development',
    description: 'Master both frontend and backend technologies to become a complete web developer',
    role: 'Full Stack Developer',
    primary_skills: ['React', 'Node.js', 'Database Design', 'API Development'],
    secondary_skills: ['DevOps', 'System Design', 'Testing'],
    category: 'Web Development',
    subcategory: 'Full Stack',
    difficulty: 'Advanced',
    duration: '8-12 months',
    prerequisites: ['Basic programming knowledge', 'Understanding of web fundamentals'],
    steps: [
      {
        id: 'step-1-web-fundamentals',
        title: 'Step 1: Web Development Fundamentals',
        description: 'Learn the basics of web development and internet protocols',
        duration: '1-2 weeks',
        topics: ['HTML', 'CSS', 'JavaScript Basics', 'HTTP Protocol'],
        skills_gained: ['Web Fundamentals', 'Frontend Basics', 'HTTP']
      },
      {
        id: 'step-2-frontend-advanced',
        title: 'Step 2: Advanced Frontend Development',
        description: 'Master modern frontend technologies and frameworks',
        duration: '4-6 weeks',
        topics: ['React', 'State Management', 'Component Architecture', 'Responsive Design'],
        skills_gained: ['React', 'Modern Frontend', 'UI/UX Implementation']
      },
      {
        id: 'step-3-backend-basics',
        title: 'Step 3: Backend Development Basics',
        description: 'Learn server-side programming and API development',
        duration: '3-4 weeks',
        topics: ['Node.js', 'Express.js', 'REST APIs', 'Server Architecture'],
        skills_gained: ['Backend Development', 'API Creation', 'Server Management']
      },
      {
        id: 'step-4-database-integration',
        title: 'Step 4: Database Integration',
        description: 'Connect your application to databases',
        duration: '2-3 weeks',
        topics: ['SQL Databases', 'MongoDB', 'Database Design', 'ORM/ODM'],
        skills_gained: ['Database Management', 'Data Modeling', 'Database Queries']
      },
      {
        id: 'step-5-fullstack-project',
        title: 'Step 5: Full Stack Project Integration',
        description: 'Connect frontend and backend into complete applications',
        duration: '3-4 weeks',
        topics: ['API Integration', 'Authentication', 'State Management', 'Data Flow'],
        skills_gained: ['Full Stack Integration', 'Project Architecture', 'End-to-End Development']
      },
      {
        id: 'step-6-advanced-topics',
        title: 'Step 6: Advanced Full Stack Concepts',
        description: 'Learn advanced patterns and best practices',
        duration: '2-3 weeks',
        topics: ['Testing', 'Security', 'Performance Optimization', 'Error Handling'],
        skills_gained: ['Advanced Patterns', 'Security Implementation', 'Performance Tuning']
      },
      {
        id: 'step-7-deployment',
        title: 'Step 7: Deployment & DevOps',
        description: 'Deploy full stack applications to production',
        duration: '1-2 weeks',
        topics: ['Cloud Deployment', 'CI/CD', 'Environment Management', 'Monitoring'],
        skills_gained: ['Deployment', 'DevOps', 'Production Management']
      }
    ],
    tags: ['fullstack', 'react', 'nodejs', 'web'],
    popularity_score: 10,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $150k',
    job_opportunities: ['Full Stack Developer', 'Web Developer', 'Software Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Master infrastructure automation, CI/CD, and cloud technologies for modern deployment',
    role: 'DevOps Engineer',
    primary_skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    secondary_skills: ['Monitoring', 'Security', 'Infrastructure as Code'],
    category: 'DevOps',
    difficulty: 'Advanced',
    duration: '6-9 months',
    prerequisites: ['Basic Linux knowledge', 'Understanding of software development'],
    steps: [
      {
        id: 'step-1-linux-basics',
        title: 'Step 1: Linux Fundamentals',
        description: 'Master Linux system administration and command line',
        duration: '2-3 weeks',
        topics: ['Linux Commands', 'File System', 'Process Management', 'Shell Scripting'],
        skills_gained: ['Linux Administration', 'Command Line', 'System Management']
      },
      {
        id: 'step-2-networking',
        title: 'Step 2: Networking and Security',
        description: 'Understand network concepts and security fundamentals',
        duration: '2-3 weeks',
        topics: ['TCP/IP', 'DNS', 'Load Balancers', 'Firewalls', 'SSL/TLS'],
        skills_gained: ['Network Administration', 'Security Basics', 'Network Troubleshooting']
      },
      {
        id: 'step-3-version-control',
        title: 'Step 3: Version Control and Collaboration',
        description: 'Master Git for code management and team collaboration',
        duration: '1-2 weeks',
        topics: ['Git Workflows', 'Branching Strategies', 'Code Reviews', 'Repository Management'],
        skills_gained: ['Git', 'Version Control', 'Team Collaboration']
      },
      {
        id: 'step-4-containerization',
        title: 'Step 4: Docker and Containerization',
        description: 'Learn containerization with Docker and container orchestration',
        duration: '3-4 weeks',
        topics: ['Docker Fundamentals', 'Dockerfile', 'Docker Compose', 'Container Best Practices'],
        skills_gained: ['Docker', 'Containerization', 'Application Packaging']
      },
      {
        id: 'step-5-kubernetes',
        title: 'Step 5: Kubernetes Orchestration',
        description: 'Master Kubernetes for container orchestration at scale',
        duration: '4-5 weeks',
        topics: ['Kubernetes Architecture', 'Pods & Services', 'Deployments', 'ConfigMaps'],
        skills_gained: ['Kubernetes', 'Container Orchestration', 'Scalable Deployments']
      },
      {
        id: 'step-6-cloud-platforms',
        title: 'Step 6: Cloud Platform Services',
        description: 'Learn major cloud platforms and their services',
        duration: '4-5 weeks',
        topics: ['AWS/Azure/GCP Services', 'Cloud Architecture', 'Storage Solutions', 'Compute Services'],
        skills_gained: ['Cloud Computing', 'Cloud Architecture', 'Service Management']
      },
      {
        id: 'step-7-cicd',
        title: 'Step 7: CI/CD Pipelines',
        description: 'Implement continuous integration and deployment workflows',
        duration: '3-4 weeks',
        topics: ['Pipeline Design', 'Jenkins/GitHub Actions', 'Automated Testing', 'Deployment Strategies'],
        skills_gained: ['CI/CD', 'Automation', 'Pipeline Management']
      },
      {
        id: 'step-8-monitoring',
        title: 'Step 8: Monitoring and Observability',
        description: 'Implement monitoring, logging, and alerting systems',
        duration: '2-3 weeks',
        topics: ['Monitoring Tools', 'Log Management', 'Alerting', 'Performance Metrics'],
        skills_gained: ['Monitoring', 'Observability', 'System Health Management']
      }
    ],
    tags: ['devops', 'aws', 'docker', 'kubernetes'],
    popularity_score: 8,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$90k - $160k',
    job_opportunities: ['DevOps Engineer', 'Cloud Engineer', 'Site Reliability Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'android-development',
    title: 'Android Development',
    description: 'Build native Android applications using modern development practices',
    role: 'Android Developer',
    primary_skills: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Room Database'],
    secondary_skills: ['UI/UX Design', 'Performance Optimization', 'Play Store Publishing'],
    category: 'Mobile Development',
    subcategory: 'Native Android',
    difficulty: 'Intermediate',
    duration: '5-7 months',
    prerequisites: ['Basic programming knowledge', 'Object-oriented programming concepts'],
    steps: [
      {
        id: 'step-1-kotlin-basics',
        title: 'Step 1: Kotlin Programming Fundamentals',
        description: 'Learn Kotlin programming language for Android development',
        duration: '2-3 weeks',
        topics: ['Kotlin Syntax', 'Variables & Functions', 'Classes & Objects', 'Null Safety'],
        skills_gained: ['Kotlin Programming', 'OOP Concepts', 'Type Safety']
      },
      {
        id: 'step-2-android-fundamentals',
        title: 'Step 2: Android Fundamentals',
        description: 'Understand Android platform and development environment',
        duration: '2-3 weeks',
        topics: ['Android Studio', 'Project Structure', 'Activities', 'Manifest', 'APK'],
        skills_gained: ['Android Platform', 'Development Environment', 'App Structure']
      },
      {
        id: 'step-3-ui-layouts',
        title: 'Step 3: User Interface & Layouts',
        description: 'Create user interfaces with layouts and views',
        duration: '2-3 weeks',
        topics: ['XML Layouts', 'View Components', 'Material Design', 'Responsive UI'],
        skills_gained: ['UI Design', 'Layout Management', 'Material Design']
      },
      {
        id: 'step-4-jetpack-compose',
        title: 'Step 4: Jetpack Compose',
        description: 'Build modern UI with Jetpack Compose',
        duration: '3-4 weeks',
        topics: ['Compose Basics', 'State Management', 'Navigation', 'Theming'],
        skills_gained: ['Jetpack Compose', 'Modern UI', 'Declarative UI']
      },
      {
        id: 'step-5-data-storage',
        title: 'Step 5: Data Storage & Persistence',
        description: 'Manage data with Room database and SharedPreferences',
        duration: '2-3 weeks',
        topics: ['Room Database', 'SharedPreferences', 'Data Classes', 'Repository Pattern'],
        skills_gained: ['Data Persistence', 'Room Database', 'Local Storage']
      },
      {
        id: 'step-6-networking',
        title: 'Step 6: Networking & APIs',
        description: 'Connect to web services and handle network requests',
        duration: '2-3 weeks',
        topics: ['Retrofit', 'HTTP Requests', 'JSON Parsing', 'Network Security'],
        skills_gained: ['API Integration', 'Network Programming', 'RESTful Services']
      },
      {
        id: 'step-7-architecture',
        title: 'Step 7: App Architecture & MVVM',
        description: 'Implement clean architecture patterns',
        duration: '2-3 weeks',
        topics: ['MVVM Pattern', 'LiveData', 'ViewModel', 'Data Binding'],
        skills_gained: ['Architecture Patterns', 'MVVM', 'Clean Code']
      },
      {
        id: 'step-8-testing-deployment',
        title: 'Step 8: Testing & Play Store Deployment',
        description: 'Test apps and deploy to Google Play Store',
        duration: '1-2 weeks',
        topics: ['Unit Testing', 'UI Testing', 'Play Console', 'App Signing'],
        skills_gained: ['Testing', 'App Deployment', 'Play Store Publishing']
      }
    ],
    tags: ['android', 'kotlin', 'mobile', 'native'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['Android Developer', 'Mobile App Developer', 'Native App Developer'],
    industry_demand: 'High'
  },
  {
    id: 'ios-development',
    title: 'iOS Development',
    description: 'Create native iOS applications using Swift and modern iOS frameworks',
    role: 'iOS Developer',
    primary_skills: ['Swift', 'UIKit', 'SwiftUI', 'Core Data'],
    secondary_skills: ['App Store Guidelines', 'Performance Optimization', 'iOS Design Patterns'],
    category: 'Mobile Development',
    subcategory: 'Native iOS',
    difficulty: 'Intermediate',
    duration: '5-7 months',
    prerequisites: ['Basic programming knowledge', 'Understanding of OOP concepts'],
    steps: [
      {
        id: 'step-1-swift-basics',
        title: 'Step 1: Swift Programming Fundamentals',
        description: 'Learn Swift programming language for iOS development',
        duration: '2-3 weeks',
        topics: ['Swift Syntax', 'Variables & Constants', 'Optionals', 'Control Flow'],
        skills_gained: ['Swift Programming', 'Optional Handling', 'iOS Basics']
      },
      {
        id: 'step-2-ios-fundamentals',
        title: 'Step 2: iOS Development Fundamentals',
        description: 'Understand iOS platform and Xcode development environment',
        duration: '2-3 weeks',
        topics: ['Xcode IDE', 'iOS Simulator', 'App Lifecycle', 'Project Structure'],
        skills_gained: ['Xcode', 'iOS Platform', 'Development Environment']
      },
      {
        id: 'step-3-uikit-basics',
        title: 'Step 3: UIKit & Interface Builder',
        description: 'Create user interfaces with UIKit and Interface Builder',
        duration: '3-4 weeks',
        topics: ['UIKit Components', 'Storyboards', 'Auto Layout', 'View Controllers'],
        skills_gained: ['UIKit', 'Interface Design', 'Auto Layout']
      },
      {
        id: 'step-4-swiftui',
        title: 'Step 4: SwiftUI Modern UI',
        description: 'Build modern interfaces with SwiftUI framework',
        duration: '3-4 weeks',
        topics: ['SwiftUI Basics', 'State Management', 'Navigation', 'Animations'],
        skills_gained: ['SwiftUI', 'Declarative UI', 'Modern iOS Development']
      },
      {
        id: 'step-5-data-persistence',
        title: 'Step 5: Data Persistence & Core Data',
        description: 'Manage app data with Core Data and UserDefaults',
        duration: '2-3 weeks',
        topics: ['Core Data', 'UserDefaults', 'File System', 'Data Models'],
        skills_gained: ['Data Persistence', 'Core Data', 'Local Storage']
      },
      {
        id: 'step-6-ios-networking',
        title: 'Step 6: Networking & Web Services',
        description: 'Connect to APIs and handle network requests',
        duration: '2-3 weeks',
        topics: ['URLSession', 'REST APIs', 'JSON Parsing', 'Alamofire'],
        skills_gained: ['Network Programming', 'API Integration', 'HTTP Requests']
      },
      {
        id: 'step-7-ios-architecture',
        title: 'Step 7: iOS Architecture Patterns',
        description: 'Implement MVC, MVVM, and other architecture patterns',
        duration: '2-3 weeks',
        topics: ['MVC Pattern', 'MVVM', 'Delegation', 'Design Patterns'],
        skills_gained: ['Architecture Patterns', 'Clean Code', 'Design Patterns']
      },
      {
        id: 'step-8-app-store',
        title: 'Step 8: Testing & App Store Deployment',
        description: 'Test apps and deploy to Apple App Store',
        duration: '1-2 weeks',
        topics: ['XCTest', 'Unit Testing', 'App Store Connect', 'App Review Guidelines'],
        skills_gained: ['iOS Testing', 'App Store Publishing', 'Deployment']
      }
    ],
    tags: ['ios', 'swift', 'mobile', 'native'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['iOS Developer', 'Mobile App Developer', 'Swift Developer'],
    industry_demand: 'High'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Extract insights from data using statistical analysis, machine learning, and visualization',
    role: 'Data Scientist',
    primary_skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistics'],
    secondary_skills: ['Data Visualization', 'SQL', 'Machine Learning', 'Business Intelligence'],
    category: 'Data Science',
    difficulty: 'Advanced',
    duration: '8-12 months',
    prerequisites: ['Basic programming', 'Mathematics and statistics background'],
    steps: [
      {
        id: 'step-1-ds-python-basics',
        title: 'Step 1: Python Programming Fundamentals',
        description: 'Learn Python programming for data science applications',
        duration: '2-3 weeks',
        topics: ['Python Syntax', 'Data Types', 'Control Structures', 'Functions'],
        skills_gained: ['Python Programming', 'Programming Logic', 'Problem Solving']
      },
      {
        id: 'step-2-ds-math-stats',
        title: 'Step 2: Mathematics and Statistics',
        description: 'Build foundation in statistics and mathematics for data science',
        duration: '3-4 weeks',
        topics: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Linear Algebra'],
        skills_gained: ['Statistics', 'Mathematical Foundations', 'Data Analysis Theory']
      },
      {
        id: 'step-3-ds-data-manipulation',
        title: 'Step 3: Data Manipulation with Pandas',
        description: 'Master data manipulation and analysis with Pandas',
        duration: '2-3 weeks',
        topics: ['DataFrames', 'Data Cleaning', 'Data Transformation', 'Grouping Operations'],
        skills_gained: ['Pandas', 'Data Manipulation', 'Data Cleaning']
      },
      {
        id: 'step-4-ds-data-visualization',
        title: 'Step 4: Data Visualization',
        description: 'Create compelling visualizations to communicate insights',
        duration: '2-3 weeks',
        topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Statistical Plots'],
        skills_gained: ['Data Visualization', 'Chart Creation', 'Visual Storytelling']
      },
      {
        id: 'step-5-ds-machine-learning',
        title: 'Step 5: Machine Learning Basics',
        description: 'Learn fundamental machine learning algorithms and techniques',
        duration: '4-5 weeks',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Scikit-learn', 'Model Evaluation'],
        skills_gained: ['Machine Learning', 'Algorithm Selection', 'Model Building']
      },
      {
        id: 'step-6-ds-advanced-ml',
        title: 'Step 6: Advanced Machine Learning',
        description: 'Explore advanced ML techniques and deep learning',
        duration: '3-4 weeks',
        topics: ['Feature Engineering', 'Ensemble Methods', 'Neural Networks', 'Model Optimization'],
        skills_gained: ['Advanced ML', 'Feature Engineering', 'Deep Learning Basics']
      },
      {
        id: 'step-7-ds-projects',
        title: 'Step 7: Real-world Data Science Projects',
        description: 'Apply skills to complete end-to-end data science projects',
        duration: '4-6 weeks',
        topics: ['Project Planning', 'Data Collection', 'Analysis Pipeline', 'Reporting'],
        skills_gained: ['Project Management', 'End-to-end Analysis', 'Business Communication']
      }
    ],
    tags: ['datascience', 'python', 'analytics', 'ml'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$85k - $150k',
    job_opportunities: ['Data Scientist', 'Data Analyst', 'Research Scientist'],
    industry_demand: 'High'
  },
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    description: 'Build, deploy, and maintain machine learning systems at scale',
    role: 'ML Engineer',
    primary_skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Model Deployment'],
    secondary_skills: ['Data Engineering', 'Cloud Platforms', 'Monitoring'],
    category: 'AI/ML',
    subcategory: 'Machine Learning',
    difficulty: 'Advanced',
    duration: '10-14 months',
    prerequisites: ['Programming experience', 'Statistics and mathematics', 'Basic ML knowledge'],
    steps: [
      {
        id: 'step-1-mle-python',
        title: 'Step 1: Python for Machine Learning',
        description: 'Master Python libraries essential for ML development',
        duration: '2-3 weeks',
        topics: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn Basics'],
        skills_gained: ['Python ML Libraries', 'Data Manipulation', 'Basic ML']
      },
      {
        id: 'step-2-mle-math',
        title: 'Step 2: Mathematical Foundations',
        description: 'Build strong mathematical foundation for ML',
        duration: '3-4 weeks',
        topics: ['Linear Algebra', 'Statistics', 'Calculus', 'Probability Theory'],
        skills_gained: ['Mathematical Foundations', 'Statistical Analysis', 'ML Theory']
      },
      {
        id: 'step-3-mle-algorithms',
        title: 'Step 3: Machine Learning Algorithms',
        description: 'Learn core ML algorithms and their applications',
        duration: '4-5 weeks',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Regression', 'Classification', 'Clustering'],
        skills_gained: ['ML Algorithms', 'Model Selection', 'Algorithm Understanding']
      },
      {
        id: 'step-4-mle-frameworks',
        title: 'Step 4: Deep Learning Frameworks',
        description: 'Master TensorFlow and PyTorch for deep learning',
        duration: '4-5 weeks',
        topics: ['TensorFlow', 'PyTorch', 'Neural Networks', 'Deep Learning', 'Model Architecture'],
        skills_gained: ['Deep Learning', 'TensorFlow', 'PyTorch', 'Neural Networks']
      },
      {
        id: 'step-5-mle-deployment',
        title: 'Step 5: Model Deployment and MLOps',
        description: 'Deploy ML models to production and manage ML workflows',
        duration: '3-4 weeks',
        topics: ['Model Deployment', 'MLOps', 'Model Monitoring', 'CI/CD for ML', 'Containerization'],
        skills_gained: ['MLOps', 'Model Deployment', 'Production ML', 'Model Monitoring']
      },
      {
        id: 'step-6-mle-projects',
        title: 'Step 6: End-to-End ML Projects',
        description: 'Build complete ML projects from data to deployment',
        duration: '6-8 weeks',
        topics: ['Project Planning', 'Data Pipeline', 'Model Development', 'Production Deployment', 'Performance Monitoring'],
        skills_gained: ['End-to-End ML', 'Project Management', 'Production Systems', 'ML Engineering']
      }
    ],
    tags: ['ml', 'ai', 'python', 'tensorflow'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$100k - $180k',
    job_opportunities: ['ML Engineer', 'AI Engineer', 'Data Scientist'],
    industry_demand: 'High'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Protect systems, networks, and data from digital attacks and threats',
    role: 'Security Engineer',
    primary_skills: ['Network Security', 'Penetration Testing', 'Incident Response', 'Risk Assessment'],
    secondary_skills: ['Compliance', 'Forensics', 'Security Tools'],
    category: 'Cybersecurity',
    difficulty: 'Advanced',
    duration: '8-10 months',
    prerequisites: ['Networking knowledge', 'Basic programming', 'Understanding of operating systems'],
    steps: [
      {
        id: 'step-1-cybersecurity-fundamentals',
        title: 'Step 1: Cybersecurity Fundamentals',
        description: 'Learn core security concepts and principles',
        duration: '2-3 weeks',
        topics: ['CIA Triad', 'Security Frameworks', 'Risk Assessment', 'Threat Landscape'],
        skills_gained: ['Security Principles', 'Risk Assessment', 'Security Awareness']
      },
      {
        id: 'step-2-cybersecurity-network',
        title: 'Step 2: Network Security',
        description: 'Understand network protocols and security mechanisms',
        duration: '3-4 weeks',
        topics: ['TCP/IP Security', 'Firewalls', 'VPNs', 'Network Monitoring', 'Intrusion Detection'],
        skills_gained: ['Network Security', 'Firewall Configuration', 'Network Analysis']
      },
      {
        id: 'step-3-cybersecurity-os',
        title: 'Step 3: Operating System Security',
        description: 'Secure Windows, Linux, and other operating systems',
        duration: '2-3 weeks',
        topics: ['Windows Security', 'Linux Security', 'Access Controls', 'System Hardening'],
        skills_gained: ['OS Security', 'System Hardening', 'Access Management']
      },
      {
        id: 'step-4-cybersecurity-web',
        title: 'Step 4: Web Application Security',
        description: 'Identify and mitigate web application vulnerabilities',
        duration: '3-4 weeks',
        topics: ['OWASP Top 10', 'SQL Injection', 'XSS', 'CSRF', 'Security Testing'],
        skills_gained: ['Web Security', 'Vulnerability Assessment', 'OWASP Knowledge']
      },
      {
        id: 'step-5-cybersecurity-pentest',
        title: 'Step 5: Penetration Testing',
        description: 'Learn ethical hacking and penetration testing techniques',
        duration: '4-5 weeks',
        topics: ['Reconnaissance', 'Vulnerability Scanning', 'Exploitation', 'Post-Exploitation'],
        skills_gained: ['Penetration Testing', 'Ethical Hacking', 'Security Assessment']
      },
      {
        id: 'step-6-cybersecurity-incident',
        title: 'Step 6: Incident Response & Forensics',
        description: 'Handle security incidents and perform digital forensics',
        duration: '2-3 weeks',
        topics: ['Incident Response Process', 'Digital Forensics', 'Malware Analysis', 'Evidence Handling'],
        skills_gained: ['Incident Response', 'Digital Forensics', 'Threat Hunting']
      },
      {
        id: 'step-7-cybersecurity-tools',
        title: 'Step 7: Security Tools & Certifications',
        description: 'Master security tools and prepare for certifications',
        duration: '3-4 weeks',
        topics: ['Security Tools', 'SIEM', 'Certification Prep', 'Compliance'],
        skills_gained: ['Security Tools', 'SIEM Management', 'Professional Certification']
      }
    ],
    tags: ['security', 'cybersecurity', 'pentesting', 'networking'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $140k',
    job_opportunities: ['Security Engineer', 'Penetration Tester', 'Security Analyst'],
    industry_demand: 'High'
  },
  {
    id: 'ux-design',
    title: 'UX Design',
    description: 'Design user-centered digital experiences that are intuitive and engaging',
    role: 'UX Designer',
    primary_skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    secondary_skills: ['Visual Design', 'Information Architecture', 'Design Systems'],
    category: 'Design',
    subcategory: 'User Experience',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Basic design principles', 'Understanding of user psychology'],
    steps: [
      {
        id: 'step-1-ux-fundamentals',
        title: 'UX Design Fundamentals',
        description: 'Learn core UX principles and design thinking methodology',
        duration: '2-3 weeks',
        topics: ['Design thinking process', 'User-centered design', 'UX principles', 'Design process', 'Problem definition'],
        skills_gained: ['Design thinking', 'UX principles', 'Problem-solving methodology']
      },
      {
        id: 'step-2-user-research',
        title: 'User Research & Analysis',
        description: 'Master user research methods to understand user needs',
        duration: '3-4 weeks',
        topics: ['User interviews', 'Surveys', 'Usability testing', 'Persona development', 'Journey mapping', 'Analytics'],
        skills_gained: ['User research', 'Data analysis', 'Persona creation', 'Journey mapping']
      },
      {
        id: 'step-3-information-architecture',
        title: 'Information Architecture & Wireframing',
        description: 'Structure information and create wireframes for optimal user flow',
        duration: '2-3 weeks',
        topics: ['Information architecture', 'User flows', 'Wireframing', 'Site maps', 'Content strategy', 'Navigation design'],
        skills_gained: ['Information architecture', 'Wireframing', 'User flow design']
      },
      {
        id: 'step-4-prototyping',
        title: 'Prototyping & Interaction Design',
        description: 'Create interactive prototypes to test and validate designs',
        duration: '3 weeks',
        topics: ['Low-fi prototypes', 'High-fi prototypes', 'Interaction design', 'Micro-interactions', 'Animation principles'],
        skills_gained: ['Prototyping', 'Interaction design', 'Design validation']
      },
      {
        id: 'step-5-visual-design',
        title: 'Visual Design & Design Systems',
        description: 'Apply visual design principles and create consistent design systems',
        duration: '3-4 weeks',
        topics: ['Visual hierarchy', 'Typography', 'Color theory', 'Design systems', 'Style guides', 'Accessibility'],
        skills_gained: ['Visual design', 'Design systems', 'Accessibility design']
      },
      {
        id: 'step-6-testing-iteration',
        title: 'Usability Testing & Iteration',
        description: 'Test designs with users and iterate based on feedback',
        duration: '2-3 weeks',
        topics: ['Usability testing', 'A/B testing', 'Feedback analysis', 'Design iteration', 'Metrics and KPIs'],
        skills_gained: ['Usability testing', 'Design iteration', 'Performance measurement']
      }
    ],
    tags: ['ux', 'design', 'userresearch', 'prototyping'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['UX Designer', 'Product Designer', 'User Researcher'],
    industry_demand: 'High'
  },
  // SKILL-BASED ROADMAPS
  {
    id: 'react-js-mastery',
    title: 'React Development',
    description: 'Master React.js for building modern, interactive user interfaces',
    role: 'Frontend Developer',
    primary_skills: ['React', 'JSX', 'Hooks', 'State Management'],
    secondary_skills: ['Redux', 'React Router', 'Testing'],
    category: 'Web Development',
    subcategory: 'Frontend Framework',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['JavaScript fundamentals', 'HTML/CSS knowledge'],
    steps: [
      {
        id: 'step-1-react-setup',
        title: 'Step 1: React Environment Setup',
        description: 'Set up development environment and create first React app',
        duration: '1 week',
        topics: ['Create React App', 'Node.js Setup', 'Development Tools', 'Project Structure'],
        skills_gained: ['Development Environment', 'React CLI', 'Project Setup']
      },
      {
        id: 'step-2-jsx-components',
        title: 'Step 2: JSX and Components',
        description: 'Learn JSX syntax and create reusable components',
        duration: '1-2 weeks',
        topics: ['JSX Syntax', 'Component Creation', 'Props', 'Component Composition'],
        skills_gained: ['JSX', 'Component Architecture', 'Reusable Components']
      },
      {
        id: 'step-3-state-events',
        title: 'Step 3: State and Event Handling',
        description: 'Manage component state and handle user interactions',
        duration: '1-2 weeks',
        topics: ['useState Hook', 'Event Handlers', 'State Updates', 'Controlled Components'],
        skills_gained: ['State Management', 'Event Handling', 'User Interactions']
      },
      {
        id: 'step-4-react-hooks',
        title: 'Step 4: React Hooks Mastery',
        description: 'Master all essential React hooks for modern development',
        duration: '2-3 weeks',
        topics: ['useEffect', 'useContext', 'useReducer', 'Custom Hooks'],
        skills_gained: ['React Hooks', 'Side Effects', 'Advanced State Management']
      },
      {
        id: 'step-5-routing',
        title: 'Step 5: Routing and Navigation',
        description: 'Build single-page applications with React Router',
        duration: '1-2 weeks',
        topics: ['React Router', 'Route Configuration', 'Navigation', 'Route Parameters'],
        skills_gained: ['SPA Routing', 'Navigation', 'Multi-page Apps']
      },
      {
        id: 'step-6-state-management',
        title: 'Step 6: Advanced State Management',
        description: 'Learn state management patterns for complex applications',
        duration: '2-3 weeks',
        topics: ['Context API', 'Redux Toolkit', 'State Patterns', 'Global State'],
        skills_gained: ['Redux', 'Global State Management', 'State Architecture']
      },
      {
        id: 'step-7-testing',
        title: 'Step 7: Testing React Applications',
        description: 'Test your React components and applications thoroughly',
        duration: '1-2 weeks',
        topics: ['Jest', 'React Testing Library', 'Component Testing', 'Integration Tests'],
        skills_gained: ['Testing', 'Test-Driven Development', 'Quality Assurance']
      },
      {
        id: 'step-8-optimization',
        title: 'Step 8: Performance Optimization',
        description: 'Optimize React applications for better performance',
        duration: '1-2 weeks',
        topics: ['Memoization', 'Code Splitting', 'Bundle Optimization', 'Performance Tools'],
        skills_gained: ['Performance Optimization', 'Code Splitting', 'React Profiling']
      }
    ],
    tags: ['react', 'javascript', 'frontend', 'ui'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $120k',
    job_opportunities: ['React Developer', 'Frontend Developer', 'UI Developer'],
    industry_demand: 'High'
  },
  {
    id: 'nodejs-backend',
    title: 'Node.js Backend',
    description: 'Build scalable server-side applications with Node.js',
    role: 'Backend Developer',
    primary_skills: ['Node.js', 'Express.js', 'NPM', 'Async Programming'],
    secondary_skills: ['Database Integration', 'Authentication', 'API Design'],
    category: 'Web Development',
    subcategory: 'Backend Technology',
    difficulty: 'Intermediate',
    duration: '3-5 months',
    prerequisites: ['JavaScript knowledge', 'Basic programming concepts'],
    steps: [
      {
        id: 'step-1-nodejs-basics',
        title: 'Step 1: Node.js Fundamentals',
        description: 'Learn Node.js runtime and core concepts',
        duration: '1-2 weeks',
        topics: ['Node.js Runtime', 'Event Loop', 'Global Objects', 'Process & Environment'],
        skills_gained: ['Node.js Basics', 'Runtime Understanding', 'JavaScript Server-side']
      },
      {
        id: 'step-2-nodejs-modules',
        title: 'Step 2: Modules and NPM',
        description: 'Work with Node.js modules and package management',
        duration: '1-2 weeks',
        topics: ['CommonJS Modules', 'ES6 Modules', 'NPM', 'Package.json', 'Dependencies'],
        skills_gained: ['Module System', 'Package Management', 'Dependency Management']
      },
      {
        id: 'step-3-nodejs-fs-http',
        title: 'Step 3: File System and HTTP',
        description: 'Handle files and create basic HTTP servers',
        duration: '1-2 weeks',
        topics: ['File System API', 'HTTP Module', 'Streams', 'Buffers'],
        skills_gained: ['File Operations', 'HTTP Server', 'Stream Processing']
      },
      {
        id: 'step-4-express-framework',
        title: 'Step 4: Express.js Framework',
        description: 'Build web applications with Express.js',
        duration: '2-3 weeks',
        topics: ['Express Setup', 'Routing', 'Middleware', 'Request/Response'],
        skills_gained: ['Express.js', 'Web Framework', 'Middleware Pattern']
      },
      {
        id: 'step-5-nodejs-database',
        title: 'Step 5: Database Integration',
        description: 'Connect Node.js applications to databases',
        duration: '2-3 weeks',
        topics: ['MongoDB Integration', 'Mongoose ODM', 'SQL Databases', 'Database Queries'],
        skills_gained: ['Database Integration', 'ODM/ORM', 'Data Persistence']
      },
      {
        id: 'step-6-nodejs-auth',
        title: 'Step 6: Authentication and Security',
        description: 'Implement authentication and security measures',
        duration: '1-2 weeks',
        topics: ['JWT Authentication', 'Password Hashing', 'Session Management', 'CORS'],
        skills_gained: ['Authentication', 'Security', 'User Management']
      },
      {
        id: 'step-7-nodejs-testing',
        title: 'Step 7: Testing and Deployment',
        description: 'Test and deploy Node.js applications',
        duration: '1-2 weeks',
        topics: ['Unit Testing', 'Integration Testing', 'Deployment', 'Environment Management'],
        skills_gained: ['Testing', 'Deployment', 'Production Ready']
      }
    ],
    tags: ['nodejs', 'backend', 'javascript', 'server'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Node.js Developer', 'Backend Developer', 'Full Stack Developer'],
    industry_demand: 'High'
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    description: 'Master Python programming for various applications from web to data science',
    role: 'Python Developer',
    primary_skills: ['Python Syntax', 'OOP', 'Data Structures', 'Libraries'],
    secondary_skills: ['Web Frameworks', 'Data Analysis', 'Testing'],
    category: 'Programming Languages',
    difficulty: 'Beginner',
    duration: '3-4 months',
    prerequisites: ['Basic programming concepts'],
    steps: [
      {
        id: 'step-1-python-basics',
        title: 'Step 1: Python Basics and Syntax',
        description: 'Learn Python syntax, variables, and basic programming concepts',
        duration: '1-2 weeks',
        topics: ['Variables & Data Types', 'Basic Operations', 'Input/Output', 'Comments'],
        skills_gained: ['Python Syntax', 'Basic Programming', 'Problem Solving']
      },
      {
        id: 'step-2-control-structures',
        title: 'Step 2: Control Structures',
        description: 'Master conditional statements and loops in Python',
        duration: '1-2 weeks',
        topics: ['If/Else Statements', 'For Loops', 'While Loops', 'Break/Continue'],
        skills_gained: ['Control Flow', 'Logical Thinking', 'Loop Structures']
      },
      {
        id: 'step-3-data-structures',
        title: 'Step 3: Data Structures',
        description: 'Work with Python built-in data structures',
        duration: '2-3 weeks',
        topics: ['Lists', 'Dictionaries', 'Tuples', 'Sets', 'String Operations'],
        skills_gained: ['Data Structures', 'Data Manipulation', 'Collection Handling']
      },
      {
        id: 'step-4-functions',
        title: 'Step 4: Functions and Modules',
        description: 'Create reusable code with functions and modules',
        duration: '1-2 weeks',
        topics: ['Function Definition', 'Parameters', 'Return Values', 'Modules', 'Packages'],
        skills_gained: ['Function Programming', 'Code Reusability', 'Module System']
      },
      {
        id: 'step-5-oop',
        title: 'Step 5: Object-Oriented Programming',
        description: 'Learn OOP concepts and implement classes in Python',
        duration: '2-3 weeks',
        topics: ['Classes', 'Objects', 'Inheritance', 'Polymorphism', 'Encapsulation'],
        skills_gained: ['OOP', 'Class Design', 'Object-Oriented Thinking']
      },
      {
        id: 'step-6-file-handling',
        title: 'Step 6: File Handling and Error Management',
        description: 'Handle files and manage errors effectively',
        duration: '1-2 weeks',
        topics: ['File I/O', 'Exception Handling', 'Try/Except', 'File Modes'],
        skills_gained: ['File Operations', 'Error Handling', 'Debugging']
      },
      {
        id: 'step-7-libraries',
        title: 'Step 7: Popular Python Libraries',
        description: 'Explore essential Python libraries and frameworks',
        duration: '2-3 weeks',
        topics: ['Standard Library', 'Third-party Libraries', 'Package Management', 'Virtual Environments'],
        skills_gained: ['Library Usage', 'Package Management', 'Environment Setup']
      },
      {
        id: 'step-8-projects',
        title: 'Step 8: Real-world Projects',
        description: 'Build practical applications to solidify your skills',
        duration: '3-4 weeks',
        topics: ['Project Planning', 'Code Organization', 'Testing', 'Documentation'],
        skills_gained: ['Project Development', 'Best Practices', 'Real-world Application']
      }
    ],
    tags: ['python', 'programming', 'versatile', 'beginner'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $125k',
    job_opportunities: ['Python Developer', 'Data Scientist', 'Backend Developer'],
    industry_demand: 'High'
  },
  {
    id: 'docker-containerization',
    title: 'Docker Containerization',
    description: 'Master containerization with Docker for modern application deployment',
    role: 'DevOps Engineer',
    primary_skills: ['Docker', 'Containers', 'Images', 'Docker Compose'],
    secondary_skills: ['Container Orchestration', 'Security', 'Optimization'],
    category: 'DevOps',
    subcategory: 'Containerization',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['Basic Linux knowledge', 'Understanding of applications'],
    steps: [
      {
        id: 'step-1-container-basics',
        title: 'Step 1: Container Fundamentals',
        description: 'Understand containerization concepts and benefits',
        duration: '1 week',
        topics: ['Containers vs VMs', 'Container Benefits', 'Docker Architecture', 'Installation'],
        skills_gained: ['Container Concepts', 'Docker Installation', 'Virtualization Understanding']
      },
      {
        id: 'step-2-docker-images',
        title: 'Step 2: Docker Images and Containers',
        description: 'Work with Docker images and run your first containers',
        duration: '1-2 weeks',
        topics: ['Docker Images', 'Running Containers', 'Container Lifecycle', 'Basic Commands'],
        skills_gained: ['Image Management', 'Container Operations', 'Docker CLI']
      },
      {
        id: 'step-3-dockerfile',
        title: 'Step 3: Building Custom Images',
        description: 'Create custom Docker images using Dockerfile',
        duration: '1-2 weeks',
        topics: ['Dockerfile Syntax', 'Image Layers', 'Build Context', 'Best Practices'],
        skills_gained: ['Image Building', 'Dockerfile Creation', 'Image Optimization']
      },
      {
        id: 'step-4-data-volumes',
        title: 'Step 4: Data Management and Volumes',
        description: 'Manage persistent data in Docker containers',
        duration: '1 week',
        topics: ['Docker Volumes', 'Bind Mounts', 'Data Persistence', 'Volume Management'],
        skills_gained: ['Data Persistence', 'Volume Management', 'Storage Solutions']
      },
      {
        id: 'step-5-networking',
        title: 'Step 5: Docker Networking',
        description: 'Configure container networking and communication',
        duration: '1-2 weeks',
        topics: ['Container Networks', 'Port Mapping', 'Network Drivers', 'Container Communication'],
        skills_gained: ['Container Networking', 'Network Configuration', 'Service Discovery']
      },
      {
        id: 'step-6-docker-compose',
        title: 'Step 6: Multi-Container Applications',
        description: 'Orchestrate multi-container applications with Docker Compose',
        duration: '1-2 weeks',
        topics: ['Docker Compose', 'Service Definition', 'Environment Variables', 'Service Dependencies'],
        skills_gained: ['Docker Compose', 'Multi-container Apps', 'Service Orchestration']
      },
      {
        id: 'step-7-production',
        title: 'Step 7: Production Deployment',
        description: 'Deploy Docker applications in production environments',
        duration: '1-2 weeks',
        topics: ['Security Best Practices', 'Image Registries', 'Container Monitoring', 'Deployment Strategies'],
        skills_gained: ['Production Deployment', 'Container Security', 'Registry Management']
      }
    ],
    tags: ['docker', 'containers', 'devops', 'deployment'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $140k',
    job_opportunities: ['DevOps Engineer', 'Cloud Engineer', 'Platform Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'aws-cloud-platform',
    title: 'AWS Cloud Platform',
    description: 'Master Amazon Web Services for cloud computing and infrastructure',
    role: 'Cloud Engineer',
    primary_skills: ['AWS Services', 'EC2', 'S3', 'IAM', 'VPC'],
    secondary_skills: ['Cost Optimization', 'Security', 'Monitoring'],
    category: 'Cloud',
    subcategory: 'AWS',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Basic networking', 'Understanding of cloud concepts'],
    steps: [
      {
        id: 'step-1-aws-basics',
        title: 'Step 1: AWS Fundamentals',
        description: 'Learn cloud computing concepts and AWS basics',
        duration: '1-2 weeks',
        topics: ['Cloud Computing Concepts', 'AWS Global Infrastructure', 'AWS Account Setup', 'AWS Console'],
        skills_gained: ['Cloud Concepts', 'AWS Basics', 'Infrastructure Understanding']
      },
      {
        id: 'step-2-aws-compute',
        title: 'Step 2: Compute Services (EC2)',
        description: 'Master AWS compute services and virtual machines',
        duration: '2-3 weeks',
        topics: ['EC2 Instances', 'AMIs', 'Security Groups', 'Load Balancers', 'Auto Scaling'],
        skills_gained: ['EC2', 'Compute Services', 'Scalability']
      },
      {
        id: 'step-3-aws-storage',
        title: 'Step 3: Storage Services (S3)',
        description: 'Work with AWS storage solutions and data management',
        duration: '1-2 weeks',
        topics: ['S3 Buckets', 'Object Storage', 'Storage Classes', 'Access Policies'],
        skills_gained: ['S3', 'Object Storage', 'Data Management']
      },
      {
        id: 'step-4-aws-database',
        title: 'Step 4: Database Services (RDS)',
        description: 'Manage databases in AWS cloud environment',
        duration: '2-3 weeks',
        topics: ['RDS', 'Database Engines', 'Backups', 'Multi-AZ Deployments'],
        skills_gained: ['RDS', 'Database Management', 'High Availability']
      },
      {
        id: 'step-5-aws-networking',
        title: 'Step 5: Networking (VPC)',
        description: 'Configure virtual private clouds and networking',
        duration: '2-3 weeks',
        topics: ['VPC', 'Subnets', 'Route Tables', 'Internet Gateways', 'NAT Gateways'],
        skills_gained: ['VPC', 'Network Configuration', 'Security']
      },
      {
        id: 'step-6-aws-security',
        title: 'Step 6: Identity and Security (IAM)',
        description: 'Implement security and access management',
        duration: '1-2 weeks',
        topics: ['IAM Users', 'Roles', 'Policies', 'MFA', 'Security Best Practices'],
        skills_gained: ['IAM', 'Security', 'Access Management']
      },
      {
        id: 'step-7-aws-monitoring',
        title: 'Step 7: Monitoring and Cost Management',
        description: 'Monitor resources and optimize costs',
        duration: '1-2 weeks',
        topics: ['CloudWatch', 'Cost Explorer', 'Billing Alerts', 'Performance Monitoring'],
        skills_gained: ['Monitoring', 'Cost Optimization', 'Performance Management']
      }
    ],
    tags: ['aws', 'cloud', 'infrastructure', 'scalability'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$85k - $150k',
    job_opportunities: ['Cloud Engineer', 'Solutions Architect', 'DevOps Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'system-design',
    title: 'System Design',
    description: 'Learn to design scalable, distributed systems and architecture patterns',
    role: 'Software Architect',
    primary_skills: ['Architecture Patterns', 'Scalability', 'Database Design', 'Load Balancing'],
    secondary_skills: ['Microservices', 'Caching', 'Monitoring'],
    category: 'Architecture',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Software development experience', 'Database knowledge'],
    steps: [
      {
        id: 'step-1-system-fundamentals',
        title: 'Step 1: System Design Fundamentals',
        description: 'Learn core system design principles and concepts',
        duration: '2-3 weeks',
        topics: ['Scalability', 'Reliability', 'Availability', 'Consistency', 'Performance'],
        skills_gained: ['System Design Principles', 'Architecture Thinking', 'Trade-off Analysis']
      },
      {
        id: 'step-2-database-design',
        title: 'Step 2: Database Design & Architecture',
        description: 'Design scalable database systems and data storage',
        duration: '2-3 weeks',
        topics: ['SQL vs NoSQL', 'Database Sharding', 'Replication', 'ACID Properties'],
        skills_gained: ['Database Architecture', 'Data Storage Design', 'Database Scaling']
      },
      {
        id: 'step-3-load-balancing',
        title: 'Step 3: Load Balancing & Caching',
        description: 'Implement load balancing and caching strategies',
        duration: '2-3 weeks',
        topics: ['Load Balancers', 'Caching Strategies', 'CDN', 'Session Management'],
        skills_gained: ['Load Balancing', 'Caching', 'Performance Optimization']
      },
      {
        id: 'step-4-microservices',
        title: 'Step 4: Microservices Architecture',
        description: 'Design and implement microservices systems',
        duration: '3-4 weeks',
        topics: ['Microservices Patterns', 'Service Communication', 'API Gateway', 'Service Mesh'],
        skills_gained: ['Microservices', 'Distributed Systems', 'Service Architecture']
      },
      {
        id: 'step-5-messaging-queues',
        title: 'Step 5: Message Queues & Communication',
        description: 'Implement asynchronous communication patterns',
        duration: '2-3 weeks',
        topics: ['Message Queues', 'Event Streaming', 'Pub/Sub', 'Message Brokers'],
        skills_gained: ['Async Communication', 'Message Systems', 'Event-Driven Architecture']
      },
      {
        id: 'step-6-monitoring-logging',
        title: 'Step 6: Monitoring & Observability',
        description: 'Design monitoring and logging systems',
        duration: '1-2 weeks',
        topics: ['Logging', 'Monitoring', 'Alerting', 'Distributed Tracing'],
        skills_gained: ['System Monitoring', 'Observability', 'Performance Tracking']
      },
      {
        id: 'step-7-case-studies',
        title: 'Step 7: Real-world Case Studies',
        description: 'Analyze and design complex systems like social media, e-commerce',
        duration: '4-5 weeks',
        topics: ['Social Media Design', 'E-commerce Systems', 'Chat Systems', 'Video Streaming'],
        skills_gained: ['System Design Practice', 'Interview Preparation', 'Complex Architecture']
      }
    ],
    tags: ['systemdesign', 'architecture', 'scalability', 'distributed'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$100k - $180k',
    job_opportunities: ['Software Architect', 'Principal Engineer', 'System Designer'],
    industry_demand: 'High'
  },
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    description: 'Build decentralized applications and smart contracts on blockchain platforms',
    role: 'Blockchain Developer',
    primary_skills: ['Solidity', 'Web3', 'Smart Contracts', 'Ethereum'],
    secondary_skills: ['Cryptography', 'DeFi', 'NFTs', 'Testing'],
    category: 'Blockchain',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Programming experience', 'Understanding of cryptography basics'],
    steps: [
      {
        id: 'step-1-blockchain-fundamentals',
        title: 'Blockchain Fundamentals',
        description: 'Learn blockchain technology basics and cryptocurrency concepts',
        duration: '2-3 weeks',
        topics: ['Blockchain basics', 'Cryptography', 'Hash functions', 'Digital signatures', 'Bitcoin overview', 'Consensus mechanisms'],
        skills_gained: ['Blockchain concepts', 'Cryptographic principles', 'Distributed systems']
      },
      {
        id: 'step-2-ethereum-basics',
        title: 'Ethereum & Smart Contracts',
        description: 'Understand Ethereum platform and smart contract fundamentals',
        duration: '2-3 weeks',
        topics: ['Ethereum architecture', 'Accounts', 'Transactions', 'Gas', 'EVM basics', 'Smart contract intro'],
        skills_gained: ['Ethereum platform', 'Smart contract concepts', 'Transaction mechanics']
      },
      {
        id: 'step-3-solidity-programming',
        title: 'Solidity Programming',
        description: 'Master Solidity language for smart contract development',
        duration: '3-4 weeks',
        topics: ['Solidity syntax', 'Data types', 'Functions', 'Modifiers', 'Events', 'Error handling', 'Design patterns'],
        skills_gained: ['Solidity programming', 'Smart contract development', 'Security practices']
      },
      {
        id: 'step-4-web3-development',
        title: 'Web3 & DApp Development',
        description: 'Build decentralized applications using Web3 technologies',
        duration: '3-4 weeks',
        topics: ['Web3.js', 'Ethers.js', 'MetaMask integration', 'Frontend integration', 'IPFS', 'DApp architecture'],
        skills_gained: ['Web3 development', 'DApp creation', 'Frontend integration']
      },
      {
        id: 'step-5-advanced-concepts',
        title: 'Advanced Blockchain Concepts',
        description: 'Explore advanced topics like DeFi, NFTs, and Layer 2 solutions',
        duration: '3-4 weeks',
        topics: ['DeFi protocols', 'NFT standards', 'Layer 2 scaling', 'Cross-chain bridges', 'Governance tokens'],
        skills_gained: ['DeFi development', 'NFT creation', 'Scaling solutions']
      },
      {
        id: 'step-6-production-deployment',
        title: 'Testing & Production Deployment',
        description: 'Test, audit, and deploy smart contracts to production',
        duration: '2-3 weeks',
        topics: ['Testing frameworks', 'Security auditing', 'Gas optimization', 'Mainnet deployment', 'Monitoring'],
        skills_gained: ['Production deployment', 'Security auditing', 'Performance optimization']
      }
    ],
    tags: ['blockchain', 'web3', 'solidity', 'defi'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$90k - $160k',
    job_opportunities: ['Blockchain Developer', 'Smart Contract Developer', 'Web3 Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Lead product strategy, development, and launch from concept to market',
    role: 'Product Manager',
    primary_skills: ['Product Strategy', 'Market Research', 'Roadmapping', 'Analytics'],
    secondary_skills: ['User Research', 'Agile', 'Leadership', 'Communication'],
    category: 'Management',
    subcategory: 'Product Management',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Business understanding', 'Analytical thinking', 'Communication skills'],
    steps: [
      {
        id: 'step-1-pm-fundamentals',
        title: 'Step 1: Product Management Fundamentals',
        description: 'Learn core product management principles and methodologies',
        duration: '2-3 weeks',
        topics: ['Product Management Role', 'Product Lifecycle', 'Product Strategy', 'Value Propositions', 'Product-Market Fit'],
        skills_gained: ['PM Fundamentals', 'Strategic Thinking', 'Product Vision']
      },
      {
        id: 'step-2-market-research',
        title: 'Step 2: Market Research & Customer Discovery',
        description: 'Master market analysis and customer research techniques',
        duration: '2-3 weeks',
        topics: ['Market Analysis', 'Competitive Research', 'Customer Interviews', 'User Personas', 'Jobs-to-be-Done Framework'],
        skills_gained: ['Market Research', 'Customer Discovery', 'Competitive Analysis']
      },
      {
        id: 'step-3-product-planning',
        title: 'Step 3: Product Planning & Roadmapping',
        description: 'Create product strategies, roadmaps, and prioritization frameworks',
        duration: '3 weeks',
        topics: ['Product Roadmapping', 'Feature Prioritization', 'OKRs & KPIs', 'Stakeholder Management', 'Resource Planning'],
        skills_gained: ['Product Planning', 'Roadmap Creation', 'Prioritization']
      },
      {
        id: 'step-4-requirements-design',
        title: 'Step 4: Requirements & Design Collaboration',
        description: 'Define requirements and collaborate with design and engineering teams',
        duration: '2-3 weeks',
        topics: ['User Stories', 'Acceptance Criteria', 'Wireframing', 'Design Collaboration', 'Technical Specifications'],
        skills_gained: ['Requirements Definition', 'Cross-functional Collaboration', 'Design Thinking']
      },
      {
        id: 'step-5-agile-execution',
        title: 'Step 5: Agile Development & Execution',
        description: 'Lead agile development processes and product execution',
        duration: '2-3 weeks',
        topics: ['Scrum & Kanban', 'Sprint Planning', 'Backlog Management', 'Team Leadership', 'Quality Assurance'],
        skills_gained: ['Agile Methodologies', 'Team Management', 'Execution Excellence']
      },
      {
        id: 'step-6-analytics-optimization',
        title: 'Step 6: Product Analytics & Optimization',
        description: 'Measure product success and optimize based on data insights',
        duration: '2 weeks',
        topics: ['Product Analytics', 'A/B Testing', 'User Feedback', 'Performance Metrics', 'Continuous Improvement'],
        skills_gained: ['Data Analysis', 'Product Optimization', 'Performance Measurement']
      }
    ],
    tags: ['product', 'management', 'strategy', 'analytics'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$85k - $140k',
    job_opportunities: ['Product Manager', 'Product Owner', 'Strategy Manager'],
    industry_demand: 'High'
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    description: 'Ensure software quality through testing strategies and automation',
    role: 'QA Engineer',
    primary_skills: ['Test Planning', 'Manual Testing', 'Automation Testing', 'Bug Tracking'],
    secondary_skills: ['Performance Testing', 'Security Testing', 'CI/CD Integration'],
    category: 'Quality Assurance',
    difficulty: 'Intermediate',
    duration: '4-5 months',
    prerequisites: ['Basic programming', 'Understanding of software development'],
    steps: [
      {
        id: 'step-1-qa-fundamentals',
        title: 'Step 1: Software Testing Fundamentals',
        description: 'Learn core testing principles, methodologies, and best practices',
        duration: '2 weeks',
        topics: ['Testing Principles', 'SDLC & STLC', 'Test Levels', 'Test Types', 'Testing Documentation'],
        skills_gained: ['Testing Theory', 'Quality Concepts', 'Testing Methodologies']
      },
      {
        id: 'step-2-qa-manual-testing',
        title: 'Step 2: Manual Testing Techniques',
        description: 'Master manual testing approaches and test design techniques',
        duration: '3 weeks',
        topics: ['Test Case Design', 'Black Box Testing', 'White Box Testing', 'Exploratory Testing', 'Boundary Value Analysis'],
        skills_gained: ['Manual Testing', 'Test Design', 'Test Execution']
      },
      {
        id: 'step-3-qa-defect-management',
        title: 'Step 3: Defect Management & Tools',
        description: 'Learn defect lifecycle management and testing tools',
        duration: '2 weeks',
        topics: ['Bug Lifecycle', 'Defect Reporting', 'Issue Tracking Tools', 'Test Management', 'Severity & Priority'],
        skills_gained: ['Defect Management', 'Tool Proficiency', 'Quality Metrics']
      },
      {
        id: 'step-4-qa-automation',
        title: 'Step 4: Test Automation Fundamentals',
        description: 'Introduction to test automation frameworks and tools',
        duration: '4 weeks',
        topics: ['Automation Frameworks', 'Selenium WebDriver', 'Test Scripts', 'Page Object Model', 'Data-driven Testing'],
        skills_gained: ['Test Automation', 'Scripting', 'Framework Development']
      },
      {
        id: 'step-5-qa-api-performance',
        title: 'Step 5: API & Performance Testing',
        description: 'Learn API testing and performance testing techniques',
        duration: '3 weeks',
        topics: ['REST API Testing', 'Postman', 'Performance Testing', 'Load Testing', 'JMeter'],
        skills_gained: ['API Testing', 'Performance Testing', 'Load Testing']
      },
      {
        id: 'step-6-qa-cicd-integration',
        title: 'Step 6: CI/CD Integration & Advanced Testing',
        description: 'Integrate testing into CI/CD pipelines and advanced testing practices',
        duration: '2-3 weeks',
        topics: ['CI/CD Integration', 'Test Pipeline', 'Cross-browser Testing', 'Mobile Testing', 'Security Testing'],
        skills_gained: ['DevOps Integration', 'Advanced Testing', 'Quality Engineering']
      }
    ],
    tags: ['qa', 'testing', 'automation', 'quality'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$60k - $110k',
    job_opportunities: ['QA Engineer', 'Test Automation Engineer', 'Quality Analyst'],
    industry_demand: 'High'
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Develop and deploy artificial intelligence solutions and applications',
    role: 'AI Engineer',
    primary_skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
    secondary_skills: ['Computer Vision', 'NLP', 'Model Deployment', 'Data Engineering'],
    category: 'AI/ML',
    subcategory: 'Artificial Intelligence',
    difficulty: 'Advanced',
    duration: '10-12 months',
    prerequisites: ['Strong programming skills', 'Mathematics background', 'Statistics knowledge'],
    steps: [
      {
        id: 'step-1-ai-mathematics',
        title: 'Step 1: AI Mathematics & Foundations',
        description: 'Build strong mathematical foundations for artificial intelligence',
        duration: '3-4 weeks',
        topics: ['Linear Algebra', 'Calculus', 'Statistics & Probability', 'Optimization', 'Information Theory'],
        skills_gained: ['Mathematical Foundations', 'Statistical Analysis', 'Optimization Theory']
      },
      {
        id: 'step-2-ml-fundamentals',
        title: 'Step 2: Machine Learning Fundamentals',
        description: 'Learn core machine learning concepts and algorithms',
        duration: '4-5 weeks',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Evaluation', 'Cross-validation'],
        skills_gained: ['ML Algorithms', 'Model Development', 'Data Preprocessing']
      },
      {
        id: 'step-3-deep-learning',
        title: 'Step 3: Deep Learning & Neural Networks',
        description: 'Master deep learning architectures and neural network design',
        duration: '5-6 weeks',
        topics: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers', 'Backpropagation', 'Regularization'],
        skills_gained: ['Deep Learning', 'Neural Architecture', 'Advanced Modeling']
      },
      {
        id: 'step-4-ai-frameworks',
        title: 'Step 4: AI Frameworks & Tools',
        description: 'Learn popular AI/ML frameworks and development tools',
        duration: '4-5 weeks',
        topics: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'MLflow', 'Weights & Biases'],
        skills_gained: ['Framework Mastery', 'Tool Proficiency', 'MLOps Basics']
      },
      {
        id: 'step-5-specialized-ai',
        title: 'Step 5: Specialized AI Applications',
        description: 'Explore specialized AI domains and applications',
        duration: '6 weeks',
        topics: ['Computer Vision', 'Natural Language Processing', 'Reinforcement Learning', 'Generative AI', 'Time Series'],
        skills_gained: ['Domain Expertise', 'Specialized Applications', 'Advanced AI Techniques']
      },
      {
        id: 'step-6-ai-production',
        title: 'Step 6: AI in Production & MLOps',
        description: 'Deploy and manage AI systems in production environments',
        duration: '4-5 weeks',
        topics: ['Model Deployment', 'MLOps Pipelines', 'Model Monitoring', 'Scalability', 'AI Ethics'],
        skills_gained: ['Production Deployment', 'MLOps Engineering', 'System Scaling']
      }
    ],
    tags: ['ai', 'machinelearning', 'deeplearning', 'python'],
    popularity_score: 10,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$110k - $200k',
    job_opportunities: ['AI Engineer', 'ML Engineer', 'Research Scientist'],
    industry_demand: 'High'
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    description: 'Create engaging games for various platforms using modern game engines',
    role: 'Game Developer',
    primary_skills: ['Unity', 'C#', 'Game Design', 'Graphics Programming'],
    secondary_skills: ['3D Modeling', 'Animation', 'Physics', 'Optimization'],
    category: 'Game Development',
    difficulty: 'Intermediate',
    duration: '6-8 months',
    prerequisites: ['Programming knowledge', 'Basic math skills', 'Creativity'],
    steps: [
      {
        id: 'step-1-game-fundamentals',
        title: 'Step 1: Game Development Fundamentals',
        description: 'Learn core game development concepts and principles',
        duration: '2-3 weeks',
        topics: ['Game Design Principles', 'Game Loops', 'Game Architecture', 'Player Experience'],
        skills_gained: ['Game Design', 'Game Architecture', 'Design Thinking']
      },
      {
        id: 'step-2-csharp-basics',
        title: 'Step 2: C# Programming for Games',
        description: 'Master C# programming language for game development',
        duration: '2-3 weeks',
        topics: ['C# Syntax', 'OOP in C#', 'Collections', 'Event Handling'],
        skills_gained: ['C# Programming', 'Object-Oriented Programming', 'Game Programming']
      },
      {
        id: 'step-3-unity-basics',
        title: 'Step 3: Unity Engine Fundamentals',
        description: 'Get started with Unity game engine and editor',
        duration: '2-3 weeks',
        topics: ['Unity Interface', 'GameObjects', 'Components', 'Scenes', 'Prefabs'],
        skills_gained: ['Unity Engine', 'Game Editor', 'Scene Management']
      },
      {
        id: 'step-4-2d-game-dev',
        title: 'Step 4: 2D Game Development',
        description: 'Create 2D games with sprites and animations',
        duration: '2-3 weeks',
        topics: ['Sprites', '2D Physics', 'Animation', 'Collision Detection', 'Tilemap'],
        skills_gained: ['2D Game Development', 'Sprite Animation', '2D Physics']
      },
      {
        id: 'step-5-3d-game-dev',
        title: 'Step 5: 3D Game Development',
        description: 'Build 3D games with models, lighting, and physics',
        duration: '3-4 weeks',
        topics: ['3D Models', 'Materials', 'Lighting', '3D Physics', 'Camera Control'],
        skills_gained: ['3D Game Development', '3D Graphics', '3D Physics']
      },
      {
        id: 'step-6-game-mechanics',
        title: 'Step 6: Game Mechanics & Systems',
        description: 'Implement core game mechanics and systems',
        duration: '2-3 weeks',
        topics: ['Input Systems', 'UI/UX', 'Game States', 'Save Systems', 'Audio'],
        skills_gained: ['Game Mechanics', 'User Interface', 'Game Systems']
      },
      {
        id: 'step-7-game-optimization',
        title: 'Step 7: Optimization & Publishing',
        description: 'Optimize games and prepare for publishing',
        duration: '1-2 weeks',
        topics: ['Performance Optimization', 'Build Settings', 'Platform Deployment', 'Testing'],
        skills_gained: ['Game Optimization', 'Publishing', 'Multi-platform Development']
      }
    ],
    tags: ['gamedev', 'unity', 'csharp', 'graphics'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $120k',
    job_opportunities: ['Game Developer', 'Unity Developer', 'Gameplay Programmer'],
    industry_demand: 'Medium'
  },
  {
    id: 'flutter-development',
    title: 'Flutter Development',
    description: 'Build cross-platform mobile applications with Flutter and Dart',
    role: 'Mobile Developer',
    primary_skills: ['Flutter', 'Dart', 'Mobile UI', 'State Management'],
    secondary_skills: ['Firebase', 'Platform Integration', 'Publishing'],
    category: 'Mobile Development',
    subcategory: 'Cross-Platform',
    difficulty: 'Intermediate',
    duration: '4-5 months',
    prerequisites: ['Basic programming', 'Understanding of mobile concepts'],
    steps: [
      {
        id: 'step-1-dart-basics',
        title: 'Step 1: Dart Programming Language',
        description: 'Learn Dart programming language fundamentals',
        duration: '1-2 weeks',
        topics: ['Dart Syntax', 'Variables & Functions', 'Classes & Objects', 'Collections'],
        skills_gained: ['Dart Programming', 'OOP in Dart', 'Language Fundamentals']
      },
      {
        id: 'step-2-flutter-setup',
        title: 'Step 2: Flutter Development Environment',
        description: 'Set up Flutter development environment and tools',
        duration: '1 week',
        topics: ['Flutter Installation', 'IDE Setup', 'Emulators', 'Hot Reload'],
        skills_gained: ['Development Environment', 'Flutter SDK', 'IDE Configuration']
      },
      {
        id: 'step-3-flutter-widgets',
        title: 'Step 3: Flutter Widgets & UI',
        description: 'Master Flutter widgets and create beautiful UIs',
        duration: '2-3 weeks',
        topics: ['Basic Widgets', 'Layout Widgets', 'Material Design', 'Custom Widgets'],
        skills_gained: ['Flutter Widgets', 'UI Design', 'Material Design']
      },
      {
        id: 'step-4-flutter-navigation',
        title: 'Step 4: Navigation & Routing',
        description: 'Implement navigation between screens in Flutter apps',
        duration: '1-2 weeks',
        topics: ['Navigation', 'Routes', 'Named Routes', 'Navigation Drawer'],
        skills_gained: ['App Navigation', 'Routing', 'Multi-screen Apps']
      },
      {
        id: 'step-5-flutter-state',
        title: 'Step 5: State Management',
        description: 'Manage app state with Provider, Bloc, or Riverpod',
        duration: '2-3 weeks',
        topics: ['StatefulWidget', 'Provider', 'Bloc Pattern', 'State Solutions'],
        skills_gained: ['State Management', 'App Architecture', 'Data Flow']
      },
      {
        id: 'step-6-flutter-backend',
        title: 'Step 6: Backend Integration',
        description: 'Connect Flutter apps to APIs and databases',
        duration: '2-3 weeks',
        topics: ['HTTP Requests', 'REST APIs', 'JSON Handling', 'Firebase Integration'],
        skills_gained: ['API Integration', 'Backend Connectivity', 'Firebase']
      },
      {
        id: 'step-7-flutter-deployment',
        title: 'Step 7: Testing & Deployment',
        description: 'Test and deploy Flutter apps to app stores',
        duration: '1-2 weeks',
        topics: ['Widget Testing', 'Integration Testing', 'Play Store', 'App Store'],
        skills_gained: ['Testing', 'App Deployment', 'Store Publishing']
      }
    ],
    tags: ['flutter', 'dart', 'mobile', 'crossplatform'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['Flutter Developer', 'Mobile App Developer', 'Cross-Platform Developer'],
    industry_demand: 'High'
  },
  // MORE ROLE-BASED ROADMAPS
  {
    id: 'software-architect',
    title: 'Software Architect',
    description: 'Design and guide the technical vision for complex software systems',
    role: 'Software Architect',
    primary_skills: ['System Design', 'Architecture Patterns', 'Technical Leadership', 'Documentation'],
    secondary_skills: ['Cloud Architecture', 'Microservices', 'Performance Optimization'],
    category: 'Architecture',
    difficulty: 'Advanced',
    duration: '8-12 months',
    prerequisites: ['Senior development experience', 'System design knowledge'],
    steps: [
      {
        id: 'step-1-architecture-principles',
        title: 'Step 1: Architecture Principles & Foundations',
        description: 'Master fundamental architecture principles and design thinking',
        duration: '3-4 weeks',
        topics: ['SOLID Principles', 'Design Patterns', 'Architecture Principles', 'System Thinking', 'Quality Attributes'],
        skills_gained: ['Architecture Principles', 'Design Patterns', 'System Thinking']
      },
      {
        id: 'step-2-architecture-styles',
        title: 'Step 2: Architecture Styles & Patterns',
        description: 'Learn various architectural styles and when to apply them',
        duration: '4 weeks',
        topics: ['Layered Architecture', 'Microservices', 'Event-Driven Architecture', 'Hexagonal Architecture', 'CQRS Pattern'],
        skills_gained: ['Architecture Styles', 'Pattern Application', 'Architectural Decision Making']
      },
      {
        id: 'step-3-system-design',
        title: 'Step 3: System Design & Modeling',
        description: 'Design complex systems and create architectural models',
        duration: '4-5 weeks',
        topics: ['System Design Process', 'Architecture Documentation', 'UML Modeling', 'Component Design', 'Interface Design'],
        skills_gained: ['System Design', 'Architecture Documentation', 'Technical Communication']
      },
      {
        id: 'step-4-technology-strategy',
        title: 'Step 4: Technology Strategy & Evaluation',
        description: 'Evaluate and select appropriate technologies for projects',
        duration: '3 weeks',
        topics: ['Technology Evaluation', 'Proof of Concepts', 'Risk Assessment', 'Technology Roadmaps', 'Vendor Analysis'],
        skills_gained: ['Technology Strategy', 'Risk Assessment', 'Strategic Planning']
      },
      {
        id: 'step-5-team-leadership',
        title: 'Step 5: Technical Leadership & Team Guidance',
        description: 'Lead development teams and guide technical decisions',
        duration: '3-4 weeks',
        topics: ['Technical Leadership', 'Code Reviews', 'Mentoring', 'Team Communication', 'Decision Making'],
        skills_gained: ['Technical Leadership', 'Team Management', 'Mentoring']
      },
      {
        id: 'step-6-quality-governance',
        title: 'Step 6: Quality Assurance & Architecture Governance',
        description: 'Ensure architectural quality and establish governance practices',
        duration: '2-3 weeks',
        topics: ['Architecture Governance', 'Quality Gates', 'Technical Debt Management', 'Performance Optimization', 'Security Architecture'],
        skills_gained: ['Architecture Governance', 'Quality Assurance', 'Performance Optimization']
      }
    ],
    tags: ['architecture', 'systemdesign', 'leadership', 'patterns'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$120k - $200k',
    job_opportunities: ['Software Architect', 'Principal Engineer', 'Technical Lead'],
    industry_demand: 'High'
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    description: 'Create clear, comprehensive documentation for technical products and APIs',
    role: 'Technical Writer',
    primary_skills: ['Technical Writing', 'Documentation', 'API Documentation', 'Content Strategy'],
    secondary_skills: ['Markdown', 'Version Control', 'User Experience'],
    category: 'Documentation',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Strong writing skills', 'Basic technical understanding'],
    steps: [
      {
        id: 'step-1-writing-fundamentals',
        title: 'Step 1: Writing Fundamentals',
        description: 'Master core technical writing principles and communication skills',
        duration: '2-3 weeks',
        topics: ['Writing Clarity', 'Audience Analysis', 'Information Architecture', 'Style Guides', 'Grammar Essentials'],
        skills_gained: ['Technical Writing', 'Communication Skills', 'Content Structure']
      },
      {
        id: 'step-2-documentation-tools',
        title: 'Step 2: Documentation Tools & Platforms',
        description: 'Learn industry-standard tools for creating and managing documentation',
        duration: '2 weeks',
        topics: ['Markdown', 'Git/GitHub', 'Documentation Platforms', 'Content Management Systems', 'Version Control'],
        skills_gained: ['Documentation Tools', 'Version Control', 'Markup Languages']
      },
      {
        id: 'step-3-api-documentation',
        title: 'Step 3: API Documentation',
        description: 'Create comprehensive API documentation and developer guides',
        duration: '3 weeks',
        topics: ['REST API Documentation', 'OpenAPI/Swagger', 'SDK Documentation', 'Code Examples', 'Interactive Docs'],
        skills_gained: ['API Documentation', 'Developer Experience', 'Technical Specifications']
      },
      {
        id: 'step-4-user-documentation',
        title: 'Step 4: User Guides & Tutorials',
        description: 'Develop user-friendly guides, tutorials, and help systems',
        duration: '2-3 weeks',
        topics: ['User Journey Mapping', 'Tutorial Creation', 'Help Systems', 'Video Documentation', 'Knowledge Base Design'],
        skills_gained: ['User Documentation', 'Instructional Design', 'Content Strategy']
      },
      {
        id: 'step-5-visual-content',
        title: 'Step 5: Visual Content Creation',
        description: 'Incorporate diagrams, screenshots, and multimedia in documentation',
        duration: '2 weeks',
        topics: ['Diagram Creation', 'Screenshot Standards', 'Video Production', 'Infographics', 'Visual Hierarchy'],
        skills_gained: ['Visual Communication', 'Multimedia Content', 'Design Principles']
      },
      {
        id: 'step-6-content-strategy',
        title: 'Step 6: Content Strategy & Analytics',
        description: 'Develop content strategies and measure documentation effectiveness',
        duration: '1-2 weeks',
        topics: ['Content Planning', 'Analytics', 'User Feedback', 'Content Auditing', 'Continuous Improvement'],
        skills_gained: ['Content Strategy', 'Analytics', 'Performance Optimization']
      }
    ],
    tags: ['writing', 'documentation', 'communication', 'content'],
    popularity_score: 5,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$55k - $95k',
    job_opportunities: ['Technical Writer', 'Documentation Engineer', 'Developer Advocate'],
    industry_demand: 'Medium'
  },
  {
    id: 'system-administrator',
    title: 'System Administrator',
    description: 'Manage and maintain IT infrastructure, servers, and network systems',
    role: 'System Administrator',
    primary_skills: ['Linux Administration', 'Network Management', 'Server Configuration', 'Security'],
    secondary_skills: ['Scripting', 'Monitoring', 'Backup & Recovery'],
    category: 'Infrastructure',
    difficulty: 'Intermediate',
    duration: '5-6 months',
    prerequisites: ['Basic networking knowledge', 'Command line familiarity'],
    steps: [
      {
        id: 'step-1-os-fundamentals',
        title: 'Step 1: Operating System Fundamentals',
        description: 'Master core Linux/Unix system administration concepts',
        duration: '3-4 weeks',
        topics: ['Linux Commands', 'File Systems', 'Process Management', 'System Boot Process', 'Package Management'],
        skills_gained: ['Linux Administration', 'Command Line Proficiency', 'System Navigation']
      },
      {
        id: 'step-2-user-security',
        title: 'Step 2: User Management & Security',
        description: 'Configure user accounts, permissions, and system security',
        duration: '2-3 weeks',
        topics: ['User Management', 'File Permissions', 'SSH Configuration', 'Sudo Administration', 'Security Hardening'],
        skills_gained: ['User Administration', 'Security Management', 'Access Control']
      },
      {
        id: 'step-3-network-services',
        title: 'Step 3: Network & Services Management',
        description: 'Configure and manage network services and system daemons',
        duration: '3 weeks',
        topics: ['Network Configuration', 'DNS', 'DHCP', 'Web Servers', 'Service Management', 'Firewall Configuration'],
        skills_gained: ['Network Administration', 'Service Configuration', 'Troubleshooting']
      },
      {
        id: 'step-4-storage-backup',
        title: 'Step 4: Storage & Backup Management',
        description: 'Manage storage systems, RAID, and backup solutions',
        duration: '2-3 weeks',
        topics: ['Disk Management', 'RAID Configuration', 'Backup Strategies', 'File System Maintenance', 'Storage Monitoring'],
        skills_gained: ['Storage Administration', 'Data Protection', 'System Maintenance']
      },
      {
        id: 'step-5-monitoring-automation',
        title: 'Step 5: Monitoring & Automation',
        description: 'Implement system monitoring and automation scripts',
        duration: '2-3 weeks',
        topics: ['System Monitoring', 'Log Management', 'Performance Tuning', 'Shell Scripting', 'Task Automation'],
        skills_gained: ['System Monitoring', 'Automation', 'Performance Optimization']
      },
      {
        id: 'step-6-virtualization-cloud',
        title: 'Step 6: Virtualization & Cloud Administration',
        description: 'Manage virtual environments and cloud infrastructure',
        duration: '2-3 weeks',
        topics: ['Virtualization Technologies', 'Container Management', 'Cloud Platforms', 'Infrastructure as Code', 'Disaster Recovery'],
        skills_gained: ['Virtualization', 'Cloud Administration', 'Infrastructure Management']
      }
    ],
    tags: ['sysadmin', 'linux', 'infrastructure', 'networking'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$60k - $100k',
    job_opportunities: ['System Administrator', 'Linux Administrator', 'IT Specialist'],
    industry_demand: 'Medium'
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    description: 'Build and maintain data pipelines and infrastructure for analytics',
    role: 'Data Engineer',
    primary_skills: ['Python', 'SQL', 'ETL Pipelines', 'Data Warehousing'],
    secondary_skills: ['Apache Spark', 'Kafka', 'Docker', 'Cloud Platforms'],
    category: 'Data Science',
    subcategory: 'Data Engineering',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Programming experience', 'Database knowledge'],
    steps: [
      {
        id: 'step-1-data-fundamentals',
        title: 'Step 1: Data Engineering Fundamentals',
        description: 'Master core concepts of data engineering and architecture',
        duration: '3-4 weeks',
        topics: ['Data Architecture', 'Data Modeling', 'Database Design', 'Data Types', 'Data Quality Principles'],
        skills_gained: ['Data Architecture', 'Data Modeling', 'Database Fundamentals']
      },
      {
        id: 'step-2-programming-sql',
        title: 'Step 2: Programming & SQL Mastery',
        description: 'Develop strong programming and SQL skills for data manipulation',
        duration: '3-4 weeks',
        topics: ['Python for Data Engineering', 'Advanced SQL', 'Data Manipulation', 'Query Optimization', 'Database Administration'],
        skills_gained: ['Python Programming', 'Advanced SQL', 'Data Manipulation']
      },
      {
        id: 'step-3-etl-pipelines',
        title: 'Step 3: ETL Pipelines & Processing',
        description: 'Build robust ETL pipelines for data transformation and loading',
        duration: '4-5 weeks',
        topics: ['ETL Design Patterns', 'Data Pipeline Architecture', 'Apache Airflow', 'Data Validation', 'Error Handling'],
        skills_gained: ['ETL Development', 'Pipeline Design', 'Workflow Orchestration']
      },
      {
        id: 'step-4-big-data-tools',
        title: 'Step 4: Big Data Technologies',
        description: 'Work with distributed systems and big data processing frameworks',
        duration: '4-5 weeks',
        topics: ['Apache Spark', 'Hadoop Ecosystem', 'Kafka', 'Distributed Computing', 'Stream Processing'],
        skills_gained: ['Big Data Processing', 'Distributed Systems', 'Stream Processing']
      },
      {
        id: 'step-5-cloud-platforms',
        title: 'Step 5: Cloud Data Platforms',
        description: 'Implement data solutions on cloud platforms',
        duration: '3-4 weeks',
        topics: ['AWS Data Services', 'Azure Data Factory', 'Google Cloud Platform', 'Data Warehousing', 'Serverless Computing'],
        skills_gained: ['Cloud Data Engineering', 'Data Warehousing', 'Cloud Platforms']
      },
      {
        id: 'step-6-monitoring-optimization',
        title: 'Step 6: Monitoring & Optimization',
        description: 'Monitor data pipelines and optimize performance',
        duration: '2-3 weeks',
        topics: ['Pipeline Monitoring', 'Performance Tuning', 'Cost Optimization', 'Data Governance', 'Security Best Practices'],
        skills_gained: ['Performance Optimization', 'Data Governance', 'Monitoring']
      }
    ],
    tags: ['dataengineering', 'etl', 'pipelines', 'bigdata'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$90k - $150k',
    job_opportunities: ['Data Engineer', 'Pipeline Engineer', 'Data Architect'],
    industry_demand: 'High'
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    description: 'Design and implement scalable cloud infrastructure solutions',
    role: 'Cloud Architect',
    primary_skills: ['Cloud Platforms', 'Infrastructure Design', 'Security', 'Cost Optimization'],
    secondary_skills: ['Multi-Cloud', 'Disaster Recovery', 'Compliance'],
    category: 'Cloud',
    difficulty: 'Advanced',
    duration: '8-10 months',
    prerequisites: ['Cloud experience', 'System administration background'],
    steps: [
      {
        id: 'step-1-cloud-fundamentals',
        title: 'Step 1: Cloud Computing Fundamentals',
        description: 'Master core cloud computing concepts and service models',
        duration: '3-4 weeks',
        topics: ['Cloud Service Models', 'Deployment Models', 'Virtualization', 'Cloud Economics', 'Service Level Agreements'],
        skills_gained: ['Cloud Computing Concepts', 'Service Models', 'Cloud Economics']
      },
      {
        id: 'step-2-architecture-patterns',
        title: 'Step 2: Cloud Architecture Patterns',
        description: 'Learn essential cloud design patterns and best practices',
        duration: '4-5 weeks',
        topics: ['Microservices Architecture', 'Serverless Patterns', 'Event-Driven Architecture', 'API Gateway Patterns', 'Load Balancing'],
        skills_gained: ['Architecture Design', 'Design Patterns', 'Distributed Systems']
      },
      {
        id: 'step-3-platform-services',
        title: 'Step 3: Cloud Platform Services',
        description: 'Deep dive into major cloud platform services and capabilities',
        duration: '4-6 weeks',
        topics: ['Compute Services', 'Storage Solutions', 'Database Services', 'Networking', 'Identity Management'],
        skills_gained: ['Cloud Platform Mastery', 'Service Integration', 'Resource Management']
      },
      {
        id: 'step-4-security-compliance',
        title: 'Step 4: Security & Compliance',
        description: 'Implement robust security and compliance frameworks',
        duration: '3-4 weeks',
        topics: ['Cloud Security Models', 'Identity and Access Management', 'Encryption', 'Compliance Frameworks', 'Security Monitoring'],
        skills_gained: ['Cloud Security', 'Compliance Management', 'Risk Assessment']
      },
      {
        id: 'step-5-optimization-automation',
        title: 'Step 5: Optimization & Automation',
        description: 'Optimize costs and automate cloud infrastructure management',
        duration: '3-4 weeks',
        topics: ['Cost Optimization', 'Infrastructure as Code', 'CI/CD Pipelines', 'Monitoring and Alerting', 'Performance Tuning'],
        skills_gained: ['Cost Management', 'Infrastructure Automation', 'Performance Optimization']
      },
      {
        id: 'step-6-disaster-recovery',
        title: 'Step 6: Disaster Recovery & Multi-Cloud',
        description: 'Design resilient systems with disaster recovery and multi-cloud strategies',
        duration: '3-4 weeks',
        topics: ['Disaster Recovery Planning', 'Business Continuity', 'Multi-Cloud Architecture', 'Data Replication', 'Failover Strategies'],
        skills_gained: ['Disaster Recovery', 'Multi-Cloud Design', 'Business Continuity']
      }
    ],
    tags: ['cloud', 'architecture', 'aws', 'scalability'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$110k - $180k',
    job_opportunities: ['Cloud Architect', 'Solutions Architect', 'Infrastructure Architect'],
    industry_demand: 'High'
  },
  {
    id: 'salesforce-developer',
    title: 'Salesforce Developer',
    description: 'Build custom applications and integrations on the Salesforce platform',
    role: 'Salesforce Developer',
    primary_skills: ['Apex', 'Lightning Components', 'SOQL', 'Salesforce APIs'],
    secondary_skills: ['Process Builder', 'Flows', 'Integration Patterns'],
    category: 'CRM Development',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Basic programming knowledge', 'Understanding of CRM concepts'],
    steps: [
      {
        id: 'step-1-platform-fundamentals',
        title: 'Step 1: Salesforce Platform Fundamentals',
        description: 'Master core Salesforce concepts and platform architecture',
        duration: '2-3 weeks',
        topics: ['Salesforce Architecture', 'Data Model', 'Security Model', 'User Management', 'Organization Setup'],
        skills_gained: ['Salesforce Platform Knowledge', 'CRM Fundamentals', 'Platform Administration']
      },
      {
        id: 'step-2-declarative-development',
        title: 'Step 2: Declarative Development',
        description: 'Build applications using point-and-click tools',
        duration: '3-4 weeks',
        topics: ['Custom Objects', 'Custom Fields', 'Validation Rules', 'Workflow Rules', 'Process Builder', 'Flow Builder'],
        skills_gained: ['Declarative Development', 'Business Logic', 'Automation']
      },
      {
        id: 'step-3-apex-programming',
        title: 'Step 3: Apex Programming',
        description: 'Learn Apex programming for custom business logic',
        duration: '4-5 weeks',
        topics: ['Apex Syntax', 'Triggers', 'Classes', 'SOQL/SOSL', 'DML Operations', 'Exception Handling'],
        skills_gained: ['Apex Programming', 'Database Operations', 'Custom Logic']
      },
      {
        id: 'step-4-lightning-development',
        title: 'Step 4: Lightning Platform Development',
        description: 'Build modern user interfaces with Lightning components',
        duration: '4 weeks',
        topics: ['Lightning Web Components', 'Aura Components', 'Lightning App Builder', 'Component Communication', 'Event Handling'],
        skills_gained: ['Lightning Development', 'Component Architecture', 'Modern UI Development']
      },
      {
        id: 'step-5-integration-apis',
        title: 'Step 5: Integration & APIs',
        description: 'Connect Salesforce with external systems',
        duration: '3-4 weeks',
        topics: ['REST/SOAP APIs', 'Callouts', 'Integration Patterns', 'Authentication', 'Data Synchronization'],
        skills_gained: ['API Integration', 'External Connectivity', 'Data Exchange']
      },
      {
        id: 'step-6-testing-deployment',
        title: 'Step 6: Testing & Deployment',
        description: 'Test applications and manage deployments across environments',
        duration: '2-3 weeks',
        topics: ['Unit Testing', 'Test Classes', 'Change Sets', 'Deployment Tools', 'DevOps Practices'],
        skills_gained: ['Testing Strategies', 'Deployment Management', 'Quality Assurance']
      }
    ],
    tags: ['salesforce', 'crm', 'apex', 'lightning'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Salesforce Developer', 'CRM Developer', 'Salesforce Consultant'],
    industry_demand: 'High'
  },
  {
    id: 'wordpress-developer',
    title: 'WordPress Developer',
    description: 'Create custom WordPress themes, plugins, and websites',
    role: 'WordPress Developer',
    primary_skills: ['PHP', 'WordPress APIs', 'Theme Development', 'Plugin Development'],
    secondary_skills: ['MySQL', 'JavaScript', 'CSS', 'SEO'],
    category: 'Web Development',
    subcategory: 'CMS Development',
    difficulty: 'Beginner',
    duration: '3-4 months',
    prerequisites: ['Basic web development knowledge', 'HTML/CSS familiarity'],
    steps: [
      {
        id: 'step-1-wordpress-setup',
        title: 'Step 1: WordPress Setup & Configuration',
        description: 'Install WordPress and understand its architecture and structure',
        duration: '1-2 weeks',
        topics: ['Local Development Setup', 'WordPress Installation', 'Admin Dashboard', 'File Structure', 'Database Overview'],
        skills_gained: ['WordPress Installation', 'Local Development', 'Admin Navigation']
      },
      {
        id: 'step-2-theme-development',
        title: 'Step 2: Theme Development & Customization',
        description: 'Create custom WordPress themes from scratch',
        duration: '3-4 weeks',
        topics: ['Theme Structure', 'Template Hierarchy', 'Custom Post Types', 'Advanced Custom Fields', 'Theme Customizer'],
        skills_gained: ['Theme Development', 'PHP Programming', 'Template Design']
      },
      {
        id: 'step-3-plugin-development',
        title: 'Step 3: Plugin Development',
        description: 'Build custom plugins and extend WordPress functionality',
        duration: '3 weeks',
        topics: ['Plugin Architecture', 'Hooks & Filters', 'Custom Shortcodes', 'Settings API', 'Database Operations'],
        skills_gained: ['Plugin Development', 'WordPress Hooks', 'Custom Functionality']
      },
      {
        id: 'step-4-advanced-features',
        title: 'Step 4: Advanced WordPress Features',
        description: 'Implement advanced WordPress features and optimizations',
        duration: '2-3 weeks',
        topics: ['Custom Fields', 'WooCommerce', 'Multisite', 'REST API', 'Performance Optimization'],
        skills_gained: ['Advanced Features', 'E-commerce Integration', 'API Development']
      },
      {
        id: 'step-5-security-maintenance',
        title: 'Step 5: Security & Maintenance',
        description: 'Secure WordPress sites and implement maintenance procedures',
        duration: '1-2 weeks',
        topics: ['Security Best Practices', 'Backup Strategies', 'Update Management', 'User Permissions', 'Malware Prevention'],
        skills_gained: ['WordPress Security', 'Site Maintenance', 'Risk Management']
      }
    ],
    tags: ['wordpress', 'php', 'cms', 'web'],
    popularity_score: 5,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$45k - $85k',
    job_opportunities: ['WordPress Developer', 'Web Developer', 'CMS Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    description: 'Implement and maintain security measures to protect systems and data',
    role: 'Security Engineer',
    primary_skills: ['Security Architecture', 'Threat Assessment', 'Incident Response', 'Compliance'],
    secondary_skills: ['Penetration Testing', 'Forensics', 'Risk Management'],
    category: 'Cybersecurity',
    subcategory: 'Security Engineering',
    difficulty: 'Advanced',
    duration: '7-9 months',
    prerequisites: ['Networking knowledge', 'System administration experience'],
    steps: [
      {
        id: 'step-1-security-fundamentals',
        title: 'Step 1: Security Engineering Fundamentals',
        description: 'Master core security principles and engineering practices',
        duration: '2-3 weeks',
        topics: ['Security by Design', 'CIA Triad', 'Defense in Depth', 'Zero Trust Architecture', 'Security Frameworks'],
        skills_gained: ['Security Principles', 'Security Architecture', 'Framework Knowledge']
      },
      {
        id: 'step-2-threat-modeling',
        title: 'Step 2: Threat Modeling & Risk Assessment',
        description: 'Learn to identify, assess, and mitigate security threats',
        duration: '3 weeks',
        topics: ['Threat Modeling Methodologies', 'Attack Vectors', 'Risk Assessment', 'Vulnerability Analysis', 'STRIDE Framework'],
        skills_gained: ['Threat Analysis', 'Risk Assessment', 'Security Planning']
      },
      {
        id: 'step-3-secure-development',
        title: 'Step 3: Secure Development Practices',
        description: 'Implement security in the software development lifecycle',
        duration: '3-4 weeks',
        topics: ['Secure Coding', 'Code Review', 'Static Analysis', 'OWASP Top 10', 'Security Testing'],
        skills_gained: ['Secure Coding', 'Security Testing', 'Code Security']
      },
      {
        id: 'step-4-infrastructure-security',
        title: 'Step 4: Infrastructure Security',
        description: 'Secure cloud and on-premises infrastructure',
        duration: '4 weeks',
        topics: ['Network Security', 'Cloud Security', 'Identity Management', 'Access Controls', 'Monitoring & Logging'],
        skills_gained: ['Infrastructure Security', 'Cloud Security', 'Access Management']
      },
      {
        id: 'step-5-incident-response',
        title: 'Step 5: Incident Response & Recovery',
        description: 'Develop incident response capabilities and procedures',
        duration: '2-3 weeks',
        topics: ['Incident Response Plans', 'Forensic Analysis', 'Recovery Procedures', 'Post-Incident Review', 'Business Continuity'],
        skills_gained: ['Incident Management', 'Forensics', 'Recovery Planning']
      },
      {
        id: 'step-6-compliance-governance',
        title: 'Step 6: Compliance & Governance',
        description: 'Understand regulatory requirements and security governance',
        duration: '2-3 weeks',
        topics: ['Compliance Frameworks', 'Audit Preparation', 'Policy Development', 'Security Metrics', 'Governance Structures'],
        skills_gained: ['Compliance Management', 'Security Governance', 'Policy Development']
      }
    ],
    tags: ['security', 'cybersecurity', 'engineering', 'compliance'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$85k - $145k',
    job_opportunities: ['Security Engineer', 'Information Security Analyst', 'Cyber Security Specialist'],
    industry_demand: 'High'
  },
  {
    id: 'solutions-architect',
    title: 'Solutions Architect',
    description: 'Design comprehensive technology solutions for business requirements',
    role: 'Solutions Architect',
    primary_skills: ['Solution Design', 'Business Analysis', 'Technology Strategy', 'Integration'],
    secondary_skills: ['Cloud Platforms', 'Enterprise Architecture', 'Stakeholder Management'],
    category: 'Architecture',
    subcategory: 'Solutions Architecture',
    difficulty: 'Advanced',
    duration: '8-10 months',
    prerequisites: ['Senior technical experience', 'Business understanding'],
    steps: [
      {
        id: 'step-1-business-analysis',
        title: 'Step 1: Business Analysis & Requirements',
        description: 'Master business requirement gathering and analysis techniques',
        duration: '2-3 weeks',
        topics: ['Business Process Analysis', 'Stakeholder Management', 'Requirements Gathering', 'Gap Analysis', 'Business Cases'],
        skills_gained: ['Business Analysis', 'Stakeholder Communication', 'Requirements Documentation']
      },
      {
        id: 'step-2-architecture-patterns',
        title: 'Step 2: Enterprise Architecture Patterns',
        description: 'Learn enterprise architecture patterns and frameworks',
        duration: '3-4 weeks',
        topics: ['Architecture Frameworks', 'Design Patterns', 'Integration Patterns', 'Service-Oriented Architecture', 'Microservices'],
        skills_gained: ['Architecture Patterns', 'Enterprise Design', 'Integration Architecture']
      },
      {
        id: 'step-3-technology-evaluation',
        title: 'Step 3: Technology Evaluation & Selection',
        description: 'Evaluate and select appropriate technologies for solutions',
        duration: '2-3 weeks',
        topics: ['Technology Assessment', 'Vendor Evaluation', 'Cost-Benefit Analysis', 'Technology Roadmaps', 'Risk Assessment'],
        skills_gained: ['Technology Evaluation', 'Strategic Planning', 'Decision Making']
      },
      {
        id: 'step-4-solution-design',
        title: 'Step 4: Solution Design & Documentation',
        description: 'Design comprehensive solutions and create technical documentation',
        duration: '3-4 weeks',
        topics: ['Solution Architecture', 'Technical Documentation', 'System Integration', 'Data Architecture', 'Security Design'],
        skills_gained: ['Solution Design', 'Technical Documentation', 'System Integration']
      },
      {
        id: 'step-5-implementation-governance',
        title: 'Step 5: Implementation & Governance',
        description: 'Guide implementation and establish governance frameworks',
        duration: '2-3 weeks',
        topics: ['Implementation Planning', 'Change Management', 'Quality Assurance', 'Performance Monitoring', 'Governance Models'],
        skills_gained: ['Implementation Management', 'Quality Assurance', 'Governance']
      },
      {
        id: 'step-6-optimization-evolution',
        title: 'Step 6: Solution Optimization & Evolution',
        description: 'Optimize existing solutions and plan for future evolution',
        duration: '2 weeks',
        topics: ['Performance Optimization', 'Scalability Planning', 'Technology Evolution', 'Continuous Improvement', 'Innovation Strategy'],
        skills_gained: ['Solution Optimization', 'Strategic Planning', 'Innovation Management']
      }
    ],
    tags: ['solutions', 'architecture', 'business', 'integration'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$100k - $170k',
    job_opportunities: ['Solutions Architect', 'Enterprise Architect', 'Technical Consultant'],
    industry_demand: 'High'
  },
  // SPECIALIZED ENGINEERING ROLES
  {
    id: 'embedded-systems-engineer',
    title: 'Embedded Systems Engineer',
    description: 'Design and develop embedded software for hardware devices and IoT systems',
    role: 'Embedded Systems Engineer',
    primary_skills: ['C/C++', 'Microcontrollers', 'RTOS', 'Hardware Integration'],
    secondary_skills: ['PCB Design', 'IoT Protocols', 'Debugging Tools'],
    category: 'Embedded Systems',
    difficulty: 'Advanced',
    duration: '8-10 months',
    prerequisites: ['Strong programming background', 'Electronics knowledge'],
    steps: [
      {
        id: 'step-1-embedded-fundamentals',
        title: 'Step 1: Embedded Systems Fundamentals',
        description: 'Learn core concepts of embedded systems and microcontroller programming',
        duration: '2-3 weeks',
        topics: ['Embedded Systems Overview', 'Microcontroller Architecture', 'Digital Electronics', 'Memory Types', 'Peripheral Interfaces'],
        skills_gained: ['Embedded Concepts', 'Hardware Understanding', 'System Architecture']
      },
      {
        id: 'step-2-c-programming',
        title: 'Step 2: C Programming for Embedded',
        description: 'Master C programming specifically for embedded systems',
        duration: '3-4 weeks',
        topics: ['Embedded C', 'Pointers & Memory', 'Bit Manipulation', 'Volatile Variables', 'Compiler Optimizations'],
        skills_gained: ['Embedded C Programming', 'Memory Management', 'Low-level Programming']
      },
      {
        id: 'step-3-hardware-interfacing',
        title: 'Step 3: Hardware Interfacing',
        description: 'Learn to interface with various hardware components and sensors',
        duration: '3-4 weeks',
        topics: ['GPIO Programming', 'ADC/DAC', 'PWM', 'Timers', 'Serial Communication', 'Sensor Integration'],
        skills_gained: ['Hardware Interfacing', 'Sensor Programming', 'Peripheral Control']
      },
      {
        id: 'step-4-rtos-programming',
        title: 'Step 4: Real-Time Operating Systems',
        description: 'Understand and implement real-time operating systems concepts',
        duration: '4 weeks',
        topics: ['RTOS Concepts', 'Task Scheduling', 'Inter-task Communication', 'Memory Management', 'FreeRTOS'],
        skills_gained: ['RTOS Programming', 'Task Management', 'Real-time Systems']
      },
      {
        id: 'step-5-communication-protocols',
        title: 'Step 5: Communication Protocols',
        description: 'Master various communication protocols used in embedded systems',
        duration: '3 weeks',
        topics: ['UART/USART', 'SPI', 'I2C', 'CAN Bus', 'Ethernet', 'Wireless Protocols'],
        skills_gained: ['Protocol Implementation', 'Network Programming', 'System Integration']
      },
      {
        id: 'step-6-system-optimization',
        title: 'Step 6: System Optimization & Debugging',
        description: 'Optimize embedded systems and master debugging techniques',
        duration: '2-3 weeks',
        topics: ['Power Optimization', 'Code Optimization', 'Debugging Tools', 'Testing Strategies', 'System Validation'],
        skills_gained: ['System Optimization', 'Debugging Skills', 'Performance Tuning']
      }
    ],
    tags: ['embedded', 'iot', 'hardware', 'microcontrollers'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $135k',
    job_opportunities: ['Embedded Engineer', 'Firmware Developer', 'IoT Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    description: 'Design, build, and program robotic systems for various applications',
    role: 'Robotics Engineer',
    primary_skills: ['ROS', 'Python/C++', 'Control Systems', 'Computer Vision'],
    secondary_skills: ['Machine Learning', 'Sensor Integration', 'Path Planning'],
    category: 'Robotics',
    difficulty: 'Advanced',
    duration: '10-12 months',
    prerequisites: ['Programming experience', 'Engineering background', 'Mathematics'],
    steps: [
      {
        id: 'step-1-robotics-fundamentals',
        title: 'Step 1: Robotics Fundamentals',
        description: 'Learn core robotics concepts, mathematics, and system architecture',
        duration: '3-4 weeks',
        topics: ['Robot Kinematics', 'Coordinate Transforms', 'Linear Algebra', 'Control Theory Basics', 'Robot Anatomy'],
        skills_gained: ['Mathematical Foundations', 'Robotics Theory', 'System Understanding']
      },
      {
        id: 'step-2-ros-programming',
        title: 'Step 2: ROS Programming & Architecture',
        description: 'Master Robot Operating System programming and architecture',
        duration: '4-5 weeks',
        topics: ['ROS Nodes & Topics', 'Messages & Services', 'Launch Files', 'Parameter Server', 'ROS Tools'],
        skills_gained: ['ROS Programming', 'Distributed Systems', 'Robot Communication']
      },
      {
        id: 'step-3-sensors-perception',
        title: 'Step 3: Sensors & Perception',
        description: 'Integrate and process data from various robotic sensors',
        duration: '4 weeks',
        topics: ['LIDAR', 'Cameras', 'IMU', 'Encoders', 'Sensor Fusion', 'Point Cloud Processing'],
        skills_gained: ['Sensor Integration', 'Data Processing', 'Perception Systems']
      },
      {
        id: 'step-4-motion-planning',
        title: 'Step 4: Motion Planning & Navigation',
        description: 'Implement path planning and autonomous navigation systems',
        duration: '4-5 weeks',
        topics: ['Path Planning Algorithms', 'Obstacle Avoidance', 'SLAM', 'Localization', 'Navigation Stack'],
        skills_gained: ['Path Planning', 'Autonomous Navigation', 'Mapping & Localization']
      },
      {
        id: 'step-5-manipulation-control',
        title: 'Step 5: Robot Manipulation & Control',
        description: 'Control robotic arms and implement manipulation tasks',
        duration: '4 weeks',
        topics: ['Forward/Inverse Kinematics', 'Trajectory Planning', 'Grasping', 'Force Control', 'MoveIt!'],
        skills_gained: ['Robot Manipulation', 'Control Systems', 'Trajectory Planning']
      },
      {
        id: 'step-6-ai-integration',
        title: 'Step 6: AI Integration & Advanced Systems',
        description: 'Integrate AI/ML capabilities and build advanced robotic systems',
        duration: '3-4 weeks',
        topics: ['Computer Vision', 'Machine Learning', 'Deep Learning', 'Behavior Trees', 'Multi-robot Systems'],
        skills_gained: ['AI Integration', 'Advanced Robotics', 'Intelligent Systems']
      }
    ],
    tags: ['robotics', 'ros', 'automation', 'ai'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$85k - $140k',
    job_opportunities: ['Robotics Engineer', 'Automation Engineer', 'Research Engineer'],
    industry_demand: 'Medium'
  },
  {
    id: 'computer-vision-engineer',
    title: 'Computer Vision Engineer',
    description: 'Develop systems that can interpret and analyze visual information',
    role: 'Computer Vision Engineer',
    primary_skills: ['OpenCV', 'Deep Learning', 'Python', 'Image Processing'],
    secondary_skills: ['TensorFlow', 'Object Detection', 'Neural Networks'],
    category: 'AI/ML',
    subcategory: 'Computer Vision',
    difficulty: 'Advanced',
    duration: '8-10 months',
    prerequisites: ['Programming skills', 'Mathematics background', 'ML knowledge'],
    steps: [
      {
        id: 'step-1-cv-fundamentals',
        title: 'Step 1: Computer Vision Fundamentals',
        description: 'Learn foundational concepts of computer vision and image processing',
        duration: '2-3 weeks',
        topics: ['Image Representation', 'Digital Image Processing', 'Color Spaces', 'Histograms', 'Basic Transformations'],
        skills_gained: ['Image Processing Basics', 'Computer Vision Theory', 'Mathematical Foundations']
      },
      {
        id: 'step-2-opencv-programming',
        title: 'Step 2: OpenCV Programming',
        description: 'Master OpenCV library for computer vision applications',
        duration: '3-4 weeks',
        topics: ['OpenCV Setup', 'Image Operations', 'Filtering & Enhancement', 'Morphological Operations', 'Geometric Transformations'],
        skills_gained: ['OpenCV Programming', 'Image Manipulation', 'Computer Vision Implementation']
      },
      {
        id: 'step-3-feature-detection',
        title: 'Step 3: Feature Detection & Matching',
        description: 'Learn feature detection algorithms and image matching techniques',
        duration: '3 weeks',
        topics: ['Corner Detection', 'Edge Detection', 'SIFT/SURF', 'ORB Features', 'Feature Matching'],
        skills_gained: ['Feature Detection', 'Image Matching', 'Keypoint Analysis']
      },
      {
        id: 'step-4-object-detection',
        title: 'Step 4: Object Detection & Recognition',
        description: 'Implement object detection and classification systems',
        duration: '4-5 weeks',
        topics: ['Template Matching', 'Haar Cascades', 'HOG Features', 'YOLO', 'R-CNN', 'SSD'],
        skills_gained: ['Object Detection', 'Classification', 'Deep Learning Models']
      },
      {
        id: 'step-5-deep-learning-cv',
        title: 'Step 5: Deep Learning for Computer Vision',
        description: 'Apply deep learning techniques to computer vision problems',
        duration: '4-5 weeks',
        topics: ['CNN Architectures', 'Transfer Learning', 'Image Segmentation', 'Generative Models', 'Neural Style Transfer'],
        skills_gained: ['Deep Learning CV', 'Neural Networks', 'Advanced Model Architecture']
      },
      {
        id: 'step-6-specialized-applications',
        title: 'Step 6: Specialized Applications',
        description: 'Build advanced computer vision applications and systems',
        duration: '3-4 weeks',
        topics: ['Face Recognition', 'Pose Estimation', 'Medical Imaging', 'Autonomous Vehicles', 'Real-time Processing'],
        skills_gained: ['Specialized CV Applications', 'Real-time Systems', 'Domain-specific Solutions']
      }
    ],
    tags: ['computervision', 'opencv', 'deeplearning', 'ai'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$95k - $155k',
    job_opportunities: ['Computer Vision Engineer', 'AI Research Engineer', 'Image Processing Specialist'],
    industry_demand: 'High'
  },
  {
    id: 'nlp-engineer',
    title: 'NLP Engineer',
    description: 'Build systems that understand and process human language',
    role: 'NLP Engineer',
    primary_skills: ['NLP Libraries', 'Python', 'Transformers', 'Text Processing'],
    secondary_skills: ['BERT', 'GPT Models', 'Sentiment Analysis', 'Language Models'],
    category: 'AI/ML',
    subcategory: 'Natural Language Processing',
    difficulty: 'Advanced',
    duration: '8-10 months',
    prerequisites: ['Programming skills', 'ML background', 'Linguistics knowledge helpful'],
    steps: [
      {
        id: 'step-1-nlp-fundamentals',
        title: 'Step 1: NLP Fundamentals & Text Processing',
        description: 'Learn core concepts of natural language processing and text preprocessing',
        duration: '2-3 weeks',
        topics: ['Text Preprocessing', 'Tokenization', 'Stop Words', 'Stemming & Lemmatization', 'Text Normalization'],
        skills_gained: ['Text Processing', 'Data Preprocessing', 'NLP Foundations']
      },
      {
        id: 'step-2-linguistic-analysis',
        title: 'Step 2: Linguistic Analysis & Feature Extraction',
        description: 'Master linguistic analysis and feature extraction techniques',
        duration: '3-4 weeks',
        topics: ['Part-of-Speech Tagging', 'Named Entity Recognition', 'Dependency Parsing', 'N-grams', 'TF-IDF'],
        skills_gained: ['Linguistic Analysis', 'Feature Engineering', 'Text Analytics']
      },
      {
        id: 'step-3-traditional-ml',
        title: 'Step 3: Traditional ML for NLP',
        description: 'Apply machine learning algorithms to NLP tasks',
        duration: '3 weeks',
        topics: ['Text Classification', 'Sentiment Analysis', 'Topic Modeling', 'Clustering', 'Naive Bayes & SVM'],
        skills_gained: ['Text Classification', 'ML Algorithms', 'Statistical NLP']
      },
      {
        id: 'step-4-word-embeddings',
        title: 'Step 4: Word Embeddings & Representation Learning',
        description: 'Learn word embeddings and distributed representations',
        duration: '3 weeks',
        topics: ['Word2Vec', 'GloVe', 'FastText', 'Doc2Vec', 'Semantic Similarity'],
        skills_gained: ['Word Embeddings', 'Representation Learning', 'Semantic Analysis']
      },
      {
        id: 'step-5-deep-learning-nlp',
        title: 'Step 5: Deep Learning for NLP',
        description: 'Master deep learning architectures for natural language processing',
        duration: '4-5 weeks',
        topics: ['RNNs & LSTMs', 'Sequence-to-Sequence', 'Attention Mechanisms', 'Transformer Architecture', 'BERT & GPT'],
        skills_gained: ['Deep Learning NLP', 'Neural Networks', 'Modern NLP Architectures']
      },
      {
        id: 'step-6-advanced-applications',
        title: 'Step 6: Advanced NLP Applications',
        description: 'Build production-ready NLP systems and applications',
        duration: '4-5 weeks',
        topics: ['Question Answering', 'Text Generation', 'Machine Translation', 'Conversational AI', 'Production Deployment'],
        skills_gained: ['Advanced NLP Systems', 'Production Deployment', 'End-to-end Applications']
      }
    ],
    tags: ['nlp', 'ai', 'textprocessing', 'transformers'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$100k - $165k',
    job_opportunities: ['NLP Engineer', 'AI Research Scientist', 'Language Technology Specialist'],
    industry_demand: 'High'
  },
  {
    id: 'fintech-developer',
    title: 'FinTech Developer',
    description: 'Build financial technology solutions and payment systems',
    role: 'FinTech Developer',
    primary_skills: ['Payment APIs', 'Security', 'Compliance', 'Financial Systems'],
    secondary_skills: ['Blockchain', 'Risk Management', 'Data Analytics'],
    category: 'Financial Technology',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Programming experience', 'Understanding of finance', 'Security knowledge'],
    steps: [
      {
        id: 'step-1-fintech-foundations',
        title: 'Step 1: Financial Technology Foundations',
        description: 'Learn core financial concepts and regulatory frameworks',
        duration: '2-3 weeks',
        topics: ['Financial Markets', 'Banking Systems', 'Payment Networks', 'Regulatory Compliance', 'KYC/AML'],
        skills_gained: ['Financial Knowledge', 'Regulatory Understanding', 'Compliance Frameworks']
      },
      {
        id: 'step-2-payment-systems',
        title: 'Step 2: Payment Systems & Processing',
        description: 'Master payment processing technologies and integration',
        duration: '3 weeks',
        topics: ['Payment Gateways', 'Card Processing', 'Digital Wallets', 'ACH Transfers', 'Cryptocurrency'],
        skills_gained: ['Payment Integration', 'Transaction Processing', 'Payment Security']
      },
      {
        id: 'step-3-security-compliance',
        title: 'Step 3: Financial Security & Compliance',
        description: 'Implement security measures and compliance requirements',
        duration: '2-3 weeks',
        topics: ['PCI DSS', 'Data Encryption', 'Fraud Detection', 'Risk Management', 'Audit Trails'],
        skills_gained: ['Financial Security', 'Compliance Implementation', 'Risk Management']
      },
      {
        id: 'step-4-banking-apis',
        title: 'Step 4: Banking APIs & Open Banking',
        description: 'Integrate with banking systems and open banking platforms',
        duration: '3 weeks',
        topics: ['Banking APIs', 'Open Banking', 'Account Aggregation', 'PSD2 Compliance', 'API Security'],
        skills_gained: ['API Integration', 'Open Banking', 'Financial Data Access']
      },
      {
        id: 'step-5-blockchain-crypto',
        title: 'Step 5: Blockchain & Cryptocurrency',
        description: 'Understand blockchain technology and cryptocurrency integration',
        duration: '3-4 weeks',
        topics: ['Blockchain Fundamentals', 'Smart Contracts', 'DeFi Protocols', 'Wallet Integration', 'Token Standards'],
        skills_gained: ['Blockchain Development', 'Cryptocurrency', 'Decentralized Finance']
      },
      {
        id: 'step-6-fintech-applications',
        title: 'Step 6: Advanced FinTech Applications',
        description: 'Build comprehensive financial technology solutions',
        duration: '3-4 weeks',
        topics: ['Robo-advisors', 'Lending Platforms', 'InsurTech', 'RegTech', 'Wealth Management'],
        skills_gained: ['Advanced FinTech', 'Product Development', 'Financial Innovation']
      }
    ],
    tags: ['fintech', 'payments', 'finance', 'security'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$85k - $145k',
    job_opportunities: ['FinTech Developer', 'Payment Systems Developer', 'Financial Software Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'ar-vr-developer',
    title: 'AR/VR Developer',
    description: 'Create immersive augmented and virtual reality experiences',
    role: 'AR/VR Developer',
    primary_skills: ['Unity 3D', 'C#', '3D Graphics', 'XR SDKs'],
    secondary_skills: ['Blender', 'Oculus SDK', 'ARKit', 'ARCore'],
    category: 'Extended Reality',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Programming skills', '3D graphics knowledge', 'Game development experience helpful'],
    steps: [
      {
        id: 'step-1-xr-fundamentals',
        title: 'Step 1: XR Fundamentals & 3D Graphics',
        description: 'Learn extended reality concepts and 3D graphics foundations',
        duration: '2-3 weeks',
        topics: ['3D Graphics Pipeline', 'Coordinate Systems', 'Spatial Computing', 'VR/AR Concepts', 'XR Hardware'],
        skills_gained: ['3D Graphics', 'Spatial Computing', 'XR Fundamentals']
      },
      {
        id: 'step-2-unity-development',
        title: 'Step 2: Unity 3D for XR Development',
        description: 'Master Unity 3D engine for AR/VR development',
        duration: '3-4 weeks',
        topics: ['Unity Interface', 'C# Scripting', 'GameObjects & Components', 'Physics System', 'Animation'],
        skills_gained: ['Unity Development', 'C# Programming', 'Game Engine Mastery']
      },
      {
        id: 'step-3-vr-development',
        title: 'Step 3: Virtual Reality Development',
        description: 'Build immersive VR experiences and applications',
        duration: '3-4 weeks',
        topics: ['VR SDKs', 'Head Tracking', 'Hand Controllers', 'Room-scale VR', 'Performance Optimization'],
        skills_gained: ['VR Development', 'Immersive Experiences', 'VR Interaction']
      },
      {
        id: 'step-4-ar-development',
        title: 'Step 4: Augmented Reality Development',
        description: 'Create AR applications with real-world integration',
        duration: '3 weeks',
        topics: ['ARKit/ARCore', 'Plane Detection', 'Object Tracking', 'Occlusion', 'Light Estimation'],
        skills_gained: ['AR Development', 'Computer Vision', 'Mixed Reality']
      },
      {
        id: 'step-5-interaction-design',
        title: 'Step 5: XR Interaction & UX Design',
        description: 'Design intuitive user interactions for XR environments',
        duration: '2-3 weeks',
        topics: ['Spatial UI Design', 'Gesture Recognition', 'Voice Commands', 'Haptic Feedback', 'User Testing'],
        skills_gained: ['XR UX Design', 'Interaction Design', 'User Experience']
      },
      {
        id: 'step-6-advanced-xr',
        title: 'Step 6: Advanced XR & Deployment',
        description: 'Build advanced XR applications and deploy to platforms',
        duration: '2-3 weeks',
        topics: ['Multi-platform Deployment', 'Cloud Anchors', 'Multiplayer XR', 'WebXR', 'Enterprise Applications'],
        skills_gained: ['Advanced XR', 'Platform Deployment', 'Enterprise Solutions']
      }
    ],
    tags: ['ar', 'vr', 'unity', 'xr'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['AR/VR Developer', 'XR Engineer', 'Immersive Technology Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'ecommerce-developer',
    title: 'E-commerce Developer',
    description: 'Build and maintain online shopping platforms and payment systems',
    role: 'E-commerce Developer',
    primary_skills: ['E-commerce Platforms', 'Payment Integration', 'Database Design', 'Security'],
    secondary_skills: ['SEO', 'Performance Optimization', 'Analytics'],
    category: 'E-commerce',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Web development skills', 'Database knowledge', 'Understanding of online business'],
    steps: [
      {
        id: 'step-1-ecommerce-fundamentals',
        title: 'Step 1: E-commerce Fundamentals',
        description: 'Learn core e-commerce concepts and business models',
        duration: '2 weeks',
        topics: ['E-commerce Business Models', 'Online Shopping Flow', 'Market Analysis', 'Customer Journey', 'Digital Commerce'],
        skills_gained: ['E-commerce Concepts', 'Business Understanding', 'Market Knowledge']
      },
      {
        id: 'step-2-platform-development',
        title: 'Step 2: E-commerce Platform Development',
        description: 'Build e-commerce platforms using modern frameworks',
        duration: '3-4 weeks',
        topics: ['Storefront Development', 'Product Catalog', 'Shopping Cart', 'User Authentication', 'Admin Dashboard'],
        skills_gained: ['Platform Development', 'Full-stack Development', 'User Management']
      },
      {
        id: 'step-3-payment-integration',
        title: 'Step 3: Payment Gateway Integration',
        description: 'Integrate secure payment processing systems',
        duration: '2-3 weeks',
        topics: ['Payment Gateways', 'Stripe/PayPal Integration', 'Checkout Process', 'Payment Security', 'Transaction Management'],
        skills_gained: ['Payment Integration', 'Financial Security', 'Transaction Processing']
      },
      {
        id: 'step-4-inventory-management',
        title: 'Step 4: Inventory & Order Management',
        description: 'Implement comprehensive inventory and order management',
        duration: '2-3 weeks',
        topics: ['Inventory Tracking', 'Stock Management', 'Order Processing', 'Shipping Integration', 'Returns Management'],
        skills_gained: ['Inventory Management', 'Order Processing', 'Supply Chain']
      },
      {
        id: 'step-5-optimization-analytics',
        title: 'Step 5: Performance & Analytics',
        description: 'Optimize performance and implement analytics tracking',
        duration: '2 weeks',
        topics: ['SEO Optimization', 'Page Speed', 'Conversion Tracking', 'Google Analytics', 'A/B Testing'],
        skills_gained: ['Performance Optimization', 'Analytics', 'Conversion Optimization']
      },
      {
        id: 'step-6-mobile-scaling',
        title: 'Step 6: Mobile Commerce & Scaling',
        description: 'Build mobile commerce solutions and scale operations',
        duration: '2-3 weeks',
        topics: ['Mobile App Development', 'PWA', 'Multi-vendor Platforms', 'Microservices', 'Cloud Deployment'],
        skills_gained: ['Mobile Commerce', 'Scalable Architecture', 'Enterprise Solutions']
      }
    ],
    tags: ['ecommerce', 'payments', 'web', 'business'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['E-commerce Developer', 'Web Developer', 'Digital Commerce Specialist'],
    industry_demand: 'Medium'
  },
  // STARTUP AND BUSINESS ROLES
  {
    id: 'tech-startup-founder',
    title: 'Tech Startup Founder',
    description: 'Learn to build, launch, and scale technology startups from idea to market',
    role: 'Tech Entrepreneur',
    primary_skills: ['Business Strategy', 'Product Development', 'Fundraising', 'Leadership'],
    secondary_skills: ['Marketing', 'Sales', 'Operations', 'Technology Stack'],
    category: 'Entrepreneurship',
    difficulty: 'Advanced',
    duration: '12-18 months',
    prerequisites: ['Business acumen', 'Technical understanding', 'Risk tolerance'],
    steps: [
      {
        id: 'step-1-startup-fundamentals',
        title: 'Step 1: Startup Fundamentals & Idea Validation',
        description: 'Learn core startup concepts and validate your business idea',
        duration: '2-3 weeks',
        topics: ['Idea Validation', 'Market Research', 'Problem-Solution Fit', 'Customer Interviews', 'Lean Startup Methodology'],
        skills_gained: ['Entrepreneurship', 'Market Research', 'Customer Discovery']
      },
      {
        id: 'step-2-business-planning',
        title: 'Step 2: Business Planning & Strategy',
        description: 'Develop comprehensive business strategy and planning',
        duration: '3-4 weeks',
        topics: ['Business Model Canvas', 'Competitive Analysis', 'Go-to-Market Strategy', 'Financial Planning', 'Business Plan Writing'],
        skills_gained: ['Business Strategy', 'Strategic Planning', 'Financial Modeling']
      },
      {
        id: 'step-3-product-development',
        title: 'Step 3: Product Development & MVP',
        description: 'Build and iterate on your minimum viable product',
        duration: '4-6 weeks',
        topics: ['MVP Development', 'Product Management', 'User Experience Design', 'Agile Development', 'Product-Market Fit'],
        skills_gained: ['Product Management', 'MVP Development', 'UX Design']
      },
      {
        id: 'step-4-fundraising-investment',
        title: 'Step 4: Fundraising & Investment',
        description: 'Secure funding and manage investor relations',
        duration: '3-4 weeks',
        topics: ['Pitch Deck Creation', 'Investor Relations', 'Valuation', 'Term Sheets', 'Due Diligence', 'Alternative Funding'],
        skills_gained: ['Fundraising', 'Investor Relations', 'Financial Negotiations']
      },
      {
        id: 'step-5-team-operations',
        title: 'Step 5: Team Building & Operations',
        description: 'Build and manage high-performing startup teams',
        duration: '2-3 weeks',
        topics: ['Hiring Strategy', 'Team Culture', 'Equity Distribution', 'Performance Management', 'Organizational Design'],
        skills_gained: ['Leadership', 'HR Management', 'Team Building']
      },
      {
        id: 'step-6-growth-scaling',
        title: 'Step 6: Growth Hacking & Scaling',
        description: 'Scale your startup and achieve sustainable growth',
        duration: '4-5 weeks',
        topics: ['Growth Hacking', 'Marketing Automation', 'Scaling Operations', 'International Expansion', 'Exit Strategies'],
        skills_gained: ['Growth Strategy', 'Marketing', 'Operations Scaling']
      }
    ],
    tags: ['startup', 'entrepreneur', 'business', 'leadership'],
    popularity_score: 5,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: 'Variable - $0k - $500k+',
    job_opportunities: ['Startup Founder', 'Tech Entrepreneur', 'Business Owner'],
    industry_demand: 'Medium'
  },
  {
    id: 'research-scientist',
    title: 'Research Scientist',
    description: 'Conduct advanced research in computer science and emerging technologies',
    role: 'Research Scientist',
    primary_skills: ['Research Methodology', 'Statistical Analysis', 'Academic Writing', 'Programming'],
    secondary_skills: ['Machine Learning', 'Data Analysis', 'Scientific Computing'],
    category: 'Research',
    difficulty: 'Advanced',
    duration: '12-24 months',
    prerequisites: ['Advanced degree', 'Strong analytical skills', 'Research experience'],
    steps: [
      {
        id: 'step-1-research-methodology',
        title: 'Step 1: Research Methodology & Scientific Method',
        description: 'Master the fundamental principles and methods of scientific research',
        duration: '3-4 weeks',
        topics: ['Scientific Method', 'Hypothesis Formation', 'Literature Review', 'Research Design', 'Ethics in Research'],
        skills_gained: ['Research Design', 'Critical Thinking', 'Scientific Method']
      },
      {
        id: 'step-2-statistical-analysis',
        title: 'Step 2: Statistical Analysis & Data Science',
        description: 'Learn advanced statistical methods for research data analysis',
        duration: '4-5 weeks',
        topics: ['Statistical Inference', 'Experimental Design', 'Data Visualization', 'R/Python for Stats', 'Bayesian Methods'],
        skills_gained: ['Statistical Analysis', 'Data Analysis', 'Statistical Programming']
      },
      {
        id: 'step-3-computational-methods',
        title: 'Step 3: Computational Methods & Modeling',
        description: 'Apply computational approaches to research problems',
        duration: '4-5 weeks',
        topics: ['Scientific Computing', 'Mathematical Modeling', 'Simulation Methods', 'High-Performance Computing', 'Algorithms'],
        skills_gained: ['Computational Research', 'Mathematical Modeling', 'Scientific Programming']
      },
      {
        id: 'step-4-specialized-domains',
        title: 'Step 4: Domain Specialization & Advanced Topics',
        description: 'Develop expertise in specific research domains and cutting-edge methods',
        duration: '6-8 weeks',
        topics: ['Machine Learning Research', 'AI/Deep Learning', 'Quantum Computing', 'Bioinformatics', 'Emerging Technologies'],
        skills_gained: ['Domain Expertise', 'Advanced Research', 'Innovation']
      },
      {
        id: 'step-5-publication-dissemination',
        title: 'Step 5: Academic Writing & Publication',
        description: 'Master academic writing and research dissemination',
        duration: '3-4 weeks',
        topics: ['Academic Writing', 'Peer Review Process', 'Conference Presentations', 'Grant Writing', 'Research Communication'],
        skills_gained: ['Academic Writing', 'Research Communication', 'Publication Skills']
      },
      {
        id: 'step-6-collaboration-leadership',
        title: 'Step 6: Research Collaboration & Leadership',
        description: 'Lead research teams and manage collaborative projects',
        duration: '2-3 weeks',
        topics: ['Research Team Leadership', 'Collaborative Research', 'Project Management', 'Mentorship', 'Industry Partnerships'],
        skills_gained: ['Research Leadership', 'Team Management', 'Collaboration']
      }
    ],
    tags: ['research', 'science', 'academia', 'innovation'],
    popularity_score: 4,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $150k',
    job_opportunities: ['Research Scientist', 'Data Scientist', 'Academic Researcher'],
    industry_demand: 'Low'
  },
  // BEGINNER-FRIENDLY ROADMAPS
  {
    id: 'frontend-beginner',
    title: 'Frontend Beginner',
    description: 'Start your journey in frontend development with no prior experience',
    role: 'Junior Frontend Developer',
    primary_skills: ['HTML', 'CSS', 'JavaScript Basics', 'Version Control'],
    secondary_skills: ['Responsive Design', 'Browser DevTools', 'Basic React'],
    category: 'Web Development',
    subcategory: 'Beginner Track',
    difficulty: 'Beginner',
    duration: '3-4 months',
    prerequisites: ['No programming experience required'],
    steps: [
      {
        id: 'web-basics',
        title: 'Web Development Basics',
        description: 'Understanding how the web works',
        duration: '1-2 weeks',
        topics: ['HTML Structure', 'CSS Styling', 'Browser Basics'],
        skills_gained: ['HTML', 'CSS', 'Web Fundamentals']
      }
    ],
    tags: ['beginner', 'frontend', 'html', 'css'],
    popularity_score: 8,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$40k - $70k',
    job_opportunities: ['Junior Frontend Developer', 'Web Developer Intern', 'UI Developer'],
    industry_demand: 'High'
  },
  {
    id: 'backend-beginner',
    title: 'Backend Beginner',
    description: 'Learn server-side development starting from the basics',
    role: 'Junior Backend Developer',
    primary_skills: ['Programming Fundamentals', 'Database Basics', 'API Concepts', 'Server Management'],
    secondary_skills: ['SQL', 'Authentication', 'Testing'],
    category: 'Web Development',
    subcategory: 'Beginner Track',
    difficulty: 'Beginner',
    duration: '4-5 months',
    prerequisites: ['Basic programming knowledge helpful but not required'],
    steps: [
      {
        id: 'step-1-programming-fundamentals',
        title: 'Step 1: Programming Fundamentals',
        description: 'Learn essential programming concepts and choose a backend language',
        duration: '2-3 weeks',
        topics: ['Programming Basics', 'Variables & Data Types', 'Control Flow', 'Functions', 'Object-Oriented Programming'],
        skills_gained: ['Programming Logic', 'Code Structure', 'Problem Solving']
      },
      {
        id: 'step-2-web-fundamentals',
        title: 'Step 2: Web Development Fundamentals',
        description: 'Understand how web applications work',
        duration: '2 weeks',
        topics: ['Client-Server Architecture', 'HTTP Protocol', 'Request-Response Cycle', 'Web Servers', 'Status Codes'],
        skills_gained: ['Web Concepts', 'HTTP Understanding', 'Server Basics']
      },
      {
        id: 'step-3-database-basics',
        title: 'Step 3: Database Fundamentals',
        description: 'Learn database concepts and SQL basics',
        duration: '2-3 weeks',
        topics: ['Database Design', 'SQL Queries', 'CRUD Operations', 'Relationships', 'Data Modeling'],
        skills_gained: ['Database Management', 'SQL Programming', 'Data Storage']
      },
      {
        id: 'step-4-api-development',
        title: 'Step 4: API Development Basics',
        description: 'Build your first REST APIs',
        duration: '3 weeks',
        topics: ['REST Principles', 'API Design', 'JSON Data', 'Route Handling', 'Middleware'],
        skills_gained: ['API Development', 'REST Architecture', 'Backend Services']
      },
      {
        id: 'step-5-authentication',
        title: 'Step 5: Authentication & Security',
        description: 'Implement user authentication and basic security',
        duration: '2 weeks',
        topics: ['User Authentication', 'Password Hashing', 'JWT Tokens', 'Session Management', 'Basic Security'],
        skills_gained: ['Authentication Systems', 'Security Practices', 'User Management']
      },
      {
        id: 'step-6-deployment',
        title: 'Step 6: Testing & Deployment',
        description: 'Test your applications and deploy to production',
        duration: '2 weeks',
        topics: ['Unit Testing', 'Integration Testing', 'Deployment Platforms', 'Environment Variables', 'Basic DevOps'],
        skills_gained: ['Testing Practices', 'Deployment', 'Production Setup']
      }
    ],
    tags: ['beginner', 'backend', 'server', 'api'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$45k - $75k',
    job_opportunities: ['Junior Backend Developer', 'API Developer', 'Server Developer'],
    industry_demand: 'High'
  },
  {
    id: 'devops-beginner',
    title: 'DevOps Beginner',
    description: 'Introduction to DevOps practices and tools for beginners',
    role: 'Junior DevOps Engineer',
    primary_skills: ['Linux Basics', 'Version Control', 'Basic Scripting', 'Cloud Fundamentals'],
    secondary_skills: ['Docker Basics', 'CI/CD Concepts', 'Monitoring'],
    category: 'DevOps',
    subcategory: 'Beginner Track',
    difficulty: 'Beginner',
    duration: '4-6 months',
    prerequisites: ['Basic technical understanding', 'Willingness to learn command line'],
    steps: [
      {
        id: 'step-1-devops-culture',
        title: 'Step 1: DevOps Culture & Fundamentals',
        description: 'Understand DevOps philosophy and core principles',
        duration: '1-2 weeks',
        topics: ['DevOps Philosophy', 'Collaboration Culture', 'Continuous Improvement', 'Agile Methodology', 'Infrastructure Concepts'],
        skills_gained: ['DevOps Mindset', 'Team Collaboration', 'Process Understanding']
      },
      {
        id: 'step-2-linux-command-line',
        title: 'Step 2: Linux & Command Line Basics',
        description: 'Master essential Linux commands and system navigation',
        duration: '2-3 weeks',
        topics: ['Linux Fundamentals', 'Command Line Interface', 'File Operations', 'Process Management', 'Text Manipulation'],
        skills_gained: ['Linux Administration', 'Command Line Proficiency', 'System Navigation']
      },
      {
        id: 'step-3-version-control',
        title: 'Step 3: Version Control with Git',
        description: 'Learn Git for code versioning and collaboration',
        duration: '1-2 weeks',
        topics: ['Git Basics', 'Branching & Merging', 'GitHub/GitLab', 'Collaboration Workflows', 'Best Practices'],
        skills_gained: ['Version Control', 'Code Collaboration', 'Git Workflows']
      },
      {
        id: 'step-4-containerization',
        title: 'Step 4: Containerization with Docker',
        description: 'Learn containerization concepts and Docker basics',
        duration: '2-3 weeks',
        topics: ['Container Concepts', 'Docker Fundamentals', 'Dockerfile Creation', 'Image Management', 'Docker Compose'],
        skills_gained: ['Containerization', 'Docker Management', 'Application Packaging']
      },
      {
        id: 'step-5-ci-cd-basics',
        title: 'Step 5: CI/CD Pipeline Basics',
        description: 'Understand and implement basic CI/CD pipelines',
        duration: '2-3 weeks',
        topics: ['CI/CD Concepts', 'Pipeline Design', 'Automated Testing', 'Deployment Automation', 'Popular CI/CD Tools'],
        skills_gained: ['Pipeline Development', 'Automation', 'Deployment Practices']
      },
      {
        id: 'step-6-monitoring-cloud',
        title: 'Step 6: Monitoring & Cloud Basics',
        description: 'Learn system monitoring and cloud platform fundamentals',
        duration: '2-3 weeks',
        topics: ['System Monitoring', 'Log Management', 'Cloud Platforms Overview', 'Basic Scripting', 'Infrastructure as Code Intro'],
        skills_gained: ['System Monitoring', 'Cloud Awareness', 'Basic Automation']
      }
    ],
    tags: ['beginner', 'devops', 'automation', 'linux'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$50k - $80k',
    job_opportunities: ['Junior DevOps Engineer', 'System Administrator', 'Build Engineer'],
    industry_demand: 'High'
  },
  // SPECIALIZED SKILL ROADMAPS
  {
    id: 'api-design',
    title: 'API Design',
    description: 'Master the art of designing RESTful and GraphQL APIs',
    role: 'API Developer',
    primary_skills: ['REST API Design', 'GraphQL', 'OpenAPI', 'API Security'],
    secondary_skills: ['Rate Limiting', 'Versioning', 'Documentation'],
    category: 'Web Development',
    subcategory: 'API Development',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['Backend development experience', 'HTTP knowledge'],
    steps: [
      {
        id: 'step-1-apidesign-fundamentals',
        title: 'Step 1: API Design Principles & Fundamentals',
        description: 'Learn core principles of effective API design and architecture',
        duration: '2-3 weeks',
        topics: ['REST Principles', 'HTTP Methods', 'Status Codes', 'Resource Naming', 'API Architecture'],
        skills_gained: ['API Design', 'REST', 'HTTP Protocol']
      },
      {
        id: 'step-2-apidesign-rest',
        title: 'Step 2: RESTful API Design & Best Practices',
        description: 'Master RESTful API design patterns and industry best practices',
        duration: '2-3 weeks',
        topics: ['Resource Modeling', 'URI Design', 'CRUD Operations', 'Hypermedia', 'Content Negotiation'],
        skills_gained: ['RESTful Design', 'Resource Modeling', 'API Standards']
      },
      {
        id: 'step-3-apidesign-security',
        title: 'Step 3: API Security & Authentication',
        description: 'Implement robust security measures for API protection',
        duration: '2 weeks',
        topics: ['OAuth 2.0', 'JWT Tokens', 'API Keys', 'Rate Limiting', 'CORS', 'Input Validation'],
        skills_gained: ['API Security', 'Authentication', 'Authorization']
      },
      {
        id: 'step-4-apidesign-graphql',
        title: 'Step 4: GraphQL API Development',
        description: 'Design and implement GraphQL APIs for flexible data fetching',
        duration: '2-3 weeks',
        topics: ['GraphQL Schema', 'Queries & Mutations', 'Resolvers', 'Type System', 'Federation'],
        skills_gained: ['GraphQL Design', 'Schema Development', 'Query Optimization']
      },
      {
        id: 'step-5-apidesign-docs',
        title: 'Step 5: API Documentation & Testing',
        description: 'Create comprehensive documentation and testing strategies',
        duration: '2 weeks',
        topics: ['OpenAPI Specification', 'Swagger', 'API Testing', 'Postman', 'Test Automation'],
        skills_gained: ['API Documentation', 'Testing Strategies', 'Developer Experience']
      },
      {
        id: 'step-6-apidesign-versioning',
        title: 'Step 6: API Versioning & Production Deployment',
        description: 'Manage API versions and deploy to production environments',
        duration: '1-2 weeks',
        topics: ['API Versioning', 'Backward Compatibility', 'Deployment Strategies', 'Monitoring', 'Analytics'],
        skills_gained: ['Version Management', 'Production Deployment', 'API Monitoring']
      }
    ],
    tags: ['api', 'rest', 'graphql', 'backend'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $120k',
    job_opportunities: ['API Developer', 'Backend Developer', 'Integration Specialist'],
    industry_demand: 'High'
  },
  {
    id: 'devrel-engineer',
    title: 'DevRel Engineer',
    description: 'Build relationships between companies and developer communities',
    role: 'Developer Relations Engineer',
    primary_skills: ['Technical Communication', 'Community Building', 'Content Creation', 'Public Speaking'],
    secondary_skills: ['Developer Tools', 'Event Management', 'Social Media'],
    category: 'Developer Relations',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Technical background', 'Communication skills', 'Community experience'],
    steps: [
      {
        id: 'step-1-devrel-fundamentals',
        title: 'Step 1: Developer Relations Fundamentals',
        description: 'Understanding developer communities, advocacy, and the DevRel role',
        duration: '2-3 weeks',
        topics: ['DevRel Role Definition', 'Community Building', 'Developer Experience', 'Technical Evangelism', 'Developer Journey'],
        skills_gained: ['Developer Relations', 'Community Management', 'Technical Communication']
      },
      {
        id: 'step-2-content-creation',
        title: 'Step 2: Technical Content Creation',
        description: 'Create engaging technical content for developer audiences',
        duration: '3-4 weeks',
        topics: ['Technical Writing', 'Blog Posts', 'Tutorials', 'Code Examples', 'Video Content', 'Documentation'],
        skills_gained: ['Content Creation', 'Technical Writing', 'Educational Content']
      },
      {
        id: 'step-3-public-speaking',
        title: 'Step 3: Public Speaking & Presentations',
        description: 'Develop skills for conference talks and community presentations',
        duration: '2-3 weeks',
        topics: ['Presentation Skills', 'Conference Speaking', 'Workshop Creation', 'Demo Delivery', 'Audience Engagement'],
        skills_gained: ['Public Speaking', 'Presentation Design', 'Workshop Facilitation']
      },
      {
        id: 'step-4-community-engagement',
        title: 'Step 4: Community Engagement & Management',
        description: 'Build and nurture developer communities across platforms',
        duration: '3 weeks',
        topics: ['Community Platforms', 'Discord/Slack Management', 'Social Media Strategy', 'Developer Forums', 'Feedback Collection'],
        skills_gained: ['Community Management', 'Social Media', 'Developer Advocacy']
      },
      {
        id: 'step-5-developer-experience',
        title: 'Step 5: Developer Experience & Tools',
        description: 'Improve developer experience through tools and processes',
        duration: '2-3 weeks',
        topics: ['Developer Tools', 'API Design', 'SDK Development', 'Developer Onboarding', 'Feedback Loops'],
        skills_gained: ['Developer Experience', 'Tool Development', 'Product Advocacy']
      },
      {
        id: 'step-6-metrics-strategy',
        title: 'Step 6: Metrics, Analytics & DevRel Strategy',
        description: 'Measure success and develop strategic DevRel initiatives',
        duration: '2 weeks',
        topics: ['DevRel Metrics', 'Community Analytics', 'Program Strategy', 'ROI Measurement', 'Success Frameworks'],
        skills_gained: ['Analytics', 'Strategic Planning', 'Program Management']
      }
    ],
    tags: ['devrel', 'community', 'advocacy', 'communication'],
    popularity_score: 5,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $130k',
    job_opportunities: ['DevRel Engineer', 'Developer Advocate', 'Technical Evangelist'],
    industry_demand: 'Medium'
  },
  // ADVANCED AI AND DATA ROLES
  {
    id: 'ai-data-scientist',
    title: 'AI and Data Scientist',
    description: 'Combine AI techniques with data science for advanced analytics',
    role: 'AI Data Scientist',
    primary_skills: ['Machine Learning', 'Deep Learning', 'Statistics', 'Python', 'Data Analysis'],
    secondary_skills: ['Neural Networks', 'Computer Vision', 'NLP', 'Big Data'],
    category: 'AI/ML',
    subcategory: 'AI Data Science',
    difficulty: 'Advanced',
    duration: '10-12 months',
    prerequisites: ['Strong math background', 'Programming skills', 'Statistics knowledge'],
    steps: [
      {
        id: 'step-1-advanced-statistics',
        title: 'Step 1: Advanced Statistics & Mathematics',
        description: 'Master advanced statistical concepts and mathematical foundations',
        duration: '4-5 weeks',
        topics: ['Bayesian Statistics', 'Statistical Inference', 'Hypothesis Testing', 'Linear Algebra', 'Calculus for ML'],
        skills_gained: ['Advanced Statistics', 'Mathematical Modeling', 'Statistical Inference']
      },
      {
        id: 'step-2-ml-algorithms',
        title: 'Step 2: Advanced Machine Learning Algorithms',
        description: 'Deep dive into sophisticated ML algorithms and techniques',
        duration: '5-6 weeks',
        topics: ['Ensemble Methods', 'Gradient Boosting', 'Support Vector Machines', 'Kernel Methods', 'Dimensionality Reduction'],
        skills_gained: ['Advanced ML', 'Algorithm Selection', 'Feature Engineering']
      },
      {
        id: 'step-3-deep-learning',
        title: 'Step 3: Deep Learning & Neural Networks',
        description: 'Master deep learning architectures and applications',
        duration: '6-8 weeks',
        topics: ['Neural Network Architectures', 'CNNs', 'RNNs', 'Transformers', 'Attention Mechanisms', 'Transfer Learning'],
        skills_gained: ['Deep Learning', 'Neural Networks', 'Advanced AI Models']
      },
      {
        id: 'step-4-nlp-computer-vision',
        title: 'Step 4: NLP & Computer Vision',
        description: 'Apply AI to natural language and visual data',
        duration: '4-5 weeks',
        topics: ['Natural Language Processing', 'Computer Vision', 'Large Language Models', 'Object Detection', 'Text Analytics'],
        skills_gained: ['NLP Expertise', 'Computer Vision', 'Multimodal AI']
      },
      {
        id: 'step-5-experimental-design',
        title: 'Step 5: Experimental Design & A/B Testing',
        description: 'Design and analyze experiments for AI-driven insights',
        duration: '3-4 weeks',
        topics: ['Experimental Design', 'A/B Testing', 'Causal Inference', 'Randomized Trials', 'Statistical Significance'],
        skills_gained: ['Experimental Design', 'Causal Analysis', 'Scientific Method']
      },
      {
        id: 'step-6-production-mlops',
        title: 'Step 6: AI in Production & MLOps',
        description: 'Deploy and maintain AI systems in production environments',
        duration: '4-5 weeks',
        topics: ['Model Deployment', 'MLOps Pipelines', 'Model Monitoring', 'A/B Testing in Production', 'Scalable AI Systems'],
        skills_gained: ['Production AI', 'MLOps', 'System Scalability']
      }
    ],
    tags: ['ai', 'datascience', 'machinelearning', 'analytics'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$110k - $180k',
    job_opportunities: ['AI Data Scientist', 'Senior Data Scientist', 'AI Research Scientist'],
    industry_demand: 'High'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Build intelligent autonomous agents and chatbots',
    role: 'AI Agent Developer',
    primary_skills: ['LLMs', 'Agent Frameworks', 'NLP', 'Conversational AI'],
    secondary_skills: ['Prompt Engineering', 'RAG Systems', 'Vector Databases'],
    category: 'AI/ML',
    subcategory: 'AI Agents',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['AI/ML knowledge', 'Programming skills', 'Understanding of LLMs'],
    steps: [
      {
        id: 'step-1-agent-fundamentals',
        title: 'Step 1: AI Agent Architecture & Fundamentals',
        description: 'Understand the core concepts of intelligent agents and their architecture',
        duration: '2-3 weeks',
        topics: ['Agent Theory', 'Multi-Agent Systems', 'Agent Communication', 'Behavior Trees', 'State Machines'],
        skills_gained: ['Agent Architecture', 'System Design', 'Agent Communication']
      },
      {
        id: 'step-2-llm-integration',
        title: 'Step 2: LLM Integration & Fine-tuning',
        description: 'Integrate and customize large language models for agent applications',
        duration: '3-4 weeks',
        topics: ['LLM APIs', 'Model Fine-tuning', 'Prompt Engineering', 'Context Management', 'Token Optimization'],
        skills_gained: ['LLM Integration', 'Model Customization', 'Prompt Engineering']
      },
      {
        id: 'step-3-memory-knowledge',
        title: 'Step 3: Memory Systems & Knowledge Management',
        description: 'Implement sophisticated memory and knowledge systems for agents',
        duration: '3 weeks',
        topics: ['Vector Databases', 'RAG Systems', 'Knowledge Graphs', 'Long-term Memory', 'Context Retrieval'],
        skills_gained: ['Memory Systems', 'Knowledge Management', 'Information Retrieval']
      },
      {
        id: 'step-4-conversation-design',
        title: 'Step 4: Conversational AI & Dialogue Management',
        description: 'Design natural and engaging conversational experiences',
        duration: '2-3 weeks',
        topics: ['Dialogue Management', 'Intent Recognition', 'Entity Extraction', 'Conversation Flow', 'Natural Language Understanding'],
        skills_gained: ['Conversational Design', 'Dialogue Systems', 'NLU Implementation']
      },
      {
        id: 'step-5-tool-integration',
        title: 'Step 5: Tool Integration & Function Calling',
        description: 'Enable agents to interact with external tools and APIs',
        duration: '2-3 weeks',
        topics: ['Function Calling', 'API Integration', 'Tool Orchestration', 'External Services', 'Workflow Automation'],
        skills_gained: ['Tool Integration', 'API Management', 'Workflow Design']
      },
      {
        id: 'step-6-deployment-optimization',
        title: 'Step 6: Deployment & Performance Optimization',
        description: 'Deploy agents and optimize for performance and scalability',
        duration: '2-3 weeks',
        topics: ['Agent Deployment', 'Performance Optimization', 'Monitoring & Analytics', 'Error Handling', 'Scalability'],
        skills_gained: ['Production Deployment', 'Performance Tuning', 'System Monitoring']
      }
    ],
    tags: ['ai', 'agents', 'llm', 'chatbots'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$100k - $170k',
    job_opportunities: ['AI Agent Developer', 'Conversational AI Engineer', 'LLM Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Analyze data to extract business insights and support decision-making',
    role: 'Data Analyst',
    primary_skills: ['SQL', 'Excel', 'Data Visualization', 'Statistics'],
    secondary_skills: ['Python/R', 'Tableau', 'Power BI', 'Business Intelligence'],
    category: 'Data Science',
    subcategory: 'Data Analysis',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Basic math skills', 'Analytical thinking', 'Business understanding'],
    steps: [
      {
        id: 'step-1-excel-fundamentals',
        title: 'Step 1: Excel & Spreadsheet Fundamentals',
        description: 'Master Excel for data analysis, formulas, and basic visualizations',
        duration: '2 weeks',
        topics: ['Excel Functions', 'Pivot Tables', 'Data Cleaning', 'Basic Charts', 'Data Validation'],
        skills_gained: ['Excel Proficiency', 'Data Manipulation', 'Basic Analysis']
      },
      {
        id: 'step-2-sql-databases',
        title: 'Step 2: SQL & Database Fundamentals',
        description: 'Learn SQL for data extraction, manipulation, and analysis',
        duration: '3 weeks',
        topics: ['SQL Queries', 'Joins & Subqueries', 'Aggregate Functions', 'Window Functions', 'Database Design'],
        skills_gained: ['SQL Mastery', 'Database Management', 'Data Extraction']
      },
      {
        id: 'step-3-statistics-analysis',
        title: 'Step 3: Statistics & Data Analysis',
        description: 'Apply statistical methods for data analysis and insights',
        duration: '3 weeks',
        topics: ['Descriptive Statistics', 'Hypothesis Testing', 'Correlation Analysis', 'Regression Analysis', 'Statistical Significance'],
        skills_gained: ['Statistical Analysis', 'Data Interpretation', 'Analytical Thinking']
      },
      {
        id: 'step-4-python-analysis',
        title: 'Step 4: Python for Data Analysis',
        description: 'Use Python libraries for advanced data analysis and manipulation',
        duration: '4 weeks',
        topics: ['Pandas & NumPy', 'Data Cleaning', 'Exploratory Analysis', 'Data Transformation', 'Jupyter Notebooks'],
        skills_gained: ['Python Programming', 'Data Wrangling', 'Advanced Analysis']
      },
      {
        id: 'step-5-data-visualization',
        title: 'Step 5: Data Visualization & Dashboards',
        description: 'Create compelling visualizations and interactive dashboards',
        duration: '3 weeks',
        topics: ['Tableau/Power BI', 'Chart Selection', 'Dashboard Design', 'Storytelling with Data', 'Interactive Reports'],
        skills_gained: ['Data Visualization', 'Dashboard Creation', 'Visual Storytelling']
      },
      {
        id: 'step-6-business-analysis',
        title: 'Step 6: Business Analysis & Reporting',
        description: 'Apply analytical skills to solve business problems and create reports',
        duration: '2-3 weeks',
        topics: ['Business Metrics', 'KPI Analysis', 'Report Writing', 'Stakeholder Communication', 'Decision Support'],
        skills_gained: ['Business Intelligence', 'Report Creation', 'Strategic Analysis']
      }
    ],
    tags: ['dataanalysis', 'sql', 'visualization', 'business'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$55k - $95k',
    job_opportunities: ['Data Analyst', 'Business Analyst', 'Reporting Analyst'],
    industry_demand: 'High'
  },
  {
    id: 'bi-analyst',
    title: 'BI Analyst',
    description: 'Create business intelligence solutions and dashboards for data-driven decisions',
    role: 'Business Intelligence Analyst',
    primary_skills: ['Business Intelligence', 'Data Warehousing', 'Dashboard Creation', 'SQL'],
    secondary_skills: ['ETL Processes', 'Data Modeling', 'Reporting Tools'],
    category: 'Data Science',
    subcategory: 'Business Intelligence',
    difficulty: 'Intermediate',
    duration: '4-5 months',
    prerequisites: ['Business knowledge', 'Data analysis skills', 'SQL familiarity'],
    steps: [
      {
        id: 'bi-fundamentals',
        title: 'Business Intelligence Fundamentals',
        description: 'Core BI concepts and dashboard development',
        duration: '3-4 weeks',
        topics: ['BI Architecture', 'Data Warehousing', 'KPI Development'],
        skills_gained: ['Business Intelligence', 'Dashboard Development', 'Data Warehousing']
      }
    ],
    tags: ['bi', 'businessintelligence', 'dashboards', 'analytics'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $110k',
    job_opportunities: ['BI Analyst', 'Business Intelligence Developer', 'Data Visualization Specialist'],
    industry_demand: 'High'
  },
  {
    id: 'mlops',
    title: 'MLOps',
    description: 'Operationalize machine learning models with DevOps practices',
    role: 'MLOps Engineer',
    primary_skills: ['ML Model Deployment', 'Docker', 'Kubernetes', 'CI/CD for ML'],
    secondary_skills: ['Model Monitoring', 'Feature Stores', 'ML Pipelines'],
    category: 'AI/ML',
    subcategory: 'MLOps',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['ML knowledge', 'DevOps experience', 'Cloud platforms'],
    steps: [
      {
        id: 'step-1-mlops-foundations',
        title: 'Step 1: MLOps Foundations & DevOps for ML',
        description: 'Master foundational MLOps concepts and DevOps practices for ML',
        duration: '3-4 weeks',
        topics: ['MLOps Principles', 'ML Development Lifecycle', 'Version Control for ML', 'CI/CD for ML', 'Infrastructure as Code'],
        skills_gained: ['MLOps Fundamentals', 'ML DevOps', 'Infrastructure Management']
      },
      {
        id: 'step-2-model-development',
        title: 'Step 2: Model Development & Experimentation',
        description: 'Implement robust model development and experiment tracking',
        duration: '3-4 weeks',
        topics: ['Experiment Tracking', 'Model Versioning', 'Hyperparameter Tuning', 'Feature Stores', 'Data Versioning'],
        skills_gained: ['Experiment Management', 'Model Development', 'Data Management']
      },
      {
        id: 'step-3-deployment-pipelines',
        title: 'Step 3: Model Deployment & Serving',
        description: 'Deploy models to production with automated pipelines',
        duration: '4 weeks',
        topics: ['Model Serving', 'Containerization', 'API Development', 'Load Balancing', 'Scalable Deployments'],
        skills_gained: ['Model Deployment', 'Production Systems', 'Scalable Architecture']
      },
      {
        id: 'step-4-monitoring-observability',
        title: 'Step 4: Monitoring & Observability',
        description: 'Implement comprehensive monitoring for ML systems',
        duration: '3 weeks',
        topics: ['Model Monitoring', 'Data Drift Detection', 'Performance Metrics', 'Alerting Systems', 'Logging'],
        skills_gained: ['System Monitoring', 'Performance Analysis', 'Issue Detection']
      },
      {
        id: 'step-5-automation-orchestration',
        title: 'Step 5: Pipeline Automation & Orchestration',
        description: 'Build automated ML pipelines and workflow orchestration',
        duration: '3-4 weeks',
        topics: ['Workflow Orchestration', 'Pipeline Automation', 'Retraining Pipelines', 'Data Pipelines', 'Job Scheduling'],
        skills_gained: ['Pipeline Development', 'Workflow Orchestration', 'Automation']
      },
      {
        id: 'step-6-governance-security',
        title: 'Step 6: ML Governance & Security',
        description: 'Implement governance, security, and compliance for ML systems',
        duration: '2-3 weeks',
        topics: ['Model Governance', 'Security Best Practices', 'Compliance', 'Audit Trails', 'Privacy Protection'],
        skills_gained: ['ML Governance', 'Security Management', 'Compliance']
      }
    ],
    tags: ['mlops', 'machinelearning', 'devops', 'deployment'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$95k - $160k',
    job_opportunities: ['MLOps Engineer', 'ML Platform Engineer', 'AI Infrastructure Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'engineering-manager',
    title: 'Engineering Manager',
    description: 'Lead engineering teams and manage technical projects',
    role: 'Engineering Manager',
    primary_skills: ['Team Leadership', 'Project Management', 'Technical Strategy', 'People Management'],
    secondary_skills: ['Agile Methodologies', 'Budget Management', 'Hiring'],
    category: 'Management',
    subcategory: 'Engineering Management',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Senior engineering experience', 'Leadership skills', 'Technical expertise'],
    steps: [
      {
        id: 'step-1-leadership-transition',
        title: 'Step 1: Leadership Transition & Fundamentals',
        description: 'Transition from individual contributor to engineering leader',
        duration: '3-4 weeks',
        topics: ['Leadership Mindset', 'Role Transition', 'Delegation', 'Communication Skills', 'Management vs Leadership'],
        skills_gained: ['Leadership Fundamentals', 'Team Communication', 'Role Clarity']
      },
      {
        id: 'step-2-team-building',
        title: 'Step 2: Team Building & People Management',
        description: 'Build high-performing engineering teams',
        duration: '4 weeks',
        topics: ['Team Dynamics', 'Hiring & Interviewing', 'Performance Management', '1-on-1s', 'Career Development'],
        skills_gained: ['Team Building', 'People Management', 'Performance Coaching']
      },
      {
        id: 'step-3-technical-strategy',
        title: 'Step 3: Technical Strategy & Architecture',
        description: 'Develop technical strategy and architectural decision-making',
        duration: '3-4 weeks',
        topics: ['Technical Strategy', 'Architecture Decisions', 'Technology Roadmaps', 'Technical Debt Management', 'Innovation Planning'],
        skills_gained: ['Technical Strategy', 'Architecture Planning', 'Technology Leadership']
      },
      {
        id: 'step-4-project-delivery',
        title: 'Step 4: Project Management & Delivery',
        description: 'Master project management and delivery methodologies',
        duration: '3 weeks',
        topics: ['Agile Methodologies', 'Sprint Planning', 'Risk Management', 'Stakeholder Management', 'Delivery Optimization'],
        skills_gained: ['Project Management', 'Agile Leadership', 'Delivery Excellence']
      },
      {
        id: 'step-5-organizational-skills',
        title: 'Step 5: Organizational & Business Skills',
        description: 'Develop business acumen and organizational effectiveness',
        duration: '2-3 weeks',
        topics: ['Business Strategy', 'Budget Management', 'Cross-functional Collaboration', 'Organizational Design', 'Change Management'],
        skills_gained: ['Business Acumen', 'Organizational Leadership', 'Strategic Thinking']
      },
      {
        id: 'step-6-scaling-culture',
        title: 'Step 6: Scaling Teams & Engineering Culture',
        description: 'Scale engineering teams and build strong engineering culture',
        duration: '2-3 weeks',
        topics: ['Team Scaling', 'Engineering Culture', 'Process Improvement', 'Knowledge Sharing', 'Continuous Learning'],
        skills_gained: ['Team Scaling', 'Culture Building', 'Process Excellence']
      }
    ],
    tags: ['management', 'leadership', 'engineering', 'teams'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$120k - $200k',
    job_opportunities: ['Engineering Manager', 'Technical Lead', 'Development Manager'],
    industry_demand: 'High'
  },
  // GAME DEVELOPMENT SPECIALIZATIONS
  {
    id: 'client-side-game-dev',
    title: 'Client Side Game Dev.',
    description: 'Develop client-side game logic and user interfaces for games',
    role: 'Client-Side Game Developer',
    primary_skills: ['Unity', 'C#', 'Game UI', 'Client Architecture'],
    secondary_skills: ['Graphics Programming', 'Performance Optimization', 'Input Systems'],
    category: 'Game Development',
    subcategory: 'Client-Side',
    difficulty: 'Intermediate',
    duration: '5-7 months',
    prerequisites: ['Programming knowledge', 'Game development basics', 'Unity familiarity'],
    steps: [
      {
        id: 'client-game-fundamentals',
        title: 'Client-Side Game Development',
        description: 'Building client-side game systems',
        duration: '4-5 weeks',
        topics: ['Game Client Architecture', 'UI Systems', 'Input Handling'],
        skills_gained: ['Client-Side Development', 'Game UI', 'Performance Optimization']
      }
    ],
    tags: ['gamedev', 'client', 'unity', 'ui'],
    popularity_score: 5,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['Client-Side Game Developer', 'Game UI Developer', 'Frontend Game Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'server-side-game-dev',
    title: 'Server Side Game Dev.',
    description: 'Build server infrastructure and backend systems for multiplayer games',
    role: 'Server-Side Game Developer',
    primary_skills: ['Server Architecture', 'Networking', 'Database Design', 'Scalability'],
    secondary_skills: ['Real-time Systems', 'Load Balancing', 'Security'],
    category: 'Game Development',
    subcategory: 'Server-Side',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Backend development experience', 'Networking knowledge', 'Game systems understanding'],
    steps: [
      {
        id: 'step-1-server-fundamentals',
        title: 'Step 1: Game Server Architecture Fundamentals',
        description: 'Learn core concepts of game server design and architecture',
        duration: '2-3 weeks',
        topics: ['Game Server Architecture', 'Client-Server Models', 'Authoritative Servers', 'State Synchronization', 'Tick Systems'],
        skills_gained: ['Server Architecture', 'Game Networking', 'System Design']
      },
      {
        id: 'step-2-networking-protocols',
        title: 'Step 2: Real-time Networking & Protocols',
        description: 'Implement efficient networking for real-time multiplayer games',
        duration: '2-3 weeks',
        topics: ['UDP vs TCP', 'Custom Protocols', 'Latency Optimization', 'Packet Loss Handling', 'Network Security'],
        skills_gained: ['Network Programming', 'Protocol Design', 'Performance Optimization']
      },
      {
        id: 'step-3-player-management',
        title: 'Step 3: Player Data & Session Management',
        description: 'Handle player authentication, data persistence, and session management',
        duration: '2 weeks',
        topics: ['Player Authentication', 'Session Management', 'Data Persistence', 'Player Profiles', 'Matchmaking Systems'],
        skills_gained: ['User Management', 'Database Design', 'Authentication Systems']
      },
      {
        id: 'step-4-scalability-performance',
        title: 'Step 4: Scalability & Performance Optimization',
        description: 'Build systems that can handle thousands of concurrent players',
        duration: '2-3 weeks',
        topics: ['Load Balancing', 'Horizontal Scaling', 'Database Optimization', 'Caching Strategies', 'Performance Monitoring'],
        skills_gained: ['Scalability Design', 'Performance Tuning', 'System Monitoring']
      },
      {
        id: 'step-5-game-logic-systems',
        title: 'Step 5: Game Logic & Systems Programming',
        description: 'Implement core game mechanics and systems on the server side',
        duration: '2 weeks',
        topics: ['Game Logic Architecture', 'Physics Simulation', 'AI Systems', 'Economy Systems', 'Anti-Cheat Mechanisms'],
        skills_gained: ['Game Programming', 'Systems Development', 'Security Implementation']
      },
      {
        id: 'step-6-deployment-devops',
        title: 'Step 6: Deployment & DevOps for Games',
        description: 'Deploy and maintain game servers in production environments',
        duration: '1-2 weeks',
        topics: ['Cloud Deployment', 'Container Orchestration', 'CI/CD for Games', 'Monitoring & Analytics', 'Live Service Management'],
        skills_gained: ['DevOps', 'Cloud Infrastructure', 'Production Management']
      }
    ],
    tags: ['gamedev', 'server', 'networking', 'multiplayer'],
    popularity_score: 5,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Server-Side Game Developer', 'Game Backend Engineer', 'Multiplayer Systems Developer'],
    industry_demand: 'Medium'
  },
  // FRAMEWORK AND TECHNOLOGY SKILL ROADMAPS
  {
    id: 'vuejs-development',
    title: 'Vue.js Development',
    description: 'Master Vue.js framework for building modern web applications',
    role: 'Vue.js Developer',
    primary_skills: ['Vue.js', 'Vuex', 'Vue Router', 'Component Architecture'],
    secondary_skills: ['Nuxt.js', 'Testing', 'Performance Optimization'],
    category: 'Web Development',
    subcategory: 'Frontend Framework',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['JavaScript knowledge', 'HTML/CSS skills', 'Basic frontend experience'],
    steps: [
      {
        id: 'step-1-vue-basics',
        title: 'Step 1: Vue.js Fundamentals',
        description: 'Learn Vue.js basics and reactive programming concepts',
        duration: '1-2 weeks',
        topics: ['Vue Instance', 'Template Syntax', 'Data Binding', 'Event Handling'],
        skills_gained: ['Vue.js Basics', 'Template Syntax', 'Event Handling']
      },
      {
        id: 'step-2-components',
        title: 'Step 2: Component Architecture',
        description: 'Build reusable components and manage component communication',
        duration: '1-2 weeks',
        topics: ['Component Creation', 'Props', 'Events', 'Slots', 'Component Communication'],
        skills_gained: ['Component Development', 'Props & Events', 'Component Architecture']
      },
      {
        id: 'step-3-directives',
        title: 'Step 3: Directives and Conditional Rendering',
        description: 'Master Vue directives and conditional rendering techniques',
        duration: '1 week',
        topics: ['Built-in Directives', 'v-if/v-show', 'v-for', 'Custom Directives'],
        skills_gained: ['Vue Directives', 'Conditional Rendering', 'List Rendering']
      },
      {
        id: 'step-4-vue-router',
        title: 'Step 4: Routing with Vue Router',
        description: 'Create single-page applications with Vue Router',
        duration: '1-2 weeks',
        topics: ['Route Configuration', 'Navigation', 'Route Guards', 'Nested Routes'],
        skills_gained: ['Vue Router', 'SPA Navigation', 'Route Management']
      },
      {
        id: 'step-5-state-management',
        title: 'Step 5: State Management with Vuex',
        description: 'Manage application state with Vuex store',
        duration: '2-3 weeks',
        topics: ['Vuex Store', 'State', 'Mutations', 'Actions', 'Getters'],
        skills_gained: ['Vuex', 'State Management', 'Centralized Store']
      },
      {
        id: 'step-6-composition-api',
        title: 'Step 6: Composition API',
        description: 'Learn modern Vue development with Composition API',
        duration: '1-2 weeks',
        topics: ['setup()', 'Reactive References', 'Computed Properties', 'Lifecycle Hooks'],
        skills_gained: ['Composition API', 'Modern Vue', 'Reactive Programming']
      },
      {
        id: 'step-7-testing-deployment',
        title: 'Step 7: Testing and Deployment',
        description: 'Test Vue applications and deploy to production',
        duration: '1-2 weeks',
        topics: ['Unit Testing', 'Component Testing', 'Build Process', 'Deployment'],
        skills_gained: ['Vue Testing', 'Build Tools', 'Production Deployment']
      }
    ],
    tags: ['vue', 'javascript', 'frontend', 'spa'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['Vue.js Developer', 'Frontend Developer', 'JavaScript Developer'],
    industry_demand: 'High'
  },
  {
    id: 'angular-development',
    title: 'Angular Development',
    description: 'Build enterprise-scale applications with Angular framework',
    role: 'Angular Developer',
    primary_skills: ['Angular', 'TypeScript', 'RxJS', 'Angular CLI'],
    secondary_skills: ['NgRx', 'Angular Material', 'Testing', 'PWA'],
    category: 'Web Development',
    subcategory: 'Frontend Framework',
    difficulty: 'Intermediate',
    duration: '4-5 months',
    prerequisites: ['TypeScript knowledge', 'JavaScript experience', 'OOP concepts'],
    steps: [
      {
        id: 'step-1-typescript-basics',
        title: 'Step 1: TypeScript Fundamentals',
        description: 'Master TypeScript for Angular development',
        duration: '1-2 weeks',
        topics: ['TypeScript Syntax', 'Types', 'Interfaces', 'Classes', 'Generics'],
        skills_gained: ['TypeScript', 'Type Safety', 'Static Typing']
      },
      {
        id: 'step-2-angular-setup',
        title: 'Step 2: Angular CLI and Project Setup',
        description: 'Set up Angular development environment and create projects',
        duration: '1 week',
        topics: ['Angular CLI', 'Project Structure', 'Development Server', 'Build Process'],
        skills_gained: ['Angular CLI', 'Project Setup', 'Development Environment']
      },
      {
        id: 'step-3-components',
        title: 'Step 3: Components and Templates',
        description: 'Build Angular components and work with templates',
        duration: '2-3 weeks',
        topics: ['Component Creation', 'Data Binding', 'Event Handling', 'Lifecycle Hooks'],
        skills_gained: ['Angular Components', 'Template Syntax', 'Component Lifecycle']
      },
      {
        id: 'step-4-services-di',
        title: 'Step 4: Services and Dependency Injection',
        description: 'Create services and understand Angular\'s dependency injection',
        duration: '1-2 weeks',
        topics: ['Service Creation', 'Dependency Injection', 'Providers', 'Singleton Pattern'],
        skills_gained: ['Angular Services', 'Dependency Injection', 'Service Architecture']
      },
      {
        id: 'step-5-angular-routing',
        title: 'Step 5: Routing and Navigation',
        description: 'Implement routing for single-page applications',
        duration: '1-2 weeks',
        topics: ['Router Configuration', 'Route Parameters', 'Guards', 'Lazy Loading'],
        skills_gained: ['Angular Router', 'Navigation', 'Route Protection']
      },
      {
        id: 'step-6-forms',
        title: 'Step 6: Forms and Validation',
        description: 'Create reactive and template-driven forms',
        duration: '1-2 weeks',
        topics: ['Reactive Forms', 'Template-driven Forms', 'Validation', 'Form Controls'],
        skills_gained: ['Angular Forms', 'Form Validation', 'User Input Handling']
      },
      {
        id: 'step-7-http-observables',
        title: 'Step 7: HTTP Client and Observables',
        description: 'Make HTTP requests and work with RxJS observables',
        duration: '2-3 weeks',
        topics: ['HTTP Client', 'Observables', 'RxJS Operators', 'Error Handling'],
        skills_gained: ['HTTP Client', 'RxJS', 'Reactive Programming']
      },
      {
        id: 'step-8-testing-deployment',
        title: 'Step 8: Testing and Deployment',
        description: 'Test Angular applications and deploy to production',
        duration: '1-2 weeks',
        topics: ['Unit Testing', 'Integration Testing', 'Karma/Jasmine', 'Build & Deploy'],
        skills_gained: ['Angular Testing', 'Test Automation', 'Production Deployment']
      }
    ],
    tags: ['angular', 'typescript', 'enterprise', 'spa'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $120k',
    job_opportunities: ['Angular Developer', 'Frontend Developer', 'Full Stack Developer'],
    industry_demand: 'High'
  },
  {
    id: 'javascript-mastery',
    title: 'JavaScript Mastery',
    description: 'Master JavaScript from fundamentals to advanced concepts',
    role: 'JavaScript Developer',
    primary_skills: ['ES6+', 'Async Programming', 'DOM Manipulation', 'Functional Programming'],
    secondary_skills: ['Design Patterns', 'Performance Optimization', 'Testing'],
    category: 'Programming Languages',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Basic programming concepts', 'HTML/CSS knowledge'],
    steps: [
      {
        id: 'step-1-js-basics',
        title: 'Step 1: JavaScript Fundamentals',
        description: 'Learn JavaScript syntax and core programming concepts',
        duration: '2-3 weeks',
        topics: ['Variables & Data Types', 'Operators', 'Control Structures', 'Basic Functions'],
        skills_gained: ['JavaScript Syntax', 'Programming Logic', 'Problem Solving']
      },
      {
        id: 'step-2-functions-scope',
        title: 'Step 2: Functions and Scope',
        description: 'Master functions, scope, and closures in JavaScript',
        duration: '1-2 weeks',
        topics: ['Function Declaration', 'Arrow Functions', 'Scope', 'Closures', 'Hoisting'],
        skills_gained: ['Function Programming', 'Scope Management', 'Closures']
      },
      {
        id: 'step-3-objects-arrays',
        title: 'Step 3: Objects and Arrays',
        description: 'Work with JavaScript objects and arrays effectively',
        duration: '1-2 weeks',
        topics: ['Object Creation', 'Object Methods', 'Array Methods', 'Destructuring'],
        skills_gained: ['Object Manipulation', 'Array Operations', 'Data Structures']
      },
      {
        id: 'step-4-dom-manipulation',
        title: 'Step 4: DOM Manipulation',
        description: 'Interact with web pages using JavaScript',
        duration: '2-3 weeks',
        topics: ['DOM Selection', 'Event Handling', 'Dynamic Content', 'Form Validation'],
        skills_gained: ['DOM', 'Event Handling', 'Web Interactivity']
      },
      {
        id: 'step-5-async-programming',
        title: 'Step 5: Asynchronous Programming',
        description: 'Master async operations and modern JavaScript patterns',
        duration: '2-3 weeks',
        topics: ['Callbacks', 'Promises', 'Async/Await', 'Fetch API'],
        skills_gained: ['Async Programming', 'Promise Handling', 'API Integration']
      },
      {
        id: 'step-6-es6-plus',
        title: 'Step 6: Modern JavaScript (ES6+)',
        description: 'Learn modern JavaScript features and syntax',
        duration: '1-2 weeks',
        topics: ['Template Literals', 'Modules', 'Classes', 'Spread/Rest Operators'],
        skills_gained: ['Modern JavaScript', 'ES6+ Features', 'Module System']
      },
      {
        id: 'step-7-oop-prototypes',
        title: 'Step 7: OOP and Prototypes',
        description: 'Understand object-oriented programming in JavaScript',
        duration: '1-2 weeks',
        topics: ['Prototypes', 'Inheritance', 'Classes', 'Constructor Functions'],
        skills_gained: ['OOP in JavaScript', 'Prototype Chain', 'Class-based Programming']
      },
      {
        id: 'step-8-advanced-concepts',
        title: 'Step 8: Advanced JavaScript Concepts',
        description: 'Master advanced JavaScript patterns and best practices',
        duration: '2-3 weeks',
        topics: ['Design Patterns', 'Error Handling', 'Performance', 'Testing'],
        skills_gained: ['Advanced Patterns', 'Error Management', 'Code Quality']
      }
    ],
    tags: ['javascript', 'programming', 'web', 'frontend'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$60k - $110k',
    job_opportunities: ['JavaScript Developer', 'Frontend Developer', 'Full Stack Developer'],
    industry_demand: 'High'
  },
  {
    id: 'typescript-mastery',
    title: 'TypeScript Mastery',
    description: 'Master TypeScript for type-safe JavaScript development',
    role: 'TypeScript Developer',
    primary_skills: ['TypeScript', 'Type System', 'Interfaces', 'Generics'],
    secondary_skills: ['Advanced Types', 'Decorators', 'Module System'],
    category: 'Programming Languages',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['JavaScript proficiency', 'Object-oriented programming'],
    steps: [
      {
        id: 'step-1-ts-basics',
        title: 'Step 1: TypeScript Fundamentals',
        description: 'Learn TypeScript basics and type system',
        duration: '1-2 weeks',
        topics: ['Basic Types', 'Type Annotations', 'Type Inference', 'Compilation'],
        skills_gained: ['TypeScript Basics', 'Type System', 'Static Typing']
      },
      {
        id: 'step-2-ts-interfaces',
        title: 'Step 2: Interfaces and Objects',
        description: 'Master interfaces and object types',
        duration: '1-2 weeks',
        topics: ['Interfaces', 'Object Types', 'Optional Properties', 'Index Signatures'],
        skills_gained: ['Interface Design', 'Object Typing', 'Type Contracts']
      },
      {
        id: 'step-3-ts-functions',
        title: 'Step 3: Functions and Generics',
        description: 'Work with typed functions and generic programming',
        duration: '1-2 weeks',
        topics: ['Function Types', 'Generics', 'Constraints', 'Utility Types'],
        skills_gained: ['Generic Programming', 'Function Typing', 'Type Constraints']
      },
      {
        id: 'step-4-ts-classes',
        title: 'Step 4: Classes and OOP',
        description: 'Implement object-oriented programming with TypeScript',
        duration: '1-2 weeks',
        topics: ['Classes', 'Inheritance', 'Access Modifiers', 'Abstract Classes'],
        skills_gained: ['OOP in TypeScript', 'Class Design', 'Inheritance']
      },
      {
        id: 'step-5-ts-modules',
        title: 'Step 5: Modules and Namespaces',
        description: 'Organize code with modules and namespaces',
        duration: '1 week',
        topics: ['ES6 Modules', 'Namespaces', 'Module Resolution', 'Declaration Files'],
        skills_gained: ['Module System', 'Code Organization', 'Type Declarations']
      }
    ],
    tags: ['typescript', 'javascript', 'typesafety', 'programming'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['TypeScript Developer', 'Frontend Developer', 'Full Stack Developer'],
    industry_demand: 'High'
  },
  {
    id: 'java-programming',
    title: 'Java Programming',
    description: 'Master Java programming for enterprise and Android development',
    role: 'Java Developer',
    primary_skills: ['Java Core', 'OOP', 'Collections', 'Multithreading'],
    secondary_skills: ['Spring Framework', 'JVM', 'Design Patterns'],
    category: 'Programming Languages',
    difficulty: 'Intermediate',
    duration: '5-6 months',
    prerequisites: ['Basic programming concepts', 'Object-oriented thinking'],
    steps: [
      {
        id: 'step-1-java-setup',
        title: 'Java Environment & Basics',
        description: 'Set up Java development environment and learn core syntax',
        duration: '2 weeks',
        topics: ['JDK installation', 'IDE setup', 'Java syntax', 'Variables', 'Data types', 'Operators'],
        skills_gained: ['Environment setup', 'Basic Java syntax', 'Development tools']
      },
      {
        id: 'step-2-java-oop',
        title: 'Object-Oriented Programming',
        description: 'Master OOP concepts and design patterns in Java',
        duration: '3 weeks',
        topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction', 'Interfaces'],
        skills_gained: ['OOP principles', 'Class design', 'Interface implementation']
      },
      {
        id: 'step-3-java-collections',
        title: 'Collections Framework & Data Structures',
        description: 'Work with Java collections and understand data structures',
        duration: '2-3 weeks',
        topics: ['ArrayList', 'HashMap', 'LinkedList', 'TreeSet', 'Collections API', 'Generics'],
        skills_gained: ['Data structure usage', 'Generic programming', 'Collection manipulation']
      },
      {
        id: 'step-4-java-exceptions',
        title: 'Exception Handling & I/O',
        description: 'Handle errors gracefully and work with file operations',
        duration: '2 weeks',
        topics: ['Try-catch blocks', 'Custom exceptions', 'File I/O', 'Streams', 'Serialization'],
        skills_gained: ['Error handling', 'File operations', 'Stream processing']
      },
      {
        id: 'step-5-java-multithreading',
        title: 'Multithreading & Concurrency',
        description: 'Build concurrent applications with threads and synchronization',
        duration: '3 weeks',
        topics: ['Thread creation', 'Synchronization', 'Executor framework', 'Concurrent collections', 'Thread safety'],
        skills_gained: ['Concurrent programming', 'Thread management', 'Performance optimization']
      },
      {
        id: 'step-6-java-advanced',
        title: 'Advanced Java Features',
        description: 'Explore advanced Java concepts and modern features',
        duration: '2-3 weeks',
        topics: ['Lambda expressions', 'Stream API', 'Optional class', 'Reflection', 'Annotations'],
        skills_gained: ['Functional programming', 'Modern Java features', 'Reflective programming']
      },
      {
        id: 'step-7-java-frameworks',
        title: 'Frameworks & Best Practices',
        description: 'Learn popular Java frameworks and enterprise development practices',
        duration: '3-4 weeks',
        topics: ['Spring Framework basics', 'Maven/Gradle', 'Unit testing', 'Design patterns', 'Code quality'],
        skills_gained: ['Framework usage', 'Enterprise patterns', 'Testing methodologies']
      }
    ],
    tags: ['java', 'programming', 'enterprise', 'backend'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['Java Developer', 'Backend Developer', 'Enterprise Developer'],
    industry_demand: 'High'
  },
  {
    id: 'go-programming',
    title: 'Go Programming',
    description: 'Learn Go programming for high-performance backend systems',
    role: 'Go Developer',
    primary_skills: ['Go Syntax', 'Goroutines', 'Channels', 'Interfaces'],
    secondary_skills: ['Microservices', 'Docker', 'gRPC'],
    category: 'Programming Languages',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Programming experience', 'Basic system concepts'],
    steps: [
      {
        id: 'step-1-go-setup',
        title: 'Go Environment & Basics',
        description: 'Set up Go development environment and learn basic syntax',
        duration: '1-2 weeks',
        topics: ['Go installation', 'GOPATH/modules', 'Basic syntax', 'Variables', 'Functions', 'Packages'],
        skills_gained: ['Go environment setup', 'Basic Go syntax', 'Package management']
      },
      {
        id: 'step-2-go-types',
        title: 'Data Types & Control Structures',
        description: 'Master Go data types and control flow mechanisms',
        duration: '2 weeks',
        topics: ['Data types', 'Arrays & Slices', 'Maps', 'Structs', 'Control flow', 'Error handling'],
        skills_gained: ['Data structure usage', 'Control flow', 'Error management']
      },
      {
        id: 'step-3-go-functions',
        title: 'Functions & Methods',
        description: 'Learn advanced function concepts and method definitions',
        duration: '2 weeks',
        topics: ['Function parameters', 'Return values', 'Methods', 'Interfaces', 'Type assertions', 'Empty interfaces'],
        skills_gained: ['Function design', 'Interface programming', 'Type system']
      },
      {
        id: 'step-4-go-concurrency',
        title: 'Goroutines & Concurrency',
        description: 'Master Go\'s powerful concurrency model',
        duration: '2-3 weeks',
        topics: ['Goroutines', 'Channels', 'Select statements', 'Sync package', 'Context package', 'Worker pools'],
        skills_gained: ['Concurrent programming', 'Channel communication', 'Synchronization']
      },
      {
        id: 'step-5-go-web',
        title: 'Web Development & APIs',
        description: 'Build web applications and REST APIs with Go',
        duration: '2-3 weeks',
        topics: ['HTTP package', 'Routing', 'Middleware', 'JSON handling', 'Database integration', 'Testing'],
        skills_gained: ['Web development', 'API design', 'HTTP handling']
      },
      {
        id: 'step-6-go-advanced',
        title: 'Advanced Go & Production',
        description: 'Advanced Go features and production deployment practices',
        duration: '2 weeks',
        topics: ['Reflection', 'Code generation', 'Performance optimization', 'Profiling', 'Deployment', 'Docker'],
        skills_gained: ['Advanced Go features', 'Performance tuning', 'Production deployment']
      }
    ],
    tags: ['go', 'golang', 'backend', 'performance'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Go Developer', 'Backend Developer', 'System Developer'],
    industry_demand: 'High'
  },
  {
    id: 'rust-programming',
    title: 'Rust Programming',
    description: 'Master Rust for systems programming and memory safety',
    role: 'Rust Developer',
    primary_skills: ['Rust Syntax', 'Ownership', 'Memory Safety', 'Systems Programming'],
    secondary_skills: ['WebAssembly', 'Async Programming', 'Performance'],
    category: 'Programming Languages',
    difficulty: 'Advanced',
    duration: '4-6 months',
    prerequisites: ['Strong programming background', 'Systems concepts', 'C/C++ helpful'],
    steps: [
      {
        id: 'step-1-rust-setup',
        title: 'Rust Environment & Basics',
        description: 'Set up Rust development environment and learn fundamental syntax',
        duration: '1-2 weeks',
        topics: ['Rust installation', 'Cargo package manager', 'Basic syntax', 'Variables', 'Data types', 'Functions'],
        skills_gained: ['Rust environment', 'Basic syntax', 'Package management']
      },
      {
        id: 'step-2-rust-ownership',
        title: 'Ownership & Memory Safety',
        description: 'Master Rust\'s unique ownership system and memory management',
        duration: '3-4 weeks',
        topics: ['Ownership rules', 'Borrowing', 'References', 'Lifetimes', 'Memory safety', 'Move semantics'],
        skills_gained: ['Memory safety', 'Ownership model', 'Lifetime management']
      },
      {
        id: 'step-3-rust-structures',
        title: 'Data Structures & Pattern Matching',
        description: 'Work with structs, enums, and powerful pattern matching',
        duration: '2-3 weeks',
        topics: ['Structs', 'Enums', 'Pattern matching', 'Option & Result types', 'Collections', 'Iterators'],
        skills_gained: ['Data modeling', 'Pattern matching', 'Error handling']
      },
      {
        id: 'step-4-rust-traits',
        title: 'Traits & Generics',
        description: 'Implement code reuse with traits and generic programming',
        duration: '2-3 weeks',
        topics: ['Trait definitions', 'Trait implementations', 'Generics', 'Associated types', 'Trait bounds'],
        skills_gained: ['Trait system', 'Generic programming', 'Code abstraction']
      },
      {
        id: 'step-5-rust-concurrency',
        title: 'Concurrency & Async Programming',
        description: 'Build concurrent and asynchronous applications safely',
        duration: '2-3 weeks',
        topics: ['Thread safety', 'Arc & Mutex', 'Channels', 'Async/await', 'Futures', 'Tokio runtime'],
        skills_gained: ['Concurrent programming', 'Async programming', 'Thread safety']
      },
      {
        id: 'step-6-rust-ecosystem',
        title: 'Ecosystem & Advanced Topics',
        description: 'Explore Rust ecosystem and advanced language features',
        duration: '2-3 weeks',
        topics: ['Popular crates', 'Macros', 'Unsafe Rust', 'WebAssembly', 'FFI', 'Testing'],
        skills_gained: ['Ecosystem navigation', 'Advanced features', 'Cross-platform development']
      }
    ],
    tags: ['rust', 'systems', 'memory', 'performance'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $140k',
    job_opportunities: ['Rust Developer', 'Systems Programmer', 'Blockchain Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'cpp-programming',
    title: 'C++ Programming',
    description: 'Master C++ for system programming and high-performance applications',
    role: 'C++ Developer',
    primary_skills: ['C++ Syntax', 'Memory Management', 'STL', 'Object-Oriented Programming'],
    secondary_skills: ['Templates', 'Multithreading', 'Performance Optimization'],
    category: 'Programming Languages',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Programming fundamentals', 'C knowledge helpful', 'Strong logical thinking'],
    steps: [
      {
        id: 'step-1-cpp-basics',
        title: 'C++ Fundamentals & Setup',
        description: 'Learn C++ basics, syntax, and development environment',
        duration: '2-3 weeks',
        topics: ['C++ compilation', 'Basic syntax', 'Variables', 'Data types', 'Control structures', 'Functions'],
        skills_gained: ['C++ syntax', 'Development environment', 'Basic programming']
      },
      {
        id: 'step-2-cpp-memory',
        title: 'Memory Management & Pointers',
        description: 'Master pointers, references, and dynamic memory allocation',
        duration: '3 weeks',
        topics: ['Pointers', 'References', 'Dynamic allocation', 'Memory leaks', 'Smart pointers', 'RAII'],
        skills_gained: ['Memory management', 'Pointer arithmetic', 'Resource management']
      },
      {
        id: 'step-3-cpp-oop',
        title: 'Object-Oriented Programming',
        description: 'Implement OOP concepts in C++ with classes and inheritance',
        duration: '3-4 weeks',
        topics: ['Classes & Objects', 'Constructors/Destructors', 'Inheritance', 'Polymorphism', 'Virtual functions', 'Abstract classes'],
        skills_gained: ['OOP design', 'Class hierarchies', 'Polymorphic programming']
      },
      {
        id: 'step-4-cpp-stl',
        title: 'Standard Template Library (STL)',
        description: 'Utilize C++ STL containers, algorithms, and iterators',
        duration: '2-3 weeks',
        topics: ['Vectors', 'Maps', 'Sets', 'Algorithms', 'Iterators', 'Function objects', 'Lambda expressions'],
        skills_gained: ['STL usage', 'Generic programming', 'Algorithm implementation']
      },
      {
        id: 'step-5-cpp-templates',
        title: 'Templates & Generic Programming',
        description: 'Create reusable code with templates and metaprogramming',
        duration: '3 weeks',
        topics: ['Function templates', 'Class templates', 'Template specialization', 'Variadic templates', 'SFINAE'],
        skills_gained: ['Template programming', 'Generic design', 'Metaprogramming']
      },
      {
        id: 'step-6-cpp-advanced',
        title: 'Advanced Features & Concurrency',
        description: 'Explore modern C++ features and multithreading',
        duration: '3-4 weeks',
        topics: ['C++11/14/17/20 features', 'Move semantics', 'Threading', 'Async programming', 'Exception handling'],
        skills_gained: ['Modern C++', 'Concurrent programming', 'Performance optimization']
      },
      {
        id: 'step-7-cpp-projects',
        title: 'Real-world Projects & Optimization',
        description: 'Build complex applications and optimize performance',
        duration: '4-5 weeks',
        topics: ['Project architecture', 'Performance profiling', 'Debugging', 'Build systems', 'Best practices'],
        skills_gained: ['System design', 'Performance tuning', 'Production code']
      }
    ],
    tags: ['cpp', 'systems', 'performance', 'programming'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $135k',
    job_opportunities: ['C++ Developer', 'Systems Programmer', 'Game Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'php-development',
    title: 'PHP Development',
    description: 'Build dynamic web applications with PHP and popular frameworks',
    role: 'PHP Developer',
    primary_skills: ['PHP', 'MySQL', 'Web Development', 'Server-side Programming'],
    secondary_skills: ['Laravel', 'Symfony', 'Composer', 'MVC Architecture'],
    category: 'Web Development',
    subcategory: 'Backend Programming',
    difficulty: 'Beginner',
    duration: '3-4 months',
    prerequisites: ['Basic web development knowledge', 'HTML/CSS familiarity'],
    steps: [
      {
        id: 'step-1-php-basics',
        title: 'PHP Fundamentals & Setup',
        description: 'Learn PHP basics, syntax, and development environment setup',
        duration: '2 weeks',
        topics: ['PHP installation', 'Basic syntax', 'Variables', 'Data types', 'Control structures', 'Functions'],
        skills_gained: ['PHP syntax', 'Development environment', 'Basic programming']
      },
      {
        id: 'step-2-php-web',
        title: 'Web Development with PHP',
        description: 'Build dynamic web pages with PHP and handle forms',
        duration: '2-3 weeks',
        topics: ['HTTP basics', 'Forms handling', 'Sessions', 'Cookies', 'File uploads', 'Error handling'],
        skills_gained: ['Web development', 'Form processing', 'Session management']
      },
      {
        id: 'step-3-php-database',
        title: 'Database Integration & MySQL',
        description: 'Connect PHP applications to databases and perform CRUD operations',
        duration: '2-3 weeks',
        topics: ['MySQL basics', 'PDO', 'Database connections', 'CRUD operations', 'SQL injection prevention'],
        skills_gained: ['Database integration', 'SQL programming', 'Security practices']
      },
      {
        id: 'step-4-php-oop',
        title: 'Object-Oriented PHP',
        description: 'Apply OOP principles in PHP for better code organization',
        duration: '2 weeks',
        topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Interfaces', 'Namespaces', 'Autoloading'],
        skills_gained: ['OOP programming', 'Code organization', 'Modern PHP practices']
      },
      {
        id: 'step-5-php-frameworks',
        title: 'PHP Frameworks & MVC',
        description: 'Learn popular PHP frameworks and MVC architecture',
        duration: '3-4 weeks',
        topics: ['MVC pattern', 'Laravel basics', 'Routing', 'Eloquent ORM', 'Blade templating', 'Composer'],
        skills_gained: ['Framework development', 'MVC architecture', 'Package management']
      },
      {
        id: 'step-6-php-advanced',
        title: 'Advanced PHP & Best Practices',
        description: 'Master advanced PHP features and development best practices',
        duration: '2-3 weeks',
        topics: ['Advanced OOP', 'Design patterns', 'Testing', 'Security', 'Performance optimization', 'Deployment'],
        skills_gained: ['Advanced PHP', 'Best practices', 'Production deployment']
      }
    ],
    tags: ['php', 'web', 'backend', 'mysql'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$50k - $90k',
    job_opportunities: ['PHP Developer', 'Web Developer', 'Backend Developer'],
    industry_demand: 'Medium'
  },
  // CONTAINER AND ORCHESTRATION ROADMAPS
  {
    id: 'kubernetes-orchestration',
    title: 'Kubernetes Orchestration',
    description: 'Master container orchestration with Kubernetes for scalable deployments',
    role: 'Kubernetes Engineer',
    primary_skills: ['Kubernetes', 'Container Orchestration', 'YAML', 'Cluster Management'],
    secondary_skills: ['Helm', 'Service Mesh', 'Monitoring', 'Security'],
    category: 'DevOps',
    subcategory: 'Container Orchestration',
    difficulty: 'Advanced',
    duration: '4-6 months',
    prerequisites: ['Docker knowledge', 'Linux familiarity', 'Basic networking'],
    steps: [
      {
        id: 'step-1-k8s-basics',
        title: 'Kubernetes Fundamentals & Setup',
        description: 'Learn Kubernetes basics and set up development environment',
        duration: '2 weeks',
        topics: ['Kubernetes architecture', 'kubectl CLI', 'Minikube setup', 'Basic concepts', 'Pods', 'Nodes'],
        skills_gained: ['Kubernetes basics', 'Environment setup', 'Container orchestration']
      },
      {
        id: 'step-2-k8s-workloads',
        title: 'Workloads & Deployments',
        description: 'Manage application workloads with deployments and replica sets',
        duration: '2-3 weeks',
        topics: ['Deployments', 'ReplicaSets', 'StatefulSets', 'DaemonSets', 'Jobs', 'CronJobs'],
        skills_gained: ['Workload management', 'Application deployment', 'Scaling strategies']
      },
      {
        id: 'step-3-k8s-networking',
        title: 'Services & Networking',
        description: 'Configure networking and service discovery in Kubernetes',
        duration: '2-3 weeks',
        topics: ['Services', 'Ingress', 'LoadBalancer', 'NetworkPolicies', 'Service discovery', 'DNS'],
        skills_gained: ['Network configuration', 'Service exposure', 'Load balancing']
      },
      {
        id: 'step-4-k8s-storage',
        title: 'Storage & Configuration',
        description: 'Manage persistent storage and application configuration',
        duration: '2 weeks',
        topics: ['Volumes', 'PersistentVolumes', 'StorageClasses', 'ConfigMaps', 'Secrets', 'Environment variables'],
        skills_gained: ['Storage management', 'Configuration management', 'Data persistence']
      },
      {
        id: 'step-5-k8s-security',
        title: 'Security & RBAC',
        description: 'Implement security best practices and role-based access control',
        duration: '2-3 weeks',
        topics: ['RBAC', 'ServiceAccounts', 'Security contexts', 'Pod security policies', 'Network security'],
        skills_gained: ['Security implementation', 'Access control', 'Compliance']
      },
      {
        id: 'step-6-k8s-advanced',
        title: 'Advanced Features & Production',
        description: 'Master advanced Kubernetes features for production deployment',
        duration: '3-4 weeks',
        topics: ['Helm charts', 'Operators', 'Monitoring', 'Logging', 'CI/CD integration', 'Cluster management'],
        skills_gained: ['Production deployment', 'Package management', 'Operations']
      }
    ],
    tags: ['kubernetes', 'containers', 'orchestration', 'devops'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$85k - $150k',
    job_opportunities: ['Kubernetes Engineer', 'DevOps Engineer', 'Platform Engineer'],
    industry_demand: 'High'
  },
  // VERSION CONTROL AND COLLABORATION
  {
    id: 'git-github',
    title: 'Git and GitHub',
    description: 'Master version control and collaborative development with Git and GitHub',
    role: 'Software Developer',
    primary_skills: ['Git', 'GitHub', 'Version Control', 'Branching Strategies'],
    secondary_skills: ['Pull Requests', 'Code Review', 'GitHub Actions', 'Open Source'],
    category: 'Development Tools',
    difficulty: 'Beginner',
    duration: '1-2 months',
    prerequisites: ['Basic programming knowledge'],
    steps: [
      {
        id: 'step-1-git-basics',
        title: 'Git Installation & Fundamentals',
        description: 'Install Git and learn basic version control concepts',
        duration: '1 week',
        topics: ['Git installation', 'Repository initialization', 'Basic commands', 'Working directory', 'Staging area'],
        skills_gained: ['Git setup', 'Basic commands', 'Version control concepts']
      },
      {
        id: 'step-2-git-workflow',
        title: 'Git Workflow & Branching',
        description: 'Master Git workflow and branching strategies',
        duration: '2 weeks',
        topics: ['Branching', 'Merging', 'Git flow', 'Feature branches', 'Conflict resolution', 'Rebase'],
        skills_gained: ['Branching strategies', 'Merge conflicts', 'Workflow management']
      },
      {
        id: 'step-3-github-basics',
        title: 'GitHub Essentials',
        description: 'Learn GitHub platform features and remote repositories',
        duration: '1-2 weeks',
        topics: ['Remote repositories', 'Push/pull', 'GitHub interface', 'Repository management', 'README files'],
        skills_gained: ['Remote collaboration', 'GitHub platform', 'Repository management']
      },
      {
        id: 'step-4-collaboration',
        title: 'Collaborative Development',
        description: 'Work effectively in team environments with pull requests',
        duration: '1-2 weeks',
        topics: ['Pull requests', 'Code reviews', 'Issues', 'Project boards', 'Team workflows', 'Collaboration'],
        skills_gained: ['Team collaboration', 'Code review', 'Project management']
      },
      {
        id: 'step-5-advanced-git',
        title: 'Advanced Git Features',
        description: 'Master advanced Git features and troubleshooting',
        duration: '1-2 weeks',
        topics: ['Git hooks', 'Submodules', 'Cherry-picking', 'Interactive rebase', 'Git stash', 'Troubleshooting'],
        skills_gained: ['Advanced Git features', 'Troubleshooting', 'Git automation']
      }
    ],
    tags: ['git', 'github', 'versioncontrol', 'collaboration'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: 'Essential Skill',
    job_opportunities: ['Any Software Developer Role'],
    industry_demand: 'High'
  },
  // API AND QUERY LANGUAGES
  {
    id: 'graphql-api-development',
    title: 'GraphQL API Development',
    description: 'Build flexible and efficient APIs with GraphQL',
    role: 'GraphQL Developer',
    primary_skills: ['GraphQL', 'Schema Design', 'Resolvers', 'Query Optimization'],
    secondary_skills: ['Apollo Server', 'Relay', 'Subscriptions', 'Federation'],
    category: 'Web Development',
    subcategory: 'API Development',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['API development experience', 'JavaScript/TypeScript knowledge'],
    steps: [
      {
        id: 'step-1-graphql-basics',
        title: 'GraphQL Fundamentals & Setup',
        description: 'Learn GraphQL concepts and set up development environment',
        duration: '1-2 weeks',
        topics: ['GraphQL overview', 'Schema basics', 'Type system', 'Queries vs REST', 'GraphQL playground'],
        skills_gained: ['GraphQL concepts', 'Schema design', 'Query language']
      },
      {
        id: 'step-2-graphql-schema',
        title: 'Schema Design & Types',
        description: 'Master GraphQL schema definition and type system',
        duration: '2 weeks',
        topics: ['Scalar types', 'Object types', 'Input types', 'Enums', 'Interfaces', 'Unions', 'Schema stitching'],
        skills_gained: ['Type system', 'Schema architecture', 'Data modeling']
      },
      {
        id: 'step-3-graphql-operations',
        title: 'Queries, Mutations & Subscriptions',
        description: 'Implement all GraphQL operation types effectively',
        duration: '2-3 weeks',
        topics: ['Query design', 'Mutations', 'Subscriptions', 'Variables', 'Directives', 'Fragments'],
        skills_gained: ['Operation design', 'Real-time features', 'Query optimization']
      },
      {
        id: 'step-4-graphql-resolvers',
        title: 'Resolvers & Data Sources',
        description: 'Build resolvers and connect to various data sources',
        duration: '2 weeks',
        topics: ['Resolver functions', 'Context', 'Data loaders', 'N+1 problem', 'Database integration', 'REST API integration'],
        skills_gained: ['Resolver implementation', 'Performance optimization', 'Data integration']
      },
      {
        id: 'step-5-graphql-advanced',
        title: 'Advanced Features & Tools',
        description: 'Explore advanced GraphQL features and ecosystem tools',
        duration: '2-3 weeks',
        topics: ['Apollo Server', 'Authentication', 'Authorization', 'Caching', 'Error handling', 'Testing'],
        skills_gained: ['Production features', 'Security implementation', 'Testing strategies']
      },
      {
        id: 'step-6-graphql-production',
        title: 'Production & Best Practices',
        description: 'Deploy GraphQL APIs and implement production best practices',
        duration: '1-2 weeks',
        topics: ['Performance monitoring', 'Schema versioning', 'Federation', 'Gateway patterns', 'Documentation'],
        skills_gained: ['Production deployment', 'Monitoring', 'Scalable architecture']
      }
    ],
    tags: ['graphql', 'api', 'backend', 'queries'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['GraphQL Developer', 'API Developer', 'Backend Developer'],
    industry_demand: 'High'
  },
  // BACKEND FRAMEWORKS
  {
    id: 'nestjs-framework',
    title: 'NestJS Framework',
    description: 'Build scalable Node.js server-side applications with NestJS',
    role: 'NestJS Developer',
    primary_skills: ['NestJS', 'TypeScript', 'Decorators', 'Dependency Injection'],
    secondary_skills: ['GraphQL', 'TypeORM', 'Guards', 'Interceptors'],
    category: 'Web Development',
    subcategory: 'Backend Framework',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Node.js knowledge', 'TypeScript proficiency', 'Backend concepts'],
    steps: [
      {
        id: 'nestjs-fundamentals',
        title: 'NestJS Fundamentals',
        description: 'Core NestJS concepts and architecture',
        duration: '3-4 weeks',
        topics: ['Controllers', 'Services', 'Modules', 'Middleware'],
        skills_gained: ['NestJS', 'Enterprise Backend', 'Scalable Architecture']
      }
    ],
    tags: ['nestjs', 'nodejs', 'typescript', 'backend'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['NestJS Developer', 'Backend Developer', 'Node.js Developer'],
    industry_demand: 'High'
  },
  {
    id: 'django-framework',
    title: 'Django Framework',
    description: 'Build robust web applications with Django Python framework',
    role: 'Django Developer',
    primary_skills: ['Django', 'Python', 'ORM', 'MVT Architecture'],
    secondary_skills: ['Django REST Framework', 'Admin Interface', 'Authentication'],
    category: 'Web Development',
    subcategory: 'Backend Framework',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Python knowledge', 'Web development basics', 'Database concepts'],
    steps: [
      {
        id: 'step-1-django-setup',
        title: 'Django Installation & Project Setup',
        description: 'Install Django and create your first Django project',
        duration: '1 week',
        topics: ['Python virtual environment', 'Django installation', 'Project creation', 'Settings configuration', 'Django admin'],
        skills_gained: ['Django setup', 'Project structure', 'Development environment']
      },
      {
        id: 'step-2-django-mvt',
        title: 'Models, Views & Templates',
        description: 'Master Django MVT architecture and URL routing',
        duration: '2-3 weeks',
        topics: ['URL patterns', 'Views (function & class)', 'Templates', 'Template inheritance', 'Static files', 'Forms'],
        skills_gained: ['MVT architecture', 'Template system', 'URL routing']
      },
      {
        id: 'step-3-django-models',
        title: 'Database Models & ORM',
        description: 'Design database models and use Django ORM effectively',
        duration: '2-3 weeks',
        topics: ['Model fields', 'Relationships', 'Migrations', 'QuerySet API', 'Model methods', 'Database optimization'],
        skills_gained: ['Database modeling', 'ORM usage', 'Query optimization']
      },
      {
        id: 'step-4-django-admin',
        title: 'Admin Interface & User Management',
        description: 'Customize Django admin and implement user authentication',
        duration: '2 weeks',
        topics: ['Admin customization', 'User authentication', 'Permissions', 'User registration', 'Login/logout', 'Password management'],
        skills_gained: ['Admin customization', 'User management', 'Security implementation']
      },
      {
        id: 'step-5-django-rest',
        title: 'Django REST Framework & APIs',
        description: 'Build RESTful APIs using Django REST Framework',
        duration: '2-3 weeks',
        topics: ['DRF setup', 'Serializers', 'ViewSets', 'Authentication', 'Permissions', 'API documentation'],
        skills_gained: ['API development', 'REST principles', 'API security']
      },
      {
        id: 'step-6-django-production',
        title: 'Testing & Production Deployment',
        description: 'Test Django applications and deploy to production',
        duration: '2 weeks',
        topics: ['Unit testing', 'Integration testing', 'Performance optimization', 'Deployment strategies', 'Security best practices'],
        skills_gained: ['Testing methodologies', 'Production deployment', 'Security hardening']
      }
    ],
    tags: ['django', 'python', 'web', 'framework'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $120k',
    job_opportunities: ['Django Developer', 'Python Developer', 'Backend Developer'],
    industry_demand: 'High'
  },
  {
    id: 'flask-microframework',
    title: 'Flask Microframework',
    description: 'Build lightweight web applications and APIs with Flask',
    role: 'Flask Developer',
    primary_skills: ['Flask', 'Python', 'Jinja2', 'Werkzeug'],
    secondary_skills: ['SQLAlchemy', 'Flask-RESTful', 'Authentication', 'Testing'],
    category: 'Web Development',
    subcategory: 'Backend Framework',
    difficulty: 'Beginner',
    duration: '2-3 months',
    prerequisites: ['Python knowledge', 'Basic web concepts'],
    steps: [
      {
        id: 'step-1-flask-basics',
        title: 'Flask Basics & Setup',
        description: 'Install Flask and create your first web application',
        duration: '1 week',
        topics: ['Flask installation', 'Virtual environment', 'Hello World app', 'Routing basics', 'Debug mode'],
        skills_gained: ['Flask setup', 'Basic routing', 'Development environment']
      },
      {
        id: 'step-2-flask-templates',
        title: 'Templates & Static Files',
        description: 'Work with Jinja2 templates and static file management',
        duration: '1-2 weeks',
        topics: ['Jinja2 templating', 'Template inheritance', 'Static files', 'URL generation', 'Template context'],
        skills_gained: ['Template engine', 'Frontend integration', 'Dynamic content']
      },
      {
        id: 'step-3-flask-forms',
        title: 'Forms & Request Handling',
        description: 'Handle forms, requests, and user input validation',
        duration: '1-2 weeks',
        topics: ['Form handling', 'Request methods', 'WTForms', 'File uploads', 'Session management', 'Flash messages'],
        skills_gained: ['Form processing', 'Input validation', 'User interaction']
      },
      {
        id: 'step-4-flask-database',
        title: 'Database Integration with SQLAlchemy',
        description: 'Connect Flask applications to databases using SQLAlchemy',
        duration: '2 weeks',
        topics: ['SQLAlchemy setup', 'Model definitions', 'Database operations', 'Relationships', 'Migrations'],
        skills_gained: ['Database integration', 'ORM usage', 'Data persistence']
      },
      {
        id: 'step-5-flask-apis',
        title: 'RESTful APIs & Authentication',
        description: 'Build APIs and implement user authentication systems',
        duration: '2 weeks',
        topics: ['REST API design', 'JSON responses', 'User authentication', 'JWT tokens', 'API testing'],
        skills_gained: ['API development', 'Authentication systems', 'Security implementation']
      },
      {
        id: 'step-6-flask-production',
        title: 'Testing & Deployment',
        description: 'Test Flask applications and deploy to production',
        duration: '1-2 weeks',
        topics: ['Unit testing', 'Application factory', 'Configuration management', 'Deployment options', 'Performance optimization'],
        skills_gained: ['Testing strategies', 'Production deployment', 'Application scaling']
      }
    ],
    tags: ['flask', 'python', 'microframework', 'api'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$60k - $110k',
    job_opportunities: ['Flask Developer', 'Python Developer', 'API Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'spring-framework',
    title: 'Spring Framework',
    description: 'Master enterprise Java development with Spring ecosystem',
    role: 'Spring Developer',
    primary_skills: ['Spring Core', 'Dependency Injection', 'Spring MVC', 'Spring Data'],
    secondary_skills: ['Spring Boot', 'Spring Security', 'Spring Cloud', 'Microservices'],
    category: 'Web Development',
    subcategory: 'Backend Framework',
    difficulty: 'Intermediate',
    duration: '4-5 months',
    prerequisites: ['Java proficiency', 'OOP concepts', 'Web development basics'],
    steps: [
      {
        id: 'step-1-spring-core',
        title: 'Step 1: Spring Core & IoC Container',
        description: 'Learn Spring fundamentals, dependency injection, and IoC container',
        duration: '2 weeks',
        topics: ['IoC Container', 'Bean Configuration', 'Dependency Injection', 'ApplicationContext', 'Bean Lifecycle'],
        skills_gained: ['Spring Core', 'Dependency Injection', 'IoC Container Management']
      },
      {
        id: 'step-2-spring-mvc',
        title: 'Step 2: Spring MVC & Web Development',
        description: 'Build web applications using Spring MVC framework',
        duration: '3 weeks',
        topics: ['Spring MVC Architecture', 'Controllers', 'View Resolvers', 'Form Handling', 'REST APIs'],
        skills_gained: ['Spring MVC', 'Web Development', 'RESTful Services']
      },
      {
        id: 'step-3-spring-boot',
        title: 'Step 3: Spring Boot & Auto-configuration',
        description: 'Rapid application development with Spring Boot',
        duration: '3 weeks',
        topics: ['Spring Boot Starters', 'Auto-configuration', 'Application Properties', 'Actuator', 'DevTools'],
        skills_gained: ['Spring Boot', 'Rapid Development', 'Configuration Management']
      },
      {
        id: 'step-4-spring-data',
        title: 'Step 4: Spring Data & Database Integration',
        description: 'Database access and ORM with Spring Data JPA',
        duration: '2-3 weeks',
        topics: ['Spring Data JPA', 'Repository Pattern', 'Entity Mapping', 'Query Methods', 'Transactions'],
        skills_gained: ['Database Integration', 'ORM', 'Data Access Layer']
      },
      {
        id: 'step-5-spring-security',
        title: 'Step 5: Spring Security & Authentication',
        description: 'Implement security and authentication in Spring applications',
        duration: '2-3 weeks',
        topics: ['Authentication', 'Authorization', 'JWT Tokens', 'OAuth2', 'Method Security'],
        skills_gained: ['Application Security', 'Authentication', 'Authorization']
      },
      {
        id: 'step-6-spring-advanced',
        title: 'Step 6: Advanced Spring & Microservices',
        description: 'Advanced Spring concepts and microservices architecture',
        duration: '3 weeks',
        topics: ['Spring Cloud', 'Microservices', 'Service Discovery', 'Circuit Breaker', 'Testing'],
        skills_gained: ['Microservices', 'Distributed Systems', 'Enterprise Architecture']
      }
    ],
    tags: ['spring', 'java', 'enterprise', 'backend'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Spring Developer', 'Java Developer', 'Enterprise Developer'],
    industry_demand: 'High'
  },
  {
    id: 'laravel-framework',
    title: 'Laravel Framework',
    description: 'Build elegant web applications with Laravel PHP framework',
    role: 'Laravel Developer',
    primary_skills: ['Laravel', 'PHP', 'Eloquent ORM', 'Blade Templates'],
    secondary_skills: ['Artisan', 'Queue System', 'Authentication', 'Testing'],
    category: 'Web Development',
    subcategory: 'Backend Framework',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['PHP knowledge', 'MVC understanding', 'Database basics'],
    steps: [
      {
        id: 'step-1-laravel-setup',
        title: 'Laravel Installation & Setup',
        description: 'Install Laravel and set up development environment',
        duration: '1 week',
        topics: ['Composer installation', 'Laravel installer', 'Project structure', 'Environment configuration', 'Artisan CLI'],
        skills_gained: ['Laravel setup', 'Development environment', 'Project structure']
      },
      {
        id: 'step-2-laravel-fundamentals',
        title: 'Laravel MVC & Routing',
        description: 'Master Laravel MVC architecture and routing system',
        duration: '2-3 weeks',
        topics: ['Routing basics', 'Controllers', 'Views', 'Blade templating', 'Middleware', 'Request handling'],
        skills_gained: ['MVC architecture', 'Routing system', 'Template engine']
      },
      {
        id: 'step-3-laravel-database',
        title: 'Database & Eloquent ORM',
        description: 'Work with databases using Eloquent ORM and migrations',
        duration: '2-3 weeks',
        topics: ['Database configuration', 'Migrations', 'Eloquent models', 'Relationships', 'Query builder', 'Seeders'],
        skills_gained: ['Database management', 'ORM usage', 'Data modeling']
      },
      {
        id: 'step-4-laravel-advanced',
        title: 'Advanced Laravel Features',
        description: 'Implement authentication, validation, and form handling',
        duration: '2 weeks',
        topics: ['Authentication system', 'Form validation', 'File uploads', 'Session management', 'CSRF protection'],
        skills_gained: ['Security implementation', 'User management', 'Form processing']
      },
      {
        id: 'step-5-laravel-apis',
        title: 'APIs & Testing',
        description: 'Build RESTful APIs and implement comprehensive testing',
        duration: '2-3 weeks',
        topics: ['API resources', 'JWT authentication', 'API documentation', 'Unit testing', 'Feature testing'],
        skills_gained: ['API development', 'Testing strategies', 'Documentation']
      },
      {
        id: 'step-6-laravel-production',
        title: 'Production & Deployment',
        description: 'Deploy Laravel applications and implement best practices',
        duration: '2 weeks',
        topics: ['Queue system', 'Caching', 'Performance optimization', 'Deployment strategies', 'Monitoring'],
        skills_gained: ['Production deployment', 'Performance tuning', 'System monitoring']
      }
    ],
    tags: ['laravel', 'php', 'web', 'framework'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$55k - $100k',
    job_opportunities: ['Laravel Developer', 'PHP Developer', 'Web Developer'],
    industry_demand: 'Medium'
  },
  // INFRASTRUCTURE AND DEVOPS TOOLS
  {
    id: 'infrastructure-as-code-terraform',
    title: 'Infrastructure as Code (Terraform)',
    description: 'Manage cloud infrastructure using Terraform for automated provisioning',
    role: 'DevOps Engineer',
    primary_skills: ['Terraform', 'HCL', 'Infrastructure Automation', 'Cloud Provisioning'],
    secondary_skills: ['State Management', 'Modules', 'Workspaces', 'Policy as Code'],
    category: 'DevOps',
    subcategory: 'Infrastructure as Code',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Cloud platform knowledge', 'Basic scripting', 'Infrastructure concepts'],
    steps: [
      {
        id: 'step-1-terraform-basics',
        title: 'Terraform Installation & Basics',
        description: 'Install Terraform and learn fundamental concepts',
        duration: '1-2 weeks',
        topics: ['Terraform installation', 'HCL syntax', 'Providers', 'Resources', 'Basic configuration', 'CLI commands'],
        skills_gained: ['Terraform setup', 'HCL language', 'Infrastructure basics']
      },
      {
        id: 'step-2-terraform-resources',
        title: 'Resources & Data Sources',
        description: 'Master resource management and data source usage',
        duration: '2 weeks',
        topics: ['Resource blocks', 'Resource dependencies', 'Data sources', 'Resource lifecycle', 'Meta-arguments'],
        skills_gained: ['Resource management', 'Dependency handling', 'Data retrieval']
      },
      {
        id: 'step-3-terraform-variables',
        title: 'Variables & Configuration',
        description: 'Implement flexible configurations with variables and outputs',
        duration: '2 weeks',
        topics: ['Input variables', 'Output values', 'Local values', 'Variable files', 'Environment variables', 'Validation'],
        skills_gained: ['Configuration management', 'Parameterization', 'Code reusability']
      },
      {
        id: 'step-4-terraform-state',
        title: 'State Management & Backend',
        description: 'Understand Terraform state and implement remote backends',
        duration: '2 weeks',
        topics: ['State files', 'Remote backends', 'State locking', 'State import', 'State manipulation', 'Workspaces'],
        skills_gained: ['State management', 'Team collaboration', 'Backend configuration']
      },
      {
        id: 'step-5-terraform-modules',
        title: 'Modules & Code Organization',
        description: 'Create reusable infrastructure modules and organize code',
        duration: '2-3 weeks',
        topics: ['Module creation', 'Module composition', 'Module registry', 'Versioning', 'Module testing'],
        skills_gained: ['Code modularization', 'Reusability', 'Infrastructure patterns']
      },
      {
        id: 'step-6-terraform-advanced',
        title: 'Advanced Features & Production',
        description: 'Implement advanced Terraform features for production use',
        duration: '2-3 weeks',
        topics: ['Provisioners', 'Dynamic blocks', 'For expressions', 'Functions', 'CI/CD integration', 'Security best practices'],
        skills_gained: ['Advanced Terraform', 'Production deployment', 'Security implementation']
      }
    ],
    tags: ['terraform', 'iac', 'devops', 'automation'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $140k',
    job_opportunities: ['DevOps Engineer', 'Cloud Engineer', 'Infrastructure Engineer'],
    industry_demand: 'High'
  },
  // CI/CD PIPELINES
  {
    id: 'jenkins-ci-cd',
    title: 'Jenkins CI/CD',
    description: 'Build automated CI/CD pipelines with Jenkins for continuous delivery',
    role: 'DevOps Engineer',
    primary_skills: ['Jenkins', 'Pipeline as Code', 'Build Automation', 'Integration Testing'],
    secondary_skills: ['Groovy', 'Blue Ocean', 'Plugin Management', 'Security'],
    category: 'DevOps',
    subcategory: 'CI/CD',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['Basic DevOps knowledge', 'Understanding of software development lifecycle'],
    steps: [
      {
        id: 'step-1-jenkins-setup',
        title: 'Jenkins Installation & Setup',
        description: 'Install Jenkins and configure basic settings',
        duration: '1 week',
        topics: ['Jenkins installation', 'Initial setup', 'User management', 'System configuration', 'Plugin basics'],
        skills_gained: ['Jenkins installation', 'Basic configuration', 'User management']
      },
      {
        id: 'step-2-jenkins-jobs',
        title: 'Jobs & Build Configuration',
        description: 'Create and configure Jenkins jobs for automated builds',
        duration: '2 weeks',
        topics: ['Freestyle projects', 'Build triggers', 'Source control integration', 'Build steps', 'Post-build actions'],
        skills_gained: ['Job configuration', 'Build automation', 'Source control integration']
      },
      {
        id: 'step-3-jenkins-pipelines',
        title: 'Pipeline as Code',
        description: 'Build advanced CI/CD pipelines using Jenkinsfile',
        duration: '2-3 weeks',
        topics: ['Pipeline syntax', 'Declarative vs Scripted', 'Stages and steps', 'Parallel execution', 'Pipeline libraries'],
        skills_gained: ['Pipeline development', 'Code versioning', 'Advanced automation']
      },
      {
        id: 'step-4-jenkins-integration',
        title: 'Testing & Integration',
        description: 'Integrate automated testing and quality gates into pipelines',
        duration: '2 weeks',
        topics: ['Unit test integration', 'Code coverage', 'Quality gates', 'SonarQube integration', 'Artifact management'],
        skills_gained: ['Test automation', 'Quality assurance', 'Artifact management']
      },
      {
        id: 'step-5-jenkins-deployment',
        title: 'Deployment & Environment Management',
        description: 'Implement deployment strategies and environment promotion',
        duration: '2 weeks',
        topics: ['Deployment pipelines', 'Environment promotion', 'Blue-green deployment', 'Docker integration', 'Cloud deployment'],
        skills_gained: ['Deployment strategies', 'Environment management', 'Container integration']
      },
      {
        id: 'step-6-jenkins-monitoring',
        title: 'Monitoring & Security',
        description: 'Implement monitoring, security, and best practices',
        duration: '1-2 weeks',
        topics: ['Pipeline monitoring', 'Build notifications', 'Security configuration', 'Backup strategies', 'Performance optimization'],
        skills_gained: ['Monitoring setup', 'Security implementation', 'Best practices']
      }
    ],
    tags: ['jenkins', 'cicd', 'automation', 'devops'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['DevOps Engineer', 'Build Engineer', 'Release Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions',
    description: 'Automate workflows and CI/CD pipelines with GitHub Actions',
    role: 'DevOps Engineer',
    primary_skills: ['GitHub Actions', 'Workflow Automation', 'YAML', 'Actions Marketplace'],
    secondary_skills: ['Secrets Management', 'Matrix Builds', 'Custom Actions'],
    category: 'DevOps',
    subcategory: 'CI/CD',
    difficulty: 'Beginner',
    duration: '1-2 months',
    prerequisites: ['Git/GitHub knowledge', 'Basic YAML understanding'],
    steps: [
      {
        id: 'step-1-gha-basics',
        title: 'GitHub Actions Fundamentals',
        description: 'Learn GitHub Actions basics and create first workflow',
        duration: '1 week',
        topics: ['Workflows', 'Events', 'Jobs', 'Steps', 'YAML syntax', 'Repository setup'],
        skills_gained: ['Workflow creation', 'YAML configuration', 'Event triggers']
      },
      {
        id: 'step-2-gha-actions',
        title: 'Actions & Marketplace',
        description: 'Use pre-built actions and explore the Actions Marketplace',
        duration: '1-2 weeks',
        topics: ['Actions Marketplace', 'Action inputs/outputs', 'Environment variables', 'Context', 'Expressions'],
        skills_gained: ['Action integration', 'Marketplace usage', 'Configuration management']
      },
      {
        id: 'step-3-gha-cicd',
        title: 'CI/CD Pipeline Development',
        description: 'Build comprehensive CI/CD pipelines with testing and deployment',
        duration: '2 weeks',
        topics: ['Build automation', 'Test integration', 'Artifacts', 'Deployment workflows', 'Multi-environment'],
        skills_gained: ['Pipeline design', 'Automated testing', 'Deployment automation']
      },
      {
        id: 'step-4-gha-advanced',
        title: 'Advanced Features & Security',
        description: 'Implement advanced workflows with security and optimization',
        duration: '1-2 weeks',
        topics: ['Matrix builds', 'Conditional workflows', 'Secrets management', 'Security scanning', 'Custom actions'],
        skills_gained: ['Advanced automation', 'Security implementation', 'Workflow optimization']
      }
    ],
    tags: ['github', 'actions', 'cicd', 'automation'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['DevOps Engineer', 'Software Developer', 'Platform Engineer'],
    industry_demand: 'High'
  },
  // MONITORING AND OBSERVABILITY
  {
    id: 'elasticsearch-elk',
    title: 'Elasticsearch & ELK',
    description: 'Master log management and search with Elasticsearch and ELK stack',
    role: 'DevOps Engineer',
    primary_skills: ['Elasticsearch', 'Logstash', 'Kibana', 'Search Analytics'],
    secondary_skills: ['Beats', 'Index Management', 'Query DSL', 'Monitoring'],
    category: 'DevOps',
    subcategory: 'Monitoring & Logging',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Basic Linux knowledge', 'Understanding of logging concepts'],
    steps: [
      {
        id: 'step-1-elasticsearch-basics',
        title: 'Elasticsearch Fundamentals',
        description: 'Install Elasticsearch and learn core search concepts',
        duration: '2 weeks',
        topics: ['Elasticsearch installation', 'Index concepts', 'Document mapping', 'Basic queries', 'REST API'],
        skills_gained: ['Elasticsearch setup', 'Search fundamentals', 'Index management']
      },
      {
        id: 'step-2-elasticsearch-queries',
        title: 'Advanced Queries & Aggregations',
        description: 'Master Elasticsearch Query DSL and aggregation framework',
        duration: '2-3 weeks',
        topics: ['Query DSL', 'Boolean queries', 'Full-text search', 'Aggregations', 'Filters', 'Analyzers'],
        skills_gained: ['Query construction', 'Data aggregation', 'Search optimization']
      },
      {
        id: 'step-3-logstash-setup',
        title: 'Logstash Data Processing',
        description: 'Set up Logstash for log parsing and data transformation',
        duration: '2 weeks',
        topics: ['Logstash installation', 'Input plugins', 'Filters', 'Output plugins', 'Grok patterns', 'Data transformation'],
        skills_gained: ['Log processing', 'Data transformation', 'Pipeline configuration']
      },
      {
        id: 'step-4-kibana-visualization',
        title: 'Kibana Dashboards & Visualization',
        description: 'Create interactive dashboards and visualizations with Kibana',
        duration: '2 weeks',
        topics: ['Kibana interface', 'Discover', 'Visualizations', 'Dashboards', 'Canvas', 'Alerting'],
        skills_gained: ['Data visualization', 'Dashboard creation', 'Business intelligence']
      },
      {
        id: 'step-5-beats-collection',
        title: 'Beats Data Collection',
        description: 'Deploy Beats agents for comprehensive data collection',
        duration: '1-2 weeks',
        topics: ['Filebeat', 'Metricbeat', 'Packetbeat', 'Heartbeat', 'Beat configuration', 'Data shipping'],
        skills_gained: ['Data collection', 'Agent deployment', 'System monitoring']
      },
      {
        id: 'step-6-elk-production',
        title: 'Production ELK Stack',
        description: 'Deploy and manage ELK stack in production environments',
        duration: '2-3 weeks',
        topics: ['Cluster setup', 'Security', 'Performance tuning', 'Backup strategies', 'Monitoring', 'Troubleshooting'],
        skills_gained: ['Production deployment', 'Performance optimization', 'System administration']
      }
    ],
    tags: ['elasticsearch', 'elk', 'logging', 'monitoring'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['DevOps Engineer', 'Site Reliability Engineer', 'Data Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'monitoring-observability-prometheus',
    title: 'Monitoring & Observability (Prometheus)',
    description: 'Implement comprehensive monitoring solutions with Prometheus and Grafana',
    role: 'SRE Engineer',
    primary_skills: ['Prometheus', 'Grafana', 'Metrics Collection', 'Alerting'],
    secondary_skills: ['PromQL', 'Service Discovery', 'High Availability'],
    category: 'DevOps',
    subcategory: 'Monitoring & Observability',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['System administration basics', 'Understanding of monitoring concepts'],
    steps: [
      {
        id: 'step-1-prometheus-setup',
        title: 'Prometheus Setup & Configuration',
        description: 'Install Prometheus and understand monitoring fundamentals',
        duration: '1-2 weeks',
        topics: ['Prometheus installation', 'Configuration file', 'Targets', 'Metrics basics', 'Time series data'],
        skills_gained: ['Prometheus setup', 'Configuration management', 'Monitoring concepts']
      },
      {
        id: 'step-2-prometheus-metrics',
        title: 'Metrics Collection & Exporters',
        description: 'Configure metrics collection and use various exporters',
        duration: '2 weeks',
        topics: ['Metric types', 'Node exporter', 'Custom exporters', 'Service discovery', 'Scraping configuration'],
        skills_gained: ['Metrics collection', 'Exporter configuration', 'Data ingestion']
      },
      {
        id: 'step-3-promql',
        title: 'PromQL Query Language',
        description: 'Master Prometheus Query Language for data analysis',
        duration: '2 weeks',
        topics: ['PromQL syntax', 'Selectors', 'Functions', 'Operators', 'Aggregation', 'Recording rules'],
        skills_gained: ['PromQL mastery', 'Data querying', 'Metric analysis']
      },
      {
        id: 'step-4-grafana-dashboards',
        title: 'Grafana Visualization & Dashboards',
        description: 'Create comprehensive dashboards and alerts in Grafana',
        duration: '2 weeks',
        topics: ['Grafana setup', 'Dashboard creation', 'Panel types', 'Variables', 'Templating', 'Alerting'],
        skills_gained: ['Data visualization', 'Dashboard design', 'Alert management']
      },
      {
        id: 'step-5-alerting',
        title: 'Alerting & Notification',
        description: 'Implement alerting rules and notification channels',
        duration: '1-2 weeks',
        topics: ['Alert rules', 'Alertmanager', 'Notification channels', 'Silencing', 'Inhibition', 'Routing'],
        skills_gained: ['Alert configuration', 'Incident management', 'Notification systems']
      },
      {
        id: 'step-6-prometheus-production',
        title: 'Production Monitoring & High Availability',
        description: 'Deploy Prometheus in production with high availability setup',
        duration: '2-3 weeks',
        topics: ['High availability', 'Federation', 'Remote storage', 'Performance tuning', 'Security', 'Best practices'],
        skills_gained: ['Production deployment', 'High availability', 'Performance optimization']
      }
    ],
    tags: ['prometheus', 'grafana', 'monitoring', 'sre'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $140k',
    job_opportunities: ['SRE Engineer', 'DevOps Engineer', 'Platform Engineer'],
    industry_demand: 'High'
  },
  // MESSAGE QUEUING AND STREAMING
  {
    id: 'apache-kafka',
    title: 'Apache Kafka',
    description: 'Build real-time streaming applications with Apache Kafka',
    role: 'Data Engineer',
    primary_skills: ['Kafka', 'Event Streaming', 'Producer/Consumer APIs', 'Topics & Partitions'],
    secondary_skills: ['Kafka Streams', 'Connect', 'Schema Registry', 'KSQL'],
    category: 'Data Engineering',
    subcategory: 'Streaming',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Distributed systems knowledge', 'Programming experience', 'Event-driven architecture'],
    steps: [
      {
        id: 'kafka-fundamentals',
        title: 'Apache Kafka Fundamentals',
        description: 'Core Kafka concepts and streaming architecture',
        duration: '3-4 weeks',
        topics: ['Topics', 'Producers', 'Consumers', 'Brokers', 'Replication'],
        skills_gained: ['Apache Kafka', 'Event Streaming', 'Real-time Processing']
      }
    ],
    tags: ['kafka', 'streaming', 'bigdata', 'realtime'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $135k',
    job_opportunities: ['Data Engineer', 'Backend Developer', 'Streaming Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'message-queuing-rabbitmq',
    title: 'Message Queuing (RabbitMQ)',
    description: 'Implement reliable message queuing systems with RabbitMQ',
    role: 'Backend Developer',
    primary_skills: ['RabbitMQ', 'Message Queuing', 'AMQP', 'Exchange Types'],
    secondary_skills: ['Clustering', 'High Availability', 'Management & Monitoring'],
    category: 'Backend Development',
    subcategory: 'Message Queuing',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['Backend development experience', 'Understanding of asynchronous processing'],
    steps: [
      {
        id: 'step-1-messaging-fundamentals',
        title: 'Step 1: Message Queuing Fundamentals',
        description: 'Learn core messaging concepts and patterns',
        duration: '1-2 weeks',
        topics: ['Message Queuing Concepts', 'Publisher-Subscriber Pattern', 'Point-to-Point Messaging', 'Message Brokers', 'AMQP Protocol'],
        skills_gained: ['Messaging Concepts', 'Communication Patterns', 'Protocol Understanding']
      },
      {
        id: 'step-2-rabbitmq-setup',
        title: 'Step 2: RabbitMQ Installation & Configuration',
        description: 'Install and configure RabbitMQ server and management tools',
        duration: '1 week',
        topics: ['RabbitMQ Installation', 'Management Plugin', 'Configuration Files', 'User Management', 'Virtual Hosts'],
        skills_gained: ['RabbitMQ Setup', 'Server Configuration', 'Access Management']
      },
      {
        id: 'step-3-exchanges-queues',
        title: 'Step 3: Exchanges, Queues & Routing',
        description: 'Master RabbitMQ exchange types and message routing',
        duration: '2 weeks',
        topics: ['Exchange Types', 'Queue Declaration', 'Binding Keys', 'Routing Patterns', 'Message Properties'],
        skills_gained: ['Message Routing', 'Exchange Configuration', 'Queue Management']
      },
      {
        id: 'step-4-producer-consumer',
        title: 'Step 4: Producer & Consumer Development',
        description: 'Build reliable message producers and consumers',
        duration: '2 weeks',
        topics: ['Message Publishing', 'Consumer Implementation', 'Acknowledgments', 'Message Durability', 'Error Handling'],
        skills_gained: ['Application Integration', 'Reliable Messaging', 'Error Recovery']
      },
      {
        id: 'step-5-advanced-features',
        title: 'Step 5: Advanced Features & Patterns',
        description: 'Implement advanced messaging patterns and features',
        duration: '2 weeks',
        topics: ['Dead Letter Exchanges', 'Message TTL', 'Priority Queues', 'Delayed Messages', 'RPC Patterns'],
        skills_gained: ['Advanced Patterns', 'Message Lifecycle', 'Complex Workflows']
      },
      {
        id: 'step-6-production-deployment',
        title: 'Step 6: Clustering & Production Deployment',
        description: 'Deploy RabbitMQ clusters for high availability',
        duration: '1-2 weeks',
        topics: ['Clustering Setup', 'High Availability', 'Load Balancing', 'Monitoring', 'Performance Tuning'],
        skills_gained: ['Production Deployment', 'High Availability', 'Performance Optimization']
      }
    ],
    tags: ['rabbitmq', 'messagequeue', 'async', 'backend'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $120k',
    job_opportunities: ['Backend Developer', 'Systems Engineer', 'Integration Developer'],
    industry_demand: 'Medium'
  },
  // WEB SERVERS AND REVERSE PROXIES
  {
    id: 'web-server-reverse-proxy-nginx',
    title: 'Web Server & Reverse Proxy (Nginx)',
    description: 'Configure and optimize Nginx for web serving and load balancing',
    role: 'DevOps Engineer',
    primary_skills: ['Nginx', 'Web Server Configuration', 'Load Balancing', 'SSL/TLS'],
    secondary_skills: ['Performance Tuning', 'Security', 'Caching'],
    category: 'DevOps',
    subcategory: 'Web Servers',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['Linux knowledge', 'Web server concepts', 'Basic networking'],
    steps: [
      {
        id: 'step-1-nginx-installation',
        title: 'Step 1: Nginx Installation & Basic Configuration',
        description: 'Install Nginx and understand basic configuration structure',
        duration: '1 week',
        topics: ['Nginx Installation', 'Configuration Files', 'Service Management', 'Basic Directives', 'Testing Configuration'],
        skills_gained: ['Nginx Setup', 'Configuration Management', 'Service Operations']
      },
      {
        id: 'step-2-web-server-config',
        title: 'Step 2: Web Server Configuration',
        description: 'Configure Nginx as a web server for static and dynamic content',
        duration: '1-2 weeks',
        topics: ['Server Blocks', 'Document Root', 'Index Files', 'MIME Types', 'Error Pages', 'Access Logs'],
        skills_gained: ['Web Server Configuration', 'Static Content Serving', 'Logging']
      },
      {
        id: 'step-3-reverse-proxy',
        title: 'Step 3: Reverse Proxy & Load Balancing',
        description: 'Implement reverse proxy and load balancing configurations',
        duration: '2 weeks',
        topics: ['Reverse Proxy Setup', 'Upstream Configuration', 'Load Balancing Methods', 'Health Checks', 'Proxy Headers'],
        skills_gained: ['Reverse Proxy', 'Load Balancing', 'Backend Integration']
      },
      {
        id: 'step-4-ssl-security',
        title: 'Step 4: SSL/TLS & Security Configuration',
        description: 'Implement SSL/TLS encryption and security best practices',
        duration: '1-2 weeks',
        topics: ['SSL Certificate Installation', 'TLS Configuration', 'Security Headers', 'Rate Limiting', 'Access Control'],
        skills_gained: ['SSL/TLS Management', 'Security Configuration', 'Access Control']
      },
      {
        id: 'step-5-caching-performance',
        title: 'Step 5: Caching & Performance Optimization',
        description: 'Optimize performance with caching and compression',
        duration: '1-2 weeks',
        topics: ['Static File Caching', 'Proxy Caching', 'Gzip Compression', 'Keep-Alive Connections', 'Buffer Optimization'],
        skills_gained: ['Performance Optimization', 'Caching Strategies', 'Resource Efficiency']
      },
      {
        id: 'step-6-monitoring-maintenance',
        title: 'Step 6: Monitoring & Production Maintenance',
        description: 'Monitor Nginx performance and maintain production deployments',
        duration: '1 week',
        topics: ['Status Monitoring', 'Log Analysis', 'Performance Metrics', 'Troubleshooting', 'Configuration Management'],
        skills_gained: ['System Monitoring', 'Performance Analysis', 'Production Maintenance']
      }
    ],
    tags: ['nginx', 'webserver', 'loadbalancing', 'proxy'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['DevOps Engineer', 'System Administrator', 'Web Engineer'],
    industry_demand: 'High'
  },
  // BUILD TOOLS AND MODULE BUNDLERS
  {
    id: 'module-bundling-webpack',
    title: 'Module Bundling (Webpack)',
    description: 'Master JavaScript module bundling and build optimization with Webpack',
    role: 'Frontend Developer',
    primary_skills: ['Webpack', 'Module Bundling', 'Build Optimization', 'Asset Management'],
    secondary_skills: ['Loaders', 'Plugins', 'Code Splitting', 'Tree Shaking'],
    category: 'Development Tools',
    subcategory: 'Build Tools',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['JavaScript knowledge', 'Node.js basics', 'Module systems understanding'],
    steps: [
      {
        id: 'step-1-webpack-basics',
        title: 'Step 1: Webpack Fundamentals & Setup',
        description: 'Learn Webpack core concepts and basic configuration',
        duration: '1-2 weeks',
        topics: ['Webpack Installation', 'Entry Points', 'Output Configuration', 'Basic Configuration File', 'Development vs Production'],
        skills_gained: ['Webpack Setup', 'Configuration Basics', 'Build Process Understanding']
      },
      {
        id: 'step-2-loaders-assets',
        title: 'Step 2: Loaders & Asset Management',
        description: 'Handle different file types and assets with loaders',
        duration: '1-2 weeks',
        topics: ['CSS Loaders', 'File Loaders', 'Image Processing', 'Font Loading', 'Asset Optimization'],
        skills_gained: ['Asset Management', 'File Processing', 'Loader Configuration']
      },
      {
        id: 'step-3-plugins-optimization',
        title: 'Step 3: Plugins & Build Optimization',
        description: 'Enhance builds with plugins and optimization techniques',
        duration: '2 weeks',
        topics: ['HTML Plugin', 'Clean Plugin', 'Minification', 'Tree Shaking', 'Bundle Analysis'],
        skills_gained: ['Plugin System', 'Build Optimization', 'Performance Tuning']
      },
      {
        id: 'step-4-code-splitting',
        title: 'Step 4: Code Splitting & Lazy Loading',
        description: 'Implement advanced bundling strategies for better performance',
        duration: '1-2 weeks',
        topics: ['Dynamic Imports', 'Split Chunks', 'Lazy Loading', 'Bundle Splitting Strategies', 'Chunk Optimization'],
        skills_gained: ['Code Splitting', 'Performance Optimization', 'Bundle Management']
      },
      {
        id: 'step-5-dev-environment',
        title: 'Step 5: Development Environment & HMR',
        description: 'Set up efficient development workflows with hot reloading',
        duration: '1 week',
        topics: ['Dev Server', 'Hot Module Replacement', 'Source Maps', 'Development Middleware', 'Error Overlay'],
        skills_gained: ['Development Workflow', 'Hot Reloading', 'Debugging Tools']
      },
      {
        id: 'step-6-production-deployment',
        title: 'Step 6: Production Builds & Deployment',
        description: 'Optimize builds for production and deployment strategies',
        duration: '1 week',
        topics: ['Production Optimization', 'Environment Variables', 'Build Performance', 'CI/CD Integration', 'Deployment Strategies'],
        skills_gained: ['Production Builds', 'Deployment Optimization', 'Build Performance']
      }
    ],
    tags: ['webpack', 'bundling', 'build', 'frontend'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['Frontend Developer', 'Build Engineer', 'Full Stack Developer'],
    industry_demand: 'Medium'
  },
  {
    id: 'vite-build-tool',
    title: 'Vite Build Tool',
    description: 'Fast modern build tool for JavaScript applications with hot reload',
    role: 'Frontend Developer',
    primary_skills: ['Vite', 'ES Modules', 'Hot Module Replacement', 'Build Optimization'],
    secondary_skills: ['Rollup', 'Plugin System', 'TypeScript Integration'],
    category: 'Development Tools',
    subcategory: 'Build Tools',
    difficulty: 'Beginner',
    duration: '1-2 months',
    prerequisites: ['JavaScript knowledge', 'Modern JS modules understanding'],
    steps: [
      {
        id: 'step-1-vite-setup',
        title: 'Step 1: Vite Installation & Project Setup',
        description: 'Set up Vite for modern JavaScript development',
        duration: '1 week',
        topics: ['Vite Installation', 'Project Initialization', 'Configuration File', 'Development Server', 'Basic Build Process'],
        skills_gained: ['Vite Setup', 'Project Configuration', 'Development Environment']
      },
      {
        id: 'step-2-vite-features',
        title: 'Step 2: Core Vite Features',
        description: 'Master Vite\'s key features and development experience',
        duration: '1 week',
        topics: ['Hot Module Replacement', 'ES Modules', 'Fast Refresh', 'CSS Processing', 'Asset Handling'],
        skills_gained: ['Modern Development', 'Hot Reloading', 'Asset Management']
      },
      {
        id: 'step-3-vite-plugins',
        title: 'Step 3: Plugin System & Framework Integration',
        description: 'Extend Vite with plugins and framework-specific features',
        duration: '1-2 weeks',
        topics: ['Plugin Installation', 'Framework Plugins', 'TypeScript Integration', 'CSS Preprocessors', 'Custom Plugins'],
        skills_gained: ['Plugin System', 'Framework Integration', 'Build Customization']
      },
      {
        id: 'step-4-vite-optimization',
        title: 'Step 4: Build Optimization & Production',
        description: 'Optimize builds and prepare for production deployment',
        duration: '1 week',
        topics: ['Production Builds', 'Code Splitting', 'Tree Shaking', 'Bundle Analysis', 'Performance Optimization'],
        skills_gained: ['Build Optimization', 'Production Deployment', 'Performance Tuning']
      },
      {
        id: 'step-5-advanced-vite',
        title: 'Step 5: Advanced Configuration & Deployment',
        description: 'Advanced Vite configuration and deployment strategies',
        duration: '1 week',
        topics: ['Multi-page Applications', 'Library Mode', 'Environment Variables', 'CI/CD Integration', 'Deployment Options'],
        skills_gained: ['Advanced Configuration', 'Deployment Strategies', 'Production Workflow']
      }
    ],
    tags: ['vite', 'build', 'frontend', 'fast'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['Frontend Developer', 'JavaScript Developer', 'Build Engineer'],
    industry_demand: 'High'
  },
  // TESTING FRAMEWORKS
  {
    id: 'software-testing',
    title: 'Software Testing',
    description: 'Master various testing methodologies and frameworks for quality assurance',
    role: 'QA Engineer',
    primary_skills: ['Unit Testing', 'Integration Testing', 'Test-Driven Development', 'Testing Frameworks'],
    secondary_skills: ['E2E Testing', 'Performance Testing', 'Security Testing'],
    category: 'Quality Assurance',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Programming knowledge', 'Software development understanding'],
    steps: [
      {
        id: 'step-1-testing-fundamentals',
        title: 'Testing Fundamentals & Strategy',
        description: 'Learn core testing principles and develop testing strategies',
        duration: '2 weeks',
        topics: ['Testing principles', 'Test levels', 'Testing pyramid', 'Test planning', 'Test cases', 'Bug lifecycle'],
        skills_gained: ['Testing methodology', 'Test strategy', 'Quality assurance basics']
      },
      {
        id: 'step-2-manual-testing',
        title: 'Manual Testing Techniques',
        description: 'Master manual testing approaches and documentation',
        duration: '2-3 weeks',
        topics: ['Black box testing', 'White box testing', 'Exploratory testing', 'Test case design', 'Test execution', 'Defect reporting'],
        skills_gained: ['Manual testing', 'Test design', 'Documentation skills']
      },
      {
        id: 'step-3-test-automation',
        title: 'Test Automation Basics',
        description: 'Introduction to test automation frameworks and tools',
        duration: '3 weeks',
        topics: ['Automation frameworks', 'Selenium WebDriver', 'Test scripts', 'Page Object Model', 'Data-driven testing'],
        skills_gained: ['Test automation', 'Framework usage', 'Script development']
      },
      {
        id: 'step-4-api-testing',
        title: 'API Testing & Tools',
        description: 'Test REST APIs and web services effectively',
        duration: '2 weeks',
        topics: ['REST API testing', 'Postman', 'API test automation', 'Response validation', 'API security testing'],
        skills_gained: ['API testing', 'Service validation', 'Integration testing']
      },
      {
        id: 'step-5-performance-testing',
        title: 'Performance & Load Testing',
        description: 'Implement performance testing strategies and tools',
        duration: '2-3 weeks',
        topics: ['Load testing', 'Stress testing', 'Performance metrics', 'JMeter', 'Performance analysis'],
        skills_gained: ['Performance testing', 'Load simulation', 'Performance analysis']
      },
      {
        id: 'step-6-advanced-testing',
        title: 'Advanced Testing & CI/CD Integration',
        description: 'Integrate testing into CI/CD pipelines and advanced practices',
        duration: '2 weeks',
        topics: ['CI/CD integration', 'Test reporting', 'Cross-browser testing', 'Mobile testing', 'Security testing'],
        skills_gained: ['Advanced testing', 'CI/CD integration', 'Comprehensive QA']
      }
    ],
    tags: ['testing', 'qa', 'automation', 'quality'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$60k - $110k',
    job_opportunities: ['QA Engineer', 'Test Automation Engineer', 'Software Tester'],
    industry_demand: 'High'
  },
  {
    id: 'web-performance',
    title: 'Web Performance',
    description: 'Optimize web applications for speed, efficiency, and user experience',
    role: 'Performance Engineer',
    primary_skills: ['Performance Optimization', 'Web Vitals', 'Profiling', 'Caching Strategies'],
    secondary_skills: ['Lighthouse', 'CDN', 'Image Optimization', 'Bundle Analysis'],
    category: 'Web Development',
    subcategory: 'Performance',
    difficulty: 'Advanced',
    duration: '3-4 months',
    prerequisites: ['Web development experience', 'JavaScript proficiency', 'Browser knowledge'],
    steps: [
      {
        id: 'step-1-perf-fundamentals',
        title: 'Performance Fundamentals & Metrics',
        description: 'Understand web performance basics and core metrics',
        duration: '2 weeks',
        topics: ['Core Web Vitals', 'Performance metrics', 'User experience impact', 'Performance budget', 'Measurement tools'],
        skills_gained: ['Performance concepts', 'Metrics understanding', 'Measurement techniques']
      },
      {
        id: 'step-2-perf-analysis',
        title: 'Performance Analysis & Profiling',
        description: 'Analyze performance bottlenecks using browser tools',
        duration: '2-3 weeks',
        topics: ['DevTools profiling', 'Network analysis', 'Lighthouse audits', 'Performance timeline', 'Bottleneck identification'],
        skills_gained: ['Performance profiling', 'Analysis techniques', 'Bottleneck identification']
      },
      {
        id: 'step-3-perf-loading',
        title: 'Loading Performance Optimization',
        description: 'Optimize loading performance and resource delivery',
        duration: '2-3 weeks',
        topics: ['Resource optimization', 'Critical rendering path', 'Code splitting', 'Lazy loading', 'Preloading strategies'],
        skills_gained: ['Loading optimization', 'Resource management', 'Delivery strategies']
      },
      {
        id: 'step-4-perf-runtime',
        title: 'Runtime Performance & JavaScript',
        description: 'Optimize JavaScript execution and runtime performance',
        duration: '2 weeks',
        topics: ['JavaScript optimization', 'Memory management', 'Event handling', 'Animation performance', 'Worker threads'],
        skills_gained: ['Runtime optimization', 'JavaScript performance', 'Memory management']
      },
      {
        id: 'step-5-perf-images-assets',
        title: 'Image & Asset Optimization',
        description: 'Optimize images, fonts, and other assets for better performance',
        duration: '2 weeks',
        topics: ['Image optimization', 'Next-gen formats', 'Font optimization', 'Asset compression', 'CDN integration'],
        skills_gained: ['Asset optimization', 'Image performance', 'Content delivery']
      },
      {
        id: 'step-6-perf-advanced',
        title: 'Advanced Performance & Monitoring',
        description: 'Implement advanced performance strategies and monitoring',
        duration: '2 weeks',
        topics: ['Service Workers', 'Caching strategies', 'Performance monitoring', 'Real User Monitoring', 'Performance automation'],
        skills_gained: ['Advanced optimization', 'Performance monitoring', 'Automation strategies']
      }
    ],
    tags: ['performance', 'optimization', 'web', 'ux'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Performance Engineer', 'Frontend Developer', 'Web Developer'],
    industry_demand: 'High'
  },
  // MODERN FRAMEWORKS
  {
    id: 'nextjs-framework',
    title: 'Next.js Framework',
    description: 'Build production-ready React applications with Next.js',
    role: 'Next.js Developer',
    primary_skills: ['Next.js', 'React', 'SSR/SSG', 'API Routes'],
    secondary_skills: ['App Router', 'Image Optimization', 'Deployment', 'Performance'],
    category: 'Web Development',
    subcategory: 'React Framework',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['React knowledge', 'JavaScript proficiency', 'Node.js basics'],
    steps: [
      {
        id: 'step-1-nextjs-setup',
        title: 'Next.js Setup & Fundamentals',
        description: 'Install Next.js and learn core concepts and project structure',
        duration: '1-2 weeks',
        topics: ['Next.js installation', 'Project structure', 'Pages directory', 'App directory', 'File-based routing'],
        skills_gained: ['Next.js setup', 'Project architecture', 'Routing basics']
      },
      {
        id: 'step-2-nextjs-pages',
        title: 'Pages & Routing System',
        description: 'Master Next.js routing, dynamic routes, and navigation',
        duration: '2 weeks',
        topics: ['Static routes', 'Dynamic routes', 'Nested routing', 'Link component', 'useRouter hook', 'Route handlers'],
        skills_gained: ['Advanced routing', 'Navigation patterns', 'Dynamic content']
      },
      {
        id: 'step-3-nextjs-data-fetching',
        title: 'Data Fetching & SSR/SSG',
        description: 'Implement data fetching with getServerSideProps and getStaticProps',
        duration: '2-3 weeks',
        topics: ['Server-side rendering', 'Static site generation', 'getServerSideProps', 'getStaticProps', 'ISR', 'Client-side fetching'],
        skills_gained: ['SSR/SSG implementation', 'Performance optimization', 'Data strategies']
      },
      {
        id: 'step-4-nextjs-api-routes',
        title: 'API Routes & Full-Stack Features',
        description: 'Build backend functionality with Next.js API routes',
        duration: '2 weeks',
        topics: ['API routes', 'Request handling', 'Database integration', 'Middleware', 'Authentication', 'Environment variables'],
        skills_gained: ['Full-stack development', 'Backend API creation', 'Database integration']
      },
      {
        id: 'step-5-nextjs-optimization',
        title: 'Performance & Optimization',
        description: 'Optimize Next.js applications for production performance',
        duration: '2 weeks',
        topics: ['Image optimization', 'Code splitting', 'Bundle analysis', 'Core Web Vitals', 'Caching strategies', 'SEO optimization'],
        skills_gained: ['Performance optimization', 'SEO implementation', 'Production readiness']
      },
      {
        id: 'step-6-nextjs-deployment',
        title: 'Deployment & Production',
        description: 'Deploy Next.js applications to various platforms and implement monitoring',
        duration: '1-2 weeks',
        topics: ['Vercel deployment', 'Netlify deployment', 'Docker deployment', 'CI/CD setup', 'Monitoring', 'Analytics'],
        skills_gained: ['Production deployment', 'DevOps integration', 'Application monitoring']
      }
    ],
    tags: ['nextjs', 'react', 'fullstack', 'ssr'],
    popularity_score: 9,
    featured: true,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Next.js Developer', 'React Developer', 'Full Stack Developer'],
    industry_demand: 'High'
  },
  {
    id: 'svelte-development',
    title: 'Svelte Development',
    description: 'Build fast web applications with Svelte and SvelteKit',
    role: 'Svelte Developer',
    primary_skills: ['Svelte', 'Component Architecture', 'Reactivity', 'SvelteKit'],
    secondary_skills: ['Stores', 'Transitions', 'Actions', 'SSR'],
    category: 'Web Development',
    subcategory: 'Frontend Framework',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['JavaScript knowledge', 'HTML/CSS skills', 'Component-based thinking'],
    steps: [
      {
        id: 'step-1-svelte-basics',
        title: 'Svelte Fundamentals & Setup',
        description: 'Learn Svelte basics and set up development environment',
        duration: '1-2 weeks',
        topics: ['Svelte installation', 'Component basics', 'Template syntax', 'Reactive declarations', 'Props and events'],
        skills_gained: ['Svelte setup', 'Component architecture', 'Reactive programming']
      },
      {
        id: 'step-2-svelte-reactivity',
        title: 'Reactivity & State Management',
        description: 'Master Svelte\'s reactivity system and state management',
        duration: '2 weeks',
        topics: ['Reactive statements', 'Stores', 'Derived stores', 'Writable stores', 'Custom stores', 'Context API'],
        skills_gained: ['State management', 'Reactive patterns', 'Data flow']
      },
      {
        id: 'step-3-svelte-components',
        title: 'Advanced Components & Lifecycle',
        description: 'Build complex components with lifecycle methods and slots',
        duration: '1-2 weeks',
        topics: ['Component lifecycle', 'Slots', 'Component composition', 'Event forwarding', 'Two-way binding'],
        skills_gained: ['Component design', 'Lifecycle management', 'Component communication']
      },
      {
        id: 'step-4-svelte-styling',
        title: 'Styling & Animations',
        description: 'Apply styling and create smooth animations in Svelte',
        duration: '1-2 weeks',
        topics: ['Scoped CSS', 'Dynamic classes', 'Transitions', 'Animations', 'Motion', 'CSS-in-JS'],
        skills_gained: ['Styling techniques', 'Animation implementation', 'UI/UX enhancement']
      },
      {
        id: 'step-5-sveltekit',
        title: 'SvelteKit & Full-Stack Development',
        description: 'Build full-stack applications with SvelteKit framework',
        duration: '2-3 weeks',
        topics: ['SvelteKit setup', 'Routing', 'Server-side rendering', 'API endpoints', 'Preloading', 'Adapters'],
        skills_gained: ['Full-stack development', 'SSR implementation', 'API development']
      },
      {
        id: 'step-6-svelte-production',
        title: 'Testing & Production Deployment',
        description: 'Test Svelte applications and deploy to production',
        duration: '1-2 weeks',
        topics: ['Unit testing', 'Integration testing', 'Performance optimization', 'Build optimization', 'Deployment strategies'],
        skills_gained: ['Testing methodologies', 'Performance optimization', 'Production deployment']
      }
    ],
    tags: ['svelte', 'frontend', 'reactive', 'fast'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['Svelte Developer', 'Frontend Developer', 'JavaScript Developer'],
    industry_demand: 'Medium'
  },
  // MOBILE FRAMEWORKS
  {
    id: 'react-native',
    title: 'React Native',
    description: 'Build native mobile apps for iOS and Android using React Native',
    role: 'React Native Developer',
    primary_skills: ['React Native', 'Mobile Development', 'Navigation', 'State Management'],
    secondary_skills: ['Expo', 'Native Modules', 'Platform APIs', 'App Store Deployment'],
    category: 'Mobile Development',
    subcategory: 'Cross-Platform',
    difficulty: 'Intermediate',
    duration: '4-5 months',
    prerequisites: ['React knowledge', 'JavaScript proficiency', 'Mobile concepts'],
    steps: [
      {
        id: 'step-1-rn-setup',
        title: 'Step 1: React Native Environment Setup',
        description: 'Set up React Native development environment',
        duration: '1 week',
        topics: ['React Native CLI', 'Expo CLI', 'Android Studio', 'Xcode Setup'],
        skills_gained: ['Development Environment', 'Mobile Development Setup', 'CLI Tools']
      },
      {
        id: 'step-2-rn-components',
        title: 'Step 2: React Native Components',
        description: 'Master React Native core components and styling',
        duration: '2-3 weeks',
        topics: ['Core Components', 'Flexbox Layout', 'StyleSheet', 'Platform-specific Code'],
        skills_gained: ['React Native Components', 'Mobile UI', 'Cross-platform Styling']
      },
      {
        id: 'step-3-rn-navigation',
        title: 'Step 3: Navigation & Routing',
        description: 'Implement navigation between screens',
        duration: '1-2 weeks',
        topics: ['React Navigation', 'Stack Navigator', 'Tab Navigator', 'Drawer Navigation'],
        skills_gained: ['Mobile Navigation', 'Screen Management', 'User Experience']
      },
      {
        id: 'step-4-rn-state',
        title: 'Step 4: State Management',
        description: 'Manage app state in React Native applications',
        duration: '1-2 weeks',
        topics: ['React Hooks', 'Context API', 'Redux', 'Async Storage'],
        skills_gained: ['State Management', 'Data Flow', 'Local Storage']
      },
      {
        id: 'step-5-rn-apis',
        title: 'Step 5: Native APIs & Device Features',
        description: 'Access device features and native APIs',
        duration: '2-3 weeks',
        topics: ['Camera', 'Location', 'Push Notifications', 'Device Info', 'Permissions'],
        skills_gained: ['Native APIs', 'Device Integration', 'Mobile Features']
      },
      {
        id: 'step-6-rn-networking',
        title: 'Step 6: Networking & Data Management',
        description: 'Connect to APIs and manage data',
        duration: '1-2 weeks',
        topics: ['Fetch API', 'Axios', 'REST APIs', 'Data Caching', 'Error Handling'],
        skills_gained: ['API Integration', 'Network Programming', 'Data Management']
      },
      {
        id: 'step-7-rn-deployment',
        title: 'Step 7: Testing & App Store Deployment',
        description: 'Test and deploy React Native apps',
        duration: '1-2 weeks',
        topics: ['Jest Testing', 'Detox E2E', 'App Store Connect', 'Play Store Console'],
        skills_gained: ['Mobile Testing', 'App Deployment', 'Store Publishing']
      }
    ],
    tags: ['reactnative', 'mobile', 'crossplatform', 'react'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['React Native Developer', 'Mobile Developer', 'Cross-Platform Developer'],
    industry_demand: 'High'
  },
  // BACKEND FRAMEWORKS CONTINUED
  {
    id: 'spring-boot',
    title: 'Spring Boot',
    description: 'Rapidly develop production-ready Spring applications with Spring Boot',
    role: 'Spring Boot Developer',
    primary_skills: ['Spring Boot', 'Auto-configuration', 'Microservices', 'REST APIs'],
    secondary_skills: ['Spring Security', 'Spring Data', 'Actuator', 'Testing'],
    category: 'Web Development',
    subcategory: 'Backend Framework',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Java knowledge', 'Spring Framework basics', 'Web development concepts'],
    steps: [
      {
        id: 'step-1-sb-setup',
        title: 'Spring Boot Setup & First Project',
        description: 'Set up Spring Boot development environment and create first application',
        duration: '1 week',
        topics: ['Spring Initializr', 'IDE setup', 'Maven/Gradle', 'Project structure', 'Hello World app'],
        skills_gained: ['Environment setup', 'Project creation', 'Spring Boot basics']
      },
      {
        id: 'step-2-sb-fundamentals',
        title: 'Core Spring Boot Concepts',
        description: 'Master auto-configuration, starters, and application properties',
        duration: '2 weeks',
        topics: ['Auto-configuration', 'Spring Boot Starters', 'Application properties', 'Configuration classes', 'Profiles'],
        skills_gained: ['Auto-configuration', 'Configuration management', 'Profile handling']
      },
      {
        id: 'step-3-sb-web',
        title: 'Web Development with Spring Boot',
        description: 'Build REST APIs and web applications using Spring MVC',
        duration: '3 weeks',
        topics: ['Spring MVC', 'REST Controllers', 'Request mapping', 'Exception handling', 'Validation'],
        skills_gained: ['REST API development', 'Web controllers', 'HTTP handling']
      },
      {
        id: 'step-4-sb-data',
        title: 'Data Access & JPA Integration',
        description: 'Implement data layer with Spring Data JPA and database integration',
        duration: '2-3 weeks',
        topics: ['Spring Data JPA', 'Repository pattern', 'Entity mapping', 'Database configuration', 'Query methods'],
        skills_gained: ['Database integration', 'JPA repositories', 'Data modeling']
      },
      {
        id: 'step-5-sb-security',
        title: 'Security Implementation',
        description: 'Secure applications with Spring Security and authentication',
        duration: '2 weeks',
        topics: ['Spring Security', 'Authentication', 'Authorization', 'JWT tokens', 'Method security'],
        skills_gained: ['Application security', 'User authentication', 'Access control']
      },
      {
        id: 'step-6-sb-testing',
        title: 'Testing & Quality Assurance',
        description: 'Comprehensive testing strategies for Spring Boot applications',
        duration: '2 weeks',
        topics: ['Unit testing', 'Integration testing', 'MockMvc', 'TestContainers', 'Test profiles'],
        skills_gained: ['Test-driven development', 'Quality assurance', 'Testing frameworks']
      },
      {
        id: 'step-7-sb-microservices',
        title: 'Microservices & Cloud Deployment',
        description: 'Build microservices architecture and deploy to cloud platforms',
        duration: '3 weeks',
        topics: ['Microservices patterns', 'Service discovery', 'API Gateway', 'Docker deployment', 'Cloud platforms'],
        skills_gained: ['Microservices architecture', 'Container deployment', 'Cloud integration']
      }
    ],
    tags: ['springboot', 'java', 'microservices', 'api'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Spring Boot Developer', 'Java Developer', 'Backend Developer'],
    industry_demand: 'High'
  },
  {
    id: 'ruby-on-rails',
    title: 'Ruby on Rails',
    description: 'Build web applications rapidly with Ruby on Rails framework',
    role: 'Rails Developer',
    primary_skills: ['Ruby on Rails', 'Ruby', 'MVC Architecture', 'ActiveRecord'],
    secondary_skills: ['Testing', 'Deployment', 'API Development', 'Background Jobs'],
    category: 'Web Development',
    subcategory: 'Backend Framework',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Ruby knowledge', 'Web development basics', 'MVC understanding'],
    steps: [
      {
        id: 'step-1-ruby-rails-setup',
        title: 'Step 1: Ruby & Rails Environment Setup',
        description: 'Set up Ruby development environment and create first Rails application',
        duration: '1 week',
        topics: ['Ruby Installation', 'Rails Installation', 'Project Creation', 'Bundler', 'Database Configuration'],
        skills_gained: ['Ruby Environment', 'Rails Setup', 'Development Environment']
      },
      {
        id: 'step-2-mvc-architecture',
        title: 'Step 2: MVC Architecture & Routing',
        description: 'Master Rails MVC pattern and routing system',
        duration: '2 weeks',
        topics: ['Model-View-Controller', 'Rails Routes', 'RESTful Routes', 'Controllers', 'Actions & Views'],
        skills_gained: ['MVC Architecture', 'Routing System', 'Web Application Structure']
      },
      {
        id: 'step-3-models-activerecord',
        title: 'Step 3: Models & ActiveRecord ORM',
        description: 'Work with databases using ActiveRecord and model relationships',
        duration: '2-3 weeks',
        topics: ['ActiveRecord Models', 'Database Migrations', 'Associations', 'Validations', 'Query Interface'],
        skills_gained: ['Database Modeling', 'ActiveRecord ORM', 'Data Relationships']
      },
      {
        id: 'step-4-views-forms',
        title: 'Step 4: Views, Forms & User Interface',
        description: 'Create dynamic views and handle user input with forms',
        duration: '2 weeks',
        topics: ['ERB Templates', 'Rails Helpers', 'Forms', 'Partials', 'Layout Templates', 'Asset Pipeline'],
        skills_gained: ['Template System', 'Form Handling', 'User Interface Development']
      },
      {
        id: 'step-5-authentication-authorization',
        title: 'Step 5: Authentication & Authorization',
        description: 'Implement user authentication and access control',
        duration: '2 weeks',
        topics: ['User Authentication', 'Sessions', 'Cookies', 'Authorization', 'Security Best Practices'],
        skills_gained: ['User Management', 'Security Implementation', 'Access Control']
      },
      {
        id: 'step-6-testing-deployment',
        title: 'Step 6: Testing & Production Deployment',
        description: 'Test Rails applications and deploy to production',
        duration: '2 weeks',
        topics: ['RSpec Testing', 'Test-Driven Development', 'Background Jobs', 'Deployment Strategies', 'Performance Optimization'],
        skills_gained: ['Testing Methodologies', 'Production Deployment', 'Performance Optimization']
      }
    ],
    tags: ['rails', 'ruby', 'web', 'mvc'],
    popularity_score: 5,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['Rails Developer', 'Ruby Developer', 'Web Developer'],
    industry_demand: 'Medium'
  },
  // .NET AND C# DEVELOPMENT
  {
    id: 'csharp-dotnet',
    title: 'C# & .NET',
    description: 'Master C# programming and .NET ecosystem for enterprise applications',
    role: 'C# Developer',
    primary_skills: ['C#', '.NET Core', 'ASP.NET', 'Entity Framework'],
    secondary_skills: ['LINQ', 'Async Programming', 'Dependency Injection', 'Testing'],
    category: 'Programming Languages',
    subcategory: 'Microsoft Stack',
    difficulty: 'Intermediate',
    duration: '4-5 months',
    prerequisites: ['Programming fundamentals', 'Object-oriented concepts'],
    steps: [
      {
        id: 'step-1-csharp-basics',
        title: 'Step 1: C# Language Fundamentals',
        description: 'Master C# syntax, data types, and basic programming concepts',
        duration: '2-3 weeks',
        topics: ['C# Syntax', 'Variables & Data Types', 'Control Structures', 'Methods', 'Exception Handling'],
        skills_gained: ['C# Syntax', 'Programming Logic', 'Error Handling']
      },
      {
        id: 'step-2-csharp-oop',
        title: 'Step 2: Object-Oriented Programming in C#',
        description: 'Learn OOP principles and advanced C# features',
        duration: '3 weeks',
        topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Interfaces', 'Generics'],
        skills_gained: ['OOP Design', 'Advanced C#', 'Code Architecture']
      },
      {
        id: 'step-3-dotnet-core',
        title: 'Step 3: .NET Core & Framework',
        description: 'Understand .NET ecosystem and core libraries',
        duration: '2-3 weeks',
        topics: ['.NET Core', 'NuGet Packages', 'Collections', 'LINQ', 'Async/Await'],
        skills_gained: ['.NET Framework', 'Library Usage', 'Asynchronous Programming']
      },
      {
        id: 'step-4-aspnet-web',
        title: 'Step 4: ASP.NET Web Development',
        description: 'Build web applications with ASP.NET Core',
        duration: '3-4 weeks',
        topics: ['ASP.NET Core MVC', 'Web API', 'Routing', 'Middleware', 'Dependency Injection'],
        skills_gained: ['Web Development', 'API Creation', 'Web Architecture']
      },
      {
        id: 'step-5-entity-framework',
        title: 'Step 5: Entity Framework & Databases',
        description: 'Database operations with Entity Framework Core',
        duration: '2-3 weeks',
        topics: ['Entity Framework Core', 'Code First', 'Database Migrations', 'CRUD Operations', 'Relationships'],
        skills_gained: ['Database ORM', 'Data Modeling', 'Database Management']
      },
      {
        id: 'step-6-advanced-dotnet',
        title: 'Step 6: Advanced .NET Development',
        description: 'Advanced topics and deployment strategies',
        duration: '2-3 weeks',
        topics: ['Testing (xUnit)', 'Performance Optimization', 'Security', 'Docker', 'Cloud Deployment'],
        skills_gained: ['Testing Frameworks', 'Performance Tuning', 'Production Deployment']
      }
    ],
    tags: ['csharp', 'dotnet', 'microsoft', 'enterprise'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['C# Developer', '.NET Developer', 'Software Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'swift-programming',
    title: 'Swift Programming',
    description: 'Master Swift programming language for iOS and macOS development',
    role: 'Swift Developer',
    primary_skills: ['Swift', 'iOS Development', 'Xcode', 'Swift UI'],
    secondary_skills: ['Core Data', 'Networking', 'App Store Guidelines', 'Testing'],
    category: 'Mobile Development',
    subcategory: 'iOS',
    difficulty: 'Intermediate',
    duration: '4-5 months',
    prerequisites: ['Programming basics', 'Apple ecosystem familiarity'],
    steps: [
      {
        id: 'step-1-swift-basics',
        title: 'Step 1: Swift Language Fundamentals',
        description: 'Master Swift syntax and core programming concepts',
        duration: '2-3 weeks',
        topics: ['Swift Syntax', 'Variables & Constants', 'Data Types', 'Control Flow', 'Functions'],
        skills_gained: ['Swift Syntax', 'Programming Logic', 'Basic Swift Development']
      },
      {
        id: 'step-2-swift-advanced',
        title: 'Step 2: Advanced Swift Concepts',
        description: 'Learn advanced Swift features and memory management',
        duration: '2-3 weeks',
        topics: ['Optionals', 'Closures', 'Protocols', 'Extensions', 'Memory Management'],
        skills_gained: ['Advanced Swift', 'Protocol-Oriented Programming', 'Memory Optimization']
      },
      {
        id: 'step-3-swift-ios-basics',
        title: 'Step 3: iOS Development Basics',
        description: 'Introduction to iOS app development with UIKit',
        duration: '3 weeks',
        topics: ['Xcode IDE', 'UIKit', 'View Controllers', 'Storyboards', 'Auto Layout'],
        skills_gained: ['iOS Development', 'UI Design', 'App Structure']
      },
      {
        id: 'step-4-swiftui',
        title: 'Step 4: SwiftUI & Modern iOS Development',
        description: 'Build modern iOS apps with SwiftUI framework',
        duration: '3-4 weeks',
        topics: ['SwiftUI Views', 'State Management', 'Navigation', 'Animations', 'Combine Framework'],
        skills_gained: ['SwiftUI', 'Declarative UI', 'Modern iOS Patterns']
      },
      {
        id: 'step-5-swift-ios-data',
        title: 'Step 5: Data & Networking in iOS',
        description: 'Handle data storage and network operations',
        duration: '2-3 weeks',
        topics: ['Core Data', 'UserDefaults', 'Networking', 'JSON Parsing', 'REST APIs'],
        skills_gained: ['Data Persistence', 'API Integration', 'Data Management']
      },
      {
        id: 'step-6-swift-ios-advanced',
        title: 'Step 6: Advanced iOS & App Store',
        description: 'Advanced features and app deployment',
        duration: '2-3 weeks',
        topics: ['Testing (XCTest)', 'Performance Optimization', 'App Store Guidelines', 'Publishing', 'Analytics'],
        skills_gained: ['Testing', 'App Store Deployment', 'Production iOS Development']
      }
    ],
    tags: ['swift', 'ios', 'apple', 'mobile'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['iOS Developer', 'Swift Developer', 'Mobile App Developer'],
    industry_demand: 'High'
  },
  {
    id: 'kotlin-programming',
    title: 'Kotlin Programming',
    description: 'Learn Kotlin for Android development and server-side applications',
    role: 'Kotlin Developer',
    primary_skills: ['Kotlin', 'Android Development', 'Coroutines', 'Interoperability'],
    secondary_skills: ['Kotlin Multiplatform', 'Ktor', 'Testing', 'Performance'],
    category: 'Mobile Development',
    subcategory: 'Android',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Programming experience', 'Java knowledge helpful'],
    steps: [
      {
        id: 'step-1-kotlin-basics',
        title: 'Step 1: Kotlin Language Fundamentals',
        description: 'Learn Kotlin syntax and core language features',
        duration: '2 weeks',
        topics: ['Kotlin Syntax', 'Variables & Data Types', 'Functions', 'Classes & Objects', 'Null Safety'],
        skills_gained: ['Kotlin Programming', 'Type Safety', 'Object-Oriented Programming']
      },
      {
        id: 'step-2-kotlin-advanced',
        title: 'Step 2: Advanced Kotlin Features',
        description: 'Master advanced Kotlin language features and idioms',
        duration: '2 weeks',
        topics: ['Extension Functions', 'Higher-Order Functions', 'Lambda Expressions', 'Collections', 'Generics'],
        skills_gained: ['Functional Programming', 'Advanced Kotlin', 'Code Expressiveness']
      },
      {
        id: 'step-3-android-kotlin',
        title: 'Step 3: Android Development with Kotlin',
        description: 'Build Android applications using Kotlin',
        duration: '3-4 weeks',
        topics: ['Android Studio', 'Activities & Fragments', 'Layouts', 'Intents', 'Android Components'],
        skills_gained: ['Android Development', 'Mobile UI', 'App Architecture']
      },
      {
        id: 'step-4-kotlin-coroutines',
        title: 'Step 4: Coroutines & Async Programming',
        description: 'Master asynchronous programming with Kotlin Coroutines',
        duration: '2-3 weeks',
        topics: ['Coroutines Basics', 'Suspend Functions', 'Coroutine Scopes', 'Flow', 'Async Operations'],
        skills_gained: ['Asynchronous Programming', 'Concurrency', 'Reactive Programming']
      },
      {
        id: 'step-5-kotlin-ecosystem',
        title: 'Step 5: Kotlin Ecosystem & Libraries',
        description: 'Explore Kotlin ecosystem and popular libraries',
        duration: '2 weeks',
        topics: ['Retrofit', 'Room Database', 'Dagger/Hilt', 'Testing Libraries', 'Kotlin Multiplatform'],
        skills_gained: ['Library Integration', 'Dependency Injection', 'Cross-platform Development']
      },
      {
        id: 'step-6-kotlin-production',
        title: 'Step 6: Testing & Production Deployment',
        description: 'Test Kotlin applications and deploy to production',
        duration: '1-2 weeks',
        topics: ['Unit Testing', 'Instrumentation Testing', 'App Performance', 'Play Store Deployment', 'Best Practices'],
        skills_gained: ['Testing Strategies', 'App Optimization', 'Production Deployment']
      }
    ],
    tags: ['kotlin', 'android', 'mobile', 'jvm'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['Kotlin Developer', 'Android Developer', 'Mobile Developer'],
    industry_demand: 'High'
  },
  // CLOUD PLATFORMS
  {
    id: 'microsoft-azure',
    title: 'Microsoft Azure',
    description: 'Master Microsoft Azure cloud services and architecture',
    role: 'Azure Cloud Engineer',
    primary_skills: ['Azure Services', 'Resource Management', 'Virtual Networks', 'Identity Management'],
    secondary_skills: ['Azure DevOps', 'Monitoring', 'Security', 'Cost Optimization'],
    category: 'Cloud',
    subcategory: 'Microsoft Azure',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Cloud concepts', 'Networking basics', 'Microsoft technologies helpful'],
    steps: [
      {
        id: 'step-1-azure-basics',
        title: 'Azure Fundamentals & Setup',
        description: 'Learn Azure basics and set up development environment',
        duration: '2 weeks',
        topics: ['Azure portal', 'Subscriptions', 'Resource groups', 'Regions', 'Basic services overview', 'Azure CLI'],
        skills_gained: ['Azure navigation', 'Resource management', 'Cloud concepts']
      },
      {
        id: 'step-2-azure-compute',
        title: 'Compute Services & Virtual Machines',
        description: 'Master Azure compute services and virtual machine management',
        duration: '2-3 weeks',
        topics: ['Virtual machines', 'App Services', 'Container instances', 'Azure Functions', 'VM scaling', 'Load balancers'],
        skills_gained: ['Compute services', 'VM management', 'Scaling strategies']
      },
      {
        id: 'step-3-azure-storage',
        title: 'Storage & Database Services',
        description: 'Implement Azure storage solutions and database services',
        duration: '2-3 weeks',
        topics: ['Blob storage', 'File storage', 'SQL Database', 'Cosmos DB', 'Storage accounts', 'Backup solutions'],
        skills_gained: ['Storage management', 'Database services', 'Data persistence']
      },
      {
        id: 'step-4-azure-networking',
        title: 'Networking & Security',
        description: 'Configure Azure networking and implement security best practices',
        duration: '2-3 weeks',
        topics: ['Virtual networks', 'Subnets', 'NSGs', 'Azure AD', 'Key Vault', 'VPN Gateway', 'Firewall'],
        skills_gained: ['Network configuration', 'Security implementation', 'Identity management']
      },
      {
        id: 'step-5-azure-devops',
        title: 'DevOps & Automation',
        description: 'Implement CI/CD pipelines and automation with Azure DevOps',
        duration: '3 weeks',
        topics: ['Azure DevOps', 'CI/CD pipelines', 'ARM templates', 'Azure Monitor', 'Application insights'],
        skills_gained: ['DevOps practices', 'Automation', 'Monitoring']
      },
      {
        id: 'step-6-azure-advanced',
        title: 'Advanced Azure Services',
        description: 'Explore advanced Azure services and enterprise solutions',
        duration: '2-3 weeks',
        topics: ['Azure Kubernetes Service', 'Logic Apps', 'Service Bus', 'API Management', 'Cost optimization'],
        skills_gained: ['Advanced services', 'Enterprise solutions', 'Cost management']
      }
    ],
    tags: ['azure', 'microsoft', 'cloud', 'enterprise'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $145k',
    job_opportunities: ['Azure Cloud Engineer', 'Cloud Architect', 'DevOps Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'google-cloud-platform',
    title: 'Google Cloud Platform',
    description: 'Learn Google Cloud services and serverless computing',
    role: 'GCP Engineer',
    primary_skills: ['GCP Services', 'Compute Engine', 'Cloud Functions', 'BigQuery'],
    secondary_skills: ['Kubernetes Engine', 'Cloud Storage', 'Networking', 'ML Services'],
    category: 'Cloud',
    subcategory: 'Google Cloud',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Cloud fundamentals', 'Programming experience', 'Linux knowledge'],
    steps: [
      {
        id: 'step-1-gcp-basics',
        title: 'GCP Fundamentals & Setup',
        description: 'Learn Google Cloud basics and set up development environment',
        duration: '2 weeks',
        topics: ['Google Cloud Console', 'Projects', 'IAM basics', 'Billing', 'Cloud SDK', 'gcloud CLI'],
        skills_gained: ['GCP navigation', 'Project management', 'Basic administration']
      },
      {
        id: 'step-2-gcp-compute',
        title: 'Compute Services & App Engine',
        description: 'Master GCP compute services and application deployment',
        duration: '2-3 weeks',
        topics: ['Compute Engine', 'App Engine', 'Cloud Functions', 'Cloud Run', 'Load balancing', 'Auto scaling'],
        skills_gained: ['Compute services', 'Serverless deployment', 'Application scaling']
      },
      {
        id: 'step-3-gcp-storage',
        title: 'Storage & Database Services',
        description: 'Implement GCP storage solutions and managed databases',
        duration: '2-3 weeks',
        topics: ['Cloud Storage', 'Cloud SQL', 'Firestore', 'BigQuery', 'Cloud Spanner', 'Data lifecycle'],
        skills_gained: ['Storage management', 'Database services', 'Big data solutions']
      },
      {
        id: 'step-4-gcp-networking',
        title: 'Networking & Security',
        description: 'Configure GCP networking and implement security controls',
        duration: '2 weeks',
        topics: ['VPC networks', 'Subnets', 'Firewalls', 'Cloud Identity', 'Cloud Security', 'VPN'],
        skills_gained: ['Network design', 'Security implementation', 'Identity management']
      },
      {
        id: 'step-5-gcp-devops',
        title: 'DevOps & CI/CD',
        description: 'Implement continuous integration and deployment on GCP',
        duration: '2-3 weeks',
        topics: ['Cloud Build', 'Container Registry', 'GKE', 'Cloud Monitoring', 'Cloud Logging', 'Infrastructure as Code'],
        skills_gained: ['CI/CD pipelines', 'Container orchestration', 'Monitoring']
      },
      {
        id: 'step-6-gcp-advanced',
        title: 'Advanced Services & ML',
        description: 'Explore advanced GCP services and machine learning capabilities',
        duration: '2-3 weeks',
        topics: ['AI/ML services', 'Pub/Sub', 'Dataflow', 'Cloud Endpoints', 'API Gateway', 'Cost optimization'],
        skills_gained: ['Machine learning', 'Data processing', 'API management']
      }
    ],
    tags: ['gcp', 'google', 'cloud', 'serverless'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$80k - $145k',
    job_opportunities: ['GCP Engineer', 'Cloud Developer', 'Solutions Architect'],
    industry_demand: 'High'
  },
  // CONFIGURATION MANAGEMENT
  {
    id: 'configuration-management-ansible',
    title: 'Configuration Management (Ansible)',
    description: 'Automate IT infrastructure with Ansible configuration management',
    role: 'DevOps Engineer',
    primary_skills: ['Ansible', 'YAML', 'Playbooks', 'Infrastructure Automation'],
    secondary_skills: ['Inventory Management', 'Roles', 'Galaxy', 'Tower/AWX'],
    category: 'DevOps',
    subcategory: 'Configuration Management',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['Linux knowledge', 'Basic scripting', 'Infrastructure concepts'],
    steps: [
      {
        id: 'step-1-ansible-basics',
        title: 'Step 1: Ansible Fundamentals',
        description: 'Learn Ansible basics, installation, and core concepts',
        duration: '1-2 weeks',
        topics: ['Ansible Installation', 'SSH Setup', 'Ad-hoc Commands', 'Basic Modules', 'Inventory Files'],
        skills_gained: ['Ansible Installation', 'SSH Management', 'Basic Automation']
      },
      {
        id: 'step-2-ansible-playbooks',
        title: 'Step 2: Playbooks & YAML',
        description: 'Master Ansible Playbooks and YAML syntax',
        duration: '2 weeks',
        topics: ['YAML Syntax', 'Playbook Structure', 'Tasks & Handlers', 'Variables', 'Conditionals'],
        skills_gained: ['Playbook Development', 'YAML Proficiency', 'Configuration Logic']
      },
      {
        id: 'step-3-ansible-inventory',
        title: 'Step 3: Inventory Management',
        description: 'Advanced inventory management and host organization',
        duration: '1-2 weeks',
        topics: ['Static Inventory', 'Dynamic Inventory', 'Host Groups', 'Host Variables', 'Group Variables'],
        skills_gained: ['Inventory Design', 'Host Management', 'Variable Organization']
      },
      {
        id: 'step-4-ansible-roles',
        title: 'Step 4: Roles & Galaxy',
        description: 'Create reusable Ansible roles and use Ansible Galaxy',
        duration: '2-3 weeks',
        topics: ['Role Structure', 'Role Development', 'Ansible Galaxy', 'Role Dependencies', 'Best Practices'],
        skills_gained: ['Role Development', 'Code Reusability', 'Community Resources']
      },
      {
        id: 'step-5-ansible-advanced',
        title: 'Step 5: Advanced Features',
        description: 'Advanced Ansible features and enterprise usage',
        duration: '2 weeks',
        topics: ['Vault (Encryption)', 'Jinja2 Templates', 'Custom Modules', 'Plugins', 'Error Handling'],
        skills_gained: ['Security Management', 'Template Processing', 'Advanced Automation']
      },
      {
        id: 'step-6-ansible-enterprise',
        title: 'Step 6: Enterprise & Scaling',
        description: 'Enterprise deployment and scaling strategies',
        duration: '1-2 weeks',
        topics: ['Ansible Tower/AWX', 'CI/CD Integration', 'Performance Tuning', 'Monitoring', 'Production Deployment'],
        skills_gained: ['Enterprise Deployment', 'Scaling Strategies', 'Production Management']
      }
    ],
    tags: ['ansible', 'automation', 'devops', 'configuration'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['DevOps Engineer', 'System Administrator', 'Automation Engineer'],
    industry_demand: 'High'
  },
  // TEST AUTOMATION
  {
    id: 'test-automation-selenium',
    title: 'Test Automation (Selenium)',
    description: 'Automate web application testing with Selenium WebDriver',
    role: 'Test Automation Engineer',
    primary_skills: ['Selenium WebDriver', 'Test Automation', 'Web Testing', 'Programming'],
    secondary_skills: ['TestNG/JUnit', 'Page Object Model', 'CI/CD Integration'],
    category: 'Quality Assurance',
    subcategory: 'Test Automation',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Programming knowledge', 'Web technologies', 'Testing concepts'],
    steps: [
      {
        id: 'step-1-selenium-basics',
        title: 'Step 1: Selenium WebDriver Fundamentals',
        description: 'Learn Selenium WebDriver basics and setup',
        duration: '1-2 weeks',
        topics: ['Selenium Installation', 'WebDriver Setup', 'Browser Automation', 'First Test Script', 'IDE Configuration'],
        skills_gained: ['Selenium Setup', 'WebDriver Basics', 'Browser Automation']
      },
      {
        id: 'step-2-element-interaction',
        title: 'Step 2: Element Location & Interaction',
        description: 'Master element identification and web interactions',
        duration: '2 weeks',
        topics: ['Locator Strategies', 'XPath & CSS Selectors', 'Element Interactions', 'Wait Strategies', 'Handling Dynamic Elements'],
        skills_gained: ['Element Location', 'Web Interactions', 'Dynamic Content Handling']
      },
      {
        id: 'step-3-test-framework',
        title: 'Step 3: Test Framework & Organization',
        description: 'Implement test frameworks and organize test code',
        duration: '2 weeks',
        topics: ['TestNG/JUnit', 'Test Structure', 'Assertions', 'Test Data Management', 'Parameterization'],
        skills_gained: ['Test Framework', 'Code Organization', 'Test Data Management']
      },
      {
        id: 'step-4-page-object-model',
        title: 'Step 4: Page Object Model & Design Patterns',
        description: 'Implement maintainable test architecture using design patterns',
        duration: '2 weeks',
        topics: ['Page Object Model', 'Page Factory', 'Design Patterns', 'Test Utilities', 'Code Reusability'],
        skills_gained: ['Design Patterns', 'Test Architecture', 'Code Maintainability']
      },
      {
        id: 'step-5-advanced-scenarios',
        title: 'Step 5: Advanced Testing Scenarios',
        description: 'Handle complex web testing scenarios and integrations',
        duration: '2 weeks',
        topics: ['File Uploads/Downloads', 'Windows Handling', 'Alerts & Pop-ups', 'Cross-browser Testing', 'Mobile Testing'],
        skills_gained: ['Advanced Testing', 'Cross-platform Testing', 'Complex Scenarios']
      },
      {
        id: 'step-6-cicd-reporting',
        title: 'Step 6: CI/CD Integration & Reporting',
        description: 'Integrate tests with CI/CD pipelines and generate reports',
        duration: '1-2 weeks',
        topics: ['Jenkins Integration', 'Maven/Gradle', 'Test Reporting', 'Parallel Execution', 'Test Management'],
        skills_gained: ['CI/CD Integration', 'Test Reporting', 'Test Management']
      }
    ],
    tags: ['selenium', 'automation', 'testing', 'qa'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $115k',
    job_opportunities: ['Test Automation Engineer', 'QA Engineer', 'SDET'],
    industry_demand: 'High'
  },
  // BACKEND-AS-A-SERVICE
  {
    id: 'firebase-development',
    title: 'Firebase Development',
    description: 'Build scalable applications with Google Firebase backend services',
    role: 'Firebase Developer',
    primary_skills: ['Firebase', 'Firestore', 'Authentication', 'Cloud Functions'],
    secondary_skills: ['Hosting', 'Storage', 'Analytics', 'Push Notifications'],
    category: 'Backend Development',
    subcategory: 'Backend-as-a-Service',
    difficulty: 'Beginner',
    duration: '2-3 months',
    prerequisites: ['JavaScript knowledge', 'Web development basics'],
    steps: [
      {
        id: 'step-1-firebase-setup',
        title: 'Step 1: Firebase Project Setup & Configuration',
        description: 'Create Firebase project and configure for web/mobile development',
        duration: '1 week',
        topics: ['Firebase Console', 'Project Creation', 'SDK Installation', 'Configuration Files', 'Environment Setup'],
        skills_gained: ['Firebase Setup', 'Project Configuration', 'SDK Integration']
      },
      {
        id: 'step-2-firebase-auth',
        title: 'Step 2: Authentication & User Management',
        description: 'Implement user authentication with various providers',
        duration: '2 weeks',
        topics: ['Email/Password Auth', 'Social Login', 'Phone Authentication', 'User Management', 'Security Rules'],
        skills_gained: ['User Authentication', 'Identity Management', 'Security Implementation']
      },
      {
        id: 'step-3-firestore-database',
        title: 'Step 3: Firestore Database & Real-time Data',
        description: 'Build applications with Firestore NoSQL database',
        duration: '2-3 weeks',
        topics: ['Firestore Structure', 'CRUD Operations', 'Real-time Listeners', 'Queries & Indexing', 'Offline Support'],
        skills_gained: ['NoSQL Database', 'Real-time Data', 'Database Operations']
      },
      {
        id: 'step-4-cloud-functions',
        title: 'Step 4: Cloud Functions & Server Logic',
        description: 'Implement serverless backend logic with Cloud Functions',
        duration: '2 weeks',
        topics: ['Function Deployment', 'HTTP Triggers', 'Database Triggers', 'Authentication Triggers', 'Third-party APIs'],
        skills_gained: ['Serverless Computing', 'Backend Logic', 'Event-driven Architecture']
      },
      {
        id: 'step-5-storage-hosting',
        title: 'Step 5: Storage & Hosting Services',
        description: 'Handle file storage and web hosting with Firebase',
        duration: '1-2 weeks',
        topics: ['Cloud Storage', 'File Upload/Download', 'Firebase Hosting', 'Content Delivery', 'Static Site Deployment'],
        skills_gained: ['File Management', 'Web Hosting', 'Content Delivery']
      },
      {
        id: 'step-6-analytics-performance',
        title: 'Step 6: Analytics & Performance Monitoring',
        description: 'Monitor app performance and user analytics',
        duration: '1 week',
        topics: ['Firebase Analytics', 'Performance Monitoring', 'Crashlytics', 'Remote Config', 'A/B Testing'],
        skills_gained: ['App Analytics', 'Performance Monitoring', 'User Insights']
      }
    ],
    tags: ['firebase', 'google', 'baas', 'realtime'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$60k - $110k',
    job_opportunities: ['Firebase Developer', 'Full Stack Developer', 'Mobile Developer'],
    industry_demand: 'High'
  },
  {
    id: 'supabase-development',
    title: 'Supabase Development',
    description: 'Build applications with Supabase open-source Firebase alternative',
    role: 'Supabase Developer',
    primary_skills: ['Supabase', 'PostgreSQL', 'Real-time', 'Row Level Security'],
    secondary_skills: ['Edge Functions', 'Storage', 'Auth', 'API Generation'],
    category: 'Backend Development',
    subcategory: 'Backend-as-a-Service',
    difficulty: 'Beginner',
    duration: '2-3 months',
    prerequisites: ['JavaScript knowledge', 'SQL basics', 'Web development'],
    steps: [
      {
        id: 'step-1-supabase-setup',
        title: 'Step 1: Supabase Project Setup & Configuration',
        description: 'Create Supabase project and configure for development',
        duration: '1 week',
        topics: ['Supabase Dashboard', 'Project Creation', 'Database Setup', 'API Keys', 'Client Library Installation'],
        skills_gained: ['Supabase Setup', 'Project Configuration', 'Development Environment']
      },
      {
        id: 'step-2-database-modeling',
        title: 'Step 2: Database Design & PostgreSQL',
        description: 'Design database schema using PostgreSQL in Supabase',
        duration: '2 weeks',
        topics: ['Table Creation', 'Relationships', 'PostgreSQL Features', 'SQL Editor', 'Database Functions'],
        skills_gained: ['Database Design', 'PostgreSQL', 'Schema Modeling']
      },
      {
        id: 'step-3-authentication-auth',
        title: 'Step 3: Authentication & User Management',
        description: 'Implement user authentication and access control',
        duration: '2 weeks',
        topics: ['Email Authentication', 'Social Login', 'Row Level Security', 'User Roles', 'Auth Policies'],
        skills_gained: ['User Authentication', 'Security Policies', 'Access Control']
      },
      {
        id: 'step-4-realtime-apis',
        title: 'Step 4: Real-time Features & API Integration',
        description: 'Build real-time applications with Supabase APIs',
        duration: '2 weeks',
        topics: ['Real-time Subscriptions', 'REST API', 'GraphQL', 'Client Libraries', 'Data Synchronization'],
        skills_gained: ['Real-time Development', 'API Integration', 'Data Sync']
      },
      {
        id: 'step-5-storage-functions',
        title: 'Step 5: Storage & Edge Functions',
        description: 'Handle file storage and implement serverless functions',
        duration: '1-2 weeks',
        topics: ['File Storage', 'Image Processing', 'Edge Functions', 'Database Triggers', 'Custom Logic'],
        skills_gained: ['File Management', 'Serverless Functions', 'Custom Backend Logic']
      },
      {
        id: 'step-6-deployment-scaling',
        title: 'Step 6: Production Deployment & Scaling',
        description: 'Deploy and scale Supabase applications in production',
        duration: '1 week',
        topics: ['Environment Management', 'Database Migrations', 'Performance Optimization', 'Monitoring', 'Backup Strategies'],
        skills_gained: ['Production Deployment', 'Performance Optimization', 'System Administration']
      }
    ],
    tags: ['supabase', 'postgresql', 'realtime', 'opensource'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$60k - $110k',
    job_opportunities: ['Supabase Developer', 'Full Stack Developer', 'Backend Developer'],
    industry_demand: 'Medium'
  },
  // DATABASES
  {
    id: 'postgresql-database',
    title: 'PostgreSQL Database',
    description: 'Master PostgreSQL for robust relational database management',
    role: 'Database Engineer',
    primary_skills: ['PostgreSQL', 'SQL', 'Database Design', 'Query Optimization'],
    secondary_skills: ['Indexing', 'Replication', 'Backup & Recovery', 'Performance Tuning'],
    category: 'Database',
    subcategory: 'Relational Database',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['SQL basics', 'Database concepts', 'Command line familiarity'],
    steps: [
      {
        id: 'step-1-postgresql-setup',
        title: 'PostgreSQL Installation & Setup',
        description: 'Install PostgreSQL and learn basic administration tools',
        duration: '1 week',
        topics: ['PostgreSQL installation', 'psql command line', 'pgAdmin', 'Database creation', 'User management'],
        skills_gained: ['PostgreSQL setup', 'Command line usage', 'Basic administration']
      },
      {
        id: 'step-2-postgresql-sql',
        title: 'SQL Fundamentals & Data Types',
        description: 'Master SQL queries and PostgreSQL specific data types',
        duration: '2-3 weeks',
        topics: ['CRUD operations', 'PostgreSQL data types', 'Constraints', 'Joins', 'Subqueries', 'Window functions'],
        skills_gained: ['SQL mastery', 'Data manipulation', 'Query construction']
      },
      {
        id: 'step-3-postgresql-design',
        title: 'Database Design & Normalization',
        description: 'Design efficient database schemas and apply normalization principles',
        duration: '2 weeks',
        topics: ['Database design principles', 'Normalization', 'Relationships', 'Foreign keys', 'Schema design patterns'],
        skills_gained: ['Database design', 'Schema optimization', 'Relational modeling']
      },
      {
        id: 'step-4-postgresql-performance',
        title: 'Indexing & Query Optimization',
        description: 'Optimize PostgreSQL performance with proper indexing strategies',
        duration: '2-3 weeks',
        topics: ['Index types', 'Query planning', 'EXPLAIN analysis', 'Performance tuning', 'Statistics', 'Vacuum'],
        skills_gained: ['Performance optimization', 'Index management', 'Query tuning']
      },
      {
        id: 'step-5-postgresql-advanced',
        title: 'Advanced Features & Functions',
        description: 'Explore PostgreSQL advanced features and stored procedures',
        duration: '2 weeks',
        topics: ['Stored procedures', 'Triggers', 'Views', 'JSON/JSONB', 'Full-text search', 'Extensions'],
        skills_gained: ['Advanced PostgreSQL', 'Stored procedures', 'NoSQL features']
      },
      {
        id: 'step-6-postgresql-production',
        title: 'Production & High Availability',
        description: 'Implement PostgreSQL in production with backup and replication',
        duration: '2-3 weeks',
        topics: ['Backup strategies', 'Point-in-time recovery', 'Replication', 'High availability', 'Monitoring', 'Security'],
        skills_gained: ['Production deployment', 'High availability', 'Database security']
      }
    ],
    tags: ['postgresql', 'database', 'sql', 'relational'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['Database Administrator', 'Backend Developer', 'Data Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'mongodb-database',
    title: 'MongoDB Database',
    description: 'Learn MongoDB NoSQL database for flexible document storage',
    role: 'MongoDB Developer',
    primary_skills: ['MongoDB', 'Document Databases', 'Aggregation', 'Indexing'],
    secondary_skills: ['Replica Sets', 'Sharding', 'GridFS', 'Atlas Cloud'],
    category: 'Database',
    subcategory: 'NoSQL Database',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Database basics', 'JSON understanding', 'Command line skills'],
    steps: [
      {
        id: 'step-1-mongodb-basics',
        title: 'MongoDB Installation & Basics',
        description: 'Install MongoDB and learn document database concepts',
        duration: '1-2 weeks',
        topics: ['MongoDB installation', 'Database concepts', 'Collections', 'Documents', 'MongoDB shell', 'Compass GUI'],
        skills_gained: ['MongoDB setup', 'NoSQL concepts', 'Database navigation']
      },
      {
        id: 'step-2-mongodb-crud',
        title: 'CRUD Operations & Queries',
        description: 'Master create, read, update, and delete operations in MongoDB',
        duration: '2-3 weeks',
        topics: ['Insert operations', 'Query documents', 'Update operations', 'Delete operations', 'Query operators', 'Projection'],
        skills_gained: ['CRUD operations', 'Query construction', 'Data manipulation']
      },
      {
        id: 'step-3-mongodb-modeling',
        title: 'Data Modeling & Schema Design',
        description: 'Design effective document structures and relationships',
        duration: '2 weeks',
        topics: ['Document modeling', 'Embedded vs referenced', 'Schema patterns', 'Validation', 'Data types'],
        skills_gained: ['Data modeling', 'Schema design', 'Document structure']
      },
      {
        id: 'step-4-mongodb-indexing',
        title: 'Indexing & Performance',
        description: 'Optimize MongoDB performance with proper indexing strategies',
        duration: '2 weeks',
        topics: ['Index types', 'Compound indexes', 'Text indexes', 'Performance analysis', 'Query optimization'],
        skills_gained: ['Performance optimization', 'Index design', 'Query tuning']
      },
      {
        id: 'step-5-mongodb-aggregation',
        title: 'Aggregation Framework',
        description: 'Process and analyze data using MongoDB aggregation pipeline',
        duration: '2-3 weeks',
        topics: ['Aggregation pipeline', 'Match stage', 'Group stage', 'Project stage', 'Sort & limit', 'Lookup joins'],
        skills_gained: ['Data aggregation', 'Pipeline design', 'Data analysis']
      },
      {
        id: 'step-6-mongodb-production',
        title: 'Production & Advanced Features',
        description: 'Deploy MongoDB in production with replication and sharding',
        duration: '2-3 weeks',
        topics: ['Replica sets', 'Sharding', 'Security', 'Backup/restore', 'Monitoring', 'Atlas cloud'],
        skills_gained: ['Production deployment', 'High availability', 'Scalability']
      }
    ],
    tags: ['mongodb', 'nosql', 'document', 'database'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $120k',
    job_opportunities: ['MongoDB Developer', 'Backend Developer', 'Database Engineer'],
    industry_demand: 'High'
  },
  {
    id: 'redis-database',
    title: 'Redis Database',
    description: 'Master Redis for in-memory data structure store and caching',
    role: 'Redis Specialist',
    primary_skills: ['Redis', 'Caching', 'Data Structures', 'Performance'],
    secondary_skills: ['Clustering', 'Pub/Sub', 'Lua Scripting', 'Persistence'],
    category: 'Database',
    subcategory: 'In-Memory Database',
    difficulty: 'Intermediate',
    duration: '2-3 months',
    prerequisites: ['Database concepts', 'Caching understanding', 'Command line'],
    steps: [
      {
        id: 'step-1-redis-basics',
        title: 'Redis Installation & Fundamentals',
        description: 'Install Redis and learn key-value store concepts',
        duration: '1 week',
        topics: ['Redis installation', 'Redis CLI', 'Basic commands', 'Key-value concepts', 'Data persistence'],
        skills_gained: ['Redis setup', 'Command line usage', 'Basic operations']
      },
      {
        id: 'step-2-redis-data-types',
        title: 'Redis Data Types & Commands',
        description: 'Master Redis data structures and their operations',
        duration: '2 weeks',
        topics: ['Strings', 'Lists', 'Sets', 'Sorted sets', 'Hashes', 'Bitmaps', 'HyperLogLog'],
        skills_gained: ['Data structures', 'Command mastery', 'Data modeling']
      },
      {
        id: 'step-3-redis-caching',
        title: 'Caching Strategies & Patterns',
        description: 'Implement effective caching strategies with Redis',
        duration: '1-2 weeks',
        topics: ['Cache patterns', 'TTL management', 'Cache invalidation', 'Write-through', 'Write-behind', 'Cache warming'],
        skills_gained: ['Caching strategies', 'Performance optimization', 'Cache management']
      },
      {
        id: 'step-4-redis-advanced',
        title: 'Advanced Features & Pub/Sub',
        description: 'Explore Redis advanced features and messaging',
        duration: '2 weeks',
        topics: ['Pub/Sub messaging', 'Transactions', 'Lua scripting', 'Streams', 'Modules', 'Pipeline'],
        skills_gained: ['Messaging systems', 'Scripting', 'Advanced operations']
      },
      {
        id: 'step-5-redis-production',
        title: 'Production & High Availability',
        description: 'Deploy Redis for production with clustering and replication',
        duration: '1-2 weeks',
        topics: ['Replication', 'Clustering', 'Sentinel', 'Security', 'Monitoring', 'Performance tuning'],
        skills_gained: ['High availability', 'Production deployment', 'System monitoring']
      }
    ],
    tags: ['redis', 'cache', 'inmemory', 'performance'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $125k',
    job_opportunities: ['Backend Developer', 'Performance Engineer', 'System Architect'],
    industry_demand: 'High'
  },
  // SYSTEM DESIGN
  {
    id: 'system-design-advanced',
    title: 'System Design',
    description: 'Learn to design scalable and distributed systems architecture',
    role: 'System Architect',
    primary_skills: ['System Architecture', 'Scalability', 'Distributed Systems', 'Design Patterns'],
    secondary_skills: ['Load Balancing', 'Caching', 'Database Design', 'Microservices'],
    category: 'Architecture',
    subcategory: 'System Design',
    difficulty: 'Advanced',
    duration: '4-6 months',
    prerequisites: ['Programming experience', 'Database knowledge', 'Network concepts'],
    steps: [
      {
        id: 'step-1-design-fundamentals',
        title: 'Step 1: System Design Fundamentals',
        description: 'Learn core system design principles and architectural concepts',
        duration: '2-3 weeks',
        topics: ['Scalability Principles', 'Reliability Patterns', 'Performance Metrics', 'System Trade-offs', 'Architecture Patterns'],
        skills_gained: ['System Design Principles', 'Architecture Thinking', 'Trade-off Analysis']
      },
      {
        id: 'step-2-database-design',
        title: 'Step 2: Database Design & Storage',
        description: 'Master database design for large-scale systems',
        duration: '3 weeks',
        topics: ['Database Scaling', 'SQL vs NoSQL', 'Sharding Strategies', 'Replication', 'CAP Theorem'],
        skills_gained: ['Database Architecture', 'Data Modeling', 'Storage Systems']
      },
      {
        id: 'step-3-caching-performance',
        title: 'Step 3: Caching & Performance Optimization',
        description: 'Implement caching strategies and performance optimizations',
        duration: '2-3 weeks',
        topics: ['Caching Layers', 'CDN Design', 'Cache Invalidation', 'Load Balancing', 'Performance Tuning'],
        skills_gained: ['Caching Strategies', 'Performance Optimization', 'Load Distribution']
      },
      {
        id: 'step-4-microservices-architecture',
        title: 'Step 4: Microservices Architecture',
        description: 'Design and implement microservices-based systems',
        duration: '3-4 weeks',
        topics: ['Service Decomposition', 'API Gateway', 'Service Mesh', 'Inter-service Communication', 'Data Consistency'],
        skills_gained: ['Microservices Design', 'Distributed Systems', 'Service Architecture']
      },
      {
        id: 'step-5-scalability-availability',
        title: 'Step 5: Scalability & High Availability',
        description: 'Build systems that scale and maintain high availability',
        duration: '3 weeks',
        topics: ['Horizontal Scaling', 'Vertical Scaling', 'Fault Tolerance', 'Disaster Recovery', 'Auto-scaling'],
        skills_gained: ['Scalability Design', 'High Availability', 'Resilience Engineering']
      },
      {
        id: 'step-6-monitoring-observability',
        title: 'Step 6: Monitoring & Observability',
        description: 'Implement comprehensive monitoring and observability',
        duration: '2-3 weeks',
        topics: ['Metrics & Alerting', 'Distributed Tracing', 'Log Management', 'Health Checks', 'Performance Monitoring'],
        skills_gained: ['System Monitoring', 'Observability', 'Performance Analysis']
      }
    ],
    tags: ['system-design', 'architecture', 'scalability', 'distributed'],
    popularity_score: 9,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$100k - $180k',
    job_opportunities: ['System Architect', 'Principal Engineer', 'Technical Lead'],
    industry_demand: 'High'
  },
  // COMPUTER SCIENCE FUNDAMENTALS
  {
    id: 'computer-science',
    title: 'Computer Science',
    description: 'Comprehensive computer science fundamentals and theory',
    role: 'Software Engineer',
    primary_skills: ['Algorithms', 'Data Structures', 'Complexity Analysis', 'Programming'],
    secondary_skills: ['Computer Networks', 'Operating Systems', 'Database Systems', 'Software Engineering'],
    category: 'Computer Science',
    subcategory: 'Fundamentals',
    difficulty: 'Intermediate',
    duration: '8-12 months',
    prerequisites: ['Basic programming', 'Mathematics fundamentals'],
    steps: [
      {
        id: 'step-1-cs-fundamentals',
        title: 'Step 1: Mathematical Foundations',
        description: 'Build mathematical foundations essential for computer science',
        duration: '3-4 weeks',
        topics: ['Discrete Mathematics', 'Linear Algebra', 'Statistics & Probability', 'Logic & Proofs', 'Set Theory'],
        skills_gained: ['Mathematical Reasoning', 'Analytical Thinking', 'Problem-solving Methods']
      },
      {
        id: 'step-2-cs-programming',
        title: 'Step 2: Programming Paradigms',
        description: 'Explore different programming paradigms and their applications',
        duration: '4 weeks',
        topics: ['Object-Oriented Programming', 'Functional Programming', 'Procedural Programming', 'Logic Programming', 'Design Patterns'],
        skills_gained: ['Programming Concepts', 'Design Patterns', 'Code Organization']
      },
      {
        id: 'step-3-cs-data-structures',
        title: 'Step 3: Core Data Structures',
        description: 'Master fundamental data structures and their implementations',
        duration: '4-5 weeks',
        topics: ['Arrays & Lists', 'Stacks & Queues', 'Trees & Graphs', 'Hash Tables', 'Heaps & Priority Queues'],
        skills_gained: ['Data Structure Design', 'Implementation Skills', 'Memory Management']
      },
      {
        id: 'step-4-cs-algorithms',
        title: 'Step 4: Algorithm Design & Analysis',
        description: 'Learn algorithm design techniques and complexity analysis',
        duration: '4-5 weeks',
        topics: ['Sorting & Searching', 'Graph Algorithms', 'Dynamic Programming', 'Greedy Algorithms', 'Divide & Conquer'],
        skills_gained: ['Algorithm Design', 'Complexity Analysis', 'Optimization Techniques']
      },
      {
        id: 'step-5-cs-operating-systems',
        title: 'Step 5: Computer Systems Concepts',
        description: 'Understand computer systems, architecture, and operating systems',
        duration: '3-4 weeks',
        topics: ['Computer Architecture', 'Operating Systems', 'Memory Management', 'File Systems', 'Concurrent Programming'],
        skills_gained: ['Systems Understanding', 'Hardware-Software Interface', 'System Programming']
      },
      {
        id: 'step-6-cs-networks',
        title: 'Step 6: Networks & Databases',
        description: 'Learn computer networks and database systems',
        duration: '3-4 weeks',
        topics: ['Network Protocols', 'TCP/IP', 'Database Design', 'SQL', 'Network Security'],
        skills_gained: ['Network Understanding', 'Database Design', 'System Integration']
      },
      {
        id: 'step-7-cs-databases',
        title: 'Step 7: Advanced Database Systems',
        description: 'Advanced database concepts and distributed systems',
        duration: '2-3 weeks',
        topics: ['Database Optimization', 'Distributed Databases', 'NoSQL', 'Transaction Management', 'Data Warehousing'],
        skills_gained: ['Advanced Database Skills', 'Distributed Systems', 'Data Management']
      },
      {
        id: 'step-8-cs-software-eng',
        title: 'Step 8: Software Engineering Principles',
        description: 'Software engineering methodologies and project management',
        duration: '2-3 weeks',
        topics: ['SDLC', 'Agile Methodologies', 'Software Testing', 'Version Control', 'Software Architecture'],
        skills_gained: ['Software Engineering', 'Project Management', 'Quality Assurance']
      }
    ],
    tags: ['computer-science', 'algorithms', 'theory', 'fundamentals'],
    popularity_score: 8,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $140k',
    job_opportunities: ['Software Engineer', 'Developer', 'Technical Analyst'],
    industry_demand: 'High'
  },
  {
    id: 'data-structures-algorithms',
    title: 'Data Structures and Algorithms',
    description: 'Master fundamental data structures and algorithmic problem solving',
    role: 'Software Engineer',
    primary_skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Time Complexity'],
    secondary_skills: ['Dynamic Programming', 'Graph Algorithms', 'Sorting', 'Searching'],
    category: 'Computer Science',
    subcategory: 'Algorithms',
    difficulty: 'Intermediate',
    duration: '4-6 months',
    prerequisites: ['Programming fundamentals', 'Basic mathematics'],
    steps: [
      {
        id: 'step-1-dsa-fundamentals',
        title: 'Step 1: Algorithm Complexity & Analysis',
        description: 'Learn to analyze algorithm efficiency and time/space complexity',
        duration: '2-3 weeks',
        topics: ['Big O Notation', 'Time Complexity', 'Space Complexity', 'Best/Average/Worst Cases', 'Asymptotic Analysis'],
        skills_gained: ['Complexity Analysis', 'Algorithm Evaluation', 'Performance Assessment']
      },
      {
        id: 'step-2-linear-structures',
        title: 'Step 2: Linear Data Structures',
        description: 'Master arrays, linked lists, stacks, and queues',
        duration: '3 weeks',
        topics: ['Dynamic Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Deques', 'Implementation Techniques'],
        skills_gained: ['Linear Data Structures', 'Memory Management', 'Pointer Manipulation']
      },
      {
        id: 'step-3-trees-graphs',
        title: 'Step 3: Trees & Graph Structures',
        description: 'Explore hierarchical and network data structures',
        duration: '4 weeks',
        topics: ['Binary Trees', 'BST', 'AVL Trees', 'Graphs', 'Tree Traversals', 'Graph Representations'],
        skills_gained: ['Hierarchical Structures', 'Graph Theory', 'Tree Operations']
      },
      {
        id: 'step-4-sorting-searching',
        title: 'Step 4: Sorting & Searching Algorithms',
        description: 'Master fundamental sorting and searching techniques',
        duration: '3 weeks',
        topics: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Heap Sort', 'Binary Search', 'Hash Tables'],
        skills_gained: ['Sorting Algorithms', 'Search Techniques', 'Algorithm Implementation']
      },
      {
        id: 'step-5-advanced-algorithms',
        title: 'Step 5: Advanced Algorithm Techniques',
        description: 'Learn advanced problem-solving techniques and patterns',
        duration: '4-5 weeks',
        topics: ['Dynamic Programming', 'Greedy Algorithms', 'Backtracking', 'Divide & Conquer', 'Graph Algorithms'],
        skills_gained: ['Advanced Algorithms', 'Problem-solving Patterns', 'Optimization Techniques']
      },
      {
        id: 'step-6-interview-practice',
        title: 'Step 6: Coding Interview Practice',
        description: 'Apply DSA knowledge to solve coding interview problems',
        duration: '4 weeks',
        topics: ['Leetcode Problems', 'System Design', 'Coding Interviews', 'Problem-solving Strategies', 'Mock Interviews'],
        skills_gained: ['Interview Skills', 'Problem-solving Speed', 'Technical Communication']
      }
    ],
    tags: ['dsa', 'algorithms', 'datastructures', 'coding'],
    popularity_score: 9,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$70k - $140k',
    job_opportunities: ['Software Engineer', 'Developer', 'Problem Solver'],
    industry_demand: 'High'
  },
  // DESIGN SYSTEMS
  {
    id: 'design-systems',
    title: 'Design Systems',
    description: 'Create and maintain scalable design systems for digital products',
    role: 'Design Systems Engineer',
    primary_skills: ['Design Systems', 'Component Libraries', 'Design Tokens', 'Documentation'],
    secondary_skills: ['Figma', 'Storybook', 'Version Control', 'Cross-team Collaboration'],
    category: 'Design',
    subcategory: 'Design Systems',
    difficulty: 'Intermediate',
    duration: '3-4 months',
    prerequisites: ['Design knowledge', 'Frontend development', 'Component thinking'],
    steps: [
      {
        id: 'step-1-design-systems-fundamentals',
        title: 'Step 1: Design Systems Foundation',
        description: 'Learn design systems principles and establish foundational concepts',
        duration: '2 weeks',
        topics: ['Design Systems Principles', 'Atomic Design Methodology', 'Component Thinking', 'Design Language', 'Brand Consistency'],
        skills_gained: ['Design Systems Theory', 'Component Architecture', 'Visual Consistency']
      },
      {
        id: 'step-2-design-tokens',
        title: 'Step 2: Design Tokens & Variables',
        description: 'Create and manage design tokens for consistent styling',
        duration: '2 weeks',
        topics: ['Design Tokens Concept', 'Color Palettes', 'Typography Scale', 'Spacing System', 'Token Management'],
        skills_gained: ['Design Tokens', 'Systematic Design', 'Style Management']
      },
      {
        id: 'step-3-component-library',
        title: 'Step 3: Component Library Creation',
        description: 'Build reusable component libraries with documentation',
        duration: '3 weeks',
        topics: ['Component Design', 'React/Vue Components', 'Props & Variants', 'Component States', 'Accessibility'],
        skills_gained: ['Component Development', 'Reusable UI', 'Accessibility Standards']
      },
      {
        id: 'step-4-documentation-tools',
        title: 'Step 4: Documentation & Tools',
        description: 'Master design system documentation and tooling ecosystem',
        duration: '2-3 weeks',
        topics: ['Storybook', 'Figma Libraries', 'Documentation Sites', 'Component Playground', 'Usage Guidelines'],
        skills_gained: ['Documentation Tools', 'Design Tools', 'Developer Experience']
      },
      {
        id: 'step-5-governance-scaling',
        title: 'Step 5: Governance & Team Adoption',
        description: 'Implement governance processes and drive team adoption',
        duration: '2 weeks',
        topics: ['Design System Governance', 'Contribution Guidelines', 'Version Control', 'Team Training', 'Adoption Metrics'],
        skills_gained: ['Team Leadership', 'Process Management', 'Cross-team Collaboration']
      },
      {
        id: 'step-6-maintenance-evolution',
        title: 'Step 6: Maintenance & Evolution',
        description: 'Learn to maintain and evolve design systems over time',
        duration: '1-2 weeks',
        topics: ['System Maintenance', 'Breaking Changes', 'Migration Strategies', 'Performance Optimization', 'Future Planning'],
        skills_gained: ['System Maintenance', 'Evolution Strategy', 'Performance Optimization']
      }
    ],
    tags: ['design-systems', 'components', 'ui', 'design'],
    popularity_score: 6,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$75k - $130k',
    job_opportunities: ['Design Systems Engineer', 'Frontend Developer', 'UI Developer'],
    industry_demand: 'High'
  },
  // AI SPECIALIZATIONS
  {
    id: 'ai-red-teaming',
    title: 'AI Red Teaming',
    description: 'Learn to test and secure AI systems through adversarial techniques',
    role: 'AI Security Specialist',
    primary_skills: ['AI Security', 'Adversarial Testing', 'Model Vulnerabilities', 'Risk Assessment'],
    secondary_skills: ['Prompt Injection', 'Model Evaluation', 'Ethical AI', 'Bias Detection'],
    category: 'AI/ML',
    subcategory: 'AI Security',
    difficulty: 'Advanced',
    duration: '4-6 months',
    prerequisites: ['AI/ML knowledge', 'Security concepts', 'Python programming'],
    steps: [
      {
        id: 'step-1-ai-security-fundamentals',
        title: 'Step 1: AI Security Fundamentals',
        description: 'Learn core AI security principles and threat landscape',
        duration: '2-3 weeks',
        topics: ['AI Attack Vectors', 'Model Vulnerabilities', 'Security Frameworks', 'Threat Modeling', 'Risk Assessment'],
        skills_gained: ['AI Security Principles', 'Threat Analysis', 'Risk Management']
      },
      {
        id: 'step-2-adversarial-attacks',
        title: 'Step 2: Adversarial Attacks & Techniques',
        description: 'Master various adversarial attack methods and implementations',
        duration: '3 weeks',
        topics: ['Adversarial Examples', 'Evasion Attacks', 'Poisoning Attacks', 'Model Inversion', 'Extraction Attacks'],
        skills_gained: ['Attack Techniques', 'Adversarial Methods', 'Model Exploitation']
      },
      {
        id: 'step-3-prompt-injection',
        title: 'Step 3: Prompt Injection & LLM Security',
        description: 'Explore LLM-specific vulnerabilities and prompt-based attacks',
        duration: '2-3 weeks',
        topics: ['Prompt Injection', 'Jailbreaking', 'Data Exfiltration', 'Model Manipulation', 'LLM Vulnerabilities'],
        skills_gained: ['Prompt Security', 'LLM Testing', 'Language Model Attacks']
      },
      {
        id: 'step-4-automated-testing',
        title: 'Step 4: Automated Testing Frameworks',
        description: 'Build automated AI security testing pipelines and tools',
        duration: '3 weeks',
        topics: ['Testing Automation', 'Security Frameworks', 'Continuous Testing', 'Custom Tools', 'CI/CD Integration'],
        skills_gained: ['Test Automation', 'Security Tooling', 'Pipeline Development']
      },
      {
        id: 'step-5-defense-strategies',
        title: 'Step 5: Defense Strategies & Mitigation',
        description: 'Implement robust defense mechanisms against AI attacks',
        duration: '2-3 weeks',
        topics: ['Adversarial Training', 'Input Validation', 'Output Filtering', 'Model Hardening', 'Monitoring Systems'],
        skills_gained: ['Defense Implementation', 'Security Hardening', 'Protective Measures']
      },
      {
        id: 'step-6-evaluation-reporting',
        title: 'Step 6: Security Evaluation & Reporting',
        description: 'Conduct comprehensive security assessments and create reports',
        duration: '2 weeks',
        topics: ['Security Assessment', 'Vulnerability Scoring', 'Report Writing', 'Remediation Plans', 'Executive Summaries'],
        skills_gained: ['Security Assessment', 'Technical Writing', 'Risk Communication']
      }
    ],
    tags: ['ai-security', 'redteaming', 'adversarial', 'safety'],
    popularity_score: 4,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$90k - $160k',
    job_opportunities: ['AI Security Specialist', 'ML Security Engineer', 'AI Safety Researcher'],
    industry_demand: 'Medium'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Master the art of crafting effective prompts for AI language models',
    role: 'Prompt Engineer',
    primary_skills: ['Prompt Design', 'AI Communication', 'LLM Understanding', 'Optimization'],
    secondary_skills: ['Chain-of-Thought', 'Few-shot Learning', 'AI Ethics', 'Model Evaluation'],
    category: 'AI/ML',
    subcategory: 'Prompt Engineering',
    difficulty: 'Beginner',
    duration: '2-3 months',
    prerequisites: ['AI basics', 'Communication skills', 'Critical thinking'],
    steps: [
      {
        id: 'step-1-prompt-basics',
        title: 'Step 1: Prompt Engineering Basics',
        description: 'Learn fundamental prompt design principles and structure',
        duration: '1-2 weeks',
        topics: ['Prompt Anatomy', 'Clear Instructions', 'Context Setting', 'Output Formatting', 'Basic Techniques'],
        skills_gained: ['Prompt Structure', 'Clear Communication', 'Basic Prompting']
      },
      {
        id: 'step-2-advanced-techniques',
        title: 'Step 2: Advanced Prompting Techniques',
        description: 'Master sophisticated prompting strategies and methods',
        duration: '2 weeks',
        topics: ['Chain-of-Thought', 'Few-shot Learning', 'Role-based Prompting', 'System Messages', 'Temperature Control'],
        skills_gained: ['Advanced Techniques', 'Strategic Prompting', 'Context Management']
      },
      {
        id: 'step-3-domain-applications',
        title: 'Step 3: Domain-Specific Applications',
        description: 'Apply prompt engineering to specific use cases and domains',
        duration: '2-3 weeks',
        topics: ['Content Creation', 'Code Generation', 'Data Analysis', 'Creative Writing', 'Business Applications'],
        skills_gained: ['Domain Expertise', 'Use Case Application', 'Specialized Prompting']
      },
      {
        id: 'step-4-optimization-evaluation',
        title: 'Step 4: Prompt Optimization & Evaluation',
        description: 'Learn to optimize prompts and evaluate their effectiveness',
        duration: '2 weeks',
        topics: ['A/B Testing', 'Performance Metrics', 'Iterative Improvement', 'Quality Assessment', 'Bias Detection'],
        skills_gained: ['Optimization Techniques', 'Quality Evaluation', 'Performance Analysis']
      },
      {
        id: 'step-5-safety-ethics',
        title: 'Step 5: AI Safety & Ethical Considerations',
        description: 'Understand responsible AI use and ethical prompt engineering',
        duration: '1-2 weeks',
        topics: ['AI Ethics', 'Bias Mitigation', 'Safety Guidelines', 'Responsible Use', 'Content Filtering'],
        skills_gained: ['Ethical AI', 'Safety Practices', 'Responsible Prompting']
      }
    ],
    tags: ['prompt-engineering', 'ai', 'llm', 'communication'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$65k - $120k',
    job_opportunities: ['Prompt Engineer', 'AI Specialist', 'Content Strategist'],
    industry_demand: 'High'
  },
  // ADDITIONAL SPECIALIZED ROADMAPS
  {
    id: 'technical-writing',
    title: 'Technical Writing',
    description: 'Master the art of creating clear and effective technical documentation',
    role: 'Technical Writer',
    primary_skills: ['Technical Writing', 'Documentation', 'Communication', 'Research'],
    secondary_skills: ['Markdown', 'Git', 'APIs', 'User Experience'],
    category: 'Content',
    subcategory: 'Technical Communication',
    difficulty: 'Beginner',
    duration: '3-4 months',
    prerequisites: ['Writing skills', 'Basic technical knowledge', 'Communication skills'],
    steps: [
      {
        id: 'step-1-writing-fundamentals',
        title: 'Step 1: Technical Writing Fundamentals',
        description: 'Master core principles of clear and effective technical communication',
        duration: '2 weeks',
        topics: ['Writing Principles', 'Audience Analysis', 'Document Structure', 'Plain Language', 'Clarity Techniques'],
        skills_gained: ['Clear Writing', 'Audience Awareness', 'Document Structure']
      },
      {
        id: 'step-2-documentation-types',
        title: 'Step 2: Documentation Types & Formats',
        description: 'Learn different types of technical documentation and their purposes',
        duration: '2-3 weeks',
        topics: ['API Documentation', 'User Manuals', 'How-to Guides', 'Reference Materials', 'Tutorials'],
        skills_gained: ['Documentation Types', 'Format Selection', 'Content Organization']
      },
      {
        id: 'step-3-tools-platforms',
        title: 'Step 3: Documentation Tools & Platforms',
        description: 'Master modern technical writing tools and publishing platforms',
        duration: '2 weeks',
        topics: ['Markdown', 'Git-based Workflows', 'Documentation Generators', 'CMS Platforms', 'Collaboration Tools'],
        skills_gained: ['Documentation Tools', 'Publishing Workflows', 'Version Control']
      },
      {
        id: 'step-4-api-documentation',
        title: 'Step 4: API & Developer Documentation',
        description: 'Specialize in writing documentation for developers and APIs',
        duration: '2-3 weeks',
        topics: ['API Reference', 'Code Examples', 'SDK Documentation', 'Developer Guides', 'Interactive Docs'],
        skills_gained: ['API Documentation', 'Developer Communication', 'Technical Examples']
      },
      {
        id: 'step-5-user-experience',
        title: 'Step 5: Information Architecture & UX',
        description: 'Design user-friendly documentation experiences and information architecture',
        duration: '2 weeks',
        topics: ['Information Architecture', 'Navigation Design', 'Search Optimization', 'User Testing', 'Accessibility'],
        skills_gained: ['Information Design', 'User Experience', 'Accessibility Standards']
      },
      {
        id: 'step-6-collaboration-metrics',
        title: 'Step 6: Collaboration & Success Metrics',
        description: 'Learn to work with cross-functional teams and measure documentation success',
        duration: '1-2 weeks',
        topics: ['Cross-team Collaboration', 'Review Processes', 'Analytics & Metrics', 'Continuous Improvement', 'Feedback Integration'],
        skills_gained: ['Team Collaboration', 'Performance Measurement', 'Process Improvement']
      }
    ],
    tags: ['technical-writing', 'documentation', 'communication', 'content'],
    popularity_score: 5,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$55k - $95k',
    job_opportunities: ['Technical Writer', 'Documentation Specialist', 'Content Strategist'],
    industry_demand: 'Medium'
  },
  {
    id: 'software-architect-advanced',
    title: 'Software Architect',
    description: 'Learn to design and oversee large-scale software architecture',
    role: 'Software Architect',
    primary_skills: ['Software Architecture', 'System Design', 'Technology Strategy', 'Leadership'],
    secondary_skills: ['Cloud Architecture', 'Microservices', 'Security', 'Performance'],
    category: 'Architecture',
    subcategory: 'Software Architecture',
    difficulty: 'Advanced',
    duration: '6-8 months',
    prerequisites: ['Senior development experience', 'System design knowledge', 'Leadership skills'],
    steps: [
      {
        id: 'step-1-architecture-fundamentals',
        title: 'Step 1: Software Architecture Fundamentals',
        description: 'Learn core architecture principles, patterns, and design methodologies',
        duration: '2-3 weeks',
        topics: ['Architecture Patterns', 'Design Principles', 'SOLID Principles', 'Clean Architecture', 'Domain-Driven Design'],
        skills_gained: ['Architecture Foundations', 'Design Patterns', 'System Thinking']
      },
      {
        id: 'step-2-system-design',
        title: 'Step 2: Large-Scale System Design',
        description: 'Master designing scalable and distributed systems',
        duration: '3-4 weeks',
        topics: ['Scalability Patterns', 'Load Balancing', 'Caching Strategies', 'Database Sharding', 'CAP Theorem'],
        skills_gained: ['System Design', 'Scalability Planning', 'Distributed Systems']
      },
      {
        id: 'step-3-microservices-architecture',
        title: 'Step 3: Microservices & Service Architecture',
        description: 'Design and implement microservices-based architectures',
        duration: '2-3 weeks',
        topics: ['Microservices Patterns', 'API Gateway', 'Service Mesh', 'Event-Driven Architecture', 'Service Discovery'],
        skills_gained: ['Microservices Design', 'API Architecture', 'Service Integration']
      },
      {
        id: 'step-4-cloud-architecture',
        title: 'Step 4: Cloud-Native Architecture',
        description: 'Architect solutions for cloud environments and platforms',
        duration: '2-3 weeks',
        topics: ['Cloud Design Patterns', 'Serverless Architecture', 'Container Orchestration', 'Multi-Cloud Strategy', 'Cost Optimization'],
        skills_gained: ['Cloud Architecture', 'DevOps Integration', 'Infrastructure Design']
      },
      {
        id: 'step-5-security-performance',
        title: 'Step 5: Security & Performance Architecture',
        description: 'Integrate security and performance considerations into architecture',
        duration: '2 weeks',
        topics: ['Security by Design', 'Performance Optimization', 'Monitoring Architecture', 'Risk Assessment', 'Compliance'],
        skills_gained: ['Security Architecture', 'Performance Engineering', 'Risk Management']
      },
      {
        id: 'step-6-leadership-governance',
        title: 'Step 6: Technical Leadership & Governance',
        description: 'Lead architecture decisions and establish governance processes',
        duration: '2 weeks',
        topics: ['Architecture Governance', 'Technical Decision Making', 'Team Leadership', 'Documentation Standards', 'Technology Roadmaps'],
        skills_gained: ['Technical Leadership', 'Architecture Governance', 'Strategic Planning']
      }
    ],
    tags: ['software-architect', 'architecture', 'leadership', 'strategy'],
    popularity_score: 7,
    created_at: '2025-01-01',
    updated_at: '2025-01-01',
    salary_range: '$120k - $200k',
    job_opportunities: ['Software Architect', 'Principal Engineer', 'CTO'],
    industry_demand: 'High'
  }
];

// Helper functions to manage roadmaps
export function getAllRoadmaps(): Roadmap[] {
  // Remove duplicates based on ID
  const uniqueRoadmaps = roadmapsDatabase.filter((roadmap, index, self) => 
    index === self.findIndex(r => r.id === roadmap.id)
  );
  return uniqueRoadmaps;
}

export function getRoadmapById(id: string): Roadmap | undefined {
  return getAllRoadmaps().find(roadmap => roadmap.id === id);
}

export function getRoadmapsByCategory(category: string): Roadmap[] {
  const allRoadmaps = getAllRoadmaps();
  if (category === 'All Roadmaps') return allRoadmaps;
  return allRoadmaps.filter(roadmap => 
    roadmap.category.toLowerCase().includes(category.toLowerCase())
  );
}

export function searchRoadmaps(query: string): Roadmap[] {
  const searchTerm = query.toLowerCase();
  return getAllRoadmaps().filter(roadmap =>
    roadmap.title.toLowerCase().includes(searchTerm) ||
    roadmap.description.toLowerCase().includes(searchTerm) ||
    roadmap.role.toLowerCase().includes(searchTerm) ||
    roadmap.category.toLowerCase().includes(searchTerm) ||
    roadmap.primary_skills.some((skill: string) => skill.toLowerCase().includes(searchTerm)) ||
    roadmap.secondary_skills.some((skill: string) => skill.toLowerCase().includes(searchTerm)) ||
    roadmap.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm))
  );
}

export function getFeaturedRoadmaps(): Roadmap[] {
  return getAllRoadmaps().filter(roadmap => roadmap.featured);
}

export function getRoadmapsByDifficulty(difficulty: string): Roadmap[] {
  return getAllRoadmaps().filter(roadmap => roadmap.difficulty === difficulty);
}

// Categories structure for your roadmaps
export const CATEGORIES = {
  'Web Development': {
    icon: '🌐',
    subcategories: ['Frontend', 'Backend', 'Full Stack', 'UI/UX', 'Web3']
  },
  'Mobile Development': {
    icon: '📱',
    subcategories: ['iOS', 'Android', 'React Native', 'Flutter', 'Xamarin']
  },
  'Data Science': {
    icon: '📊',
    subcategories: ['Machine Learning', 'Data Analysis', 'Big Data', 'AI', 'Statistics']
  },
  'DevOps': {
    icon: '⚙️',
    subcategories: ['CI/CD', 'Cloud', 'Containers', 'Monitoring', 'Infrastructure']
  },
  'Cybersecurity': {
    icon: '🔒',
    subcategories: ['Ethical Hacking', 'Network Security', 'Cloud Security', 'Malware Analysis']
  },
  'Game Development': {
    icon: '🎮',
    subcategories: ['Unity', 'Unreal Engine', '2D Games', '3D Games', 'Mobile Games']
  },
  'Blockchain': {
    icon: '⛓️',
    subcategories: ['Smart Contracts', 'DeFi', 'NFTs', 'Web3', 'Cryptocurrency']
  },
  'Design': {
    icon: '🎨',
    subcategories: ['UI Design', 'UX Design', 'Graphic Design', 'Product Design']
  }
} as const

// Roles structure for career-focused roadmaps
export const ROLES = {
  'Frontend Developer': {
    icon: '🎨',
    primary_categories: ['Web Development'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular']
  },
  'Backend Developer': {
    icon: '🔧',
    primary_categories: ['Web Development'],
    skills: ['Node.js', 'Python', 'Java', 'Database', 'APIs', 'Server']
  },
  'Full Stack Developer': {
    icon: '🔄',
    primary_categories: ['Web Development'],
    skills: ['Frontend', 'Backend', 'Database', 'DevOps']
  },
  'Data Scientist': {
    icon: '📈',
    primary_categories: ['Data Science'],
    skills: ['Python', 'R', 'Statistics', 'Machine Learning', 'SQL']
  },
  'Mobile Developer': {
    icon: '📱',
    primary_categories: ['Mobile Development'],
    skills: ['Swift', 'Kotlin', 'React Native', 'Flutter']
  },
  'DevOps Engineer': {
    icon: '⚙️',
    primary_categories: ['DevOps'],
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux']
  },
  'Cybersecurity Specialist': {
    icon: '🛡️',
    primary_categories: ['Cybersecurity'],
    skills: ['Network Security', 'Penetration Testing', 'Cryptography']
  }
} as const

// Helper functions for role and skill-based filtering
export function getRoadmapsByRole(role: string): Roadmap[] {
  return getAllRoadmaps().filter(roadmap => roadmap.role === role);
}

export function getRoadmapsBySkill(skill: string): Roadmap[] {
  return getAllRoadmaps().filter(roadmap => 
    roadmap.primary_skills.includes(skill) || 
    roadmap.secondary_skills.includes(skill)
  );
}

// Categories for filtering (simplified for UI)
export const roadmapCategories = [
  { name: 'All Roadmaps', icon: '🚀' },
  { name: 'Web Development', icon: '🌐' },
  { name: 'Mobile Development', icon: '📱' },
  { name: 'Data Science', icon: '📊' },
  { name: 'AI/ML', icon: '🤖' },
  { name: 'DevOps', icon: '⚙️' },
  { name: 'Cybersecurity', icon: '🔒' },
  { name: 'Blockchain', icon: '⛓️' },
  { name: 'Game Development', icon: '🎮' },
  { name: 'Design', icon: '🎨' },
  { name: 'Management', icon: '👔' },
  { name: 'Other', icon: '📚' }
];
// Enhanced Roadmaps Data Structure
// Comprehensive career roadmaps with step-by-step learning paths

export interface RoadmapStep {
  id: string
  title: string
  description: string
  skills: string[]
  resources: Array<{
    title: string
    url: string
    type: 'course' | 'documentation' | 'video' | 'article' | 'practice'
    duration?: string
  }>
  prerequisites?: string[]
  estimatedTime: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export interface Roadmap {
  id: string
  title: string
  description: string
  category: 'role' | 'skill'
  icon: string
  color: string
  gradient: string
  totalSteps: number
  estimatedDuration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  steps: RoadmapStep[]
}

export const roleBasedRoadmaps: Roadmap[] = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Master modern web development with HTML, CSS, JavaScript, React, and build stunning user interfaces.',
    category: 'role',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
    totalSteps: 12,
    estimatedDuration: '6-12 months',
    difficulty: 'beginner',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
    steps: [
      {
        id: 'html-basics',
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web pages with semantic HTML structure.',
        skills: ['HTML5 elements', 'Semantic markup', 'Forms and validation', 'Accessibility basics'],
        resources: [
          {
            title: 'MDN HTML Basics',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
            type: 'documentation',
            duration: '4 hours'
          },
          {
            title: 'HTML Full Course - FreeCodeCamp',
            url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
            type: 'video',
            duration: '8 hours'
          }
        ],
        estimatedTime: '1-2 weeks',
        difficulty: 'beginner'
      },
      {
        id: 'css-fundamentals',
        title: 'CSS Styling & Layout',
        description: 'Style your web pages with CSS, including modern layout techniques.',
        skills: ['CSS selectors', 'Flexbox', 'Grid', 'Responsive design', 'CSS animations'],
        resources: [
          {
            title: 'CSS Complete Course',
            url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc',
            type: 'video',
            duration: '12 hours'
          },
          {
            title: 'CSS Grid Garden',
            url: 'https://cssgridgarden.com/',
            type: 'practice',
            duration: '2 hours'
          }
        ],
        prerequisites: ['html-basics'],
        estimatedTime: '2-3 weeks',
        difficulty: 'beginner'
      },
      {
        id: 'javascript-basics',
        title: 'JavaScript Programming',
        description: 'Learn JavaScript fundamentals including variables, functions, and DOM manipulation.',
        skills: ['Variables and data types', 'Functions', 'DOM manipulation', 'Events', 'ES6+ features'],
        resources: [
          {
            title: 'JavaScript.info',
            url: 'https://javascript.info/',
            type: 'documentation',
            duration: '20 hours'
          },
          {
            title: 'JavaScript Projects for Beginners',
            url: 'https://www.youtube.com/watch?v=3PHXvlpOkf4',
            type: 'video',
            duration: '8 hours'
          }
        ],
        prerequisites: ['css-fundamentals'],
        estimatedTime: '3-4 weeks',
        difficulty: 'intermediate'
      },
      {
        id: 'react-fundamentals',
        title: 'React Framework',
        description: 'Build interactive user interfaces with React components and hooks.',
        skills: ['Components', 'Props and State', 'Hooks', 'Event handling', 'Conditional rendering'],
        resources: [
          {
            title: 'Official React Tutorial',
            url: 'https://react.dev/learn',
            type: 'documentation',
            duration: '15 hours'
          },
          {
            title: 'React Course - Scrimba',
            url: 'https://scrimba.com/learn/learnreact',
            type: 'course',
            duration: '12 hours'
          }
        ],
        prerequisites: ['javascript-basics'],
        estimatedTime: '4-6 weeks',
        difficulty: 'intermediate'
      }
    ]
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    description: 'Build robust server-side applications with Node.js, databases, APIs, and cloud infrastructure.',
    category: 'role',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-500',
    gradient: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20',
    totalSteps: 15,
    estimatedDuration: '8-15 months',
    difficulty: 'intermediate',
    tags: ['Node.js', 'MongoDB', 'Express', 'REST APIs', 'Authentication'],
    steps: [
      {
        id: 'nodejs-basics',
        title: 'Node.js Fundamentals',
        description: 'Learn server-side JavaScript with Node.js runtime environment.',
        skills: ['Node.js runtime', 'NPM packages', 'File system', 'HTTP modules', 'Asynchronous programming'],
        resources: [
          {
            title: 'Node.js Official Docs',
            url: 'https://nodejs.org/en/docs/',
            type: 'documentation',
            duration: '10 hours'
          },
          {
            title: 'Node.js Complete Course',
            url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
            type: 'video',
            duration: '13 hours'
          }
        ],
        estimatedTime: '2-3 weeks',
        difficulty: 'beginner'
      },
      {
        id: 'express-framework',
        title: 'Express.js Framework',
        description: 'Build web applications and APIs using Express.js framework.',
        skills: ['Express setup', 'Routing', 'Middleware', 'Error handling', 'Template engines'],
        resources: [
          {
            title: 'Express.js Official Guide',
            url: 'https://expressjs.com/en/guide/routing.html',
            type: 'documentation',
            duration: '8 hours'
          },
          {
            title: 'Build REST API with Node.js',
            url: 'https://www.youtube.com/watch?v=fgTGADljAeg',
            type: 'video',
            duration: '3 hours'
          }
        ],
        prerequisites: ['nodejs-basics'],
        estimatedTime: '2-3 weeks',
        difficulty: 'intermediate'
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Science',
    description: 'Analyze data, build ML models, and extract insights using Python, pandas, and machine learning.',
    category: 'role',
    icon: '📊',
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
    totalSteps: 18,
    estimatedDuration: '10-18 months',
    difficulty: 'intermediate',
    tags: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Statistics'],
    steps: [
      {
        id: 'python-fundamentals',
        title: 'Python Programming',
        description: 'Master Python programming language for data science applications.',
        skills: ['Python syntax', 'Data structures', 'Functions', 'OOP concepts', 'Libraries'],
        resources: [
          {
            title: 'Python for Everybody',
            url: 'https://www.coursera.org/specializations/python',
            type: 'course',
            duration: '40 hours'
          },
          {
            title: 'Automate the Boring Stuff',
            url: 'https://automatetheboringstuff.com/',
            type: 'documentation',
            duration: '20 hours'
          }
        ],
        estimatedTime: '4-6 weeks',
        difficulty: 'beginner'
      }
    ]
  }
]

export const skillBasedRoadmaps: Roadmap[] = [
  {
    id: 'react-mastery',
    title: 'React',
    description: 'Component-based UI library for building interactive interfaces',
    category: 'skill',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500',
    gradient: 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20',
    totalSteps: 8,
    estimatedDuration: '3-6 months',
    difficulty: 'intermediate',
    tags: ['React', 'JSX', 'Hooks', 'State Management', 'Redux'],
    steps: [
      {
        id: 'react-basics',
        title: 'React Fundamentals',
        description: 'Learn the core concepts of React including components, props, and state.',
        skills: ['JSX syntax', 'Components', 'Props', 'State', 'Event handling'],
        resources: [
          {
            title: 'React Official Tutorial',
            url: 'https://react.dev/learn',
            type: 'documentation',
            duration: '8 hours'
          },
          {
            title: 'React Crash Course',
            url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
            type: 'video',
            duration: '2 hours'
          }
        ],
        estimatedTime: '1-2 weeks',
        difficulty: 'beginner'
      }
    ]
  },
  {
    id: 'nodejs-mastery',
    title: 'Node.js',
    description: 'JavaScript runtime for building scalable server applications',
    category: 'skill',
    icon: '🟢',
    color: 'from-green-400 to-emerald-500',
    gradient: 'bg-gradient-to-r from-green-400/20 to-emerald-500/20',
    totalSteps: 10,
    estimatedDuration: '4-8 months',
    difficulty: 'intermediate',
    tags: ['Node.js', 'Express', 'NPM', 'APIs', 'Async Programming'],
    steps: [
      {
        id: 'nodejs-setup',
        title: 'Node.js Environment Setup',
        description: 'Set up Node.js development environment and understand the runtime.',
        skills: ['Node.js installation', 'NPM basics', 'Module system', 'Package.json'],
        resources: [
          {
            title: 'Node.js Getting Started',
            url: 'https://nodejs.org/en/docs/guides/getting-started-guide/',
            type: 'documentation',
            duration: '3 hours'
          }
        ],
        estimatedTime: '1 week',
        difficulty: 'beginner'
      }
    ]
  }
]

export const getAllRoadmaps = (): Roadmap[] => {
  return [...roleBasedRoadmaps, ...skillBasedRoadmaps]
}

export const getRoadmapById = (id: string): Roadmap | undefined => {
  return getAllRoadmaps().find(roadmap => roadmap.id === id)
}

export const getRoadmapsByCategory = (category: 'role' | 'skill'): Roadmap[] => {
  return getAllRoadmaps().filter(roadmap => roadmap.category === category)
}
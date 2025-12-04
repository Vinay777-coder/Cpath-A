'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { localAuth } from '@/lib/local-auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  ArrowLeft, HelpCircle, MessageCircle, TrendingUp, Brain, Target, Clock, Award, BookOpen, Code, Lightbulb, ArrowRight, ExternalLink, Building, Globe, Zap, Trophy, CheckCircle, GraduationCap, Rocket, Shield, Coffee, Smartphone, Database, Palette, Server, Monitor, Cpu, Cloud, DollarSign, Users, MapPin, Star, Briefcase, ChevronRight, Flag, Route, Compass, Activity, BarChart3, AlertCircle
} from 'lucide-react'
import Link from 'next/link'

interface CareerPath {
  id: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  timeToStart: string
  averageSalary: string
  jobDemand: 'Very High' | 'High' | 'Medium' | 'Low'
  skills: string[]
  pros: string[]
  cons: string[]
  personalityFit: string[]
  industries: string[]
  icon: any
  color: string
  roadmapId?: string
}

interface CareerDoubt {
  id: string
  question: string
  category: string
  commonAnswers: string[]
  detailedAnswer: string
  relatedPaths: string[]
  icon: any
}

interface CareerSuggestion {
  title: string
  match: number
  description: string
  skills: string[]
  roadmap: string
  externalLinks: { name: string; url: string }[]
  salary: string
  timeToJob: string
  pros: string[]
  workEnvironment: string
  aiInsight?: string
}

export default function CareerSuggestionsPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeTab, setActiveTab] = useState<'doubts' | 'paths'>('paths')
  const router = useRouter()

  useEffect(() => {
    function loadData() {
      if (!localAuth.isSignedIn()) {
        router.push('/login')
        return
      }

      const currentUser = localAuth.getCurrentUser()
      setUser(currentUser)
      setLoading(false)
    }

    loadData()
  }, [router])

  // 50+ Most asked tech career doubts from internet
  const careerDoubts: CareerDoubt[] = [
    // Education & Learning
    {
      id: '1',
      question: 'Should I learn coding without a computer science degree?',
      category: 'Education',
      commonAnswers: [
        'Yes, many successful developers are self-taught',
        'Focus on building a strong portfolio',
        'Consider coding bootcamps for structured learning',
        'Online resources are abundant and high-quality'
      ],
      detailedAnswer: 'Absolutely! The tech industry values skills over degrees. Many top developers at companies like Google, Apple, and Facebook don\'t have CS degrees. Focus on building real projects, contributing to open source, and continuously learning. Your portfolio and problem-solving skills matter more than your educational background.',
      relatedPaths: ['frontend-development', 'backend-development', 'full-stack'],
      icon: GraduationCap
    },
    {
      id: '2', 
      question: 'Which programming language should I learn first?',
      category: 'Skills',
      commonAnswers: [
        'JavaScript for web development',
        'Python for beginners and data science',
        'Java for enterprise development',
        'Choose based on your career goals'
      ],
      detailedAnswer: 'Your first language depends on your goals: JavaScript if you want to build websites and web apps, Python for data science/AI or if you want an easy start, Java for enterprise applications, Swift for iOS apps, or Kotlin for Android. Don\'t overthink it - the concepts transfer between languages.',
      relatedPaths: ['frontend-development', 'python-developer', 'mobile-development'],
      icon: Code
    },
    {
      id: '3',
      question: 'Are coding bootcamps worth it in 2025?',
      category: 'Education',
      commonAnswers: [
        'Good for structured learning and networking',
        'Expensive but can accelerate learning',
        'Job placement rates vary by bootcamp',
        'Self-learning is cheaper but requires discipline'
      ],
      detailedAnswer: 'Bootcamps can be worth it if you need structure, accountability, and networking opportunities. They\'re particularly valuable for career changers who want intensive, focused training. However, they\'re expensive ($10k-20k+) and success depends on your commitment. Research job placement rates and alumni outcomes before choosing.',
      relatedPaths: ['frontend-development', 'backend-development', 'full-stack'],
      icon: BookOpen
    },
    {
      id: '4',
      question: 'How long does it take to become job-ready as a developer?',
      category: 'Timeline',
      commonAnswers: [
        '6-12 months with dedicated study',
        'Bootcamps: 3-6 months intensive',
        'Self-learning: 12-18 months part-time',
        'Depends on prior experience and dedication'
      ],
      detailedAnswer: 'With consistent daily practice (2-4 hours), you can become job-ready in 6-12 months. Bootcamp graduates often find jobs in 3-6 months, while self-learners typically take 12-18 months. The key is building projects, practicing coding problems, and networking. Quality of learning matters more than speed.',
      relatedPaths: ['frontend-development', 'backend-development'],
      icon: Clock
    },
    {
      id: '5',
      question: 'Is math required for programming?',
      category: 'Skills',
      commonAnswers: [
        'Basic math is sufficient for most programming',
        'Advanced math needed for AI/ML and graphics',
        'Logic and problem-solving more important',
        'You can learn math as needed'
      ],
      detailedAnswer: 'For most programming jobs, you only need basic math (algebra, logic). However, certain fields like machine learning, game development, and computer graphics require advanced math. The most important skills are logical thinking and problem-solving. You can always learn specific math concepts when needed for your chosen specialization.',
      relatedPaths: ['frontend-development', 'backend-development', 'data-science'],
      icon: Target
    },

    // Career Change & Age
    {
      id: '6',
      question: 'Is it too late to switch to tech at 30+?',
      category: 'Career Change',
      commonAnswers: [
        'Never too late - many successful career changers',
        'Your previous experience is valuable',
        'Tech companies value diverse backgrounds',
        'Focus on learning and building projects'
      ],
      detailedAnswer: 'It\'s never too late! Many developers started in their 30s, 40s, or even 50s. Your previous career experience brings valuable skills like project management, communication, and domain expertise. Companies actively seek diverse perspectives and mature professionals who bring stability and different viewpoints.',
      relatedPaths: ['frontend-development', 'product-management', 'data-analyst'],
      icon: Rocket
    },
    {
      id: '7',
      question: 'How do I explain career gap in tech interviews?',
      category: 'Career Change',
      commonAnswers: [
        'Be honest about your learning journey',
        'Highlight skills gained during the gap',
        'Show continuous learning and projects',
        'Focus on your motivation and goals'
      ],
      detailedAnswer: 'Be transparent about your career transition and frame it positively. Emphasize what you learned during your gap - new skills, projects you built, courses you completed. Show that you used the time productively to prepare for your tech career. Employers appreciate honesty and dedication to learning.',
      relatedPaths: ['frontend-development', 'backend-development', 'career-change'],
      icon: Users
    },
    {
      id: '8',
      question: 'Should I quit my job to learn coding full-time?',
      category: 'Career Change',
      commonAnswers: [
        'Only if you have 6-12 months of savings',
        'Try learning part-time first',
        'Consider taking a sabbatical or leave',
        'Freelance/part-time work while learning'
      ],
      detailedAnswer: 'Only quit if you have sufficient savings (6-12 months expenses) and a solid learning plan. Most successful career changers learn while working, dedicating 10-20 hours per week. This approach is less risky and shows employers you can manage multiple responsibilities. Consider a sabbatical or reduced hours if possible.',
      relatedPaths: ['career-transition', 'freelance', 'part-time-learning'],
      icon: DollarSign
    },

    // Job Search & Experience
    {
      id: '9',
      question: 'How do I get my first tech job without experience?',
      category: 'Job Search',
      commonAnswers: [
        'Build impressive personal projects',
        'Contribute to open source projects',
        'Network with developers and recruiters',
        'Apply to junior/entry-level positions',
        'Consider internships or apprenticeships'
      ],
      detailedAnswer: 'Focus on building a strong portfolio with 3-5 projects that solve real problems. Contribute to open source to show collaboration skills. Network through tech meetups, LinkedIn, and Twitter. Apply broadly to junior positions, and don\'t be discouraged by rejections. Consider freelancing small projects to build experience and testimonials.',
      relatedPaths: ['frontend-development', 'backend-development', 'freelancer'],
      icon: Briefcase
    },
    {
      id: '10',
      question: 'What should I put in my portfolio as a beginner?',
      category: 'Job Search',
      commonAnswers: [
        '3-5 diverse projects showing different skills',
        'Include live demos and source code',
        'Write clear documentation and READMEs',
        'Show progression from simple to complex'
      ],
      detailedAnswer: 'Create 3-5 projects that demonstrate different skills: a responsive website, a web app with API integration, and a full-stack project. Include live demos, clean code on GitHub, and detailed READMEs explaining your process. Show both technical skills and problem-solving abilities. Quality over quantity is key.',
      relatedPaths: ['frontend-development', 'full-stack', 'portfolio-building'],
      icon: Building
    },
    {
      id: '11',
      question: 'How many applications should I send before getting interviews?',
      category: 'Job Search',
      commonAnswers: [
        'Expect 100-200 applications for first job',
        'Focus on quality applications over quantity',
        'Tailor resume and cover letter for each role',
        'Follow up with networking and referrals'
      ],
      detailedAnswer: 'For entry-level positions, expect to send 100-200 applications before getting consistent interviews. This is normal and not a reflection of your abilities. Focus on applying to companies where you meet 60-70% of requirements. Customize your applications, and try to get referrals through networking - they significantly increase response rates.',
      relatedPaths: ['job-search-strategy', 'networking', 'interview-prep'],
      icon: Users
    },
    {
      id: '12',
      question: 'Should I apply for jobs even if I don\'t meet all requirements?',
      category: 'Job Search',
      commonAnswers: [
        'Yes, requirements are often wish lists',
        'Apply if you meet 60-70% of requirements',
        'Companies often train for missing skills',
        'Confidence and potential matter more'
      ],
      detailedAnswer: 'Absolutely apply! Job requirements are often "wish lists" rather than hard requirements. If you meet 60-70% of the criteria and are excited about the role, apply. Many companies are willing to train motivated candidates. Your potential, attitude, and cultural fit often matter more than checking every box.',
      relatedPaths: ['job-application', 'confidence-building', 'skill-development'],
      icon: CheckCircle
    },

    // Skills & Technology Choices
    {
      id: '13',
      question: 'Should I specialize or be a generalist?',
      category: 'Strategy',
      commonAnswers: [
        'Start as generalist, then specialize',
        'T-shaped skills: broad knowledge, deep in one area',
        'Market demand varies by specialization',
        'Consider your interests and market needs'
      ],
      detailedAnswer: 'Start as a generalist to understand the full picture, then gradually specialize in areas you enjoy. Aim for T-shaped skills: broad understanding of technology with deep expertise in 1-2 areas. Specialization often leads to higher salaries, but generalists have more flexibility in job opportunities.',
      relatedPaths: ['full-stack', 'devops-engineer', 'solution-architect'],
      icon: Target
    },
    {
      id: '14',
      question: 'How important are certifications vs. real projects?',
      category: 'Skills',
      commonAnswers: [
        'Projects are more important for most roles',
        'Certifications help with cloud/enterprise tech',
        'Portfolio demonstrates real abilities',
        'Some companies require specific certifications'
      ],
      detailedAnswer: 'For most development roles, real projects trump certifications. A strong GitHub portfolio showing actual problem-solving skills is more valuable. However, certifications are crucial for cloud platforms (AWS, Azure), cybersecurity, and enterprise technologies. They also help with HR filters and salary negotiations.',
      relatedPaths: ['cloud-engineer', 'cyber-security', 'enterprise-developer'],
      icon: Award
    },
    {
      id: '15',
      question: 'Is React still worth learning in 2025?',
      category: 'Skills',
      commonAnswers: [
        'Yes, React is still the most popular framework',
        'Large ecosystem and job market',
        'Consider learning Vue or Angular too',
        'Focus on JavaScript fundamentals first'
      ],
      detailedAnswer: 'React remains the most popular frontend framework with the largest job market. It has excellent community support, extensive ecosystem, and is used by major companies. However, also consider Vue.js (easier learning curve) or Angular (enterprise focus). Most importantly, master JavaScript fundamentals first - frameworks come and go.',
      relatedPaths: ['frontend-development', 'react-developer', 'javascript-mastery'],
      icon: Code
    },
    {
      id: '16',
      question: 'Should I learn TypeScript as a beginner?',
      category: 'Skills',
      commonAnswers: [
        'Learn JavaScript first, then TypeScript',
        'TypeScript is increasingly popular in industry',
        'Helps catch errors and improve code quality',
        'Many companies use it for large applications'
      ],
      detailedAnswer: 'Start with JavaScript to understand the fundamentals, then learn TypeScript. TypeScript adds static typing to JavaScript, catching errors early and improving code quality. It\'s increasingly popular in enterprise environments and shows up in many job requirements. Learning it will make you more marketable.',
      relatedPaths: ['frontend-development', 'backend-development', 'typescript-specialist'],
      icon: Shield
    },
    {
      id: '17',
      question: 'What\'s the difference between frontend and backend development?',
      category: 'Skills',
      commonAnswers: [
        'Frontend: user interface and user experience',
        'Backend: server, database, and business logic',
        'Frontend uses HTML, CSS, JavaScript',
        'Backend uses various languages and databases'
      ],
      detailedAnswer: 'Frontend development focuses on what users see and interact with - websites, web apps, mobile interfaces. You work with HTML, CSS, JavaScript, and frameworks like React. Backend development handles server-side logic, databases, APIs, and infrastructure. Backend developers work with languages like Python, Java, Node.js, and manage databases and cloud services.',
      relatedPaths: ['frontend-development', 'backend-development', 'full-stack'],
      icon: Monitor
    },

    // Work Style & Environment
    {
      id: '18',
      question: 'Remote work vs. office - what\'s better for career growth?',
      category: 'Work Style',
      commonAnswers: [
        'Both have advantages for different people',
        'Office: better mentorship and networking',
        'Remote: flexibility and access to global jobs',
        'Hybrid might be the best of both worlds'
      ],
      detailedAnswer: 'Both have merits. Office work offers better mentorship, spontaneous learning, and networking opportunities, especially early in your career. Remote work provides flexibility, access to global job markets, and better work-life balance. Many companies now offer hybrid options, which can provide the best of both worlds.',
      relatedPaths: ['remote-developer', 'team-lead', 'consultant'],
      icon: Globe
    },
    {
      id: '19',
      question: 'How do I stay productive while working from home?',
      category: 'Work Style',
      commonAnswers: [
        'Create a dedicated workspace',
        'Establish a routine and boundaries',
        'Use productivity tools and techniques',
        'Regular communication with team'
      ],
      detailedAnswer: 'Set up a dedicated workspace, maintain regular hours, and establish clear boundaries between work and personal time. Use productivity techniques like Pomodoro, time-blocking, and task management tools. Over-communicate with your team through Slack, video calls, and regular check-ins. Take breaks and maintain social connections.',
      relatedPaths: ['remote-work', 'productivity', 'time-management'],
      icon: Coffee
    },
    {
      id: '20',
      question: 'What\'s it like working at a startup vs. big tech company?',
      category: 'Work Style',
      commonAnswers: [
        'Startups: faster pace, more responsibility, equity',
        'Big tech: better resources, stability, benefits',
        'Startups offer broader experience',
        'Big tech provides specialized deep work'
      ],
      detailedAnswer: 'Startups offer rapid growth, diverse responsibilities, potential equity upside, but with higher risk and longer hours. Big tech companies provide stability, excellent benefits, resources, and structured career paths, but potentially less individual impact. Choose based on your risk tolerance, career stage, and learning preferences.',
      relatedPaths: ['startup-life', 'big-tech', 'company-culture'],
      icon: Building
    },

    // Salary & Compensation
    {
      id: '21',
      question: 'What salary should I expect as a junior developer?',
      category: 'Salary',
      commonAnswers: [
        'Varies greatly by location and company size',
        'US: $60k-100k, major cities higher',
        'Remote work opens global opportunities',
        'Skills and portfolio matter more than years'
      ],
      detailedAnswer: 'Junior developer salaries vary widely: $45k-70k in smaller cities, $70k-120k in major tech hubs like SF/NYC. Remote work has created more opportunities with competitive salaries. Focus on building strong skills and portfolio rather than just years of experience. Startups might offer lower base but equity, while big tech offers higher total compensation.',
      relatedPaths: ['salary-negotiation', 'job-market', 'compensation-planning'],
      icon: DollarSign
    },
    {
      id: '22',
      question: 'How do I negotiate my first tech job offer?',
      category: 'Salary',
      commonAnswers: [
        'Research market rates for your role and location',
        'Consider total compensation, not just salary',
        'Be prepared to justify your value',
        'Don\'t be afraid to negotiate respectfully'
      ],
      detailedAnswer: 'Research salary ranges on Glassdoor, levels.fyi, and Payscale. Consider total compensation including benefits, equity, and growth opportunities. Prepare examples of your value and skills. Negotiate respectfully - most companies expect it. For your first role, focus on learning opportunities and company culture as much as salary.',
      relatedPaths: ['salary-negotiation', 'career-advancement', 'professional-development'],
      icon: TrendingUp
    },
    {
      id: '23',
      question: 'Is freelancing a good option for new developers?',
      category: 'Work Style',
      commonAnswers: [
        'Challenging without experience and network',
        'Good for building portfolio and skills',
        'Irregular income and no benefits',
        'Consider after gaining some experience'
      ],
      detailedAnswer: 'Freelancing as a new developer is challenging but possible. You\'ll need strong self-discipline, business skills, and ability to find clients. Start with small projects on Upwork or Fiverr to build reputation. Consider freelancing part-time while employed to build your network and skills. It offers flexibility but requires managing your own business.',
      relatedPaths: ['freelancing', 'independent-contractor', 'business-skills'],
      icon: Briefcase
    },

    // Specific Technology Doubts
    {
      id: '24',
      question: 'Should I learn mobile development (iOS/Android) or web development first?',
      category: 'Skills',
      commonAnswers: [
        'Web development has lower barrier to entry',
        'Mobile development offers specialized skills',
        'Consider cross-platform frameworks',
        'Web skills transfer to mobile development'
      ],
      detailedAnswer: 'Start with web development - it has a lower barrier to entry, broader job market, and fundamental concepts transfer to mobile. Once comfortable with web technologies, you can transition to mobile using React Native or Flutter, or learn native iOS/Android development. Mobile development offers specialized, higher-paying opportunities but with a smaller job market.',
      relatedPaths: ['web-development', 'mobile-development', 'cross-platform'],
      icon: Smartphone
    },
    {
      id: '25',
      question: 'Is artificial intelligence/machine learning overhyped?',
      category: 'Skills',
      commonAnswers: [
        'AI/ML is genuine career opportunity',
        'Requires strong math and statistics background',
        'High demand but competitive field',
        'Start with data analysis and Python'
      ],
      detailedAnswer: 'AI/ML is not overhyped - it\'s transforming industries and creating new job categories. However, it requires strong mathematical foundations and is highly competitive. Start by learning Python, statistics, and data analysis. Consider the broader data science field, which includes AI/ML but offers more entry-level opportunities.',
      relatedPaths: ['artificial-intelligence', 'machine-learning', 'data-science'],
      icon: Brain
    },
    {
      id: '26',
      question: 'Should I focus on cloud technologies like AWS?',
      category: 'Skills',
      commonAnswers: [
        'Cloud skills are in very high demand',
        'Start with one platform (AWS, Azure, GCP)',
        'Combines well with development skills',
        'Certifications are valuable in cloud field'
      ],
      detailedAnswer: 'Cloud technologies are essential in modern development. AWS dominates the market, but Azure and Google Cloud are also valuable. Start with basic cloud concepts, then dive deep into one platform. Cloud skills command high salaries and are needed across all company sizes. Consider getting certified to validate your knowledge.',
      relatedPaths: ['cloud-engineering', 'devops', 'aws-specialist'],
      icon: Cloud
    },
    {
      id: '27',
      question: 'What is DevOps and should I learn it?',
      category: 'Skills',
      commonAnswers: [
        'DevOps bridges development and operations',
        'High demand and excellent salaries',
        'Requires understanding of development and infrastructure',
        'Good career path for systematic thinkers'
      ],
      detailedAnswer: 'DevOps focuses on automating and streamlining software development and deployment processes. It combines development skills with infrastructure management, using tools like Docker, Kubernetes, and CI/CD pipelines. DevOps engineers are in high demand with excellent salaries. It\'s ideal if you enjoy both coding and system administration.',
      relatedPaths: ['devops-engineering', 'site-reliability', 'infrastructure'],
      icon: Zap
    },

    // Career Progression
    {
      id: '28',
      question: 'How do I advance from junior to senior developer?',
      category: 'Career Growth',
      commonAnswers: [
        'Focus on code quality and best practices',
        'Learn to mentor and help others',
        'Understand business context and requirements',
        'Take on larger, more complex projects'
      ],
      detailedAnswer: 'Advancement requires technical growth and leadership skills. Write clean, maintainable code, learn architectural patterns, and understand the business impact of your work. Start mentoring junior developers, contribute to technical decisions, and take ownership of features or projects. Typically takes 3-5 years with consistent learning and growth.',
      relatedPaths: ['senior-developer', 'technical-leadership', 'mentoring'],
      icon: Trophy
    },
    {
      id: '29',
      question: 'Should I become a tech lead or stay as an individual contributor?',
      category: 'Career Growth',
      commonAnswers: [
        'Tech lead involves more meetings and coordination',
        'Individual contributors can reach very high levels',
        'Consider your interests in people vs. technical work',
        'Both paths can lead to senior roles and high pay'
      ],
      detailedAnswer: 'Both paths are valuable and well-compensated. Tech leads spend more time on architecture, mentoring, and coordination with less hands-on coding. Senior individual contributors focus deeply on complex technical problems. Choose based on whether you prefer people management and broader impact (tech lead) or deep technical work (senior IC).',
      relatedPaths: ['technical-leadership', 'senior-engineer', 'people-management'],
      icon: Users
    },
    {
      id: '30',
      question: 'When should I start looking for a new job?',
      category: 'Career Growth',
      commonAnswers: [
        'When learning and growth opportunities diminish',
        'Every 2-3 years for salary optimization',
        'When company culture no longer fits',
        'When you want new challenges or technologies'
      ],
      detailedAnswer: 'Consider changing jobs when you\'re no longer learning, growing, or being challenged. Salary-wise, switching jobs every 2-3 years typically results in higher compensation than internal promotions. Also consider moves for better work-life balance, company culture, technology stack, or career advancement opportunities. Stay at least 1-2 years to gain meaningful experience.',
      relatedPaths: ['job-switching', 'career-planning', 'professional-growth'],
      icon: Rocket
    },

    // Industry & Trends
    {
      id: '31',
      question: 'Which tech companies are best to work for?',
      category: 'Industry',
      commonAnswers: [
        'FAANG companies offer prestige and high pay',
        'Consider company culture and values fit',
        'Startups offer rapid growth and equity',
        'Medium-sized companies balance stability and growth'
      ],
      detailedAnswer: 'There\'s no one-size-fits-all answer. FAANG (Facebook/Meta, Apple, Amazon, Netflix, Google) offers high compensation and prestige. Consider factors like company culture, work-life balance, growth opportunities, technology stack, and team quality. Research on Glassdoor, Blind, and LinkedIn to understand company cultures and employee experiences.',
      relatedPaths: ['company-research', 'tech-industry', 'culture-fit'],
      icon: Star
    },
    {
      id: '32',
      question: 'Is the tech job market saturated in 2025?',
      category: 'Industry',
      commonAnswers: [
        'High demand still exists for skilled developers',
        'Competition increased for entry-level positions',
        'Emerging technologies create new opportunities',
        'Focus on building strong, demonstrable skills'
      ],
      detailedAnswer: 'The tech job market remains strong overall, though competition has increased for entry-level positions due to more people entering the field. Demand is high for experienced developers and emerging technologies like AI, cloud, and cybersecurity. Focus on building strong skills, a solid portfolio, and continuous learning to stand out.',
      relatedPaths: ['job-market-analysis', 'skill-development', 'competitive-advantage'],
      icon: BarChart3
    },
    {
      id: '33',
      question: 'Will AI replace programmers?',
      category: 'Industry',
      commonAnswers: [
        'AI will augment, not replace programmers',
        'Focus on higher-level problem solving',
        'Learn to work with AI tools effectively',
        'Human creativity and judgment remain essential'
      ],
      detailedAnswer: 'AI tools like GitHub Copilot and ChatGPT are changing how we code, but won\'t replace programmers entirely. They handle routine coding tasks, allowing developers to focus on architecture, problem-solving, and creative solutions. Learn to use AI tools effectively while developing skills that complement AI: system design, user experience, and complex problem solving.',
      relatedPaths: ['ai-assisted-development', 'future-skills', 'human-ai-collaboration'],
      icon: Lightbulb
    },

    // Work-Life Balance & Personal
    {
      id: '34',
      question: 'How do I avoid burnout in tech?',
      category: 'Work Life',
      commonAnswers: [
        'Set clear boundaries between work and personal time',
        'Take regular breaks and vacations',
        'Find work that aligns with your values',
        'Maintain hobbies and relationships outside tech'
      ],
      detailedAnswer: 'Burnout is common in tech due to high pressure and rapid change. Set firm boundaries on work hours, take regular breaks, and use all your vacation time. Find meaning in your work and maintain interests outside of technology. Practice stress management, exercise regularly, and don\'t hesitate to seek help if you\'re struggling.',
      relatedPaths: ['work-life-balance', 'stress-management', 'mental-health'],
      icon: Activity
    },
    {
      id: '35',
      question: 'How important is networking in tech careers?',
      category: 'Career Growth',
      commonAnswers: [
        'Very important for job opportunities',
        'Attend meetups, conferences, and online communities',
        'Build genuine relationships, not just transactional ones',
        'Social media presence can help'
      ],
      detailedAnswer: 'Networking is crucial in tech - many opportunities come through referrals and personal connections. Attend local meetups, conferences, and join online communities like Twitter, LinkedIn, and Discord servers. Focus on building genuine relationships by helping others, sharing knowledge, and being authentic. A strong network can lead to job opportunities, mentorship, and collaboration.',
      relatedPaths: ['professional-networking', 'community-building', 'personal-branding'],
      icon: Users
    },

    // Specific Doubts for Different Roles
    {
      id: '36',
      question: 'What does a typical day look like for a software developer?',
      category: 'Job Reality',
      commonAnswers: [
        'Mix of coding, meetings, and problem-solving',
        'Code reviews and collaboration with team',
        'Planning and documentation',
        'Varies greatly by company and role'
      ],
      detailedAnswer: 'A typical day includes writing code, reviewing others\' code, attending meetings (standup, planning, reviews), debugging issues, and collaborating with team members. You might spend time researching solutions, updating documentation, or learning new technologies. The exact mix varies by company size, role seniority, and project phase.',
      relatedPaths: ['developer-lifestyle', 'day-in-life', 'job-expectations'],
      icon: Monitor
    },
    {
      id: '37',
      question: 'Is cybersecurity a good career path?',
      category: 'Skills',
      commonAnswers: [
        'High demand and job security',
        'Excellent salaries and growth potential',
        'Requires continuous learning',
        'Can be high-stress with on-call responsibilities'
      ],
      detailedAnswer: 'Cybersecurity offers excellent career prospects with high demand, job security, and competitive salaries. The field is growing rapidly as digital threats increase. However, it requires continuous learning to keep up with evolving threats, can be high-stress, and often involves on-call responsibilities. Consider specializing in areas like ethical hacking, compliance, or security architecture.',
      relatedPaths: ['cybersecurity', 'ethical-hacking', 'information-security'],
      icon: Shield
    },
    {
      id: '38',
      question: 'Should I learn game development?',
      category: 'Skills',
      commonAnswers: [
        'Competitive field with passionate developers',
        'Lower average salaries than other tech areas',
        'Requires creativity and technical skills',
        'Consider indie development vs. AAA studios'
      ],
      detailedAnswer: 'Game development is exciting but highly competitive with generally lower salaries than other tech fields. It requires both technical skills (programming, graphics) and creativity. Consider whether you prefer indie development (more creative freedom, higher risk) or AAA studios (more resources, potentially less creative control). Skills transfer well to other industries.',
      relatedPaths: ['game-development', 'unity-development', 'creative-coding'],
      icon: Target
    },

    // Learning & Resources
    {
      id: '39',
      question: 'What are the best free resources to learn programming?',
      category: 'Learning',
      commonAnswers: [
        'freeCodeCamp, YouTube, and MDN documentation',
        'Practice on Codewars, LeetCode, HackerRank',
        'Build projects and contribute to open source',
        'Join coding communities and forums'
      ],
      detailedAnswer: 'Excellent free resources include freeCodeCamp, YouTube tutorials, official documentation (MDN for web), and coding practice sites like Codewars. Build projects to apply what you learn, contribute to open source projects, and join communities like r/programming, Stack Overflow, and Discord servers. Consistency and practice matter more than the specific resource.',
      relatedPaths: ['self-learning', 'free-resources', 'coding-practice'],
      icon: BookOpen
    },
    {
      id: '40',
      question: 'How do I stay updated with new technologies?',
      category: 'Learning',
      commonAnswers: [
        'Follow tech blogs, newsletters, and podcasts',
        'Join developer communities on social media',
        'Experiment with new technologies in side projects',
        'Attend conferences and meetups'
      ],
      detailedAnswer: 'Stay current by following reputable tech blogs (Dev.to, Medium), subscribing to newsletters (JavaScript Weekly, Hacker Newsletter), and listening to podcasts. Follow key developers on Twitter/LinkedIn, join relevant subreddits and Discord communities. Most importantly, experiment with new technologies in side projects to gain hands-on experience.',
      relatedPaths: ['continuous-learning', 'tech-trends', 'professional-development'],
      icon: TrendingUp
    },

    // Additional High-Frequency Questions
    {
      id: '41',
      question: 'Do I need to learn algorithms and data structures?',
      category: 'Skills',
      commonAnswers: [
        'Essential for technical interviews',
        'Helps with problem-solving skills',
        'Not always used in daily work',
        'Focus on understanding concepts, not memorization'
      ],
      detailedAnswer: 'Algorithms and data structures are crucial for technical interviews at most companies, especially big tech. They also improve your problem-solving abilities and code efficiency. While you might not use them directly in daily work, understanding concepts like time/space complexity, sorting, and basic data structures makes you a better programmer. Practice on LeetCode and understand the concepts rather than memorizing solutions.',
      relatedPaths: ['interview-preparation', 'computer-science', 'problem-solving'],
      icon: Brain
    },
    {
      id: '42',
      question: 'How important is open source contribution?',
      category: 'Skills',
      commonAnswers: [
        'Great way to learn and build portfolio',
        'Shows collaboration and code quality skills',
        'Networking opportunities with other developers',
        'Not required but highly beneficial'
      ],
      detailedAnswer: 'Open source contributions are valuable for learning, portfolio building, and networking. They demonstrate your ability to work with existing codebases, collaborate with others, and write quality code. Start small with documentation improvements or bug fixes, then work up to features. It\'s not required for getting jobs, but it significantly helps, especially for remote positions.',
      relatedPaths: ['open-source', 'collaboration', 'portfolio-building'],
      icon: Globe
    },
    {
      id: '43',
      question: 'Should I get a master\'s degree in computer science?',
      category: 'Education',
      commonAnswers: [
        'Not necessary for most programming jobs',
        'Useful for research, AI/ML, or academic careers',
        'Consider cost vs. benefit',
        'Work experience often more valuable'
      ],
      detailedAnswer: 'A master\'s degree isn\'t necessary for most software development jobs. It\'s valuable for research positions, advanced AI/ML roles, or if you want to work in academia. Consider the opportunity cost - 2 years of work experience and salary might be more valuable than a degree. If you already have a bachelor\'s in another field, a coding bootcamp might be more practical.',
      relatedPaths: ['graduate-education', 'career-planning', 'education-alternatives'],
      icon: GraduationCap
    },
    {
      id: '44',
      question: 'Is it worth specializing in a niche technology?',
      category: 'Strategy',
      commonAnswers: [
        'Can lead to higher salaries and less competition',
        'Risk if technology becomes obsolete',
        'Research market demand and growth trends',
        'Balance specialization with broad skills'
      ],
      detailedAnswer: 'Specializing in niche technologies can be lucrative if there\'s demand but limited supply of experts. Research the technology\'s adoption rate, industry backing, and growth trajectory. Examples include blockchain, AR/VR, or specific enterprise platforms. Balance specialization with fundamental skills that transfer across technologies. Stay aware of industry trends to pivot if needed.',
      relatedPaths: ['specialization', 'niche-technologies', 'market-analysis'],
      icon: Target
    },
    {
      id: '45',
      question: 'How do I prepare for technical interviews?',
      category: 'Job Search',
      commonAnswers: [
        'Practice coding problems on LeetCode, HackerRank',
        'Review system design concepts',
        'Prepare behavioral questions with STAR method',
        'Do mock interviews with peers'
      ],
      detailedAnswer: 'Technical interview prep involves coding problems (algorithms/data structures), system design questions, and behavioral interviews. Practice on LeetCode focusing on patterns rather than memorizing solutions. Learn system design basics for senior roles. Prepare behavioral stories using STAR method. Do mock interviews to practice explaining your thought process clearly.',
      relatedPaths: ['interview-preparation', 'coding-interviews', 'system-design'],
      icon: CheckCircle
    },
    {
      id: '46',
      question: 'What soft skills are important for developers?',
      category: 'Skills',
      commonAnswers: [
        'Communication and teamwork',
        'Problem-solving and critical thinking',
        'Adaptability and continuous learning',
        'Time management and attention to detail'
      ],
      detailedAnswer: 'Critical soft skills include clear communication (explaining technical concepts to non-technical stakeholders), collaboration, problem-solving, and adaptability. Time management, attention to detail, and empathy are also valuable. These skills become more important as you advance in your career and take on leadership responsibilities.',
      relatedPaths: ['soft-skills', 'communication', 'leadership-development'],
      icon: Users
    },
    {
      id: '47',
      question: 'Should I focus on one framework or learn multiple?',
      category: 'Skills',
      commonAnswers: [
        'Master one framework deeply first',
        'Learn the underlying concepts and patterns',
        'Then explore other frameworks',
        'Focus on transferable skills'
      ],
      detailedAnswer: 'Start by mastering one framework deeply to understand its patterns, best practices, and ecosystem. This gives you a solid foundation and makes learning other frameworks easier. Focus on understanding underlying concepts (state management, component lifecycle, routing) that transfer across frameworks. Once proficient, explore alternatives to broaden your perspective.',
      relatedPaths: ['framework-mastery', 'deep-learning', 'transferable-skills'],
      icon: Code
    },
    {
      id: '48',
      question: 'How important is having a personal brand as a developer?',
      category: 'Career Growth',
      commonAnswers: [
        'Helpful for job opportunities and networking',
        'Build through blogging, social media, speaking',
        'Quality content over self-promotion',
        'Not essential but can accelerate career'
      ],
      detailedAnswer: 'A personal brand can significantly accelerate your career through increased visibility, networking opportunities, and job offers. Build it by sharing knowledge through blogging, contributing to discussions on Twitter/LinkedIn, speaking at meetups, or creating educational content. Focus on providing value rather than self-promotion. It\'s not essential, but it opens doors.',
      relatedPaths: ['personal-branding', 'content-creation', 'thought-leadership'],
      icon: Star
    },
    {
      id: '49',
      question: 'What are the biggest mistakes new developers make?',
      category: 'Learning',
      commonAnswers: [
        'Tutorial hell - not building original projects',
        'Perfectionism over progress',
        'Not asking for help when stuck',
        'Comparing themselves to experienced developers'
      ],
      detailedAnswer: 'Common mistakes include staying in "tutorial hell" without building original projects, perfectionism that prevents shipping code, not seeking help when stuck for hours, and comparing beginner work to experienced developers. Focus on building projects, embrace making mistakes as learning opportunities, and remember that everyone started as a beginner.',
      relatedPaths: ['beginner-mistakes', 'learning-mindset', 'project-building'],
      icon: AlertCircle
    },
    {
      id: '50',
      question: 'How do I know if programming is right for me?',
      category: 'Self-Assessment',
      commonAnswers: [
        'Try free coding tutorials and see if you enjoy it',
        'Consider if you like problem-solving and learning',
        'Build a simple project and reflect on the experience',
        'Talk to developers about their daily work'
      ],
      detailedAnswer: 'Try free coding tutorials (freeCodeCamp, Codecademy) for a few weeks to see if you enjoy the problem-solving aspect and logical thinking required. Build a simple project like a personal website or calculator. Consider if you enjoy continuous learning, debugging, and working with abstract concepts. Talk to developers about their day-to-day experiences.',
      relatedPaths: ['career-exploration', 'self-assessment', 'programming-introduction'],
      icon: HelpCircle
    }
  ]

  // Tech career paths with detailed information
  const careerPaths: CareerPath[] = [
    {
      id: 'frontend-development',
      title: 'Frontend Developer',
      description: 'Build user interfaces and user experiences for web applications',
      difficulty: 'Beginner',
      timeToStart: '6-9 months',
      averageSalary: '$70,000 - $120,000',
      jobDemand: 'Very High',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Git'],
      pros: [
        'Creative and visual work',
        'High job demand',
        'Good entry point into tech',
        'Immediate visual feedback'
      ],
      cons: [
        'Constantly evolving technologies',
        'Browser compatibility issues',
        'Can be repetitive for some',
        'Lower ceiling than backend in some companies'
      ],
      personalityFit: ['Creative', 'Detail-oriented', 'Visual learner', 'User-focused'],
      industries: ['E-commerce', 'SaaS', 'Media', 'Startups', 'Enterprise'],
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      roadmapId: 'frontend-development'
    },
    {
      id: 'backend-development',
      title: 'Backend Developer',
      description: 'Build server-side logic, databases, and APIs that power applications',
      difficulty: 'Intermediate',
      timeToStart: '8-12 months',
      averageSalary: '$80,000 - $140,000',
      jobDemand: 'Very High',
      skills: ['Python/Java/Node.js', 'Databases', 'APIs', 'Cloud', 'Security'],
      pros: [
        'Higher average salaries',
        'Complex problem solving',
        'System architecture opportunities',
        'Less affected by UI trends'
      ],
      cons: [
        'More abstract work',
        'Steeper learning curve',
        'Security responsibilities',
        'Less immediate visual feedback'
      ],
      personalityFit: ['Logical thinker', 'Problem solver', 'Systems-minded', 'Security-conscious'],
      industries: ['Fintech', 'Healthcare', 'Enterprise', 'Cloud Services'],
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      roadmapId: 'backend-development'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'Extract insights from data using statistics, machine learning, and programming',
      difficulty: 'Advanced',
      timeToStart: '12-18 months',
      averageSalary: '$95,000 - $160,000',
      jobDemand: 'High',
      skills: ['Python/R', 'Statistics', 'Machine Learning', 'SQL', 'Visualization'],
      pros: [
        'High salaries',
        'Impactful business decisions',
        'Cutting-edge technology',
        'Diverse problem domains'
      ],
      cons: [
        'Requires strong math background',
        'Long learning curve', 
        'Data quality challenges',
        'May involve repetitive analysis'
      ],
      personalityFit: ['Analytical', 'Math-oriented', 'Curious', 'Patient'],
      industries: ['Tech', 'Healthcare', 'Finance', 'Research', 'Consulting'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      roadmapId: 'data-science'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      description: 'Bridge development and operations through automation and infrastructure',
      difficulty: 'Advanced',
      timeToStart: '12-15 months',
      averageSalary: '$90,000 - $150,000',
      jobDemand: 'Very High',
      skills: ['Linux', 'Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD', 'Scripting'],
      pros: [
        'High demand and salaries',
        'Work with cutting-edge tools',
        'Bridge multiple teams',
        'Automation-focused'
      ],
      cons: [
        'On-call responsibilities',
        'Complex system debugging',
        'Rapidly changing landscape',
        'High pressure environments'
      ],
      personalityFit: ['Systems thinker', 'Automation lover', 'Problem solver', 'Reliable'],
      industries: ['Cloud Services', 'Startups', 'Enterprise', 'SaaS'],
      icon: Cpu,
      color: 'from-orange-500 to-amber-500',
      roadmapId: 'devops'
    },
    {
      id: 'mobile-developer',
      title: 'Mobile Developer',
      description: 'Create applications for iOS and Android mobile platforms',
      difficulty: 'Intermediate',
      timeToStart: '8-12 months',
      averageSalary: '$75,000 - $130,000',
      jobDemand: 'High',
      skills: ['Swift/Kotlin', 'React Native/Flutter', 'Mobile UI/UX', 'App Store Optimization'],
      pros: [
        'Reach millions of users',
        'Growing mobile market',
        'Platform-specific expertise',
        'App store revenue potential'
      ],
      cons: [
        'Platform fragmentation',
        'App store approval process',
        'Device compatibility issues',
        'Frequent OS updates'
      ],
      personalityFit: ['Mobile-first thinker', 'User-focused', 'Platform enthusiast'],
      industries: ['Consumer Apps', 'Gaming', 'E-commerce', 'Fintech'],
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      roadmapId: 'mobile-development'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Specialist',
      description: 'Protect systems, networks, and data from digital threats',
      difficulty: 'Advanced',
      timeToStart: '12-18 months',
      averageSalary: '$85,000 - $145,000',
      jobDemand: 'Very High',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance'],
      pros: [
        'High job security',
        'Critical importance',
        'Diverse specializations',
        'Continuous learning'
      ],
      cons: [
        'High stress environment',
        'Constantly evolving threats',
        'Certification requirements',
        'On-call responsibilities'
      ],
      personalityFit: ['Security-minded', 'Detail-oriented', 'Ethical', 'Persistent'],
      industries: ['Banking', 'Government', 'Healthcare', 'Consulting'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      roadmapId: 'cyber-security'
    }
  ]

  const categories = [
    'All', 'Education', 'Skills', 'Timeline', 'Career Change', 'Strategy', 
    'Work Style', 'Job Search', 'Salary', 'Career Growth', 'Industry', 
    'Work Life', 'Job Reality', 'Learning', 'Self-Assessment'
  ]

  const filteredDoubts = careerDoubts.filter(doubt => {
    return selectedCategory === 'All' || doubt.category === selectedCategory
  })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading career guidance...</p>
        </div>
      </div>
    )
  }

// Interactive Career Suggestion Wizard Component
function CareerSuggestionWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [preferences, setPreferences] = useState({
    experience: '',
    interests: [] as string[],
    skills: [] as string[],
    workStyle: '',
    goals: [] as string[],
    timeCommitment: '',
    salaryExpectation: ''
  })
  const [suggestions, setSuggestions] = useState<CareerSuggestion[]>([])
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const experienceLevels = [
    { id: 'complete-beginner', label: 'Complete Beginner', desc: 'No programming experience' },
    { id: 'some-basics', label: 'Some Basics', desc: 'Familiar with basic concepts' },
    { id: 'intermediate', label: 'Intermediate', desc: '1-2 years experience' },
    { id: 'experienced', label: 'Experienced', desc: '3+ years in tech' }
  ]

  const interestAreas = [
    { id: 'web-development', label: 'Web Development', icon: Globe },
    { id: 'mobile-apps', label: 'Mobile Apps', icon: Smartphone },
    { id: 'data-science', label: 'Data Science & AI', icon: Brain },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield },
    { id: 'game-development', label: 'Game Development', icon: Target },
    { id: 'cloud-infrastructure', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'ui-ux-design', label: 'UI/UX Design', icon: Palette },
    { id: 'blockchain', label: 'Blockchain/Web3', icon: Database },
    { id: 'machine-learning', label: 'Machine Learning', icon: Brain },
    { id: 'desktop-applications', label: 'Desktop Applications', icon: Monitor },
    { id: 'embedded-systems', label: 'Embedded Systems', icon: Cpu },
    { id: 'database-administration', label: 'Database Administration', icon: Database },
    { id: 'network-administration', label: 'Network Administration', icon: Globe },
    { id: 'quality-assurance', label: 'Quality Assurance/Testing', icon: CheckCircle },
    { id: 'product-management', label: 'Product Management', icon: Briefcase },
    { id: 'project-management', label: 'Project Management', icon: Users },
    { id: 'business-analysis', label: 'Business Analysis', icon: BarChart3 },
    { id: 'technical-writing', label: 'Technical Writing', icon: BookOpen },
    { id: 'digital-marketing', label: 'Digital Marketing', icon: TrendingUp },
    { id: 'e-commerce', label: 'E-commerce', icon: Building },
    { id: 'fintech', label: 'Financial Technology', icon: DollarSign },
    { id: 'healthtech', label: 'Healthcare Technology', icon: Activity },
    { id: 'edtech', label: 'Education Technology', icon: GraduationCap },
    { id: 'automation', label: 'Automation & Scripting', icon: Zap },
    { id: 'robotics', label: 'Robotics', icon: Cpu },
    { id: 'ar-vr', label: 'AR/VR Development', icon: Target },
    { id: 'internet-of-things', label: 'Internet of Things (IoT)', icon: Smartphone },
    { id: 'artificial-intelligence', label: 'Artificial Intelligence', icon: Brain },
    { id: 'research-development', label: 'Research & Development', icon: Lightbulb }
  ]

  const skillLevels = [
    { id: 'html-css', label: 'HTML/CSS' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'python', label: 'Python' },
    { id: 'java', label: 'Java' },
    { id: 'sql', label: 'SQL/Databases' },
    { id: 'git', label: 'Git/Version Control' },
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'angular', label: 'Angular' },
    { id: 'nodejs', label: 'Node.js' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'csharp', label: 'C#' },
    { id: 'cpp', label: 'C++' },
    { id: 'go', label: 'Go/Golang' },
    { id: 'rust', label: 'Rust' },
    { id: 'php', label: 'PHP' },
    { id: 'ruby', label: 'Ruby' },
    { id: 'swift', label: 'Swift' },
    { id: 'kotlin', label: 'Kotlin' },
    { id: 'flutter', label: 'Flutter' },
    { id: 'react-native', label: 'React Native' },
    { id: 'aws', label: 'AWS' },
    { id: 'azure', label: 'Microsoft Azure' },
    { id: 'docker', label: 'Docker' },
    { id: 'kubernetes', label: 'Kubernetes' },
    { id: 'linux', label: 'Linux' },
    { id: 'mongodb', label: 'MongoDB' },
    { id: 'postgresql', label: 'PostgreSQL' },
    { id: 'redis', label: 'Redis' },
    { id: 'firebase', label: 'Firebase' },
    { id: 'graphql', label: 'GraphQL' },
    { id: 'restapi', label: 'REST APIs' },
    { id: 'testing', label: 'Testing (Jest/Cypress)' },
    { id: 'figma', label: 'Figma/Design Tools' },
    { id: 'photoshop', label: 'Adobe Photoshop' },
    { id: 'excel', label: 'Advanced Excel' },
    { id: 'tableau', label: 'Tableau/Power BI' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'tensorflow', label: 'TensorFlow/PyTorch' },
    { id: 'data-analysis', label: 'Data Analysis' }
  ]

  const workStyles = [
    { id: 'remote', label: 'Remote Work', desc: 'Work from anywhere' },
    { id: 'hybrid', label: 'Hybrid', desc: 'Mix of office and remote' },
    { id: 'office', label: 'Office-based', desc: 'Traditional office environment' },
    { id: 'freelance', label: 'Freelance', desc: 'Independent contractor work' }
  ]

  const careerGoals = [
    { id: 'high-salary', label: 'High Salary', icon: DollarSign },
    { id: 'work-life-balance', label: 'Work-Life Balance', icon: Coffee },
    { id: 'creative-work', label: 'Creative Work', icon: Lightbulb },
    { id: 'problem-solving', label: 'Problem Solving', icon: Target },
    { id: 'helping-others', label: 'Helping Others', icon: Users },
    { id: 'cutting-edge-tech', label: 'Latest Technology', icon: Zap }
  ]

  const handlePreferenceChange = (category: string, value: any) => {
    setPreferences(prev => {
      if (category === 'interests' || category === 'skills' || category === 'goals') {
        const currentValues = (prev as any)[category] || []
        const newValues = currentValues.includes(value)
          ? currentValues.filter((item: any) => item !== value)
          : [...currentValues, value]
        return { ...prev, [category]: newValues }
      }
      return { ...prev, [category]: value }
    })
  }

  const generateAISuggestions = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/career-suggestions-basic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences })
      })
      
      if (response.ok) {
        const data = await response.json()
        setSuggestions(data.suggestions || [])
      } else {
        // Fallback suggestions based on preferences
        setSuggestions(generateFallbackSuggestions())
      }
    } catch (error) {
      console.error('Error generating suggestions:', error)
      setSuggestions(generateFallbackSuggestions())
    }
    setLoading(false)
    setShowResults(true)
  }

  const generateFallbackSuggestions = () => {
    const suggestions = []
    
    // Logic based on user preferences
    if (preferences.interests.includes('web-development')) {
      suggestions.push({
        title: 'Frontend Developer',
        match: 95,
        description: 'Perfect for web development interests with creative visual work',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
        roadmap: 'frontend-development',
        externalLinks: [
          { name: 'FreeCodeCamp Frontend', url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/' },
          { name: 'Frontend Roadmap', url: 'https://roadmap.sh/frontend' }
        ],
        salary: '$70k - $120k',
        timeToJob: '6-9 months',
        pros: ['Creative work', 'High demand', 'Remote opportunities'],
        workEnvironment: 'Tech companies, agencies, freelance'
      })
    }

    if (preferences.interests.includes('data-science')) {
      suggestions.push({
        title: 'Data Scientist',
        match: 90,
        description: 'Analyze data to drive business decisions using AI and machine learning',
        skills: ['Python', 'SQL', 'Machine Learning', 'Statistics'],
        roadmap: 'data-science',
        externalLinks: [
          { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' },
          { name: 'Data Science Roadmap', url: 'https://roadmap.sh/ai-data-scientist' }
        ],
        salary: '$95k - $160k',
        timeToJob: '12-18 months',
        pros: ['High salary', 'Analytical work', 'Growing field'],
        workEnvironment: 'Tech companies, research institutions, consulting'
      })
    }

    if (preferences.interests.includes('cybersecurity')) {
      suggestions.push({
        title: 'Cybersecurity Analyst',
        match: 88,
        description: 'Protect organizations from digital threats and security breaches',
        skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment'],
        roadmap: 'cyber-security',
        externalLinks: [
          { name: 'Cybrary', url: 'https://www.cybrary.it/' },
          { name: 'Security Roadmap', url: 'https://roadmap.sh/cyber-security' }
        ],
        salary: '$85k - $145k',
        timeToJob: '12-18 months',
        pros: ['Job security', 'Important work', 'Continuous learning'],
        workEnvironment: 'Corporations, government, consulting firms'
      })
    }

    // Default suggestion if no specific interests
    if (suggestions.length === 0) {
      suggestions.push({
        title: 'Full Stack Developer',
        match: 85,
        description: 'Versatile role covering both frontend and backend development',
        skills: ['JavaScript', 'React', 'Node.js', 'Databases'],
        roadmap: 'full-stack',
        externalLinks: [
          { name: 'The Odin Project', url: 'https://www.theodinproject.com/' },
          { name: 'Full Stack Roadmap', url: 'https://roadmap.sh/full-stack' }
        ],
        salary: '$75k - $130k',
        timeToJob: '8-12 months',
        pros: ['Versatile skills', 'High demand', 'Good salary'],
        workEnvironment: 'Startups, tech companies, remote work'
      })
    }

    return suggestions
  }

  return (
    <div className="space-y-8">
      {!showResults ? (
        <>
          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-20 h-1 mx-2 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            {currentStep === 1 && (
              <Card className="border-2 border-blue-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">What's your experience level?</CardTitle>
                  <p className="text-gray-600">Help us understand your starting point</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experienceLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => handlePreferenceChange('experience', level.id)}
                        className={`p-6 rounded-lg border-2 text-left transition-all ${
                          preferences.experience === level.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <h3 className="font-semibold text-lg">{level.label}</h3>
                        <p className="text-gray-600 text-sm">{level.desc}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card className="border-2 border-blue-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">What interests you most?</CardTitle>
                  <p className="text-gray-600">Select all areas that excite you (multiple selection allowed)</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {interestAreas.map((interest) => {
                      const Icon = interest.icon
                      return (
                        <button
                          key={interest.id}
                          onClick={() => handlePreferenceChange('interests', interest.id)}
                          className={`p-3 rounded-lg border-2 text-center transition-all hover:shadow-md ${
                            preferences.interests.includes(interest.id)
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                          <p className="text-xs font-medium leading-tight">{interest.label}</p>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <Card className="border-2 border-blue-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Current Skills & Goals</CardTitle>
                  <p className="text-gray-600">What do you already know and what do you want to achieve?</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Current Skills */}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Current Skills (select all that apply):</h3>
                    <p className="text-sm text-gray-600 mb-4 bg-blue-50 p-3 rounded-lg border border-blue-200">
                      💡 <strong>Tip:</strong> Select skills you are already aware of or have some experience with. These are prerequisites that will help us recommend the most suitable career path based on your current foundation.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                      {skillLevels.map((skill) => (
                        <button
                          key={skill.id}
                          onClick={() => handlePreferenceChange('skills', skill.id)}
                          className={`p-2 rounded-lg border text-center text-xs transition-all hover:shadow-sm ${
                            preferences.skills.includes(skill.id)
                              ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {skill.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Career Goals */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">What matters most to you?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {careerGoals.map((goal) => {
                        const Icon = goal.icon
                        return (
                          <button
                            key={goal.id}
                            onClick={() => handlePreferenceChange('goals', goal.id)}
                            className={`p-4 rounded-lg border-2 text-center transition-all ${
                              preferences.goals.includes(goal.id)
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                            <p className="text-sm font-medium">{goal.label}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 4 && (
              <Card className="border-2 border-blue-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Work Preferences</CardTitle>
                  <p className="text-gray-600">How do you prefer to work?</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Preferred Work Style:</h3>
                    <p className="text-sm text-gray-600 mb-4 bg-orange-50 p-3 rounded-lg border border-orange-200">
                      🏢 <strong>Recommendation:</strong> It's better to experience office work life initially, especially as a beginner. Office environments provide better mentorship, networking opportunities, and structured learning that are crucial for career growth.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {workStyles.map((style) => (
                        <button
                          key={style.id}
                          onClick={() => handlePreferenceChange('workStyle', style.id)}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            preferences.workStyle === style.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <h4 className="font-semibold">{style.label}</h4>
                          <p className="text-gray-600 text-sm">{style.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Time Commitment:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {['Part-time (10-20h/week)', 'Full-time (40h/week)', 'Intensive (50+h/week)'].map((time) => (
                        <button
                          key={time}
                          onClick={() => handlePreferenceChange('timeCommitment', time)}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            preferences.timeCommitment === time
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="max-w-4xl mx-auto flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {currentStep < 4 ? (
              <Button
                onClick={() => setCurrentStep(prev => prev + 1)}
                disabled={
                  (currentStep === 1 && !preferences.experience) ||
                  (currentStep === 2 && preferences.interests.length === 0) ||
                  (currentStep === 3 && preferences.goals.length === 0)
                }
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={generateAISuggestions}
                disabled={loading || !preferences.workStyle}
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4 mr-2" />
                    Get AI Suggestions
                  </>
                )}
              </Button>
            )}
          </div>
        </>
      ) : (
        /* Results Display */
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-center flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Career Suggestions</h2>
              <p className="text-lg text-gray-600">Based on your preferences, here are the best career paths for you</p>
            </div>
            <div className="ml-8">
              <Button
                onClick={() => {
                  setShowResults(false)
                  setCurrentStep(1)
                  setPreferences({
                    experience: '',
                    interests: [] as string[],
                    skills: [] as string[],
                    workStyle: '',
                    goals: [] as string[],
                    timeCommitment: '',
                    salaryExpectation: ''
                  })
                }}
                variant="outline"
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200"
              >
                <Brain className="w-4 h-4 mr-2" />
                Ask Again
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {suggestions.map((suggestion, index) => (
              <Card key={index} className="border-2 border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-green-100 text-green-800">{suggestion.match}% Match</Badge>
                        <CardTitle className="text-xl text-gray-900">{suggestion.title}</CardTitle>
                      </div>
                      <p className="text-gray-600 mt-2">{suggestion.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Salary Range:</h4>
                      <p className="text-sm text-green-600 font-semibold">{suggestion.salary}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Time to Job:</h4>
                      <p className="text-sm text-blue-600 font-semibold">{suggestion.timeToJob}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Recommended Learning Path:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {suggestion.roadmap && (
                        <Link href={`/roadmaps`}>
                          <Button variant="outline" className="w-full justify-start bg-blue-50 border-blue-200 hover:bg-blue-100">
                            <Route className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="font-medium">Roadmap: {suggestion.title}</span>
                          </Button>
                        </Link>
                      )}
                      <Link href="/chat">
                        <Button variant="outline" className="w-full justify-start bg-purple-50 border-purple-200 hover:bg-purple-100">
                          <MessageCircle className="w-4 h-4 mr-2 text-purple-600" />
                          <span className="font-medium">Ask JARVIS about suggestions</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      )}
    </div>
  )
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Career Suggestions</h1>
              <p className="text-gray-600">Get clarity on your tech career journey</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 max-w-lg">
          <button
            onClick={() => setActiveTab('paths')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'paths'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Route className="w-4 h-4 inline mr-2" />
            Career Suggestions
          </button>
          <button
            onClick={() => setActiveTab('doubts')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'doubts'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 inline mr-2" />
            Common Doubts
          </button>
        </div>

        {/* Common Career Doubts Tab */}
        {activeTab === 'doubts' && (
          <div className="space-y-6">
            {/* Category Filters - 2 Rows */}
            <div className="space-y-3">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {categories.slice(0, 8).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs px-3 py-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                {categories.slice(8).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs px-3 py-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Career Doubts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDoubts.map((doubt) => {
                const Icon = doubt.icon
                return (
                  <Card key={doubt.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-900 leading-tight">
                            {doubt.question}
                          </CardTitle>
                          <Badge variant="outline" className="mt-2">
                            {doubt.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Quick Answers:</h4>
                        <div className="space-y-1">
                          {doubt.commonAnswers.slice(0, 3).map((answer, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{answer}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Detailed Guidance:</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {doubt.detailedAnswer}
                        </p>
                      </div>

                      {doubt.relatedPaths.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Related Career Paths:</h4>
                          <div className="flex flex-wrap gap-2">
                            {doubt.relatedPaths.map((pathId) => {
                              const path = careerPaths.find(p => p.id === pathId)
                              return path ? (
                                <Badge key={pathId} variant="secondary" className="text-xs">
                                  {path.title}
                                </Badge>
                              ) : null
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* Career Paths Tab - Interactive AI Suggestions */}
        {activeTab === 'paths' && (
          <CareerSuggestionWizard />
        )}


      </div>
    </div>
  )
}
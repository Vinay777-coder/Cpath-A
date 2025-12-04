'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Lightbulb,
  Globe, Target, Server, Smartphone, Settings, Brain,
  Database, Monitor, User, Shield, MessageSquare,
  BookOpen, TrendingUp, BarChart3, Palette, Cpu,
  Heart, DollarSign, Building, Users, Zap, Wrench
} from 'lucide-react'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  // Complete Project Ideas Data - 50 projects from GeeksforGeeks
  const projectIdeas = [
    // Beginner Projects (1-20)
    { 
      id: 1, 
      title: 'Portfolio Website', 
      category: 'Frontend', 
      level: 'Beginner', 
      domain: 'Personal Branding', 
      icon: Globe, 
      description: 'Create a personal portfolio website to showcase your work, skills, and projects with a strong online presence.', 
      startedCount: 15420, 
      tags: ['HTML', 'CSS', 'JavaScript', 'React'], 
      duration: '2-3 months',
      detailedDescription: `
**Project Overview:**
A portfolio website is your digital business card and professional showcase on the internet. This project involves creating a responsive, visually appealing website that highlights your skills, projects, and achievements.

**Key Features to Implement:**
• Professional landing page with hero section and personal introduction
• About section with your background, skills, and experience
• Portfolio/Projects gallery with images, descriptions, and live links
• Skills section with proficiency levels and technology icons
• Contact form with email integration
• Resume download functionality
• Blog section for sharing insights (optional)
• Dark/Light mode toggle
• Mobile-responsive design across all devices

**Learning Objectives:**
• Master HTML5 semantic structure and accessibility
• Advanced CSS3 techniques including Flexbox and Grid
• JavaScript DOM manipulation and interactive elements
• Responsive web design principles
• SEO optimization techniques
• Cross-browser compatibility
• Performance optimization

**Industry Applications:**
Essential for web developers, designers, freelancers, and any professional seeking to establish an online presence. Portfolio websites are crucial for job applications and client acquisition.

**Success Metrics:**
• Fast loading times (under 3 seconds)
• Mobile responsiveness across all screen sizes
• SEO score above 90
• Accessibility compliance (WCAG guidelines)
• Professional visual design and user experience
      `
    },
    { 
      id: 2, 
      title: 'Weather Forecasting System', 
      category: 'Frontend', 
      level: 'Beginner', 
      domain: 'Weather Services', 
      icon: Globe, 
      description: 'Build a weather application that predicts weather conditions based on historical data and current parameters.', 
      startedCount: 12350, 
      tags: ['JavaScript', 'API Integration', 'Chart.js'], 
      duration: '1-2 months',
      detailedDescription: `
**Project Overview:**
A comprehensive weather forecasting application that provides real-time weather information and predictions. This project teaches API integration, data visualization, and user interface design.

**Key Features to Implement:**
• Current weather display with temperature, humidity, and wind data
• 7-day weather forecast with detailed daily predictions
• Location-based weather using geolocation API
• Search functionality for different cities worldwide
• Weather maps integration with visual representations
• Historical weather data analysis and trends
• Weather alerts and notifications for severe conditions
• Interactive charts showing temperature and precipitation trends
• Responsive design for mobile and desktop usage

**Learning Objectives:**
• REST API integration and data fetching techniques
• Asynchronous JavaScript programming with promises
• Data visualization using Chart.js or similar libraries
• Geolocation API implementation
• Error handling for network requests
• User interface design for data-heavy applications
• Local storage for saving user preferences

**Industry Applications:**
Weather applications are essential for agriculture, transportation, event planning, and daily life decisions. This project demonstrates skills in data integration and user-focused design.

**Success Metrics:**
• Accurate weather data display from reliable APIs
• Intuitive user interface with easy navigation
• Fast loading times for weather updates
• Proper error handling for failed API requests
• Cross-device compatibility and responsive design
      `
    },
    { id: 3, title: 'Age Calculator Application', category: 'Mobile', level: 'Beginner', domain: 'Utility', icon: Smartphone, description: 'Develop a simple application to calculate age based on birthdate with user-friendly interface.', startedCount: 8940, tags: ['React Native', 'Date APIs'], duration: '1-2 months', detailedDescription: 'This project involves creating a utility application that calculates precise age based on user input. Features include date picker integration, age calculation in years/months/days, leap year handling, and timezone considerations. Perfect for learning mobile app development basics, date manipulation, and user input validation.' },
    { id: 4, title: 'Area Calculator Application', category: 'Mobile', level: 'Beginner', domain: 'Education', icon: Smartphone, description: 'Create a tool for calculating the area of various shapes with dynamic input fields and real-time calculations.', startedCount: 7230, tags: ['React Native', 'Geometry Logic'], duration: '2-3 months', detailedDescription: 'An educational mobile application for calculating areas of different geometric shapes including circles, rectangles, triangles, and polygons. Features include dynamic form generation, mathematical formula implementation, visual shape preview, and educational content about geometry principles.' },
    { id: 5, title: 'Calculator Application', category: 'Mobile', level: 'Beginner', domain: 'Utility', icon: Smartphone, description: 'Build a basic calculator with arithmetic operations, memory storage, and user-friendly interface.', startedCount: 11580, tags: ['React Native', 'JavaScript'], duration: '1-2 months', detailedDescription: 'A comprehensive calculator application with basic arithmetic operations, scientific functions, memory storage, history tracking, and different calculation modes. Includes error handling, keyboard support, and responsive design for various screen sizes.' },
    { id: 6, title: 'To-Do List Application', category: 'Frontend', level: 'Beginner', domain: 'Productivity', icon: Target, description: 'Develop a task management application with task creation, organization, and priority assignment features.', startedCount: 9760, tags: ['React', 'Node.js', 'MongoDB'], duration: '2-3 months', detailedDescription: 'A comprehensive task management application with features like task creation, editing, deletion, priority assignment, due dates, categories, search functionality, and progress tracking. Includes user authentication, data persistence, and collaborative features for team productivity.' },
    { id: 7, title: 'Blog Website', category: 'Full Stack', level: 'Beginner', domain: 'Content Publishing', icon: BookOpen, description: 'Create a blogging platform for content creation with user authentication and media integration.', startedCount: 6850, tags: ['React', 'Node.js', 'MongoDB'], duration: '3-5 months', detailedDescription: 'A full-featured blogging platform with content management system, user authentication, rich text editor, media upload capabilities, comment system, SEO optimization, and social sharing features. Perfect for learning full-stack development and content management principles.' },
    { id: 8, title: 'Step Counting Application', category: 'Mobile', level: 'Beginner', domain: 'Health & Fitness', icon: Smartphone, description: 'Build a fitness app that tracks daily steps, sets goals, and monitors physical activity progress.', startedCount: 5940, tags: ['React Native', 'Sensor Integration'], duration: '2-3 months', detailedDescription: 'A health and fitness mobile application that uses device sensors to track daily steps, distance traveled, calories burned, and activity patterns. Features include goal setting, progress visualization, achievement badges, and health insights with data export capabilities.' },
    { id: 9, title: 'Expense Tracker App', category: 'Mobile', level: 'Beginner', domain: 'Finance', icon: TrendingUp, description: 'Develop a mobile app for tracking expenses, categorizing spending, and budget management.', startedCount: 4320, tags: ['React Native', 'SQLite'], duration: '2-3 months', detailedDescription: 'A personal finance management application for tracking income and expenses, categorizing transactions, setting budgets, generating financial reports, and providing spending insights. Includes receipt scanning, bill reminders, and financial goal tracking features.' },
    { id: 10, title: 'Calorie Calculator Application', category: 'Mobile', level: 'Beginner', domain: 'Health & Fitness', icon: Heart, description: 'Create a health app for tracking daily calorie intake with nutrition information and goal setting.', startedCount: 3890, tags: ['React Native', 'Nutrition APIs'], duration: '3-4 months', detailedDescription: 'A comprehensive nutrition tracking application that helps users monitor daily calorie intake, track macronutrients, set health goals, and access detailed nutrition information. Features include food database integration, barcode scanning, meal planning, and progress visualization.' },
    { id: 11, title: 'Library Management System', category: 'Full Stack', level: 'Intermediate', domain: 'Education', icon: BookOpen, description: 'Build a comprehensive system for managing library operations, book cataloging, and user management.', startedCount: 7650, tags: ['React', 'Node.js', 'MySQL'], duration: '4-6 months', detailedDescription: 'A complete library management system featuring book cataloging, member registration, borrowing and returning processes, fine calculations, inventory management, and reporting. This project teaches database design, user authentication, transaction processing, and administrative workflows. Key features include book search and reservation, member profiles, overdue notifications, and comprehensive reporting for library staff.' },
    { id: 12, title: 'Online Chat Application', category: 'Full Stack', level: 'Intermediate', domain: 'Communication', icon: MessageSquare, description: 'Develop a real-time messaging platform with group chats, file sharing, and notifications.', startedCount: 4560, tags: ['React', 'Node.js', 'WebSocket'], duration: '2-4 months', detailedDescription: 'A real-time messaging application with private and group chat functionality, file sharing capabilities, emoji support, message history, online status indicators, and push notifications. This project teaches WebSocket implementation, real-time data synchronization, media handling, and scalable chat architecture. Features include message encryption, user presence detection, and multimedia message support.' },
    { id: 13, title: 'Online Learning Management System', category: 'Full Stack', level: 'Intermediate', domain: 'Education', icon: BookOpen, description: 'Create a platform for online courses with user enrollment, quizzes, and grading systems.', startedCount: 6780, tags: ['Django', 'PostgreSQL'], duration: '3-4 months', detailedDescription: 'A comprehensive learning management system with course creation, student enrollment, video content delivery, quiz systems, assignment submissions, and progress tracking. This project covers user role management, content delivery networks, assessment systems, and educational analytics. Features include discussion forums, certificates, and detailed progress reports for both students and instructors.' },
    { id: 14, title: 'Inventory Management System', category: 'Backend', level: 'Intermediate', domain: 'Retail', icon: Database, description: 'Build a system for small businesses to manage inventory, sales, and order fulfillment.', startedCount: 5230, tags: ['Java Swing', 'MySQL'], duration: '2-3 months', detailedDescription: 'A comprehensive inventory management solution for small to medium businesses, featuring stock tracking, sales processing, supplier management, and automated reorder points. This project teaches business logic implementation, database optimization, and desktop application development. Key features include barcode scanning, low stock alerts, sales reporting, and multi-location inventory tracking.' },
    { id: 15, title: 'Task Management System', category: 'Full Stack', level: 'Intermediate', domain: 'Project Management', icon: Target, description: 'Create a comprehensive project management tool with task creation, prioritization, and progress tracking.', startedCount: 3450, tags: ['React', 'Django', 'PostgreSQL'], duration: '2-3 months', detailedDescription: 'A project management platform with task creation, assignment, priority setting, deadline tracking, and team collaboration features. This project covers project planning workflows, team coordination, and productivity analytics. Features include Gantt charts, time tracking, file attachments, comment systems, and customizable project templates for different industries.' },
    { id: 16, title: 'Language Learning Platform', category: 'Full Stack', level: 'Intermediate', domain: 'Education', icon: BookOpen, description: 'Develop an interactive platform for learning languages with lessons, quizzes, and progress tracking.', startedCount: 4890, tags: ['React', 'Django', 'PostgreSQL'], duration: '3-4 months', detailedDescription: 'An interactive language learning platform with structured lessons, pronunciation practice, vocabulary building, grammar exercises, and cultural content. This project teaches adaptive learning algorithms, audio processing, and gamification techniques. Features include speech recognition, spaced repetition systems, achievement badges, and personalized learning paths based on user performance.' },
    { id: 17, title: 'Smart Home Automation System', category: 'IoT', level: 'Intermediate', domain: 'Home Automation', icon: Settings, description: 'Build a system to control smart home devices like lights, thermostats, and security cameras.', startedCount: 5670, tags: ['React', 'IoT Integration'], duration: '3-4 months', detailedDescription: 'A smart home automation platform that connects and controls various IoT devices including lights, thermostats, security cameras, and sensors. This project covers IoT protocols, device communication, automation rules, and mobile control interfaces. Features include scheduling systems, energy monitoring, security alerts, voice control integration, and remote access capabilities.' },
    { id: 18, title: 'Employee Management System', category: 'Full Stack', level: 'Intermediate', domain: 'Human Resources', icon: Users, description: 'Create an HR management system with employee onboarding, attendance tracking, and payroll.', startedCount: 4120, tags: ['React', 'Django', 'PostgreSQL'], duration: '4-6 months', detailedDescription: 'A comprehensive HR management system covering employee lifecycle from recruitment to retirement. Features include applicant tracking, onboarding workflows, attendance management, performance evaluations, payroll processing, and benefits administration. This project teaches workflow automation, data privacy compliance, and enterprise-level system architecture with role-based access controls.' },
    { id: 19, title: 'Chatbot Project', category: 'AI/ML', level: 'Intermediate', domain: 'Customer Service', icon: Brain, description: 'Develop an intelligent chatbot for customer support with NLP and automated responses.', startedCount: 3780, tags: ['Python', 'NLP', 'Dialogflow'], duration: '2-3 months', detailedDescription: 'An AI-powered customer service chatbot with natural language processing, intent recognition, and automated response generation. This project covers machine learning, conversation design, and integration with business systems. Features include multi-language support, sentiment analysis, escalation to human agents, conversation history, and continuous learning from interactions.' },
    { id: 20, title: 'Online Code Compiler', category: 'Full Stack', level: 'Intermediate', domain: 'Education', icon: Monitor, description: 'Build a web-based platform for writing, compiling, and testing code in multiple programming languages.', startedCount: 6540, tags: ['React', 'Django', 'Docker'], duration: '2-3 months', detailedDescription: 'A web-based IDE and compiler supporting multiple programming languages with code execution, debugging tools, and collaborative features. This project teaches containerization, secure code execution, and educational technology. Features include syntax highlighting, auto-completion, code sharing, plagiarism detection, and automated testing frameworks for programming assignments.' },
    
    // Intermediate Projects (21-35)
    { id: 21, title: 'Personal Finance Dashboard', category: 'Full Stack', level: 'Intermediate', domain: 'Finance', icon: DollarSign, description: 'Create a financial management app that aggregates bank accounts, investments, and expense data.', startedCount: 5840, tags: ['React', 'Django', 'Chart.js'], duration: '3-4 months', detailedDescription: 'A comprehensive personal finance dashboard that aggregates data from multiple financial accounts, tracks spending patterns, and provides financial insights. This project covers API integration with banking systems, data visualization, and financial analytics. Features include budget planning, investment tracking, bill reminders, financial goal setting, and detailed spending analysis with categorization and trends.' },
    { id: 22, title: 'Smart Parking System', category: 'IoT', level: 'Intermediate', domain: 'Transportation', icon: Settings, description: 'Implement a parking system using sensors and mobile app to find available parking spaces.', startedCount: 4320, tags: ['React Native', 'IoT', 'GPS'], duration: '3-4 months', detailedDescription: 'An IoT-based smart parking solution that uses sensors to detect parking space availability and guides drivers to open spots through a mobile application. This project covers IoT sensor integration, real-time data processing, and location-based services. Features include space reservation, payment processing, navigation to parking spots, and analytics for parking usage patterns.' },
    { id: 23, title: 'Content Management System', category: 'Full Stack', level: 'Intermediate', domain: 'Content Publishing', icon: Database, description: 'Build a CMS for digital content creation, organization, and publication with user roles.', startedCount: 7290, tags: ['React', 'Django', 'MySQL'], duration: '4-6 months', detailedDescription: 'A flexible content management system for creating, organizing, and publishing digital content across multiple channels. This project teaches content workflow management, user permissions, and SEO optimization. Features include drag-and-drop page builder, media library management, version control, multi-site management, and customizable templates with role-based access controls.' },
    { id: 24, title: 'Language Translation App', category: 'Mobile', level: 'Intermediate', domain: 'Language Services', icon: Smartphone, description: 'Create a mobile app providing real-time language translation for cross-language communication.', startedCount: 3650, tags: ['React Native', 'Translation APIs'], duration: '2-3 months', detailedDescription: 'A mobile translation application offering real-time text and speech translation across multiple languages. This project covers API integration, speech recognition, and cross-platform mobile development. Features include camera-based text translation, offline translation capabilities, conversation mode, phrase books, and pronunciation guides with cultural context information.' },
    { id: 25, title: 'Cryptocurrency Portfolio Tracker', category: 'Full Stack', level: 'Intermediate', domain: 'Cryptocurrency', icon: DollarSign, description: 'Develop an app to track cryptocurrency investments with real-time prices and portfolio analysis.', startedCount: 5120, tags: ['React', 'Crypto APIs', 'Chart.js'], duration: '2-3 months', detailedDescription: 'A comprehensive cryptocurrency portfolio management application with real-time price tracking, portfolio analysis, and market insights. This project covers financial data integration, real-time updates, and investment analytics. Features include profit/loss calculations, price alerts, market news integration, DeFi protocol tracking, and tax reporting tools for cryptocurrency transactions.' },
    { id: 26, title: 'Student Attendance System', category: 'AI/ML', level: 'Intermediate', domain: 'Education', icon: Brain, description: 'Design an automated attendance tracking system using facial recognition or RFID technology.', startedCount: 4780, tags: ['Python', 'OpenCV', 'Face Recognition'], duration: '3-4 months', detailedDescription: 'An automated student attendance system using facial recognition technology to eliminate manual attendance taking. This project covers computer vision, machine learning model training, and database integration. Features include multiple authentication methods, attendance analytics, parent notifications, integration with academic systems, and privacy-compliant face data management.' },
    { id: 27, title: 'Waste Management System', category: 'IoT', level: 'Intermediate', domain: 'Environmental Services', icon: Settings, description: 'Create a system to optimize waste collection with route optimization and monitoring.', startedCount: 3210, tags: ['IoT', 'Data Analysis', 'Mapping'], duration: '3-4 months', detailedDescription: 'A smart waste management system that optimizes collection routes, monitors bin fill levels, and reduces environmental impact. This project covers IoT sensor deployment, route optimization algorithms, and environmental data analysis. Features include predictive maintenance, fuel consumption tracking, recycling analytics, and citizen reporting interfaces for waste management issues.' },
    { id: 28, title: 'Smart Agriculture System', category: 'IoT', level: 'Intermediate', domain: 'Agriculture', icon: Settings, description: 'Build a system using sensors and data analysis to optimize farming practices and crop health.', startedCount: 4590, tags: ['IoT', 'Data Analysis', 'Sensors'], duration: '4-5 months', detailedDescription: 'A precision agriculture system that monitors soil conditions, weather patterns, and crop health to optimize farming decisions. This project covers agricultural IoT sensors, data analytics, and automated irrigation systems. Features include crop disease detection, yield prediction, weather integration, drone data analysis, and sustainable farming recommendations based on environmental data.' },
    { id: 29, title: 'Restaurant Management System', category: 'Full Stack', level: 'Intermediate', domain: 'Hospitality', icon: Building, description: 'Design a system for restaurant operations including order management and inventory tracking.', startedCount: 6210, tags: ['React', 'Node.js', 'MySQL'], duration: '3-4 months', detailedDescription: 'A comprehensive restaurant management platform covering order processing, inventory management, staff scheduling, and customer relationship management. This project teaches hospitality industry workflows, point-of-sale systems, and business process automation. Features include table management, kitchen display systems, supplier integration, financial reporting, and customer loyalty programs.' },
    { id: 30, title: 'Algorithm Visualizer', category: 'Frontend', level: 'Intermediate', domain: 'Education', icon: Monitor, description: 'Create a platform to visually demonstrate the workings of various algorithms and data structures.', startedCount: 7850, tags: ['React', 'D3.js', 'Algorithms'], duration: '2-3 months', detailedDescription: 'An interactive educational platform that visualizes algorithms and data structures to help students understand complex programming concepts. This project covers data visualization, algorithm implementation, and interactive learning design. Features include step-by-step algorithm execution, complexity analysis, code highlighting, custom input testing, and comprehensive coverage of sorting, searching, and graph algorithms.' },
    { id: 31, title: 'Real Estate Property Management', category: 'Full Stack', level: 'Intermediate', domain: 'Real Estate', icon: Building, description: 'Build a platform for property management with listings, tenant management, and maintenance requests.', startedCount: 3980, tags: ['React', 'Node.js', 'PostgreSQL'], duration: '4-5 months', detailedDescription: 'A complete property management solution for real estate professionals covering property listings, tenant screening, lease management, and maintenance coordination. This project teaches real estate business processes, document management, and financial tracking. Features include virtual property tours, automated rent collection, maintenance scheduling, tenant communication portals, and comprehensive financial reporting.' },
    { id: 32, title: 'Food Delivery Application', category: 'Full Stack', level: 'Intermediate', domain: 'Food Services', icon: Smartphone, description: 'Develop a food delivery platform connecting users with restaurants and tracking orders.', startedCount: 5670, tags: ['React Native', 'Node.js', 'MongoDB'], duration: '3-5 months', detailedDescription: 'A multi-platform food delivery application connecting customers, restaurants, and delivery personnel. This project covers location-based services, real-time tracking, and multi-user system design. Features include restaurant discovery, order customization, real-time delivery tracking, payment integration, rating systems, and delivery route optimization for drivers.' },
    { id: 33, title: 'Blood Bank Management System', category: 'Full Stack', level: 'Intermediate', domain: 'Healthcare', icon: Heart, description: 'Create a system for managing blood donations, inventory tracking, and donor management.', startedCount: 4120, tags: ['React', 'Node.js', 'MySQL'], duration: '4-6 months', detailedDescription: 'A critical healthcare system managing blood donations, inventory levels, and emergency distribution. This project covers healthcare regulations, inventory management, and emergency response systems. Features include donor eligibility screening, blood type compatibility checking, expiration date tracking, emergency alert systems, and comprehensive reporting for healthcare compliance.' },
    { id: 34, title: 'Online Jobs Portal', category: 'Full Stack', level: 'Intermediate', domain: 'Human Resources', icon: Users, description: 'Build a job portal platform for job seekers and employers with matching algorithms.', startedCount: 6540, tags: ['React', 'Django', 'PostgreSQL'], duration: '4-6 months', detailedDescription: 'A comprehensive job matching platform connecting employers with qualified candidates through intelligent algorithms. This project covers recommendation systems, search optimization, and professional networking features. Features include resume parsing, skill matching, application tracking, video interviews, background verification, and career development resources.' },
    { id: 35, title: 'Meeting App', category: 'Full Stack', level: 'Intermediate', domain: 'Communication', icon: MessageSquare, description: 'Develop a video conferencing platform with screen sharing, chat, and collaboration features.', startedCount: 4890, tags: ['React', 'WebRTC', 'Node.js'], duration: '3-5 months', detailedDescription: 'A professional video conferencing platform with advanced collaboration tools for remote work and education. This project covers real-time communication protocols, media streaming, and collaborative workspace design. Features include HD video calls, screen sharing, virtual backgrounds, meeting recording, whiteboard collaboration, and integration with productivity tools.' },
    
    // Advanced Projects (36-50)
    { id: 36, title: 'Gold Price Prediction', category: 'AI/ML', level: 'Advanced', domain: 'Finance', icon: Brain, description: 'Build a machine learning system to predict gold prices using historical data and market analysis.', startedCount: 3450, tags: ['Python', 'scikit-learn', 'Flask'], duration: '3-5 months', detailedDescription: 'An advanced machine learning system that predicts gold prices using historical market data, economic indicators, and market sentiment analysis. This project covers time series analysis, feature engineering, and financial modeling. Features include multiple ML algorithms comparison, real-time market data integration, risk assessment models, and comprehensive backtesting with performance metrics for investment decision support.' },
    { id: 37, title: 'Face Detection System', category: 'AI/ML', level: 'Advanced', domain: 'Security', icon: Shield, description: 'Develop a computer vision system for accurate face detection and identity verification.', startedCount: 4670, tags: ['Python', 'OpenCV', 'TensorFlow'], duration: '3-5 months', detailedDescription: 'A sophisticated computer vision system for face detection, recognition, and verification using deep learning techniques. This project covers neural networks, image processing, and biometric security. Features include real-time face tracking, anti-spoofing measures, emotion recognition, age estimation, and integration with security systems for access control and surveillance applications.' },
    { id: 38, title: 'Hospital Management System', category: 'Full Stack', level: 'Advanced', domain: 'Healthcare', icon: Heart, description: 'Create a comprehensive healthcare management system with EHR, appointments, and billing.', startedCount: 5210, tags: ['React', 'Django', 'MySQL'], duration: '6-8 months', detailedDescription: 'A comprehensive hospital management system covering patient records, appointment scheduling, billing, inventory management, and staff coordination. This project teaches healthcare compliance, data security, and complex workflow management. Features include electronic health records, medical imaging integration, pharmacy management, insurance processing, and regulatory reporting systems.' },
    { id: 39, title: 'Movie Recommendation System', category: 'AI/ML', level: 'Advanced', domain: 'Entertainment', icon: Brain, description: 'Build an ML-powered system that provides personalized movie recommendations based on user preferences.', startedCount: 6780, tags: ['Python', 'scikit-learn', 'Django'], duration: '3-5 months', detailedDescription: 'An intelligent movie recommendation engine using collaborative filtering, content-based filtering, and hybrid approaches. This project covers recommendation algorithms, user behavior analysis, and personalization systems. Features include preference learning, similarity analysis, trending content discovery, and A/B testing frameworks for recommendation optimization.' },
    { id: 40, title: 'E-Commerce Website', category: 'Full Stack', level: 'Advanced', domain: 'E-commerce', icon: Building, description: 'Develop a full-featured e-commerce platform with payment integration and order management.', startedCount: 8920, tags: ['React', 'Node.js', 'MongoDB'], duration: '4-6 months', detailedDescription: 'A complete e-commerce platform with advanced features including product catalog management, shopping cart, secure payment processing, order fulfillment, and customer service tools. This project covers payment gateway integration, inventory management, and scalable architecture. Features include product recommendations, review systems, multi-vendor support, analytics dashboards, and mobile-responsive design.' },
    { id: 41, title: 'Bank Management System', category: 'Full Stack', level: 'Advanced', domain: 'Banking', icon: DollarSign, description: 'Create a comprehensive banking system with account management, transactions, and loan processing.', startedCount: 4230, tags: ['React', 'Django', 'MySQL'], duration: '4-6 months', detailedDescription: 'A secure banking management system with account operations, transaction processing, loan management, and regulatory compliance features. This project covers financial regulations, security protocols, and banking workflows. Features include multi-factor authentication, transaction monitoring, credit scoring, automated loan processing, and comprehensive audit trails for regulatory compliance.' },
    { id: 42, title: 'House Price Prediction System', category: 'AI/ML', level: 'Advanced', domain: 'Real Estate', icon: Brain, description: 'Build an ML system to predict real estate prices based on location, features, and market data.', startedCount: 5450, tags: ['Python', 'scikit-learn', 'Flask'], duration: '3-5 months', detailedDescription: 'A sophisticated real estate price prediction system using machine learning algorithms and comprehensive market data analysis. This project covers regression analysis, feature selection, and geospatial data processing. Features include neighborhood analysis, market trend prediction, property valuation tools, and integration with real estate databases for accurate pricing insights.' },
    { id: 43, title: 'AI-Powered Virtual Assistant', category: 'AI/ML', level: 'Advanced', domain: 'Virtual Assistance', icon: Brain, description: 'Develop a virtual assistant using AI to understand queries, perform tasks, and provide information.', startedCount: 3890, tags: ['Python', 'NLP', 'Machine Learning'], duration: '4-6 months', detailedDescription: 'An advanced virtual assistant leveraging natural language processing, machine learning, and task automation. This project covers conversational AI, intent recognition, and system integration. Features include voice recognition, contextual understanding, task scheduling, smart home integration, and continuous learning capabilities for personalized user experiences.' },
    { id: 44, title: 'Credit Card Fraud Detection', category: 'AI/ML', level: 'Advanced', domain: 'Financial Services', icon: Shield, description: 'Create an ML system to detect fraudulent credit card transactions using pattern recognition.', startedCount: 4670, tags: ['Python', 'Machine Learning', 'Data Analysis'], duration: '3-5 months', detailedDescription: 'A real-time fraud detection system using machine learning to identify suspicious credit card transactions. This project covers anomaly detection, pattern recognition, and financial security. Features include real-time monitoring, risk scoring, false positive reduction, merchant analysis, and integration with payment processing systems for immediate fraud prevention.' },
    { id: 45, title: 'Project Management System', category: 'Full Stack', level: 'Advanced', domain: 'Project Management', icon: Target, description: 'Build a comprehensive project management platform with planning, execution, and team collaboration.', startedCount: 5120, tags: ['React', 'Django', 'PostgreSQL'], duration: '4-6 months', detailedDescription: 'An enterprise-level project management platform with advanced planning tools, resource management, and collaboration features. This project covers agile methodologies, resource optimization, and team productivity analytics. Features include Gantt charts, resource allocation, time tracking, risk management, budget control, and integration with development tools.' },
    { id: 46, title: 'Face Recognition Attendance System', category: 'AI/ML', level: 'Advanced', domain: 'Education', icon: Brain, description: 'Develop an automated attendance system using deep learning for face recognition.', startedCount: 4890, tags: ['Python', 'OpenCV', 'TensorFlow'], duration: '3-5 months', detailedDescription: 'An advanced face recognition system for automated attendance tracking using deep learning and computer vision. This project covers neural networks, facial feature extraction, and biometric authentication. Features include real-time recognition, anti-spoofing detection, attendance analytics, integration with academic systems, and privacy-compliant data handling.' },
    { id: 47, title: 'Twitter Sentiment Analysis', category: 'AI/ML', level: 'Advanced', domain: 'Social Media', icon: Brain, description: 'Build a system to analyze public sentiment on Twitter using natural language processing.', startedCount: 6210, tags: ['Python', 'NLP', 'Machine Learning'], duration: '3-5 months', detailedDescription: 'A comprehensive sentiment analysis system for social media monitoring using advanced NLP techniques. This project covers text processing, sentiment classification, and social media analytics. Features include real-time tweet analysis, trend detection, influencer identification, crisis monitoring, and comprehensive reporting dashboards for brand monitoring and market research.' },
    { id: 48, title: 'Music Recommendation System', category: 'AI/ML', level: 'Advanced', domain: 'Entertainment', icon: Brain, description: 'Create an ML-powered music recommendation engine based on listening history and preferences.', startedCount: 5670, tags: ['Python', 'scikit-learn', 'Django'], duration: '3-5 months', detailedDescription: 'An intelligent music recommendation system using collaborative filtering, content-based analysis, and deep learning techniques. This project covers audio feature extraction, user preference modeling, and recommendation algorithms. Features include mood-based recommendations, playlist generation, social sharing, and integration with music streaming platforms.' },
    { id: 49, title: 'Stock Prediction Using ML', category: 'AI/ML', level: 'Advanced', domain: 'Finance', icon: Brain, description: 'Develop a machine learning system for stock price prediction and investment decision support.', startedCount: 4320, tags: ['Python', 'scikit-learn', 'Flask'], duration: '3-5 months', detailedDescription: 'A sophisticated stock market prediction system using machine learning algorithms and technical analysis. This project covers time series forecasting, financial indicators, and risk assessment. Features include multiple timeframe analysis, portfolio optimization, automated trading signals, backtesting capabilities, and comprehensive risk management tools for investment decisions.' },
    { id: 50, title: 'Heart Disease Prediction System', category: 'AI/ML', level: 'Advanced', domain: 'Healthcare', icon: Heart, description: 'Build an ML system for early detection and prediction of heart diseases using medical data.', startedCount: 3780, tags: ['Python', 'scikit-learn', 'Flask'], duration: '3-5 months', detailedDescription: 'A medical diagnostic system using machine learning for heart disease risk assessment and early detection. This project covers medical data analysis, classification algorithms, and healthcare applications. Features include risk factor analysis, patient history integration, diagnostic support tools, treatment recommendations, and compliance with medical data privacy regulations.' }
  ]
  const levelColors = {
    'Beginner': 'bg-green-100 text-green-800 border-green-200',
    'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Advanced': 'bg-red-100 text-red-800 border-red-200',
  }

  const categoryColors = {
    'Frontend': 'bg-blue-500',
    'Backend': 'bg-green-500',
    'Full Stack': 'bg-purple-500',
    'Mobile': 'bg-pink-500',
    'DevOps': 'bg-orange-500',
    'Data Science': 'bg-indigo-500',
    'AI/ML': 'bg-red-500',
    'IoT': 'bg-teal-500',
    'Tools': 'bg-gray-500',
    'Gaming': 'bg-yellow-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="bg-white/60 border-orange-200 hover:bg-orange-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Project Ideas
                  </h1>
                  <p className="text-gray-600">Discover 50 amazing projects to build your skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectIdeas.map((project) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-orange-100 p-6 hover:bg-white/90 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${categoryColors[project.category as keyof typeof categoryColors]} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                    <IconComponent className={`w-6 h-6 ${categoryColors[project.category as keyof typeof categoryColors]} text-opacity-80`} />
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${levelColors[project.level as keyof typeof levelColors]}`}>
                      {project.level}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-md border border-orange-100">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-200">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{project.startedCount.toLocaleString()} started</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-orange-100">
                  <div className="text-xs text-gray-500 mb-2">Industry: {project.domain}</div>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    size="sm"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const project = projectIdeas.find(p => p.id === selectedProject)
                if (!project) return null
                
                const IconComponent = project.icon
                
                return (
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl ${categoryColors[project.category as keyof typeof categoryColors]} bg-opacity-10`}>
                          <IconComponent className={`w-8 h-8 ${categoryColors[project.category as keyof typeof categoryColors]} text-opacity-80`} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                          <div className="flex items-center space-x-3 mt-2">
                            <span className={`px-3 py-1 text-sm font-medium rounded-full border ${levelColors[project.level as keyof typeof levelColors]}`}>
                              {project.level}
                            </span>
                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                              {project.category}
                            </span>
                            <span className="text-sm text-gray-600">
                              Duration: {project.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Description</h3>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies & Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Detailed Project Information</h3>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
                            {project.detailedDescription || `
**Project Overview:**
This ${project.level.toLowerCase()} level project in ${project.category} development focuses on ${project.domain.toLowerCase()}. This project will help you understand core concepts and build practical skills in modern development.

**Key Learning Areas:**
• ${project.category} development best practices
• User interface and experience design
• ${project.domain} industry standards and requirements
• Integration with modern development tools and frameworks
• Testing and debugging techniques
• Performance optimization strategies

**Skills You'll Develop:**
• Technical proficiency in ${project.tags.join(', ')}
• Problem-solving and logical thinking
• Project planning and time management
• Code organization and documentation
• Version control and collaboration

**Industry Relevance:**
This project reflects real-world scenarios in ${project.domain.toLowerCase()} and demonstrates skills highly valued by employers in the tech industry. 

**Project Scope:**
Estimated duration: ${project.duration}
Complexity: ${project.level}
Domain: ${project.domain}

**Getting Started:**
1. Research the problem domain and user requirements
2. Plan your application architecture and design
3. Set up your development environment
4. Implement core features incrementally
5. Test functionality across different scenarios
6. Document your process and learnings
7. Deploy and showcase your completed project

This project provides excellent portfolio material and demonstrates your ability to deliver functional solutions in ${project.category.toLowerCase()} development.
                            `}
                          </pre>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{project.startedCount.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">People Started</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{project.duration}</div>
                          <div className="text-sm text-gray-600">Est. Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{project.level}</div>
                          <div className="text-sm text-gray-600">Difficulty</div>
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <div className="flex items-start space-x-3">
                          <Lightbulb className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-orange-800 mb-1">Project Guidance</h4>
                            <p className="text-orange-700 text-sm">
                              This is a project idea and guidance only. No code is provided - you'll build everything from scratch to maximize your learning experience and create a unique portfolio piece.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
'use client'

import { useState } from 'react'
import { 
  ArrowLeft, 
  BookOpen, 
  Code,
  CheckCircle,
  XCircle,
  SkipForward,
  RotateCcw,
  User,
  Calendar,
  Clock,
  List,
  Lightbulb
} from 'lucide-react'
import Link from 'next/link'

export default function NodejsInterviewQuestionsPage() {
  const [activeSection, setActiveSection] = useState('intro')
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [knewCount, setKnewCount] = useState(0)
  const [learntCount, setLearntCount] = useState(0)
  const [skippedCount, setSkippedCount] = useState(0)

  // 50 Original Node.js Interview Questions - Organized by Difficulty
  const interviewQuestions = [
    // ==================== BEGINNER QUESTIONS (1-18) ====================
    {
      id: 1,
      category: 'Beginner',
      question: 'What is Node.js, and how is it different from a browser\'s runtime environment?',
      answer: `Node.js is a server-side JavaScript runtime environment that allows you to execute code outside of a web browser. While a browser's runtime is for front-end web development, Node.js is for building back-end services, command-line tools, and network applications.

Key differences:
• Node.js runs on the server, browsers run on the client
• Node.js has access to file system, browsers are sandboxed
• Node.js uses V8 engine directly, browsers have additional security layers`
    },
    {
      id: 2,
      category: 'Beginner',
      question: 'Explain the purpose of the JavaScript engine (V8) in Node.js.',
      answer: `The V8 JavaScript engine compiles JavaScript code into machine code, allowing Node.js to execute it very quickly. It's the same engine used in Chrome, which is why Node.js is so fast.

V8 Features:
• Just-in-time (JIT) compilation
• Garbage collection
• Hidden class transitions for optimization
• Inline caching for property access`
    },
    {
      id: 3,
      category: 'Beginner',
      question: 'Why is Node.js considered single-threaded, and how does the event loop handle async operations?',
      answer: `Node.js is single-threaded in that it has only one main thread for code execution. However, it handles asynchronous operations using the event loop. When an I/O operation is requested, Node.js offloads it to a separate thread pool.

Event Loop Process:
1. Execute synchronous code
2. Process microtasks (promises)
3. Process macrotasks (timers, I/O)
4. Repeat the cycle`
    },
    {
      id: 4,
      category: 'Beginner',
      question: 'How do you create a simple web server using the built-in HTTP module?',
      answer: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World!</h1>');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

This creates a basic HTTP server that responds with "Hello World!" to all requests.`
    },
    {
      id: 5,
      category: 'Beginner',
      question: 'What\'s the difference between blocking and non-blocking code execution?',
      answer: `Blocking code execution stops the entire process until a task is complete. Non-blocking code execution allows the process to continue with other tasks while an operation is being handled in the background.

// Blocking
const data = fs.readFileSync('file.txt');
console.log('This waits');

// Non-blocking
fs.readFile('file.txt', (err, data) => {
  console.log('This executes when ready');
});
console.log('This executes immediately');`
    },
    {
      id: 6,
      category: 'Beginner',
      question: 'How do you use the require() function to import a node module?',
      answer: `The require() function is used to load and cache node module files. For example:

const http = require('http'); // Built-in module
const express = require('express'); // Third-party module
const myModule = require('./myModule'); // Local module
const { readFile } = require('fs'); // Destructured import

Modules are cached after the first require() call for better performance.`
    },
    {
      id: 7,
      category: 'Beginner',
      question: 'What is Node Package Manager (NPM), and how do you use it to manage packages?',
      answer: `Node Package Manager (NPM) is a package management tool for Node.js. You use it via the command line interface to install, update, and manage dependencies.

Common NPM commands:
npm install <package>    // Install a package
npm install -g <package> // Install globally
npm uninstall <package>  // Remove a package
npm update              // Update packages
npm list               // List installed packages`
    },
    {
      id: 8,
      category: 'Beginner',
      question: 'Differentiate between local and global package installation using the command line interface.',
      answer: `Local installation (npm install <package>) installs the package in the node_modules folder of your current project, making it available only to that project.

Global installation (npm install -g <package>) installs the package system-wide, making it available to all projects and accessible from the command line.

Local: Project-specific dependencies
Global: CLI tools and utilities used across projects`
    },
    {
      id: 9,
      category: 'Beginner',
      question: 'Explain the purpose of the package.json file.',
      answer: `The package.json file holds metadata about a project, including its name, version, and scripts. Most importantly, it lists the project's dependencies.

Key sections:
• name: Project name
• version: Project version
• dependencies: Runtime dependencies
• devDependencies: Development-only dependencies
• scripts: Custom commands
• main: Entry point file`
    },
    {
      id: 10,
      category: 'Beginner',
      question: 'How do you handle error handling in asynchronous code with a callback function?',
      answer: `A common convention for error handling with callback functions is the "error-first callback" pattern. The first argument of the callback function is reserved for an error parameter.

fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

Always check for errors first before processing the result.`
    },
    {
      id: 11,
      category: 'Beginner',
      question: 'What are Promises, and what problem do they solve with asynchronous code?',
      answer: `Promises are objects that represent the eventual completion or failure of an asynchronous operation. They address callback hell by providing a cleaner, more readable way to chain async functions.

const readFilePromise = util.promisify(fs.readFile);

readFilePromise('file.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err));

Promises have three states: pending, fulfilled, or rejected.`
    },
    {
      id: 12,
      category: 'Beginner',
      question: 'Explain async/await and how it improves readability for async function calls.',
      answer: `async/await is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves like synchronous code.

async function readFile() {
  try {
    const data = await fs.promises.readFile('file.txt');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

This makes async code much easier to read and maintain than callback chains.`
    },
    {
      id: 13,
      category: 'Beginner',
      question: 'How do you use the fs module for file system operations?',
      answer: `The fs module provides API functions for interacting with the file system.

const fs = require('fs');

// Read file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write file
fs.writeFile('output.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File saved');
});`
    },
    {
      id: 14,
      category: 'Beginner',
      question: 'Explain the difference between synchronous and asynchronous file system operations.',
      answer: `Synchronous file system operations block the event loop until they are complete. Async operations don't block the event loop.

// Synchronous (blocking)
const data = fs.readFileSync('file.txt');
console.log('This waits for file read');

// Asynchronous (non-blocking)
fs.readFile('file.txt', (err, data) => {
  console.log('This executes when ready');
});
console.log('This executes immediately');`
    },
    {
      id: 15,
      category: 'Beginner',
      question: 'What is a Buffer class in Node.js, and when would you use it for handling binary data?',
      answer: `The Buffer class is used to represent a raw memory allocation outside the V8 heap. It's essential for handling binary data, such as images or encrypted information.

const buffer = Buffer.from('Hello World', 'utf8');
console.log(buffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>

Use cases:
• Reading binary files
• Network protocols
• Cryptographic operations
• Image processing`
    },
    {
      id: 16,
      category: 'Beginner',
      question: 'What is a stream, and when is it useful for writing data or handling large files?',
      answer: `A stream is an abstract interface for working with streaming data. It's particularly useful when dealing with large files or network communication.

const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

Benefits: Memory efficiency, real-time processing, better performance for large datasets.`
    },
    {
      id: 17,
      category: 'Beginner',
      question: 'Explain the role of the EventEmitter.',
      answer: `The EventEmitter is a class in Node.js that allows you to create custom events and listen for them. It's a key part of event-driven programming.

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
  console.log('An event occurred!');
});

myEmitter.emit('event');

Many Node.js objects inherit from EventEmitter.`
    },
    {
      id: 18,
      category: 'Beginner',
      question: 'What are process.nextTick() and setImmediate() in the context of the event loop?',
      answer: `process.nextTick() schedules a callback function immediately to be executed on the current event loop cycle, before any I/O. setImmediate() schedules a callback to be executed in the next cycle.

console.log('start');
process.nextTick(() => console.log('nextTick'));
setImmediate(() => console.log('setImmediate'));
console.log('end');

// Output: start, end, nextTick, setImmediate`
    },

    // ==================== MID-LEVEL QUESTIONS (19-34) ====================
    {
      id: 19,
      category: 'Mid-Level',
      question: 'How would you avoid callback hell when making several asynchronous function calls?',
      answer: `The most effective way to avoid callback hell is to use Promises or async/await. These patterns allow you to chain async function calls in a much more readable manner.

// Callback hell
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      // nested callbacks...
    });
  });
});

// With async/await
async function fetchData() {
  const a = await getData();
  const b = await getMoreData(a);
  const c = await getEvenMoreData(b);
  return c;
}`
    },
    {
      id: 20,
      category: 'Mid-Level',
      question: 'Explain the concept of event-driven programming in Node.js.',
      answer: `Event-driven programming is a paradigm where the flow of a program is determined by events, such as user actions, sensor outputs, or messages from other programs.

const EventEmitter = require('events');

class MyService extends EventEmitter {
  processData(data) {
    // Process data
    this.emit('dataProcessed', result);
  }
}

const service = new MyService();
service.on('dataProcessed', (result) => {
  console.log('Data processed:', result);
});

Node.js is naturally suited for this pattern with its non-blocking I/O model.`
    },
    {
      id: 21,
      category: 'Mid-Level',
      question: 'Describe the phases of the Node.js event loop.',
      answer: `The event loop has several distinct phases:

1. Timer phase: Executes callbacks scheduled by setTimeout() and setInterval()
2. Pending callbacks phase: Executes I/O callbacks deferred to the next loop iteration
3. Idle, prepare phase: Internal use only
4. Poll phase: Fetches new I/O events; executes I/O related callbacks
5. Check phase: setImmediate() callbacks are invoked here
6. Close callbacks phase: Close event callbacks

The poll phase is the most important for fetching new I/O events.`
    },
    {
      id: 22,
      category: 'Mid-Level',
      question: 'How does the event loop prioritize different async function calls?',
      answer: `The event loop has a specific order of operation:

1. process.nextTick() callbacks (highest priority)
2. Promise microtasks
3. Timer callbacks (setTimeout, setInterval)
4. I/O callbacks
5. setImmediate() callbacks
6. Close callbacks

console.log('1');
setTimeout(() => console.log('2'), 0);
process.nextTick(() => console.log('3'));
Promise.resolve().then(() => console.log('4'));

// Output: 1, 3, 4, 2`
    },
    {
      id: 23,
      category: 'Mid-Level',
      question: 'What is the purpose of the libuv library?',
      answer: `Libuv is a C++ library that provides Node.js with its non-blocking I/O functionality. It's responsible for:

• Managing the thread pool for I/O operations
• Handling file system operations
• Network I/O
• DNS resolution
• Child processes
• Thread synchronization

Libuv abstracts platform-specific details and provides a consistent API across different operating systems (Windows, macOS, Linux).`
    },
    {
      id: 24,
      category: 'Mid-Level',
      question: 'Differentiate between child_process.fork() and child_process.spawn().',
      answer: `child_process.spawn() launches a new process with a specific command, streaming its I/O.

child_process.fork() is a special case of spawn() designed for Node.js modules. It establishes a communication channel between parent and child processes.

// spawn
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

// fork
const { fork } = require('child_process');
const child = fork('./child.js');
child.send({ message: 'Hello' });`
    },
    {
      id: 25,
      category: 'Mid-Level',
      question: 'When would you use worker threads instead of a child process?',
      answer: `Worker threads are ideal for CPU-intensive tasks that would otherwise block the main single thread. Unlike child processes, they share memory, making it easier to exchange data.

Use worker threads for:
• CPU-intensive computations
• Parallel processing of data
• When you need shared memory access

Use child processes for:
• Running separate Node.js applications
• Isolating unstable code
• Different runtime environments`
    },
    {
      id: 26,
      category: 'Mid-Level',
      question: 'How does Node.js handle garbage collection?',
      answer: `Node.js uses the V8 engine's garbage collector, which works in two phases:

1. Scavenge phase: For new objects in "new space"
   - Uses copying collection algorithm
   - Fast but limited space

2. Mark-Sweep and Mark-Compact phases: For older objects in "old space"
   - Marks reachable objects
   - Sweeps unmarked objects
   - Compacts memory to reduce fragmentation

You can monitor GC with --trace-gc flag and optimize with --max-old-space-size.`
    },
    {
      id: 27,
      category: 'Mid-Level',
      question: 'What are some common security vulnerabilities in Node.js applications?',
      answer: `Common vulnerabilities include:

• Cross-site scripting (XSS)
• SQL injection
• Insecure dependencies
• Prototype pollution
• Command injection
• Path traversal attacks

Mitigation strategies:
• Use security middleware (helmet)
• Validate all user input
• Regularly update dependencies
• Use parameterized queries
• Implement proper authentication
• Use HTTPS everywhere`
    },
    {
      id: 28,
      category: 'Mid-Level',
      question: 'How would you handle sessions and authentication in a Node.js application?',
      answer: `You can handle sessions and authentication using libraries like Passport.js or implementing JWT (JSON Web Tokens).

// JWT approach
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
}

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}`
    },
    {
      id: 29,
      category: 'Mid-Level',
      question: 'What is CORS (Cross-Origin Resource Sharing), and how do you handle it?',
      answer: `CORS is a security feature that prevents a web page from making requests to a different domain. You can handle it on a Node.js server by setting specific HTTP headers.

// Using Express.js with cors middleware
const cors = require('cors');
app.use(cors({
  origin: 'https://example.com',
  credentials: true
}));

// Manual CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});`
    },
    {
      id: 30,
      category: 'Mid-Level',
      question: 'Describe how to connect a Node.js application to a database.',
      answer: `You can connect to a database using dedicated Node.js modules:

// MongoDB with Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

// PostgreSQL with pg
const { Pool } = require('pg');
const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

// MySQL with mysql2
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});`
    },
    {
      id: 31,
      category: 'Mid-Level',
      question: 'What are the advantages of using Express.js over the native HTTP module?',
      answer: `Express.js simplifies web server development by providing:

• Routing system for handling different HTTP methods and URLs
• Middleware support for request/response processing
• Template engine integration
• Static file serving
• Error handling middleware
• Request parsing (JSON, URL-encoded)
• Session management
• Security features

// Express vs Native HTTP
// Express
app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id });
});

// Native HTTP
server.on('request', (req, res) => {
  // Manual URL parsing and routing logic required
});`
    },
    {
      id: 32,
      category: 'Mid-Level',
      question: 'How do you handle errors gracefully in an Express.js application?',
      answer: `You can handle errors in Express.js using a dedicated error-handling middleware with four arguments: (err, req, res, next).

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  if (err.status === 404) {
    res.status(404).json({ error: 'Not found' });
  } else if (err.status === 500) {
    res.status(500).json({ error: 'Internal server error' });
  } else {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// In route handlers
app.get('/users/:id', (req, res, next) => {
  try {
    // Route logic
  } catch (err) {
    next(err); // Pass error to error handler
  }
});`
    },
    {
      id: 33,
      category: 'Mid-Level',
      question: 'What is the purpose of process.env.NODE_ENV?',
      answer: `process.env.NODE_ENV is a crucial environment variable that signals to your application whether it's running in development, production, or testing environment.

// Check environment
if (process.env.NODE_ENV === 'production') {
  // Production optimizations
  app.use(compression());
  app.use(helmet());
} else {
  // Development features
  app.use(morgan('dev'));
}

Many libraries and frameworks use this variable to:
• Enable/disable debugging
• Optimize performance
• Configure logging levels
• Toggle development tools`
    },
    {
      id: 34,
      category: 'Mid-Level',
      question: 'How do you manage secrets and configuration in a production Node.js application?',
      answer: `Best practices for managing secrets and configuration:

• Use environment variables for sensitive data
• Use .env files for development (with dotenv)
• Use cloud secret managers for production (AWS Secrets Manager, Azure Key Vault)
• Never commit secrets to version control

// Using dotenv for development
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;

// Production environment variables
const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET
};`
    },

    // ==================== ADVANCED QUESTIONS (35-50) ====================
    {
      id: 35,
      category: 'Advanced',
      question: 'How would you architect a scalable and maintainable Node.js application?',
      answer: `I would use a modular architecture with clear separation of concerns:

• Layered architecture (Controller → Service → Repository)
• Microservices for different business domains
• API Gateway for routing and authentication
• Message queues for asynchronous processing
• Caching layers (Redis) for performance
• Database sharding for scalability
• Load balancers for high availability
• Monitoring and logging systems
• Containerization with Docker
• CI/CD pipelines for deployment`
    },
    {
      id: 36,
      category: 'Advanced',
      question: 'Explain the principles of Microservices and why Node.js is a good fit.',
      answer: `Microservices principles:
• Single responsibility per service
• Decentralized data management
• Independent deployment and scaling
• Communication via well-defined APIs

Node.js is ideal for microservices because:
• Lightweight and fast startup times
• Excellent I/O performance for API gateways
• npm ecosystem for rapid development
• JSON-native for REST APIs
• Event-driven architecture fits distributed systems
• Easy containerization with Docker`
    },
    {
      id: 37,
      category: 'Advanced',
      question: 'How do you handle inter-service communication in a microservices architecture?',
      answer: `Several approaches for inter-service communication:

1. HTTP/REST APIs
   - Simple and widely supported
   - Synchronous communication

2. Message Queues (RabbitMQ, Apache Kafka)
   - Asynchronous messaging
   - Better resilience and decoupling

3. gRPC
   - High-performance binary protocol
   - Type-safe contracts with Protocol Buffers

4. Event-driven architecture
   - Publish/subscribe patterns
   - Event sourcing and CQRS

Choose based on consistency requirements, performance needs, and complexity tolerance.`
    },
    {
      id: 38,
      category: 'Advanced',
      question: 'How would you monitor and observe a production Node.js application?',
      answer: `Comprehensive monitoring strategy:

• Application Performance Monitoring (APM)
  - New Relic, DataDog, or Elastic APM
  - Track response times, error rates, throughput

• Logging
  - Structured logging with Winston or Bunyan
  - Centralized logs with ELK stack or Splunk
  - Log correlation IDs for distributed tracing

• Metrics
  - Prometheus for custom metrics
  - Grafana for visualization
  - Health checks and uptime monitoring

• Distributed Tracing
  - OpenTelemetry or Jaeger
  - Track requests across services`
    },
    {
      id: 39,
      category: 'Advanced',
      question: 'How would you optimize the performance of a high-traffic Node.js API?',
      answer: `Performance optimization strategies:

• Caching
  - Redis for session and data caching
  - CDN for static assets
  - Application-level caching

• Database Optimization
  - Connection pooling
  - Query optimization and indexing
  - Read replicas for read-heavy workloads

• Code Optimization
  - Avoid blocking operations
  - Use streams for large data
  - Implement clustering

• Infrastructure
  - Load balancing
  - Horizontal scaling
  - Content compression (gzip)

• Monitoring
  - Profile memory usage
  - Monitor event loop lag`
    },
    {
      id: 40,
      category: 'Advanced',
      question: 'What are the benefits of using TypeScript in a Node.js project?',
      answer: `TypeScript benefits for Node.js:

• Static Type Checking
  - Catch errors at compile time
  - Better IDE support and autocomplete
  - Refactoring safety

• Enhanced Developer Experience
  - IntelliSense and code navigation
  - Better documentation through types
  - Easier onboarding for new developers

• Modern JavaScript Features
  - Latest ECMAScript features
  - Decorators and advanced patterns
  - Better async/await support

• Maintainability
  - Self-documenting code
  - Easier to understand large codebases
  - Better collaboration in teams`
    },
    {
      id: 41,
      category: 'Advanced',
      question: 'How would you set up a CI/CD pipeline for a Node.js application?',
      answer: `CI/CD pipeline setup:

1. Source Control (Git)
2. CI Pipeline (GitHub Actions, Jenkins, GitLab CI)
   - Install dependencies (npm ci)
   - Run tests (npm test)
   - Code quality checks (ESLint, Prettier)
   - Security scanning (npm audit)
   - Build application

3. Containerization
   - Dockerfile for consistent environments
   - Multi-stage builds for optimization

4. Deployment
   - Staging environment for testing
   - Blue-green or rolling deployments
   - Environment-specific configurations
   - Health checks and rollback strategies`
    },
    {
      id: 42,
      category: 'Advanced',
      question: 'How do you prevent resource starvation in a Node.js application?',
      answer: `Resource starvation prevention strategies:

• Request Timeouts
  - Set timeouts for all external calls
  - Implement circuit breakers

• Rate Limiting
  - Limit requests per user/IP
  - Use express-rate-limit or custom solutions

• Memory Management
  - Monitor memory usage
  - Implement memory leak detection
  - Use streaming for large data sets

• CPU-bound Task Management
  - Offload to worker threads
  - Use child processes for isolation
  - Implement task queues with priorities

• Connection Pooling
  - Limit database connections
  - Use connection pool management`
    },
    {
      id: 43,
      category: 'Advanced',
      question: 'How do you implement secure HTTP headers in an Express.js application?',
      answer: `Use security middleware like Helmet to set security headers:

const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

Key headers: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Strict-Transport-Security, Content-Security-Policy`
    },
    {
      id: 44,
      category: 'Advanced',
      question: 'What are the various ways to handle unhandled exceptions in a Node.js process?',
      answer: `Unhandled exception handling strategies:

1. process.on('uncaughtException')
   - Last resort error handler
   - Should log and gracefully exit

2. process.on('unhandledRejection')
   - Handle unhandled promise rejections
   - Log and decide whether to exit

3. Domains (deprecated)
   - Legacy approach, not recommended

4. Try-catch with async/await
   - Wrap async code in try-catch blocks

5. Error-handling middleware in Express
   - Centralized error handling

Best practice: Always handle errors gracefully and never ignore them.`
    },
    {
      id: 45,
      category: 'Advanced',
      question: 'How does Node.js use the require.resolve() function, and when would you use it?',
      answer: `require.resolve() finds the full path to a module without loading it:

const path = require.resolve('express');
console.log(path); // /node_modules/express/index.js

Use cases:
• Check if a module exists before requiring
• Get module location for tooling
• Conditional loading of optional dependencies
• Build tools that need to locate modules
• Plugin systems that dynamically discover modules

try {
  const modulePath = require.resolve('optional-module');
  const module = require(modulePath);
} catch (err) {
  console.log('Optional module not available');
}`
    },
    {
      id: 46,
      category: 'Advanced',
      question: 'How do you ensure high availability and load balancing for a Node.js service?',
      answer: `High availability strategies:

• Load Balancers
  - Nginx, HAProxy for request distribution
  - Cloud load balancers (AWS ALB, Google Cloud LB)

• Multiple Instances
  - Horizontal scaling across multiple servers
  - Container orchestration (Kubernetes)

• Health Checks
  - Endpoint monitoring
  - Automatic failover

• Clustering
  - Node.js cluster module
  - PM2 for process management

• Circuit Breakers
  - Fail fast on service errors
  - Prevent cascading failures

• Database Redundancy
  - Master-slave replication
  - Database clustering`
    },
    {
      id: 47,
      category: 'Advanced',
      question: 'What is Docker, and how can it be used to deploy Node.js applications?',
      answer: `Docker is a containerization platform that packages your application and dependencies into containers.

# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
USER node
CMD ["npm", "start"]

Benefits:
• Consistent environments across development/production
• Easy scaling and deployment
• Isolation and security
• Version control for infrastructure
• Orchestration with Kubernetes

Best practices: Multi-stage builds, minimal base images, non-root users, .dockerignore files`
    },
    {
      id: 48,
      category: 'Advanced',
      question: 'How would you implement rate-limiting on an API?',
      answer: `Rate limiting implementation strategies:

1. Express Rate Limit middleware
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);

2. Redis-based rate limiting
3. Token bucket algorithm
4. Sliding window approach

Choose based on requirements: per-user vs per-IP, distributed vs local, different limits per endpoint.`
    },
    {
      id: 49,
      category: 'Advanced',
      question: 'How would you handle a large number of database connections efficiently?',
      answer: `Database connection management strategies:

• Connection Pooling
  - Reuse connections instead of creating new ones
  - Configure min/max pool sizes based on load

const pool = new Pool({
  host: 'localhost',
  database: 'mydb',
  user: 'user',
  password: 'password',
  max: 20, // max clients in the pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

• Connection optimization
  - Use read replicas for read operations
  - Implement connection health checks
  - Monitor connection usage patterns
  - Use persistent connections where possible`
    },
    {
      id: 50,
      category: 'Advanced',
      question: 'What is JWT (JSON Web Token), and how does it work with Node.js?',
      answer: `JWT is a compact, URL-safe means of representing claims between two parties.

Structure: header.payload.signature

// Creating a JWT
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { userId: 123, role: 'admin' },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

// Verifying a JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

Benefits: Stateless, scalable, secure when implemented correctly.`
    }
  ]

  const handleFlashcardAction = (action: 'knew' | 'learnt' | 'skipped') => {
    if (action === 'knew') {
      setKnewCount(prev => prev + 1)
    } else if (action === 'learnt') {
      setLearntCount(prev => prev + 1)
    } else if (action === 'skipped') {
      setSkippedCount(prev => prev + 1)
    }
    
    setShowAnswer(false)
    if (currentFlashcard < interviewQuestions.length - 1) {
      setCurrentFlashcard(prev => prev + 1)
    }
  }

  const resetProgress = () => {
    setCurrentFlashcard(0)
    setShowAnswer(false)
    setKnewCount(0)
    setLearntCount(0)
    setSkippedCount(0)
  }

  const totalQuestions = interviewQuestions.length
  const progress = ((knewCount + learntCount + skippedCount) / totalQuestions) * 100

  const beginnerQuestions = interviewQuestions.filter(q => q.category === 'Beginner')
  const midLevelQuestions = interviewQuestions.filter(q => q.category === 'Mid-Level')
  const advancedQuestions = interviewQuestions.filter(q => q.category === 'Advanced')

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
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-green-600" />
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
                Top {totalQuestions} Node.js Interview Questions and Answers
              </h1>

              {/* Hero Image */}
              <div className="rounded-lg p-8 mb-6 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #42a047 0%, #66bb6a 100%)'}}>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Node.js Interview</h2>
                  <h3 className="text-xl text-green-100 mb-4">questions and answers</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">NODE</span>
                    </div>
                    <div className="text-white/80">
                      <div className="w-12 h-2 bg-white/30 rounded mb-2"></div>
                      <div className="w-8 h-2 bg-white/30 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white/90 text-sm font-bold">
                  CareerPath.com
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Just like its ecosystem, the world of Node.js interview questions is constantly evolving. 
                As the powerful server-side JavaScript runtime that it is, Node.js is used to create everything from RESTful APIs to real-time applications and microservices.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
              {[
                { id: 'intro', name: 'Getting Ready', icon: <Lightbulb className="w-4 h-4" /> },
                { id: 'flashcards', name: 'Flashcards', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'questions', name: 'Questions List', icon: <List className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-colors ${
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

            {/* Getting Ready Section */}
            {activeSection === 'intro' && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Ready for Your Node.js Interview</h2>
                
                <p className="text-gray-700 mb-4">
                  Before diving into the questions, it's important to understand what Node.js interviewers are looking for.
                </p>
                
                <p className="text-gray-700 mb-4">
                  They want to see how you understand asynchronous programming, event-driven architecture, and how you handle real-world server-side challenges.
                </p>
                
                <p className="text-gray-700 mb-4">
                  They'll want to understand your grasp of the event loop, how you approach scalability, and your experience with the Node.js ecosystem. 
                  How do you apply these concepts to build performant server-side applications?
                </p>
                
                <p className="text-gray-700 mb-6">
                  On top of that, remember to review your fundamental Node.js concepts and practice writing clean, efficient server-side code. 
                  Understanding of npm, package management, and modern JavaScript features is essential.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-green-800">
                    <strong>Pro tip:</strong> Don't just memorize Node.js APIs; understand the underlying concepts like the event loop, 
                    non-blocking I/O, and how Node.js differs from browser JavaScript. Practice explaining concepts clearly.
                  </p>
                </div>
              </div>
            )}

            {/* Flashcards Section */}
            {activeSection === 'flashcards' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Test yourself with Flashcards</h2>
                  <p className="text-gray-600 mb-6">
                    You can either use these flashcards or jump to the questions list section below to see them in a list format.
                  </p>
                  
                  {/* Progress */}
                  <div className="flex items-center justify-center gap-8 mb-6">
                    <div className="text-2xl font-bold text-gray-900">{Math.round(progress)}% / {totalQuestions}</div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">{knewCount} Items</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">{learntCount} Items</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SkipForward className="w-4 h-4 text-gray-600" />
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-medium">{skippedCount} Items</span>
                      </div>
                      <button onClick={resetProgress} className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm">
                        <RotateCcw className="w-3 h-3" />
                        Reset Progress
                      </button>
                    </div>
                  </div>
                </div>

                {currentFlashcard < totalQuestions ? (
                  <div className="max-w-2xl mx-auto">
                    {/* Flashcard */}
                    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          interviewQuestions[currentFlashcard].category === 'Beginner' ? 'bg-green-100 text-green-800' :
                          interviewQuestions[currentFlashcard].category === 'Mid-Level' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {interviewQuestions[currentFlashcard].category} Questions
                        </span>
                        <span className="text-sm text-gray-500">
                          {currentFlashcard + 1} of {totalQuestions}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        {interviewQuestions[currentFlashcard].question}
                      </h3>
                      
                      {!showAnswer ? (
                        <button 
                          onClick={() => setShowAnswer(true)}
                          className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
                        >
                          Click to Reveal the Answer
                        </button>
                      ) : (
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded-md">
                            <p className="text-gray-700 whitespace-pre-line">
                              {interviewQuestions[currentFlashcard].answer}
                            </p>
                          </div>
                          
                          <div className="flex gap-3 justify-center">
                            <button 
                              onClick={() => handleFlashcardAction('knew')}
                              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Already Know That
                            </button>
                            <button 
                              onClick={() => handleFlashcardAction('learnt')}
                              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                            >
                              <BookOpen className="w-4 h-4" />
                              Didn't Know That
                            </button>
                            <button 
                              onClick={() => handleFlashcardAction('skipped')}
                              className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-colors"
                            >
                              <SkipForward className="w-4 h-4" />
                              Skip Question
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
                    <p className="text-gray-600 mb-6">
                      You've completed all {totalQuestions} Node.js interview questions. 
                      Great job on your preparation!
                    </p>
                    <button 
                      onClick={resetProgress}
                      className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                    >
                      Practice Again
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Questions List Section */}
            {activeSection === 'questions' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions List</h2>
                  <p className="text-gray-600 mb-8">
                    If you prefer to see the questions in a list format, you can find them below.
                  </p>
                </div>

                {/* Beginner Questions */}
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-4">Beginner Questions</h3>
                  <div className="space-y-4">
                    {beginnerQuestions.map((question, index) => (
                      <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          {index + 1}. {question.question}
                        </h4>
                        <details className="group">
                          <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                            Show Answer
                          </summary>
                          <div className="mt-3 p-4 bg-gray-50 rounded-md">
                            <p className="text-gray-700 whitespace-pre-line">
                              {question.answer}
                            </p>
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mid-Level Questions */}
                <div>
                  <h3 className="text-xl font-bold text-yellow-700 mb-4">Mid-Level Questions</h3>
                  <div className="space-y-4">
                    {midLevelQuestions.map((question, index) => (
                      <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          {beginnerQuestions.length + index + 1}. {question.question}
                        </h4>
                        <details className="group">
                          <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                            Show Answer
                          </summary>
                          <div className="mt-3 p-4 bg-gray-50 rounded-md">
                            <p className="text-gray-700 whitespace-pre-line">
                              {question.answer}
                            </p>
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Questions */}
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-4">Advanced Questions</h3>
                  <div className="space-y-4">
                    {advancedQuestions.map((question, index) => (
                      <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          {beginnerQuestions.length + midLevelQuestions.length + index + 1}. {question.question}
                        </h4>
                        <details className="group">
                          <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                            Show Answer
                          </summary>
                          <div className="mt-3 p-4 bg-gray-50 rounded-md">
                            <p className="text-gray-700 whitespace-pre-line">
                              {question.answer}
                            </p>
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-80 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Navigation</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setActiveSection('intro')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === 'intro' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Getting Ready for Interview
                </button>
                <button
                  onClick={() => setActiveSection('flashcards')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === 'flashcards' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Practice with Flashcards
                </button>
                <button
                  onClick={() => setActiveSection('questions')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === 'questions' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Browse All Questions
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Question Breakdown</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Beginner</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    {beginnerQuestions.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mid-Level</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                    {midLevelQuestions.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Advanced</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">
                    {advancedQuestions.length}
                  </span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-sm text-gray-900">Total Questions</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium">
                      {totalQuestions}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Other Guides</h3>
              <div className="space-y-3">
                <Link 
                  href="/guides/javascript-interview-questions"
                  className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  JavaScript Interview Questions
                </Link>
                <Link 
                  href="/guides/python-vs-javascript"
                  className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Python vs JavaScript Guide
                </Link>
                <Link 
                  href="/guides/golang-vs-rust"
                  className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Go vs Rust Comparison
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
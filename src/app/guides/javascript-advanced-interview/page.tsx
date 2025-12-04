'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Zap, Target, TrendingUp, CheckCircle2, Lightbulb } from 'lucide-react';

export default function JavaScriptAdvancedInterviewGuide() {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/guides" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', marginBottom: '1rem', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Back to Guides
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            JavaScript Advanced Interview Questions
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Master advanced JavaScript concepts and ace your technical interviews with comprehensive examples and explanations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'concepts', label: 'Core Concepts', icon: Code },
            { id: 'questions', label: 'Interview Questions', icon: Target },
            { id: 'preparation', label: 'Preparation Strategy', icon: TrendingUp }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                border: 'none',
                backgroundColor: 'transparent',
                color: activeTab === id ? '#f59e0b' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #f59e0b' : '2px solid transparent',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
            >
              <Icon size={16} style={{ marginRight: '0.5rem' }} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'concepts' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Advanced JavaScript Concepts
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Closures & Scope */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Zap size={20} style={{ marginRight: '0.5rem' }} />
                    Closures & Lexical Scope
                  </h4>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>What is a Closure?</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                      A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created.
                    </p>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem', overflow: 'auto' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`function outerFunction(x) {
  // Outer function's variable
  let outerVariable = x;
  
  function innerFunction(y) {
    // Inner function has access to outer variable
    console.log(outerVariable + y);
  }
  
  return innerFunction;
}

const closure = outerFunction(10);
closure(5); // Output: 15`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>Practical Use Cases</h5>
                    <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                      <li>Data privacy and encapsulation</li>
                      <li>Function factories and configuration</li>
                      <li>Module pattern implementation</li>
                      <li>Callback functions and event handlers</li>
                      <li>Partial application and currying</li>
                    </ul>
                  </div>
                </div>

                {/* Prototypes & Inheritance */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Code size={20} style={{ marginRight: '0.5rem' }} />
                    Prototypes & Inheritance
                  </h4>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>Prototype Chain</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                      Every JavaScript object has a prototype. When trying to access a property, JavaScript will first check the object, then its prototype, and so on up the chain.
                    </p>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem', overflow: 'auto' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`// Constructor function
function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person('John');
console.log(john.greet()); // "Hello, I'm John"

// ES6 Class syntax
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  speak() {
    return \`\${this.name} barks\`;
  }
}`}</pre>
                    </div>
                  </div>
                </div>

                {/* Async Programming */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Lightbulb size={20} style={{ marginRight: '0.5rem' }} />
                    Asynchronous Programming
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Promises</h5>
                      <div style={{ backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                        <pre style={{ margin: 0, color: '#e2e8f0' }}>{`const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));`}</pre>
                      </div>
                    </div>

                    <div>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Async/Await</h5>
                      <div style={{ backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                        <pre style={{ margin: 0, color: '#e2e8f0' }}>{`async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData().then(data => console.log(data));`}</pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Loop & Concurrency */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>Event Loop & Call Stack</h4>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                      Understanding the event loop is crucial for JavaScript developers. It's how JavaScript handles asynchronous operations in a single-threaded environment.
                    </p>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// Output order: 1, 4, 3, 2
// Call Stack → Microtask Queue → Callback Queue`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'questions' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Top Advanced Interview Questions
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  {
                    question: "Explain the difference between call, apply, and bind methods",
                    difficulty: "Medium",
                    category: "Function Methods",
                    answer: "call() invokes a function with a specific 'this' value and individual arguments. apply() is similar but takes arguments as an array. bind() returns a new function with 'this' bound to a specific value.",
                    code: `const obj = { name: 'Alice' };

function greet(greeting, punctuation) {
  return \`\${greeting} \${this.name}\${punctuation}\`;
}

// call - individual arguments
greet.call(obj, 'Hello', '!'); // "Hello Alice!"

// apply - arguments as array
greet.apply(obj, ['Hi', '.']); // "Hi Alice."

// bind - returns new function
const boundGreet = greet.bind(obj);
boundGreet('Hey', '?'); // "Hey Alice?"`
                  },
                  {
                    question: "What is the difference between shallow and deep copying?",
                    difficulty: "Hard",
                    category: "Object Manipulation",
                    answer: "Shallow copy copies only the top-level properties. Deep copy recursively copies all nested objects and arrays, creating completely independent copies.",
                    code: `// Shallow copy
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };
shallow.b.c = 3; // Modifies original.b.c too!

// Deep copy methods
const deep1 = JSON.parse(JSON.stringify(original)); // Simple but limited
const deep2 = structuredClone(original); // Modern native method

// Custom deep copy function
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(deepClone);
  
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}`
                  },
                  {
                    question: "Implement a debounce function",
                    difficulty: "Hard",
                    category: "Performance Optimization",
                    answer: "Debounce limits the rate at which a function can fire. It delays the execution until after a certain amount of time has passed since it was last invoked.",
                    code: `function debounce(func, delay) {
  let timeoutId;
  
  return function (...args) {
    // Clear the previous timeout
    clearTimeout(timeoutId);
    
    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage example
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
  // Perform search API call
}, 300);

// Advanced version with immediate execution option
function advancedDebounce(func, delay, immediate = false) {
  let timeoutId;
  
  return function (...args) {
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) func.apply(this, args);
    }, delay);
    
    if (callNow) func.apply(this, args);
  };
}`
                  },
                  {
                    question: "Explain hoisting with var, let, and const",
                    difficulty: "Medium",
                    category: "Variable Declarations",
                    answer: "Hoisting moves declarations to the top of their scope. var is hoisted and initialized with undefined. let/const are hoisted but not initialized, creating a temporal dead zone.",
                    code: `// var hoisting
console.log(x); // undefined (not error)
var x = 5;

// Equivalent to:
var x;
console.log(x); // undefined
x = 5;

// let/const hoisting
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;

// Function hoisting
sayHello(); // Works! Outputs: "Hello"

function sayHello() {
  console.log("Hello");
}

// Function expression hoisting
sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function() {
  console.log("Goodbye");
};`
                  },
                  {
                    question: "Create a function that implements currying",
                    difficulty: "Hard",
                    category: "Functional Programming",
                    answer: "Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.",
                    code: `// Basic currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Usage example
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

// All these work:
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// Practical example
const multiply = curry((a, b, c) => a * b * c);
const double = multiply(2);
const quadruple = double(2);

console.log(quadruple(5)); // 20`
                  }
                ].map((item, index) => (
                  <div key={index} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h4 style={{ color: '#f1f5f9', fontSize: '1.125rem', fontWeight: '600', margin: 0, flex: 1 }}>
                        {item.question}
                      </h4>
                      <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                        <span style={{ 
                          backgroundColor: item.difficulty === 'Easy' ? '#10b981' : item.difficulty === 'Medium' ? '#f59e0b' : '#ef4444',
                          color: 'white',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {item.difficulty}
                        </span>
                        <span style={{ 
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {item.answer}
                    </p>
                    
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.75rem', overflow: 'auto' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>{item.code}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preparation' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Interview Preparation Strategy
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Preparation Timeline */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    4-Week Preparation Timeline
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        week: 'Week 1',
                        focus: 'Fundamentals Review',
                        topics: ['JavaScript basics', 'Data types and operators', 'Functions and scope', 'Objects and arrays'],
                        practice: 'Complete 10 basic coding problems daily',
                        color: '#3b82f6'
                      },
                      {
                        week: 'Week 2',
                        focus: 'Advanced Concepts',
                        topics: ['Closures and lexical scope', 'Prototypes and inheritance', 'Async programming', 'Event loop'],
                        practice: 'Implement key concepts from scratch',
                        color: '#10b981'
                      },
                      {
                        week: 'Week 3',
                        focus: 'Problem Solving',
                        topics: ['Algorithm implementation', 'Data structures in JS', 'Performance optimization', 'Design patterns'],
                        practice: 'Solve 5 medium/hard problems daily',
                        color: '#f59e0b'
                      },
                      {
                        week: 'Week 4',
                        focus: 'Mock Interviews',
                        topics: ['System design basics', 'Code review skills', 'Communication practice', 'Edge cases'],
                        practice: 'Daily mock interview sessions',
                        color: '#ef4444'
                      }
                    ].map((week, index) => (
                      <div key={index} style={{ display: 'flex', padding: '1rem', backgroundColor: '#1e293b', borderRadius: '8px' }}>
                        <div style={{ 
                          backgroundColor: week.color, 
                          color: 'white', 
                          borderRadius: '50%', 
                          width: '40px', 
                          height: '40px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          marginRight: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: 'bold'
                        }}>
                          {index + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{week.week}</h5>
                            <span style={{ color: week.color, fontSize: '0.875rem', fontWeight: '600' }}>{week.focus}</span>
                          </div>
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{week.topics.join(' • ')}</p>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontStyle: 'italic' }}>{week.practice}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Study Resources */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Essential Study Resources
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        category: 'Books & Documentation',
                        resources: [
                          'You Don\'t Know JS (Kyle Simpson)',
                          'JavaScript: The Good Parts (Douglas Crockford)',
                          'MDN Web Docs (JavaScript Guide)',
                          'Eloquent JavaScript (Marijn Haverbeke)'
                        ],
                        color: '#3b82f6'
                      },
                      {
                        category: 'Online Platforms',
                        resources: [
                          'LeetCode (JavaScript problems)',
                          'HackerRank (JavaScript track)',
                          'Codewars (JavaScript kata)',
                          'JavaScript30 (Wes Bos)'
                        ],
                        color: '#10b981'
                      },
                      {
                        category: 'Practice Projects',
                        resources: [
                          'Build a module bundler',
                          'Implement popular library features',
                          'Create design patterns examples',
                          'Build async utilities library'
                        ],
                        color: '#f59e0b'
                      }
                    ].map((section, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: section.color, marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {section.category}
                        </h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {section.resources.map((resource, idx) => (
                            <li key={idx} style={{ 
                              color: '#cbd5e1', 
                              fontSize: '0.875rem', 
                              marginBottom: '0.25rem',
                              paddingLeft: '1rem',
                              position: 'relative'
                            }}>
                              <CheckCircle2 size={12} style={{ 
                                position: 'absolute', 
                                left: 0, 
                                top: '0.25rem',
                                color: section.color 
                              }} />
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interview Day Tips */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Interview Day Success Tips
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        title: 'Think Aloud',
                        tip: 'Verbalize your thought process. Explain your approach before coding and discuss trade-offs.'
                      },
                      {
                        title: 'Ask Clarifying Questions',
                        tip: 'Understand the requirements fully. Ask about edge cases, input constraints, and expected output.'
                      },
                      {
                        title: 'Start Simple',
                        tip: 'Begin with a working solution, then optimize. It\'s better to have a simple working solution than a complex broken one.'
                      },
                      {
                        title: 'Test Your Code',
                        tip: 'Walk through your solution with example inputs. Check for edge cases and potential bugs.'
                      },
                      {
                        title: 'Discuss Time/Space Complexity',
                        tip: 'Analyze and explain the Big O complexity of your solution. Discuss potential optimizations.'
                      },
                      {
                        title: 'Stay Calm',
                        tip: 'Don\'t panic if you don\'t know something immediately. Use debugging techniques and think step by step.'
                      }
                    ].map((tip, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: '#c4b5fd', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {tip.title}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.4', margin: 0 }}>
                          {tip.tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
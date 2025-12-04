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

export default function JavaScriptInterviewQuestionsPage() {
  const [activeSection, setActiveSection] = useState('intro')
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [knewCount, setKnewCount] = useState(0)
  const [learntCount, setLearntCount] = useState(0)
  const [skippedCount, setSkippedCount] = useState(0)

  // 80 Original JavaScript Interview Questions - Organized by Difficulty
  const interviewQuestions = [
    // ==================== BEGINNER QUESTIONS (1-30) ====================
    {
      id: 1,
      category: 'Beginner',
      question: 'What is the difference between var, let, and const?',
      answer: `var has a global scope or function scope; let and const are block-scoped.

var can be re-declared and updated, let can be updated but not re-declared.

Finally, const cannot be re-declared or updated, that's why they're called "constants".`
    },
    {
      id: 2,
      category: 'Beginner',
      question: 'Write a function sumArray(arr) that returns the sum of all the elements in an input array.',
      answer: `function sumArray(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

This method will apply the "accumulator" function to every element of the array, receiving the current accumulated value as the first parameter and the current value being processed as the second one.`
    },
    {
      id: 3,
      category: 'Beginner',
      question: 'How do you check if a given string is a palindrome? Write a function isPalindrome to demonstrate.',
      answer: `function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

Since there is no direct way to reverse a string in JavaScript, we turn the string into an array of characters and reverse that. We then join all those values into a single string to compare it with the original input.`
    },
    {
      id: 4,
      category: 'Beginner',
      question: 'Explain type coercion in JavaScript. Give an example.',
      answer: `Type coercion is JavaScript's automatic conversion of values from one data type to another.

For example, '5' + 5 results in '55', as the number 5 is coerced into a string when trying to add a number and a string.`
    },
    {
      id: 5,
      category: 'Beginner',
      question: 'Write a function that reverses a given string. A simple function reverseString should suffice.',
      answer: `function reverseString(str) {
  return str.split('').reverse().join('');
}

You first split the string into an array of characters, reverse it, and then re-join all characters together. The resulting string is the reversed version of the original one.`
    },
    {
      id: 6,
      category: 'Beginner',
      question: 'How do you find the maximum difference between any two elements in an input array?',
      answer: `function findMaxDifference(arr) {
  if (arr.length < 2) {
    return 0;
  }
  
  let minVal = arr[0];
  let maxVal = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    } else if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  
  return maxVal - minVal;
}`
    },
    {
      id: 7,
      category: 'Beginner',
      question: 'Write a function that checks if a given number is prime. Name your function isPrime.',
      answer: `function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  if (num === 2) {
    return true;
  }
  
  if (num % 2 === 0) {
    return false;
  }
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}`
    },
    {
      id: 8,
      category: 'Beginner',
      question: 'Given a var c = 10 in the global scope, what happens if you declare var c = 20 inside a function?',
      answer: `The var c = 20 inside the function will be locally scoped, so the variable in the global scope will remain 10.`
    },
    {
      id: 9,
      category: 'Beginner',
      question: 'How do you check if a data type is an object type?',
      answer: `You can use typeof obj === 'object' && obj !== null.

The null check is important because typeof null also returns 'object'.`
    },
    {
      id: 10,
      category: 'Beginner',
      question: 'Write a function factorial(n) to calculate the factorial of a number using a recursive function.',
      answer: `function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}`
    },
    {
      id: 11,
      category: 'Beginner',
      question: 'How would you iterate over all elements inside of an array and add them to a new empty array?',
      answer: `You would use a for loop. For each of the elements, you would use newArray.push(element) to add it to a new empty array.

function copyArray(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}`
    },
    {
      id: 12,
      category: 'Beginner',
      question: 'Explain the difference between null and undefined.',
      answer: `undefined means a variable has been declared but not assigned a value. null is a value that can be assigned to a variable to explicitly indicate a non-value or empty string.

let a;
console.log(a); // undefined

let b = null;
console.log(b); // null`
    },
    {
      id: 13,
      category: 'Beginner',
      question: 'How would you write a function removeFalsyValues(arr) that removes falsy values from an array?',
      answer: `function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

Falsy values are values that, once coerced, will evaluate to "false", such as 0, false, null, undefined, "", NaN.`
    },
    {
      id: 14,
      category: 'Beginner',
      question: 'What are the different ways to declare a function in JavaScript?',
      answer: `There are three main ways to declare a function in JavaScript:

• As a function declaration: function myFunction() {...}
• As an arrow function: const myFunction = () => {}
• Using the Function constructor: const myFunction = new Function(...)`
    },
    {
      id: 15,
      category: 'Beginner',
      question: 'Write a function that returns the Fibonacci sequence up to a certain number.',
      answer: `function fibonacciSequence(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }
  
  const sequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  
  return sequence;
}`
    },
    {
      id: 16,
      category: 'Beginner',
      question: 'How can you convert an array of objects into a single object?',
      answer: `function convertArrayToObject(arr) {
  return arr.reduce((accumulator, currentItem) => {
    const key = currentItem.id;
    const value = currentItem.value;
    accumulator[key] = value;
    return accumulator;
  }, {});
}

The reduce() method iterates over the array and accumulates a single value.`
    },
    {
      id: 17,
      category: 'Beginner',
      question: 'Explain the purpose of a callback function.',
      answer: `A callback function is a JavaScript function that's passed as an argument to another function. The purpose is to have the outer function execute the callback function at a specific point in time or after a particular action is completed.

function greetUser(name, callback) {
  console.log('Hello ' + name);
  callback();
}

greetUser('John', function() {
  console.log('Callback executed!');
});`
    },
    {
      id: 18,
      category: 'Beginner',
      question: 'What is the difference between map, filter, and reduce?',
      answer: `map creates a new array by applying a function to each element of the original array.

filter creates a new array containing only array elements that pass a test.

reduce reduces all the elements of an array to a single value.

const nums = [1, 2, 3, 4];
const doubled = nums.map(x => x * 2);     // [2, 4, 6, 8]
const evens = nums.filter(x => x % 2 === 0); // [2, 4]
const sum = nums.reduce((acc, x) => acc + x, 0); // 10`
    },
    {
      id: 19,
      category: 'Beginner',
      question: 'How do you find the unique elements in an array with duplicate elements?',
      answer: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}

This function initializes a new Set with the values of the array, by default limiting its content to unique values and then returns a newly formed array using the spread operator.`
    },
    {
      id: 20,
      category: 'Beginner',
      question: 'Write a function areAnagrams(str1, str2) that checks if two strings are anagrams of each other.',
      answer: `function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

This function sorts both strings and checks if the sorted versions are identical, avoiding the need to iterate over characters manually.`
    },

    // ==================== MID-LEVEL QUESTIONS (21-50) ====================
    {
      id: 21,
      category: 'Mid-Level',
      question: 'How do you implement a function to debounce a series of function calls?',
      answer: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

A debounce function limits the rate at which another function can be called, using setTimeout and clearTimeout to prevent rapid successive calls.`
    },
    {
      id: 22,
      category: 'Mid-Level',
      question: 'What is the event loop, and how does it relate to asynchronous JavaScript?',
      answer: `The event loop is a crucial part of the JavaScript runtime architecture that handles asynchronous operations.

The event loop constantly checks if the call stack is empty and pushes tasks from the task queue onto it. This allows JavaScript to handle asynchronous operations while maintaining its single-threaded nature.`
    },
    {
      id: 23,
      category: 'Mid-Level',
      question: 'Explain the difference between a function declaration and a function expression.',
      answer: `Function declarations are hoisted, meaning you can call them before they are declared.

Function expressions are not hoisted, so you must define them before you can call them.

// Function declaration (hoisted)
console.log(declared()); // Works
function declared() {
  return "I am declared";
}

// Function expression (not hoisted)
console.log(expressed()); // Error
const expressed = function() {
  return "I am expressed";
};`
    },
    {
      id: 24,
      category: 'Mid-Level',
      question: 'How does the this keyword work in a regular JavaScript function versus an arrow function?',
      answer: `A regular JavaScript function sets its own this keyword based on how it's called. An arrow function does not have its own this keyword; it inherits from the enclosing scope.

const obj = {
  name: 'John',
  regularMethod: function() {
    console.log(this.name); // 'John'
  },
  arrowMethod: () => {
    console.log(this.name); // undefined (inherits from global scope)
  }
};`
    },
    {
      id: 25,
      category: 'Mid-Level',
      question: 'How would you create a private variable using a JavaScript function?',
      answer: `function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

You can use a closure to achieve this. The count variable is only accessible through the returned methods.`
    },
    {
      id: 26,
      category: 'Mid-Level',
      question: 'Explain Closures and provide an example of where they might be used.',
      answer: `A closure is a function that "remembers" the environment in which it was created, including local variables of its parent function.

function outerFunction(x) {
  return function(y) {
    return x + y; // Inner function has access to 'x'
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8

Closures are used for data encapsulation, creating private variables, and module patterns.`
    },
    {
      id: 27,
      category: 'Mid-Level',
      question: 'What is the spread operator vs the rest parameter?',
      answer: `The spread operator expands an iterable into individual elements, while the rest parameter gathers multiple arguments into an array.

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest parameter
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
sum(1, 2, 3, 4); // 10`
    },
    {
      id: 28,
      category: 'Mid-Level',
      question: 'How do you implement a deep copy of an object?',
      answer: `function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

A shallow copy only copies the top-level properties and still points to the same nested objects as the original. A deep copy creates completely independent copies of all nested objects.

Note: JSON method doesn't work with functions, undefined, or circular references.`
    },
    {
      id: 29,
      category: 'Mid-Level',
      question: 'What is a callback function? Explain callback hell and a solution to avoid it.',
      answer: `A callback function gets passed as a parameter to an asynchronous function and executes when the operation completes.

Callback hell happens when code becomes deeply nested with multiple callbacks:

// Callback hell
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      // deeply nested
    });
  });
});

Solution: Use Promises or async/await for cleaner, more readable code.`
    },
    {
      id: 30,
      category: 'Mid-Level',
      question: 'Explain the difference between call(), apply(), and bind().',
      answer: `All three methods change the this context of a function.

call() executes the function immediately with arguments passed separately.
apply() executes the function immediately with arguments passed as an array.
bind() returns a new function with the this context permanently bound.

const obj = { name: 'John' };
function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation);
}

greet.call(obj, 'Hello', '!');     // "Hello John!"
greet.apply(obj, ['Hello', '!']);  // "Hello John!"
const boundGreet = greet.bind(obj);
boundGreet('Hello', '!');          // "Hello John!"`
    },

    // ==================== ADVANCED QUESTIONS (31-50) ====================
    {
      id: 31,
      category: 'Advanced',
      question: 'Explain how Prototypal Inheritance works in JavaScript.',
      answer: `Prototypal inheritance is JavaScript's way of creating inheritance. Every object has a prototype object from which it inherits methods and properties.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return 'Hello, I am ' + this.name;
};

const john = new Person('John');
console.log(john.greet()); // "Hello, I am John"

Objects inherit from their prototype, creating a prototype chain.`
    },
    {
      id: 32,
      category: 'Advanced',
      question: 'How do you create a deep clone of a complex object containing circular references?',
      answer: `function deepClone(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (visited.has(obj)) return visited.get(obj);
  
  const clone = Array.isArray(obj) ? [] : {};
  visited.set(obj, clone);
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], visited);
    }
  }
  
  return clone;
}

Use a WeakMap to keep track of visited objects and handle circular references.`
    },
    {
      id: 33,
      category: 'Advanced',
      question: 'Explain the role of the Microtask Queue and Macrotask Queue in the Event Loop.',
      answer: `The Microtask Queue holds high-priority tasks like Promise callbacks and async/await code. The Macrotask Queue holds lower-priority tasks like setTimeout and setInterval.

Microtasks are processed before the next macrotask, ensuring Promise callbacks execute before timer callbacks.

console.log('1');
setTimeout(() => console.log('2'), 0); // Macrotask
Promise.resolve().then(() => console.log('3')); // Microtask
console.log('4');

// Output: 1, 4, 3, 2`
    },
    {
      id: 34,
      category: 'Advanced',
      question: 'How would you write a function to implement Promise.race() from scratch?',
      answer: `function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject);
    });
  });
}

This implementation creates a new Promise and attaches then/catch handlers to each input promise. The first promise to resolve or reject determines the result.`
    },
    {
      id: 35,
      category: 'Advanced',
      question: 'What is the difference between Event Bubbling and Event Capturing?',
      answer: `Event bubbling starts at the inner element and propagates outwards to parent elements.

Event capturing is the opposite, starting at the outermost element and propagating inwards.

element.addEventListener('click', handler, false); // Bubbling (default)
element.addEventListener('click', handler, true);  // Capturing

You can stop propagation with event.stopPropagation().`
    },
    {
      id: 36,
      category: 'Advanced',
      question: 'Explain what a Memory Leak is and how to prevent them in JavaScript.',
      answer: `A Memory Leak occurs when objects are no longer needed but are still referenced, preventing garbage collection.

Common causes:
• Uncleaned event listeners
• Forgotten timers
• Global variables
• Circular references

Prevention:
• Remove event listeners when not needed
• Clear intervals and timeouts
• Avoid global variables
• Use WeakMap and WeakSet for temporary references`
    },
    {
      id: 37,
      category: 'Advanced',
      question: 'Describe the internal workings of the new keyword.',
      answer: `The new keyword:
1. Creates a new empty object
2. Sets the object's prototype to the constructor's prototype
3. Binds this to the new object
4. Executes the constructor function
5. Returns the new object (or the explicitly returned object)

function Person(name) {
  this.name = name;
}

const john = new Person('John');
// Equivalent to:
// 1. const john = {};
// 2. john.__proto__ = Person.prototype;
// 3. Person.call(john, 'John');
// 4. return john;`
    },
    {
      id: 38,
      category: 'Advanced',
      question: 'What are Service Workers and how do they improve web performance?',
      answer: `Service Workers are scripts that run in the background, separate from the main thread. They enable features like:

• Offline support
• Caching strategies
• Push notifications
• Background sync

They improve performance by:
• Caching resources for offline use
• Intercepting network requests
• Serving cached content when offline
• Enabling Progressive Web App features`
    },
    {
      id: 39,
      category: 'Advanced',
      question: 'How do you implement currying?',
      answer: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

Currying transforms a function with multiple arguments into a series of functions, each accepting a single argument.

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6`
    },
    {
      id: 40,
      category: 'Advanced',
      question: 'What is the purpose of WeakMap and WeakSet?',
      answer: `WeakMap and WeakSet hold "weak" references to objects, meaning if there are no other references to an object, it can be garbage-collected.

WeakMap keys must be objects and are not enumerable.
WeakSet values must be objects and are not enumerable.

const wm = new WeakMap();
let obj = {};
wm.set(obj, 'value');
obj = null; // Object can be garbage collected

This prevents memory leaks in certain scenarios.`
    }
  ]

  const handleFlashcardAction = (action: 'knew' | 'learnt' | 'skip') => {
    if (action === 'knew') setKnewCount(prev => prev + 1)
    if (action === 'learnt') setLearntCount(prev => prev + 1)
    if (action === 'skip') setSkippedCount(prev => prev + 1)
    
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
                Top {totalQuestions} JavaScript Coding Interview Questions and Answers
              </h1>

              {/* Hero Image */}
              <div className="rounded-lg p-8 mb-6 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">JavaScript Coding</h2>
                  <h3 className="text-xl text-blue-100 mb-4">interview questions</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-yellow-400 rounded flex items-center justify-center">
                      <span className="text-black font-bold text-lg">JS</span>
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
                Just like its ecosystem, the world of JavaScript coding interview questions is constantly evolving. 
                As the wonderful programming language that it is, JavaScript is used to create everything from dynamic web pages to complex web servers.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Ready for the Interview</h2>
                
                <p className="text-gray-700 mb-4">
                  Before diving into the questions, it's important to understand what interviewers are looking for.
                </p>
                
                <p className="text-gray-700 mb-4">
                  They want to see how you solve problems, how you face the unknown, and the thought process behind your solutions.
                </p>
                
                <p className="text-gray-700 mb-4">
                  They'll want to understand how you think about data structures and how you approach real-world scenarios. 
                  How do you apply those theoretical tools to solve actual problems?
                </p>
                
                <p className="text-gray-700 mb-6">
                  On top of that, remember to review your basic JavaScript concepts and practice writing clean, efficient code. 
                  In the end, you'll be doing that every day.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-blue-800">
                    <strong>Pro tip:</strong> Don't just memorize solutions; understand the core principles. 
                    Practice explaining your thought process out loud.
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
                        <RotateCcw className="w-4 h-4" />
                        Reset
                      </button>
                    </div>
                  </div>

                  {/* Flashcard */}
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {interviewQuestions[currentFlashcard]?.category} Questions
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                      {interviewQuestions[currentFlashcard]?.question}
                    </h3>

                    {!showAnswer ? (
                      <button 
                        onClick={() => setShowAnswer(true)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium transition-colors"
                      >
                        Click to Reveal the Answer
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left">
                          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                            {interviewQuestions[currentFlashcard]?.answer}
                          </pre>
                        </div>
                        
                        <div className="flex items-center justify-center gap-3 pt-4 border-t">
                          <button 
                            onClick={() => setShowAnswer(false)}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                          >
                            Hide Answer
                          </button>
                          <button 
                            onClick={() => handleFlashcardAction('knew')}
                            className="px-4 py-2 text-green-700 border border-green-300 rounded-md text-sm font-medium hover:bg-green-50 transition-colors"
                          >
                            Already Know that
                          </button>
                          <button 
                            onClick={() => handleFlashcardAction('learnt')}
                            className="px-4 py-2 text-blue-700 border border-blue-300 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
                          >
                            Didn't Know that
                          </button>
                          <button 
                            onClick={() => handleFlashcardAction('skip')}
                            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                          >
                            Skip Question
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Questions List Section */}
            {activeSection === 'questions' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions List</h2>
                
                {/* Beginner Questions */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Beginner Questions</h3>
                  <div className="space-y-6">
                    {beginnerQuestions.map((question) => (
                      <div key={question.id} className="border-b border-gray-200 pb-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {question.question}
                        </h4>
                        <div className="prose max-w-none">
                          <pre className="whitespace-pre-wrap text-gray-700 text-sm font-mono bg-gray-50 p-4 rounded-lg">
                            {question.answer}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mid-Level Questions */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Mid-Level Questions</h3>
                  <div className="space-y-6">
                    {midLevelQuestions.map((question) => (
                      <div key={question.id} className="border-b border-gray-200 pb-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {question.question}
                        </h4>
                        <div className="prose max-w-none">
                          <pre className="whitespace-pre-wrap text-gray-700 text-sm font-mono bg-gray-50 p-4 rounded-lg">
                            {question.answer}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Questions */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Questions</h3>
                  <div className="space-y-6">
                    {advancedQuestions.map((question) => (
                      <div key={question.id} className="border-b border-gray-200 pb-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {question.question}
                        </h4>
                        <div className="prose max-w-none">
                          <pre className="whitespace-pre-wrap text-gray-700 text-sm font-mono bg-gray-50 p-4 rounded-lg">
                            {question.answer}
                          </pre>
                        </div>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Guides</h3>
              <div className="space-y-3">
                <Link href="/guides/python-vs-javascript" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Python vs JavaScript: Ultimate Guide
                </Link>
                <Link href="/guides/react-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  React Interview Questions
                </Link>
                <Link href="/guides/nodejs-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Node.js Interview Questions
                </Link>
                <Link href="/guides/frontend-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Frontend Interview Questions
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Ready for Your Interview?
              </h3>
              <p className="text-blue-700 text-sm mb-4">
                Practice these questions and understand the concepts. Good luck!
              </p>
              <Link
                href="/career"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                Career Guidance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
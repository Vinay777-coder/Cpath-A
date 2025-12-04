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

export default function PythonInterviewQuestionsPage() {
  const [activeSection, setActiveSection] = useState('intro')
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [knewCount, setKnewCount] = useState(0)
  const [learntCount, setLearntCount] = useState(0)
  const [skippedCount, setSkippedCount] = useState(0)

  // 60 Original Python Interview Questions - Organized by Difficulty
  const interviewQuestions = [
    // ==================== BEGINNER QUESTIONS (1-25) ====================
    {
      id: 1,
      category: 'Beginner',
      question: 'What is Python and what are its key features?',
      answer: `Python is a high-level, interpreted programming language known for its simplicity and readability.

Key features:
• Easy to learn and use
• Interpreted language (no compilation needed)
• Cross-platform compatibility
• Large standard library
• Object-oriented programming support
• Dynamic typing
• Strong community support`
    },
    {
      id: 2,
      category: 'Beginner',
      question: 'What is the difference between list and tuple in Python?',
      answer: `Lists are mutable (can be changed), while tuples are immutable (cannot be changed).

List example:
my_list = [1, 2, 3]
my_list[0] = 10  # This works

Tuple example:
my_tuple = (1, 2, 3)
my_tuple[0] = 10  # This raises an error

Other differences:
• Lists use [], tuples use ()
• Lists are slower than tuples
• Tuples can be used as dictionary keys`
    },
    {
      id: 3,
      category: 'Beginner',
      question: 'Explain the difference between == and is operators.',
      answer: `== checks for value equality, while 'is' checks for identity (same object in memory).

Example:
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)  # True (same values)
print(a is b)  # False (different objects)
print(a is c)  # True (same object)

Use == for value comparison, use 'is' for identity comparison (especially with None).`
    },
    {
      id: 4,
      category: 'Beginner',
      question: 'What are Python data types?',
      answer: `Python has several built-in data types:

Numeric Types:
• int: Integers (1, 2, 3)
• float: Floating point numbers (1.5, 2.7)
• complex: Complex numbers (3+4j)

Sequence Types:
• str: Strings ("hello")
• list: Ordered, mutable collection [1, 2, 3]
• tuple: Ordered, immutable collection (1, 2, 3)

Mapping Type:
• dict: Key-value pairs {"key": "value"}

Set Types:
• set: Unordered collection of unique elements {1, 2, 3}

Boolean Type:
• bool: True or False`
    },
    {
      id: 5,
      category: 'Beginner',
      question: 'How do you handle exceptions in Python?',
      answer: `Python uses try-except blocks to handle exceptions:

try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
else:
    print("No exception occurred")
finally:
    print("This always executes")

The finally block always runs, regardless of whether an exception occurs.`
    },
    {
      id: 6,
      category: 'Beginner',
      question: 'What is a lambda function in Python?',
      answer: `A lambda function is a small anonymous function that can have any number of arguments but can only have one expression.

Syntax: lambda arguments: expression

Examples:
# Square a number
square = lambda x: x**2
print(square(5))  # Output: 25

# Add two numbers
add = lambda x, y: x + y
print(add(3, 4))  # Output: 7

# Used with map, filter, reduce
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]`
    },
    {
      id: 7,
      category: 'Beginner',
      question: 'What is list comprehension in Python?',
      answer: `List comprehension provides a concise way to create lists based on existing lists.

Syntax: [expression for item in iterable if condition]

Examples:
# Create squares of numbers 1-10
squares = [x**2 for x in range(1, 11)]

# Filter even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [x for x in numbers if x % 2 == 0]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]`
    },
    {
      id: 8,
      category: 'Beginner',
      question: 'What are Python modules and packages?',
      answer: `A module is a file containing Python definitions and statements. A package is a collection of modules.

Module example:
# math_operations.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# Using the module
import math_operations
result = math_operations.add(5, 3)

Package structure:
my_package/
    __init__.py
    module1.py
    module2.py

# Import from package
from my_package import module1`
    },
    {
      id: 9,
      category: 'Beginner',
      question: 'What is the difference between append() and extend() methods?',
      answer: `append() adds a single element to the end of a list, while extend() adds all elements from an iterable.

append() example:
my_list = [1, 2, 3]
my_list.append([4, 5])
print(my_list)  # [1, 2, 3, [4, 5]]

extend() example:
my_list = [1, 2, 3]
my_list.extend([4, 5])
print(my_list)  # [1, 2, 3, 4, 5]

append() treats the argument as a single element, extend() iterates through the argument.`
    },
    {
      id: 10,
      category: 'Beginner',
      question: 'How do you read and write files in Python?',
      answer: `Python provides built-in functions for file operations:

Reading a file:
with open('filename.txt', 'r') as file:
    content = file.read()
    print(content)

Writing to a file:
with open('filename.txt', 'w') as file:
    file.write('Hello, World!')

Appending to a file:
with open('filename.txt', 'a') as file:
    file.write('Additional content')

The 'with' statement ensures proper file closure even if an exception occurs.`
    },

    // ==================== MID-LEVEL QUESTIONS (11-35) ====================
    {
      id: 11,
      category: 'Mid-Level',
      question: 'What are Python decorators and how do they work?',
      answer: `Decorators are functions that modify or extend the behavior of other functions without changing their code.

Basic decorator:
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function call
# Hello!
# After function call

Decorators use the @ syntax as syntactic sugar for func = decorator(func).`
    },
    {
      id: 12,
      category: 'Mid-Level',
      question: 'Explain Python generators and the yield keyword.',
      answer: `Generators are functions that return an iterator object. They use 'yield' instead of 'return' to produce values one at a time.

def fibonacci_generator():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Usage
fib = fibonacci_generator()
print(next(fib))  # 0
print(next(fib))  # 1
print(next(fib))  # 1

Advantages:
• Memory efficient (lazy evaluation)
• Can represent infinite sequences
• State is maintained between calls`
    },
    {
      id: 13,
      category: 'Mid-Level',
      question: 'What is the difference between *args and **kwargs?',
      answer: `*args and **kwargs allow functions to accept variable numbers of arguments.

*args (arguments):
def my_function(*args):
    for arg in args:
        print(arg)

my_function(1, 2, 3, 4)  # Prints: 1, 2, 3, 4

**kwargs (keyword arguments):
def my_function(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

my_function(name="John", age=30)  # Prints: name: John, age: 30

Combined usage:
def my_function(required_arg, *args, **kwargs):
    print(f"Required: {required_arg}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")`
    },
    {
      id: 14,
      category: 'Mid-Level',
      question: 'How does Python memory management work?',
      answer: `Python uses automatic memory management with garbage collection:

Reference Counting:
• Each object has a reference count
• When count reaches zero, object is deallocated
• Handles most memory cleanup

Garbage Collection:
• Detects and removes circular references
• Runs periodically or when memory is low
• Uses generational garbage collection

Memory Pool:
• Python maintains pools for small objects
• Reduces fragmentation and improves performance

Example of circular reference:
class Node:
    def __init__(self, data):
        self.data = data
        self.ref = None

a = Node(1)
b = Node(2)
a.ref = b
b.ref = a  # Circular reference`
    },
    {
      id: 15,
      category: 'Mid-Level',
      question: 'What are Python context managers?',
      answer: `Context managers ensure proper resource management using the 'with' statement.

Built-in example:
with open('file.txt', 'r') as f:
    content = f.read()
# File automatically closed

Custom context manager:
class MyContextManager:
    def __enter__(self):
        print("Entering context")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context")
        return False

with MyContextManager():
    print("Inside context")

Using contextlib:
from contextlib import contextmanager

@contextmanager
def my_context():
    print("Setup")
    yield "resource"
    print("Cleanup")`
    },

    // ==================== ADVANCED QUESTIONS (36-60) ====================
    {
      id: 16,
      category: 'Advanced',
      question: 'Explain Python metaclasses and their use cases.',
      answer: `Metaclasses are classes whose instances are classes themselves. They control class creation.

Basic metaclass:
class MyMetaclass(type):
    def __new__(cls, name, bases, attrs):
        # Modify class attributes
        attrs['custom_attr'] = 'Added by metaclass'
        return super().__new__(cls, name, bases, attrs)

class MyClass(metaclass=MyMetaclass):
    pass

print(MyClass.custom_attr)  # "Added by metaclass"

Use cases:
• API frameworks (like Django ORM)
• Singleton patterns
• Attribute validation
• Automatic method generation

Remember: "Classes are instances of metaclasses"`
    },
    {
      id: 17,
      category: 'Advanced',
      question: 'How does Python\'s Global Interpreter Lock (GIL) work?',
      answer: `The GIL is a mutex that prevents multiple threads from executing Python bytecode simultaneously.

Impact:
• Only one thread can execute Python code at a time
• CPU-bound tasks don't benefit from threading
• I/O-bound tasks can still benefit (GIL is released during I/O)

Workarounds:
• Use multiprocessing for CPU-bound tasks
• Use async/await for I/O-bound tasks
• Use C extensions that release the GIL
• Consider alternative Python implementations (PyPy, Jython)

Example:
import threading
import time

def cpu_task():
    # CPU-intensive task (limited by GIL)
    total = sum(i**2 for i in range(10**6))

def io_task():
    # I/O task (can benefit from threading)
    time.sleep(1)`
    },
    {
      id: 18,
      category: 'Advanced',
      question: 'What are Python descriptors and how do they work?',
      answer: `Descriptors are objects that define how attribute access is handled for other objects.

Protocol methods:
• __get__(self, obj, type=None)
• __set__(self, obj, value)
• __delete__(self, obj)

Example:
class Descriptor:
    def __init__(self):
        self.value = None
    
    def __get__(self, obj, objtype):
        print(f"Getting value: {self.value}")
        return self.value
    
    def __set__(self, obj, value):
        print(f"Setting value: {value}")
        self.value = value

class MyClass:
    attr = Descriptor()

obj = MyClass()
obj.attr = 10  # Calls __set__
print(obj.attr)  # Calls __get__

Built-in examples: property, staticmethod, classmethod`
    },
    {
      id: 19,
      category: 'Advanced',
      question: 'Explain Python\'s asyncio and coroutines.',
      answer: `asyncio enables asynchronous programming using coroutines for concurrent execution.

Basic async function:
import asyncio

async def fetch_data():
    print("Fetching data...")
    await asyncio.sleep(1)  # Simulate I/O
    print("Data fetched!")
    return "data"

async def main():
    result = await fetch_data()
    print(result)

# Run the event loop
asyncio.run(main())

Concurrent execution:
async def main():
    tasks = [
        fetch_data(),
        fetch_data(),
        fetch_data()
    ]
    results = await asyncio.gather(*tasks)

Key concepts:
• Event loop manages coroutine execution
• await yields control to other coroutines
• Much more efficient than threading for I/O`
    },
    {
      id: 20,
      category: 'Advanced',
      question: 'How do you optimize Python code performance?',
      answer: `Several strategies for Python performance optimization:

1. Use built-in functions and libraries:
# Slow
result = []
for i in range(1000000):
    result.append(i**2)

# Fast
result = [i**2 for i in range(1000000)]

2. Profile your code:
import cProfile
cProfile.run('your_function()')

3. Use numpy for numerical operations:
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
result = arr ** 2  # Much faster than pure Python

4. Cache expensive operations:
from functools import lru_cache

@lru_cache(maxsize=128)
def expensive_function(n):
    return sum(i**2 for i in range(n))

5. Use generators for large datasets
6. Consider Cython or PyPy for critical sections`
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
                Top {totalQuestions} Python Coding Interview Questions and Answers
              </h1>

              {/* Hero Image */}
              <div className="rounded-lg p-8 mb-6 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 100%)'}}>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Python Coding</h2>
                  <h3 className="text-xl text-blue-100 mb-4">interview questions</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">PY</span>
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
                Python continues to be one of the most popular programming languages in the world. 
                From web development to data science, artificial intelligence to automation, Python's versatility makes it essential for modern developers.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Ready for Your Python Interview</h2>
                
                <p className="text-gray-700 mb-4">
                  Python interviews test both your understanding of the language's fundamentals and your ability to solve problems efficiently.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Focus on understanding Python's core concepts like data structures, object-oriented programming, and built-in functions.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Practice writing clean, readable code and be prepared to explain your thought process. 
                  Python values code readability, so demonstrating Pythonic solutions is crucial.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Don't forget to review advanced topics like decorators, generators, and async programming if you're applying for senior positions.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-blue-800">
                    <strong>Pro tip:</strong> Practice on platforms like LeetCode with Python-specific problems. 
                    Understand the Zen of Python and be ready to write idiomatic Python code.
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
                <Link href="/guides/javascript-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  JavaScript Interview Questions
                </Link>
                <Link href="/guides/react-interview-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  React Interview Questions
                </Link>
                <Link href="/guides/system-design-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  System Design Questions
                </Link>
                <Link href="/guides/rest-api-questions" className="block text-blue-600 hover:text-blue-800 text-sm">
                  REST API Interview Questions
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Ready for Your Python Interview?
              </h3>
              <p className="text-blue-700 text-sm mb-4">
                Master these Python concepts and stand out in your next interview!
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
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, RotateCcw, BookOpen, Brain, Users } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  answer: string;
  category: 'Fundamentals' | 'Hooks' | 'State Management' | 'Performance' | 'Testing' | 'Advanced';
}

const questions: Question[] = [
  // Fundamentals (12 questions)
  {
    id: 1,
    question: "What is React and what are its main features?",
    answer: "React is a JavaScript library for building user interfaces, particularly web applications. Main features include: Virtual DOM for efficient rendering, Component-based architecture for reusable UI elements, Unidirectional data flow, JSX syntax for writing components, Strong ecosystem and community support.",
    category: "Fundamentals"
  },
  {
    id: 2,
    question: "What is JSX and why is it used in React?",
    answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. Benefits include: More readable and expressive component code, Type checking at compile time, Prevents injection attacks by escaping values, Familiar syntax for developers coming from HTML.",
    category: "Fundamentals"
  },
  {
    id: 3,
    question: "What is the Virtual DOM and how does it work?",
    answer: "Virtual DOM is a JavaScript representation of the real DOM kept in memory. Process: 1) React creates a virtual representation of the UI, 2) When state changes, a new virtual DOM tree is created, 3) React compares (diffs) the new tree with the previous one, 4) Only the differences are applied to the real DOM, resulting in better performance.",
    category: "Fundamentals"
  },
  {
    id: 4,
    question: "What are React components and what types exist?",
    answer: "Components are independent, reusable pieces of UI. Types include: Functional Components (modern approach using functions), Class Components (legacy approach using ES6 classes), Controlled Components (form inputs controlled by React state), Uncontrolled Components (form inputs managed by DOM), Higher-Order Components (HOCs), Pure Components.",
    category: "Fundamentals"
  },
  {
    id: 5,
    question: "What are props in React and how are they used?",
    answer: "Props (properties) are read-only data passed from parent to child components. Characteristics: Immutable within the receiving component, Passed down the component tree, Can be any JavaScript value (strings, objects, functions), Enable component reusability, Follow unidirectional data flow pattern.",
    category: "Fundamentals"
  },
  {
    id: 6,
    question: "What is state in React and how does it differ from props?",
    answer: "State is mutable data that belongs to a component. Differences from props: State is mutable, props are immutable; State is internal to component, props come from parent; State changes trigger re-renders; State is managed within the component, props are passed down; State is private, props are the component's API.",
    category: "Fundamentals"
  },
  {
    id: 7,
    question: "What is the difference between functional and class components?",
    answer: "Key differences: Syntax - Functions vs ES6 classes; State - Hooks vs this.state; Lifecycle - useEffect vs lifecycle methods; Performance - Generally better with functions; Code length - Functions are more concise; Future - React team recommends functional components with hooks.",
    category: "Fundamentals"
  },
  {
    id: 8,
    question: "What are React keys and why are they important?",
    answer: "Keys are special attributes that help React identify which list items have changed. Importance: Enable efficient re-rendering of lists, Help maintain component state correctly, Prevent rendering bugs in dynamic lists, Should be stable and unique identifiers, Avoid using array indices when list items can change order.",
    category: "Fundamentals"
  },
  {
    id: 9,
    question: "What is the component lifecycle in React?",
    answer: "Component lifecycle has three phases: Mounting (constructor, render, componentDidMount), Updating (render, componentDidUpdate), Unmounting (componentWillUnmount). In functional components, useEffect hook handles lifecycle events with dependencies array controlling when effects run.",
    category: "Fundamentals"
  },
  {
    id: 10,
    question: "What are controlled vs uncontrolled components?",
    answer: "Controlled Components: Form data handled by React state, Input value controlled by state, Changes handled via onChange handlers, Predictable and testable. Uncontrolled Components: Form data handled by DOM itself, Use refs to access values, Less code but less control, Good for simple forms with minimal validation.",
    category: "Fundamentals"
  },
  {
    id: 11,
    question: "What is event handling in React?",
    answer: "React uses SyntheticEvents - wrappers around native events providing consistent API across browsers. Features: Automatic event delegation, Consistent behavior across browsers, Access to native event via nativeEvent property, Automatic cleanup to prevent memory leaks, CamelCase naming convention (onClick, onChange).",
    category: "Fundamentals"
  },
  {
    id: 12,
    question: "What are React fragments and when should you use them?",
    answer: "Fragments let you group children without adding extra DOM nodes. Usage: When component needs to return multiple elements, Avoid unnecessary wrapper divs, Keep DOM structure clean, Syntax options: <React.Fragment> or shorthand <>, Can have keys when rendering lists of fragments.",
    category: "Fundamentals"
  },

  // Hooks (15 questions)
  {
    id: 13,
    question: "What are React Hooks and what problems do they solve?",
    answer: "Hooks are functions that let you use state and lifecycle features in functional components. Problems solved: Eliminate need for class components, Reuse stateful logic between components, Reduce component complexity, Easier testing, Better code organization, Improved performance optimizations.",
    category: "Hooks"
  },
  {
    id: 14,
    question: "Explain useState hook with examples.",
    answer: "useState adds state to functional components. Usage: const [state, setState] = useState(initialValue). Returns array with current state and setter function. Setter can take value or function: setState(newValue) or setState(prev => prev + 1). Multiple useState calls for different state variables. State updates are asynchronous.",
    category: "Hooks"
  },
  {
    id: 15,
    question: "How does useEffect hook work and what are its use cases?",
    answer: "useEffect performs side effects in functional components. Use cases: Data fetching, Subscriptions, Manual DOM manipulation, Cleanup operations. Dependencies array controls when effect runs: No deps - runs every render, Empty deps [] - runs once, With deps [value] - runs when value changes. Return cleanup function for subscriptions/timers.",
    category: "Hooks"
  },
  {
    id: 16,
    question: "What is useContext hook and when should you use it?",
    answer: "useContext consumes React context values without nesting. Usage: const value = useContext(MyContext). Benefits: Avoid prop drilling, Share global state, Cleaner component tree. Best practices: Use for truly global data (theme, user info), Avoid for frequently changing data, Combine with useReducer for complex state, Consider performance implications.",
    category: "Hooks"
  },
  {
    id: 17,
    question: "Explain useReducer hook and when to use it over useState.",
    answer: "useReducer manages complex state logic with reducer function. Usage: const [state, dispatch] = useReducer(reducer, initialState). When to use: Complex state objects, State transitions depend on previous state, Multiple sub-values, State logic needs to be testable separately, When you'd use Redux but component-level.",
    category: "Hooks"
  },
  {
    id: 18,
    question: "What are useMemo and useCallback hooks?",
    answer: "Performance optimization hooks: useMemo - memoizes expensive calculations, returns cached value if dependencies unchanged. useCallback - memoizes function instances, prevents unnecessary re-renders of child components. Both take dependencies array. Use when: Expensive computations, Preventing child re-renders, Maintaining referential equality.",
    category: "Hooks"
  },
  {
    id: 19,
    question: "What is useRef hook and its common use cases?",
    answer: "useRef returns mutable ref object with .current property. Use cases: Accessing DOM elements directly, Storing mutable values that don't trigger re-renders, Keeping references to intervals/timeouts, Previous props/state values, Focus management, Integration with third-party libraries. Doesn't cause re-renders when .current changes.",
    category: "Hooks"
  },
  {
    id: 20,
    question: "What are the rules of hooks?",
    answer: "Hook rules: 1) Only call hooks at the top level - never inside loops, conditions, or nested functions, 2) Only call hooks from React functions - functional components or custom hooks, 3) Hook names must start with 'use', 4) Custom hooks can call other hooks. ESLint plugin helps enforce these rules.",
    category: "Hooks"
  },
  {
    id: 21,
    question: "How do you create custom hooks?",
    answer: "Custom hooks are JavaScript functions starting with 'use' that can call other hooks. Benefits: Extract component logic, Reuse stateful logic, Share logic between components, Cleaner component code. Example: useCounter, useLocalStorage, useFetch. Return values/functions that components need. Follow hooks rules.",
    category: "Hooks"
  },
  {
    id: 22,
    question: "What is useLayoutEffect and how does it differ from useEffect?",
    answer: "useLayoutEffect runs synchronously after all DOM mutations but before paint. Differences from useEffect: Synchronous vs asynchronous execution, Blocks paint vs doesn't block, Use for DOM measurements vs side effects, Can cause performance issues if overused. Use when: Measuring DOM elements, Synchronous DOM updates needed.",
    category: "Hooks"
  },
  {
    id: 23,
    question: "Explain useImperativeHandle hook.",
    answer: "useImperativeHandle customizes instance value exposed to parent components when using ref. Usage: useImperativeHandle(ref, () => ({ customMethod }), [deps]). Used with forwardRef. Allows parent to call child methods imperatively. Rare use cases: Focus management, Scroll to element, Triggering animations, Integration with imperative libraries.",
    category: "Hooks"
  },
  {
    id: 24,
    question: "What is useDebugValue hook?",
    answer: "useDebugValue displays label for custom hooks in React DevTools. Usage: useDebugValue(value) or useDebugValue(value, formatFn). Only called when DevTools are open. Helps debug custom hooks, Shows meaningful information in DevTools, Optional format function for expensive formatting. Development tool only.",
    category: "Hooks"
  },
  {
    id: 25,
    question: "How do you handle cleanup in useEffect?",
    answer: "Return cleanup function from useEffect: useEffect(() => { /* setup */ return () => { /* cleanup */ }; }, [deps]). Cleanup runs: Before next effect execution, When component unmounts, When dependencies change. Common cleanups: Clear timeouts/intervals, Cancel network requests, Remove event listeners, Unsubscribe from subscriptions.",
    category: "Hooks"
  },
  {
    id: 26,
    question: "What are the common mistakes with hooks?",
    answer: "Common mistakes: Breaking rules of hooks (conditional calls), Missing dependencies in useEffect, Infinite re-render loops, Using stale closures, Not cleaning up effects, Overusing useMemo/useCallback, Mutating state directly, Not using functional updates when needed, Forgetting dependency arrays.",
    category: "Hooks"
  },
  {
    id: 27,
    question: "How do you optimize performance with hooks?",
    answer: "Performance optimization strategies: Use useMemo for expensive calculations, useCallback for function references, Split state to prevent unnecessary re-renders, Use useRef for mutable values, Lazy initial state in useState, Debounce effects with custom hooks, Avoid creating objects in render, Use React.memo for components.",
    category: "Hooks"
  },

  // State Management (8 questions)
  {
    id: 28,
    question: "What are different state management approaches in React?",
    answer: "State management approaches: Local state (useState), Context API for global state, Third-party libraries (Redux, Zustand, Jotai), URL state for navigation, Server state (React Query, SWR), Form state (React Hook Form, Formik), Each approach has trade-offs in complexity, performance, and use cases.",
    category: "State Management"
  },
  {
    id: 29,
    question: "When should you lift state up in React?",
    answer: "Lift state up when: Multiple components need to share state, Sibling components need to communicate, Parent needs to coordinate children, State affects multiple parts of the app. Move state to the closest common ancestor. Benefits: Single source of truth, Easier debugging, Predictable data flow.",
    category: "State Management"
  },
  {
    id: 30,
    question: "What is prop drilling and how can you avoid it?",
    answer: "Prop drilling is passing props through intermediate components that don't use them. Solutions: Context API for global state, Component composition (render props, children), State management libraries (Redux), Custom hooks for shared logic, Move state closer to where it's used, Split large components.",
    category: "State Management"
  },
  {
    id: 31,
    question: "How does React Context API work?",
    answer: "Context provides way to pass data through component tree without prop drilling. Usage: Create context with createContext(), Provide value with Provider component, Consume with useContext hook or Consumer component. Best practices: Use for truly global data, Avoid frequent updates, Split contexts by concern, Provide default values.",
    category: "State Management"
  },
  {
    id: 32,
    question: "What are the performance implications of Context?",
    answer: "Context performance considerations: All consumers re-render when context value changes, Passing objects as value creates new reference each render, Can cause unnecessary re-renders in large apps. Optimizations: Split contexts by update frequency, Memoize context values, Use multiple contexts, Combine with useMemo/useCallback.",
    category: "State Management"
  },
  {
    id: 33,
    question: "How do you manage complex state with useReducer?",
    answer: "useReducer pattern: Define initial state object, Create reducer function with switch statement, Dispatch actions with type and payload, Keep reducer pure (no side effects). Benefits: Predictable state transitions, Easier testing, Better for complex state, Action-based updates, Similar to Redux pattern.",
    category: "State Management"
  },
  {
    id: 34,
    question: "What is the difference between local and global state?",
    answer: "Local state: Belongs to single component, Managed with useState/useReducer, Fast and simple, Good for form inputs, toggles. Global state: Shared across components, Managed with Context/Redux, More complex setup, Good for user data, theme, app settings. Choose based on scope and sharing needs.",
    category: "State Management"
  },
  {
    id: 35,
    question: "How do you handle asynchronous state updates?",
    answer: "Asynchronous state handling: State updates are batched and asynchronous, Use functional updates for state dependent on previous state, Handle loading/error states explicitly, Use useEffect for side effects after state updates, Consider libraries like React Query for server state, Implement optimistic updates carefully.",
    category: "State Management"
  },

  // Performance (8 questions)
  {
    id: 36,
    question: "What are the main performance optimization techniques in React?",
    answer: "Key optimization techniques: React.memo to prevent unnecessary re-renders, useMemo for expensive calculations, useCallback for function references, Code splitting with React.lazy, Virtualization for large lists, Proper key usage in lists, Avoid inline objects/functions in JSX, Profile with React DevTools.",
    category: "Performance"
  },
  {
    id: 37,
    question: "How does React.memo work and when should you use it?",
    answer: "React.memo is HOC that memoizes component result. Re-renders only if props change (shallow comparison). Usage: React.memo(Component) or React.memo(Component, customComparison). Use when: Component renders often with same props, Expensive rendering logic, Parent re-renders frequently. Don't overuse - has its own overhead.",
    category: "Performance"
  },
  {
    id: 38,
    question: "What is code splitting and how do you implement it in React?",
    answer: "Code splitting breaks bundle into smaller chunks loaded on demand. Implementation: React.lazy() for dynamic imports, Suspense component for loading states, Route-based splitting with React Router, Component-based splitting for heavy components. Benefits: Faster initial load, Better user experience, Reduced bandwidth usage.",
    category: "Performance"
  },
  {
    id: 39,
    question: "How do you identify and fix performance issues in React?",
    answer: "Performance debugging: React DevTools Profiler to identify slow components, Browser DevTools Performance tab, Lighthouse audits, Bundle analyzers for code splitting opportunities, Monitor unnecessary re-renders, Check for memory leaks, Use React.StrictMode in development, Profile in production-like environment.",
    category: "Performance"
  },
  {
    id: 40,
    question: "What are common performance anti-patterns in React?",
    answer: "Common anti-patterns: Creating objects/functions in render, Not using keys in lists, Deep component nesting, Massive component state, Expensive operations in render, Not cleaning up effects, Overusing Context, Premature optimization, Mutating props/state, Inline styles creating new objects.",
    category: "Performance"
  },
  {
    id: 41,
    question: "How do you optimize list rendering in React?",
    answer: "List optimization strategies: Use stable, unique keys, Implement virtualization for large lists (react-window, react-virtualized), Use React.memo for list items, Avoid inline functions in map, Consider pagination or infinite scrolling, Optimize item component rendering, Use proper data structures, Debounce search/filter operations.",
    category: "Performance"
  },
  {
    id: 42,
    question: "What is the difference between useMemo and useCallback performance-wise?",
    answer: "Both prevent unnecessary recalculations but serve different purposes: useMemo memoizes values/objects, useCallback memoizes functions. Performance impact: Both have overhead of dependency checking, Only beneficial when preventing expensive operations or child re-renders, Measure before optimizing, Consider referential equality needs.",
    category: "Performance"
  },
  {
    id: 43,
    question: "How do you handle large datasets efficiently in React?",
    answer: "Large dataset strategies: Virtualization for DOM efficiency, Pagination to limit rendered items, Lazy loading for images/content, Debounced search and filtering, Memoization of processed data, Background data processing, Efficient data structures, Consider server-side solutions, Progressive enhancement approaches.",
    category: "Performance"
  },

  // Testing (4 questions)
  {
    id: 44,
    question: "How do you test React components?",
    answer: "Testing approaches: Unit tests with Jest and React Testing Library, Integration tests for component interactions, Snapshot testing for UI regression, End-to-end tests with Cypress/Playwright. Best practices: Test behavior over implementation, Use accessible queries, Mock external dependencies, Test user interactions.",
    category: "Testing"
  },
  {
    id: 45,
    question: "What is React Testing Library and how does it differ from Enzyme?",
    answer: "React Testing Library focuses on testing behavior from user perspective. Key differences from Enzyme: No shallow rendering, Encourages accessibility testing, Tests implementation details less, More maintainable tests, Better integration with modern React patterns, Focuses on what users see and do.",
    category: "Testing"
  },
  {
    id: 46,
    question: "How do you test custom hooks?",
    answer: "Testing custom hooks: Use @testing-library/react-hooks renderHook utility, Test return values and functions, Test state changes with act(), Mock dependencies appropriately, Test error conditions, Use cleanup for effects, Test with different props/arguments, Consider integration tests in components.",
    category: "Testing"
  },
  {
    id: 47,
    question: "What are best practices for testing React applications?",
    answer: "Testing best practices: Write tests that resemble user behavior, Use semantic queries (getByRole, getByLabelText), Test error boundaries and loading states, Mock external services, Use MSW for API mocking, Maintain good test coverage, Avoid testing implementation details, Use proper cleanup in tests.",
    category: "Testing"
  },

  // Advanced (3 questions)
  {
    id: 48,
    question: "What are Higher-Order Components (HOCs) and when should you use them?",
    answer: "HOCs are functions that take a component and return enhanced component. Common uses: Cross-cutting concerns (authentication, logging), Code reuse across components, Props manipulation, Conditional rendering. Modern alternatives: Custom hooks for logic reuse, Render props pattern, Composition. HOCs still useful for legacy code and some specific patterns.",
    category: "Advanced"
  },
  {
    id: 49,
    question: "What is the render props pattern and how does it work?",
    answer: "Render props is technique for sharing code using prop whose value is a function. Pattern: Component takes function as prop, Calls function with state/data, Function returns JSX to render. Benefits: Flexible composition, Runtime composition, Easy to understand. Replaced largely by hooks but still useful for certain scenarios.",
    category: "Advanced"
  },
  {
    id: 50,
    question: "How do you handle error boundaries in React?",
    answer: "Error boundaries catch JavaScript errors in component tree. Implementation: Class component with componentDidCatch and/or getDerivedStateFromError, Display fallback UI when error occurs, Log error information. Limitations: Don't catch errors in event handlers, async code, or during SSR. Use multiple boundaries for granular error handling.",
    category: "Advanced"
  }
];

export default function ReactInterviewQuestionsPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: boolean}>({});
  const [showResults, setShowResults] = useState(false);
  const [activeSection, setActiveSection] = useState<'questions' | 'flashcards' | 'practice'>('questions');

  const handleAnswer = (questionId: number, isCorrect: boolean) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: isCorrect
    }));
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const getResults = () => {
    const total = questions.length;
    const answered = Object.keys(selectedAnswers).length;
    const correct = Object.values(selectedAnswers).filter(Boolean).length;
    return { total, answered, correct, percentage: total > 0 ? (correct / total) * 100 : 0 };
  };

  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Set<number>>(new Set());
  const [currentCategory, setCurrentCategory] = useState<string>('All');

  const handleFlashcardAction = (action: 'easy' | 'medium' | 'hard' | 'next' | 'prev') => {
    if (action === 'easy') {
      setMasteredCards(prev => new Set(Array.from(prev).concat(currentFlashcard)));
      setShowAnswer(false);
      setCurrentFlashcard((prev) => (prev + 1) % questions.length);
    } else if (action === 'medium' || action === 'hard') {
      setShowAnswer(false);
      setCurrentFlashcard((prev) => (prev + 1) % questions.length);
    } else if (action === 'next') {
      setShowAnswer(false);
      setCurrentFlashcard((prev) => (prev + 1) % questions.length);
    } else if (action === 'prev') {
      setShowAnswer(false);
      setCurrentFlashcard((prev) => (prev - 1 + questions.length) % questions.length);
    }
  };

  const categories = ['All', ...Array.from(new Set(questions.map(q => q.category)))];
  const filteredQuestions = currentCategory === 'All' 
    ? questions 
    : questions.filter(q => q.category === currentCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to Guides Button */}
        <div className="mb-6">
          <Link 
            href="/guides" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Top 50 React Interview Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master React fundamentals, hooks, state management, performance optimization, and advanced concepts
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveSection('questions')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeSection === 'questions'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <BookOpen className="inline w-4 h-4 mr-2" />
              Questions
            </button>
            <button
              onClick={() => setActiveSection('flashcards')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeSection === 'flashcards'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Brain className="inline w-4 h-4 mr-2" />
              Flashcards
            </button>
            <button
              onClick={() => setActiveSection('practice')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeSection === 'practice'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Users className="inline w-4 h-4 mr-2" />
              Practice
            </button>
          </div>
        </div>

        {/* Questions Section */}
        {activeSection === 'questions' && (
          <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    currentCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredQuestions.map((q) => (
              <div key={q.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex-1">
                    {q.id}. {q.question}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full ml-4">
                    {q.category}
                  </span>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  {q.answer}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Flashcards Section */}
        {activeSection === 'flashcards' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 min-h-[400px] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-gray-500">
                  Card {currentFlashcard + 1} of {questions.length}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {questions[currentFlashcard].category}
                </span>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    {showAnswer ? 'Answer:' : 'Question:'}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {showAnswer 
                      ? questions[currentFlashcard].answer
                      : questions[currentFlashcard].question
                    }
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                {!showAnswer ? (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Show Answer
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleFlashcardAction('easy')}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Easy
                    </button>
                    <button
                      onClick={() => handleFlashcardAction('medium')}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Medium
                    </button>
                    <button
                      onClick={() => handleFlashcardAction('hard')}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Hard
                    </button>
                  </>
                )}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleFlashcardAction('prev')}
                  className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => handleFlashcardAction('next')}
                  className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Mastered: {masteredCards.size} / {questions.length} cards
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{width: `${(masteredCards.size / questions.length) * 100}%`}}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Practice Section */}
        {activeSection === 'practice' && (
          <div className="max-w-2xl mx-auto">
            {!showResults ? (
              <div className="space-y-6">
                {questions.slice(0, 10).map((q) => (
                  <div key={q.id} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {q.id}. {q.question}
                    </h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => handleAnswer(q.id, true)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedAnswers[q.id] === true
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <Check className="inline w-4 h-4 mr-2" />
                        I know this well
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, false)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedAnswers[q.id] === false
                            ? 'border-red-500 bg-red-50 text-red-700'
                            : 'border-gray-200 hover:border-red-300'
                        }`}
                      >
                        <X className="inline w-4 h-4 mr-2" />
                        I need to review this
                      </button>
                    </div>
                    {selectedAnswers[q.id] !== undefined && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-700">{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="text-center">
                  <button
                    onClick={() => setShowResults(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Show Results
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Practice Results</h2>
                {(() => {
                  const results = getResults();
                  return (
                    <div className="space-y-4">
                      <div className="text-4xl font-bold text-blue-500">
                        {results.percentage.toFixed(1)}%
                      </div>
                      <div className="text-gray-600">
                        <p>You know {results.correct} out of {results.answered} questions well</p>
                        <p className="mt-2">
                          {results.correct === results.answered 
                            ? "Excellent! You're well prepared for React interviews!" 
                            : "Keep practicing! Review the questions you marked for improvement."}
                        </p>
                      </div>
                      <button
                        onClick={resetQuiz}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors mt-4"
                      >
                        <RotateCcw className="inline w-4 h-4 mr-2" />
                        Practice Again
                      </button>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
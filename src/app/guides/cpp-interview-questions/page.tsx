'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Target, TrendingUp, CheckCircle2, Zap, HardDrive } from 'lucide-react';

export default function CPPInterviewQuestionsGuide() {
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #ef4444 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            C++ Interview Questions
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Master advanced C++ concepts and ace your technical interviews with comprehensive examples, memory management, and performance optimization techniques.
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
                color: activeTab === id ? '#ef4444' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #ef4444' : '2px solid transparent',
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
                Advanced C++ Concepts
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Memory Management */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <HardDrive size={20} style={{ marginRight: '0.5rem' }} />
                    Memory Management & Pointers
                  </h4>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>Smart Pointers</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                      Smart pointers provide automatic memory management and help prevent memory leaks and dangling pointers.
                    </p>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem', overflow: 'auto' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`#include <memory>

// unique_ptr - Exclusive ownership
std::unique_ptr<int> ptr1 = std::make_unique<int>(42);
std::unique_ptr<int> ptr2 = std::move(ptr1); // Transfer ownership

// shared_ptr - Shared ownership with reference counting
std::shared_ptr<int> sptr1 = std::make_shared<int>(100);
std::shared_ptr<int> sptr2 = sptr1; // Both share ownership
std::cout << sptr1.use_count(); // Reference count: 2

// weak_ptr - Non-owning observer to break circular dependencies
std::weak_ptr<int> wptr = sptr1;
if (auto locked = wptr.lock()) {
    // Use locked pointer safely
    std::cout << *locked << std::endl;
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>RAII (Resource Acquisition Is Initialization)</h5>
                    <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                      RAII ensures resource cleanup through object destructors, preventing resource leaks.
                    </p>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`class FileManager {
private:
    FILE* file;
public:
    FileManager(const char* filename) {
        file = fopen(filename, "r");
        if (!file) throw std::runtime_error("Failed to open file");
    }
    
    ~FileManager() {
        if (file) fclose(file); // Automatic cleanup
    }
    
    // Prevent copying to avoid double-free
    FileManager(const FileManager&) = delete;
    FileManager& operator=(const FileManager&) = delete;
    
    // Enable moving
    FileManager(FileManager&& other) noexcept : file(other.file) {
        other.file = nullptr;
    }
};`}</pre>
                    </div>
                  </div>
                </div>

                {/* Object-Oriented Programming */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Code size={20} style={{ marginRight: '0.5rem' }} />
                    Advanced OOP Concepts
                  </h4>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>Virtual Functions & Polymorphism</h5>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem', overflow: 'auto' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`class Animal {
public:
    virtual void makeSound() = 0; // Pure virtual function
    virtual ~Animal() = default;   // Virtual destructor
};

class Dog : public Animal {
public:
    void makeSound() override {    // Override specifier
        std::cout << "Woof!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() override {
        std::cout << "Meow!" << std::endl;
    }
};

// Runtime polymorphism
void processAnimal(std::unique_ptr<Animal> animal) {
    animal->makeSound(); // Calls correct derived function
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>Multiple Inheritance & Virtual Base Classes</h5>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`class Base {
public:
    int value = 10;
};

// Virtual inheritance to avoid diamond problem
class Left : virtual public Base {
public:
    void leftMethod() { std::cout << "Left: " << value << std::endl; }
};

class Right : virtual public Base {
public:
    void rightMethod() { std::cout << "Right: " << value << std::endl; }
};

class Derived : public Left, public Right {
public:
    void access() {
        // No ambiguity due to virtual inheritance
        value = 20;
        leftMethod();
        rightMethod();
    }
};`}</pre>
                    </div>
                  </div>
                </div>

                {/* Template Metaprogramming */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Zap size={20} style={{ marginRight: '0.5rem' }} />
                    Templates & Metaprogramming
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Function Templates & Specialization</h5>
                      <div style={{ backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                        <pre style={{ margin: 0, color: '#e2e8f0' }}>{`template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Template specialization for strings
template<>
const char* maximum<const char*>(const char* a, const char* b) {
    return (strcmp(a, b) > 0) ? a : b;
}

// Variable templates (C++14)
template<typename T>
constexpr T pi = T(3.1415926535897932385);

double area = pi<double> * radius * radius;`}</pre>
                      </div>
                    </div>

                    <div>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '0.875rem' }}>SFINAE & Type Traits</h5>
                      <div style={{ backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                        <pre style={{ margin: 0, color: '#e2e8f0' }}>{`#include <type_traits>

// SFINAE: Substitution Failure Is Not An Error
template<typename T>
typename std::enable_if<std::is_integral<T>::value, T>::type
increment(T value) {
    return value + 1;
}

template<typename T>
typename std::enable_if<std::is_floating_point<T>::value, T>::type
increment(T value) {
    return value + 0.1;
}

// C++17 if constexpr
template<typename T>
auto increment_cpp17(T value) {
    if constexpr (std::is_integral_v<T>) {
        return value + 1;
    } else {
        return value + 0.1;
    }
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modern C++ Features */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '1rem', fontSize: '1.125rem' }}>Modern C++ Features (C++11/14/17/20)</h4>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>Lambda Expressions & Captures</h5>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`#include <algorithm>
#include <vector>

std::vector<int> numbers = {1, 2, 3, 4, 5};

// Lambda with different capture modes
int multiplier = 10;
auto lambda = [=](int x) mutable { // Copy capture
    multiplier += 5; // Can modify copy
    return x * multiplier;
};

// Reference capture
auto lambda2 = [&](int x) { // Reference capture
    return x * multiplier; // Uses original multiplier
};

// Generic lambda (C++14)
auto generic_lambda = [](auto x, auto y) {
    return x + y;
};

// Transform with lambda
std::transform(numbers.begin(), numbers.end(), numbers.begin(),
               [multiplier](int x) { return x * multiplier; });`}</pre>
                    </div>
                  </div>

                  <div>
                    <h5 style={{ color: '#f1f5f9', marginBottom: '0.5rem', fontSize: '1rem' }}>Move Semantics & Perfect Forwarding</h5>
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                      <pre style={{ margin: 0, color: '#e2e8f0' }}>{`class MoveableClass {
private:
    std::vector<int> data;
public:
    // Move constructor
    MoveableClass(MoveableClass&& other) noexcept 
        : data(std::move(other.data)) {
        std::cout << "Move constructor called" << std::endl;
    }
    
    // Move assignment operator
    MoveableClass& operator=(MoveableClass&& other) noexcept {
        if (this != &other) {
            data = std::move(other.data);
        }
        return *this;
    }
};

// Perfect forwarding
template<typename T, typename... Args>
std::unique_ptr<T> make_unique_custom(Args&&... args) {
    return std::unique_ptr<T>(new T(std::forward<Args>(args)...));
}`}</pre>
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
                Top C++ Interview Questions
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  {
                    question: "Explain the difference between stack and heap memory allocation",
                    difficulty: "Medium",
                    category: "Memory Management",
                    answer: "Stack allocation is automatic, fast, and has limited size. Heap allocation is manual, slower, and has larger capacity. Stack uses LIFO order, heap allows random access.",
                    code: `// Stack allocation - automatic cleanup
void function() {
    int stackVar = 42;        // Allocated on stack
    char buffer[1024];        // Fixed size, stack allocated
} // Automatic cleanup when function exits

// Heap allocation - manual management
void heapExample() {
    int* heapVar = new int(42);     // Allocated on heap
    int* array = new int[1000];     // Dynamic size array
    
    // Manual cleanup required
    delete heapVar;
    delete[] array;
    
    // Better: Use smart pointers
    auto smartPtr = std::make_unique<int>(42);
    // Automatic cleanup
}`
                  },
                  {
                    question: "What is the difference between virtual functions and pure virtual functions?",
                    difficulty: "Hard",
                    category: "OOP",
                    answer: "Virtual functions have default implementations and enable polymorphism. Pure virtual functions have no implementation in base class and make the class abstract.",
                    code: `class Base {
public:
    // Virtual function with default implementation
    virtual void virtualFunc() {
        std::cout << "Base implementation" << std::endl;
    }
    
    // Pure virtual function - no implementation
    virtual void pureVirtualFunc() = 0;
    
    virtual ~Base() = default; // Virtual destructor
};

class Derived : public Base {
public:
    // Can override virtual function (optional)
    void virtualFunc() override {
        std::cout << "Derived implementation" << std::endl;
    }
    
    // Must implement pure virtual function
    void pureVirtualFunc() override {
        std::cout << "Derived pure virtual implementation" << std::endl;
    }
};

// Base b; // Error! Cannot instantiate abstract class
Derived d;   // OK
Base* ptr = &d; // Polymorphism`
                  },
                  {
                    question: "Implement a thread-safe singleton pattern",
                    difficulty: "Hard",
                    category: "Design Patterns",
                    answer: "Use static local variable with guaranteed initialization or double-checked locking with atomic operations for thread safety.",
                    code: `// Meyer's Singleton (C++11 thread-safe)
class Singleton {
public:
    static Singleton& getInstance() {
        static Singleton instance; // Thread-safe in C++11+
        return instance;
    }
    
    void doSomething() {
        std::cout << "Singleton action" << std::endl;
    }

private:
    Singleton() = default;
    ~Singleton() = default;
    
    // Prevent copying
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;
};

// Alternative: Double-checked locking (pre-C++11)
class ThreadSafeSingleton {
private:
    static std::atomic<ThreadSafeSingleton*> instance;
    static std::mutex mutex;
    
    ThreadSafeSingleton() = default;

public:
    static ThreadSafeSingleton* getInstance() {
        ThreadSafeSingleton* tmp = instance.load(std::memory_order_relaxed);
        if (tmp == nullptr) {
            std::lock_guard<std::mutex> lock(mutex);
            tmp = instance.load(std::memory_order_relaxed);
            if (tmp == nullptr) {
                tmp = new ThreadSafeSingleton;
                instance.store(tmp, std::memory_order_relaxed);
            }
        }
        return tmp;
    }
};`
                  },
                  {
                    question: "Explain move semantics and when to use std::move",
                    difficulty: "Hard",
                    category: "Modern C++",
                    answer: "Move semantics transfer ownership of resources instead of copying. Use std::move to cast lvalues to rvalues, enabling move operations and avoiding expensive copies.",
                    code: `class Resource {
private:
    std::vector<int> data;
    std::string name;

public:
    // Move constructor
    Resource(Resource&& other) noexcept 
        : data(std::move(other.data)), name(std::move(other.name)) {
        std::cout << "Resource moved" << std::endl;
    }
    
    // Move assignment
    Resource& operator=(Resource&& other) noexcept {
        if (this != &other) {
            data = std::move(other.data);
            name = std::move(other.name);
        }
        return *this;
    }
};

// Usage examples
Resource createResource() {
    Resource r;
    return r; // RVO/NRVO - no move needed
}

void useResource() {
    Resource r1;
    Resource r2 = std::move(r1); // Explicit move
    
    std::vector<Resource> resources;
    resources.push_back(std::move(r2)); // Move into vector
    
    // Don't use r1 or r2 after move!
}`
                  },
                  {
                    question: "Implement a custom allocator for a container",
                    difficulty: "Expert",
                    category: "Memory Management",
                    answer: "Custom allocators control memory allocation strategy. Implement allocate, deallocate, construct, and destroy methods following allocator requirements.",
                    code: `template<typename T>
class CustomAllocator {
public:
    using value_type = T;
    using pointer = T*;
    using const_pointer = const T*;
    using size_type = std::size_t;
    
    CustomAllocator() = default;
    
    template<typename U>
    CustomAllocator(const CustomAllocator<U>&) {}
    
    pointer allocate(size_type n) {
        std::cout << "Allocating " << n << " objects" << std::endl;
        if (n > std::numeric_limits<size_type>::max() / sizeof(T)) {
            throw std::bad_alloc();
        }
        return static_cast<pointer>(std::malloc(n * sizeof(T)));
    }
    
    void deallocate(pointer p, size_type n) {
        std::cout << "Deallocating " << n << " objects" << std::endl;
        std::free(p);
    }
    
    template<typename U, typename... Args>
    void construct(U* p, Args&&... args) {
        new(p) U(std::forward<Args>(args)...);
    }
    
    template<typename U>
    void destroy(U* p) {
        p->~U();
    }
};

// Usage with STL containers
std::vector<int, CustomAllocator<int>> customVector;
customVector.push_back(42); // Uses custom allocator`
                  }
                ].map((item, index) => (
                  <div key={index} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h4 style={{ color: '#f1f5f9', fontSize: '1.125rem', fontWeight: '600', margin: 0, flex: 1 }}>
                        {item.question}
                      </h4>
                      <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                        <span style={{ 
                          backgroundColor: item.difficulty === 'Easy' ? '#10b981' : item.difficulty === 'Medium' ? '#f59e0b' : item.difficulty === 'Hard' ? '#ef4444' : '#8b5cf6',
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
                C++ Interview Preparation Strategy
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Study Timeline */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    6-Week Preparation Timeline
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        week: 'Week 1-2',
                        focus: 'Core Fundamentals',
                        topics: ['Memory management (stack/heap)', 'Pointers and references', 'OOP principles', 'Basic templates'],
                        practice: 'Implement basic data structures (linked list, stack, queue)',
                        color: '#3b82f6'
                      },
                      {
                        week: 'Week 3-4',
                        focus: 'Advanced Concepts',
                        topics: ['Virtual functions and polymorphism', 'Template metaprogramming', 'STL containers and algorithms', 'Exception handling'],
                        practice: 'Solve LeetCode medium problems using STL',
                        color: '#10b981'
                      },
                      {
                        week: 'Week 5-6',
                        focus: 'Modern C++ & Optimization',
                        topics: ['Move semantics and perfect forwarding', 'Smart pointers and RAII', 'Multithreading and concurrency', 'Performance optimization'],
                        practice: 'Mock interviews and advanced algorithmic problems',
                        color: '#f59e0b'
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
                          <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                            <strong>Topics:</strong> {week.topics.join(' • ')}
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontStyle: 'italic' }}>
                            <strong>Practice:</strong> {week.practice}
                          </p>
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
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minMax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        category: 'Books & References',
                        resources: [
                          'Effective Modern C++ (Scott Meyers)',
                          'C++ Primer (Stanley Lippman)',
                          'The C++ Programming Language (Bjarne Stroustrup)',
                          'More Effective C++ (Scott Meyers)'
                        ],
                        color: '#3b82f6'
                      },
                      {
                        category: 'Online Platforms',
                        resources: [
                          'LeetCode (C++ problems)',
                          'HackerRank (C++ domain)',
                          'Codewars (C++ kata)',
                          'GeeksforGeeks (C++ articles)'
                        ],
                        color: '#10b981'
                      },
                      {
                        category: 'Practice Projects',
                        resources: [
                          'Implement STL containers from scratch',
                          'Build a memory pool allocator',
                          'Create a thread-safe data structure',
                          'Write a simple compiler/interpreter'
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

                {/* Interview Tips */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    C++ Interview Success Tips
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        title: 'Understand Memory Management',
                        tip: 'Be prepared to explain stack vs heap, memory leaks, and smart pointer usage in detail.'
                      },
                      {
                        title: 'Know Your STL',
                        tip: 'Understand complexity of STL operations, when to use different containers, and iterator categories.'
                      },
                      {
                        title: 'Explain Template Usage',
                        tip: 'Be ready to discuss template specialization, SFINAE, and when templates are instantiated.'
                      },
                      {
                        title: 'Debug Code On Paper',
                        tip: 'Practice tracing through code execution, especially with pointers, references, and object lifetimes.'
                      },
                      {
                        title: 'Discuss Performance',
                        tip: 'Always consider and discuss time/space complexity, cache efficiency, and optimization opportunities.'
                      },
                      {
                        title: 'Handle Edge Cases',
                        tip: 'Consider null pointers, empty containers, integer overflow, and exception safety in your solutions.'
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
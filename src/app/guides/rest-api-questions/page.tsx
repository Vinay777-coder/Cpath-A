'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, Code, TrendingUp, CheckCircle2, Database, Server, Layers } from 'lucide-react';

export default function RestApiQuestionsGuide() {
  const [activeTab, setActiveTab] = useState('principles');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/guides" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', marginBottom: '1rem', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Back to Guides
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            REST API Interview Questions
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Master REST API design principles, best practices, and interview questions with comprehensive examples covering HTTP methods, status codes, and architectural patterns.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'principles', label: 'REST Principles', icon: Globe },
            { id: 'questions', label: 'Interview Questions', icon: Code },
            { id: 'implementation', label: 'Best Practices', icon: TrendingUp }
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
                color: activeTab === id ? '#059669' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #059669' : '2px solid transparent',
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
        {activeTab === 'principles' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                REST API Design Principles & Fundamentals
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* REST Constraints */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#059669', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Layers size={20} style={{ marginRight: '0.5rem' }} />
                    Six REST Architectural Constraints
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        constraint: 'Client-Server Architecture',
                        description: 'Separation of concerns between client and server',
                        benefits: ['Improved portability', 'Independent evolution', 'Better scalability'],
                        example: 'Web browser (client) communicates with web server through HTTP',
                        color: '#3b82f6'
                      },
                      {
                        constraint: 'Stateless',
                        description: 'Each request contains all information needed to process it',
                        benefits: ['Better reliability', 'Improved scalability', 'Easier debugging'],
                        example: 'Authentication token sent with each request',
                        color: '#10b981'
                      },
                      {
                        constraint: 'Cacheable',
                        description: 'Responses must define themselves as cacheable or not',
                        benefits: ['Improved performance', 'Reduced server load', 'Better user experience'],
                        example: 'Cache-Control headers in HTTP responses',
                        color: '#f59e0b'
                      },
                      {
                        constraint: 'Uniform Interface',
                        description: 'Consistent interface between components',
                        benefits: ['Simplified architecture', 'Improved visibility', 'Independent evolution'],
                        example: 'Standard HTTP methods (GET, POST, PUT, DELETE)',
                        color: '#ef4444'
                      },
                      {
                        constraint: 'Layered System',
                        description: 'Architecture organized in hierarchical layers',
                        benefits: ['Improved security', 'Load balancing', 'Shared caching'],
                        example: 'Load balancers, proxy servers, CDNs',
                        color: '#8b5cf6'
                      },
                      {
                        constraint: 'Code on Demand (Optional)',
                        description: 'Server can extend client functionality',
                        benefits: ['Improved extensibility', 'Reduced complexity', 'Feature updates'],
                        example: 'JavaScript downloaded and executed by browser',
                        color: '#06b6d4'
                      }
                    ].map((item, index) => (
                      <div key={index} style={{ 
                        backgroundColor: '#1e293b', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        border: `1px solid ${item.color}`
                      }}>
                        <h5 style={{ color: item.color, marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                          {item.constraint}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {item.description}
                        </p>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Benefits:</strong>
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {item.benefits.map((benefit, idx) => (
                              <span key={idx} style={{
                                backgroundColor: `${item.color}20`,
                                color: item.color,
                                padding: '0.125rem 0.375rem',
                                borderRadius: '6px',
                                fontSize: '0.6875rem',
                                fontWeight: '500'
                              }}>
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontStyle: 'italic' }}>
                          <strong>Example:</strong> {item.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HTTP Methods */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Globe size={20} style={{ marginRight: '0.5rem' }} />
                    HTTP Methods & Status Codes
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {/* HTTP Methods */}
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                        HTTP Methods
                      </h5>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                        {[
                          {
                            method: 'GET',
                            purpose: 'Retrieve resource',
                            idempotent: 'Yes',
                            safe: 'Yes',
                            example: 'GET /api/users/123',
                            description: 'Fetch user with ID 123',
                            color: '#3b82f6'
                          },
                          {
                            method: 'POST',
                            purpose: 'Create resource',
                            idempotent: 'No',
                            safe: 'No',
                            example: 'POST /api/users',
                            description: 'Create new user',
                            color: '#10b981'
                          },
                          {
                            method: 'PUT',
                            purpose: 'Update/replace resource',
                            idempotent: 'Yes',
                            safe: 'No',
                            example: 'PUT /api/users/123',
                            description: 'Replace entire user record',
                            color: '#f59e0b'
                          },
                          {
                            method: 'PATCH',
                            purpose: 'Partial update',
                            idempotent: 'No*',
                            safe: 'No',
                            example: 'PATCH /api/users/123',
                            description: 'Update specific user fields',
                            color: '#8b5cf6'
                          },
                          {
                            method: 'DELETE',
                            purpose: 'Remove resource',
                            idempotent: 'Yes',
                            safe: 'No',
                            example: 'DELETE /api/users/123',
                            description: 'Delete user with ID 123',
                            color: '#ef4444'
                          },
                          {
                            method: 'HEAD',
                            purpose: 'Get headers only',
                            idempotent: 'Yes',
                            safe: 'Yes',
                            example: 'HEAD /api/users/123',
                            description: 'Check if user exists',
                            color: '#06b6d4'
                          }
                        ].map((method, index) => (
                          <div key={index} style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '6px', border: `1px solid ${method.color}` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                              <h6 style={{ color: method.color, margin: 0, fontSize: '0.875rem', fontWeight: '700' }}>
                                {method.method}
                              </h6>
                              <div style={{ display: 'flex', gap: '0.25rem' }}>
                                <span style={{ 
                                  backgroundColor: method.idempotent === 'Yes' ? '#10b98120' : '#ef444420',
                                  color: method.idempotent === 'Yes' ? '#10b981' : '#ef4444',
                                  padding: '0.125rem 0.25rem',
                                  borderRadius: '4px',
                                  fontSize: '0.6875rem',
                                  fontWeight: '500'
                                }}>
                                  I
                                </span>
                                <span style={{ 
                                  backgroundColor: method.safe === 'Yes' ? '#10b98120' : '#ef444420',
                                  color: method.safe === 'Yes' ? '#10b981' : '#ef4444',
                                  padding: '0.125rem 0.25rem',
                                  borderRadius: '4px',
                                  fontSize: '0.6875rem',
                                  fontWeight: '500'
                                }}>
                                  S
                                </span>
                              </div>
                            </div>
                            <p style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                              {method.purpose}
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '0.6875rem', marginBottom: '0.25rem', fontFamily: 'monospace' }}>
                              {method.example}
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '0.6875rem' }}>
                              {method.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                        <strong>Legend:</strong> I = Idempotent, S = Safe | *PATCH can be idempotent depending on implementation
                      </p>
                    </div>

                    {/* Status Codes */}
                    <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <h5 style={{ color: '#f1f5f9', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                        Common HTTP Status Codes
                      </h5>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                        {[
                          { code: '200 OK', category: 'Success', usage: 'Successful GET, PUT, PATCH', color: '#10b981' },
                          { code: '201 Created', category: 'Success', usage: 'Successful POST', color: '#10b981' },
                          { code: '204 No Content', category: 'Success', usage: 'Successful DELETE', color: '#10b981' },
                          { code: '400 Bad Request', category: 'Client Error', usage: 'Invalid request syntax', color: '#f59e0b' },
                          { code: '401 Unauthorized', category: 'Client Error', usage: 'Authentication required', color: '#f59e0b' },
                          { code: '403 Forbidden', category: 'Client Error', usage: 'Insufficient permissions', color: '#f59e0b' },
                          { code: '404 Not Found', category: 'Client Error', usage: 'Resource doesn\'t exist', color: '#f59e0b' },
                          { code: '409 Conflict', category: 'Client Error', usage: 'Resource conflict', color: '#f59e0b' },
                          { code: '422 Unprocessable Entity', category: 'Client Error', usage: 'Validation errors', color: '#f59e0b' },
                          { code: '500 Internal Server Error', category: 'Server Error', usage: 'Unexpected server error', color: '#ef4444' },
                          { code: '502 Bad Gateway', category: 'Server Error', usage: 'Invalid upstream response', color: '#ef4444' },
                          { code: '503 Service Unavailable', category: 'Server Error', usage: 'Service temporarily down', color: '#ef4444' }
                        ].map((status, index) => (
                          <div key={index} style={{ backgroundColor: '#0f172a', padding: '0.5rem', borderRadius: '4px', border: `1px solid ${status.color}` }}>
                            <h6 style={{ color: status.color, margin: 0, fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.125rem' }}>
                              {status.code}
                            </h6>
                            <p style={{ color: '#cbd5e1', fontSize: '0.6875rem', margin: 0, marginBottom: '0.125rem' }}>
                              {status.usage}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resource Design */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Resource Design & URL Structure
                  </h4>
                  
                  <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.875rem', overflow: 'auto', marginBottom: '1rem' }}>
                    <pre style={{ margin: 0, color: '#e2e8f0' }}>{`# RESTful URL Design Patterns

# Collection and Resource Pattern
GET    /api/v1/users              # Get all users (collection)
POST   /api/v1/users              # Create new user
GET    /api/v1/users/123          # Get specific user (resource)
PUT    /api/v1/users/123          # Update entire user
PATCH  /api/v1/users/123          # Partial update user
DELETE /api/v1/users/123          # Delete user

# Nested Resources
GET    /api/v1/users/123/posts    # Get user's posts
POST   /api/v1/users/123/posts    # Create post for user
GET    /api/v1/users/123/posts/456 # Get specific user post

# Query Parameters for Filtering/Pagination
GET /api/v1/users?page=2&limit=10&status=active&sort=created_date

# Avoid Deep Nesting (max 2 levels)
❌ /api/v1/users/123/posts/456/comments/789/likes
✅ /api/v1/comments/789/likes

# Use Nouns, Not Verbs
❌ /api/v1/getUsers
❌ /api/v1/createUser
✅ /api/v1/users

# Use Plural Nouns for Collections
❌ /api/v1/user
✅ /api/v1/users`}</pre>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        principle: 'Use Nouns, Not Verbs',
                        good: ['/api/users', '/api/products', '/api/orders'],
                        bad: ['/api/getUsers', '/api/createProduct', '/api/deleteOrder'],
                        color: '#10b981'
                      },
                      {
                        principle: 'Consistent Naming',
                        good: ['/api/users', '/api/user-profiles', '/api/order-items'],
                        bad: ['/api/users', '/api/userProfiles', '/api/OrderItems'],
                        color: '#3b82f6'
                      },
                      {
                        principle: 'Hierarchical Structure',
                        good: ['/api/users/123/posts', '/api/orders/456/items'],
                        bad: ['/api/posts-for-user/123', '/api/order-items/456'],
                        color: '#f59e0b'
                      }
                    ].map((rule, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '0.75rem', borderRadius: '6px', border: `1px solid ${rule.color}` }}>
                        <h6 style={{ color: rule.color, marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {rule.principle}
                        </h6>
                        <div style={{ marginBottom: '0.5rem' }}>
                          <p style={{ color: '#10b981', fontSize: '0.75rem', marginBottom: '0.25rem', fontWeight: '600' }}>
                            ✅ Good:
                          </p>
                          {rule.good.map((item, idx) => (
                            <p key={idx} style={{ color: '#cbd5e1', fontSize: '0.6875rem', marginBottom: '0.125rem', fontFamily: 'monospace' }}>
                              {item}
                            </p>
                          ))}
                        </div>
                        <div>
                          <p style={{ color: '#ef4444', fontSize: '0.75rem', marginBottom: '0.25rem', fontWeight: '600' }}>
                            ❌ Bad:
                          </p>
                          {rule.bad.map((item, idx) => (
                            <p key={idx} style={{ color: '#cbd5e1', fontSize: '0.6875rem', marginBottom: '0.125rem', fontFamily: 'monospace' }}>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
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
                REST API Interview Questions & Answers
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  {
                    question: "What is the difference between PUT and PATCH methods?",
                    difficulty: "Medium",
                    category: "HTTP Methods",
                    answer: "PUT replaces the entire resource, while PATCH applies partial updates. PUT is idempotent, PATCH may or may not be depending on implementation.",
                    code: `# PUT - Replace entire resource
PUT /api/users/123
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "department": "Engineering"
}

# PATCH - Update specific fields
PATCH /api/users/123
{
  "age": 31,
  "department": "Senior Engineering"
}

# PUT overwrites all fields (missing fields become null/default)
# PATCH only updates specified fields`
                  },
                  {
                    question: "How do you handle API versioning in REST?",
                    difficulty: "Medium",
                    category: "API Design",
                    answer: "Common versioning strategies include URL path, query parameters, headers, and content negotiation. Each has trade-offs in terms of cacheability, discoverability, and client complexity.",
                    code: `# 1. URL Path Versioning (Most Common)
GET /api/v1/users
GET /api/v2/users

# 2. Query Parameter
GET /api/users?version=1
GET /api/users?v=2

# 3. Header Versioning
GET /api/users
Headers: API-Version: 1

# 4. Content Negotiation
GET /api/users
Accept: application/vnd.company.v1+json

# 5. Custom Media Type
GET /api/users
Accept: application/vnd.api+json;version=1`
                  },
                  {
                    question: "Explain HATEOAS and its role in REST APIs",
                    difficulty: "Hard",
                    category: "REST Principles",
                    answer: "HATEOAS (Hypermedia as the Engine of Application State) means API responses include links to related actions. It enables client discoverability and reduces coupling between client and server.",
                    code: `# HATEOAS Response Example
GET /api/users/123

{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "status": "active",
  "_links": {
    "self": { "href": "/api/users/123" },
    "edit": { "href": "/api/users/123", "method": "PUT" },
    "delete": { "href": "/api/users/123", "method": "DELETE" },
    "posts": { "href": "/api/users/123/posts" },
    "avatar": { "href": "/api/users/123/avatar" }
  },
  "_actions": {
    "deactivate": {
      "href": "/api/users/123/deactivate",
      "method": "POST",
      "fields": [
        { "name": "reason", "type": "string", "required": true }
      ]
    }
  }
}`
                  },
                  {
                    question: "How do you implement proper error handling in REST APIs?",
                    difficulty: "Medium",
                    category: "Error Handling",
                    answer: "Use appropriate HTTP status codes, consistent error response format, detailed error messages, and proper logging. Include error codes, descriptions, and field-level validation errors.",
                    code: `# Consistent Error Response Format
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "The request contains invalid parameters",
    "details": [
      {
        "field": "email",
        "code": "INVALID_FORMAT",
        "message": "Email address is not valid"
      },
      {
        "field": "age",
        "code": "OUT_OF_RANGE",
        "message": "Age must be between 18 and 120"
      }
    ],
    "timestamp": "2023-12-01T10:30:00Z",
    "request_id": "req_123456789"
  }
}

# Different Error Types
# 400 Bad Request - Client error
# 401 Unauthorized - Authentication required
# 403 Forbidden - Insufficient permissions
# 404 Not Found - Resource not found
# 409 Conflict - Resource conflict
# 422 Unprocessable Entity - Validation errors
# 500 Internal Server Error - Server error`
                  },
                  {
                    question: "Design a REST API for a blog system",
                    difficulty: "Hard",
                    category: "System Design",
                    answer: "Design endpoints for users, posts, comments, and tags following REST principles. Consider relationships, pagination, filtering, and authentication.",
                    code: `# Blog REST API Design

# Users
GET    /api/users                 # List users (paginated)
POST   /api/users                 # Create user
GET    /api/users/{id}            # Get user by ID
PUT    /api/users/{id}            # Update user
DELETE /api/users/{id}            # Delete user

# Posts
GET    /api/posts                 # List posts (with filters)
POST   /api/posts                 # Create post
GET    /api/posts/{id}            # Get post by ID
PUT    /api/posts/{id}            # Update post
DELETE /api/posts/{id}            # Delete post
GET    /api/posts/{id}/comments   # Get post comments

# Comments
GET    /api/comments              # List comments
POST   /api/comments              # Create comment
GET    /api/comments/{id}         # Get comment
PUT    /api/comments/{id}         # Update comment
DELETE /api/comments/{id}         # Delete comment

# Tags
GET    /api/tags                  # List tags
POST   /api/tags                  # Create tag
GET    /api/tags/{id}/posts       # Get posts by tag

# Advanced Queries
GET /api/posts?author=123&status=published&tag=tech&page=2&limit=10
GET /api/posts?sort=-created_at&fields=title,summary,author`
                  },
                  {
                    question: "How do you implement authentication and authorization in REST APIs?",
                    difficulty: "Hard",
                    category: "Security",
                    answer: "Common approaches include JWT tokens, API keys, OAuth 2.0, and session-based auth. Choose based on use case, security requirements, and client types.",
                    code: `# JWT Authentication Flow
POST /api/auth/login
{
  "username": "john@example.com",
  "password": "secretpassword"
}

Response:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "token_type": "Bearer"
}

# Using JWT Token
GET /api/users/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# API Key Authentication
GET /api/users
X-API-Key: your-api-key-here

# OAuth 2.0 Authorization Code Flow
# 1. Redirect to authorization server
GET /oauth/authorize?response_type=code&client_id=123&redirect_uri=...

# 2. Exchange code for token
POST /oauth/token
{
  "grant_type": "authorization_code",
  "code": "abc123",
  "client_id": "123",
  "client_secret": "secret",
  "redirect_uri": "https://app.com/callback"
}`
                  },
                  {
                    question: "How do you handle pagination in REST APIs?",
                    difficulty: "Medium",
                    category: "Data Management",
                    answer: "Common pagination methods include offset-based, cursor-based, and page-based pagination. Include metadata about total count, next/previous links, and current position.",
                    code: `# Offset-based Pagination
GET /api/users?offset=20&limit=10

Response:
{
  "data": [...],
  "pagination": {
    "offset": 20,
    "limit": 10,
    "total": 150,
    "has_more": true
  },
  "links": {
    "first": "/api/users?offset=0&limit=10",
    "prev": "/api/users?offset=10&limit=10",
    "next": "/api/users?offset=30&limit=10",
    "last": "/api/users?offset=140&limit=10"
  }
}

# Cursor-based Pagination (for large datasets)
GET /api/users?cursor=eyJpZCI6MTIzfQ&limit=10

Response:
{
  "data": [...],
  "pagination": {
    "cursor": "eyJpZCI6MTMzfQ",
    "has_more": true,
    "limit": 10
  },
  "links": {
    "next": "/api/users?cursor=eyJpZCI6MTMzfQ&limit=10"
  }
}

# Page-based Pagination
GET /api/users?page=3&per_page=10

Response:
{
  "data": [...],
  "pagination": {
    "current_page": 3,
    "per_page": 10,
    "total_pages": 15,
    "total_count": 150
  }
}`
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
                          backgroundColor: '#059669',
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

        {activeTab === 'implementation' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                REST API Best Practices & Implementation
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Security Best Practices */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                    <Server size={20} style={{ marginRight: '0.5rem' }} />
                    Security Best Practices
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        practice: 'Always Use HTTPS',
                        description: 'Encrypt data in transit to prevent eavesdropping',
                        implementation: 'Force HTTPS redirects, use HSTS headers',
                        example: 'Strict-Transport-Security: max-age=31536000'
                      },
                      {
                        practice: 'Input Validation',
                        description: 'Validate all input data on server side',
                        implementation: 'Schema validation, sanitization, whitelisting',
                        example: 'JSON Schema, Joi, express-validator'
                      },
                      {
                        practice: 'Rate Limiting',
                        description: 'Prevent abuse and DoS attacks',
                        implementation: 'Token bucket, sliding window algorithms',
                        example: 'X-RateLimit-Remaining: 99'
                      },
                      {
                        practice: 'Authentication & Authorization',
                        description: 'Secure access to protected resources',
                        implementation: 'JWT, OAuth 2.0, RBAC, ABAC',
                        example: 'Authorization: Bearer <token>'
                      },
                      {
                        practice: 'CORS Configuration',
                        description: 'Control cross-origin requests properly',
                        implementation: 'Whitelist allowed origins, methods, headers',
                        example: 'Access-Control-Allow-Origin: https://app.com'
                      },
                      {
                        practice: 'Error Information Security',
                        description: 'Don\'t expose sensitive error details',
                        implementation: 'Generic error messages, detailed logging',
                        example: 'Return "Invalid credentials" not "User not found"'
                      }
                    ].map((practice, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: '1px solid #ef4444' }}>
                        <h5 style={{ color: '#fca5a5', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>
                          {practice.practice}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                          {practice.description}
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                          <strong>Implementation:</strong> {practice.implementation}
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                          <strong>Example:</strong> {practice.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Optimization */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Performance Optimization Strategies
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        strategy: 'Caching',
                        techniques: ['HTTP caching headers', 'Redis/Memcached', 'CDN integration', 'Application-level caching'],
                        benefits: '60-90% response time reduction',
                        implementation: 'Cache-Control, ETag, Redis with TTL',
                        color: '#10b981'
                      },
                      {
                        strategy: 'Database Optimization',
                        techniques: ['Query optimization', 'Proper indexing', 'Connection pooling', 'Read replicas'],
                        benefits: '50-80% database response improvement',
                        implementation: 'EXPLAIN queries, composite indexes, pg_pool',
                        color: '#3b82f6'
                      },
                      {
                        strategy: 'Response Optimization',
                        techniques: ['Gzip compression', 'Field selection', 'Pagination', 'Async processing'],
                        benefits: '40-70% payload size reduction',
                        implementation: 'compress middleware, GraphQL, sparse fieldsets',
                        color: '#f59e0b'
                      },
                      {
                        strategy: 'Load Balancing',
                        techniques: ['Horizontal scaling', 'Health checks', 'Circuit breakers', 'Failover'],
                        benefits: 'Linear scalability with instances',
                        implementation: 'Nginx, HAProxy, AWS ALB, Kubernetes',
                        color: '#8b5cf6'
                      }
                    ].map((strategy, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px', border: `1px solid ${strategy.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <h5 style={{ color: strategy.color, margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                            {strategy.strategy}
                          </h5>
                          <span style={{ 
                            backgroundColor: `${strategy.color}20`,
                            color: strategy.color,
                            padding: '0.25rem 0.5rem',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                          }}>
                            {strategy.benefits}
                          </span>
                        </div>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                            <strong>Techniques:</strong>
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                            {strategy.techniques.map((technique, idx) => (
                              <span key={idx} style={{
                                backgroundColor: `${strategy.color}15`,
                                color: strategy.color,
                                padding: '0.125rem 0.375rem',
                                borderRadius: '6px',
                                fontSize: '0.6875rem',
                                fontWeight: '500'
                              }}>
                                {technique}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                          <strong>Implementation:</strong> {strategy.implementation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentation & Testing */}
                <div style={{ backgroundColor: '#059669020', padding: '1.5rem', borderRadius: '8px', border: '1px solid #059669' }}>
                  <h4 style={{ color: '#059669', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Documentation & Testing Best Practices
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        area: 'API Documentation',
                        practices: [
                          'Use OpenAPI/Swagger specifications',
                          'Include request/response examples',
                          'Document error scenarios',
                          'Provide SDKs and code samples',
                          'Keep documentation up-to-date'
                        ]
                      },
                      {
                        area: 'Testing Strategy',
                        practices: [
                          'Unit tests for business logic',
                          'Integration tests for endpoints',
                          'Contract tests for API compatibility',
                          'Load tests for performance',
                          'Security tests for vulnerabilities'
                        ]
                      },
                      {
                        area: 'Monitoring & Logging',
                        practices: [
                          'Structured logging (JSON format)',
                          'Request/response correlation IDs',
                          'Performance metrics collection',
                          'Error tracking and alerting',
                          'Health check endpoints'
                        ]
                      }
                    ].map((section, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                        <h5 style={{ color: '#34d399', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          {section.area}
                        </h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {section.practices.map((practice, idx) => (
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
                                color: '#059669' 
                              }} />
                              {practice}
                            </li>
                          ))}
                        </ul>
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
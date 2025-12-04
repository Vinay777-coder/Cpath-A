'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Brain, Database, BarChart3, Cpu, CheckCircle2, Zap } from 'lucide-react';

export default function MachineLearningRoadmapGuide() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/guides" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', marginBottom: '1rem', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Back to Guides
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Machine Learning Roadmap
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Complete learning path to become a machine learning engineer, covering foundations, algorithms, and real-world applications.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'overview', label: 'Career Overview', icon: Brain },
            { id: 'fundamentals', label: 'Fundamentals', icon: Database },
            { id: 'roadmap', label: 'Learning Path', icon: BarChart3 }
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
                color: activeTab === id ? '#8b5cf6' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #8b5cf6' : '2px solid transparent',
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
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Machine Learning Career Landscape
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Brain size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#8b5cf6', margin: 0 }}>Industry Growth</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>44% annual growth in ML job postings</li>
                    <li>$209B AI market size by 2025</li>
                    <li>75% of companies adopting ML</li>
                    <li>Highest paying tech roles</li>
                    <li>Cross-industry demand</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Cpu size={20} style={{ color: '#06b6d4', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#06b6d4', margin: 0 }}>Key Applications</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>Natural language processing</li>
                    <li>Computer vision & image recognition</li>
                    <li>Recommendation systems</li>
                    <li>Autonomous systems</li>
                    <li>Predictive analytics</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Zap size={20} style={{ color: '#10b981', marginRight: '0.5rem' }} />
                    <h4 style={{ color: '#10b981', margin: 0 }}>Career Benefits</h4>
                  </div>
                  <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    <li>High salary potential ($90K-$200K+)</li>
                    <li>Cutting-edge technology work</li>
                    <li>Problem-solving opportunities</li>
                    <li>Global impact potential</li>
                    <li>Continuous innovation</li>
                  </ul>
                </div>
              </div>

              <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>ML Career Roles & Salary Ranges</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  {[
                    { role: 'ML Engineer', level: 'Entry-Mid', salary: '$90K - $140K', focus: 'Model deployment & MLOps' },
                    { role: 'Data Scientist', level: 'Mid-Senior', salary: '$100K - $160K', focus: 'Analysis & modeling' },
                    { role: 'AI Research Scientist', level: 'Senior', salary: '$130K - $250K+', focus: 'Algorithm development' },
                    { role: 'Computer Vision Engineer', level: 'Mid-Senior', salary: '$110K - $180K', focus: 'Image & video analysis' },
                    { role: 'NLP Engineer', level: 'Mid-Senior', salary: '$105K - $170K', focus: 'Language processing' },
                    { role: 'AI Product Manager', level: 'Senior', salary: '$120K - $200K', focus: 'AI product strategy' }
                  ].map(({ role, level, salary, focus }) => (
                    <div key={role} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h5 style={{ color: '#8b5cf6', margin: 0, fontSize: '0.875rem', fontWeight: '600' }}>{role}</h5>
                        <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: '600' }}>{salary}</span>
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>{level}</div>
                      <div style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{focus}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fundamentals' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Machine Learning Fundamentals
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    category: 'Mathematical Foundations',
                    color: '#8b5cf6',
                    topics: [
                      {
                        topic: 'Linear Algebra',
                        importance: 'Critical',
                        concepts: ['Vectors and matrices', 'Matrix operations', 'Eigenvalues/eigenvectors', 'Principal Component Analysis'],
                        timeline: '3-4 weeks'
                      },
                      {
                        topic: 'Calculus & Optimization',
                        importance: 'Critical',
                        concepts: ['Derivatives and gradients', 'Chain rule', 'Optimization methods', 'Gradient descent'],
                        timeline: '3-4 weeks'
                      },
                      {
                        topic: 'Statistics & Probability',
                        importance: 'Essential',
                        concepts: ['Descriptive statistics', 'Probability distributions', 'Hypothesis testing', 'Bayes theorem'],
                        timeline: '4-5 weeks'
                      }
                    ]
                  },
                  {
                    category: 'Programming & Tools',
                    color: '#06b6d4',
                    topics: [
                      {
                        topic: 'Python Programming',
                        importance: 'Essential',
                        concepts: ['Core Python syntax', 'Object-oriented programming', 'Data structures', 'Libraries ecosystem'],
                        timeline: '4-6 weeks'
                      },
                      {
                        topic: 'Data Manipulation',
                        importance: 'Essential',
                        concepts: ['NumPy arrays', 'Pandas DataFrames', 'Data cleaning', 'Feature engineering'],
                        timeline: '3-4 weeks'
                      },
                      {
                        topic: 'ML Libraries',
                        importance: 'Critical',
                        concepts: ['Scikit-learn', 'TensorFlow/PyTorch', 'Matplotlib/Seaborn', 'Jupyter notebooks'],
                        timeline: '5-6 weeks'
                      }
                    ]
                  },
                  {
                    category: 'Core ML Concepts',
                    color: '#10b981',
                    topics: [
                      {
                        topic: 'Supervised Learning',
                        importance: 'Critical',
                        concepts: ['Linear/logistic regression', 'Decision trees', 'Random forests', 'Support vector machines'],
                        timeline: '4-5 weeks'
                      },
                      {
                        topic: 'Unsupervised Learning',
                        importance: 'Important',
                        concepts: ['Clustering algorithms', 'Dimensionality reduction', 'Association rules', 'Anomaly detection'],
                        timeline: '3-4 weeks'
                      },
                      {
                        topic: 'Model Evaluation',
                        importance: 'Critical',
                        concepts: ['Cross-validation', 'Performance metrics', 'Bias-variance tradeoff', 'Overfitting prevention'],
                        timeline: '2-3 weeks'
                      }
                    ]
                  },
                  {
                    category: 'Advanced Topics',
                    color: '#f59e0b',
                    topics: [
                      {
                        topic: 'Deep Learning',
                        importance: 'Advanced',
                        concepts: ['Neural networks', 'Backpropagation', 'Convolutional neural networks', 'Recurrent neural networks'],
                        timeline: '6-8 weeks'
                      },
                      {
                        topic: 'Natural Language Processing',
                        importance: 'Specialized',
                        concepts: ['Text preprocessing', 'Word embeddings', 'Transformers', 'Sentiment analysis'],
                        timeline: '4-6 weeks'
                      },
                      {
                        topic: 'MLOps & Deployment',
                        importance: 'Important',
                        concepts: ['Model versioning', 'CI/CD for ML', 'Model monitoring', 'Cloud deployment'],
                        timeline: '3-4 weeks'
                      }
                    ]
                  }
                ].map(({ category, color, topics }) => (
                  <div key={category} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: color, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                      {category}
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {topics.map(({ topic, importance, concepts, timeline }) => (
                        <div key={topic} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', border: `1px solid ${color}20` }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{topic}</h5>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ 
                                backgroundColor: importance === 'Critical' ? '#ef4444' : importance === 'Essential' ? '#f59e0b' : importance === 'Important' ? '#10b981' : '#6366f1',
                                color: 'white',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                marginBottom: '0.25rem'
                              }}>
                                {importance}
                              </div>
                              <div style={{ color: color, fontSize: '0.75rem', fontWeight: '500' }}>{timeline}</div>
                            </div>
                          </div>
                          
                          <div>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Key Concepts:</h6>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.25rem' }}>
                              {concepts.map(concept => (
                                <div key={concept} style={{ display: 'flex', alignItems: 'center' }}>
                                  <CheckCircle2 size={12} style={{ color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                                  <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{concept}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Machine Learning Learning Roadmap
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  {
                    phase: 'Foundation Phase (Months 1-4)',
                    color: '#8b5cf6',
                    description: 'Build mathematical and programming foundations',
                    milestones: [
                      {
                        milestone: 'Math Fundamentals',
                        duration: '6-8 weeks',
                        focus: 'Linear algebra, calculus, statistics',
                        projects: ['Matrix operations practice', 'Statistical analysis exercises', 'Probability simulations'],
                        resources: ['Khan Academy Linear Algebra', '3Blue1Brown Calculus', 'Think Stats book']
                      },
                      {
                        milestone: 'Python Mastery',
                        duration: '4-6 weeks',
                        focus: 'Python programming, NumPy, Pandas',
                        projects: ['Data analysis projects', 'Python automation scripts', 'Pandas data manipulation'],
                        resources: ['Python.org tutorial', 'Automate the Boring Stuff', 'Pandas documentation']
                      },
                      {
                        milestone: 'Data Science Basics',
                        duration: '3-4 weeks',
                        focus: 'Data visualization, exploratory data analysis',
                        projects: ['EDA on public datasets', 'Visualization dashboards', 'Data cleaning pipelines'],
                        resources: ['Matplotlib tutorials', 'Seaborn gallery', 'Kaggle Learn courses']
                      }
                    ]
                  },
                  {
                    phase: 'Core ML Phase (Months 5-9)',
                    color: '#06b6d4',
                    description: 'Learn machine learning algorithms and techniques',
                    milestones: [
                      {
                        milestone: 'Supervised Learning',
                        duration: '6-8 weeks',
                        focus: 'Classification and regression algorithms',
                        projects: ['House price prediction', 'Image classification', 'Customer churn prediction'],
                        resources: ['Scikit-learn documentation', 'Andrew Ng ML Course', 'Hands-On ML book']
                      },
                      {
                        milestone: 'Unsupervised Learning',
                        duration: '3-4 weeks',
                        focus: 'Clustering and dimensionality reduction',
                        projects: ['Customer segmentation', 'Anomaly detection', 'Recommendation systems'],
                        resources: ['K-means tutorials', 'PCA explanations', 'Clustering algorithms guide']
                      },
                      {
                        milestone: 'Model Evaluation & Selection',
                        duration: '2-3 weeks',
                        focus: 'Cross-validation, hyperparameter tuning',
                        projects: ['Model comparison studies', 'Hyperparameter optimization', 'Feature selection'],
                        resources: ['Cross-validation guide', 'Grid search tutorials', 'Model selection strategies']
                      }
                    ]
                  },
                  {
                    phase: 'Advanced ML Phase (Months 10-15)',
                    color: '#10b981',
                    description: 'Deep learning and specialized ML domains',
                    milestones: [
                      {
                        milestone: 'Deep Learning Foundations',
                        duration: '8-10 weeks',
                        focus: 'Neural networks, TensorFlow/PyTorch',
                        projects: ['MNIST digit recognition', 'CNN image classifier', 'RNN text generator'],
                        resources: ['Deep Learning Specialization', 'Fast.ai courses', 'PyTorch tutorials']
                      },
                      {
                        milestone: 'Specialization Choice',
                        duration: '6-8 weeks',
                        focus: 'NLP, Computer Vision, or Reinforcement Learning',
                        projects: ['Specialized domain projects', 'Kaggle competitions', 'Open source contributions'],
                        resources: ['Specialized courses', 'Research papers', 'Domain-specific libraries']
                      },
                      {
                        milestone: 'MLOps & Production',
                        duration: '4-6 weeks',
                        focus: 'Model deployment, monitoring, CI/CD',
                        projects: ['Deploy ML model to cloud', 'Model monitoring system', 'ML pipeline automation'],
                        resources: ['MLOps courses', 'Docker tutorials', 'Cloud ML services']
                      }
                    ]
                  },
                  {
                    phase: 'Professional Phase (16+ Months)',
                    color: '#f59e0b',
                    description: 'Advanced expertise and career development',
                    milestones: [
                      {
                        milestone: 'Research & Innovation',
                        duration: 'Ongoing',
                        focus: 'Cutting-edge research, novel applications',
                        projects: ['Research paper implementations', 'Novel algorithm development', 'Conference presentations'],
                        resources: ['ArXiv papers', 'ML conferences', 'Research collaborations']
                      },
                      {
                        milestone: 'Leadership & Mentoring',
                        duration: 'Ongoing',
                        focus: 'Team leadership, knowledge sharing',
                        projects: ['Team ML projects', 'Technical mentoring', 'Cross-functional collaboration'],
                        resources: ['Leadership training', 'Mentorship programs', 'Management courses']
                      },
                      {
                        milestone: 'Industry Impact',
                        duration: 'Ongoing',
                        focus: 'Large-scale ML systems, business impact',
                        projects: ['Enterprise ML solutions', 'Scalable ML architectures', 'Business strategy alignment'],
                        resources: ['Industry case studies', 'Executive programs', 'Business acumen development']
                      }
                    ]
                  }
                ].map(({ phase, color, description, milestones }) => (
                  <div key={phase} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${color}40` }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: color, marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
                        {phase}
                      </h4>
                      <p style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{description}</p>
                    </div>
                    
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {milestones.map(({ milestone, duration, focus, projects, resources }) => (
                        <div key={milestone} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{milestone}</h5>
                            <span style={{ color: color, fontSize: '0.75rem', fontWeight: '500' }}>{duration}</span>
                          </div>
                          
                          <div style={{ marginBottom: '0.75rem' }}>
                            <div style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                              <strong>Focus:</strong> {focus}
                            </div>
                          </div>

                          <div style={{ marginBottom: '0.75rem' }}>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Practice Projects:</h6>
                            <ul style={{ color: '#94a3b8', fontSize: '0.75rem', paddingLeft: '1rem', margin: 0 }}>
                              {projects.map(project => <li key={project}>{project}</li>)}
                            </ul>
                          </div>

                          <div>
                            <h6 style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>Learning Resources:</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              {resources.map(resource => (
                                <span key={resource} style={{ 
                                  backgroundColor: `${color}15`,
                                  color: color,
                                  padding: '0.25rem 0.5rem',
                                  borderRadius: '3px',
                                  fontSize: '0.75rem'
                                }}>
                                  {resource}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Portfolio Projects */}
              <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
                <h4 style={{ color: '#f1f5f9', marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
                  Essential Portfolio Projects
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  {[
                    { 
                      project: 'End-to-End ML Pipeline',
                      skills: ['Data preprocessing', 'Model training', 'Deployment', 'Monitoring'],
                      description: 'Complete ML workflow from data to production',
                      difficulty: 'Intermediate'
                    },
                    { 
                      project: 'Computer Vision Application',
                      skills: ['CNN architecture', 'Image processing', 'Transfer learning', 'Model optimization'],
                      description: 'Image classification or object detection system',
                      difficulty: 'Advanced'
                    },
                    { 
                      project: 'NLP Sentiment Analysis',
                      skills: ['Text preprocessing', 'Word embeddings', 'LSTM/Transformers', 'API development'],
                      description: 'Real-time sentiment analysis web service',
                      difficulty: 'Intermediate'
                    },
                    { 
                      project: 'Recommendation System',
                      skills: ['Collaborative filtering', 'Content-based filtering', 'Matrix factorization', 'A/B testing'],
                      description: 'Personalized recommendation engine',
                      difficulty: 'Advanced'
                    }
                  ].map(({ project, skills, description, difficulty }) => (
                    <div key={project} style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h5 style={{ color: '#8b5cf6', margin: 0, fontSize: '0.875rem', fontWeight: '600' }}>{project}</h5>
                        <span style={{ 
                          backgroundColor: difficulty === 'Advanced' ? '#ef4444' : '#f59e0b',
                          color: 'white',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '8px',
                          fontSize: '0.75rem'
                        }}>
                          {difficulty}
                        </span>
                      </div>
                      <p style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                        {description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                        {skills.map(skill => (
                          <span key={skill} style={{ 
                            backgroundColor: '#8b5cf620',
                            color: '#c4b5fd',
                            padding: '0.125rem 0.375rem',
                            borderRadius: '3px',
                            fontSize: '0.75rem'
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
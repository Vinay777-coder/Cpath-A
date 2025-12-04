'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { localAuth } from '@/lib/local-auth';
import Link from 'next/link';

export default function EnhancedCareerSuggestionsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [education, setEducation] = useState('');
  const [careerGoal, setCareerGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [workStyle, setWorkStyle] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  useEffect(() => {
    // Check if user is signed in using local auth
    if (!localAuth.isSignedIn()) {
      router.push('/login');
      return;
    }

    const currentUser = localAuth.getCurrentUser();
    setUser(currentUser);
    setIsLoaded(true);
  }, [router]);

  // Comprehensive skills list organized by categories
  const skillCategories = {
    'Programming Languages': [
      'JavaScript', 'Python', 'Java', 'TypeScript', 'C++', 'C#', 'Go', 'Rust', 
      'PHP', 'Ruby', 'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'Dart'
    ],
    'Frontend Technologies': [
      'React', 'Vue.js', 'Angular', 'HTML/CSS', 'Svelte', 'Next.js', 'Nuxt.js',
      'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Styled Components', 'Sass/SCSS'
    ],
    'Backend Technologies': [
      'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'ASP.NET',
      'Laravel', 'FastAPI', 'NestJS', 'Ruby on Rails', 'Phoenix', 'Gin'
    ],
    'Databases': [
      'SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase',
      'SQLite', 'Cassandra', 'DynamoDB', 'Neo4j', 'InfluxDB'
    ],
    'Cloud & DevOps': [
      'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Git',
      'Linux', 'Terraform', 'Ansible', 'CI/CD', 'Nginx', 'Apache'
    ],
    'Data & AI': [
      'Machine Learning', 'Data Analysis', 'TensorFlow', 'PyTorch', 'Pandas',
      'NumPy', 'Power BI', 'Tableau', 'Apache Spark', 'Hadoop', 'scikit-learn'
    ],
    'Mobile Development': [
      'React Native', 'Flutter', 'iOS Development', 'Android Development',
      'Xamarin', 'Ionic', 'Unity', 'Cordova'
    ],
    'Other Technologies': [
      'GraphQL', 'REST APIs', 'Microservices', 'Blockchain', 'WebRTC',
      'Socket.io', 'WebAssembly', 'ElasticSearch', 'RabbitMQ', 'Apache Kafka'
    ]
  };

  // Comprehensive interests list
  const interestCategories = {
    'Development Areas': [
      'Web Development', 'Mobile App Development', 'Desktop Applications', 
      'Game Development', 'E-commerce Solutions', 'Progressive Web Apps'
    ],
    'Data & Analytics': [
      'Data Science', 'Machine Learning', 'Artificial Intelligence', 
      'Data Analytics', 'Big Data', 'Business Intelligence', 'Predictive Analytics'
    ],
    'Infrastructure & Security': [
      'Cloud Computing', 'DevOps', 'Cybersecurity', 'Network Security',
      'System Administration', 'Infrastructure as Code', 'Site Reliability Engineering'
    ],
    'Specialized Fields': [
      'Blockchain Development', 'IoT Development', 'AR/VR Development', 
      'Robotics', 'Computer Vision', 'Natural Language Processing'
    ],
    'Business & Leadership': [
      'Product Management', 'Project Management', 'Technical Leadership', 
      'Startup Entrepreneurship', 'Digital Transformation', 'Strategy Consulting'
    ],
    'Design & Creative': [
      'UI/UX Design', 'Product Design', 'Graphic Design', 'Animation',
      'Digital Marketing', 'Content Creation', '3D Modeling'
    ],
    'Emerging Technologies': [
      'Quantum Computing', 'Edge Computing', 'Automation', 'API Development',
      'Serverless Architecture', 'Microservices Architecture'
    ]
  };

  const getAllSkills = () => {
    return Object.values(skillCategories).flat();
  };

  const getAllInterests = () => {
    return Object.values(interestCategories).flat();
  };

  const toggleSkill = (skill: string) => {
    setSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    if (!skills.length || !interests.length || !education || !careerGoal.trim()) {
      alert('Please fill out all required fields');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('/api/career-suggestions-basic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          skills,
          interests,
          educationLevel: education,
          careerGoal,
          experience,
          workStyle
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success && data.suggestions) {
        setSuggestions(data.suggestions);
      } else {
        throw new Error(data.error || 'Failed to get career suggestions');
      }
    } catch (error) {
      console.error('Error getting career suggestions:', error);
      alert('Failed to get AI career suggestions. Please try again.');
      
      // Enhanced fallback suggestions
      const fallbackSuggestions = [
        {
          id: '1',
          title: 'Full Stack Developer',
          description: 'Build complete web applications from frontend to backend using modern technologies.',
          growthPotential: 'High',
          learningTime: '8-15 months',
          salaryRange: '$70,000 - $120,000',
          requiredSkills: skills.slice(0, 4),
          roadmapId: 'fullstack-development'
        },
        {
          id: '2',
          title: 'Data Scientist', 
          description: 'Analyze complex data to extract insights and build predictive models.',
          growthPotential: 'Very High',
          learningTime: '12-24 months',
          salaryRange: '$85,000 - $150,000',
          requiredSkills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
          roadmapId: 'data-science'
        },
        {
          id: '3',
          title: 'Cloud Solutions Architect',
          description: 'Design and implement scalable cloud infrastructure solutions.',
          growthPotential: 'High',
          learningTime: '15-30 months',
          salaryRange: '$100,000 - $180,000',
          requiredSkills: ['AWS', 'Docker', 'Kubernetes', 'System Design'],
          roadmapId: 'devops'
        }
      ];
      
      setSuggestions(fallbackSuggestions);
    } finally {
      setLoading(false);
    }
  };

  // Show loading while Clerk is initializing
  if (!isLoaded) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ 
            width: '60px', 
            height: '60px', 
            border: '4px solid rgba(255,255,255,0.3)', 
            borderTop: '4px solid white', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite', 
            margin: '0 auto 2rem' 
          }}></div>
          <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>Initializing AI Career Assistant...</p>
        </div>
      </div>
    );
  }

  // Show sign-in prompt if user is not authenticated
  if (!user) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '2rem' 
      }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
          borderRadius: '24px', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
          padding: '4rem', 
          textAlign: 'center', 
          maxWidth: '600px',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '2rem'
          }}>🎯</div>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            AI Career Discovery
          </h1>
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '3rem', 
            fontSize: '1.125rem',
            lineHeight: '1.6'
          }}>
            Unlock personalized AI career suggestions tailored to your unique profile, skills, and aspirations. 
            Join thousands who've discovered their perfect career path.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="/login" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '16px',
                border: 'none',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                🚀 Sign In & Explore
              </button>
            </Link>
            <Link href="/sign-up" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'white',
                color: '#374151',
                padding: '1rem 2.5rem',
                borderRadius: '16px',
                border: '2px solid #e5e7eb',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                ✨ Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Results page
  if (suggestions.length > 0) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background effects */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 1
        }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#374151',
                padding: '1rem 2rem',
                borderRadius: '16px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}>
                ← Dashboard
              </button>
            </Link>
            <button 
              onClick={() => setSuggestions([])}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
            >
              🔄 New Search
            </button>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              🎯 Your AI Career Matches
            </h1>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: '1.25rem', 
              fontWeight: '300'
            }}>
              Personalized recommendations crafted by our AI based on your unique profile
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2.5rem', 
            marginBottom: '3rem' 
          }}>
            {suggestions.map((suggestion, index) => (
              <div key={suggestion.id} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                {/* Card gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: index % 3 === 0 
                    ? 'linear-gradient(135deg, #ff6b6b, #4ecdc4)' 
                    : index % 3 === 1
                    ? 'linear-gradient(135deg, #4ecdc4, #45b7d1)'
                    : 'linear-gradient(135deg, #45b7d1, #96ceb4)'
                }}></div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.75rem', 
                    fontWeight: 'bold', 
                    color: '#1f2937', 
                    marginBottom: '0.75rem' 
                  }}>
                    {suggestion.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{
                      backgroundColor: suggestion.growthPotential === 'High' || suggestion.growthPotential === 'Very High' 
                        ? '#dcfce7' : '#fef3c7',
                      color: suggestion.growthPotential === 'High' || suggestion.growthPotential === 'Very High' 
                        ? '#166534' : '#92400e',
                      padding: '0.5rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      📈 {suggestion.growthPotential} Growth
                    </span>
                    {suggestion.salaryRange && (
                      <span style={{
                        backgroundColor: '#f0f9ff',
                        color: '#0369a1',
                        padding: '0.5rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}>
                        💰 {suggestion.salaryRange}
                      </span>
                    )}
                  </div>
                </div>

                <p style={{ 
                  color: '#6b7280', 
                  marginBottom: '2rem', 
                  lineHeight: '1.7',
                  fontSize: '1.05rem'
                }}>
                  {suggestion.description}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ 
                      fontSize: '1rem', 
                      color: '#374151', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      ⏱️ Learning Journey: <span style={{ color: '#059669' }}>{suggestion.learningTime}</span>
                    </p>
                  </div>
                  
                  <div>
                    <p style={{ 
                      fontSize: '1rem', 
                      color: '#374151', 
                      fontWeight: '600', 
                      marginBottom: '1rem' 
                    }}>
                      🛠️ Key Skills You'll Master:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {suggestion.requiredSkills.map((skill: string, skillIndex: number) => (
                        <span key={skillIndex} style={{
                          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                          color: '#374151',
                          padding: '0.5rem 1rem',
                          borderRadius: '12px',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          border: '1px solid #e2e8f0'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link href={`/roadmaps/${suggestion.roadmapId}`} style={{ flex: 1, textDecoration: 'none' }}>
                    <button style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '1rem',
                      borderRadius: '16px',
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                      transition: 'all 0.3s ease'
                    }}>
                      🗺️ Start Learning Path
                    </button>
                  </Link>
                  <Link href="/chat" style={{ flex: 1, textDecoration: 'none' }}>
                    <button style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      color: '#374151',
                      padding: '1rem',
                      borderRadius: '16px',
                      border: '2px solid #e5e7eb',
                      fontSize: '1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      💬 Chat with JARVIS
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Main form page with enhanced UI
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
        borderRadius: '50%',
        filter: 'blur(30px)',
        zIndex: 1
      }}></div>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '5%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
        borderRadius: '50%',
        filter: 'blur(25px)',
        zIndex: 1
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#374151',
              padding: '1rem 2rem',
              borderRadius: '16px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}>
              ← Back to Dashboard
            </button>
          </Link>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            color: '#1a1a1a',
            fontSize: '4rem',
            fontWeight: '900',
            marginBottom: '2rem',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            🚀 AI Career Discovery
          </div>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.95)', 
            fontSize: '1.5rem', 
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Unlock your potential with AI-powered career recommendations tailored to your unique skills, interests, and aspirations
          </p>
        </div>

        {/* Add keyframe animation */}
        <style jsx>{`
          @keyframes gradient-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>

        {/* Main Form Container */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '32px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '4rem',
          marginBottom: '3rem',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          
          {/* Skills Section */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '24px',
              padding: '3rem',
              marginBottom: '3rem',
              boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛠️</div>
                <h2 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  color: 'white', 
                  marginBottom: '1rem',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>
                  Select Your Skills
                </h2>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '1.25rem', 
                  fontWeight: '300' 
                }}>
                  Choose the technologies and tools you're proficient in or want to learn
                </p>
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {Object.entries(skillCategories).map(([category, categorySkills], index) => (
                <div key={category} style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Category header gradient */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: index % 4 === 0 
                      ? 'linear-gradient(135deg, #667eea, #764ba2)'
                      : index % 4 === 1
                      ? 'linear-gradient(135deg, #4ecdc4, #44a08d)'
                      : index % 4 === 2
                      ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
                      : 'linear-gradient(135deg, #feca57, #ff9ff3)'
                  }}></div>
                  
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#1f2937', 
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                    background: index % 4 === 0 
                      ? 'linear-gradient(135deg, #667eea, #764ba2)'
                      : index % 4 === 1
                      ? 'linear-gradient(135deg, #4ecdc4, #44a08d)'
                      : index % 4 === 2
                      ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
                      : 'linear-gradient(135deg, #feca57, #ff9ff3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {category}
                  </h3>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                    gap: '0.75rem'
                  }}>
                    {categorySkills.map(skill => {
                      const isSelected = skills.includes(skill);
                      const categoryColor = index % 4 === 0 
                        ? '#667eea'
                        : index % 4 === 1
                        ? '#4ecdc4'
                        : index % 4 === 2
                        ? '#ff6b6b'
                        : '#feca57';
                      
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => toggleSkill(skill)}
                          style={{
                            padding: '0.75rem 1rem',
                            border: isSelected ? `2px solid ${categoryColor}` : '2px solid #e5e7eb',
                            background: isSelected 
                              ? `linear-gradient(135deg, ${categoryColor}20, ${categoryColor}10)` 
                              : 'white',
                            color: isSelected ? categoryColor : '#374151',
                            borderRadius: '12px',
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            fontWeight: isSelected ? '700' : '500',
                            boxShadow: isSelected 
                              ? `0 8px 25px ${categoryColor}30` 
                              : '0 2px 8px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.3s ease',
                            transform: isSelected ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
                            textAlign: 'center',
                            position: 'relative'
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            {isSelected && (
                              <span style={{ 
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: categoryColor,
                                color: 'white',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>✓</span>
                            )}
                            {skill}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Selection count badge */}
                  <div style={{
                    marginTop: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      background: `${index % 4 === 0 ? '#667eea' : index % 4 === 1 ? '#4ecdc4' : index % 4 === 2 ? '#ff6b6b' : '#feca57'}20`,
                      color: index % 4 === 0 ? '#667eea' : index % 4 === 1 ? '#4ecdc4' : index % 4 === 2 ? '#ff6b6b' : '#feca57',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      {categorySkills.filter(skill => skills.includes(skill)).length} selected
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Skills Summary */}
            <div style={{
              marginTop: '3rem',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
                📊 Skills Summary
              </h4>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                You've selected <span style={{ 
                  fontWeight: '700', 
                  color: '#667eea',
                  background: '#667eea20',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px'
                }}>{skills.length} skills</span> across {Object.keys(skillCategories).filter(cat => skillCategories[cat as keyof typeof skillCategories].some(skill => skills.includes(skill))).length} categories
              </p>
            </div>
          </div>

          {/* Interests Section */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
              borderRadius: '24px',
              padding: '3rem',
              marginBottom: '3rem',
              boxShadow: '0 20px 40px rgba(78, 205, 196, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💡</div>
                <h2 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  color: 'white', 
                  marginBottom: '1rem',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>
                  Choose Your Interests
                </h2>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '1.25rem', 
                  fontWeight: '300' 
                }}>
                  Select the areas that excite you and align with your career aspirations
                </p>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {Object.entries(interestCategories).map(([category, categoryInterests], index) => (
                <div key={category} style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Category header gradient */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: index % 4 === 0 
                      ? 'linear-gradient(135deg, #4ecdc4, #44a08d)'
                      : index % 4 === 1
                      ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
                      : index % 4 === 2
                      ? 'linear-gradient(135deg, #feca57, #ff9ff3)'
                      : 'linear-gradient(135deg, #667eea, #764ba2)'
                  }}></div>
                  
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#1f2937', 
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                    background: index % 4 === 0 
                      ? 'linear-gradient(135deg, #4ecdc4, #44a08d)'
                      : index % 4 === 1
                      ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
                      : index % 4 === 2
                      ? 'linear-gradient(135deg, #feca57, #ff9ff3)'
                      : 'linear-gradient(135deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {category}
                  </h3>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
                    gap: '0.75rem'
                  }}>
                    {categoryInterests.map(interest => {
                      const isSelected = interests.includes(interest);
                      const categoryColor = index % 4 === 0 
                        ? '#4ecdc4'
                        : index % 4 === 1
                        ? '#ff6b6b'
                        : index % 4 === 2
                        ? '#feca57'
                        : '#667eea';
                      
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          style={{
                            padding: '0.75rem 1rem',
                            border: isSelected ? `2px solid ${categoryColor}` : '2px solid #e5e7eb',
                            background: isSelected 
                              ? `linear-gradient(135deg, ${categoryColor}20, ${categoryColor}10)` 
                              : 'white',
                            color: isSelected ? categoryColor : '#374151',
                            borderRadius: '12px',
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            fontWeight: isSelected ? '700' : '500',
                            boxShadow: isSelected 
                              ? `0 8px 25px ${categoryColor}30` 
                              : '0 2px 8px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.3s ease',
                            transform: isSelected ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
                            textAlign: 'center',
                            position: 'relative'
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            {isSelected && (
                              <span style={{ 
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: categoryColor,
                                color: 'white',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>✓</span>
                            )}
                            {interest}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Selection count badge */}
                  <div style={{
                    marginTop: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      background: `${index % 4 === 0 ? '#4ecdc4' : index % 4 === 1 ? '#ff6b6b' : index % 4 === 2 ? '#feca57' : '#667eea'}20`,
                      color: index % 4 === 0 ? '#4ecdc4' : index % 4 === 1 ? '#ff6b6b' : index % 4 === 2 ? '#feca57' : '#667eea',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      {categoryInterests.filter(interest => interests.includes(interest)).length} selected
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Interests Summary */}
            <div style={{
              marginTop: '3rem',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
                💫 Interests Summary
              </h4>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                You've selected <span style={{ 
                  fontWeight: '700', 
                  color: '#4ecdc4',
                  background: '#4ecdc420',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px'
                }}>{interests.length} interests</span> across {Object.keys(interestCategories).filter(cat => interestCategories[cat as keyof typeof interestCategories].some(interest => interests.includes(interest))).length} categories
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            marginBottom: '3rem' 
          }}>
            {/* Education Level */}
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: '#1f2937', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                🎓 Education Level
              </label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  border: 'none',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  backgroundColor: '#f8fafc',
                  color: '#374151',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select your education level</option>
                <option value="High School">🏫 High School</option>
                <option value="Associate Degree">📜 Associate Degree</option>
                <option value="Bachelor's Degree">🎓 Bachelor's Degree</option>
                <option value="Master's Degree">🏆 Master's Degree</option>
                <option value="PhD">👨‍🎓 PhD</option>
                <option value="Self-taught">📚 Self-taught</option>
                <option value="Bootcamp">💻 Coding Bootcamp</option>
                <option value="Professional Certification">🏅 Professional Certification</option>
                <option value="Online Courses">🌐 Online Courses</option>
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: '#1f2937', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                💼 Experience Level
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  border: 'none',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  backgroundColor: '#f8fafc',
                  color: '#374151',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select experience level</option>
                <option value="Beginner">🌱 Beginner (0-1 years)</option>
                <option value="Junior">🚀 Junior (1-3 years)</option>
                <option value="Mid-level">⚡ Mid-level (3-5 years)</option>
                <option value="Senior">🎯 Senior (5-8 years)</option>
                <option value="Expert">🏆 Expert (8+ years)</option>
                <option value="Student">📖 Student</option>
                <option value="Career Change">🔄 Career Changer</option>
              </select>
            </div>

            {/* Work Style Preference */}
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: '#1f2937', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                🏢 Work Style
              </label>
              <select
                value={workStyle}
                onChange={(e) => setWorkStyle(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  border: 'none',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  backgroundColor: '#f8fafc',
                  color: '#374151',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select work preference</option>
                <option value="Remote">🏠 Remote Work</option>
                <option value="Hybrid">🔀 Hybrid</option>
                <option value="On-site">🏢 On-site</option>
                <option value="Freelance">💼 Freelance</option>
                <option value="Startup">🚀 Startup Environment</option>
                <option value="Corporate">🏢 Corporate</option>
                <option value="Consulting">🤝 Consulting</option>
              </select>
            </div>
          </div>

          {/* Career Aspirations Section */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
              borderRadius: '24px',
              padding: '3rem',
              marginBottom: '3rem',
              boxShadow: '0 20px 40px rgba(255, 107, 107, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
                <h2 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  color: 'white', 
                  marginBottom: '1rem',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>
                  Career Aspirations
                </h2>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '1.25rem', 
                  fontWeight: '300' 
                }}>
                  Tell us about your dream career and what motivates you
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '24px',
              padding: '3rem',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Top gradient bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)'
              }}></div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1f2937',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  📝 Share Your Vision
                </h3>
                <p style={{
                  textAlign: 'center',
                  color: '#6b7280',
                  fontSize: '1.125rem',
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}>
                  The more details you share, the more personalized and accurate your AI recommendations will be
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <textarea
                  value={careerGoal}
                  onChange={(e) => setCareerGoal(e.target.value)}
                  placeholder="🌟 Describe your career vision in detail...\n\n• What kind of impact do you want to make?\n• What technologies or industries excite you most?\n• Where do you see yourself in 5 years?\n• What type of work environment inspires you?\n• What are your biggest career motivations?\n• Any specific companies or roles you admire?\n\nBe as detailed as possible - our AI thrives on rich context!"
                  rows={10}
                  style={{
                    width: '100%',
                    padding: '2rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '20px',
                    fontSize: '1.125rem',
                    backgroundColor: 'white',
                    color: '#374151',
                    resize: 'vertical',
                    fontWeight: '500',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                    fontFamily: 'inherit',
                    lineHeight: '1.7',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.borderColor = '#ff6b6b';
                    target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.2)';
                  }}
                  onBlur={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.borderColor = '#e5e7eb';
                    target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
                  }}
                />
                
                {/* Character count and tips */}
                <div style={{ 
                  marginTop: '1.5rem', 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {careerGoal.length} characters
                    </span>
                    <span style={{
                      background: careerGoal.length >= 200 ? '#dcfce7' : '#fef3c7',
                      color: careerGoal.length >= 200 ? '#166534' : '#92400e',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {careerGoal.length >= 200 ? '✅ Great detail!' : '💡 Add more details'}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      fontWeight: '500'
                    }}>
                      💡 Pro tip:
                    </span>
                    <span style={{
                      fontSize: '0.875rem',
                      color: '#374151',
                      fontStyle: 'italic'
                    }}>
                      Detailed responses get better AI recommendations
                    </span>
                  </div>
                </div>
              </div>

              {/* Inspiration prompts */}
              <div style={{
                marginTop: '2rem',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                borderRadius: '16px',
                padding: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#374151',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  🎨 Need Inspiration? Try These Prompts:
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {[
                    '"I want to build products that help millions of people solve real problems"',
                    '"I\'m passionate about using AI to revolutionize healthcare and education"',
                    '"I dream of leading a tech team that creates sustainable solutions"',
                    '"I want to work remotely while building cutting-edge mobile applications"'
                  ].map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setCareerGoal(prompt.replace(/"/g, ''))}
                      style={{
                        padding: '1rem',
                        background: 'white',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        color: '#374151',
                        cursor: 'pointer',
                        fontWeight: '500',
                        textAlign: 'left',
                        transition: 'all 0.3s ease',
                        lineHeight: '1.5'
                      }}
                      onMouseOver={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.borderColor = '#ff6b6b';
                        target.style.transform = 'translateY(-2px)';
                        target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.15)';
                      }}
                      onMouseOut={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.borderColor = '#e5e7eb';
                        target.style.transform = 'translateY(0)';
                        target.style.boxShadow = 'none';
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                background: loading 
                  ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)' 
                  : 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)',
                color: 'white',
                padding: '1.5rem 5rem',
                borderRadius: '20px',
                border: 'none',
                fontSize: '1.375rem',
                fontWeight: '700',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                margin: '0 auto',
                boxShadow: loading 
                  ? 'none' 
                  : '0 20px 40px rgba(255, 107, 107, 0.4)',
                transition: 'all 0.3s ease',
                transform: loading ? 'scale(0.98)' : 'scale(1)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {loading && (
                <div style={{
                  width: '28px',
                  height: '28px',
                  border: '3px solid transparent',
                  borderTop: '3px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              )}
              {loading ? '🤖 AI is analyzing your profile...' : '🚀 Discover My Perfect Career'}
            </button>

            {/* Progress indicators */}
            {loading && (
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#667eea',
                        animation: `pulse-dot 1.4s ease-in-out ${dot * 0.16}s infinite both`
                      }}
                    ></div>
                  ))}
                </div>
                <p style={{ color: '#6b7280', fontSize: '1rem' }}>
                  Our AI is analyzing millions of career paths to find your perfect match...
                </p>
              </div>
            )}
          </div>

          {/* Feature highlights */}
          <div style={{ 
            marginTop: '4rem', 
            padding: '2rem', 
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
            borderRadius: '20px',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#0369a1', 
              marginBottom: '2rem' 
            }}>
              ✨ What Makes Our AI Special
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem' 
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎯</div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Hyper-Personalized</h4>
                <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                  Recommendations based on your unique skill combination and career aspirations
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚀</div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Future-Ready</h4>
                <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                  Career paths aligned with industry trends and emerging technologies
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📈</div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Growth Focused</h4>
                <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                  Emphasis on high-growth potential careers with clear learning roadmaps
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse-dot {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}


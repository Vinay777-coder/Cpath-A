'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function CareerSuggestionsPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [education, setEducation] = useState('');
  const [careerGoal, setCareerGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const skillOptions = [
    // Programming Languages
    'JavaScript', 'Python', 'Java', 'TypeScript', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin',
    // Frontend Technologies
    'React', 'Vue.js', 'Angular', 'HTML/CSS', 'Svelte', 'Next.js', 'Tailwind CSS', 'Bootstrap',
    // Backend Technologies
    'Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'ASP.NET', 'Laravel', 'FastAPI',
    // Databases
    'SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase',
    // Cloud & DevOps
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux',
    // Data & AI
    'Machine Learning', 'Data Analysis', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Power BI', 'Tableau',
    // Mobile Development
    'React Native', 'Flutter', 'iOS Development', 'Android Development',
    // Other Skills
    'GraphQL', 'REST APIs', 'Microservices', 'Blockchain', 'Testing', 'Agile/Scrum'
  ];
  
  const interestOptions = [
    // Development Areas
    'Web Development', 'Mobile App Development', 'Desktop Applications', 'Game Development',
    // Data & AI
    'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Data Analytics', 'Big Data',
    // Infrastructure & Security
    'Cloud Computing', 'DevOps', 'Cybersecurity', 'Network Administration', 'System Administration',
    // Specialized Fields
    'Blockchain Development', 'IoT Development', 'AR/VR Development', 'Robotics',
    // Business & Management
    'Product Management', 'Project Management', 'Technical Leadership', 'Startup Entrepreneurship',
    // Design & UX
    'UI/UX Design', 'Product Design', 'Digital Marketing', 'Content Creation',
    // Emerging Technologies
    'Quantum Computing', 'Edge Computing', 'Automation', 'API Development'
  ];

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
      alert('Please fill out all fields');
      return;
    }

    setLoading(true);
    
    try {
      // Call the real AI API
      const response = await fetch('/api/career-suggestions-basic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          skills,
          interests,
          educationLevel: education,
          careerGoal
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
      
      // Fallback to mock data if API fails
      const fallbackSuggestions = [
        {
          id: '1',
          title: 'Frontend Developer',
          description: 'Build beautiful, interactive user interfaces using modern frameworks.',
          growthPotential: 'High',
          learningTime: '6-12 months',
          requiredSkills: ['JavaScript', 'React', 'HTML/CSS'],
          roadmapId: 'frontend-development'
        },
        {
          id: '2',
          title: 'Full Stack Developer', 
          description: 'Work on both frontend and backend to build complete applications.',
          growthPotential: 'High',
          learningTime: '12-18 months',
          requiredSkills: ['JavaScript', 'Node.js', 'React', 'SQL'],
          roadmapId: 'fullstack-development'
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
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '4px solid #e5e7eb', borderTop: '4px solid #2563eb', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }}></div>
          <p style={{ color: '#6b7280' }}>Loading...</p>
        </div>
      </div>
    );
  }

  // Show sign-in prompt if user is not authenticated
  if (!isSignedIn) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', padding: '3rem', textAlign: 'center', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            🎯 Sign In Required
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Please sign in to access personalized AI career suggestions tailored to your profile.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/login" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Sign In
              </button>
            </Link>
            <Link href="/sign-up" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'white',
                color: '#374151',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: '2px solid #e5e7eb',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (suggestions.length > 0) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)', padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'white',
                color: '#374151',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #e5e7eb',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                ← Back to Dashboard
              </button>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              🎯 Your Career Suggestions
            </h1>
            <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
              Based on your profile, here are personalized career paths for you
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {suggestions.map(suggestion => (
              <div key={suggestion.id} style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                padding: '2rem',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                    {suggestion.title}
                  </h3>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: suggestion.growthPotential === 'High' ? '#dcfce7' : '#fef3c7',
                    color: suggestion.growthPotential === 'High' ? '#166534' : '#92400e',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    📈 {suggestion.growthPotential} Growth
                  </div>
                </div>

                <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {suggestion.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500', marginBottom: '0.5rem' }}>
                    ⏱️ Learning Time: {suggestion.learningTime}
                  </p>
                  <div>
                    <p style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500', marginBottom: '0.5rem' }}>
                      🛠️ Required Skills:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {suggestion.requiredSkills.map((skill: string, index: number) => (
                        <span key={index} style={{
                          backgroundColor: '#f3f4f6',
                          color: '#374151',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.375rem',
                          fontSize: '0.75rem',
                          border: '1px solid #d1d5db'
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
                      backgroundColor: '#2563eb',
                      color: 'white',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>
                      📚 Explore Roadmap
                    </button>
                  </Link>
                  <Link href="/chat" style={{ flex: 1, textDecoration: 'none' }}>
                    <button style={{
                      width: '100%',
                      backgroundColor: 'white',
                      color: '#374151',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '2px solid #e5e7eb',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>
                      💬 Ask JARVIS
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => setSuggestions([])}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              ← Back to Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#f3f4f6',
              color: '#374151',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #d1d5db',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ← Dashboard
            </button>
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            🎯 AI Career Suggestions
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
            Get personalized career guidance powered by AI
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#374151' }}>
            Select Your Skills
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
            {skillOptions.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                style={{
                  padding: '1rem',
                  border: `2px solid ${skills.includes(skill) ? '#2563eb' : '#e5e7eb'}`,
                  borderRadius: '0.75rem',
                  backgroundColor: skills.includes(skill) ? '#dbeafe' : 'white',
                  color: skills.includes(skill) ? '#1d4ed8' : '#374151',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                {skills.includes(skill) ? '✓ ' : ''}{skill}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#374151' }}>
            Select Your Interests
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {interestOptions.map(interest => (
              <button
                key={interest}
                onClick={() => toggleInterest(interest)}
                style={{
                  padding: '1rem',
                  border: `2px solid ${interests.includes(interest) ? '#059669' : '#e5e7eb'}`,
                  borderRadius: '0.75rem',
                  backgroundColor: interests.includes(interest) ? '#d1fae5' : 'white',
                  color: interests.includes(interest) ? '#047857' : '#374151',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                {interests.includes(interest) ? '✓ ' : ''}{interest}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
              Education Level
            </label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.75rem',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select education level</option>
              <option value="high-school">High School</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="bootcamp">Coding Bootcamp</option>
              <option value="self-taught">Self-taught</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
              Career Goal
            </label>
            <input
              type="text"
              value={careerGoal}
              onChange={(e) => setCareerGoal(e.target.value)}
              placeholder="e.g., Become a full-stack developer"
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.75rem',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}
            />
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              backgroundColor: loading ? '#9ca3af' : '#2563eb',
              color: 'white',
              padding: '1rem 3rem',
              borderRadius: '0.75rem',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              minWidth: '250px'
            }}
          >
            {loading ? '🤖 AI is thinking...' : '🚀 Get AI Career Suggestions'}
          </button>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', textAlign: 'center' }}>
          <p style={{ color: '#1e40af', fontSize: '0.875rem', margin: 0 }}>
            ✨ Powered by AI • Get personalized recommendations in seconds
          </p>
        </div>
      </div>
    </div>
  );
}
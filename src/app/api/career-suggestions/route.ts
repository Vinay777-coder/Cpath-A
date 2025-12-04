import { NextRequest, NextResponse } from 'next/server';
import { chatWithAI } from '@/lib/ai';

interface UserProfile {
  education: string;
  currentRole: string;
  experience: string;
  skills: string[];
  interests: string[];
  careerGoals: string[];
  preferredWorkStyle: string;
  salaryExpectation: string;
  location: string;
  industryPreference: string[];
}

interface CareerSuggestion {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  growthPotential: 'Low' | 'Medium' | 'High';
  averageSalary: string;
  requiredSkills: string[];
  nextSteps: string[];
  industries: string[];
  workStyle: string;
  timeToTransition: string;
  roadmapSteps: Array<{
    step: string;
    duration: string;
    description: string;
  }>;
  roadmapLink: string | null;
}

export async function POST(request: NextRequest) {
  try {
    const userProfile: UserProfile = await request.json();

    // Create a comprehensive prompt for JARVIS to generate career suggestions
    const prompt = `As JARVIS, Tony Stark's AI assistant but focused on career mentorship, analyze this user profile and provide 5 personalized career suggestions with detailed roadmaps.

User Profile:
- Education: ${userProfile.education}
- Current Role: ${userProfile.currentRole}
- Experience Level: ${userProfile.experience}
- Skills: ${userProfile.skills.join(', ')}
- Interests: ${userProfile.interests.join(', ')}
- Career Goals: ${userProfile.careerGoals.join(', ')}
- Preferred Work Style: ${userProfile.preferredWorkStyle}
- Salary Expectation: ${userProfile.salaryExpectation}
- Location: ${userProfile.location}
- Industry Preferences: ${userProfile.industryPreference.join(', ')}

Available Career Roadmaps in our system (prioritize matching user's interests to these):
- frontend-development → "Frontend Developer" or "React Developer" or "UI Developer"
- backend-development → "Backend Developer" or "API Developer" or "Server-Side Developer"
- fullstack-development → "Full Stack Developer" or "MEAN/MERN Stack Developer"
- data-science → "Data Scientist" or "Data Analyst" or "Business Intelligence Analyst"
- machine-learning-engineer → "Machine Learning Engineer" or "AI Engineer" or "ML Specialist"
- devops-engineer → "DevOps Engineer" or "Cloud Engineer" or "Site Reliability Engineer"
- cyber-security → "Cybersecurity Analyst" or "Security Engineer" or "Ethical Hacker"
- android-development → "Android Developer" or "Mobile App Developer (Android)"
- ios-development → "iOS Developer" or "Mobile App Developer (iOS)"
- ux-design → "UX Designer" or "User Experience Designer" or "Product Designer"
- react-development → "React Developer" or "Frontend React Specialist"
- nodejs-backend → "Node.js Developer" or "Backend JavaScript Developer"
- python-programming → "Python Developer" or "Python Programmer"

Based on the user's profile, suggest 5 specific career paths that match their skills and interests. Prioritize careers that have roadmaps available.

Please provide exactly 5 career suggestions in JSON format. Each suggestion should include:
- title: A SPECIFIC job title that matches the user's interests and skills (e.g., if they're interested in AI and have Python skills, suggest "Machine Learning Engineer" or "AI Engineer", not generic "Software Developer")
- description: A detailed description (3-4 sentences) explaining why THIS SPECIFIC career path perfectly suits their profile, skills, and interests
- difficulty: "Easy", "Medium", or "Hard" based on transition difficulty from their current situation
- growthPotential: "Low", "Medium", or "High" 
- averageSalary: Realistic salary range for that specific role
- requiredSkills: Array of key skills needed (keep for compatibility)
- nextSteps: Array of 4-6 immediate actionable steps they can take this week for THIS SPECIFIC career
- industries: Array of relevant industries (keep for compatibility)
- workStyle: Description of work environment (keep for compatibility)
- timeToTransition: Realistic time to transition to THIS SPECIFIC role
- roadmapSteps: Array of 6-8 detailed, personalized learning steps with realistic timelines, specifically designed for transitioning to THIS EXACT career from their current situation
- roadmapLink: Match to available roadmap IDs when the career aligns (e.g., "Machine Learning Engineer" → "machine-learning-engineer")

AVAILABLE ROADMAPS FOR MATCHING (use exact IDs):
- 'frontend-development' → Frontend Developer, React Developer, UI Developer
- 'backend-development' → Backend Developer, Server Engineer, API Developer  
- 'fullstack-development' → Full Stack Developer, Web Developer
- 'data-science' → Data Scientist, Data Analyst
- 'machine-learning-engineer' → ML Engineer, AI Engineer
- 'devops-engineer' → DevOps Engineer, Site Reliability Engineer
- 'cyber-security' → Cybersecurity Analyst, Security Engineer
- 'android-development' → Android Developer, Mobile Developer
- 'ios-development' → iOS Developer, Mobile Developer
- 'ux-design' → UX Designer, Product Designer
- 'ai-engineer' → AI Engineer, AI Specialist
- 'game-developer' → Game Developer, Game Engineer
- 'blockchain-developer' → Blockchain Developer, Web3 Developer
- 'product-manager' → Product Manager, Technical Product Manager
- 'qa-engineer' → QA Engineer, Test Engineer
- 'software-architect' → Software Architect, Technical Lead

CRITICAL REQUIREMENTS:
1. CAREER TITLES must be specific and relevant to user's interests/skills:
   - If user likes "AI/ML" + has "Python" → suggest "Machine Learning Engineer" (roadmapLink: 'machine-learning-engineer')
   - If user likes "Web Development" + has "JavaScript" → suggest "Frontend Developer" (roadmapLink: 'frontend-development')
   - If user likes "Data Science" + has "SQL" → suggest "Data Scientist" (roadmapLink: 'data-science')
   - If user likes "Cybersecurity" → suggest "Cybersecurity Analyst" (roadmapLink: 'cyber-security')
   - If user likes "Mobile Development" → suggest "Android Developer" (roadmapLink: 'android-development')

2. ROADMAP MATCHING: ALWAYS prioritize careers with available roadmaps and use the correct roadmapLink

3. PERSONALIZATION: Make roadmapSteps highly personalized based on:
   - User's current education level and role
   - Their existing skills and experience  
   - Their specific interests and career goals
   - Their preferred work style and industry preferences
   - Realistic progression from their current situation

Format the response as a JSON array of career suggestions. Be specific, actionable, and create career titles + roadmaps that feel custom-built for this exact user profile.`;

    console.log('🎯 Generating career suggestions for user profile...');
    
    const aiResponse = await chatWithAI(prompt);
    
    if (!aiResponse.success) {
      console.error('❌ AI response failed');
      return NextResponse.json({ 
        error: 'Failed to generate career suggestions',
        details: 'AI service unavailable' 
      }, { status: 500 });
    }

    // Try to parse the AI response as JSON
    let careerSuggestions: CareerSuggestion[];
    
    try {
      // Extract JSON from the response if it's wrapped in text
      if (!aiResponse.data) {
        throw new Error('No data received from AI service');
      }
      const jsonMatch = aiResponse.data.match(/\[[\s\S]*\]/);
      const jsonString = jsonMatch ? jsonMatch[0] : aiResponse.data;
      const parsedSuggestions: Record<string, unknown>[] = JSON.parse(jsonString);
      
      // Add unique IDs to each suggestion
      careerSuggestions = parsedSuggestions.map((suggestion: Record<string, unknown>, index: number): CareerSuggestion => ({
        id: `career-${Date.now()}-${index}`,
        title: (typeof suggestion.title === 'string' ? suggestion.title : null) || 'Career Opportunity',
        description: (typeof suggestion.description === 'string' ? suggestion.description : null) || 'Career analysis and recommendations',
        difficulty: (suggestion.difficulty as 'Easy' | 'Medium' | 'Hard') || 'Medium',
        growthPotential: (suggestion.growthPotential as 'Low' | 'Medium' | 'High') || 'Medium',
        averageSalary: (typeof suggestion.averageSalary === 'string' ? suggestion.averageSalary : null) || 'Varies by location and experience',
        requiredSkills: Array.isArray(suggestion.requiredSkills) ? suggestion.requiredSkills as string[] : [],
        nextSteps: Array.isArray(suggestion.nextSteps) ? suggestion.nextSteps as string[] : [],
        industries: Array.isArray(suggestion.industries) ? suggestion.industries as string[] : [],
        workStyle: (typeof suggestion.workStyle === 'string' ? suggestion.workStyle : null) || 'Flexible',
        timeToTransition: (typeof suggestion.timeToTransition === 'string' ? suggestion.timeToTransition : null) || '3-6 months',
        roadmapSteps: Array.isArray(suggestion.roadmapSteps) ? suggestion.roadmapSteps as Array<{step: string; duration: string; description: string}> : [],
        roadmapLink: (typeof suggestion.roadmapLink === 'string' ? suggestion.roadmapLink : null) || null
      }));
      
    } catch (parseError) {
      console.error('❌ Failed to parse AI response as JSON:', parseError);
      
      // Fallback: Create structured suggestions from text response
      careerSuggestions = [{
        id: `career-${Date.now()}-fallback`,
        title: "Personalized Career Analysis",
        description: "Based on your profile, here are JARVIS's recommendations:",
        difficulty: "Medium" as const,
        growthPotential: "High" as const,
        averageSalary: "Contact for details",
        requiredSkills: ["Analysis", "Planning", "Adaptability"],
        nextSteps: [
          "Review the detailed analysis below",
          "Identify specific areas of interest",
          "Create an action plan",
          "Connect with JARVIS for more guidance"
        ],
        industries: ["Various"],
        workStyle: "Flexible",
        timeToTransition: "Varies",
        roadmapSteps: [
          {
            step: "Self Assessment",
            duration: "1 week",
            description: "Analyze your strengths, interests, and career goals based on the detailed analysis provided."
          },
          {
            step: "Skill Gap Analysis",
            duration: "1-2 weeks",
            description: "Identify the skills you need to develop for your target career path."
          },
          {
            step: "Learning Plan Creation",
            duration: "1 week",
            description: "Create a structured learning plan with timelines and milestones."
          },
          {
            step: "Implementation & Practice",
            duration: "Ongoing",
            description: "Start implementing your plan and practice new skills regularly."
          }
        ],
        roadmapLink: null,
      }];
      
      // Store the original response for display
      (careerSuggestions[0] as unknown as Record<string, unknown>).fullAnalysis = aiResponse.data;
    }

    console.log('✅ Career suggestions generated successfully');
    
    return NextResponse.json({
      success: true,
      suggestions: careerSuggestions,
      message: "Career suggestions generated successfully by JARVIS"
    });

  } catch (error) {
    console.error('❌ Career suggestions API error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
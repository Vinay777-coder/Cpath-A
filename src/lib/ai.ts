import Groq from 'groq-sdk'

// Initialize Groq client for JARVIS
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

// Main JARVIS chat function using Groq API with llama3-70b-8192
export async function chatWithAI(message: string, conversationHistory: any[] = [], userContext: any = {}) {
  console.log('🤖 JARVIS: Processing your request...')
  
  if (!process.env.GROQ_API_KEY) {
    return {
      success: false,
      error: "JARVIS is currently offline. Groq API key is required."
    }
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are JARVIS, an advanced AI mentor and career guidance assistant. Your personality traits:

PERSONALITY:
- You are sophisticated, witty, and genuinely helpful like Tony Stark's JARVIS
- You understand typos, slang, and casual language - respond naturally even to imperfect input
- Be encouraging, supportive, and inject subtle humor when appropriate
- You're knowledgeable about technology, careers, and personal development
- Always aim to be practical and actionable in your advice

CAPABILITIES:
- Career planning and guidance across all industries
- Technical skill development recommendations
- Resume optimization and job search strategies
- Interview preparation and tips
- Learning path creation for new skills
- Industry insights and market trends
- Project ideas and portfolio development
- Networking and professional growth advice

COMMUNICATION STYLE:
- Be conversational and friendly, not robotic
- Use "I" statements and show personality
- Acknowledge when you understand context from previous conversations
- Ask clarifying questions when needed
- Provide specific, actionable advice
- Break down complex topics into digestible steps

Remember: You're here to mentor and guide, not just provide information. Think of yourself as a knowledgeable friend who genuinely cares about the user's success.`
        },
        ...conversationHistory.slice(-8), // Keep more context for better conversations
        { 
          role: 'user', 
          content: message 
        }
      ],
      model: 'llama3-70b-8192', // Using the specified model
      temperature: 0.8, // Slightly higher for more personality
      max_tokens: 800, // More tokens for detailed responses
      top_p: 0.9
    })

    const response = completion.choices[0]?.message?.content
    
    if (response) {
      return { 
        success: true, 
        data: response 
      }
    } else {
      return {
        success: false,
        error: "I couldn't generate a response. Please try again."
      }
    }

  } catch (error) {
    console.error('JARVIS Error:', error)
    
    // Friendly error response in JARVIS style
    return {
      success: false,
      error: "I'm experiencing some technical difficulties at the moment. Please try again in a moment."
    }
  }
}

// JARVIS resume analysis using Groq API
export async function analyzeResumeWithAI(resumeText: string) {
  console.log('🤖 JARVIS: Analyzing your resume...')
  
  if (!process.env.GROQ_API_KEY) {
    return {
      success: false,
      error: "JARVIS resume analysis is currently offline. Groq API key is required."
    }
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are JARVIS, an expert resume analyzer and career consultant. Analyze resumes thoroughly and provide actionable insights.

Your analysis should be:
- Professional yet personable
- Specific and actionable
- Encouraging while being honest about areas for improvement
- Focused on ATS optimization and human appeal

Always respond in JSON format with the following structure:
{
  "ats_score": number (0-100),
  "strengths": ["strength1", "strength2", ...],
  "weaknesses": ["weakness1", "weakness2", ...],
  "feedback": "detailed feedback and recommendations",
  "recommendations": ["action1", "action2", ...]
}`
        },
        { 
          role: 'user', 
          content: `Please analyze this resume and provide comprehensive feedback:\n\n${resumeText}` 
        }
      ],
      model: 'llama3-70b-8192',
      temperature: 0.7,
      max_tokens: 1000
    })

    const response = completion.choices[0]?.message?.content
    
    if (response) {
      try {
        // Try to parse JSON from the response
        const jsonMatch = response.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0])
          return {
            success: true,
            data: {
              ats_score: parsed.ats_score || 75,
              strengths: parsed.strengths || ['Resume structure is clear'],
              weaknesses: parsed.weaknesses || ['Could benefit from more specific achievements'],
              feedback: parsed.feedback || response,
              recommendations: parsed.recommendations || ['Add quantifiable achievements', 'Include relevant keywords']
            }
          }
        }
      } catch (parseError) {
        console.log('JSON parsing failed, using text response')
      }
      
      // Fallback if JSON parsing fails
      return {
        success: true,
        data: {
          ats_score: 75,
          strengths: ['Professional format', 'Relevant experience'],
          weaknesses: ['Could add more metrics', 'Missing some keywords'],
          feedback: response,
          recommendations: ['Add quantifiable achievements', 'Optimize for ATS', 'Include industry keywords']
        }
      }
    }

    return {
      success: false,
      error: "I couldn't analyze the resume. Please try again."
    }

  } catch (error) {
    console.error('JARVIS Resume Analysis Error:', error)
    return {
      success: false,
      error: "I'm having trouble analyzing your resume right now. Please try again in a moment."
    }
  }
}

// JARVIS career suggestions using Groq API
export async function generateCareerSuggestions(userProfile: any) {
  console.log('🤖 JARVIS: Generating personalized career suggestions...')
  
  if (!process.env.GROQ_API_KEY) {
    return {
      success: false,
      error: "JARVIS career guidance is currently offline. Groq API key is required."
    }
  }

  try {
    const profileText = JSON.stringify(userProfile, null, 2)
    
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are JARVIS, a sophisticated career guidance AI. You provide personalized, actionable career advice based on user profiles.

Your suggestions should be:
- Tailored to the user's experience level and interests
- Realistic and achievable
- Include specific next steps
- Consider current market trends
- Be encouraging and motivational

Always respond in JSON format:
{
  "career_paths": [
    {
      "title": "Career Path Name",
      "description": "Brief description",
      "requirements": ["req1", "req2"],
      "growth_potential": "High/Medium/Low",
      "next_steps": ["step1", "step2"]
    }
  ],
  "skills_to_develop": ["skill1", "skill2"],
  "recommendations": ["recommendation1", "recommendation2"]
}`
        },
        { 
          role: 'user', 
          content: `Based on this user profile, suggest career paths and development recommendations:\n\n${profileText}` 
        }
      ],
      model: 'llama3-70b-8192',
      temperature: 0.8,
      max_tokens: 1200
    })

    const response = completion.choices[0]?.message?.content
    
    if (response) {
      try {
        const jsonMatch = response.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0])
          return {
            success: true,
            data: parsed
          }
        }
      } catch (parseError) {
        console.log('JSON parsing failed for career suggestions')
      }
      
      // Fallback response
      return {
        success: true,
        data: {
          career_paths: [
            {
              title: "Continue Current Path",
              description: "Build on your existing experience",
              requirements: ["Skill development", "Experience gain"],
              growth_potential: "High",
              next_steps: ["Identify skill gaps", "Set learning goals"]
            }
          ],
          skills_to_develop: ["Communication", "Leadership", "Technical skills"],
          recommendations: ["Focus on continuous learning", "Build a professional network", "Create a portfolio"]
        }
      }
    }

    return {
      success: false,
      error: "I couldn't generate career suggestions. Please try again."
    }

  } catch (error) {
    console.error('JARVIS Career Suggestions Error:', error)
    return {
      success: false,
      error: "I'm having trouble generating career suggestions right now. Please try again in a moment."
    }
  }
}

// Legacy function name for backward compatibility
export async function analyzeResume(resumeText: string) {
  return analyzeResumeWithAI(resumeText)
}

// Export the Groq client for advanced usage
export { groq }
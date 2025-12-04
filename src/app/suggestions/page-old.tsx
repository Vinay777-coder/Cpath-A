'use client';

import { useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Brain, Target, Lightbulb, Award, ArrowRight, Users, Loader2, MessageCircle, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface UserProfile {
  education: string
  fieldOfStudy: string
  technicalSkills: string[]
  softSkills: string[]
  experience: string
  experienceYears: string
  careerGoals: string
  longTermVision: string
  workPreference: string
  companyType: string
  roleType: string
  location: string
}

interface CareerSuggestion {
  id: string
  title: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  marketGrowth: 'High' | 'Medium' | 'Low'
  description: string
  whyGoodFit: string
  roadmapId?: string
  roadmapTitle?: string
  salaryRange: string
  requiredSkills: string[]
  timeToAchieve: string
}

const technicalSkillsOptions = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'Angular', 
  'Vue.js', 'SQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Azure', 'Docker', 'Kubernetes',
  'Git', 'HTML/CSS', 'Machine Learning', 'Data Analysis', 'UI/UX Design', 'Mobile Development',
  'DevOps', 'Cybersecurity', 'Blockchain', 'AI/ML', 'Cloud Computing', 'Microservices'
]

const softSkillsOptions = [
  'Leadership', 'Communication', 'Problem Solving', 'Teamwork', 'Time Management',
  'Critical Thinking', 'Creativity', 'Adaptability', 'Project Management', 'Mentoring',
  'Presentation Skills', 'Negotiation', 'Strategic Thinking', 'Customer Focus'
]

export default function SuggestionsPage() {
  const { isLoaded, isSignedIn } = useUser();
  
  if (isLoaded && !isSignedIn) {
    redirect('/sign-in');
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const careerSuggestions = [
    {
      title: "Software Engineer",
      match: "95%",
      reason: "Strong coding skills and problem-solving abilities",
      requirements: ["Programming", "Problem Solving", "Teamwork"],
      icon: <Brain className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Data Scientist",
      match: "88%",
      reason: "Analytical mindset and statistical knowledge",
      requirements: ["Python", "Statistics", "Machine Learning"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "green"
    },
    {
      title: "Product Manager",
      match: "82%",
      reason: "Leadership skills and strategic thinking",
      requirements: ["Strategy", "Communication", "Analytics"],
      icon: <Target className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "UX Designer",
      match: "75%",
      reason: "Creative problem solving and user empathy",
      requirements: ["Design", "User Research", "Prototyping"],
      icon: <Lightbulb className="w-6 h-6" />,
      color: "orange"
    }
  ];

  const skillRecommendations = [
    {
      skill: "Cloud Computing",
      priority: "High",
      timeToLearn: "3-6 months",
      demand: "Very High"
    },
    {
      skill: "Machine Learning",
      priority: "Medium",
      timeToLearn: "6-12 months",
      demand: "High"
    },
    {
      skill: "Leadership",
      priority: "Medium",
      timeToLearn: "Ongoing",
      demand: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Career Suggestions</h1>
          <p className="text-gray-600">Personalized career recommendations based on your profile and skills</p>
        </div>

        {/* AI-Powered Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-purple-600" />
              <span>AI-Powered Career Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {careerSuggestions.map((suggestion, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className={`w-12 h-12 bg-${suggestion.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <div className={`text-${suggestion.color}-600`}>
                        {suggestion.icon}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">{suggestion.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-green-600">{suggestion.match} Match</span>
                      </div>
                      <p className="text-sm text-gray-600">{suggestion.reason}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {suggestion.requirements.map((req, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {req}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        View Details <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Skill Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>Recommended Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillRecommendations.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium text-gray-900">{skill.skill}</h4>
                      <p className="text-sm text-gray-600">Time to learn: {skill.timeToLearn}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <span className={`text-xs px-2 py-1 rounded ${
                        skill.priority === 'High' 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {skill.priority} Priority
                      </span>
                      <p className="text-sm text-gray-600">Demand: {skill.demand}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>Market Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Tech Industry Growth</h4>
                  <p className="text-sm text-blue-700">
                    The tech industry is expected to grow by 15% in the next 5 years, with high demand for AI and cloud specialists.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Remote Work Trends</h4>
                  <p className="text-sm text-green-700">
                    70% of tech companies now offer fully remote positions, increasing opportunities for global talent.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Salary Trends</h4>
                  <p className="text-sm text-purple-700">
                    Average software engineer salaries have increased by 12% this year, with AI specialists leading the growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-orange-600" />
              <span>Your Next Steps</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-2">Update Your Skills</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Add cloud computing and ML skills to your profile to match top recommendations.
                </p>
                <Button variant="outline" size="sm">Update Profile</Button>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-2">Explore Roadmaps</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Check out detailed learning paths for your suggested career options.
                </p>
                <Button variant="outline" size="sm">View Roadmaps</Button>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-2">Get AI Guidance</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Chat with our AI assistant for personalized career advice and guidance.
                </p>
                <Button variant="outline" size="sm">Start Chat</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
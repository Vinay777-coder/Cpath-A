'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/auth-context';
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
}

const skillsOptions = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'Angular',
  'Vue.js', 'SQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Azure', 'Docker', 'Kubernetes',
  'Git', 'HTML/CSS', 'Machine Learning', 'Data Analysis', 'UI/UX Design', 'Mobile Development',
  'DevOps', 'Cybersecurity', 'Blockchain', 'AI/ML', 'Cloud Computing', 'Microservices',
  'Project Management', 'Agile', 'Scrum', 'Leadership', 'Communication', 'Problem Solving'
];

const interestsOptions = [
  'Web Development', 'Mobile Apps', 'Data Science', 'Machine Learning', 'AI',
  'Cybersecurity', 'Cloud Computing', 'DevOps', 'UI/UX Design', 'Game Development',
  'Blockchain', 'IoT', 'Robotics', 'Virtual Reality', 'Augmented Reality'
];

const careerGoalsOptions = [
  'Technical Leadership', 'Senior Developer', 'Product Management', 'Startup Founder',
  'CTO', 'Data Scientist', 'ML Engineer', 'Security Specialist', 'Solution Architect',
  'Freelancer', 'Consultant', 'Team Lead', 'Research & Development'
];

const industryOptions = [
  'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Gaming', 'Education',
  'Media & Entertainment', 'Government', 'Non-profit', 'Automotive', 'Energy',
  'Real Estate', 'Travel & Hospitality', 'Retail', 'Manufacturing'
];

export default function CareerSuggestionsPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<CareerSuggestion[]>([]);
  const [showResults, setShowResults] = useState(false);

  const [profile, setProfile] = useState<UserProfile>({
    education: '',
    currentRole: '',
    experience: '',
    skills: [],
    interests: [],
    careerGoals: [],
    preferredWorkStyle: '',
    salaryExpectation: '',
    location: '',
    industryPreference: []
  });

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Sign In Required</CardTitle>
            <CardDescription>Please sign in to access career suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/sign-in">
              <Button className="w-full">Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSkillChange = (skill: string, checked: boolean) => {
    setProfile(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setProfile(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleCareerGoalChange = (goal: string, checked: boolean) => {
    setProfile(prev => ({
      ...prev,
      careerGoals: checked 
        ? [...prev.careerGoals, goal]
        : prev.careerGoals.filter(g => g !== goal)
    }));
  };

  const handleIndustryChange = (industry: string, checked: boolean) => {
    setProfile(prev => ({
      ...prev,
      industryPreference: checked 
        ? [...prev.industryPreference, industry]
        : prev.industryPreference.filter(i => i !== industry)
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/career-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      const data = await response.json();
      if (data.success) {
        setSuggestions(data.suggestions);
        setShowResults(true);
      } else {
        console.error('Failed to get suggestions:', data.error);
      }
    } catch (error) {
      console.error('Error getting suggestions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    {
      id: 1,
      title: "Basic Information",
      icon: <Brain className="w-6 h-6" />,
      description: "Tell us about your background"
    },
    {
      id: 2,
      title: "Skills & Interests",
      icon: <Target className="w-6 h-6" />,
      description: "What are you good at and passionate about?"
    },
    {
      id: 3,
      title: "Career Goals",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Where do you want to go?"
    },
    {
      id: 4,
      title: "Preferences",
      icon: <Award className="w-5 h-5 text-purple-600" />,
      description: "Work style and expectations"
    }
  ];

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                🎯 Your Personalized Career Suggestions
              </h1>
              <p className="text-xl text-gray-600">
                Generated by JARVIS based on your profile
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((suggestion) => (
                <Card key={suggestion.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={
                        suggestion.difficulty === 'Easy' ? 'default' :
                        suggestion.difficulty === 'Medium' ? 'secondary' : 'destructive'
                      }>
                        {suggestion.difficulty}
                      </Badge>
                      <Badge variant={
                        suggestion.growthPotential === 'High' ? 'default' :
                        suggestion.growthPotential === 'Medium' ? 'secondary' : 'outline'
                      }>
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {suggestion.growthPotential} Growth
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{suggestion.title}</CardTitle>
                    <CardDescription>{suggestion.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">💰 Salary Range</h4>
                        <p className="text-green-600 font-medium">{suggestion.averageSalary}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">🛠️ Required Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {suggestion.requiredSkills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {suggestion.requiredSkills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{suggestion.requiredSkills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">⏱️ Transition Time</h4>
                        <p className="text-sm text-gray-600">{suggestion.timeToTransition}</p>
                      </div>

                      <div className="pt-4 space-y-2">
                        <Button className="w-full" size="sm">
                          View Details <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                        <Link href="/chat">
                          <Button variant="outline" className="w-full" size="sm">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Ask JARVIS
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowResults(false)}
                variant="outline"
              >
                Create New Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🎯 Career Suggestions
            </h1>
            <p className="text-xl text-gray-600">
              Get personalized career guidance from JARVIS
            </p>
          </div>

          {/* Progress */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">
                  Step {currentStep} of {steps.length}
                </span>
              </div>
              <Progress value={progress} className="mb-4" />
              <div className="grid grid-cols-4 gap-4">
                {steps.map((step) => (
                  <div 
                    key={step.id}
                    className={`text-center p-3 rounded-lg transition-colors ${
                      currentStep >= step.id 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'bg-gray-50 text-gray-500'
                    }`}
                  >
                    <div className="flex justify-center mb-2">{step.icon}</div>
                    <h3 className="font-semibold text-sm">{step.title}</h3>
                    <p className="text-xs mt-1">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Form Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-600" />
                {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="education">Education Level</Label>
                    <Select value={profile.education} onValueChange={(value: string) => setProfile(prev => ({...prev, education: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="associate">Associate Degree</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="bootcamp">Bootcamp</SelectItem>
                        <SelectItem value="self-taught">Self-taught</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="currentRole">Current Role</Label>
                    <Input
                      id="currentRole"
                      value={profile.currentRole}
                      onChange={(e) => setProfile(prev => ({...prev, currentRole: e.target.value}))}
                      placeholder="e.g., Software Developer, Student, Career Changer"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select value={profile.experience} onValueChange={(value: string) => setProfile(prev => ({...prev, experience: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                        <SelectItem value="expert">Expert Level (10+ years)</SelectItem>
                        <SelectItem value="student">Student/No Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold">Technical Skills</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                      {skillsOptions.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox
                            id={skill}
                            checked={profile.skills.includes(skill)}
                            onCheckedChange={(checked: boolean) => handleSkillChange(skill, checked)}
                          />
                          <Label htmlFor={skill} className="text-sm font-normal">{skill}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold">Areas of Interest</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                      {interestsOptions.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={profile.interests.includes(interest)}
                            onCheckedChange={(checked: boolean) => handleInterestChange(interest, checked)}
                          />
                          <Label htmlFor={interest} className="text-sm font-normal">{interest}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-semibold">Career Goals</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      {careerGoalsOptions.map((goal) => (
                        <div key={goal} className="flex items-center space-x-2">
                          <Checkbox
                            id={goal}
                            checked={profile.careerGoals.includes(goal)}
                            onCheckedChange={(checked: boolean) => handleCareerGoalChange(goal, checked)}
                          />
                          <Label htmlFor={goal} className="text-sm font-normal">{goal}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold">Industry Preferences</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                      {industryOptions.map((industry) => (
                        <div key={industry} className="flex items-center space-x-2">
                          <Checkbox
                            id={industry}
                            checked={profile.industryPreference.includes(industry)}
                            onCheckedChange={(checked: boolean) => handleIndustryChange(industry, checked)}
                          />
                          <Label htmlFor={industry} className="text-sm font-normal">{industry}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="workStyle">Preferred Work Style</Label>
                    <Select value={profile.preferredWorkStyle} onValueChange={(value: string) => setProfile(prev => ({...prev, preferredWorkStyle: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your work style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="salary">Salary Expectation</Label>
                    <Select value={profile.salaryExpectation} onValueChange={(value: string) => setProfile(prev => ({...prev, salaryExpectation: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select salary range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">$30,000 - $50,000</SelectItem>
                        <SelectItem value="mid">$50,000 - $80,000</SelectItem>
                        <SelectItem value="senior">$80,000 - $120,000</SelectItem>
                        <SelectItem value="expert">$120,000+</SelectItem>
                        <SelectItem value="not-sure">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile(prev => ({...prev, location: e.target.value}))}
                      placeholder="e.g., San Francisco, Remote, Flexible"
                    />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        Get Suggestions
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Powered by JARVIS AI • Get personalized career guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
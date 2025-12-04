'use client';

import { useState } from 'react';
// Temporarily commented out for testing
// import { useAuth } from '@clerk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Brain, Target, MessageCircle, TrendingUp, Clock, ArrowRight, Loader2, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';

// Simplified interface for basic form
interface CareerSuggestionInput {
  skills: string[];
  interests: string[];
  educationLevel: string;
  careerGoal: string;
}

// Career suggestion response interface
interface CareerSuggestion {
  id: string;
  title: string;
  description: string;
  growthPotential: 'Low' | 'Medium' | 'High';
  learningTime: string;
  roadmapId: string;
  requiredSkills: string[];
  transitionTime: string;
}

// Pre-defined skill and interest options
const skillOptions = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 
  'HTML/CSS', 'Git', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Angular',
  'Vue.js', 'Machine Learning', 'Data Analysis', 'UI/UX Design', 'DevOps',
  'Cybersecurity', 'Mobile Development', 'Blockchain', 'AI/ML', 'C++', 'Go'
];

const interestOptions = [
  'Web Development', 'Mobile Development', 'Data Science', 'Machine Learning',
  'AI Development', 'Cybersecurity', 'Cloud Computing', 'DevOps', 'UI/UX Design',
  'Game Development', 'Blockchain', 'Backend Development', 'Frontend Development',
  'Full Stack Development', 'Database Management', 'System Architecture'
];

const educationLevels = [
  'High School', 'Some College', "Bachelor's Degree", "Master's Degree", 
  'PhD', 'Coding Bootcamp', 'Self-taught', 'Professional Certification'
];

export default function CareerSuggestionsPage() {
  // Temporarily commented out for testing
  // const { isLoaded, isSignedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<CareerSuggestion[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Form state
  const [formData, setFormData] = useState<CareerSuggestionInput>({
    skills: [],
    interests: [],
    educationLevel: '',
    careerGoal: ''
  });

  // Handle skill selection
  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  // Handle interest selection  
  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  // Submit form and get AI suggestions
  const handleSubmit = async () => {
    if (!formData.skills.length || !formData.interests.length || !formData.educationLevel || !formData.careerGoal.trim()) {
      alert('Please fill out all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/career-suggestions-basic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSuggestions(data.suggestions);
        setShowResults(true);
      } else {
        console.error('Failed to get suggestions:', data.error);
        alert('Failed to get career suggestions. Please try again.');
      }
    } catch (error) {
      console.error('Error getting suggestions:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({ skills: [], interests: [], educationLevel: '', careerGoal: '' });
    setSuggestions([]);
    setShowResults(false);
  };

  // Growth potential colors
  const getGrowthBadgeColor = (growth: string) => {
    switch (growth) {
      case 'High': return 'bg-green-100 text-green-800 border-green-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  // Temporarily commented out authentication for testing
  // if (!isLoaded || !isSignedIn) {
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
  //       <Card className="w-full max-w-md">
  //         <CardHeader className="text-center">
  //           <CardTitle>Sign In Required</CardTitle>
  //         </CardHeader>
  //         <CardContent>
  //           <Link href="/login">
  //             <Button className="w-full">Sign In</Button>
  //           </Link>
  //         </CardContent>
  //       </Card>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-full">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Career Suggestions</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your skills and interests, and let JARVIS suggest the perfect career path with ready-to-start roadmaps
            </p>
          </div>

          {!showResults ? (
            /* Input Form */
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  Tell Us About Yourself
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Skills Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    What skills do you have? (Select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {skillOptions.map(skill => (
                      <Button
                        key={skill}
                        variant={formData.skills.includes(skill) ? "default" : "outline"}
                        size="sm"
                        className={`text-xs h-8 ${formData.skills.includes(skill) ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Selected: {formData.skills.length} skills
                  </p>
                </div>

                {/* Interests Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    What interests you? (Select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {interestOptions.map(interest => (
                      <Button
                        key={interest}
                        variant={formData.interests.includes(interest) ? "default" : "outline"}
                        size="sm"
                        className={`text-xs h-8 ${formData.interests.includes(interest) ? 'bg-green-600 hover:bg-green-700' : ''}`}
                        onClick={() => toggleInterest(interest)}
                      >
                        {interest}
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Selected: {formData.interests.length} interests
                  </p>
                </div>

                {/* Education Level */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Education Level
                  </Label>
                  <Select value={formData.educationLevel} onValueChange={(value: string) => 
                    setFormData(prev => ({ ...prev, educationLevel: value }))
                  }>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      {educationLevels.map(level => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Career Goal */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Career Goal
                  </Label>
                  <Input
                    placeholder="e.g., Become a Senior Full Stack Developer, Lead a tech team, Start my own company..."
                    value={formData.careerGoal}
                    onChange={(e) => setFormData(prev => ({ ...prev, careerGoal: e.target.value }))}
                    className="w-full"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={loading || !formData.skills.length || !formData.interests.length || !formData.educationLevel || !formData.careerGoal.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Getting AI Suggestions...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Get Career Suggestions
                    </>
                  )}
                </Button>

              </CardContent>
            </Card>
          ) : (
            /* Results Section */
            <div>
              {/* Results Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-between mb-4">
                  <Button onClick={resetForm} variant="outline" className="flex items-center gap-2">
                    ← New Search
                  </Button>
                  <div className="text-sm text-gray-500">
                    {suggestions.length} suggestions found
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  🎯 Your Personalized Career Suggestions
                </h2>
                <p className="text-gray-600">
                  Based on your skills: <strong>{formData.skills.join(', ')}</strong> and interests in <strong>{formData.interests.join(', ')}</strong>
                </p>
              </div>

              {/* Career Suggestion Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {suggestions.map((suggestion) => (
                  <Card key={suggestion.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getGrowthBadgeColor(suggestion.growthPotential)}>
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {suggestion.growthPotential} Growth
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {suggestion.learningTime}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {suggestion.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {suggestion.description}
                      </p>

                      {/* Required Skills */}
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Required Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {suggestion.requiredSkills.slice(0, 4).map(skill => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {suggestion.requiredSkills.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{suggestion.requiredSkills.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Transition Time */}
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm">
                          <span className="font-semibold text-blue-800">Transition Time:</span>{' '}
                          <span className="text-blue-700">{suggestion.transitionTime}</span>
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2 pt-2">
                        <Link href={`/roadmaps/${suggestion.roadmapId}`} className="w-full">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Explore Roadmap
                          </Button>
                        </Link>
                        <Link href={`/chat?career=${encodeURIComponent(suggestion.title)}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Ask JARVIS
                          </Button>
                        </Link>
                      </div>

                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="text-center mt-8">
                <div className="flex items-center justify-center gap-4">
                  <Button onClick={resetForm} variant="outline" size="lg">
                    Try Different Skills
                  </Button>
                  <Link href="/roadmaps">
                    <Button variant="outline" size="lg">
                      Browse All Roadmaps
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
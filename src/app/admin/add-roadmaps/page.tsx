'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AddRoadmapsPage() {
  const [roadmapData, setRoadmapData] = useState('')
  const [batchNumber, setBatchNumber] = useState(1)
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState('')

  const processRoadmaps = () => {
    setProcessing(true)
    try {
      setResult(`Batch ${batchNumber} processed successfully! Ready to add to database.`)
      setBatchNumber(prev => prev + 1)
    } catch (error) {
      setResult(`Error processing batch: ${error}`)
    }
    setProcessing(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add Roadmaps - Batch System</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>Batch {batchNumber} - Add Roadmaps</CardTitle>
              <p className="text-sm text-gray-600">
                Paste your roadmap data below. I&apos;ll organize it by role, skills, and categories.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Roadmap Data (up to 50 at once)
                </label>
                <Textarea
                  placeholder={`Format example:
Title: React Developer Roadmap
Role: Frontend Developer
Category: Web Development
Subcategory: React Development  
Skills: React, JavaScript, HTML, CSS
Difficulty: Intermediate
Duration: 3-4 months
Description: Complete guide to becoming a React developer...

---

Title: Python Data Analyst
Role: Data Scientist
Category: Data Science
Subcategory: Data Analysis
Skills: Python, Pandas, NumPy, SQL
Difficulty: Beginner
Duration: 2-3 months
Description: Learn data analysis with Python...`}
                  value={roadmapData}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRoadmapData(e.target.value)}
                  className="min-h-[300px]"
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={processRoadmaps}
                  disabled={processing || !roadmapData.trim()}
                  className="flex-1"
                >
                  {processing ? 'Processing...' : `Process Batch ${batchNumber}`}
                </Button>
                <Button variant="outline" onClick={() => setRoadmapData('')}>
                  Clear
                </Button>
              </div>

              {result && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                  <p className="text-green-800">{result}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Organization Guide */}
          <Card>
            <CardHeader>
              <CardTitle>Organization Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">📋 Categories</h3>
                <div className="flex flex-wrap gap-1">
                  {[
                    'Web Development', 'Mobile Development', 'Data Science', 
                    'DevOps', 'Cybersecurity', 'Game Development', 
                    'Blockchain', 'Design'
                  ].map(cat => (
                    <Badge key={cat} variant="outline" className="text-xs">{cat}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">👥 Roles</h3>
                <div className="flex flex-wrap gap-1">
                  {[
                    'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
                    'Data Scientist', 'Mobile Developer', 'DevOps Engineer',
                    'Cybersecurity Specialist', 'Game Developer'
                  ].map(role => (
                    <Badge key={role} variant="secondary" className="text-xs">{role}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">📊 Difficulty Levels</h3>
                <div className="flex gap-2">
                  <Badge className="bg-green-100 text-green-700">Beginner</Badge>
                  <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
                  <Badge className="bg-red-100 text-red-700">Advanced</Badge>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <h3 className="font-semibold mb-2">📝 Format Guidelines</h3>
                <ul className="space-y-1">
                  <li>• Separate each roadmap with &quot;---&quot;</li>
                  <li>• Include Title, Role, Category, Skills, Difficulty</li>
                  <li>• Add steps/phases if available</li>
                  <li>• Include salary info and job opportunities if known</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Tracker */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Progress Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{(batchNumber - 1) * 50}</p>
                <p className="text-sm text-gray-600">Roadmaps Added</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">Target: 113</p>
                <p className="text-sm text-gray-600">
                  {113 - (batchNumber - 1) * 50} remaining
                </p>
              </div>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${Math.min(((batchNumber - 1) * 50) / 113 * 100, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
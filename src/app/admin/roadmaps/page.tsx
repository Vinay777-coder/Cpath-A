'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Upload, Download, Eye } from 'lucide-react';

export default function AdminRoadmapsPage() {
  const [roadmapData, setRoadmapData] = useState('');
  const [batchNumber, setBatchNumber] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState('');
  const [roadmaps, setRoadmaps] = useState<any[]>([]);
  const [previewData, setPreviewData] = useState<any[]>([]);

  const sampleFormat = `Format your roadmap data like this (one per line):

ID | Title | Description | Category | Difficulty | Duration | Skills | Tags
frontend-dev | Frontend Development | Master HTML, CSS, JavaScript | Web Development | Beginner | 4-6 months | HTML,CSS,JavaScript,React | web,frontend,javascript
backend-dev | Backend Development | Build server-side applications | Web Development | Intermediate | 6-8 months | Node.js,Python,Database | backend,server,api
...

Or JSON format:
{
  "id": "frontend-dev",
  "title": "Frontend Development",
  "description": "Master HTML, CSS, JavaScript",
  "category": "Web Development",
  "difficulty": "Beginner",
  "duration": "4-6 months",
  "skills": ["HTML", "CSS", "JavaScript", "React"],
  "tags": ["web", "frontend", "javascript"]
}`;

  const parseRoadmapData = () => {
    setProcessing(true);
    try {
      let parsedRoadmaps: any[] = [];
      
      if (roadmapData.trim().startsWith('{') || roadmapData.trim().startsWith('[')) {
        // JSON format
        parsedRoadmaps = JSON.parse(roadmapData);
        if (!Array.isArray(parsedRoadmaps)) {
          parsedRoadmaps = [parsedRoadmaps];
        }
      } else {
        // Pipe-separated format
        const lines = roadmapData.split('\n').filter(line => line.trim() && !line.startsWith('ID |'));
        
        parsedRoadmaps = lines.map((line, index) => {
          const parts = line.split('|').map(part => part.trim());
          if (parts.length >= 7) {
            return {
              id: parts[0] || `roadmap-${batchNumber}-${index + 1}`,
              title: parts[1] || `Roadmap ${index + 1}`,
              description: parts[2] || 'Description pending',
              category: parts[3] || 'Other',
              difficulty: parts[4] || 'Beginner',
              duration: parts[5] || '3-6 months',
              skills: parts[6] ? parts[6].split(',').map(s => s.trim()) : [],
              tags: parts[7] ? parts[7].split(',').map(t => t.trim()) : [],
              steps: [
                {
                  id: 1,
                  title: 'Getting Started',
                  description: 'Introduction and fundamentals',
                  duration: '1-2 weeks',
                  topics: parts[6] ? parts[6].split(',').map(s => s.trim()).slice(0, 3) : ['Basics'],
                  completed: false
                }
              ],
              featured: false,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            };
          }
          return null;
        }).filter(Boolean);
      }
      
      setPreviewData(parsedRoadmaps);
      setResult(`Successfully parsed ${parsedRoadmaps.length} roadmaps for batch ${batchNumber}`);
    } catch (error) {
      setResult(`Error parsing data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    setProcessing(false);
  };

  const generateCode = () => {
    if (previewData.length === 0) return;
    
    const codeOutput = `// Batch ${batchNumber} - ${previewData.length} roadmaps
export const batch${batchNumber}Roadmaps: Roadmap[] = ${JSON.stringify(previewData, null, 2)};

// Add this to your roadmaps-data.ts file:
// roadmapsDatabase.push(...batch${batchNumber}Roadmaps);`;
    
    navigator.clipboard.writeText(codeOutput);
    setResult(`Code for batch ${batchNumber} copied to clipboard! Paste it into roadmaps-data.ts`);
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(previewData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `roadmaps-batch-${batchNumber}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Roadmaps Admin Panel</h1>
        <p className="text-gray-600">Add your 113 roadmaps in batches of 50</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Batch {batchNumber} Input
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Batch Number:</label>
              <Input
                type="number"
                value={batchNumber}
                onChange={(e) => setBatchNumber(parseInt(e.target.value) || 1)}
                min="1"
                max="3"
                className="w-24"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Roadmap Data:</label>
              <Textarea
                value={roadmapData}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRoadmapData(e.target.value)}
                placeholder={sampleFormat}
                className="min-h-[300px] font-mono text-sm"
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={parseRoadmapData} disabled={processing}>
                <Eye className="h-4 w-4 mr-2" />
                {processing ? 'Processing...' : 'Preview Data'}
              </Button>
              <Button variant="outline" onClick={() => setRoadmapData('')}>
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Preview ({previewData.length} roadmaps)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
                {result}
              </div>
            )}
            
            {previewData.length > 0 && (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button onClick={generateCode} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Generate Code
                  </Button>
                  <Button onClick={downloadJSON} size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download JSON
                  </Button>
                </div>
                
                <div className="max-h-[400px] overflow-y-auto space-y-2">
                  {previewData.slice(0, 5).map((roadmap, index) => (
                    <div key={index} className="p-3 border rounded-lg bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{roadmap.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{roadmap.description}</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline">{roadmap.category}</Badge>
                            <Badge variant="secondary">{roadmap.difficulty}</Badge>
                            <Badge variant="outline">{roadmap.duration}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {previewData.length > 5 && (
                    <div className="text-center text-gray-500 text-sm">
                      ... and {previewData.length - 5} more roadmaps
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
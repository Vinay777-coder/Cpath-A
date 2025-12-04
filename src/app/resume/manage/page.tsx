'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { getUserResumes, deleteResume, getResumeFileUrl } from '@/lib/resume'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Navbar } from '@/components/ui/navbar'
import { LoadingSpinner } from '@/components/ui/loading'
import { 
  ArrowLeft, 
  Download, 
  Trash2, 
  FileText, 
  Calendar, 
  TrendingUp,
  Eye,
  BarChart3,
  Upload
} from 'lucide-react'
import Link from 'next/link'

interface ResumeRecord {
  id: string
  clerk_user_id: string
  file_name: string
  file_path: string
  file_size: number
  file_type: string
  analysis_score: number
  analysis_feedback: any
  created_at: string
  updated_at: string
}

export default function ResumeManagePage() {
  const [user, setUser] = useState<any>(null)
  const [resumes, setResumes] = useState<ResumeRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function loadData() {
      const { user: currentUser, error: userError } = await getCurrentUser()
      
      if (userError || !currentUser) {
        router.push('/sign-in')
        return
      }

      setUser(currentUser)

      const { data: resumesData, error: resumesError } = await getUserResumes(currentUser.id)
      if (!resumesError && resumesData) {
        setResumes(resumesData)
      }

      setLoading(false)
    }

    loadData()
  }, [router])

  const handleDownload = async (resume: ResumeRecord) => {
    setDownloading(resume.id)
    try {
      const { data, error } = await getResumeFileUrl(resume.file_path)
      
      if (error || !data) {
        alert('Failed to generate download link')
        return
      }

      // Create download link
      const link = document.createElement('a')
      link.href = data
      link.download = resume.file_name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download error:', error)
      alert('Failed to download file')
    } finally {
      setDownloading(null)
    }
  }

  const handleDelete = async (resume: ResumeRecord) => {
    if (!confirm(`Are you sure you want to delete "${resume.file_name}"? This action cannot be undone.`)) {
      return
    }

    setDeleting(resume.id)
    try {
      const { error } = await deleteResume(resume.id, resume.file_path)
      
      if (error) {
        alert('Failed to delete resume')
        return
      }

      // Remove from local state
      setResumes(resumes.filter(r => r.id !== resume.id))
    } catch (error) {
      console.error('Delete error:', error)
      alert('Failed to delete resume')
    } finally {
      setDeleting(null)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100'
    if (score >= 60) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar user={user} />
        <div className="flex items-center justify-center py-20">
          <LoadingSpinner size="lg" text="Loading your resumes..." />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar user={user} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <Link href="/resume">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Analysis
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Resume Management</h1>
            <p className="text-gray-600 mt-2">Manage your uploaded resumes and view analysis history</p>
          </div>
          
          <Link href="/resume">
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload New Resume
            </Button>
          </Link>
        </div>

        {/* Statistics */}
        {resumes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{resumes.length}</p>
                    <p className="text-sm text-gray-600">Total Resumes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {Math.round(resumes.reduce((acc, r) => acc + r.analysis_score, 0) / resumes.length)}%
                    </p>
                    <p className="text-sm text-gray-600">Average Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {Math.max(...resumes.map(r => r.analysis_score))}%
                    </p>
                    <p className="text-sm text-gray-600">Best Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Resume List */}
        {resumes.length > 0 ? (
          <div className="space-y-4">
            {resumes.map((resume) => (
              <Card key={resume.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    {/* Resume Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <div>
                          <h3 className="font-medium text-gray-900">{resume.file_name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{formatFileSize(resume.file_size)}</span>
                            <span>•</span>
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {formatDate(resume.created_at)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Analysis Summary */}
                      {resume.analysis_feedback && (
                        <div className="ml-9">
                          <div className="flex items-center space-x-4 mb-2">
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(resume.analysis_score)}`}>
                              <span className={getScoreColor(resume.analysis_score)}>
                                {resume.analysis_score}% ATS Score
                              </span>
                            </div>
                          </div>
                          
                          <Progress value={resume.analysis_score} className="w-64 mb-2" />
                          
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {resume.analysis_feedback.feedback}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(resume)}
                        disabled={downloading === resume.id}
                      >
                        {downloading === resume.id ? (
                          <LoadingSpinner size="sm" />
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </>
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(resume)}
                        disabled={deleting === resume.id}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        {deleting === resume.id ? (
                          <LoadingSpinner size="sm" />
                        ) : (
                          <>
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes uploaded yet</h3>
              <p className="text-gray-600 mb-6">
                Upload your first resume to get started with AI-powered analysis and tracking.
              </p>
              <Link href="/resume">
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Your First Resume
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
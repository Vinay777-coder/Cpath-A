'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '../../../components/ui/badge'
import { useUser } from '@clerk/nextjs'
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  X, 
  Flag, 
  Brain, 
  Trophy, 
  Star, 
  Download, 
  Share2,
  ArrowLeft,
  Timer,
  CheckCircle,
  AlertCircle,
  Code,
  Play,
  Pause,
  RotateCcw,
  Award,
  Target,
  TrendingUp
} from 'lucide-react'

// Sample quiz data - in real app this would come from API
const quizData = {
  'react-quiz-1': {
    id: 'react-quiz-1',
    title: 'React Fundamentals Quiz',
    description: 'Test your knowledge of React basics including components, props, and state',
    category: 'Frontend Development',
    difficulty: 'Beginner',
    duration: 15, // minutes
    totalQuestions: 20,
    passingScore: 70,
    points: 100,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is React?',
        code: null,
        options: [
          'A JavaScript library for building user interfaces',
          'A programming language',
          'A database management system',
          'A web server'
        ],
        correctAnswer: 0,
        explanation: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly for web applications.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Which of the following is the correct way to create a React component?',
        code: `function MyComponent() {
  return <div>Hello World</div>;
}`,
        options: [
          'function MyComponent() { return <div>Hello World</div>; }',
          'const MyComponent = () => <div>Hello World</div>;',
          'class MyComponent extends React.Component { render() { return <div>Hello World</div>; } }',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'React components can be created using function declarations, arrow functions, or class components.'
      },
      {
        id: 3,
        type: 'true-false',
        question: 'JSX is mandatory to use React.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'JSX is not mandatory for React, but it is highly recommended as it makes writing React components much easier and more readable.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'What hook is used to manage state in functional components?',
        options: [
          'useEffect',
          'useState',
          'useContext',
          'useReducer'
        ],
        correctAnswer: 1,
        explanation: 'useState is the React hook used to add state to functional components.'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'How do you pass data from parent to child component?',
        code: `// Parent Component
function Parent() {
  const data = "Hello";
  return <Child message={data} />;
}

// Child Component  
function Child(props) {
  return <div>{props.message}</div>;
}`,
        options: [
          'Through props',
          'Through state',
          'Through context',
          'Through refs'
        ],
        correctAnswer: 0,
        explanation: 'Props (properties) are used to pass data from parent components to child components in React.'
      }
    ]
  }
}

interface QuizState {
  currentQuestion: number
  answers: { [questionId: number]: number }
  timeRemaining: number
  isStarted: boolean
  isCompleted: boolean
  showResults: boolean
  score: number
  flaggedQuestions: Set<number>
}

export default function QuizDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const { user } = useUser()
  
  const quiz = quizData[id as keyof typeof quizData]
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    timeRemaining: quiz?.duration ? quiz.duration * 60 : 0,
    isStarted: false,
    isCompleted: false,
    showResults: false,
    score: 0,
    flaggedQuestions: new Set()
  })

  const [isPaused, setIsPaused] = useState(false)

  // Timer effect
  useEffect(() => {
    if (!quizState.isStarted || quizState.isCompleted || isPaused) return

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (prev.timeRemaining <= 1) {
          return { ...prev, timeRemaining: 0, isCompleted: true, showResults: true }
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizState.isStarted, quizState.isCompleted, isPaused])

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Quiz Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The quiz you're looking for doesn't exist or has been moved.
            </p>
            <Button onClick={() => router.push('/challenges')}>
              Back to Challenges
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const startQuiz = () => {
    setQuizState(prev => ({ ...prev, isStarted: true }))
  }

  const selectAnswer = (questionId: number, answerIndex: number) => {
    setQuizState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answerIndex }
    }))
  }

  const nextQuestion = () => {
    if (quizState.currentQuestion < quiz.questions.length - 1) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }))
    }
  }

  const previousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion - 1 }))
    }
  }

  const toggleFlag = (questionId: number) => {
    setQuizState(prev => {
      const newFlagged = new Set(prev.flaggedQuestions)
      if (newFlagged.has(questionId)) {
        newFlagged.delete(questionId)
      } else {
        newFlagged.add(questionId)
      }
      return { ...prev, flaggedQuestions: newFlagged }
    })
  }

  const submitQuiz = () => {
    let correct = 0
    quiz.questions.forEach(question => {
      if (quizState.answers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    
    const score = Math.round((correct / quiz.questions.length) * 100)
    
    setQuizState(prev => ({
      ...prev,
      isCompleted: true,
      showResults: true,
      score
    }))

    // Save to localStorage (in real app, save to backend)
    const result = {
      quizId: quiz.id,
      score,
      completed: true,
      completedAt: new Date(),
      answers: quizState.answers
    }
    
    const savedResults = JSON.parse(localStorage.getItem('quiz-results') || '[]')
    savedResults.push(result)
    localStorage.setItem('quiz-results', JSON.stringify(savedResults))
  }

  const restartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: {},
      timeRemaining: quiz.duration * 60,
      isStarted: false,
      isCompleted: false,
      showResults: false,
      score: 0,
      flaggedQuestions: new Set()
    })
    setIsPaused(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const currentQuestion = quiz.questions[quizState.currentQuestion]
  const progress = ((quizState.currentQuestion + 1) / quiz.questions.length) * 100
  const answeredQuestions = Object.keys(quizState.answers).length
  
  // Pre-quiz view
  if (!quizState.isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:text-white/80"
            onClick={() => router.push('/challenges')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Challenges
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Brain className="w-6 h-6 text-blue-400" />
                    <Badge variant="outline" className="text-white border-white/30">
                      {quiz.category}
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      {quiz.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white">{quiz.title}</CardTitle>
                  <p className="text-white/80">{quiz.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <Timer className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                      <div className="text-lg font-bold text-white">{quiz.duration}</div>
                      <div className="text-sm text-white/70">Minutes</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <Brain className="w-6 h-6 mx-auto mb-2 text-green-400" />
                      <div className="text-lg font-bold text-white">{quiz.totalQuestions}</div>
                      <div className="text-sm text-white/70">Questions</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <Target className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                      <div className="text-lg font-bold text-white">{quiz.passingScore}%</div>
                      <div className="text-sm text-white/70">To Pass</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <Trophy className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                      <div className="text-lg font-bold text-white">{quiz.points}</div>
                      <div className="text-sm text-white/70">Points</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold text-white">Instructions:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        Answer all questions within the time limit
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        You can flag questions for review
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        Navigate between questions using the buttons
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 text-green-400" />
                        You need {quiz.passingScore}% to pass and earn points
                      </li>
                    </ul>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={startQuiz}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Quick Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Brain className="w-4 h-4 mt-0.5 text-blue-400" />
                    <span className="text-sm text-white/80">
                      Read each question carefully before selecting an answer
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5 text-yellow-400" />
                    <span className="text-sm text-white/80">
                      Keep an eye on the timer and manage your time
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Flag className="w-4 h-4 mt-0.5 text-red-400" />
                    <span className="text-sm text-white/80">
                      Flag difficult questions and return to them later
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 mt-0.5 text-purple-400" />
                    <span className="text-sm text-white/80">
                      Review your answers before submitting
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Results view
  if (quizState.showResults) {
    const passed = quizState.score >= quiz.passingScore
    const correctAnswers = quiz.questions.filter(q => quizState.answers[q.id] === q.correctAnswer).length

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="text-center py-12">
              {passed ? (
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
              ) : (
                <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-400" />
              )}
              
              <h2 className="text-3xl font-bold text-white mb-2">
                {passed ? 'Congratulations!' : 'Keep Learning!'}
              </h2>
              
              <p className="text-white/80 mb-6">
                {passed 
                  ? `You passed the ${quiz.title} with flying colors!`
                  : `You need ${quiz.passingScore}% to pass. Review the material and try again.`
                }
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-white">{quizState.score}%</div>
                  <div className="text-sm text-white/70">Your Score</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-white">{correctAnswers}/{quiz.questions.length}</div>
                  <div className="text-sm text-white/70">Correct</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-white">{formatTime((quiz.duration * 60) - quizState.timeRemaining)}</div>
                  <div className="text-sm text-white/70">Time Used</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-white">{passed ? quiz.points : 0}</div>
                  <div className="text-sm text-white/70">Points Earned</div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={restartQuiz}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button variant="outline" onClick={() => router.push('/challenges')}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Challenges
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Review Your Answers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {quiz.questions.map((question, index) => {
                  const userAnswer = quizState.answers[question.id]
                  const isCorrect = userAnswer === question.correctAnswer
                  
                  return (
                    <div key={question.id} className="border-b border-white/10 pb-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                          isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}>
                          {isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2">
                            Question {index + 1}: {question.question}
                          </h4>
                          
                          {question.code && (
                            <pre className="bg-gray-800 p-3 rounded-lg text-sm text-gray-300 mb-3 overflow-x-auto">
                              <code>{question.code}</code>
                            </pre>
                          )}

                          <div className="space-y-2 mb-3">
                            {question.options.map((option, optionIndex) => (
                              <div 
                                key={optionIndex}
                                className={`p-2 rounded border ${
                                  optionIndex === question.correctAnswer 
                                    ? 'border-green-500 bg-green-500/20 text-green-300'
                                    : optionIndex === userAnswer && userAnswer !== question.correctAnswer
                                    ? 'border-red-500 bg-red-500/20 text-red-300'
                                    : 'border-white/20 text-white/80'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-mono">
                                    {String.fromCharCode(65 + optionIndex)}.
                                  </span>
                                  <span>{option}</span>
                                  {optionIndex === question.correctAnswer && (
                                    <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                                  )}
                                  {optionIndex === userAnswer && userAnswer !== question.correctAnswer && (
                                    <X className="w-4 h-4 text-red-400 ml-auto" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="bg-blue-500/20 border border-blue-500/30 p-3 rounded-lg">
                            <h5 className="font-semibold text-blue-300 mb-1">Explanation:</h5>
                            <p className="text-blue-200 text-sm">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Quiz taking view
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-semibold text-white">{quiz.title}</h1>
              <Badge variant="outline" className="text-white border-white/30">
                Question {quizState.currentQuestion + 1} of {quiz.questions.length}
              </Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                quizState.timeRemaining < 300 ? 'bg-red-500/20 text-red-300' : 'bg-white/10 text-white'
              }`}>
                <Timer className="w-4 h-4" />
                <span className="font-mono">{formatTime(quizState.timeRemaining)}</span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPaused(!isPaused)}
                className="text-white border-white/30"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </Button>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-white/70 mb-1">
              <span>Progress</span>
              <span>{answeredQuestions} of {quiz.questions.length} answered</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Question Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-white">
                    {currentQuestion.question}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFlag(currentQuestion.id)}
                    className={`${quizState.flaggedQuestions.has(currentQuestion.id) 
                      ? 'text-red-400' : 'text-white/60'
                    }`}
                  >
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {currentQuestion.code && (
                  <div className="mb-6">
                    <pre className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                      <code>{currentQuestion.code}</code>
                    </pre>
                  </div>
                )}

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => selectAnswer(currentQuestion.id, index)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        quizState.answers[currentQuestion.id] === index
                          ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                          : 'border-white/20 hover:border-white/40 text-white/80 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-sm font-mono">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={previousQuestion}
                disabled={quizState.currentQuestion === 0}
                className="text-white border-white/30"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="flex gap-2">
                {answeredQuestions === quiz.questions.length && (
                  <Button
                    onClick={submitQuiz}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Submit Quiz
                  </Button>
                )}
              </div>

              <Button
                variant="outline"
                onClick={nextQuestion}
                disabled={quizState.currentQuestion === quiz.questions.length - 1}
                className="text-white border-white/30"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 sticky top-32">
              <CardHeader>
                <CardTitle className="text-white text-lg">Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {quiz.questions.map((question, index) => (
                    <button
                      key={question.id}
                      onClick={() => setQuizState(prev => ({ ...prev, currentQuestion: index }))}
                      className={`w-8 h-8 rounded-lg text-sm font-semibold border transition-all relative ${
                        index === quizState.currentQuestion
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : quizState.answers[question.id] !== undefined
                          ? 'border-green-500 bg-green-500/20 text-green-300'
                          : 'border-white/30 text-white/70 hover:border-white/50'
                      }`}
                    >
                      {index + 1}
                      {quizState.flaggedQuestions.has(question.id) && (
                        <Flag className="w-2 h-2 absolute -top-1 -right-1 text-red-400" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-white/70">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <div className="w-3 h-3 border border-white/30 rounded"></div>
                    <span>Not answered</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Flag className="w-3 h-3 text-red-400" />
                    <span>Flagged</span>
                  </div>
                </div>

                {quizState.flaggedQuestions.size > 0 && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <div className="text-sm text-red-300">
                      {quizState.flaggedQuestions.size} question(s) flagged for review
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
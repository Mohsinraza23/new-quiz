"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizComponentProps {
  questions: Question[]
  quizType: string
}

export default function QuizComponent({ questions, quizType }: QuizComponentProps) {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([])
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(15).fill(-1))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random())
    setCurrentQuestions(shuffled.slice(0, 15))
  }, [questions])

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = optionIndex
    setUserAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < 14) {
      setFadeIn(false)
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setFadeIn(true)
      }, 300)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setFadeIn(false)
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1)
        setFadeIn(true)
      }, 300)
    }
  }

  const handleSubmit = () => {
    const score = userAnswers.reduce((acc, answer, index) => {
      return answer === currentQuestions[index].correctAnswer ? acc + 1 : acc
    }, 0)
    const percentage = (score / 15) * 100
    router.push(`/results?score=${percentage}&type=${quizType}`)
  }

  if (currentQuestions.length === 0) return null

  const currentQuestion = currentQuestions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 animate-pulse">{quizType} Next.js Quiz</h2>
        <div className={`mb-6 transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
          <p className="text-lg text-white mb-4">Question {currentQuestionIndex + 1} of 15</p>
          <p className="text-xl text-white font-semibold mb-4">{currentQuestion.question}</p>
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-102 ${
                  userAnswers[currentQuestionIndex] === index
                    ? "bg-purple-500 text-white"
                    : "bg-white text-purple-600 hover:bg-purple-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Previous
          </button>
          {currentQuestionIndex === 14 ? (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

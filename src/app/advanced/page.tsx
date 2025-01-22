import QuizComponent from "../components/QuizComponent"
import { advancedQuestions } from "../data/advancedQuestions"

export default function AdvancedQuiz() {
  return <QuizComponent questions={advancedQuestions} quizType="Advanced" />
}
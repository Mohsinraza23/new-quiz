import QuizComponent from "../components/QuizComponent"
import { basicQuestions } from "../data/basicQuestions"

export default function BasicQuiz() {
  return <QuizComponent questions={basicQuestions} quizType="Basic" />
}


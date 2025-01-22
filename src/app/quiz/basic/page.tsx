import QuizComponent from "../../components/QuizComponent"; // Adjusted import path
import { basicQuestions } from "../../data/basicQuestions"; // Adjusted import path

export default function BasicQuiz() {
  return <QuizComponent questions={basicQuestions} quizType="Basic" />;
}

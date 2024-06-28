// src/components/Quiz.tsx
import { useState } from 'react';

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      alert(`Quiz terminé ! Votre score est de ${score + (isCorrect ? 1 : 0)}/${questions.length}`);
      setStep(0);
      setScore(0);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz sur l&apos;écologie</h1>
      <h2>Étape {step + 1}</h2>
      <p className="question">{questions[step].question}</p>
      {questions[step].answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer.isCorrect)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
};

export default Quiz;

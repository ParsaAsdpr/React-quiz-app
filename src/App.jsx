import "./App.css";
import { useState } from "react";
import QuestionOption from "./components/QuestionOption";

import questions from "./constants/questions.json";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  let requiredScore = 8;
  const [passed, setPassed] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (isCorrect === true) setScore(score + 1);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    if (score >= requiredScore) setPassed(true);
  };

  return (
    <div className="p-10">
      {showScore ? (
        <div className="max-w-7xl p-10 text-center mx-auto shadow-md rounded-lg overflow-hidden border border-stone-300">
          <h3 className="text-stone-700 text-2xl font-bold">
            You Answered {score} out of {questions.length}
          </h3>
          <h2 className={`text-3xl pt-4 text-center font-bold`}>
            You Have{" "}
            <span className={`${passed ? "text-green-500" : "text-red-500"}`}>
              {passed ? "Passed" : "Failed"}
            </span>{" "}
            The Quiz
          </h2>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto shadow-md rounded-lg overflow-hidden border border-stone-300">
          <header className="bg-[#3373eb]">
            <h1 className="text-xl font-bold text-white py-5 text-center">
              React Quiz Application
            </h1>
          </header>

          <div className="py-5 px-4 text-base text-stone-800 bg-[#eee]">
            <p>{questions[currentQuestion].question}</p>
          </div>

          <div>
            {questions[currentQuestion].answers.map((answer, index) => (
              <QuestionOption
                answer={answer.text}
                key={index}
                num={index}
                onClick={() => handleAnswerClick(answer.isCorrect)}
              />
            ))}
          </div>
          <div className="bg-[#eee] px-10 py-5 text-center text-stone-800">
            <p>Queston {`${currentQuestion + 1}/${questions.length}`}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

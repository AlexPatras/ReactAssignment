import React, { useState } from "react";
import Answer from "./Answer";
import parse from "html-react-parser";

const Question = ({ question }) => {
  // Track which answer is selected
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Function to handle when an answer is selected
  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId);
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="max-w-[1184px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">{question.title}</h1>
        <div className="text-lg mb-6">{parse(question.description)}</div>
        <h2 className="text-xl text-violet-500 mb-4">Pick one option</h2>
        <div className="space-y-3">
          {question.answers.map((answer) => (
            <Answer
              key={answer.id}
              answer={answer}
              isSelected={selectedAnswer === answer.id}
              onSelect={() => handleAnswerSelect(answer.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;

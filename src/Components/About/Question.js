import React from "react";

const Question = ({questionAnswer}) => {
  const { id, question, answer } = questionAnswer;
  return (
    <div className="question-answer">
      <h3 className="question">
        <span className="question__id">{id}</span> {question}
      </h3>
      <p className="answer">{answer}</p>
    </div>
  );
};

export default Question;

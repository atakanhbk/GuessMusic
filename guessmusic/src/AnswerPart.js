import React from "react";

export default function AnswerPart({ musics }) {
  const checkAnswer = (e) => {
    e.preventDefault();
    const buttonText = e.target.textContent;
    const answerText = musics.correctAnswer;

    if (buttonText === answerText) {
      console.log("Correct Answer !!!");
    } else {
      console.log("Wrong Answer");
    }
  };
  return (
    <div>
      <form id="answer-part">
        <button className="first answer btn" onClick={checkAnswer}>
          {musics.firstAnswer}
        </button>
        <button className="second answer btn" onClick={checkAnswer}>
          {musics.secondAnswer}
        </button>
        <button className="third answer btn" onClick={checkAnswer}>
          {musics.thirdAnswer}
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";

export default function AnswerPart({ musics, nextLevel }) {
  const [showNextLevelButton, setShowNextLevelButton] = useState(false);
  const checkAnswer = (e) => {
    e.preventDefault();
    const buttonText = e.target.textContent;
    const answerText = musics.correctAnswer;

    if (buttonText === answerText) {
      setShowNextLevelButton(true);
    } else {
      console.log("Wrong Answer");
    }
  };

  const nextLevelFunction = () => {
    nextLevel();
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

      {showNextLevelButton && (
        <button className="next-level-button" onClick={nextLevelFunction}>
          Next Level
        </button>
      )}
    </div>
  );
}

import React, { useState } from "react";

export default function AnswerPart({ musics, nextLevel, levelOver }) {
  const [showNextLevelButton, setShowNextLevelButton] = useState(false);
  const [closeButton, setCloseButton] = useState(false);

  const checkAnswer = (e) => {
    const answerButtons = document.getElementsByClassName("answer");

    e.preventDefault();

    const answerText = musics.correctAnswer;

    for (let button of answerButtons) {
      if (button.textContent === answerText) {
        button.style.backgroundColor = "green";
        button.style.color = "white";
      } else {
        button.style.backgroundColor = "red";
        button.style.color = "white";
      }
      button.disabled = true; // Disabling all buttons after an answer is selected
    }
    e.target.style.color = "white";
    console.log(e);
    setShowNextLevelButton(true);
    setCloseButton(true);
    levelOver();
  };

  const nextLevelFunction = () => {
    nextLevel();
  };

  return (
    <div>

      
      
      {showNextLevelButton && (
        <button className="btn btn-success" onClick={nextLevelFunction}>
          Next Level
        </button>
      )}
      <form id="answer-part">
        <button
          className="answer btn btn-outline-primary"
          onClick={checkAnswer}
          disabled={closeButton}
        >
          {musics.firstAnswer}
        </button>
        <button
          className="answer btn btn-outline-primary"
          onClick={checkAnswer}
          disabled={closeButton}
        >
          {musics.secondAnswer}
        </button>
        <button
          className="answer btn btn-outline-primary"
          onClick={checkAnswer}
          disabled={closeButton}
        >
          {musics.thirdAnswer}
        </button>
      </form>
    </div>
  );
}

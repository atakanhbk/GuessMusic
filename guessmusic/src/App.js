import { useState } from "react";
import "./App.css";
import VideoPlayer from "./VideoPlayer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const musicsClass = [
    {
      startSecond: 1,
      url: "https://www.youtube.com/watch?v=MwpMEbgC7DA",
      answerPart: {
        firstAnswer: "Another Love",
        secondAnswer: "Kill This Love",
        thirdAnswer: "Summarize Life",
        correctAnswer: "Another Love",
      },
    },
    {
      startSecond: 5,
      url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
      answerPart: {
        firstAnswer: "Beat it",
        secondAnswer: "Billie Jean",
        thirdAnswer: "Weekend",
        correctAnswer: "Billie Jean",
      },
    },

    {
      startSecond: 6,
      url: "https://www.youtube.com/watch?v=-tJYN-eG1zk&ab_channel=QueenOfficial",
      answerPart: {
        firstAnswer: "Eye Of The Tiger",
        secondAnswer: "Hit the Road Jack",
        thirdAnswer: "We Will Rock You",
        correctAnswer: "We Will Rock You",
      },
    },
    // Add more music objects as needed
  ];

  const increaseCurrentMusicIndex = () => {
    setCurrentMusicIndex(currentMusicIndex + 1);
  };

  return (
    <div id="app">
    
      <VideoPlayer
        currentMusicIndex={currentMusicIndex}
        musics={musicsClass}
        increaseCurrentMusicIndex={increaseCurrentMusicIndex}
      />
    </div>
  );
}

export default App;

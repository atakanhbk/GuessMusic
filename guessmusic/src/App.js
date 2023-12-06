import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import VideoPlayer from "./VideoPlayer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Video from "./videos/travis_scott.mp4";

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
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        style={{
          outline: "none",
          border: "none",
          position: "absolute",
          left: "0",
          top: "0",
          objectFit: 'cover',
          opacity: 0.5, // Saydamlık seviyesi (0 ile 1 arasında)
        }}
      >
        <source src={Video} type="video/mp4" />
        {/* You can add multiple source elements for different formats */}
        Your browser does not support the video tag.
      </video>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game"
            element={
              <VideoPlayer
                currentMusicIndex={currentMusicIndex}
                musics={musicsClass}
                increaseCurrentMusicIndex={increaseCurrentMusicIndex}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

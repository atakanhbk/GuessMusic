import "./App.css";
import VideoPlayer from "./VideoPlayer";


function App() {

  const currentMusicIndex = 0; // Example current music index
  const musicsClass = [
    {
      startSecond: 1,
      url: "https://www.youtube.com/watch?v=MwpMEbgC7DA",
      answerPart:{
        firstAnswer: "Another Love",
        secondAnswer: "Kill This Love",
        thirdAnswer: "Summarize Life",
        correctAnswer : "Another Love"
      }
    
    },
    {
      startSecond: 5,
      url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
    },
    // Add more music objects as needed
  ];

  
  return (
    <div>
      <VideoPlayer playerIndex={currentMusicIndex} musics={musicsClass} />

    </div>
  );
}

export default App;

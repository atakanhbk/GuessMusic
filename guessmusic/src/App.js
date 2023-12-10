import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import VideoPlayer from "./VideoPlayer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const musicsClass = {
    pop: [
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
        startSecond: 3,
        url: "https://www.youtube.com/watch?v=V1Pl8CzNzCw&ab_channel=BillieEilishVEVO",
        answerPart: {
          firstAnswer: "Lovely",
          secondAnswer: "Bad Guy",
          thirdAnswer: "MockingBird",
          correctAnswer: "Lovely",
        },
      },

      {
        startSecond: 6,
        url: "https://www.youtube.com/watch?v=JGwWNGJdvx8&list=PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl&ab_channel=EdSheeran",
        answerPart: {
          firstAnswer: "Shape Of You",
          secondAnswer: "Sugar",
          thirdAnswer: "Dark Horse",
          correctAnswer: "Shape Of You", // Corrected the spelling here
        },
      },

      {
        startSecond: 3,
        url: "https://www.youtube.com/watch?v=OPf0YbXqDm0&list=PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl&index=2&ab_channel=MarkRonsonVEVO",
        answerPart: {
          firstAnswer: "Girls Like You",
          secondAnswer: "Uptown Funk",
          thirdAnswer: "Shape Of You",
          correctAnswer: "Girls Like You", // Corrected the spelling here
        },
      },

      {
        startSecond: 6,
        url: "https://www.youtube.com/watch?v=0KSOMA3QBU0&list=PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl&index=8&ab_channel=KatyPerryVEVO",
        answerPart: {
          firstAnswer: "Girls Like You",
          secondAnswer: "Uptown Funk",
          thirdAnswer: "Shape Of You",
          correctAnswer: "Girls Like You", // Corrected the spelling here
        },
      },
      {
        startSecond: 0.5,
        url: "https://www.youtube.com/watch?v=RBumgq5yVrA&list=PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl&index=12&ab_channel=Passenger",
        answerPart: {
          firstAnswer: "Perfect",
          secondAnswer: "Let Her Go",
          thirdAnswer: "Shape Of You",
          correctAnswer: "Let Her Go", // Corrected the spelling here0
        },
      },
    ],

    rock: [
      {
        startSecond: 1,
        url: "https://www.youtube.com/watch?v=btPJPFnesV4&list=PLyORnIW1xT6wFALM5dZlkFhOULbToFok3&index=39&ab_channel=SurvivorVEVO",
        answerPart: {
          firstAnswer: "Eye Of The Tiger",
          secondAnswer: "Hit the Road Jack",
          thirdAnswer: "We Will Rock You",
          correctAnswer: "Eye Of The Tiger",
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
      {
        startSecond: 5.5,
        url: "https://www.youtube.com/watch?v=pAgnJDJN4VA&list=RDQMiLmoiojqB1I&start_radio=1&ab_channel=acdcVEVO",
        answerPart: {
          firstAnswer: "Eye Of The Tiger",
          secondAnswer: "Back In Black",
          thirdAnswer: "We Will Rock You",
          correctAnswer: "Back In Black",
        },
      },
      {
        startSecond: 0,
        url: "https://www.youtube.com/watch?v=l482T0yNkeo&list=RDQMiLmoiojqB1I&index=2&ab_channel=acdcVEVO",
        answerPart: {
          firstAnswer: "Eye Of The Tiger",
          secondAnswer: "Back In Black",
          thirdAnswer: "HighWay To Hell",
          correctAnswer: "Back In Black",
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
        startSecond: 1,
        url: "https://www.youtube.com/watch?v=1w7OgIMMRc4&list=RDQMiLmoiojqB1I&index=7&ab_channel=GunsNRosesVEVO",
        answerPart: {
          firstAnswer: "Sweet Child O' Mine",
          secondAnswer: "Billie Jean",
          thirdAnswer: "Weekend",
          correctAnswer: "Sweet Child O' Mine",
        },
      },
      {
        startSecond: 13,
        url: "https://www.youtube.com/watch?v=kXYiU_JCYtU&list=PLyORnIW1xT6wFALM5dZlkFhOULbToFok3&ab_channel=LinkinPark",
        answerPart: {
          firstAnswer: "Numb",
          secondAnswer: "Billie Jean",
          thirdAnswer: "Weekend",
          correctAnswer: "Numb",
        },
      },
  
    ],

    rap: [
      {
        startSecond: 1,
        url: "https://www.youtube.com/watch?v=uelHwf8o7_U&list=PLn4GvABOzCQuZrM1YBvzlYVCkQpZkhXLS&index=4&ab_channel=EminemVEVO",
        answerPart: {
          firstAnswer: "Not Afraid",
          secondAnswer: "Love The Way You Lie",
          thirdAnswer: "Rap God",
          correctAnswer: "Love The Way You Lie",
        },
      },
      {
        startSecond: 0.5,
        url: "https://www.youtube.com/watch?v=j5-yKhDd64s&list=PLn4GvABOzCQuZrM1YBvzlYVCkQpZkhXLS&index=8&ab_channel=EminemVEVO",
        answerPart: {
          firstAnswer: "Not Afraid",
          secondAnswer: "Love The Way You Lie",
          thirdAnswer: "Rap God",
          correctAnswer: "Not Afraid",
        },
      },
      {
        startSecond: 0,
        url: "https://www.youtube.com/watch?v=5qm8PH4xAss&list=PLn4GvABOzCQuZrM1YBvzlYVCkQpZkhXLS&index=9&ab_channel=50CentVEVO",
        answerPart: {
          firstAnswer: "Not Afraid",
          secondAnswer: "In Da Club",
          thirdAnswer: "Rap God",
          correctAnswer: "In Da Club",
        },
      },
      {
        startSecond: 3,
        url: "https://www.youtube.com/watch?v=_Yhyp-_hX2s&list=PLn4GvABOzCQuZrM1YBvzlYVCkQpZkhXLS&index=30&ab_channel=msvogue23",
        answerPart: {
          firstAnswer: "Not Afraid",
          secondAnswer: "In Da Club",
          thirdAnswer: "Lose Yourself",
          correctAnswer: "Lose Yourself",
        },
      },
    ],

    anime: [
      {
        startSecond: 1,
        url: "https://www.youtube.com/watch?v=2upuBiEiXDk&ab_channel=CrunchyrollCollection",
        answerPart: {
          firstAnswer: "Blue Bird",
          secondAnswer: "In Da Club",
          thirdAnswer: "Lose Yourself",
          correctAnswer: "Blue Bird",
        },
      },

      {
        startSecond: 0.7,
        url: "https://www.youtube.com/watch?v=LKP-vZvjbh8&ab_channel=CrunchyrollDubs",
        answerPart: {
          firstAnswer: "Blue Bird",
          secondAnswer: "Shinzou wo Sasageyo!",
          thirdAnswer: "Lose Yourself",
          correctAnswer: "Shinzou wo Sasageyo!",
        },
      },

      {
        startSecond: 61,
        url: "https://www.youtube.com/watch?v=WPLdqNKHGbQ&ab_channel=AniClipsCollection",
        answerPart: {
          firstAnswer: "Blue Bird",
          secondAnswer: "Attack on Titan",
          thirdAnswer: "Demon Slayer",
          correctAnswer: "Demon Slayer",
        },
      },
      {
        startSecond: 0.5,
        url: "https://www.youtube.com/watch?v=j0TUZdBmr6Q&ab_channel=WhoamIbutwhoareyou",
        answerPart: {
          firstAnswer: "Blue Bird",
          secondAnswer: "Attack on Titan",
          thirdAnswer: "Death Note - L",
          correctAnswer: "Death Note - L",
        },
      },
      {
        startSecond: 2,
        url: "https://www.youtube.com/watch?v=fShlVhCfHig&ab_channel=AnimeGuy",
        answerPart: {
          firstAnswer: "Blue Bird",
          secondAnswer: "Neon Genesis Evangelion",
          thirdAnswer: "Death Note - L",
          correctAnswer: "Neon Genesis Evangelion",
        },
      },
    ],
  };

  const increaseCurrentMusicIndex = () => {
    setCurrentMusicIndex(currentMusicIndex + 1);
  };

  console.log(musicsClass.pop);
  return (
    <div id="app">
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

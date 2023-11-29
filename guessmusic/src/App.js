import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import InputPart from "./InputPart";

function App() {
  const [timeValue, setTimeValue] = useState("0.5");

  const currentMusicIndex = 0; // Example current music index
  const musicsClass = [
    {
      startSecond: 1,
      url: "https://www.youtube.com/watch?v=MwpMEbgC7DA",
    },
    {
      startSecond: 5,
      url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
    },
    // Add more music objects as needed
  ];

  const showTimeValue = (element) => {
    setTimeValue(element);
  };

  useEffect(() => {
    console.log(timeValue);
  }, [timeValue]);

  return (
    <div>
      <VideoPlayer playerIndex={currentMusicIndex} musics={musicsClass} timeValue = {timeValue} />
      <InputPart timeValue={showTimeValue} />
    </div>
  );
}

export default App;

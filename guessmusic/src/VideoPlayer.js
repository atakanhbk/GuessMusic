import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import AnswerPart from "./AnswerPart";

function VideoPlayer({ playerIndex, musics }) {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isRestartButtonVisible, setIsRestartButtonVisible] = useState(false);
  const [timeValue, setTimeValue] = useState("0.5");

  const playerRef = useRef(null);

  const startVideo = () => {
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(musics[playerIndex].startSecond);
      playerRef.current.getInternalPlayer().playVideo(); // Plays the video
    }
    setIsButtonVisible(false);
    setIsRestartButtonVisible(false);

    setTimeout(() => {
      pauseVideo();
    }, Number(timeValue) * 1000);
  };

  const pauseVideo = () => {
    playerRef.current.getInternalPlayer().pauseVideo();
    setIsRestartButtonVisible(true);
  };
  const getTimeValue = (event) => {
    setTimeValue(event.target.value);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={musics[playerIndex].url}
        controls={true}
      />
      {isButtonVisible && (
        <form id="input-form">
          <select className="time-value" onChange={getTimeValue}>
            <option value="0.5">0.5</option>
            <option value="1.0">1.0</option>
            <option value="1.5">1.5</option>
            <option value="2.0">2.0</option>
          </select>
          <br />
          <br />

          <button className="start-button" onClick={startVideo}>
            Start Video
          </button>
        </form>
      )}

      {isRestartButtonVisible && (
        <button className="restart-button" onClick={startVideo}>
          Restart Button
        </button>
      )}

      <AnswerPart musics={musics[playerIndex].answerPart} />
    </div>
  );
}

export default VideoPlayer;

import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import AnswerPart from "./AnswerPart";

function VideoPlayer({ currentMusicIndex, musics, increaseCurrentMusicIndex }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isRestartButtonVisible, setIsRestartButtonVisible] = useState(false);
  const [showAnswerPart, setShowAnswerPart] = useState(false);
  const [timeValue, setTimeValue] = useState("0.5");

  const playerRef = useRef(null);

  const startVideo = () => {
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(musics[currentMusicIndex].startSecond);
      playerRef.current.getInternalPlayer().playVideo(); // Plays the video
    }
    setIsButtonVisible(false);
    setIsRestartButtonVisible(false);
    setShowAnswerPart(false);

    setTimeout(() => {
      pauseVideo();
    }, Number(timeValue) * 1000);

    console.log(Number(timeValue) * 1000);
  };

  const pauseVideo = () => {
    playerRef.current.getInternalPlayer().pauseVideo();
    setIsRestartButtonVisible(true);
    setShowAnswerPart(true);
  };
  const getTimeValue = (event) => {
    setTimeValue(event.target.value);
  };

  const nextLevel = () => {
    increaseCurrentMusicIndex();
    setIsButtonVisible(true);
    setIsRestartButtonVisible(false);
    setShowAnswerPart(false);
  };

  const playJustOnce = () => {
    const reachPlayerRef = setInterval(() => {

      if (playerRef && playerRef.current && playerRef.current.getInternalPlayer().G) {
        playerRef.current.seekTo(musics[currentMusicIndex].startSecond);
        playerRef.current.getInternalPlayer().playVideo(); // Plays the video
        playerRef.current.getInternalPlayer().pauseVideo();
        clearInterval(reachPlayerRef);
        setIsButtonVisible(true);
      }
    }, 200);
  };

  useEffect(() => {
    playJustOnce();
  }, []);

  return (
    <div id="video-player">
      <ReactPlayer
        width={330}
        height={330}
        ref={playerRef}
        url={musics[currentMusicIndex].url}
        controls={true}
      />
      <div className="all-input-part">
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

        {showAnswerPart && (
          <AnswerPart
            musics={musics[currentMusicIndex].answerPart}
            nextLevel={nextLevel}
          />
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;

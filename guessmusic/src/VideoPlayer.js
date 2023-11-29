import React, { useRef } from "react";
import ReactPlayer from "react-player/youtube";

function VideoPlayer({ playerIndex, musics, timeValue }) {
  const playerRef = useRef(null);

  const startVideo = () => {
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(musics[playerIndex].startSecond);
      playerRef.current.getInternalPlayer().playVideo(); // Plays the video
    }

    setTimeout(() => {
      pauseVideo();
    }, Number(timeValue) * 1000);
  };

  const pauseVideo = () => {
    playerRef.current.getInternalPlayer().pauseVideo();
  };
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={musics[playerIndex].url}
        controls={true}
      />
      <button onClick={startVideo}>Start Video</button>
    </div>
  );
}

export default VideoPlayer;

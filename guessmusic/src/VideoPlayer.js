import React, { useRef } from 'react';
import ReactPlayer from 'react-player/youtube'; // Import ReactPlayer from your package

function VideoPlayer() {
  const playerRef = useRef(null);

  const musicsClass = {
    music1: {
        url:"https://www.youtube.com/watch?v=MwpMEbgC7DA",
    },
  };
  

  const startVideo = () => {
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(0,5); 
      playerRef.current.getInternalPlayer().playVideo(); // Plays the video
    }
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={musicsClass.music1.url}
        controls={true}
       
      />
      <button onClick={startVideo}>Start Video</button>
    </div>
  );
}

export default VideoPlayer;

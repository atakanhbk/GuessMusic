import React from "react";

function BackgroundVideo({ videoRef, bgVideo }) {

    
  return (
    <div>
      <div className="bg-video">
        <video
          width="100%"
          height="100%"
          ref={videoRef}
          loop
          muted
          playsInline
          controls={false}
          src={bgVideo}
          style={{
            outline: "none",
            border: "none",
            position: "absolute",
            left: "0",
            top: "0",
            objectFit: "cover",
            opacity: 0.5,
            display: "none",
          }}
        ></video>
      </div>
    </div>
  );
}

export default BackgroundVideo;

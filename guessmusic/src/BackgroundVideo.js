import React from "react";

function BackgroundVideo({ videoRef, Video }) {

    console.log(Video);
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
        >
          <source src={Video} type="video/mp4" />
          {/* You can add multiple source elements for different formats */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BackgroundVideo;

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GameProgress() {
  const [boxTransform, setBoxTransform] = useState(-300);
  const [seconds, setSeconds] = useState(0);
  const progressBar = useRef(null);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setBoxTransform((prevValue) => prevValue + 5);
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    if (seconds === 60) {
      clearTimeout(intervalId);
    }
    
    if(seconds === 50){
      
        hurryUpMode();
    }
  }, [boxTransform]);

  const hurryUpMode = () => {
    console.log("Worked");
    progressBar.current.style.backgroundColor = "red";
    setInterval(() => {
        if(progressBar.current.style.backgroundColor === "red"){
            progressBar.current.style.backgroundColor = "white";
        }
        else{
            progressBar.current.style.backgroundColor = "red";
        }
    }, 1000);
  }

  return (
    <div>
      <div className="game-progress">
        <motion.div
          className="game-progress-bar"
          animate={{ x: boxTransform }}
          initial={{ x: boxTransform }}
          transition={{ duration: 2 }}
          ref={progressBar}
        ></motion.div>
      </div>

      <h1 style={{ color: "white" }}>{seconds}</h1>
    </div>
  );
}

// CategoryCard.js

import React, { useRef } from "react";
import CupIcon from "./image/icons/cup-icon.png";


const CategoryCard = ({
  playVideo,
  stopVideo,
  imageSrc,
  categoryTitle,
  winnerNick,
}) => {
  const clickedCard = () => {

    localStorage.setItem("categoryName",categoryTitle);
    window.location.href = "game";
    console.log("on Click");
  };



  const startX = useRef(null);
  const startY = useRef(null);

  const handleMouseDown = (event) => {
    startX.current = event.clientX;
    startY.current = event.clientY;
  };


  const handleMouseUp = (event) => {
    if (
      startX.current !== null &&
      startY.current !== null &&
      (Math.abs(startX.current - event.clientX) > 5 || Math.abs(startY.current - event.clientY) > 5)
    ) {
      console.log('Dragged!');
    } else {
      clickedCard();
    }

    startX.current = null;
    startY.current = null;
  };
  return (
  
      <div
        className="category_card"
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="main">
          <img className="tokenImage" src={imageSrc} alt={categoryTitle} />
          <h2>{categoryTitle}</h2>
          <hr />
          <div className="prize">
            <p>
              <img src={CupIcon} alt="Cup Icon" /> <ins>{winnerNick}</ins>
            </p>
          </div>
        </div>
        
      </div>

  );
};

export default CategoryCard;

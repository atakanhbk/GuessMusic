// CategoryCard.js

import React from "react";
import CupIcon from "./image/icons/cup-icon.png";

const CategoryCard = ({ playVideo, stopVideo, imageSrc, categoryTitle, winnerNick }) => {
  return (
    <div className="category_card" onMouseEnter={playVideo} onMouseLeave={stopVideo}>
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

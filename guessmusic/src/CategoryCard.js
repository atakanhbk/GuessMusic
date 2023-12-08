// CategoryCard.js

import React from "react";

const CategoryCard = ({ playVideo, stopVideo, imageSrc, categoryTitle, cupIcon, winnerNick }) => {
  return (
    <div className="category_card" onMouseEnter={playVideo} onMouseLeave={stopVideo}>
      <div className="main">
        <img className="tokenImage" src={imageSrc} alt={categoryTitle} />
        <h2>{categoryTitle}</h2>
        <hr />
        <div className="prize">
          <p>
            <img src={cupIcon} alt="Cup Icon" /> <ins>{winnerNick}</ins>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

import React, { useEffect } from "react";
import AnimeMusicIcon from "./image/icons/anime-music-icon.png";
import CupIcon from "./image/icons/cup-icon.png";
import Logo from "./image/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRef, useState } from "react";

export default function Home() {
  const carouselRef = useRef(null);
  const arrowBtnLeftRef = useRef(null);
  const arrowBtnRightRef = useRef(null);
  const chooseCategoryTitle = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [firstCardWidth, setFirstCardWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".category_card").offsetWidth;
      setFirstCardWidth(cardWidth);
    }

    completeSentence(chooseCategoryTitle);
  }, []);

  const completeSentence = (title) => {
    let titleArray = title.current.textContent.split("");
    let wordLength = titleArray.length;
    let currentIndex = 0;

    const writeLetters = setInterval(() => {
      title.current.textContent += "" + titleArray[currentIndex];
      currentIndex++;

      if (wordLength === currentIndex) {
        clearInterval(writeLetters);
      }
    }, 200);

    title.current.textContent = "";
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.classList.add("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust multiplier as needed for scrolling speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    carouselRef.current.classList.remove("dragging");
  };

  const clickedArrowButton = (e) => {
    carouselRef.current.scrollLeft +=
      e.target.id === "left" ? -firstCardWidth : firstCardWidth;
  };

  return (
    <div id="home">
      <header>
        <div className="trigger_logo">
          <div className="logo">
            <a className="creative_link" href="/">
              <img width={100} src={Logo} />
            </a>
          </div>
        </div>
        <div className="nav">
          <ul className="nav-ul">
            <li>
              <a className="creative_link" href="/home">
                Home
              </a>
            </li>
            <li>
              <a className="creative_link" href="#">
                Leader Board
              </a>
            </li>
            <li>
              <a className="creative_link" href="/game">
                Play
              </a>
            </li>
            <li>
              <a className="creative_link" href="/game">
                Contact
              </a>
            </li>
            <li>
              <a className="creative_link" href="/game">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="account">
          <a href="#">
            <div className="account-button">Log in / Log out</div>
          </a>
        </div>
      </header>

      <div className="container">
        <div className="wrapper">
          <h1 onLoad={completeSentence} ref={chooseCategoryTitle}>
            Choose A Category
          </h1>
          <i
            id="left"
            className="fa-solid fa-angle-left"
            ref={arrowBtnLeftRef}
            onClick={clickedArrowButton}
          ></i>
          <ul
            className="carousel"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            ref={carouselRef}
          >
            <li>
              <div className="category_card">
                <div className="main">
                  <img
                    className="tokenImage"
                    src="https://w0.peakpx.com/wallpaper/561/144/HD-wallpaper-travis-scott-travisscott.jpg"
                  />
                  <h2>Rap / Hiphop</h2>
                  <hr />
                  <div className="prize">
                    <p>
                      <img src={CupIcon} /> <ins>Probest</ins>
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="category_card">
                <div className="main">
                  <img
                    className="tokenImage"
                    src=" https://w0.peakpx.com/wallpaper/129/489/HD-wallpaper-billie-eilish-billie-eilish.jpg"
                  />
                  <h2>Pop</h2>
                  <hr />
                  <div className="prize">
                    <p>
                      <img src={CupIcon} /> <ins>BilliE261</ins>
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="category_card">
                <div className="main">
                  <img
                    className="tokenImage"
                    src="https://is.zobj.net/image-server/v1/images?r=vit8B9EVMclxvekpwkleiVatWPmOqJKRqLj-EETO0Zd3ZE1QhvL3jy-rtk5GdxnlkGicDeG9mFr58T09DN1fbtFtjcL3veSQJkn7DduOtwAi5bzToeS9Iw18DKA1V8YovzYDhDNI-cYPdDw5Cb5-XEavFX6gUgtgN1-FTsvkNXAj-wzMw32moOwcwn3CrLOlH_W69eZkznt1BgBKUqRh3G9sxWE6XQoDMxqiHw"
                  />
                  <h2>Rock</h2>
                  <hr />
                  <div className="prize">
                    <p>
                      <img src={CupIcon} /> <ins>RockRuckPuck</ins>
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="category_card">
                <div className="main">
                  <img
                    className="tokenImage"
                    src="https://vistapointe.net/images/jazz-1.jpg"
                  />
                  <h2>Jazz</h2>
                  <hr />
                  <div className="prize">
                    <p>
                      <img src={CupIcon} /> <ins>JustForMySelf</ins>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <i
            id="right"
            className="fa-solid fa-angle-right"
            ref={arrowBtnRightRef}
            onClick={clickedArrowButton}
          ></i>
        </div>
      </div>
    </div>
  );
}

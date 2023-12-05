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
  }, []);

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
        <h3 className="main_title fs-1 fw-bold">Choose A Category</h3>
        <div className="wrapper">
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
            <div>
              <div class="nft">
                <div class="main">
                  <img
                    class="tokenImage"
                    src="https://w0.peakpx.com/wallpaper/561/144/HD-wallpaper-travis-scott-travisscott.jpg"
                    alt="NFT"
                  />
                  <h2>Rap / Hiphop</h2>

                  <hr />
                  <div class="creator">
                    <p>
                      <img src={CupIcon} /> <ins>Probest</ins>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <li className="category_card">
              <div className="img">
                <img src={AnimeMusicIcon} draggable="false" />
                <h2>Anime</h2>
                <span>Sales Manager</span>
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

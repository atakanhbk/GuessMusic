import React, { useEffect } from "react";
import AnimeMusicIcon from "./image/icons/anime-music-icon.png";
import CupIcon from "./image/icons/cup-icon.png";
import Logo from "./image/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRef, useState } from "react";
import RapBgMusic from "./videos/travis_scott.mp4";
import PopBgMusic from "./videos/billie_eilish.mp4";
import RockBgMusic from "./videos/slash.mp4";


export default function Home() {
  console.log(PopBgMusic);
  const carouselRef = useRef(null);
  const arrowBtnLeftRef = useRef(null);
  const arrowBtnRightRef = useRef(null);
  const chooseCategoryTitle = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [timer, setTimer] = useState(null);
  const [bgVideo, setBgVideo] = useState("");
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
    let currentArray = [];
    let alphabetLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let currentAlphabetIndex = 0;
    let currentIndex = 0;

    const writeLetters = setInterval(() => {
      if (currentArray.length === 0) {
        currentArray.push(alphabetLetters[currentAlphabetIndex]);
      } else {
        if (titleArray[currentIndex] === " ") {
          currentArray[currentIndex] = " ";

          currentArray.push(" ");
          currentIndex++;
          currentAlphabetIndex = 0;
        } else {
          if (
            titleArray[currentIndex].toUpperCase() ===
            alphabetLetters[currentAlphabetIndex]
          ) {
            currentArray[currentIndex] =
              alphabetLetters[currentAlphabetIndex].toUpperCase();
            currentArray.push(
              alphabetLetters[currentAlphabetIndex].toUpperCase()
            );
            currentIndex++;
            currentAlphabetIndex = 0;
          } else {
            currentArray[currentIndex] =
              alphabetLetters[currentAlphabetIndex].toUpperCase();
            currentAlphabetIndex++;
          }
        }
      }

      if (currentArray.length > titleArray.length) {
        clearInterval(writeLetters);
        currentArray.pop();
      }
      title.current.textContent = currentArray.join("");
    }, 20);
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

  const videoRef = useRef(null);

  const playVideo = (e) => {
    const targetInnerHTML = e.currentTarget
      .querySelector("h2")
      .textContent.toUpperCase();

    //Burayi degiskenlere value veya id vererek düzeltebilirsin
    if (targetInnerHTML.includes("RAP")) {
      setBgVideo("/static/media/travis_scott.6d04ccc01423dc6aba70.mp4");
    } else if (targetInnerHTML.includes("POP")) {
      setBgVideo("/static/media/billie_eilish.30ff6fcfd68cb868a8aa.mp4");
    } else if (targetInnerHTML.includes("ROCK")) {
      setBgVideo("/static/media/slash.b85625fa126f0c148853.mp4");
    } else if (targetInnerHTML.includes("JAZZ")) {
      console.log("Jazz True");
    }

    if (videoRef.current) {
      const delay = 1000;
      const currentTimer = setTimeout(() => {
        videoRef.current.style.display = "block";
        videoRef.current.play();
        videoRef.current.currentTime = 60;
      }, delay);
      setTimer(currentTimer);
    }
  };
  const stopVideo = () => {
    if (videoRef.current) {
      if (timer) {
        videoRef.current.style.display = "none";
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
        clearTimeout(timer);
        setTimer(null);
      }
    }
  };

  return (
    <div id="home">
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
            CHOOSE A CATEGORY
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
              <div
                className="category_card"
                onMouseEnter={playVideo}
                onMouseLeave={stopVideo}
              >
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
              <div
                className="category_card"
                onMouseEnter={playVideo}
                onMouseLeave={stopVideo}
              >
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
              <div
                className="category_card"
                onMouseEnter={playVideo}
                onMouseLeave={stopVideo}
              >
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
              <div
                className="category_card"
                onMouseEnter={playVideo}
                onMouseLeave={stopVideo}
              >
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

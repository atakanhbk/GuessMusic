import React, { useEffect } from "react";
import AnimeMusicIcon from "./image/icons/anime-music-icon.png";
import Logo from "./image/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRef, useState } from "react";
import RapBgVideo from "./videos/travis_scott.mp4";
import PopBgVideo from "./videos/billie_eilish.mp4";
import RockBgVideo from "./videos/slash.mp4";
import AnimeBgVideo from "./videos/demon_slayer.mp4";
import BackgroundVideo from "./BackgroundVideo";
import CategoryCard from "./CategoryCard";

export default function Home() {
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
      setBgVideo("/static/media/travis_scott.31cdf6f5eb55eb5583af.mp4");
    } else if (targetInnerHTML.includes("POP")) {
      setBgVideo("/static/media/billie_eilish.30ff6fcfd68cb868a8aa.mp4");
    } else if (targetInnerHTML.includes("ROCK")) {
      setBgVideo("/static/media/slash.b85625fa126f0c148853.mp4");
    } else if (targetInnerHTML.includes("ANIME")) {
      setBgVideo("/static/media/demon_slayer.f3292e47fe96b537deaa.mp4");
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
      <BackgroundVideo videoRef={videoRef} bgVideo={bgVideo} />
      <header>
        <div className="trigger_logo">
          <div className="logo">
            <a className="creative_link" href="/">
              <img width={250} src={Logo} />
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
              <CategoryCard
                playVideo={playVideo}
                stopVideo={stopVideo}
                imageSrc={
                  "https://w0.peakpx.com/wallpaper/561/144/HD-wallpaper-travis-scott-travisscott.jpg"
                }
                categoryTitle={"Rap / Hiphop"}
                winnerNick={"JustForMySelf"}
              />
            </li>

            <li>
              <CategoryCard
                playVideo={playVideo}
                stopVideo={stopVideo}
                imageSrc={
                  "https://w0.peakpx.com/wallpaper/129/489/HD-wallpaper-billie-eilish-billie-eilish.jpg"
                }
                categoryTitle={"Pop"}
                winnerNick={"BilliE261"}
              />
            </li>

            <li>
              <CategoryCard
                playVideo={playVideo}
                stopVideo={stopVideo}
                imageSrc={
                  "https://is.zobj.net/image-server/v1/images?r=vit8B9EVMclxvekpwkleiVatWPmOqJKRqLj-EETO0Zd3ZE1QhvL3jy-rtk5GdxnlkGicDeG9mFr58T09DN1fbtFtjcL3veSQJkn7DduOtwAi5bzToeS9Iw18DKA1V8YovzYDhDNI-cYPdDw5Cb5-XEavFX6gUgtgN1-FTsvkNXAj-wzMw32moOwcwn3CrLOlH_W69eZkznt1BgBKUqRh3G9sxWE6XQoDMxqiHw"
                }
                categoryTitle={"Rock"}
                winnerNick={"RockRuckPuck"}
              />
            </li>

            <li>
              <CategoryCard
                playVideo={playVideo}
                stopVideo={stopVideo}
                imageSrc={
                  "https://play-lh.googleusercontent.com/EEZRsDvcSq11pwv5SVEyVlqUe5r8nP1r4OL6LM8co4hBX_F1nERK1gtZ-Q8o70MJ_d4"
                }
                categoryTitle={"Anime"}
                winnerNick={"ErenAck"}
              />
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

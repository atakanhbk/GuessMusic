import React from "react";

function Menu() {
  const button = document.getElementsByClassName("button-one")[0];
  const menu = document.getElementsByClassName("menu")[0];
  const menuContainer = document.getElementsByClassName("menu_container")[0];
  const line = document.querySelectorAll(".line");
  const lineTop = line[0];
  const lineMiddle = line[1];
  const lineBot = line[2];

  let menuOpen = false;

  const handleMenuIconClick = () => {
    if (!menuOpen) {
   
        console.log(menuContainer.style.zIndex);
        
      line.forEach((lineElement) => {
        lineElement.style.transition =
          "y 300ms ease-in, rotate 300ms ease-in 300ms, opacity 0ms 300ms";
        lineElement.style.transformOrigin = "center";
      });

      lineTop.style.y = "45";
      lineTop.style.rotate = "45deg";

      lineMiddle.style.opacity = "0";

      lineBot.style.y = "45";
      lineBot.style.rotate = "-45deg";

      menu.style.transform = "translateY(20%)";
      menu.style.opacity = "1";
      menuContainer.style.zIndex = "2";
      menuOpen = true;
    } else {
      line.forEach((lineElement) => {
        lineElement.style.transition =
          "y 300ms ease-in 300ms, rotate 300ms ease-in, opacity 0ms 300ms";
        lineElement.style.transformOrigin = "center";
      });

      lineTop.style.y = "25";
      lineTop.style.rotate = "0deg";

      lineMiddle.style.opacity = "1";

      lineBot.style.y = "65";
      lineBot.style.rotate = "0deg";

      menu.style.transform = "translateY(0%)";
      menu.style.opacity = "0";
      menu.style.zIndex = "2";
      menuContainer.style.zIndex = "1";
      menuOpen = false;
    }
  };

  return (
    <div className="menu_container">
      <button
        className="button-one"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleMenuIconClick}
      >
        <svg
          fill="var(--button-color)"
          className="hamburger"
          viewBox="0 0 100 100"
          width="50"
        >
          <rect
            className="line top"
            width="80"
            height="10"
            x="10"
            y="25"
            rx="5"
          ></rect>
          <rect
            className="line middle"
            width="80"
            height="10"
            x="10"
            y="45"
            rx="5"
          ></rect>
          <rect
            className="line bottom"
            width="80"
            height="10"
            x="10"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </button>

      <div className="menu">
        <ul className="nav-ul">
          <li>
            <a className="creative_link" href="/">
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
          <li>
            <div className="account_menu">
              <a href="#">
                <div className="account-button">Log in / Log out</div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;

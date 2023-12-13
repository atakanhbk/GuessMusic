import React from "react";
import Logo from "./image/logo.png";
import Menu from "./Menu";

export default function HomeHeader() {
  return (
    <div>
      <header>
        <div className="trigger_logo">
          <a className="logoIcon" href="/">
            <img width={250} src={Logo} />
          </a>
        </div>
        <div className="nav">
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
        <Menu />
        <div className="account">
          <a href="#">
            <div className="account-button">Log in / Log out</div>
          </a>
        </div>
      </header>
    </div>
  );
}

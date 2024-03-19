import React from "react";
import Logo from "./image/logo.png";
import Menu from "./Menu";

export default function HomeHeader() {
  return (
    <header>
      <div className="trigger_logo">
          <img src={Logo} />
      </div>
      <div className="nav">
        <nav>
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
        </nav>
      </div>
      <Menu />
      <div className="account">
        <a href="/account">
          <div className="account-button">Log in / Log out</div>
        </a>
      </div>
    </header>
  );
}

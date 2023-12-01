import React from "react";
import Logo from "./image/logo.png";

export default function Home() {
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
          </ul>
        </div>
        <div className="account">Log in / Sign in</div>
      </header>
      <div className="container">
        <h3 className="main_title fs-1 fw-bold">Choose A Category</h3>
        <div className="slider">
          <ul className="category_card_parent">
            <li className="category_card"><div>Image</div></li>
            <li className="category_card"><div>Image</div></li>
            <li className="category_card"><div>Image</div></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <div id="home">
      <header>
        <div className="logo">L</div>
        <div className="nav">
          <ul className="nav-ul">
            <li><a className="creative_link" href="#">Home</a></li>
            <li><a className="creative_link" href="#">Leader Board</a></li>
            <li><a className="creative_link" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="account">Log in / Sign in</div>
      </header>
      <div className="container"></div>
    </div>
  );
}

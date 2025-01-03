import React, { useEffect, useRef, useState } from "react";
import "./AccountPage.css";

export default function AccountPage() {
  let loginForm = document.querySelector(".my-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log("Email:", email.value);
    console.log("Password:", password.value);
    // process and send to API
  });
  return (
    <div id="video-player">
      <form class="my-form">
        <div class="login-welcome-row">
          <a href="#" title="Logo">
            <img src="assets/logo.svg" alt="Logo" class="logo" />
          </a>
          <h1>Welcome back &#x1F44F;</h1>
          <p>Please enter your details!</p>
        </div>
        <div class="input__wrapper">
          <input
            type="email"
            id="email"
            name="email"
            class="input__field"
            placeholder="Your Email"
            required
            autocomplete="off"
          />
          <label for="email" class="input__label">
            Email:
          </label>
          <svg
            class="input__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
          </svg>
        </div>
        <div class="input__wrapper">
          <input
            id="password"
            type="password"
            class="input__field"
            placeholder="Your Password"
            title="Minimum 6 characters at least 1 Alphabet and 1 Number"
      
            required
            autocomplete="off"
          />
          <label for="password" class="input__label">
            Password
          </label>
          <svg
            class="input__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
          </svg>
        </div>
        <button type="submit" class="my-form__button">
          Login
        </button>
        <div class="socials-row">
          <a href="#" title="Use Google">
            <img src="assets/google.png" alt="Google" />
            Log in with Google
          </a>
        </div>
        <div class="my-form__actions">
          <div class="my-form__row">
            <span>Don't have an account?</span>
            <a href="#" title="Create Account">
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

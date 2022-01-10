import logo from "../Frame.svg";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

// pages

import LoginPage from "../LoginPage/LoginPage.js";

import "./Hello.css";
export default class Hello extends Component {
  render() {
    return (
      <div>
        <div className="container-hello">
          <div className="text-area">
            <h1>Hello 👋</h1>
            <p>
              I hope everyone is safe and sound. I designed different type of
              lending pages,application. it can help others to develop more
              ideas from this. I keep it simple and minimal. It can also help
              you find different options in exploring and improving your skills.
            </p>
            <p>
              I am available for new projects. I hope you show me your support
              😄
            </p>
            <p>
              I wish you luck, <br></br>
              Drax ❤️
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="arrow-down"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
            {/* <Link to="/login-page">Buy me a Coffee</Link> */}
            <button className="button-coffee">
              <Link to="/login-page" className="underline">
                Buy me a Coffee
              </Link>
            </button>
          </div>
          <div className="container-logo">
            <img className="logo-img" src={logo} alt="logo"></img>
          </div>
        </div>
      </div>
    );
  }
}

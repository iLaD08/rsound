import React from "react";
import Typewriter from "typewriter-effect";
import { FaCompactDisc } from "react-icons/fa";
import next from "./assests/next.png";
import Feature1 from "./assests/60million.svg";
import Feature2 from "./assests/in_your_pocket.svg";
import Feature3 from "./assests/quality.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <div className="first-section">
          <div className="logo">
            <FaCompactDisc />
            <h2>rsound</h2>
          </div>
          <ul>
            <li>
              <a href="/premium">Premium</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
            <li>
              <a href="/download">Download</a>
            </li>
          </ul>
        </div>
        <div className="second-section">
          <ul>
            <li>
              <a href="/login-in">Login in</a>
            </li>{" "}
            <li>
              <a href="/sign-up">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-section">
        <div className="left-section">
          <h1>
            Come, dance and rewind <br /> your{" "}
            <span>
              {" "}
              <Typewriter
                options={{
                  strings: ["happiness", "joy", "satisfaction"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div>
            <button>GET RSOUND!</button>
          </div>
        </div>
        <div className="right-section">
          <img src={next} alt="next" />
        </div>
      </div>
      <h1 className="title">Features</h1>
      <span className="underline" />
      <div className="features">
        <div className="feature">
          <img src={Feature1} alt="60 million" />
          <h2>60 million songs</h2>
        </div>
        <div className="feature">
          <img src={Feature2} alt="60 million" />
          <h2>Music in your pocket</h2>
        </div>
        <div className="feature">
          <img src={Feature3} alt="60 million" />
          <h2>Best music quality</h2>
        </div>
      </div>
      <div className="bottom-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FD8061"
            fill-opacity="1"
            d="M0,224L120,240C240,256,480,288,720,282.7C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default App;

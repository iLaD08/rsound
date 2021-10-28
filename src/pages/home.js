import React from "react";
import About from "../components/about/about";
import Features from "../components/features/features";

const Home = () => {
  return (
    <div>
      <About />
      <Features />
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

export default Home;

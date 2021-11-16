import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import DownlaodSvg from "../../assests/download2.svg";
import { DownloadContainer } from "./style";

const Download = () => {
  return (
    <DownloadContainer>
      <div>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <h1>Get RSOUND right now!</h1>
          <button>Download</button>
        </ScrollAnimation>
      </div>
      <div>
        <ScrollAnimation animateIn="fadeInDown" animateOnce>
          <img src={DownlaodSvg} alt="download" />
        </ScrollAnimation>
      </div>
    </DownloadContainer>
  );
};

export default Download;

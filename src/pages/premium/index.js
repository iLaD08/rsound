import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PremiumSvg from "../../assests/premium.svg";
import DowloadSvg from "../../assests/download.svg";
import SongSvg from "../../assests/song.svg";
import SkipsSvg from "../../assests/skips.svg";
import {
  PremiumAboutContainer,
  PremiumContent,
  Title,
  Underline,
  Content,
} from "./style";

const Premium = () => (
  <div>
    <PremiumAboutContainer>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <div>
          <h1>Rsound Premium</h1>
          <p>
            Get Premium free for 2 months Just £9.99/month after. Cancel
            anytime.
          </p>
          <button>Get Premium</button>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInDown" animateOnce>
        <div>
          <img src={PremiumSvg} alt="premium" />
        </div>
      </ScrollAnimation>
    </PremiumAboutContainer>
    <ScrollAnimation animateIn="fadeInDown">
      <Title>Why Go Premium?</Title>
      <Underline />
      <PremiumContent>
        <Content>
          <img src={DowloadSvg} alt="Download music." />
          <h2>Download music.</h2>{" "}
        </Content>
        <Content>
          <img src={SongSvg} alt="Play any song." />
          <h2>Play any song.</h2>{" "}
        </Content>
        <Content>
          <img src={SkipsSvg} alt="Unlimited skips." />
          <h2>Unlimited skips.</h2>{" "}
        </Content>
      </PremiumContent>
    </ScrollAnimation>
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

export default Premium;

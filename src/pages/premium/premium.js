import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
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
    </PremiumAboutContainer>
    <Title>Why Go Premium?</Title>
    <Underline />
    <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
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
  </div>
);

export default Premium;

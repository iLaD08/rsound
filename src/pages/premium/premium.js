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
  </div>
);

export default Premium;

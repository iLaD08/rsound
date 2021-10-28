import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Feature1 from "../../assests/60million.svg";
import Feature2 from "../../assests/in_your_pocket.svg";
import Feature3 from "../../assests/quality.svg";
import { FeaturesContainer, Title, Underline, Feature } from "./styles";

const Features = () => (
  <div>
    <ScrollAnimation animateIn="fadeInDown" duration="2" animateOnce>
      <Title>Features</Title>
      <Underline />
      <FeaturesContainer>
        <Feature>
          <img src={Feature1} alt="60 million songs" />
          <h2>60 million songs</h2>
        </Feature>
        <Feature>
          <img src={Feature2} alt="Music in your pocket" />
          <h2>Music in your pocket</h2>
        </Feature>
        <Feature>
          <img src={Feature3} alt="Best music quality" />
          <h2>Best music quality</h2>
        </Feature>
      </FeaturesContainer>
    </ScrollAnimation>
  </div>
);

export default Features;

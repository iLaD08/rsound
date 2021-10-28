import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typewriter from "typewriter-effect";
import next from "../../assests/next.png";
import {
  AboutContainer,
  AboutLeftContainer,
  AboutRightContainer,
} from "./styles";

const About = () => (
  <AboutContainer>
    <AboutLeftContainer>
      <ScrollAnimation
        animateIn="fadeInLeft"
        animateOut="fadeOut"
        duration="2"
        animateOnce
      >
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
      </ScrollAnimation>
    </AboutLeftContainer>
    <ScrollAnimation animateIn="fadeInDown" animateOnce>
      <AboutRightContainer>
        <img src={next} alt="next" />
      </AboutRightContainer>
    </ScrollAnimation>
  </AboutContainer>
);

export default About;

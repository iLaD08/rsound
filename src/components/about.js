import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typewriter from "typewriter-effect";
import next from "../assests/next.png";

const About = () => (
  <div className="about">
    <div className="left-section">
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
    </div>
    <ScrollAnimation animateIn="fadeInDown" animateOnce>
      <div className="right-section">
        <img src={next} alt="next" />
      </div>
    </ScrollAnimation>
  </div>
);

export default About;

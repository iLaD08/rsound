import React from "react";
import Typewriter from "typewriter-effect";
import next from "../assests/next.png";

const About = () => (
  <div className="about">
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
);

export default About;

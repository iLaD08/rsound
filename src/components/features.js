import React from "react";
import Feature1 from "../assests/60million.svg";
import Feature2 from "../assests/in_your_pocket.svg";
import Feature3 from "../assests/quality.svg";

const Features = () => (
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
);

export default Features;

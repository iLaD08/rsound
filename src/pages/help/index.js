import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SuportSvg from "../../assests/support.svg";
import { HelpContainer, LeftSectionDiv } from "./style";

const Help = () => {
  return (
    <HelpContainer>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce>
        <LeftSectionDiv>
          <h1>Write your email to so we could contact you</h1>
          <div>
            <input type="email" placeholder="..." />
            <button>Send</button>
          </div>
        </LeftSectionDiv>
      </ScrollAnimation>
      <div>
        <ScrollAnimation animateIn="fadeInDown" animateOnce>
          <img src={SuportSvg} alt="" title="" />
        </ScrollAnimation>
      </div>
    </HelpContainer>
  );
};

export default Help;

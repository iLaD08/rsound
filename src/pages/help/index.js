import React from "react";
import SuportSvg from "../../assests/support.svg";
import { HelpContainer, LeftSectionDiv } from "./style";

const Help = () => {
  return (
    <HelpContainer>
      <LeftSectionDiv>
        <h1>Write your email to so we could contact you</h1>
        <div>
          <input type="email" placeholder="text..." />
          <button>></button>
        </div>
      </LeftSectionDiv>
      <div>
        <img src={SuportSvg} alt="" title="" />
      </div>
    </HelpContainer>
  );
};

export default Help;

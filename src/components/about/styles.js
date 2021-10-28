import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AboutLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #1c1e52;
  font-size: 24px;
  margin-left: 50px;
  width: 150vh;

  h1 span {
    display: inline-block;
    font-family: "Caveat", cursive;
    font-size: 55px;
    font-weight: bold;
    font-style: italic;
    color: #fd8061;
  }
`;

export const AboutRightContainer = styled.div`
  img {
    width: 100vh;
    height: 100vh;
    z-index: -1;
  }
`;

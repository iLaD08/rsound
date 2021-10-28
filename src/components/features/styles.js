import styled from "styled-components";

export const FeaturesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 80px 0px -20vh 0px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 30vh;
`;

export const Underline = styled.span`
  background-color: #fd8061;
  width: 50px;
  height: 5px;
  display: block;
  margin: 5px auto;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #08093b;
  :hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  img {
    width: 250px;
    height: 250px;
  }

  h2 {
    display: flex;
    font-size: 22px;
    text-align: center;
    font-weight: 800;
    margin-bottom: 10px;
    color: #11135c;
  }
`;

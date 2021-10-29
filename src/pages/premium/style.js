import styled from "styled-components";

export const PremiumAboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 35vh;
  margin-left: 50px;

  h1 {
    font-size: 65px;
    color: #fd8061;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: #11135c;
  }
`;

export const PremiumContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 80px 0px 20vh 0px;
`;

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #000;
  margin-top: 35vh;
`;

export const Underline = styled.span`
  background-color: #fd8061;
  width: 150px;
  height: 5px;
  display: block;
  margin: 5px auto;
`;

export const Content = styled.div`
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
    margin-bottom: 10px;
    color: #11135c;
  }
`;

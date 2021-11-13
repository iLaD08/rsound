import styled from "styled-components";

export const HelpContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 6vh;

  img {
    height: 90vh;
  }
`;

export const LeftSectionDiv = styled.div`
  margin-left: 20px;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 40px;
    color: #fd8061;
  }

  input {
    border: 1px #11135c solid;
    border-radius: 5px;
    font-size: 25px;
    width: 80%;
    padding: 10px;
    margin: 5px;
    color: #11135c;
    font-weight: bold;
  }

  input::placeholder {
    color: #57599c;
  }

  button {
    background-color: #11135c;
    border-radius: 50%;
    width: 10px;
    height: 50px;
    margin-top: 0px;
  }
`;

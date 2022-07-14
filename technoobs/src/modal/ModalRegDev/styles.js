import styled from "styled-components";

export const RecruiterStyleForm = styled.form`
  width: 100%;
  height: 100%;

  background-color: #433882;
  opacity: 0.9;
  textarea {
    width: 450px;
    height: 250px;
    border-radius: 8px;
    font-size: 22px;
    font-family: "VT323", monospace;
    padding: 10px;
  }

  h2 {
    font-size: 40px;
    font-family: "VT323", monospace;
    text-align: center;
    color: #d9d9d9;
    margin-bottom: 2%;
  }
  .button__close {
    position: absolute;
    left: 20rem;
    border: none;
    font-size: 40px;
    background-color: transparent;
  }
  button {
    margin-left: 38%;
    margin-top: 1%;
  }
  span {
    font-size: 30px;
    color: #d9d9d9;
  }

  input {
    width: 300px;
    height: 25px;
    border-radius: 1px;
    border: 4px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    font-family: "VT323";
    font-size: 1.8rem;
    color: black;
  }
  @media (max-width: 755px) {
    display: flex;
    flex-direction: column;
    gap: 3px;

    h2 {
      font-size: 35px;
      font-family: "VT323", monospace;
      text-align: center;
      color: #d9d9d9;
      margin-bottom: 10%;
    }
    input {
      width: 136px;
      height: 17px;
      border-radius: 1px;
      border: 4px solid #000000;
      box-shadow: 4px 4px 0px #000000;
      font-family: "VT323";
      font-size: 1.5rem;
      color: black;
    }

    button {
      margin-left: 30%;
      margin-top: 5%;
    }

    .button__close {
      left: 23rem;
      font-size: 30px;
    }
    .checkbox {
      width: 25px;
      height: 25px;
      border-radius: 1px;
      border: 4px solid #000000;
      box-shadow: 4px 4px 0px #000000;
      font-family: "VT323";
      font-size: 1.8rem;
      color: black;
    }
  }
`;
export const InputContainerDad = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  gap: 1rem;

  @media (max-width: 755px) {
    gap: 3px;
  }
`;

export const LabelStyle = styled.label`
  font-size: 1.8rem;
  font-family: "VT323", monospace;
  color: #d9d9d9;
  margin-right: auto;

  @media (max-width: 755px) {
    font-size: 20px;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
`;
export const Avatar = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 310px;
    height: 340px;
    border: 2px solid grey;
    border-radius: 8px;
  }
  .nav {
    height: 6vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Zen Tokyo Zoo", cursive;
    font-size: 35px;
  }
  .home {
    box-sizing: border-box;
    font-family: "VT323";
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: "VT323";
  }
  .avatar {
    height: 50%;
    width: 50%;
    max-width: 400px;
    max-height: 400px;
    margin-top: 40px;
    margin-bottom: 45px;
  }
  .btns {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 5em;
    height: 2em;
    margin: 1px;
    font-size: 20px;
    font-weight: 600;
    font-family: "Roboto Mono", monospace;
    background-color: rgb(231, 231, 231);
    box-shadow: rgb(102 101 101) 2px 3px 5px;
    border-radius: 15px;
    border: none;
    transition: all 0.2s ease 0s;
  }
  button:active {
    box-shadow: none;
  }
  .btns > button:hover {
    background-color: #ffffff;
  }
  #gen {
    background-color: #4361ee;
    color: white;
  }
  #down {
    background-color: #eb3349;
    color: white;
  }

  @media (max-width: 755px) {
    .container {
      display: flex;
      flex-direction: column;
      width: 169px;
      height: 240px;
      border: 2px solid grey;
      border-radius: 8px;
    }

    p {
      font-size: 20px;
    }

    .avatar {
      height: 50%;
      width: 50%;
      max-width: 400px;
      max-height: 400px;
      margin-top: 5px;
      margin-bottom: 30px;
    }
  }
`;

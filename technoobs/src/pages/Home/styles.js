import styled from "styled-components";

export const HomeStyle = styled.main`
  width: 100%;
  height: 40rem;
  background-color: #002a32;
  font-family: "VT323", monospace;
  background-image: url(https://s3-alpha-sig.figma.com/img/83f4/a1d3/8642817e7d3ef59623c7160eca36401f?Expires=1658707200&Signature=ddK62VN2DvhJiGyQkq9STInfbcl-zptwhTp39RZ5dJTzPd0IOvvsbSTsEv9FUe4~-zSkRYhMoeah8K-DGxSbEGqn7~CWXQfBlb8syJX7U5ljWkUGzObPHifZWt-lbJSQN2XB7KFWHpx-R6gLLEaWQju1GRna4F0lMoQY6qRqvJg-8fagIFW5vqNE1Q8oJz5hB57uUmeropDna~lNQmiDs-v2xcA6eblKONdOEL3Aj3U6gm1U6-KlEtp-fxtrjVTnCUCqOm9iUunEaNEwaqBoOMWXNSi4mGLoIFQytwdq8zm2Xco85AYjXCocy0I8odKBkLhFhcps5PEXCmqXkLmhuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
  background-size: 550px;
  background-repeat: no-repeat;
  background-position: top;

  .button__container {
    width: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: absolute;
    margin-top: 25%;
    right: 0;
    left: 0;
    gap: 170px;
  }
  .div__title--container {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    margin-top: 50px;
    left: 5%;

    h1,
    span {
      left: 400px;
    }
  }

  .h2__title--1 {
    display: flex;
    flex-direction: column;

    width: 30%;
    color: #23ce6b;
    font-size: 32px;
    gap: 30px;
  }
  .h2__title--2 {
    display: flex;
    flex-direction: column;

    width: 30%;
    color: #f08700;
    font-size: 32px;
    gap: 30px;
  }

  .button__candidate--register {
    background-color: #23ce6b;
    border: none;
    color: white;
    font-size: 38px;
    &:hover {
      background: #39ff14;
      box-shadow: 0 0 50px #39ff14;
      font-size: 50px;
    }
  }
  .button__company--register {
    background-color: #f08700;
    border: none;
    color: white;
    font-size: 38px;
    &:hover {
      background: #ffc42c;
      box-shadow: 0 0 50px #ffc42c;
      font-size: 50px;
    }
  }
  h1 {
    font-size: 50px;
    font-family: "VT323";
    color: white;
  }
  button {
    transition: 0.6s;
    cursor: pointer;
    font-family: "VT323", monospace;
  }

  @media (max-width: 755px) {
    width: 100%;
    height: 900px;
    background-color: #002a32;
    font-family: "VT323", monospace;
    background-image: url(https://s3-alpha-sig.figma.com/img/83f4/a1d3/8642817e7d3ef59623c7160eca36401f?Expires=1658707200&Signature=ddK62VN2DvhJiGyQkq9STInfbcl-zptwhTp39RZ5dJTzPd0IOvvsbSTsEv9FUe4~-zSkRYhMoeah8K-DGxSbEGqn7~CWXQfBlb8syJX7U5ljWkUGzObPHifZWt-lbJSQN2XB7KFWHpx-R6gLLEaWQju1GRna4F0lMoQY6qRqvJg-8fagIFW5vqNE1Q8oJz5hB57uUmeropDna~lNQmiDs-v2xcA6eblKONdOEL3Aj3U6gm1U6-KlEtp-fxtrjVTnCUCqOm9iUunEaNEwaqBoOMWXNSi4mGLoIFQytwdq8zm2Xco85AYjXCocy0I8odKBkLhFhcps5PEXCmqXkLmhuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    background-size: 425px;
    background-repeat: no-repeat;
    background-position: 0px 42px;

    .button__container {
      width: auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      position: absolute;
      margin-top: 110%;
      right: 0;
      gap: 24px;
    }
    .div__title--container {
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: wrap;
      position: absolute;
      margin-top: 10px;
      left: 13%;

      h1,
      span {
        left: 250px;
      }
    }

    .h2__title--1 {
      display: flex;
      flex-direction: column;

      width: 35%;
      color: #23ce6b;
      font-size: 20px;
      gap: 15px;
    }
    .h2__title--2 {
      display: flex;
      flex-direction: column;

      width: 45%;
      color: #f08700;
      font-size: 20px;
      gap: 15px;
    }

    .button__candidate--register {
      background-color: #23ce6b;
      border: none;
      color: white;
      font-size: 30px;
      &:hover {
        background: #39ff14;
        box-shadow: 0 0 50px #39ff14;
        font-size: 50px;
      }
    }
    .button__company--register {
      background-color: #f08700;
      border: none;
      color: white;
      font-size: 30px;
      &:hover {
        background: #ffc42c;
        box-shadow: 0 0 50px #ffc42c;
        font-size: 50px;
      }
    }
    h1 {
      font-size: 35px;
      font-family: "VT323";
      color: white;
    }
    button {
      transition: 0.6s;
      cursor: pointer;
      font-family: "VT323", monospace;
      width: 160px;
      height: 40px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 1px;
      color: white;
      font-size: 25px;
      box-sizing: border-box;
      box-shadow: 4px 4px 0px #000000;
    }
  }
`;

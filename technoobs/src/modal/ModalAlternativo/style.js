import styled from "styled-components";

export const Container = styled.div`
  font-family: "VT323";
  font-style: normal;
  font-size: 20px;
  position: absolute;

  top: 60%;
  left: 22%;

  width: 380px;
  height: 490px;

  padding: 40px;
  transform: translate(40%, -60%);
  background: linear-gradient(
    180deg,
    #433882 0%,
    rgba(67, 56, 130, 0.541667) 99.99%,
    rgba(67, 56, 130, 0) 100%
  );

  box-sizing: border-box;
  box-shadow: 0 15px 25px #433882;

  border: 2px solid #000000;
  border-radius: 10px;

  .img {
    width: 700px;
    height: 700px;
  }
  span {
    color: red;
  }
  label {
    color: #fff;
  }

  button {
    position: relative;
    margin-left: 290px;
    margin-top: -15px;
    font-size: 22px;
    border: none;
    background: rgba(67, 56, 130, 0);
  }

  h2 {
    margin: -20px 0 60px 0;
    color: #fff;

    font-size: 25px;
    font-family: "VT323";
    font-style: normal;
    text-align: center;
  }

  .user-box {
    position: relative;
  }

  .user-box input {
    width: 100%;

    padding-left: 10px 0;
    margin-bottom: 30px;

    font-size: 16px;
    color: #fff;

    border: none;
    border-bottom: 1px solid #fff;

    outline: none;
    background: transparent;
  }

  .user-box input:focus ~ label,
  .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #179ab1;
    font-size: 12px;
  }

  .user-box label {
    position: absolute;

    top: 0;
    left: 0;

    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .checkout {
    margin: 20px 20px;
    color: #fff;
    font-family: "VT323";
    font-style: normal;
    font-size: 20px;
  }

  button {
    position: relative;

    display: inline-block;

    padding: 10px 20px;
    color: #fff;
    font-size: 16px;

    text-decoration: none;
    text-transform: uppercase;

    overflow: hidden;
    transition: 0.5s;
    margin: 5px 100px 20px 90px;
    letter-spacing: 4px;

    cursor: pointer;
  }

  button:hover {
    background: #179ab1;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0 0 5px #179ab1, 0 0 25px #179ab1, 0 0 50px #179ab1,
      0 0 100px #179ab1;
  }

  @media (max-width: 755px) {
    top: 40%;
    left: -32%;
    width: 310px;
    right: 22%;
    height: 400px;
    padding: 28px;

    .user-box input {
      width: 95%;
      padding-left: 10px 0;
      margin-bottom: 10px;
      font-size: 16px;
      color: #fff;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }

    h2 {
      margin: -25px 0 20px 0;
    }

    button {
      margin: 5px 43px 5px 60px;
    }
  }
`;

import styled from "styled-components";

export const RecruiterStyleForm = styled.form`
  width: 100%;
  height: 100%;

  background-color: #433882;
  opacity: 0.9;

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
  align-items: center;
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

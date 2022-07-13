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
    font-size: 42px;
    font-family: "VT323", monospace;
    text-align: center;
    color: #d9d9d9;
    margin-bottom: 3%;
  }
  .button__close {
    position: absolute;
    left: 600px;
    border: none;
    font-size: 40px;
    background-color: transparent;
  }
  button {
    margin-left: 38%;
    margin-top: 3%;
  }
  span {
    font-size: 30px;
    color: #d9d9d9;
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
`;

export const LabelStyle = styled.label`
  font-size: 1.8rem;
  font-family: "VT323", monospace;
  color: #d9d9d9;
  margin-right: auto;
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  padding-right: 200px;
`;
export const Avatar = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 450px;

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
    gap: 15px;
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
    width: 6em;
    height: 2.5em;
    margin: 10px;
    font-size: 20px;
    font-weight: 600;
    font-family: "Roboto Mono", monospace;
    background-color: rgb(231, 231, 231);
    box-shadow: 2px 3px 5px rgb(102, 101, 101);
    border-radius: 15px;
    border: none;
    transition: 0.2s;
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
`;

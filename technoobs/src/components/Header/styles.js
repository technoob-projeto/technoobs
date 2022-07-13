import styled from "styled-components";

export const HeaderStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 97, 5%;
  height: 80px;

  background-color: #070707;

  background: linear-gradient(
    45deg,
    #632291,
    #13a7bb,
    #217698,
    #2a5581,
    #33437a,
    #413a80,
    #562b8b,
    #632291,
    #13a7bb
  );
  background-size: 200% 200%;
  animation: colors 22s ease infinite;

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 0%;
    }

    100% {
      background-position: 100% 50%;
    }
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .img__logo {
    width: 100px;
    margin-left: 200px;
  }
  .img__menu {
    width: 50px;
    height: 50px;
  }
  button {
    margin: 37px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    font-weight: 500;
    color: #e9eaf1;
    font-family: "VT323", monospace;
    &:hover {
      &:hover {
        color: #7fff00;
        box-shadow: 1px 2px 50px #7fff00;
      }
    }
  }

  .btn__login {
    width: 100px;
    height: 70px;
  }

  @media (max-width: 750px) {
    button {
      margin: 5px;
      background-color: transparent;
      border: none;
      font-size: 20px;
      font-weight: 200;
      color: #e9eaf1;
      font-family: "VT323", monospace;
    }

    .img__logo {
      width: 95px;
      margin-left: 40px;
    }
  }
`;

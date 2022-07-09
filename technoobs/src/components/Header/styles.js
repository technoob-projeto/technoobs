import styled from "styled-components";

export const HeaderStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 120px;
  padding: 1rem;
 

  background-color: #070707;

  background: linear-gradient(45deg,#632291,#13A7BB,#217698, #2A5581, #33437A, #413A80, #562B8B, #632291, #13A7BB);
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

 li{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .img__logo {
    width: 150px;
    
  }
  .img__menu {
    
    width: 50px;
    height: 50px;
  }
  button {
    margin: 50px;
    background-color: transparent;
    border: none;
    font-size: 42px;
    font-weight: 900;
    color: #E9EAF1;
    font-family: 'VT323', monospace;
    &:hover{
      &:hover{
        
        color: #7fff00;
        box-shadow: 1px 2px 50px #7fff00;
    }
    }
   
  }

  .btn__login {
    width: 100px;
    height: 70px;
  }
`;

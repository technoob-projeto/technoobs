import styled, { css } from "styled-components";

export const ButtonComponent = styled.button`
  ${(props) => {
    switch (props.color) {
      case "green":
        return css`
          background-color: #23CE6B;
        `;
      case "orange":
        return css`
          background-color: #dc7d49;
        `;
      case "bug":
        return css`
          background-color: #cd853f;
          `;
          default:
            break
        
    }
  }}

${(props) => {
    switch (props.size) {
      case "small":
        return css`
        width: 70px;
        height: 30px;
        `;
      case "medium":
        return css`
         width: 160px;
        height: 40px;
        `;
      case "large":
        return css`
          width: 220px;
        height: 45px;
        
          `;
          default:
            break
        
    }
  }}

    

  
  width: 100px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1px;
  color: white;
  font-family: "VT323";
  font-size: 15px;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 4px 4px 0px #000000;
  transition: transform 200ms ease-in-out;
  :hover {
    ${(props) => {
      switch (props.color) {
        case "green":
          return css`
            background-color: #7fff00;
            box-shadow: 0 0 50px #7fff00;
          `;

        case "orange":
          return css`
            background-color: #ffa500;
            box-shadow: 0 0 50px #ffa500;
          `;
        case "bug":
          return css`
            background-color: #cd853f;

          `;
          default:
            break
      }
    }}
    transform: scale(1.03);

    font-size: 20px;
  }
`;

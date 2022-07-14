import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 80%;
  height: 120px;
  background-color: #002a32;
  font-family: "VT323", monospace;
  margin-top: 15px;
 
  border: 2px solid #23ce6b;
  border-radius: 20px;
  font-family: 'VT323';
  font-style: normal;

  font-size: 18px;

  color: white;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  .div__title--container {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
margin-top: 100px;
    left: 13%;
    
    h1, span{
      left:500px ;


    }
  }

  .descricao{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 5px;
  }

  .logo__nivel{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px 5px;
    img{
      width: 40px;
    }
  }

  .botoes{
    display: flex;
    flex-direction: row;
    justify-content: center;

    button{
      margin: 5px;
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

  `
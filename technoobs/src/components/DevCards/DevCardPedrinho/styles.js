import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 350px;
  height: 640px;
  padding: 5px;
  overflow: auto;
  background-color: #002a32;
  margin: 10px;
  font-family: "VT323", monospace;
  color: white;
  border: 2px solid #f08700;
  border-radius: 18px;
  color: white;
  font-family: 'VT323';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  body::-webkit-scrollbar{
    
  }
  .div__title--container {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    margin-top: 100px;
    left: 13%;
  }

  .informacoes{
    display: flex;
    flex-direction: row;
  }

  .avatar{
    display: flex;
    flex-direction: column;
  }

  .info{
    display: flex;
    flex-direction: column;
  }

  .info span{
    margin: 0;
    padding: 0;
    
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

  .estrelas{
    width: 150px;
  }
  
  
`;

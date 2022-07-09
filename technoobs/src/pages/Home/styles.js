import styled from "styled-components";



export const HomeStyle = styled.main`

 
width: 100%;
  height: 1400px;
  background-color: black;
  font-family: 'VT323', monospace;
.div__title--container{
    display: flex;
    justify-content: space-evenly;
    
    
}
  .h2__title--1{
    display: flex;
    flex-direction: column;
   
    width: 30%;
    color: #23CE6B;
    font-size: 32px;
    gap: 30px;
    

  }
  .h2__title--2{
    display: flex;
    flex-direction: column;
    
    width: 30%;
    color: #F08700;
    font-size: 32px;
    gap:30px;
 

  }

  .div__background--1 {
    width: 100%;
    height: 40%;
    background-image: url(https://www.pngmart.com/files/6/Matrix-PNG-File-1.png);
    opacity: 0.2;
  }
  .div__background--2 {
    width: 100%;
    height: 55%;
    background-image: url(https://www.marcosantoni.it/public/foto/home-page_20220505144637.jpg);
    background-repeat: no-repeat;
    opacity: 0.5;
  }
  .div__background--3 {
    width: 100%;
    height: 100%;

    background-image: url(https://s3-alpha-sig.figma.com/img/83f4/a1d3/8642817e7d3ef59623c7160eca36401f?Expires=1658102400&Signature=B5n88ee9wS16g4Gm-b0uOp4MLFI~PhCrI6zoaKFlFOGPun6A3ub-1XpdqCw8r4U6XhtZ7RpdFbJlmmnvpITwMQMr02hnjJYxq8JAAjfXiC9bNxyLI53JmioiysMkwCbP2c2ALd3vVYE~BpdLi6bTQFRQRGoO-FKQIujyOCOBnh2a3fPpm-pDMxjjFMPHFVxPcXoFHrvHQGjnmjbamsa~adHzPQkz662mi6FUn8nD5Bz52m3xmkAgmFB6-MKlClB0OVYf4XxIFklO7DjvIBibkJG69ZCdgFLHtf-rPqH-lIisGQH-a8ASwSX~-MjHo5~bhDAepIkPw5-DF8LKbUiD2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    background-position: top;
    background-size: 700px;
    background-repeat: no-repeat;
    opacity: 0.5;
  }
  .button__candidate--register{
    background-color: #23CE6B;
    border: none;
    color: white;
    font-size: 38px;
    &:hover{
        
        background: #39ff14;
        box-shadow: 0 0 50px #39ff14;
        font-size: 50px;
    }
  }
  .button__company--register{
    background-color:#F08700;
    border: none;
    color: white;
    font-size: 38px;
    &:hover{
        
        background: #FFC42C;
        box-shadow: 0 0 50px #FFC42C;
        font-size: 50px;
    }
}
button{
    transition: .6s;
    cursor: pointer;
    font-family: 'VT323', monospace;
}
`;

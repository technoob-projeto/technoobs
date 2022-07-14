import styled from "styled-components";

export const HomeStyle = styled.main`
  width: 100%;
  height: 1400px;
  background-color: #002a32;
  font-family: "VT323", monospace;
  .button__container {
    width: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    margin-top: 25%;
    right: 0;
    left: 0;
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
    
    h1, span{
      left:500px ;


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

  .div__background--1 {
    width: 100%;
    height: 40%;
    background-image: url(https://www.pngmart.com/files/6/Matrix-PNG-File-1.png);
    opacity: 0.2;
  } 
   .div__background--2 {
    width: 200px;
    height: 200px;
    background-image: url(https://s3-alpha-sig.figma.com/img/83f4/a1d3/8642817e7d3ef59623c7160eca36401f?Expires=1658707200&Signature=ddK62VN2DvhJiGyQkq9STInfbcl-zptwhTp39RZ5dJTzPd0IOvvsbSTsEv9FUe4~-zSkRYhMoeah8K-DGxSbEGqn7~CWXQfBlb8syJX7U5ljWkUGzObPHifZWt-lbJSQN2XB7KFWHpx-R6gLLEaWQju1GRna4F0lMoQY6qRqvJg-8fagIFW5vqNE1Q8oJz5hB57uUmeropDna~lNQmiDs-v2xcA6eblKONdOEL3Aj3U6gm1U6-KlEtp-fxtrjVTnCUCqOm9iUunEaNEwaqBoOMWXNSi4mGLoIFQytwdq8zm2Xco85AYjXCocy0I8odKBkLhFhcps5PEXCmqXkLmhuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    background-repeat: no-repeat;
    opacity: 0.5;

    
  } 
  .div__background--3 {
    width: 100%;
    height: 100%;
    background-image: url(https://s3-alpha-sig.figma.com/img/3b24/6613/28f557ac0264e315c0c814e7c3df68e5?Expires=1658707200&Signature=QPsTng8rO8v2Qk-JTrG~sCBf7YUC1yIixemzCYFSngF5rDh7DxiKpWqIdmNU8FL-09Z8j5io8jlTWHbD0uPUlj3k0I8JYREia6pp-kRqxqa~IKAfohOdm8FthZ9c8symAS9mo6LSqGqpQMn~i3dc0snIgkQXDNfnAD-dznElrg7gdEZgDigZVUkUSKULa7wB1IpnrYJ-bDmROrmJUsjMYze8YeshPd5DuvgqQP4wzvdhLJrc4Fr7O601cUr2AF5fatGlvjBW7tztrLZGK-LSqA~VQ06mc6dP74W9EYd0tY~0b4X698jF4td2wU6E7e4gXB~5tm444ZMOnky5SMS8QQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    background-size: cover;
    background-repeat: no-repeat;
  
   
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
`;

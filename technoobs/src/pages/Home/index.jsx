import React, { useState } from "react";
import { HomeStyle } from "./styles";
import Button from "../../components/Button/Button"
import { ModalRegRecruiter } from "../../modal/ModalRegRecruiter";


const Home = () => {
 const [openRegisterRecruiter, setOpenRegisterRecruiter] = useState(false)

 function openModal(){
  setOpenRegisterRecruiter(true)
 }

 
 return (
   <>
      <HomeStyle>
      {openRegisterRecruiter &&
       <ModalRegRecruiter/>
      }
        <div className="div__background--3">
          <div className="div__background--1"></div>
          <div className="div__title--container">
            <div className="h2__title--1">
              <h2>A way to prove yourself and get real work experience</h2>
              <Button text="Register" color="green" >Register</Button>
            </div>
            <div className="h2__title--2">
              <h2>Register you company and find different talents</h2>
              <Button callback={openModal} text="Register" color="orange">Register</Button>
            </div>
          </div>
          <div className="div__background--2"></div>
        </div>
      </HomeStyle>
    </>
  );

   
     
  
  
  

};

export default Home;

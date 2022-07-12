import React, { useState } from "react";
import { HomeStyle } from "./styles";
import Button from "../../components/Button/Button";
import { Register } from "../../components/Register";

const Home = () => {
  const [openRegisterRecruiter, setOpenRegisterRecruiter] = useState(false);
  const [isDev, setIsDev] = useState(false);

  function openModal() {
    setOpenRegisterRecruiter(true);
  }
  function closeModal() {
    setOpenRegisterRecruiter(false);
  }
  function openModalDev() {
    setIsDev(true);
    openModal();
  }
  function openModalNotDev() {
    setIsDev(false);
    openModal();
  }

  return (
    <>
      <HomeStyle>
        {!openRegisterRecruiter ? (
          <>
            <div className="div__title--container">
              <div className="div__background--3"></div>
              <div>
                <h1>
                  <span style={{ color: "#C30B90" }}>function </span>
                  <span style={{ color: "#2ECC03" }}> Tech</span>
                  <span style={{ color: "#C30B90" }}>&#40;</span>
                  <span style={{ color: "#f5ab49" }}>!Noobs</span>
                  <span style={{ color: "#C30B90" }}>&#41;</span>{" "}
                  <span style={{ color: "#C30B90" }}>&#123;</span>
                  <br />
                  <span style={{ color: "#2ECC03" }}>proveIt&#40;&#41;</span>
                  <br />
                  <span style={{ color: "#C30B90" }}>&#125;</span>
                </h1>
              </div>
            </div>
            <div className="button__container">
              <div className="h2__title--1">
                <h2>Register you company and find different talents</h2>
                <Button
                  callback={openModalNotDev}
                  text="Register"
                  color="green"
                >
                  Register
                </Button>
              </div>
              <div className="h2__title--2">
                <h2>A way to prove yourself and get real work experience</h2>
                <Button callback={openModalDev} text="Register" color="orange">
                  Register
                </Button>
              </div>
            </div>
            <div className="div__background--3"></div>
          </>
        ) : (
          <Register isDev={isDev} closeModal={closeModal} />
        )}
      </HomeStyle>
    </>
  );
};

export default Home;

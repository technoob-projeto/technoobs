import { createContext, useState } from "react";
import ModalLogin from "../../modal/ModalAlternativo/index";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userData, setUserData] = useState({})

    const handleIsOpen = () => {
        setModalIsOpen(true);
    }
    const handleIsClose = () => {
        setModalIsOpen(false);
    }
 function loginRequest(userData){
    
    
 }


    return (
        <LoginContext.Provider value={{ modalIsOpen, handleIsOpen, handleIsClose}}>
            {children}
            {modalIsOpen && <ModalLogin />}
        </LoginContext.Provider>    
    );
};
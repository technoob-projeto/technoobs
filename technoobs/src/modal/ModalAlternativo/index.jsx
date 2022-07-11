import Modal from "react-modal";
import { useContext } from "react";
import { LoginContext } from "../../providers/login/index";
import { Container } from "./style.js";
import background from "../../assets/background.png";
import {MdCancel} from "react-icons/md"

const ModalLogin = () => {
    const { modalIsOpen, handleIsOpen, handleIsClose } = useContext(LoginContext);

    return (
        
        <div>
            <button onClick={handleIsOpen}>Modal</button>

            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={handleIsClose}>

                <div>
                    <img src={background} alt="img"/>
                <Container>
                    <MdCancel onClick={handleIsClose}></MdCancel>
                    <h2>LOGIN</h2>
                    <form>
                    <div class="user-box">
                        <label>EMAIL</label>
                        <input type="email" name="email" required=""/>
                    </div>
                    <div class="user-box">
                        <label>SENHA</label>
                        <input type="password" name="senha" required=""/>
                    </div>
                    <div className="checkout">
                        <input type="checkbox" name="" id="" />
                        <label>LOGIN AS DEV</label>
                    </div>
                    <div className="checkout">
                        <input type="checkbox" name="" id="" />
                        <label>LOGIN AS COMPANY</label>
                    </div>
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        INICIAR
                    </a>
                    </form>
                </Container>
                </div>
            </Modal>
            </div>
    )
}

export default ModalLogin;
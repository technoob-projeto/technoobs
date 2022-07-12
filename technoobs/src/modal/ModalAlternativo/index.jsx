import Modal from "react-modal";
import { useContext } from "react";
import { LoginContext } from "../../Providers/login/index";
import { Container } from "./style.js";
import background from "../../assets/background.png";
import {MdCancel} from "react-icons/md";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalLogin = () => {
    const { modalIsOpen, handleIsClose } = useContext(LoginContext);


    const formSchema = yup.object().shape({
        email: yup
          .string()
          .required("E-mail obritatório!")
          .email("E-mail inválido"),
        password: yup.string().min(8, "Minimo 8 digitos").required("Obrigatorio"),
        passwordconfirm: yup
          .string()
          .required("Confime a senha")
          .oneOf([yup.ref("password")], "Senhas não conferem"),
      });
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });

      const onSubmitFunction = (data) => console.log(data);

    return (
        
        <div>

            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={handleIsClose}>
                
               
                    <img src={background} alt="img"/>
                <Container>
                    <MdCancel onClick={handleIsClose}></MdCancel>
                    <h2>LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <div className="user-box">
                        <label>EMAIL</label>
                        <input type="email" {...register("email")} name="email"/>
                        <span>{errors?.email?.message}</span>
                    </div>
                    <div className="user-box">
                        <label>SENHA</label>
                        <input type="password" {...register("password")} name="senha" required=""/>
                        <span>{errors?.password?.message}</span>
                    </div>
                    <div className="checkout">
                        <input type="checkbox" {...register("dev")} name="dev" />
                        <label>LOGIN AS DEV</label>
                    </div>
                    <div className="checkout">
                        <input type="checkbox" name="company"/>
                        <label>LOGIN AS COMPANY</label>
                    </div>
                    <button className="btn-login" type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        INICIAR
                    </button>
                    </form>
                </Container>
                
            </Modal>
            </div>
    )
}

export default ModalLogin;
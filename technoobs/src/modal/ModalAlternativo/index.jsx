import Modal from "react-modal"
import { useContext, useState } from "react";
import { LoginContext } from "../../providers/Login/index";
import { Container } from "./style.js";
import background from "../../assets/background.png";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";
import { Link, Redirect, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services";
import Input from "../../components/Input";

const ModalLogin = ({ authenticated, setAuthenticated }) => {
  const { modalIsOpen, handleIsOpen, handleIsClose } = useContext(LoginContext);

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("isso nao parece um email")
      .required("Preencha um email!"),
    password: yup.string().required("Insira uma senha valida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password, checkout }) => {
    const data = { email, password };

    api
      .post("/login", data)
      .then((response) => {
        console.log(response);
        const { accessToken } = response.data;
        localStorage.setItem("token", JSON.stringify(accessToken));

        toast.success("Seja bem vindo!");

        history.push(checkout);

        return handleIsClose();
      })
      .catch((err) => toast.error(" Dados incorretos!"));
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <button onClick={handleIsOpen}>Modal</button>

      <Modal isOpen={modalIsOpen} onRequestClose={handleIsClose}
      style={{
      overlay: {
     
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

    },
    content: {
      position: 'absolute',
      paddin: '0',
      margin: '0',
      border: 'none',
      background: 'none', 
      width: 'Hug',
      height: 'auto'
    }
    
  }}>
          
        <div className="img">
          <Container>
            <MdCancel onClick={handleIsClose}></MdCancel>

            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>LOGIN</h2>

                <label>EMAIL:</label>
              <div className="user-box">
                <Input register={register} nome="email" />
                <span>{errors.email?.message}</span>
              </div>
                <label>SENHA:</label>
              <div className="user-box">
                <Input type="password" register={register} nome="password" />
                <span>{errors.password?.message}</span>
              </div>
              <div className="checkout">
                <input
                  {...register("checkout")}
                  type="radio"
                  name="checkout"
                  id=""
                  value="/candidate"
                />
                <label>LOGIN AS DEV</label>
              </div>
              <div className="checkout">
                <input
                  {...register("checkout")}
                  type="radio"
                  name="checkout"
                  id=""
                  value="/recruiter"
                />
                <label>LOGIN AS COMPANY</label>
              </div>

              <button type="submit">LOGAR</button>
            </form>
          </Container>
        </div>
      </Modal>
    </div>
  );
};
export default ModalLogin;

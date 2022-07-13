import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";
import { useHistory } from "react-router-dom";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [dataRecruiter, setDataRecruiter] = useState({});

  const history = useHistory();

  function submitRegister({
    name,
    bio,
    email,
    site,
    username,
    func,
    password,
  }) {
    let type = { type: "company" };

    const dataRecruiter = {
      name,
      bio,
      email,
      site,
      username,
      func,
      password,
      ...type,
    };
    console.log(dataRecruiter);
    api
      .post("register", dataRecruiter)
      .then((response) => {
        console.log(response);

        const { accessToken } = response.data;
        localStorage.setItem("token", JSON.stringify(accessToken));
        toast.success("Conta criada com sucesso, seja bem vindo(a)!");

        return history.push("/recruiter");
      })
      .catch((err) => console.log(err), toast.error(" Dados incorretos!"));
  }

  return (
    <CompanyContext.Provider value={{ submitRegister }}>
      {children}
    </CompanyContext.Provider>
  );
};

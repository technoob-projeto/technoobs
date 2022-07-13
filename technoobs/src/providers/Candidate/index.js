import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";
import {useHistory} from "react-router-dom"

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [candidate, setCandidate] = useState({});
 
  const history = useHistory()

  function submitRegister({name, bio, email, site, username, func, password, JavasScript, CSS, PHP, Python} ) {
    
    let type = { type: "candidate", myJobs:[]  };
    const skills = {JavasScript, CSS, PHP, Python };
    
    const dataCandidate = {name, bio, email, site, username, func, password, skills, ...type };
    console.log(dataCandidate)
    api
      .post("register", dataCandidate)
      .then((response) => {
       console.log(response)
      
  const { accessToken } = response.data;
        localStorage.setItem("token", JSON.stringify(accessToken));
        toast.success("Conta criada com sucesso, seja bem vindo(a)!");

        return history.push("/candidate");
      })
      .catch((err) => console.log(err), toast.error(" Dados incorretos!"));
  }

  candidate && submitRegister(candidate);

  return (
    <CandidateContext.Provider value={{ setCandidate}}>
      {children}
    </CandidateContext.Provider>
  );
};

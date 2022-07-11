import { createContext, useState } from "react";

export const CompanyContext = createContext([]);

export const CompanyProvider = ({ children }) => {
   const [dataRecruiter, setDataRecruiter] = useState({});


   
    function submitRegister(dataRecruiter){

     
      }
     
     dataRecruiter && submitRegister()

     
     
     
  return (
    <CompanyContext.Provider value={{setDataRecruiter}}>
      {children}
    </CompanyContext.Provider>
  );
};

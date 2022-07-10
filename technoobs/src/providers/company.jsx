import { createContext, useState } from "react";

export const CompanyContext = createContext([]);

export const CompanyProvider = ({ children }) => {
  // const [dataCompany, setdataCompany] = useState([]);

  return (
    <CompanyContext.Provider value={{}}>
      {children}
    </CompanyContext.Provider>
  );
};

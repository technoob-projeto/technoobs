import { createContext, useState } from "react";

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [candidate, setCandidate] = useState([]);
  

  return (
    <CandidateContext.Provider value={{ setCandidate}}>
      {children}
    </CandidateContext.Provider>
  );
};

import { createContext, useState } from "react";

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  // const [cadidate, setCandidate] = useState([]);

  return (
    <CandidateContext.Provider value={{ }}>
      {children}
    </CandidateContext.Provider>
  );
};

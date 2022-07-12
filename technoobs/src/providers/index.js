import { LoginProvider } from "../providers/Login/index";
import { CandidateProvider } from "../providers/Candidate";
import { CompanyProvider } from "./Company";

const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <CandidateProvider>
        <CompanyProvider>{children}</CompanyProvider>
      </CandidateProvider>
    </LoginProvider>
  );
};

export default Providers;

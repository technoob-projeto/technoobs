import { LoginProvider } from "./login";
import { CandidateProvider } from "./candidate/candidate";
import { CompanyProvider } from "./company/company";

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

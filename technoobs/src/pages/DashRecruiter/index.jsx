import Button from "../../components/Button/Button";
import { DashStyle } from "./styles";
import { FcSearch } from "react-icons/fc";
import { JobCard } from "../../components/jobCard";
import { DevCardCristiano } from "../../components/DevCards/DevCardCristiano";
import { DevCardJoao } from "../../components/DevCards/DevCardJoao";
import { DevCardNeo } from "../../components/DevCards/DevCardNeo";
import { DevCardPedrinho } from "../../components/DevCards/DevCardPedrinho";

function DashRecruiter({ Authenticated, setAuthenticated }) {
  return (
    <DashStyle>
      <div className="div__container__content">
        <div>
          <input className="input__pesquisa" placeholder="Search"></input>
          <FcSearch size={32} />
        </div>
        <div className="div__container--button">
          <Button text="Add Task" color="green" />
          <Button text="Add Job" color="green" />
        </div>
      </div>
      <div className="div__container__job-card">
        <JobCard />
        <div className="centraliza_devCard">

          <div className="div__container__candidateCard">
            <DevCardCristiano />
            <DevCardJoao />
            <DevCardNeo />
            <DevCardPedrinho />
          </div>
        </div>
      </div>
    </DashStyle>
  );
}
export default DashRecruiter;

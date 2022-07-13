import Input from "../../components/Input";
import Button from "../../components/Button/Button";
import { DashStyle } from "./styles";
import { FcSearch } from "react-icons/fc";

function DashRecruiter({Authenticated, setAuthenticated}) {
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
        <div className="div__container__candidateCard">

      </div>

      </div>
    </DashStyle>
  );
}
export default DashRecruiter;

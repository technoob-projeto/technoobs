import { DashStyle } from "./styles";
import { FcSearch } from "react-icons/fc";
import { DevCard } from "../../components/DevCard";

import ButtonCards from "../../components/ButtonCards/Button";
import {useState} from 'react'
import { JobCardMagazine } from "../../components/jobCardMagazine";
import { JobCardPicPay } from "../../components/jobCardPicPay";
import { JobCardNuBank } from "../../components/jobCardNuBank";
import { JobCardInter } from "../../components/jobCardInter";
import { TaskCardBMG } from "../../components/TaskCardBMG";
import { TaskCardItau } from "../../components/TaskCardItau";
function DashCandidate({ Authenticated, setAuthenticated }) {
      const [isTask, setIsTask] = useState(true);

      function task() {
        setIsTask(false);

      }
      function job() {
        setIsTask(true);

      }
  return (
    <DashStyle>
      <div className="container__input__buttons">
        <div className="pesquisar">
          <input className="input__pesquisa" placeholder="Search"></input>
          <FcSearch className="lupa" size={70} />
        </div>
          <div className="jobs__tasks">
          <ButtonCards callback={task} text="Jobs" color="orange"/>
          <ButtonCards callback={job}text="Taks" color="orange"/>
          </div>
      </div>
       
        <div className="main__container">
          
          <div className="job">
            {  isTask ?
              (
                <>
                  <JobCardMagazine />
                  <JobCardPicPay />
                  <JobCardNuBank />
                  <JobCardInter />
                </>
              )
              :
              (
                <>
                  <TaskCardBMG />
                  <TaskCardItau />
                </>
              )
            }
            
           
          </div>

          <div className="devCard">
            <DevCard />
           
          </div>
        </div>
      
    </DashStyle>
  );
}
export default DashCandidate;

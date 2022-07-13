import Button from "../../components/Button/Button";
import { DashStyle } from "./styles";
import { FcSearch } from "react-icons/fc";
import { DevCard } from "../../components/DevCard";
import { JobCard } from "../../components/jobCard";
import { TaskCard } from "../../components/taskCard";

import ButtonCards from "../../components/ButtonCards/Button";
import {useState} from 'react'
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
          <input className="input__pesquisa" placeholder="Search"></input>
          <FcSearch size={32} />
          <div>
          <ButtonCards callback={task} text="Jobs" color="orange"/>
          <ButtonCards callback={job}text="Taks" color="orange"/>
          </div>
      </div>
       
        <div className="main__container">
          
          <div className="job">
            {  isTask ?
              (<JobCard />) :
              (<TaskCard/>)
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

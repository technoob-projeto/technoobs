import styled from "styled-components";

export const DashStyle = styled.div`
width: 102.5%;
height: 150%;
margin-top: -40px;
background-color: #002A32;



.div__container--button{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 30px;
    padding-right: 55px;
    
    
}
.input__pesquisa{
    width: 350px;
    height: 50px;
    font-size: 35px;
    margin-left: 5%;
    margin-top: 30px;
    padding-left: 10px;
    border-radius: 16px;
    
    
  
}
svg {
   position: absolute;
   margin-left: 340px;
   margin-top: -42px;
   cursor: pointer;

}

.div__container__content{
display: flex;
justify-content: space-between;
margin-top: 3%;


}

.div__container__job-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 50px auto;
    border: solid 2px;
    border-radius: 15px;
    background-color: #3B603A;
}

.centraliza__devCards{
    display: flex;
    flex-direction: row;
    width: 100%;
}

.div__container__candidateCard {
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    margin: 10px 10px 15px 20px;


    border-radius: 40px;
}

@med
`
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: linear-gradient(180deg, #433882 0%, rgba(67, 56, 130, 0.541667) 99.99%, rgba(67, 56, 130, 0) 100%);
        border: 3px solid #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        width: 80vw;
        height: 40vh;
    }

    div button.remove__modal{
        width: 20px;
        height: 20px;
        border: none;
        position: absolute;
        left: 345px;
        top: 275px;
        background-color: #433882;
    }

    .inputs{
        display: flex;
        flex-direction: column;
    }

    .checkboxs{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    span{
        margin-left: 75px;
    }

    button{
        color: white;
        background-color: #179AB1;
        width: 160px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
    
        :hover{
            background-color: #179AA9;
        }
    }

    .hidden{
        display: none;
    }
`
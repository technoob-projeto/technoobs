import styled from "styled-components";

export const RecruiterStyleForm = styled.form`
width:100%;
height: 50%;

margin-top: 6%;

background-color: #433882;
opacity: .8;

h2{
    font-size: 42px;
    font-family: "VT323", monospace;
    text-align: center;
    color: #d9d9d9;
    margin-bottom: 3%;

}

button{
    margin-left: 38%;
    margin-top: 3%;
    
}
span{
    font-size: 30px;
    color: #d9d9d9	;
}
`
export const InputContainerDad = styled.div`
display: flex;
justify-content: center;
gap: 3rem;
`
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

`

export const LabelStyle = styled.label`
font-size: 1.8rem;
font-family: "VT323", monospace;
color: #d9d9d9;
margin-right: auto;

`
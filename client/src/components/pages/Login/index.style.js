import styled from "styled-components";
import { Form, Field } from "formik";


export const StyledPage = styled.div`
  margin-right: 40%;
  padding-top: 15vh;
`;

export const Styleddiv = styled.div`
width: 100%;
height:70px;
left: 87px;
top: 79px;
border: 1px solid;
color:white;
padding: 10px;
`;

export const StyledDiv = styled.div`
display: flex;
flex-direction:column;
width:40%;
position:fixed;
float:right;
background-image: linear-gradient(-180deg, rgba(25,179,212,1), rgba(255,255,255,0));
background-color:  #4BC0D8;
height:100vh;
padding: 0;
`;
export const Styleddivv = styled.div`
display: flex;
flex-direction:column;
`;

export const StyledLogo= styled.img`
width:60%;
align-self:center;
border-radius: 70%;
width:40%;
margin-top:50%;
`;

export const StyledBgLogo= styled.img`
position:absolute;
bottom:0;
right:0;
width:100%;
margin-right:100px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: columns;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  margin-top: 80px;
  margin-left: 50px;
  margin-buttom: 100px;
`;
export const Title = styled.h1`
  font-weight: 600;
  color: #19B3D4;
  font-size: 2.2em;
`;

export const StyledLabel = styled.label`
  width: 47%;
`;

export const StyledField = styled(Field)`
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  height: 30px;
  border-radius: 50px;
  border-color: #08a3c3;

  ::placeholder {
    padding-right: 27px;
  }
`;

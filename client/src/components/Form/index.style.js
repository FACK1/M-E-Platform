import styled from "styled-components";
import { Form, Field } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;
export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top:80px;
  margin-left:50px;
  margin-buttom:100px;

`;

export const StyledField = styled(Field)`
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 200px;
  height: 30px;
  border-radius: 50px;
  border-color:#08A3C3;

  ::placeholder {
    padding-right: 27px;
  }
`;

export const StyledLabel = styled.label`
  width: 49%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledButton = styled.button`
border: 1px solid #ccc;
width: 200px;
height: 30px;
border-radius: 50px;
background-color:#08A3C3;
text-align: center;
color:white;
margin-top:15px;
margin-left:500px;
`;
export const StyledDatePicker = styled(DatePicker)`
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 200px;
  height: 30px;
  border-radius: 50px;
  border-color:#08A3C3;

  ::placeholder {
    padding-right: 27px;
  }
`;

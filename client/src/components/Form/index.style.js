import styled from "styled-components";
import { Form, Field } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  flex-direction: columns;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  margin-top:80px;
  margin-left:50px;
  margin-buttom:100px;
`;

export const StyledLabel = styled.label`
  width: 49%;
`;


export const StyledField = styled(Field)`
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  height: 30px;
  border-radius: 50px;
  border-color:#08A3C3;

  ::placeholder {
    padding-right: 27px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  height: 30px;
  border-radius: 50px;
  border-color:#08A3C3;
  display: block;
  ::placeholder {
    padding-right: 27px;
  }
`;

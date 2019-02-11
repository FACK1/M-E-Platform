import styled from 'styled-components';
import { Form, Field} from "formik";
import DatePicker from 'react-datepicker';


export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
  `;
  export const StyledForm = styled(Form)`
  display:flex;


  `;

  export const StyledField = styled(Field)`
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
    width: 200px;
    height: 30px;
    border-radius: 50px;

    ::placeholder {
      padding-right:27px;
    }
`;


export const StyledLabel = styled.label`
width:49%;
`;


export const StyledContainer = styled.div`
display:flex;
flex-direction:column;
`;
export const StyledButton = styled.button`
display:block;
`;
export const StyledDatePicker = styled(DatePicker)`
height: 35px;
border: 1px solid #ccc;
background-color: #fff;
width: 200px;
height: 30px;
border-radius: 50px;
::placeholder {
  padding-right:27px;
}`
;

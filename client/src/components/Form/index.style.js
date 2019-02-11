import styled from 'styled-components';
import { Form, Field} from "formik";


export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
  `;
  export const StyledForm = styled(Form)`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  background:blue;
  position: absolute;
  width: 70%;
  margin: 0px 15% 0px 15%;

  `;

  export const StyledField = styled(Field)`
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;



  `;
export const StyledLabel = styled.label`
width:49%;
`;

export const StyledInput = styled.div`
width:30%;
`;

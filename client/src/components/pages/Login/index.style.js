import styled from "styled-components";
import { Form, Field } from "formik";

export const Title = styled.h1`
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const StyledPage = styled.div`
  margin-right: 25%;
  padding-top: 15vh;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  flex-direction: columns;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  margin-top: 80px;
  margin-left: 50px;
  margin-buttom: 100px;
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

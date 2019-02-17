import React, { Component } from "react";
import axios from 'axios';
import Header from "../../Header";
import MainForm from '../../Form'
import {Title, StyledPage} from "./index.style";

class CreateProgram extends Component {

  getFieldList() {
    const fields = [
      {
        label: "اسم البرنامج",
        type: "text",
        name: "programName",
        placeholder: "اسم البرنامج",
      },{
        label: "اسم المؤسسة",
        type: "text",
        name: "companyName",
        placeholder: "اسم المؤسسة",
      }
    ];
    return fields;
  }

  submitAction(values) {
    axios.post('/CreateProgram', values);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <Title> انشئ برنامجا جديداً </Title>
          <MainForm fields={this.getFieldList()} action={this.submitAction} operationName="  انشاء برنامجا جديداً" />
        </StyledPage>
        </React.Fragment>
    );
  }
}
export default CreateProgram;

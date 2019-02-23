import React, { Component } from "react";
import axios from 'axios';
import Header from "../../Header";
import MainForm from '../../Form'
import {Title, StyledPage} from "./index.style";

class CreateProgram extends Component {

  submitAction(values) {
    return new Promise((resolve, reject) => {
      axios.post('/programs', values)
        .then(({ data }) => {
          if(data.success){
            resolve('تمت اضافة البرنامج بنجاح');
          } else {
            reject(new Error(data.err));
          }
        });
    });
  }

  render() {
    const fields = [
      {
        label: "اسم البرنامج",
        type: "text",
        name: "name",
        placeholder: "اسم البرنامج",
      },{
        label: "اسم المؤسسة",
        type: "text",
        name: "organization",
        placeholder: "اسم المؤسسة",
      }
    ];
    const initialValues = { name: '', organization: '' };
    return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <Title> انشئ برنامجا جديداً </Title>
          <MainForm fields={fields} action={this.submitAction} operationName="انشاء برنامجا جديداً" initialValues={initialValues} />
        </StyledPage>
        </React.Fragment>
    );
  }
}
export default CreateProgram;

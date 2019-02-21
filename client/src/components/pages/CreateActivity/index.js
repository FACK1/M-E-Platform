import React, { Component } from "react";
import axios from 'axios';
import Header from "../../Header";
import MainForm from '../../Form'
import {Title, StyledPage} from "./index.style";

class CreateActivity extends Component {

  state={
    programs:[],
    objectives:[],
    initialValues: {
      name: '', trainerName: '', hours: 0,
    },
  };

  programOptions(){
    return this.state.programs.map((p) => {
      return { label:p.name , value:p.id };
    });
  }

  objectiveOptions(){
    return this.state.objectives.map((o) => {
      return { label:o.name , value:o.id };
    });
  }

  getFieldList() {
    const fields = [
      {
        label: "اسم النشاط",
        type: "text",
        name: "name",
        placeholder: "اسم النشاط",
      },
      {
        label: "اختر الهدف",
        name: "objective",
        component: "select",
        type: "select",
        options: this.objectiveOptions()
      },
      {
        label: "اسم المدرب",
        type: "text",
        name: "trainerName",
        placeholder: "اسم المدرب",
      },
      {
        label: "اختر البرنامج",
        name: "program",
        component: "select",
        type: "select",
        options: this.programOptions()
      },
      {
        label: "عدد الساعات",
        type: "text",
        name: "hours",
        placeholder: "عدد الساعات",
      },
      {
        label: "اختر المكان",
        name: "location",
        type: "text",
      },
      {
        label: "الناريخ من",
        name: "startDate",
        type: "datePicker",
        placeholderText: "اختر التاريخ",
      },
      {
        label: "الناريخ الى",
        name: "endDate",
        type: "datePicker",
        placeholderText: "اختر التاريخ",
      }
    ];
    return fields;
  }

  componentDidMount() {
   axios
     .get("/programs")
     .then(({data}) => {
       if (data.success) {
       const result =data.data;
       this.setState({programs:result, initialValues: { ...this.state.initialValues, program: result[0].id }});
     }
     }).catch(() => {
       alert("error");
     });

     axios
       .get("/objectives")
       .then(({data}) => {
         if (data.success) {
         const result =data.data;
         this.setState({objectives:result, initialValues: { ...this.state.initialValues, objective: result[0].id}});
       }
       }).catch(() => {
         alert("error");
       });
 }

  submitAction(values) {
    axios.post('/activities', values);
    // TODO: Handle the response and make an action depending on success state.
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <Title>  انشئ نشاطا جديداً </Title>
          <MainForm fields={this.getFieldList()} action={this.submitAction} operationName="انشاء نشاط جديد" initialValues={this.state.initialValues} />
        </StyledPage>
        </React.Fragment>
    );
  }
}
export default CreateActivity;

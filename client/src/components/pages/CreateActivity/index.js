import React, { Component } from "react";
import Header from "../../Header";
import MainForm from '../../Form'
import {Title, StyledPage} from "./index.style";

class CreateActivity extends Component {

  getFieldList() {
    const fields = [
      {
        label: "اسم النشاط",
        type: "text",
        name: "ActivityName",
        placeholder: "اسم النشاط",
      },
      {
        label: "اختر الهدف",
        name: "selectObj",
        component: "select",
        type: "select",
        options: [
          {
            label: "الهدف الاول",
            value: "obj1",
          },
          {
            label: "الهدف الثاني",
            value: "obj2",
          },
        ]
      },
      {
        label: "اسم المدرب",
        type: "text",
        name: "tranierName",
        placeholder: "اسم المدرب",
      },
      {
        label: "اختر البرنامج",
        name: "selectProgram",
        component: "select",
        type: "select",
        options: [
          {
            label: "البرنامج الاول",
            value: "Program1",
          },
          {
            label: "البرنامج الثاني",
            value: "Program2",
          },
          {
            label: "البرنامج الثالث",
            value: "Program3",
          },
        ]
      },
      {
        label: "عدد الساعات",
        type: "text",
        name: "NumOH",
        placeholder: "عدد الساعات",
      },
      {
        label: "اختر المكان",
        name: "selectPlace",
        component: "select",
        type: "select",
        options: [
          {
            label: "مدينة",
            value: "Place1",
          },
          {
            label: "بلدة",
            value: "Place2",
          },
        ]
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

  render() {
    return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <Title>  انشئ نشاطا جديداً </Title>
          <MainForm fields={this.getFieldList()} />
        </StyledPage>
        </React.Fragment>
    );
  }
}
export default CreateActivity;

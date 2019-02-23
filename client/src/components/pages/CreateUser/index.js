import React, { Component } from "react";
import axios from 'axios';
import Header from "../../Header";
import MainForm from '../../Form'
import {Title, StyledPage} from "./index.style";

class CreateUser extends Component {

  submitAction(values) {
    return new Promise((resolve, reject) => {
      axios.post('/users', values)
        .then(({ data }) => {
          if(data.success){
            resolve();
          } else {
            console.log("Error happen, rejected");
            reject(new Error(data.err));
          }
        }).catch((err) => {
          console.log(err);
          reject(err);
      })
    });
  }

  render() {
    const fields = [
      {
        label: "الاسم الثلاثي",
        type: "text",
        name: "name",
        placeholder: "ادخل اسمك الثلاثي",
      },
      {
        label: " الايميل",
        type: "text",
        name: "email",
        placeholder: "الايميل",
      },
      {
        label: "اختر النوع",
        name: "type",
        component: "select",
        type: "select",
        options: [
          {
            label: "ادمن",
            value: "admin",
          },
          {
            label: "موظف",
            value: "employee",
          },
          {
            label: "معلم",
            value: "trainer",
          },
          {
            label: "طالب",
            value: "student",
          }
        ]
      },
      {
        label: "مكان السكن",
        component: "select",
        type: "select",
        name: "living",
        options: [
          {
            label: "المدينة",
            value: "city",
          },
          {
            label: "القرية",
            value: "village",
          },
          {
            label: "مخيم",
            value: "camp",
          },
        ]
      },
      {
        label: "العنوان",
        type: "text",
        name: "address",
        placeholder: "العنوان",
      },
      {
        label: "اختر الجنس",
        component: "select",
        type: "select",
        name: "gender",
        options: [
          {
            label: "ذكر",
            value: "male",
          },
          {
            label: "أنثى",
            value: "female",
          },
        ]
      },
      {
        label: "رقم الموبايل",
        type: "text",
        name: "phoneNo",
        placeholder: "رقم الموبايل",
      },
      {
        label: "تاريخ الميلاد",
        name: "dateOfBirth",
        type: "datePicker",
        placeholderText: "تاريخ الميلاد",
      },
    ];
    const initialValues = {
      name: '',
      email: '',
      type: 'admin',
      living: 'city',
      address: '',
      gender: 'male',
      phoneNo: '',
    };
    return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <Title>إضافة مستخدم جديد </Title>
          <MainForm fields={fields} action={this.submitAction} operationName="إضافة مستخدم جديد" initialValues={initialValues} />
        </StyledPage>
        </React.Fragment>
    );
  }
}
export default CreateUser;

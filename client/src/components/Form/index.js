import React, { Component } from "react";
import { Formik } from "formik";
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledButton,
  StyledDatePicker
} from "./index.style";
import "./index.css";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: ""
    };
  }

  handleStartDate = date => {
    this.setState({
      startDate: date
    });
  };
  handleEndDate = date => {
    this.setState({
      endDate: date
    });
  };



  renderFields() {
    return this.props.fields.map((f) => {

    });
  };







  render() {
    return (
      <Formik>
        <StyledForm>
            <StyledLabel>اسم النشاط
            <StyledField
              type="text"
              name="ActivityName"
              placeholder="اسم النشاط"
            />
            </StyledLabel>
            <StyledLabel>
              اختر الهدف
              <StyledField component="select" name="selectObj">
                <option value="obj1"> الهدف الاول</option>
                <option value="obj2"> الهدف الثاني</option>
              </StyledField>
            </StyledLabel>
            <StyledLabel>
              التاريخ من
              <StyledDatePicker
                placeholderText="اختر تاريخ"
                selected={this.state.startDate}
                onChange={this.handleStartDate}
              />
            </StyledLabel>
            <StyledLabel>
              اسم المدرب
              <StyledField
                type="text"
                name="tranierName"
                placeholder="اسم المدرب"
              />
            </StyledLabel>
            <StyledLabel>
              اختر البرنامج
              <StyledField component="select" name="selectProgram">
                <option value="Program1"> البرنامج الاول</option>
                <option value="Program2"> البرنامج الثاني</option>
                <option value="Program3">البرنامج الثاني</option>
              </StyledField>
            </StyledLabel>
            <StyledLabel>
              عدد الساعات
              <StyledField type="text" name="NumOH" placeholder="عدد الساعات" />
            </StyledLabel>

            <StyledLabel>
              الى
              <StyledDatePicker
                placeholderText="اختر تاريخ"
                selected={this.state.endDate}
                onChange={this.handleEndDate}
              />
            </StyledLabel>
            <StyledLabel>
              اختر المكان
              <StyledField component="select" name="selectPlace">
                <option value="Place1"> مدينة</option>
                <option value="Place2"> بلدة</option>
              </StyledField>
            </StyledLabel>
          <StyledButton>انشاء</StyledButton>
        </StyledForm>
      </Formik>
    );
  }
}

export default MainForm;

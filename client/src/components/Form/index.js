import React, { Component } from "react";
import { Formik } from "formik";
import axios from 'axios';

import Button from '../Button/index';
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledContainer,
  StyledDatePicker,
  StyledContainerBtn
} from "./index.style";

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

  handleChange= ({target:{name,value}})=> {
    this.setState({
      [name]: value
    })
  };

  handleClick =()=>{
    axios.post('/activities',this.state)
  };

  render() {
      return (
        <Formik  onSubmit={this.handleClick}>
          <StyledForm>
            <StyledContainer>
              <StyledLabel>اسم النشاط</StyledLabel>
              <StyledField
                type="text"
                name="name"
                placeholder="اسم النشاط"
                value={this.state.name}
                onChange={this.handleChange}
              />
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
              <StyledLabel>اسم المدرب</StyledLabel>
              <StyledField
                type="text"
                name="trainerName"
                placeholder="اسم المدرب"
                value={this.state.trainerName}
                onChange={this.handleChange}
              />
              </StyledContainer>
            <StyledContainer>
              <StyledLabel>
                اختر البرنامج
                <StyledField component="select" name="selectProgram">
                  <option value="Program1"> البرنامج الاول</option>
                  <option value="Program2"> البرنامج الثاني</option>
                  <option value="Program3">البرنامج الثاني</option>
                </StyledField>
              </StyledLabel>
              <StyledLabel>عدد الساعات</StyledLabel>
              <StyledField
                type="text"
                name="hours"
                placeholder="عدد الساعات"
                value={this.state.hours}
                onChange={this.handleChange}
              />

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
            </StyledContainer>
            <StyledContainerBtn>
            <Button/>
            </StyledContainerBtn>

          </StyledForm>
        </Formik>
      );
    }


}

export default MainForm;

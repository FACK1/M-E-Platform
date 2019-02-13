import React, { Component } from "react";
import { Formik } from "formik";

import Button from '../Button/index';
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledButton,
  StyledDatePicker,
} from "./index.style";
import "./index.css";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {fieldsValues: {}};
    this.renderFields = this.renderFields.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  static getSelectOptions(options) {
    return options.map((o) => {
      return <option value={o.value}> {o.label}</option>;
    });
  }

  renderFields() {
    const renderedFields = this.props.fields.map((f) => {
      switch (f.type) {
        case 'text':
          return <StyledLabel>{f.label}
            <StyledField
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              onChange={event => {this.updateState(f.name, event.target.value)}}
            />
          </StyledLabel>;

        case 'select':
          return <StyledLabel>
            {f.label}
            <StyledField component={f.component} name={f.name} onChange={event => {this.updateState(f.name, event.target.value)}}>
              {MainForm.getSelectOptions(f.options)}
            </StyledField>
          </StyledLabel>;

        case 'datePicker':
          return <StyledLabel>
            {f.label}
            <StyledDatePicker
              placeholderText={f.placeholderText}
              onChange={date => { this.updateState(f.name, date) }}
            />
          </StyledLabel>;
      }
    });
    //this.setState({fieldsValues: fieldsNames});
    return renderedFields;
  }

  updateState(name, value) {
    const newFieldValue = (this.state.fieldsValues);
    newFieldValue[name] = value;
    this.setState({fieldsValues: newFieldValue});
    console.log(this.state);
  }


/*  handleChange= ({target:{name,value}})=> {
    this.setState({
      [name]: value
    })
  };*/

/*  handleClick =()=>{
    axios.post('/activities',this.state)
  };*/

  render() {
    return (
      <Formik onSubmit={() => { console.log("Hello"); this.props.action(this.state.fieldsValues)}}>
        <StyledForm>
          {this.renderFields()}
          <Button/>
        </StyledForm>
      </Formik>
    );
  }


/*      return (
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
      );*/

}

export default MainForm;

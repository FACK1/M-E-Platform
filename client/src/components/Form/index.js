import React, { Component } from "react";
import { Formik } from "formik";

import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledDatePicker,
  StyledButton
} from "./index.style";
import "./index.css";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = { dateFieldsValues: {} };
    this.renderFields = this.renderFields.bind(this);
    this.updateDatesState = this.updateDatesState.bind(this);
  }

  static getSelectOptions(options) {
    return options.map(o => {
      return <option value={o.value}> {o.label}</option>;
    });
  }

  renderFields() {
    const renderedFields = this.props.fields.map(f => {
      switch (f.type) {
        case "text":
          return (
            <StyledLabel>
              {f.label}
              <StyledField
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
              />
            </StyledLabel>
          );
        case "password":
          return (
            <StyledLabel>
              {f.label}
              <StyledField
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
              />
            </StyledLabel>
          );

        case "select":
          return (
            <StyledLabel>
              {f.label}
              <StyledField component={f.component} name={f.name}>
                {MainForm.getSelectOptions(f.options)}
              </StyledField>
            </StyledLabel>
          );

        case "datePicker":
          return (
            <StyledLabel>
              {f.label}
              <StyledDatePicker
                placeholderText={f.placeholderText}
                selected={this.state.dateFieldsValues[f.name] || Date.now()}
                onChange={date => {
                  this.updateDatesState(f.name, date);
                  const newDateFieldsValues = this.state.dateFieldsValues;
                  newDateFieldsValues[f.name] = date;
                  this.setState({ dateFieldsValues: newDateFieldsValues });
                }}
              />
            </StyledLabel>
          );
      }
    });
    return renderedFields;
  }

  updateDatesState(name, value) {
    const newFieldsValues = this.state.dateFieldsValues;
    newFieldsValues[name] = value;
    this.setState({ dateFieldsValues: newFieldsValues });
  }

  onFormSubmit = values => {
    //console.log("Values submitted ::", values);
    const fullValues = { ...this.props.initialValues, ...values };
    this.props.action({ ...fullValues, ...this.state.dateFieldsValues });
  };

  render() {
    return (
      <Formik
        onSubmit={this.onFormSubmit}
        initialValues={this.props.initialValues}
      >
        <StyledForm>
          {this.renderFields()}
          <StyledButton value={this.props.operationName} />
        </StyledForm>
      </Formik>
    );
  }
}

export default MainForm;

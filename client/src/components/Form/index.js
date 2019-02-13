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
    this.props = props;
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
    let fieldsNames = [];
    const renderedFields = this.props.fields.map((f) => {
      fieldsNames.push({[f.name]: null});
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
              onChange={date => { this.updateState(f.name, date.format()) }}
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


  render() {
    return (
      <Formik>
        <StyledForm>
          {this.renderFields()}
          <StyledButton>انشاء</StyledButton>
        </StyledForm>
      </Formik>
    );
  }
}

export default MainForm;

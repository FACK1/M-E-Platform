import React, { Component } from "react";
import "./index.css";
import Header from "../../Header";
import MainForm from '../../Form'

class CreateActivity extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <h1 className='title'>  انشئ نشاطا جديداً </h1>
        <MainForm />
        </React.Fragment>
    );
  }
}
export default CreateActivity;

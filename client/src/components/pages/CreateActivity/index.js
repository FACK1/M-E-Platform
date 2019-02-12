import React, { Component } from "react";
import Header from "../../Header";
import MainForm from '../../Form'
import {Title} from "./index.style";

class CreateActivity extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Title>  انشئ نشاطا جديداً </Title>
        <MainForm />
        </React.Fragment>
    );
  }
}
export default CreateActivity;

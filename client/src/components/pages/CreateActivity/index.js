import React, { Component } from "react";
import Header from "../../Header";
import MainForm from '../../Form'
import {Title, StyledPage} from "./index.style";

class CreateActivity extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <Title>  انشئ نشاطا جديداً </Title>
          <MainForm />
        </StyledPage>
        </React.Fragment>
    );
  }
}
export default CreateActivity;

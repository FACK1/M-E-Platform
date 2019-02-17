import React, { Component } from 'react';
import {Title,StyledPage} from "./index.style";
import Header from "../../Header";

 class CreateProgram extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <React.Fragment>
        <Header/>
        <StyledPage>
          <Title>  انشئ برنامجا جديداً </Title>
        </StyledPage>
        </React.Fragment>

     );
    }
  }

 export default CreateProgram;

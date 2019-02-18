import React, { Component } from 'react';
import {Title, StyledPage} from "./index.style";
import Header from "../../Header";



 class ProgramInformation extends Component {
  render() {
    return (
        <React.Fragment>
        <Header/>
        <StyledPage>
           <Title> تفاصيل البرنامج </Title>
        </StyledPage>
        </React.Fragment>

     );
    }
  }

 export default ProgramInformation;

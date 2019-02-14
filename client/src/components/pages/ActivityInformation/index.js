
import React, { Component } from 'react';
import {Title, StyledPage} from "./index.style";
import Header from "../../Header";



 class ActivityInformation extends Component {
  render() {
    return (
        <React.Fragment>
        <Header/>
        <StyledPage>
           <Title> تفاصيل النشاط </Title>
        </StyledPage>
        </React.Fragment>

     );
    }
  }

 export default ActivityInformation;

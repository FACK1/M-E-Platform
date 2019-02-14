
import React, { Component } from 'react';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"

 class ActivityInformation extends Component {


getActivityDetails(){
  return {
    name: "التدريب على القيادة",
    trainerName: "انس",
    place: "قاعة 1",
  };
}

  render() {
    return (
        <React.Fragment>
          <Header />
          <StyledActivityDetailsNav>
            <ActivityDetails details={this.getActivityDetails()} />
          </StyledActivityDetailsNav>
        </React.Fragment>

     );
    }
  }

 export default ActivityInformation;

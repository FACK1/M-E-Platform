import React, { Component } from 'react';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"

 class ActivityInformation extends Component {

  constructor(props) {
    super(props);
    //this.getActivityDetails = this.getActivityDetails.bind(this);
  }

  render() {
    return (
        <React.Fragment>
          <Header />
          <StyledActivityDetailsNav>
            <ActivityDetails activityId={this.props.match.params.id} />
          </StyledActivityDetailsNav>
          <StyledPage/>
        </React.Fragment>

     );
    }
  }

 export default ActivityInformation;

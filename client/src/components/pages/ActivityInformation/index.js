
import React, { Component } from 'react';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"
import axios from 'axios';

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
        </React.Fragment>

     );
    }
  }

 export default ActivityInformation;

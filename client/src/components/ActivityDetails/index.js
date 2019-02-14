import React, { Component } from "react";
import {StyledLiTitle, StyledDetail, StyledUl} from "./index.style";

class ActivityDetails extends Component {

  constructor(props){
    super(props);
    this.getTrainingDetails = this.getTrainingDetails.bind(this);
  }

getTrainingDetails() {
  const details = this.props.details;
  const renderedDetails = Object.keys(details).map((k) => {
    if(k === 'name'){
      return <StyledLiTitle>{details[k]}</StyledLiTitle>;
    } else {
      return <StyledDetail>{k}: {details[k]}</StyledDetail>;
    }
  });
  return renderedDetails;
}


  render() {
    return (
      <React.Fragment>
      <StyledUl>
        {this.getTrainingDetails()}
        </StyledUl>
      </React.Fragment>
    );
  }
}
export default ActivityDetails;

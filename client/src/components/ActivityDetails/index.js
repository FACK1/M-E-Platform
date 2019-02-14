import React, { Component } from "react";
import {StyledLiTitle, StyledDetailLi, StyledUl} from "./index.style";

class ActivityDetails extends Component {

  constructor(props){
    super(props);
    this.getTrainingDetails = this.getTrainingDetails.bind(this);
  }

getTrainingDetails() {
  const details = this.props.details;
  const renderedDetails = Object.keys(details).map((k) => {
    switch (k) {
      case 'name':
        return <StyledLiTitle>{details[k]}</StyledLiTitle>;
      case 'trainerName':
        return <StyledDetailLi>{"المدرب:"} {details[k]}</StyledDetailLi>;
      case 'place':
        return <StyledDetailLi>{"الموقع:"} {details[k]}</StyledDetailLi>;
      case 'hours':
        return <StyledDetailLi>{"عدد الساعات:"} {details[k]}</StyledDetailLi>;
      case 'startDate':
        return <StyledDetailLi>{"من تاريخ:"} {details[k]}</StyledDetailLi>;
      case 'endDate':
        return <StyledDetailLi>{"حتى تاريخ:"} {details[k]}</StyledDetailLi>;
      default:
        return <StyledDetailLi>{k}: {details[k]}</StyledDetailLi>;
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

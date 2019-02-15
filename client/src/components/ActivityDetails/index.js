import React, { Component } from "react";
import {StyledLiTitle, StyledDetailLi, StyledUl} from "./index.style";
import axios from 'axios';

class ActivityDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      renderedDetails: <div>Loading...</div>,
    };
    this.getActivityDetailsById = this.getActivityDetailsById.bind(this);
  }

  componentDidMount(){
    this.getActivityDetailsById();
  }


  getActivityDetailsById(){
    const { activityId } = this.props;
      axios.get('/activities/'+activityId)
        .then(({ data }) => {
          console.log("RESPONSE:", data);
          if(data.success){
            this.setState({ renderedDetails:  this.getTrainingDetails(data.data)});
          } else {
            alert("Error: "+data.err);
          }
        }).catch((err) => {
          alert("Error: " + err.message)
      });
  }



getTrainingDetails(detailsList) {
  const renderedDetails = Object.keys(detailsList).map((k) => {
    switch (k) {
      case 'name':
        return <StyledLiTitle>{detailsList[k]}</StyledLiTitle>;
      case 'trainerName':
        return <StyledDetailLi>{"المدرب:"} {detailsList[k]}</StyledDetailLi>;
      case 'place':
        return <StyledDetailLi>{"الموقع:"} {detailsList[k]}</StyledDetailLi>;
      case 'hours':
        return <StyledDetailLi>{"عدد الساعات:"} {detailsList[k]}</StyledDetailLi>;
      case 'startDate':
        return <StyledDetailLi>{"من تاريخ:"} {detailsList[k]}</StyledDetailLi>;
      case 'endDate':
        return <StyledDetailLi>{"حتى تاريخ:"} {detailsList[k]}</StyledDetailLi>;
      // default:
      //   return <StyledDetailLi>{k}: {details[k]}</StyledDetailLi>;
    }
  });
  return renderedDetails;
}



  render() {
    return (
      <React.Fragment>
      <StyledUl>
        {this.state.renderedDetails}
        </StyledUl>
      </React.Fragment>
    );
  }
}
export default ActivityDetails;

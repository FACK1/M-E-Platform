import React, { Component } from "react";
import axios from 'axios';
import {StyledLiTitle, StyledDetailLi, StyledUl} from "./index.style";

class ActivityDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      renderedDetails: <div>Loading...</div>,
    };
    this.getActivityDetailsById = this.getActivityDetailsById.bind(this);
    this.getTrainingDetails = this.getTrainingDetails.bind(this);
  }

  componentDidMount(){
    this.getActivityDetailsById();
  }


  getActivityDetailsById(){
    const { activityId } = this.props;
      axios.get('/activities/'+activityId)
        .then(({ data }) => {
          if(data.success){
            this.setState({ renderedDetails:  this.getTrainingDetails(data.data)});
          } else {
            alert("Error: "+data.err);
          }
        }).catch((err) => {
          alert("Error: " + err.message)
      });
  }

  dateParser(date){
    //console.log(new Date(date).toLocaleString());
    const isoDate = ((new Date(date).toLocaleString()).split(',')[0]).split('/');
    return (isoDate[2] + '/' + isoDate[0] + '/' + isoDate[1]);
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
        return <StyledDetailLi>{"من تاريخ:"} {this.dateParser(detailsList[k])}</StyledDetailLi>;
      case 'endDate':
        return <StyledDetailLi>{"حتى تاريخ:"} {this.dateParser(detailsList[k])}</StyledDetailLi>;
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

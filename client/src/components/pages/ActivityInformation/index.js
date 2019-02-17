import React, { Component } from 'react';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"
import Table from '../../Table';

 class ActivityInformation extends Component {

  constructor(props) {
    super(props);
  }

  getStudentsColumns() {
    const columns=[
      { Header:'id',accessor:'__id',show:false},
      { Header: 'اسم الطالب',accessor:'name'},
      { Header:'العمر',accessor:'trainerName'},
      { Header: 'الجنس',accessor:'hours'},
    ];
    return columns;
  }

  render() {
    const x = [];
    return (
        <React.Fragment>
          <Header />
          <StyledActivityDetailsNav>
            <ActivityDetails activityId={this.props.match.params.id} />
          </StyledActivityDetailsNav>
          <StyledPage>
            <Table columns={this.getStudentsColumns()} data={x}/>
          </StyledPage>
        </React.Fragment>

     );
    }
  }

 export default ActivityInformation;

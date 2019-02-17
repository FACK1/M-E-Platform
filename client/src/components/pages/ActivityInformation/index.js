import React, { Component } from 'react';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"
import Table from '../../Table';

 class ActivityInformation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props.match.params;
    const columns = [
      { Header:'id',accessor:'__id',show:false},
      { Header: 'اسم الطالب',accessor:'name'},
      { Header:'العمر',accessor:'age'},
      { Header: 'الجنس',accessor:'gender'},
    ];
    return (
        <React.Fragment>
          <Header />
          <StyledActivityDetailsNav>
            <ActivityDetails activityId={id} />
          </StyledActivityDetailsNav>
          <StyledPage>
            <Table columns={columns} data={[]}/>
          </StyledPage>
        </React.Fragment>

     );
    }
  }

 export default ActivityInformation;

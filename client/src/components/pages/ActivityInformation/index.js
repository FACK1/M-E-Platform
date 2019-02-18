import React, { Component } from 'react';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"
import Table from '../../Table';
import MainForm from '../../Form';

 class ActivityInformation extends Component {

  constructor(props) {
    super(props);
  }

  submitAction() {
    alert('Submitted');
  }

  render() {
    const { id } = this.props.match.params;
    const columns = [
      { Header:'id',accessor:'__id',show:false},
      { Header: 'اسم الطالب',accessor:'name'},
      { Header:'العمر',accessor:'age'},
      { Header: 'الجنس',accessor:'gender'},
    ];
    const fields = [
      {
        label: 'أضف طالباً للنشاط',
        type: 'text',
        name: 'userName',
        placeholder: 'اسسم الطالب'
      }
    ];
    return (
        <React.Fragment>
          <Header />
          <StyledActivityDetailsNav>
            <ActivityDetails activityId={id} />
          </StyledActivityDetailsNav>
          <StyledPage>
            <MainForm fields={fields} action={this.submitAction} operationName="إنشاء" />
            <Table columns={columns} data={[]}/>
          </StyledPage>
        </React.Fragment>

     );
    }
  }

 export default ActivityInformation;

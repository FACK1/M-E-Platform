import React, { Component } from 'react';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"
import Table from '../../Table';
import MainForm from '../../Form';
import axios from 'axios';

 class ActivityInformation extends Component {

  constructor(props) {
    super(props);
  }

  submitAction({ userName }) {
    axios.get('/users/searchByName/'+ userName)
      .then((response) => {
        if(response.data.success) {
          console.log(response.data.data);
        } else {
          console.log(response.data.err);
        }
      }).catch((err) => {
        console.log(err.message);
    });
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

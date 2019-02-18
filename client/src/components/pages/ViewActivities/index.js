import axios from 'axios';
import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Header from "../../Header";
import Table from "../../Table";
import {StyledPage, StyledTilte} from "./index.style";


class ViewActivities extends Component {

  state={
    result:[],
  };

  componentDidMount() {
   axios
     .get("/activities")
     .then(data => {
       const result = data.data;
       this.setState({result:result.data});
     }).catch(() => {
       alert("error");
     });
 }
  render() {
    const columns=[
      { Header:'id',accessor:'id', show:false},
      { Header: 'اسم النشاط',accessor:'name',
      Cell: ({ row, original }) => (<Link to={{pathname:`/ActivityInformation/${original.id}`}}>{row.name}</Link>)},
      { Header:'اسم المدرب',accessor:'trainerName'},
      { Header: 'عدد الساعات',accessor:'hours'},
      { Header: 'تاريخ البداية',accessor:'startDate'},
      { Header: 'تاريخ النهاية',accessor:'endDate'},
      { Header: 'الموقع',accessor:'location'},
      { Header:'البرنامج',accessor:'program'},
      { Header: 'الهدف',accessor:'objective'}];

          return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <StyledTilte> جميع الانشطة </StyledTilte>
          <Table columns={columns} data={this.state.result}/>
          <li><Link to="/CreateActivity">اضافة نشاط جديد</Link></li>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default ViewActivities;

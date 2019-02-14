import axios from 'axios';
import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Header from "../../Header";
import Table from "../../Table";
import {StyledPage, StyledTilte} from "./index.style";


class ViewActivities extends Component {

  state={
    result:[],
  }

  getColumnsList(){
    const columns=[
      { Header:'id',accessor:'__id',show:false},
      { Header: 'اسم النشاط',accessor:'name'},
      { Header:'اسم المدرب',accessor:'trainerName'},
      { Header: 'عدد الساعات',accessor:'hours'},
      { Header: 'تاريخ البداية',accessor:'startDate'},
      { Header: 'تاريخ النهاية',accessor:'endDate'},
      { Header: 'الموقع',accessor:'location'},
      { Header:'البرنامج',accessor:'program'},
      { Header: 'الهدف',accessor:'objective'}];
    return columns;
  }

  componentDidMount() {
   axios
     .get("/activities")
     .then(data => {
       const result = data.data;
       console.log("result",result);
       this.setState({result:result.data});
     }).catch(error => {
       console.log(error);
     });
 }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <StyledTilte> جميع الانشطة </StyledTilte>
          <Table columns={this.getColumnsList()} data={this.state.result}/>
          <li><Link to="/CreateActivity">اضافة نشاط جديد</Link></li>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default ViewActivities;

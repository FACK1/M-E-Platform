import axios from 'axios';
import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Header from "../../Header";
import Table from "../../Table";
import {StyledPage, StyledTilte} from "./index.style";


class ViewActivities extends Component {


  getColumnsList(){

    const columns=[
    { Header: 'اسم النشاط'},
    { Header:'اسم المدرب'},
    { Header: 'عدد الساعات'},
    { Header: 'تاريخ البداية'},
    { Header: 'تاريخ النهاية'},
    { Header: 'الموقع'},
    { Header:'البرنامج'},
    { Header: 'الهدف'}]
    return columns;
  }


  componentDidMount() {
   axios
     .get("/activities")
     .then(data => {
       const result = data.data;
       console.log("result",result.data);
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

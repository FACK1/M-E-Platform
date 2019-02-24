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
     .then(({data}) => {
       const result = data.data.map((activity)=>{
         activity.startDate= this.dateParser(activity.startDate);
         activity.endDate= this.dateParser(activity.endDate);
         return activity;
       });

       this.setState({result:result});
     }).catch(() => {
       alert("error");
     });
 }

 dateParser(date){
   const isoDate = ((new Date(date).toLocaleString()).split(',')[0]).split('/');
   return (isoDate[2] + '/' + isoDate[0] + '/' + isoDate[1]);
 }

  render() {
    const columns=[
      { Header:'id',accessor:'__id',show:false},
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
          <Link to="/CreateActivity">اضافة نشاط جديد</Link>
          <Table columns={columns} data={this.state.result}/>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default ViewActivities;

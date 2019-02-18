import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from "../../Header";
import { StyledPage, StyledTilte } from "./index.style";
import Table from "../../Table";


class ViewPrograms extends Component {
  state={
    result:[],
  };

  componentDidMount() {
   axios
     .get("/programs")
     .then(data => {
       const result = data.data;
       this.setState({result:result.data});
     }).catch(() => {
       alert("error");
     });
 }

  render() {
    const columns=[ 
      { Header:'id',accessor:'id',show:false},
      { Header: 'اسم البرنامج',accessor:'name'},
      { Header: 'اسم المؤسسة',accessor:'organization'},
];

    return (
      <React.Fragment>
        <Header />
        <StyledPage>
          <StyledTilte> جميع البرامج </StyledTilte>
          <li><Link to="/CreateProgram">إضافة برنامج جديد</Link></li>
          <Table columns={columns} data={this.state.result}/>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default ViewPrograms;

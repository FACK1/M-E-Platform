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
      { Header: 'اسم البرنامج',accessor:'name', Cell: ({ row, original }) => (<Link to={{pathname:`/ProgramInformation/${original.id}`}}>{row.name}</Link>)},
      { Header: 'اسم المؤسسة',accessor:'organization'},
];

    return (
      <React.Fragment>
        <Header />
        <StyledPage>
          <StyledTilte> جميع البرامج </StyledTilte>
          <Link to="/CreateProgram">إضافة برنامج جديد</Link>
          <Table columns={columns} data={this.state.result}/>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default ViewPrograms;

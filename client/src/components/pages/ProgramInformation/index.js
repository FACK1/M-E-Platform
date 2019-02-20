import React, { Component } from "react";
import { StyledPage, StyledProgramDetailsNav } from "./index.style";
import {Link} from 'react-router-dom'
import Header from "../../Header";
import ProgramDetails from "../../ProgramDetails";
import Table from "../../Table";

class ProgramInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props.match.params;
    const columns = [
      { Header: "id", accessor: "id", show: false },
      { Header: "اسم النشاط", accessor: "name" },
      { Header: "عدد الطلاب", accessor: "numberOfstudents" }
    ];
    return (
      <React.Fragment>
        <Header />
        <StyledProgramDetailsNav>
          <ProgramDetails programId={id} />
        </StyledProgramDetailsNav>
        <StyledPage>
        <li><Link to="/CreateActivity">إضافة نشاط جديد</Link></li>
        <Table columns={columns} data={[]} />
        </StyledPage>
      </React.Fragment>
    );
  }
}

export default ProgramInformation;

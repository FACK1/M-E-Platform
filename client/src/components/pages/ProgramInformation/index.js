import React, { Component } from "react";
import axios from "axios";
import { StyledPage, StyledProgramDetailsNav } from "./index.style";
import Header from "../../Header";
import ProgramDetails from "../../ProgramDetails";
import Table from "../../Table";

class ProgramInformation extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    result: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getActivitesByProgramId(id);
  }

  getActivitesByProgramId = programId => {
    axios
      .get(`/activities/getActivitesByProgramId/${programId}`)
      .then(response => {
        const result = response.data.activities;
        this.setState({result});
      })
      .catch(() => {
        alert("error");
      });
  };

  render() {
    const { id } = this.props.match.params;
    const columns = [
      { Header: "id", accessor: "id", show: false },
      { Header: "اسم النشاط", accessor: "name" },
      { Header: "عدد الطلاب", accessor: "usersCount" }
    ];
    return (
      <React.Fragment>
        <Header />
        <StyledProgramDetailsNav>
          <ProgramDetails programId={id} />
        </StyledProgramDetailsNav>
        <StyledPage>
          <Table columns={columns} data={this.state.result} />
        </StyledPage>
      </React.Fragment>
    );
  }
}

export default ProgramInformation;

import React, { Component } from "react";
import axios from "axios";
import { StyledDetailLi, StyledUl } from "./index.style";

class ProgramDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedDetails: <div>Loading...</div>
    };
    this.getProgramDetailsById = this.getProgramDetailsById.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.getProgramDetailsById();
  }

  getProgramDetailsById() {
    const { programId } = this.props;
    axios
      .get(`/programs/${programId}`)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ renderedDetails: this.getDetails(data.data) });
        } else {
          alert(`Error: ${data.err}`);
        }
      })
      .catch(err => {
        alert(`Error: ${err.message}`);
      });
  }

  getDetails(detailsList) {
    const renderedDetails = Object.keys(detailsList).map(key => {
      switch (key) {
        case "name":
          return (
            <StyledDetailLi>
              {"اسم البرنامج:"} {detailsList[key]}
            </StyledDetailLi>
          );
        case "organization":
          return (
            <StyledDetailLi>
              {"اسم المؤسسة:"} {detailsList[key]}
            </StyledDetailLi>
          );
      }
    });
    return renderedDetails;
  }

  render() {
    return (
      <React.Fragment>
        <StyledUl>{this.state.renderedDetails}</StyledUl>
      </React.Fragment>
    );
  }
}

export default ProgramDetails;

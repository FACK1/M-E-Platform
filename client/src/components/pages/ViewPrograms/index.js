import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Header from "../../Header";
import { StyledPage, StyledTilte } from "./index.style";

class ViewPrograms extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <StyledPage>
          <StyledTilte> جميع البرامج </StyledTilte>
          <li><Link to="/CreateProgram">إضافة برنامج جديد</Link></li>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default ViewPrograms;

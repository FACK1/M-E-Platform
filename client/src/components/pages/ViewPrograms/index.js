import React, { Component } from "react";
import Header from "../../Header";
import {StyledPage, StyledTilte} from "./index.style";


class ViewPrograms extends Component {

  render() {


          return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <StyledTilte> جميع البرامج </StyledTilte>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default ViewPrograms;

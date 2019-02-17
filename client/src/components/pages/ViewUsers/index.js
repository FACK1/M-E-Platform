import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Header from "../../Header";
import {StyledPage, StyledTilte} from "./index.style";


class ViewUsers extends Component {

  render() {
          return (
      <React.Fragment>
        <Header/>
        <StyledPage>
          <StyledTilte> جميع المستخدمين </StyledTilte>
          <li><Link to="/CreateUser">إضافة مستخدم جديد</Link></li>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default ViewUsers;

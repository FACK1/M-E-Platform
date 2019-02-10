import React, { Component } from "react";
import "./index.css";
import {Link} from 'react-router-dom'
import Header from "../../Header";


class CreateActivity extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <h1 className='title'> Create Activity </h1>
        <li><Link to="/contact">Contact</Link></li>

        </React.Fragment>
    );
  }
}
export default CreateActivity;

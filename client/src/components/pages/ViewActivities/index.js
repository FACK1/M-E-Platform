import React, { Component } from "react";
import "./index.css";
import {Link} from 'react-router-dom'
import Header from "../../Header";



class ViewActivities extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className='title'> View Activities </h1>
        <Header/>
        <li><Link to="/CreateActivity">Add New Activity</Link></li>

      </React.Fragment>
    );
  }
}
export default ViewActivities;

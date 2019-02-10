import React, { Component } from "react";
import "./index.css";
import CreateActivity from '../CreateActivity'


class ViewActivities extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className='title'> View Activities </h1>
        <CreateActivity/>
      </React.Fragment>
    );
  }
}
export default ViewActivities;

import React, { Component } from "react";
import "./index.css";
import Header from "../../Header";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className='title'> نادي بيت الطفل </h1>
        <Header/>
      </React.Fragment>
    );
  }
}
export default Home;

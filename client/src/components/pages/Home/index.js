import React, { Component } from "react";
import "./index.css";
import Header from "../../Header";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Header/>
        <h1 className='title'> نادي بيت الطفل </h1>
      </div>
    );
  }
}
export default Home;

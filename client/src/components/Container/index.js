import React, { Component } from "react";
import "./index.css";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/Home'
import ViewActivities from '../pages/ViewActivities'
import CreateActivity from '../pages/CreateActivity'



class Container extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route exact path='/' component={Home}/>
      <Route path='/ViewActivities' component={ViewActivities}/>
      <Route path='/CreateActivity' component={CreateActivity}/>
      </div>
      </Router>
    );
  }
}
export default Container;

import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages/Home'
import ViewActivities from './components/pages/ViewActivities'
import CreateActivity from './components/pages/CreateActivity'
import ActivityInformation from './components/pages/ActivityInformation'
import ViewUsers from './components/pages/ViewUsers'
import CreateUser from './components/pages/CreateUser'


class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} className="page"/>
        <Route path='/ViewActivities' component={ViewActivities}/>
        <Route path='/ViewUsers' component={ViewUsers}/>

        <Route path='/CreateActivity' component={CreateActivity}/>
        <Route path='/CreateUser' component={CreateUser}/>
        <Route path='/ActivityInformation/:id' component={ActivityInformation}/>
      </div>
      </Router>

    );
  }
}

export default App;

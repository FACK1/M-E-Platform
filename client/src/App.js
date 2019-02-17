import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages/Home'
import ViewActivities from './components/pages/ViewActivities'
import CreateActivity from './components/pages/CreateActivity'
import CreateUser from './components/pages/CreateUser'
import ViewUsers from './components/pages/ViewUsers'

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
      </div>
      </Router>

    );
  }
}

export default App;

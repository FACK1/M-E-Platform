import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages/Home'
import ViewActivities from './components/pages/ViewActivities'
import CreateActivity from './components/pages/CreateActivity'

class App extends Component {

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

export default App;

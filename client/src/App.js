import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/pages/Home'
import ViewActivities from './components/pages/ViewActivities'
import CreateActivity from './components/pages/CreateActivity'
import ActivityInformation from './components/pages/ActivityInformation'
import ViewPrograms from './components/pages/ViewPrograms'
import CreateProgram from './components/pages/CreateProgram'




class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} className="page"/>
        <Route path='/ViewActivities' component={ViewActivities}/>
        <Route path='/CreateActivity' component={CreateActivity}/>
        <Route path='/ActivityInformation/:id' component={ActivityInformation}/>
        <Route path='/ViewPrograms' component={ViewPrograms}/>
        <Route path='/CreateProgram' component={CreateProgram}/>

      </div>
      </Router>

    );
  }
}

export default App;

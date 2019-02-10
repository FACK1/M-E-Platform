import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'



const Header = () =>{
    return (
      <div>
        <h1>Header</h1>
        <ul className="header">
          <li><Link to="/ViewActivities">Activites</Link></li>
          <li><Link to="/Programs">Programs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="content">

        </div>
      </div>
    );
  }
export default Header;

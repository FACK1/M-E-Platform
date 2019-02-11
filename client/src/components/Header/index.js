import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'



const Header = () =>{
    return (
      <div>
        <ul className="header">
          <li><Link to="/ViewActivities">الأنشطة</Link></li>
          <li><Link to="/Programs">البرامج</Link></li>
          <li><Link to="/contact">المستخدمين</Link></li>
        </ul>
        <div className="content">

        </div>
      </div>
    );
  }
export default Header;

import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {StyledHeader, StyledUl, StyledLi,StyledLink} from './index.style'


const Header = () =>{
    return (
      <StyledHeader>
        <StyledUl className="header">
          <StyledLi><StyledLink to="/ViewActivities">الأنشطة</StyledLink ></StyledLi>
          <StyledLi><StyledLink  to="/Programs">البرامج</StyledLink ></StyledLi>
          <StyledLi><StyledLink  to="/contact">المستخدمين</StyledLink ></StyledLi>
          <StyledLi><StyledLink  to="/objectives">الأنشطة</StyledLink ></StyledLi>
          <StyledLi><StyledLink  to="/Programs">البرامج</StyledLink ></StyledLi>
          <StyledLi><StyledLink  to="/contact">المستخدمين</StyledLink ></StyledLi>
        </StyledUl>
      </StyledHeader>
    );
  }
export default Header;

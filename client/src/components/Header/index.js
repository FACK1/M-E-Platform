import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {StyledHeader, StyledUl, StyledLi, StyledLink, StyledBgLogo,StyledLogo, ImgLink } from './index.style'
import bgLogo from '../../assets/background-YDRC-Logo.png';
import logo from '../../assets/YDRC-Logo.png';


const Header = () =>{
    return (
      <StyledHeader>
        <ImgLink to="/"><StyledLogo src={logo} /></ImgLink>
        <StyledUl className="header">
            <StyledLi><StyledLink to="/ViewActivities">الأنشطة</StyledLink ></StyledLi>
            <StyledLi><StyledLink  to="/ViewPrograms">البرامج</StyledLink ></StyledLi>
            <StyledLi><StyledLink  to="/ViewUsers">المستخدمين</StyledLink ></StyledLi>
            <StyledLi><StyledLink  to="/objectives">التقارير</StyledLink ></StyledLi>
            <StyledLi><StyledLink  to="/Programs">الأهداف</StyledLink ></StyledLi>
        </StyledUl>
        <StyledBgLogo src={bgLogo}/>
      </StyledHeader>
    );
  }
export default Header;

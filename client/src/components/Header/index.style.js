import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledHeader = styled.div`
display: flex;
flex-direction:column;
width:20%;
position:fixed;
float:right;
background-image: linear-gradient(-180deg, rgba(25,179,212,1), rgba(255,255,255,0));
background-color:  #4BC0D8;
height:100vh;
padding: 0;
`;
export const StyledBgLogo= styled.img`
position:absolute;
bottom:0;
right:0;
`;
export const StyledLogo= styled.img`
width:80%;
align-self:center;
padding: 0px 22px;
`;
export const StyledUl = styled.ul`
margin-top:-50px;
list-style-type: none;
width:100%;
padding: 20%;
`;
export const StyledLink = styled(Link)`
display: block;
color: white;
font-family: 'Cairo', sans-serif;
font-size:2vw;
padding: 15px 22px;
text-decoration: none;
`;
export const StyledLi = styled.li`
width:100%;
`;
export const StyledButton = styled.button`
background-color:#308092;
font-family: 'Cairo', sans-serif;
color: white;
padding: 0px 22px;

text-align: center;
font-size: 1.5vw;
border-radius: 20.5px;
border:0px;
`;

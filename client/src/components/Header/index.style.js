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
width:30px;
right:0;
`;
export const StyledLogo= styled.img`
width:60%;
align-self:center;
`;
export const StyledUl = styled.ul`
margin: 0px 30% 0px 0px;
padding:0px;
list-style-type: none;
width:70%;
`;
export const StyledLink = styled(Link)`
display: block;
margin-top: 20px;
color: white;
font-family: 'Cairo', sans-serif;
font-size:2vw;
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

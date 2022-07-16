import react from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { NavLink } from 'react-router-dom'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};

font-family: 'Dancing Script', cursive;
font-family: 'Krub', sans-serif;
font-family: 'Roboto Mono', monospace;

position: fixed;
left: 3rem;
top: 3rem;
z-index: 3;
`
const LogoComponent = (props) => {
    return (
        <NavLink to="/">
            <Logo color={props.theme} target="_blank" to={{pathname:"mailto:ingenieria.d.s.g@hotmail.com"}}>
                DAVID
            </Logo>
        </NavLink>
    );
}
export default LogoComponent;
import react from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";


const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico', cursive;

position: fixed;
left: 3rem;
top: 3rem;
z-index: 3;
`
const LogoComponent = (props) => {
    return (
        <Logo color={props.theme} target="_blank" to={{pathname:"mailto:ingenieria.d.s.g@hotmail.com"}}>
            DAVID
        </Logo>
    );
}
export default LogoComponent;
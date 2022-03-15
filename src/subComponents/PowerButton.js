import react from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
pading: 0.6rem;
border-radius: 60%;
border: none;
with: 2.4rem;
weight: 2.4rem;

display: flex;
justify-content: center;
align-items: center;

z-index: 3;
cursor: pointer;

&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}
&>*first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to='/'>
                <PowerBtn with={30} height={30} fill='currentColor' />
            </NavLink>
            
        </Power>
    );
}

export default PowerButton;
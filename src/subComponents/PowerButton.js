// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 1.54rem;
height: 1.54rem;
display: flex;
justify-content: center;
align-items:center;
z-index:3;
cursor: pointer;
&:hover{
    background-color: rgb(105,105,105);
    box-shadow: 0 0 8px 6px rgb(105,105,105);
}
&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        <Power>
        <NavLink to="/">
            <PowerBtn width={30} height={30} fill='currentColor' />
        </NavLink>
        </Power>
    )
}

export default PowerButton
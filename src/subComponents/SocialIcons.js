import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {DarkTheme} from '../components/Themes'
import { FaGithub, FaTwitter, FaYoutube, FaKaggle, FaLinkedin} from "react-icons/fa";

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;
    
    z-index: 3;
    
    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`
const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://github.com/DavidSilveraGabriel"}}>
                    <FaGithub  fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.3}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://twitter.com/David_Silvera21"}}>
                    <FaTwitter fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.3}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.linkedin.com/in/davidsilveragabriel/"}}>
                    <FaLinkedin fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.5}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.kaggle.com/davidsilvera"}}>
                    <FaKaggle fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.youtube.com/channel/UCK_nb91XsdzJHr4isq3d1ZA"}}>
                    <FaYoutube fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            
            <Line color={props.theme}

                initial={
                    {
                        height:0
                    }
                }
                animate={{
                    height: '8rem'
                }}
                transition={{
                    type:'spring', duration:2, delay:1
                }}
            />
        </Icons>
    )
}
export default SocialIcons;
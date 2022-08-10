import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
//import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import saitama from '../assets/Images/saitama-white.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Saitama = styled.div`
position: absolute;
top: 20%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 35vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.7rem + 0.4vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Montserrat', 'Ubuntu Mono', 'monospace';
  font-style: italic;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`
const Cv = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
bottom: 50%;
left: 2rem;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`


const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        <Box>

            <LogoComponent theme='dark'/>
            <SocialIcons theme='dark'/>
            {/*<ParticleComponent theme='dark' />*/}

            <Saitama>
                <a href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/97465292781721571611177930354272544023530438298057205090993582575477309046785' target="_blank" rel="noreferrer">
                    <img src={saitama} alt="saitama" />
                </a>
            </Saitama>    
            <Main>
            I'm an Argentine Self-taught Data Scientist with +2 years of experience, 
            worked as a freelancer in the areas of neuroscience, developing an end-to-end 
            EEG classifier for move an arduino robot with the mind in just 3 month, 
            also computer vision, creating an app that controls the mouse estimating 
            the pose of the head and eyes, and today in education as a tutor of data science.
            

            <br/> <br/>
            I believe that the future is closely linked to web 3.0, so my goal will be to move to that risky side,
            full of volatility, expectations for the moon and uncertainty,
            since I love learning about new things,
            I am curious by nature and I love be updated in all areas in which I develop both personally and professionally
            </Main>

            <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>
        <Cv to="/cv">
            <motion.h2
                initial={{
                    x:-100,
                    transition: { type:'spring', duration: 2, delay:1}
                }}
                animate={{
                    y:0,
                    x:0,
                    transition: { type:'spring', duration: 2, delay:1}
                }}
                whileHover={{scale: 1.5}}
                whileTap={{scale: 1.2}}
                
                >
                    CV
            </motion.h2>
            </Cv>
            <BottomBar>
            <BLOG to="/blog">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 2, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 2, delay:1}
                }}
                whileHover={{scale: 1.5}}
                whileTap={{scale: 1.5}}
                >
                    Blog
                </motion.h2>
            </BLOG>
                <SKILLS to="/skills">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 2, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 2, delay:1}
                }}
                 whileHover={{scale: 1.5}}
                whileTap={{scale: 1.5}}
                >
                    Works
                </motion.h2>
                </SKILLS>
            </BottomBar>
        </ThemeProvider>
        
    )
}

export default AboutPage
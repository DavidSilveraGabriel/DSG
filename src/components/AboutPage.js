import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
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
    width: 88%;
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




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        <Box>

            <LogoComponent theme='dark'/>
            <SocialIcons theme='dark'/>
            <PowerButton />
            <ParticleComponent theme='dark' />

            <Saitama>
                <a href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/97465292781721571611177930354272544023530438298057205090993582575477309046785' target="_blank" rel="noreferrer">
                    <img src={saitama} alt="saitama" />
                </a>
            </Saitama>    
            <Main>
            I'm an Argentine Self-taught Data Scientist and Machine Learning developer with +2 years of experience. 
            i've worked as a freelancer in the areas of neuroscience, developing an end-to-end EEG classifier
            for move an arduino robot with the mind, also computer vision, creating an app that controls
            the mouse estimating the pose of the head and eyes, and education as a tutor
            <br/> <br/>
            I believe that the future is closely linked to web 3.0, so my goal will be to move to that risky side,
            full of volatility, expectations for the moon and uncertainty,
            since I love learning about new things,
            I am curious by nature and I love it be updated in all areas in which I develop both personally and professionally
            </Main>

            <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
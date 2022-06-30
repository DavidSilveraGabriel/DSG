import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {LightTheme} from './Themes';
import { NavLink } from "react-router-dom";


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 0.5px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
width: 60vw;
height: 80vh;
z-index:0;
line-height: 2;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
align-items: center;
`

const Data = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.3vw);
align-items: center;
justify-content: center;
`
const Summary = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.3vw);
margin: 1rem;
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`
const Line = styled.div`
border: 1px dashed #000;
width: 30%;
margin: 1px;
color: ${props => props.theme.text};
width: 60vw;
`
const SubTitle = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.3vw);
align-items: left;
justify-content: left;
`
const MiniTitle = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.3vw);
align-items: left;
justify-content: left;
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <Box>

                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <h2>David Silvera Gabriel</h2>
                    <h5>Data Scientist</h5>
                    <Line />
                    <Data>
                        ingenieria.d.s.g@hotmail.com / (+54) 2657626313 
                    </Data>
                    <Data>https://www.linkedin.com/in/davidsilveragabriel /
                        https://github.com/DavidSilveraGabriel
                    </Data>
                    <SubTitle>Summary</SubTitle>
                    <Line />
                    <Summary>
                        Self-taught Data Scientist with +2 years of experience, 
                        worked as a freelancer in the areas of neuroscience, developing an
                        end-to-end EEG classifier for move an arduino robot with the mind in 
                        just 3 month, also computer vision, creating an app that controls the
                        mouse estimating the pose of the head and eyes, 
                        and today in education as a tutor of data science
                    </Summary>
                    <SubTitle>Skills</SubTitle>
                    <Line />
                    <SubTitle>Work Experience</SubTitle>
                    <Line />
                    <MiniTitle>Data Scientist Tutor</MiniTitle>
                    <Line />
                </Main>

            <BigTitle text="Curriculum Vitae" top="70%" right="20%" />

            </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {LightTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
//import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:auto;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
margin-top: 4rem;
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
width: 60vw;
height:auto;
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
`
const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.3vw);
margin: 1rem;
`

const SubTitle = styled.h4`
color: ${props => props.theme.text};
align-items: left;
justify-content: left;
`
const MiniTitle = styled.h5`
color: ${props => props.theme.text};
align-items: left;
justify-content: left;
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <Box>

                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                {/*<ParticleComponent theme='light' />*/}
                <Main>
                    <h2>David Silvera Gabriel</h2>
                    <h5>Data Scientist</h5>
                    
                    <Data>
                        ingenieria.d.s.g@hotmail.com / (+54) 2657626313 
                    </Data>
                    <Data>https://www.linkedin.com/in/davidsilveragabriel /
                        https://github.com/DavidSilveraGabriel
                    </Data>
                    <SubTitle>Summary</SubTitle>
                    
                    <Summary>
                        Self-taught Data Scientist with +2 years of experience, 
                        worked as a freelancer in the areas of neuroscience, developing an
                        end-to-end EEG classifier for move an arduino robot with the mind in 
                        just 3 month, also computer vision, creating an app that controls the
                        mouse estimating the pose of the head and eyes, 
                        and today in education as a tutor of data science
                    </Summary>
                    <SubTitle>Skills</SubTitle>
                    
                        Python • Machine learning • Data Science • Numpy • Pandas • Matplotlib • SQL • Computer vision
                    
                    <SubTitle>Work Experience</SubTitle>
                    
                    <MiniTitle>Data Scientist Tutor</MiniTitle>
                    <Description>
                        CoderHouse • Freelance
                        Remote
                        Technologies: Python • Machine learning • Pandas • Numpy • Data Science
                        In charge of monitoring +50 students, correcting challenges, deliverables and final projects, too i'm
                        responsible for teaching complementary classes with reviews of 4.9/5
                    </Description>
                    <MiniTitle>Data Scientist Freelance</MiniTitle>
                    <Description>Fiverr • Freelance
                        Remote
                        Technologies: Python • Machine learning • Data Science • Numpy • Matplotlib
                        Freelance Data Scientist, work on fiverr platform with 9 successfully completed jobs as data scientist, fully
                        satisfied customers, rating. my profile:  https://www.fiverr.com/davidsilverag
                    </Description>
                    
                    <SubTitle>Projects</SubTitle>
                    
                    <MiniTitle>EEG classifier</MiniTitle>
                    <Description>Technologies: Python • Numpy • Mne • Braindecode • Artificial intelligence
                        In this mini project i use the libraries mne and braindecode to analyze and classify public domain EEG(ML)
                        signals provided by physionet.org here the paper from braindecode where is studied deep ConvNets
                        with a range of different architectures, designed for decoding imagined or executed movements from
                        raw EEG
                    </Description>
                    <MiniTitle>Computer pointer controller</MiniTitle>
                    <Description>Technologies: Python • Opencv • Numpy • Computer vision
                        Computer Pointer Controller app estimate pose of head and is used to controll the movement of mouse
                        pointer by the direction of eyes. This app takes video as input and then app estimates eye-direction and
                        head-pose and based on that estimation it move the mouse pointer.
                    </Description>
                    
                    <SubTitle>Education</SubTitle>
                    
                    <MiniTitle>Nanodegree: Intel® Edge AI for IoT Developers Nanodegree</MiniTitle>
                    <Description>I've worked in the development of cutting-edge Edge AI applications for the future of the Internet of
                        Things. I've Used the Intel® Distribution of OpenVINO™ Toolkit to fast-track 
                        development of high-performance computer vision & 
                        deep learning inference applications.
                    </Description>
                    <MiniTitle>Plan 111 mil Programadores</MiniTitle>
                    <Description>Villa Mercedes, Argentina
                        Trained to develop and interpret UML, with a solid foundation in Java programming and knowledge
                        advanced in the query language par excellence SQL
                    </Description>
                    
                    <SubTitle>Languages</SubTitle>
                    
                    * Spanish Native
                    * English Conversational 
                </Main>

            <BigTitle text="Curriculum Vitae" top="70%" right="20%" />

            </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
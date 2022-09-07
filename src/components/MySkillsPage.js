import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {LightTheme} from './Themes';
import { BsCodeSlash, BsClipboardData} from "react-icons/bs";
import { NavLink } from "react-router-dom";


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
//import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: Serif, Karla ,sans-serif;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.5vw);
padding: 0.7rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}

`
const BLOCKCHAIN = styled(NavLink)`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.6vw);
padding: 0.7rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
text-decoration: none;
z-index:1;
`
const DATASCIENCE = styled(NavLink)`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.6vw);
padding: 0.7rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
text-decoration: none;
z-index:1;
`
const MySkillsPage = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <Box>

                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                {/*<ParticleComponent theme='light' />*/}
                <Main>
                    <BLOCKCHAIN to="/blockchain">
                        <Title>
                            <BsCodeSlash width={30} height={30} /> Blockchain
                        </Title>
                        <Description>
                            I believe the emergence of blockchain technology and decentralized applications 
                            will change the world as we know it, and it’s already happening.
                        </Description>
                        <Description>
                            <strong>Main work</strong>
                            <ul>
                                <li>
                                Work with the Terminal Product and Engineering 
                                team to build the world’s easiest to use Web3 apps.
                                </li>
                                <li>
                                Implement front edge user experience designs bridging complex 
                                blockchain interactions and information.
                                </li>
                            </ul>
                        </Description>
                    </BLOCKCHAIN>
                </Main>
                <Main>
                    <DATASCIENCE to="/datascience">
                        <Title>
                            <BsClipboardData width={30} height={30} /> Data Scientist
                        </Title>
                        <Description>
                        A data scientist is a professional that requires large amounts of data to develop hypotheses, 
                        make inferences, and analyze customer and market trends. 
                        Basic responsibilities include gathering and analyzing data, using various types of analytics, 
                        machine learning algorithms and reporting tools to detect patterns, trends and relationships in data sets.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>
                            • Python • Numpy • Pandas • Matplotlib • SQL • Scikit-Learn • Machine learning 
                            • Computer vision • Data Cleaning • Exploratory analysis • Data Visualization 
                            • Feature Engineering • Feature Selection • ML modeling • Validation and Testing
                            </p>
                        </Description>
                        <Description>
                            <strong>Tools</strong>
                            <p>
                                VScode, Github, Colab, Anaconda, Jupyter Notebook.
                            </p>
                        </Description>
                    </DATASCIENCE>
                </Main>

                <BigTitle text="WORKS" top="80%" right="30%" />

            </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
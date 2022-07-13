import { motion } from "framer-motion";
import react, { useState }from "react"; 
import styled, {keyframes} from "styled-components";
import LogoComponent from "../subComponents/LogoComponent.js";
import SocialIcons from "../subComponents/SocialIcons.js";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSvgs.js";
import Intro from "../components/Intro.js";

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;
h2,h3,h4,h5,h6{
  font-family:'Hanalei Fill', Karla ,sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Cv = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
bottom: 50%;
left: 2rem;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
bottom: 50%;
right: 1rem;
transform: rotate(-0deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
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

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}
&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
        <DarkDiv click={click} />
            <Container>
            <LogoComponent theme={click ? 'dark' : 'light'}/>
            <SocialIcons theme={click ? 'dark' : 'light'}/>
            
            <Center click={click}>
                <YinYang onClick={()=> handleClick()} width={click ? 100 : 200} height={click ? 100 : 200} fill='currentColor' />
                    <span>Click here</span>
            </Center>
            
            <Cv to="/cv" click={click}>
            <motion.h2
                initial={{
                    x:-100,
                    transition: { type:'spring', duration: 3, delay:2}
                }}
                animate={{
                    y:0,
                    x:0,
                    transition: { type:'spring', duration: 3, delay:2}
                }}
                whileHover={{scale: 1.5}}
                whileTap={{scale: 1.2}}
                
                >
                    CV
            </motion.h2>
            </Cv>
        
        <BLOG to="/blog">
                <motion.h2
                initial={{
                    x: 100,
                    transition: { type:'spring', duration: 3, delay:2}
                }}
                animate={{
                    y:0,
                    x:0,
                    transition: { type:'spring', duration: 3, delay:2}
                }}
                whileHover={{scale: 1.5}}
                whileTap={{scale: 1.2}}
                >
                    Blog
                </motion.h2>
            </BLOG>


            <BottomBar>
                <ABOUT to="/about" click={click}>
                    <motion.h2
                    initial={{
                        y:200,
                        transition: { type:'spring', duration: 3, delay:2}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 3, delay:2}
                    }}
                    whileHover={{scale: 1.5}}
                    whileTap={{scale: 1.2}}
                    >About</motion.h2>
                </ABOUT>
               
                <SKILLS to="/skills" click={click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 3, delay:2}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 3, delay:2}
                }}
                 whileHover={{scale: 1.5}}
                whileTap={{scale: 1.2}}
                >
                    Works
                </motion.h2>
                </SKILLS>
            </BottomBar>
            </Container>
            {click ? <Intro click={click}/> : null}
        </MainContainer>
    );
}
export default Main;
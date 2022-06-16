import react from 'react'
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import {Blogs} from "../data/BlockchainData";
import BlogComponent from "./BlogComponent";
import BigTitle from "../subComponents/BigTitlte";
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
background-color: white;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`
const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`
const Grid = styled.div`
display: grid; 
grid-template-columns: repeat(3, minmax(calc(7rem + 10vw), 1fr));
grid-gap: calc(0.5rem + 0.5vw);
`
// Framer-motion config
const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  
  }
const BlogPage = () => {
    
    return (
        <MainContainer 
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <Center>
                    <Grid>
                        {
                            Blogs.map(blog => {
                                return <BlogComponent key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                    
                </Center>
                <BigTitle text="BLOCKCHAIN" top="3rem" left="3rem" />
            </Container>
        </MainContainer>
    );
}
export default BlogPage;
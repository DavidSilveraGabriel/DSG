import react from "react"; 
import styled from "styled-components";
import img from "../assets/Images/libro.jpg";

const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
bachground-position: center;
width: 100vw;
height: 100vh;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const BlogPage = () => {
    return (
        <MainContainer>
            <Container>

            </Container>
        </MainContainer>
    );
}
export default BlogPage;
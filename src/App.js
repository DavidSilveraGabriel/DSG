import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { LightTheme } from "./components/Themes"

import GlobalStyle from "./globalstyles"

//componentes
import Main from "../src/components/Main";
import AboutPage from "./components/AboutPage";
//import WorkPage from "./components/WorkPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return <>
    <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
      <SoundBar />
{/* For framer-motion animation on page change! */}
      <AnimatePresence exitBeforeEnter>

      <Switch  location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          {/* <Route exact path="/work" component={WorkPage} />*/}
          <Route exact path="/skills" component={MySkillsPage} />

        </Switch>
      </AnimatePresence>
      </ThemeProvider>
    </>
    
}

export default App


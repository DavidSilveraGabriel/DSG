import { ThemeProvider } from "styled-components"
import { LightTheme } from "./components/Themes"
import { Switch, Route } from "react-router-dom"

import GlobalStyle from "./globalstyles"

//componentes
import Main from "../src/components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  return <>
    <GlobalStyle />

      <ThemeProvider theme={LightTheme}>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />

        </Switch>

      </ThemeProvider>
    </>
    
}

export default App


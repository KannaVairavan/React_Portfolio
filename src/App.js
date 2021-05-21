import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar/'
import About from './components/About/'
import Home from './components/Home/'
import Skills from './components/Skills/'
import Contact from './components/Contact/'
import Wrapper from "./components/Wrapper";

const App=() =>{
  return (
    <Router>
        <div className="App">
          <NavBar/>
          <Wrapper> 
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/Skills" component={Skills} />
                <Route exact path="/Contact" component={Contact} />
          </Wrapper>
        </div>
    </Router>
  );
}

export default App;

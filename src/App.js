import React from "react";
import NavBar from './components/NavBar/'
import About from './components/About/'
import Home from './components/Home/'
import Skills from './components/Skills/'
import Contact from './components/Contact/'

const App=() =>{
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Home/>
      <Skills/>
      <Contact/>

    </div>
  );
}

export default App;

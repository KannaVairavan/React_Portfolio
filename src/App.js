import React from "react";
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

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

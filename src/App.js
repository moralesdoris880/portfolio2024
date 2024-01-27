import React from 'react';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import AboutMe from './components/AboutMe.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './css/App.css';

function App() {
 const proj = React.useRef(null)
  return (
    <div id="App" ref={proj}>
      <div id="Cyborg">
        <button id="Heart" onClick={()=>{
          window.scrollTo({
            top: proj.current.clientHeight/4.5,
            left: 0,
            behavior: "smooth",
          })
          }}></button>
      </div>
      <div id="MainSection">
        <div id="DorisMorales"></div>
      </div>
      <AboutMe/>
      <Projects />
      <Skills /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


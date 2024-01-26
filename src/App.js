import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import AboutMe from './components/AboutMe.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './css/App.css';

function App() {

  return (
    <div id="App">
      <div id="Cyborg">
        <button id="Heart" onClick={()=>{window.scrollTo({ top: 1920, behavior: "smooth" })}}></button>
      </div>
      <div id="MainSection">
        <div id="DorisMorales"></div>
      </div>
      <AboutMe />
      <Projects />
      <Skills /> 
      {/*<Contact />
      <Footer /> */}
    </div>
  );
}

export default App;


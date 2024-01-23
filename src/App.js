import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import AboutMe from './components/AboutMe.js';
import './css/App.css';

function App() {

  return (
    <div id="App">
      <div id="Cyborg">
      </div>
      <div id="MainSection">
        <div id="DorisMorales"></div>
        <button id="Heart" onClick={()=>{window.scrollTo({ top: 920, behavior: "smooth" })}}></button>
      </div>
      <AboutMe />
      <Projects />
      {/* <Skills />  */}
      <footer>
        <div>
          <h3>Contact</h3>
        </div>
        <div>
          <h3>Follow Me</h3>
          {/* <a>LinkedIn</a>
          <a>Youtube</a>
          <a>Blog</a> */}
        </div>
        <div>
          <p>Copyright @2024 Doris Morales. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


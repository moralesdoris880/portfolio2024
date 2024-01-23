import Projects from './components/Projects.js';
import './App.css';

function App() {

  return (
    <div id="App">
      <div id="DorisMorales"></div>
      <div id="Cyborg">
        <button id="Heart" onClick={()=>{window.scrollTo({ top: 920, behavior: "smooth" })}}></button>
      </div>
      <div id="AboutMeTitle"></div>
      <div id="tape">
        <div id="DorisPic"></div>
      </div>
      <div id="AboutMe">
        <p class="AboutMeSection">
          👋 Hi there! I'm Doris Morales, an aspiring Frontend Engineer based in NYC with over a year of experience in the tech industry. 
          🚀 I bring a unique blend of creativity and technical proficiency to every project, passionately crafting seamless digital experiences.
        </p>
        <p class="AboutMeSection">
          🌐 My journey began with a fascination for turning lines of code into visually appealing and intuitive interfaces. 
          Whether it's experimenting with cutting-edge design trends or solving intricate coding puzzles, I infuse my work with enthusiasm and a commitment to continuous improvement. 
          Let's connect and explore how my creativity and technical skills can contribute to your next project!
        </p>
        <span class="material-symbols-outlined" onClick={()=>{window.scrollTo({ top: 1700, behavior: "smooth" })}}>
          arrow_downward
        </span>
      </div>
      <Projects />
      <div id="skills">
      </div>
      <div>
      <div id="skillList">
        <img className="logos" alt="logo for javascript" src="./javascript2.png"/>
        <img className="logos" alt="logo for typescript" src="typescript.svg"/>
        <img className="logos" alt='logo for html' src="./html.webp"/>
        <img className="logos" alt="logo for css" src="./css3.svg"/>
        <img className="logos" alt="logo for react" src="./reactlogo.png"/>
        <img className="logos" alt="logo for react test library" src="./rtl.png"/>
        <img className="logos" alt="logo for jest" src="jest.png" />
        <img className="logos" alt='logo for tailwind css' src="./tailwind.png"/>
        <img className="logos" alt="logo for figma" src="figma3.png"/>
        <img className="logos" alt='logo for postgresql' src="Postgresql.jpeg"/>
      </div>
      <div>
          {/* <img className="logos" alt="logo for javascript" src=""/> JIRA */}
          {/* <img className="logos" alt="logo for typescript" src=""/> SAML/Authentication */}
          {/* <img className="logos" alt='logo for html' src="./html.webp"/> Python */}
          {/* <img className="logos" alt="logo for css" src="./css3.svg"/> Ruby */}
          {/* <img className="logos" alt="logo for react" src="./reactlogo.png"/> Terraform */}
          {/* <img className="logos" alt="logo for react test library" src="./rtl.png"/> AWS */}
        </div>
      </div> 
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


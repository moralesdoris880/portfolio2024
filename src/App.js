import './App.css';

function App() {
  return (
    <div id="App">
      <div id="DorisMorales"></div>
      <div id="Cyborg">
        <button id="Heart" onClick={()=>{window.scrollTo({ top: 850, behavior: "smooth" })}}></button>
      </div>
      <div id="AboutMeTitle"></div>
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
      <div id="ProjectTitle"></div>
      <div id="ProjectSection">
        <div id="Notepad">
            <li id="firstProject">Meraz M Portfolio</li>
            <li className="Projects">J&G Bartending</li>
            <li className="Projects">CJ Fish Guide</li>
            <li className="Projects">NYC Drinkers</li>
            <li className="Projects">Coming Soon</li>
            <li className="Projects">Coming Soon</li>
        </div>
        <div id="ProjectDemo">
            <div id="outlineProjectDemo">
              <div id="defaultProject">
                DEFAULT DIV
                <div>
                    <p>RECTANGLE WITH TEXT - SELECT PROJECT</p>
                    <div>ARROW HORIZONTAL TRANSLATE</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}


export default App;

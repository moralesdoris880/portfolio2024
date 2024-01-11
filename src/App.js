import './App.css';

function App() {
  return (
    <div id="App">
      <div id="DorisMorales"></div>
      <div id="Cyborg"></div>
      <button id="Heart" onClick={()=>{window.scrollTo({ top: 850, behavior: "smooth" })}}></button>
      <div id="AboutMe">
        <h1>About Me</h1>
        <p></p>
      </div>
      <div id="Hand"></div>

    </div>
  );
}


export default App;

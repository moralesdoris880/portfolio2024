import './App.css';

function App() {
  return (
    <div id="App">
      <div id="Cyborg"></div>
      <button id="Heart" onClick={()=>{window.scrollTo({ top: 900, behavior: "smooth" })}}></button>
      <div id="AboutMe"></div>

    </div>
  );
}


export default App;

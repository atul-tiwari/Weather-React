import './CSS/App.css';

const api ={
  key:"53f40645b7530ece9abb4cb6a54c9a46",
  base:"https://api.openweathermap.org/data/2.5/",
}

function App() {
  return (
    <div className="app">
      <main className="search-box">
        <input type="text" className="search-bar" placeholder="Search...."></input>
      </main>
    </div>
  );
}

export default App;

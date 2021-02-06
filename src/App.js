import './CSS/App.css';

const api ={
  key:"53f40645b7530ece9abb4cb6a54c9a46",
  base:"https://api.openweathermap.org/data/2.5/",
}

function dateBuilder(d){
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  let month = monthNames[d.getMonth()];
  let date = d.getDate();
  let day = days[d.getDay()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`

}


function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search...."></input>
        </div>
        <div className="location-box">
            <div className="location"> New York city, US</div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="wather-box">
          <div className="temp">
            15 c
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

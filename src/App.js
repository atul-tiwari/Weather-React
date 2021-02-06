import React,{ useState, useEffect} from 'react';

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

  const [quary , setQuary] = useState('');
  const [weather , setWeather] = useState('');


  function fetchdata(city){
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuary('');}
    );
  }

  const search = evt => {
    if (evt.key === 'Enter'){
      fetchdata(quary);
    }
  }

  useEffect(()=>{
    fetchdata('new york');
  },[]);


  return (
    <div className="app">
      <main>
        <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search...." 
        onChange={e=>setQuary(e.target.value) } value={quary} 
        onKeyPress={search}></input>
        </div>
        {typeof weather.main != 'undefined' ?(
        <div>
          <div className="location-box">
              <div className="location">{weather.name},{weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="wather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">
              {weather.weather[0].main}
            </div>
          </div>
        </div>):('')}
      </main>
    </div>
  );
}

export default App;

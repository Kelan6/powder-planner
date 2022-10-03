import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {Modal } from 'flowbite-react'

function Weather({currentUser, setCurrentUser}) {

    console.log(currentUser, setCurrentUser)

    let history = useHistory()

    const api = {
        key: '8f80650316956abc5148c9fb777b5296',
        base: 'https://api.openweathermap.org/data/2.5/'
      }
      const [query, setQuery] = useState('')
      const [weather, setWeather] = useState({})
    
      const search = evt => {
        if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
              console.log(result);
            });
        }
      }

      function handleGoBack() {
        history.goBack()
      }
    
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


    return (
        
<React.Fragment>
      <Modal
        show={true}
        size="lg"
        popup={true}
      >
        <Modal.Header onClick={handleGoBack} />
        <Modal.Body >
    <div className='flex flex-col items-center'>
      <h1 className='mt-2 font-bold text-xl text-gray-700'>Check current weather before you meetup 🌦</h1>
      <div className='max-w-xl flex rounded overflow-hidden shadow-lg'>
      <main className='m-3 flex flex-col'>
        <div className="">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search weather "
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
    </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>

    )
}

export default Weather
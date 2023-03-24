import React, {useState, useEffect, button}from "react";
import axios from "axios"
import locationImage from './assets/marker(3).png'

import Sunrise from './assets/sunrise-alt.png'
import Sunset from './assets/sunset.png'
import Wind from './assets/wind.png'
import Humidity from './assets/raindrops.png'
import TempHigh from './assets/temperature-high.png'
import TempLow from './assets/temperature-low.png'

import Plus from './assets/map-marker-plus.png'
import Minus from './assets/map-marker-minus.png'

import Weather2 from "./Weather2";


function Weather1 () {

    const [data,setData] =useState({})
    const [cityName, setLocation] =useState('')

    const API_KEYS = '6a2dbc7a83cbc824c715fad97a9dcaed';

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`

    const searchLocation = (event) => {
        if(event.key === 'Enter'){
        axios.get(url).then((response) =>{
            setData(response.data)
            //console.log(response.data)
        })
        setLocation('')
      }

    }

    const [weatherCount, setWeatherCount] = useState(1);

    const addWeather = () => {
      setWeatherCount(weatherCount + 1);
    };
  
    const removeWeather = () => {
      setWeatherCount(weatherCount - 1);
    };
  



  return (
    <div className="app">
    <div className="Background"></div>
    <div className="Search">
        <input
            value={cityName}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='City Name'
            type="text"
        />
    </div>
    <div className="container">
      <div className="top">
        <div className="temp">
        {data.main ? <h1 >{Math.round(data.main.temp)}°C</h1> : <h1 className="notemp">Temperature°C</h1>}
        </div>
        <div className="description">
          {data.weather ? <h2>{data.weather[0].main}</h2> : <h2>Weather</h2>}
        </div>
        <div className="location">
          <h3>{data.name ? data.name : <h3>Location</h3>}</h3>
        <div className="imageloc">
        <img src={locationImage} alt="locationImage" style={{width:'30px', height: '30px'}}></img>
        </div>
        </div>
      </div>

    <div className="extrainfo">
        <div className="info">
            <div className="Sunrise">
            <div className="extraInfoImg">
                <img src={Sunrise} alt="SunriseImage" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Sunrise</p>
                {data.sys ? <p>{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</p> : <p>00:00:00</p>}
            </div>
        </div>
        <div className="info">
            <div className="Sunset">
            <div className="extraInfoImg">
                <img src={Sunset} alt="SunsetImage" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Sunset</p>
                {data.sys ? <p>{new Date(data.sys.sunset*1000).toLocaleTimeString()}</p> : <p>00:00:00</p>}
            </div>
        </div>

        <div className="info">
            <div className="Wind">
            <div className="extraInfoImg">
                <img src={Wind} alt="WindImage" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Wind</p>
                {data.wind ? <p>{Math.round(data.wind.speed)}m/s</p> : <p>0m/s</p>}
            </div>
        </div>

    </div>

        <div className="extrainfo">
        <div className="info">
            <div className="TempMax">
            <div className="extraInfoImg">
                <img src={TempHigh} alt="TempHighImg" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Temp-Max</p>
                {data.main ? <p>{Math.round(data.main.temp_max)}°C</p> : <p>0°C</p>}
            </div>
        </div>
        <div className="info">
            <div className="TempMin">
            <div className="extraInfoImg">
                <img src={TempLow} alt="TempHighImg" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Temp-Min</p>
                {data.main ? <p>{Math.round(data.main.temp_min)}°C</p> : <p>0°C</p>}
            </div>
        </div>

        <div className="info">
            <div className="Humidity">
            <div className="extraInfoImg">
                <img src={Humidity} alt="HumidityImg" style={{width:'50px', height: '50px'}}></img>
            </div>
                <p>Humidity</p>
                {data.main ? <p>{Math.round(data.main.humidity)}%</p> : <p>0%</p>}
            </div>
        </div>

    </div>
    

    </div>

    {(() => {
            if (data.main && data.main.temp <=5) return <p className="Suggestion">Looks Cold Wear a Coat</p>;
            if (data.main && data.main.temp <=15) return <p className="Suggestion">A Bit Chilly Wear A Sweater</p>;
            if (data.main && data.main.temp >=15 <=23) return <p className="Suggestion">A Bit Warm Wear A Shirt</p>;
            if (data.main && data.main.temp >=23) return <p className="Suggestion">Quite Warm Wear a shirt and make sure to bring some water</p>;
          })()}

        <div className="container1">
            <div className="Button">
                {weatherCount === 1 ? (
                <button 
                onClick={addWeather}>
                    <p>Add Location</p>

                </button>
                ) : (
                <>
                <Weather2/>
                <button className="Button" onClick={removeWeather}>
                    <p>Remove Location</p>
                </button>
                </>
                )}
            </div>
        </div>

   
  </div>

  

  
  )
}

export default Weather1
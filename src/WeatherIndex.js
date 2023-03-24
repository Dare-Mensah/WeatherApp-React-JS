
import React ,{useState,useEffect} from 'react'
import DailyForecast from './DailyForecast'

import Navbar from './Navbar'


function WeatherIndex() {

    const [weatherData, setWeatherData] = useState()

    useEffect(() => {
        const API = 'https://api.open-meteo.com/v1/forecast?latitude=51.48&longitude=-0.04&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime&timezone=Europe%2FLondon'
        fetch(API)
        .then(res => res.json())
        .then(data => {
            //console.log(data); // checking to see if data fro api is paased and recieved in inspect window
            setWeatherData(data)
        })
        .catch(err => console.log(err))
    }, [])

if(weatherData) console.log(weatherData);


  return (
    <div className='app'>
    <Navbar/> 
        <div className='container'>
            <div className='top'>
                <h2 className='Title'>Weather Forecast</h2>
                <h3 className='location'>London</h3>
                {weatherData ? weatherData.daily.time.slice(0,5).map((day ,i) => {
                    return <DailyForecast key={i}
                        dateNum={day}
                        tempHigh={weatherData.daily.temperature_2m_max[i]}
                        tempLow={weatherData.daily.temperature_2m_min[i]}
                    /> 
                })
                : <h2>Loading</h2>
                }
            </div>
        </div>
    </div>
  )
}

export default WeatherIndex
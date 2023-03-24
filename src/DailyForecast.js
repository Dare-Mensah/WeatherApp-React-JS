import React from 'react'

import Sunrise from './assets/sunrise-alt.png'
import Sunset from './assets/sunset.png'
import Wind from './assets/wind.png'
import Humidity from './assets/raindrops.png'
import UVIndex from './assets/sun.png'


function DailyForecast({dateNum, tempHigh, tempLow, sunrise, sunset, UV}) {

    dateNum =new Date(dateNum *1000)

    sunrise= new Date(sunrise*1000).toLocaleTimeString()
    sunset= new Date(sunset*1000).toLocaleTimeString()

    //console.log(dateNum)

    dateNum.getDay()

    let options ={weekday:'short'}

    dateNum = Intl.DateTimeFormat('en-US', options).format(dateNum)

    tempHigh = Math.round(tempHigh)
    tempLow = Math.round(tempLow)

    UV = Math.round(UV)
    



  return (
        <div className='top'>
            <div className='DailyInfo'>
                <h3>{dateNum}</h3>
                <h3>TempHigh: {tempHigh}°C</h3>
                <h3>TempLow: {tempLow}°C</h3>
            </div>
        <div className="extrainfo1">
                <div className="Sunrise">
                    <div className="extraInfoImg">
                        <img src={Sunrise} alt="SunriseImage" style={{width:'50px', height: '50px'}}></img>
                    </div>
                    <p>Sunrise</p>
                    <p>{sunrise}</p>
                </div>
                <div className="Sunset">
                    <div className="extraInfoImg">
                        <img src={Sunset} alt="SunsetImage" style={{width:'50px', height: '50px'}}></img>
                    </div>
                    <p>Sunset</p>
                    <p>{sunset}</p>
                </div>
                <div className="UV">
                    <div className="extraInfoImg">
                        <img src={UVIndex} alt="UVImage" style={{width:'50px', height: '50px'}}></img>
                    </div>
                    <p>UV Index</p>
                    <p>{UV}</p>
                </div>
        </div>
        

        </div>

  )
}

export default DailyForecast
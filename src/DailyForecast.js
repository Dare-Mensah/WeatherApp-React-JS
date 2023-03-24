import React from 'react'

function DailyForecast({dateNum, tempHigh,tempLow}) {

    dateNum =new Date(dateNum *1000)

    console.log(dateNum)

    dateNum.getDay()

    let options ={weekday:'short'}

    dateNum = Intl.DateTimeFormat('en-US', options).format(dateNum)

    tempHigh = Math.round(tempHigh)
    tempLow = Math.round(tempLow)
    



  return (
            <div className='top'>
                <div className='DailyInfo'>
                    <h3>{dateNum}</h3>
                    <h3>TempHigh: {tempHigh}°C</h3>
                    <h3>TempLow: {tempLow}°C</h3>
                </div>
            </div>

  )
}

export default DailyForecast
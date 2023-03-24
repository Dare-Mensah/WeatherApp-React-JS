import React from 'react'
import { Link } from 'react-router-dom'
import Weather1 from './Weather1'

function Navbar() {
  return (
    <div className='body1'>
            <nav className='item'>
                <ul className='ul'>
                    <li className='li'>
                        <Link to='/Weather1'>Home </Link>
                    </li>
                    <li className='li'>
                        <Link to='/WeatherIndex'>London </Link>
                    </li>
                    <li className='li'>
                        <Link to='/'>Paris </Link>
                    </li>
                    <li className='li'>
                        <Link to='/'>New York </Link>
                    </li>
                    <li className='li'>
                        <Link to='/'>Rome</Link>
                    </li>
                    <li className='li'>
                        <Link to='/'>Tokyo</Link>
                    </li>
                </ul>
            </nav>
    </div>
  )
}

export default Navbar
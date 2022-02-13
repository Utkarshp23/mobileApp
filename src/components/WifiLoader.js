import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/wifiLoader.css'

const WifiLoader = () => {
  return (
    <Link to="/connectedWindow">
      <div className="wifi-loader-wrapper">
        <div className="wifi-loader"></div>
      </div>
    </Link>

  )
}

export default WifiLoader

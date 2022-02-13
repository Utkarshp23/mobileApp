import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/connectBtn.css';
const ConnectBtn = () => {

  return (
    <div className="connectBtn-wrapper">
      <Link to="/ipform">
        <button>Connect to Device</button>
      </Link>
    </div>
  )
}

export default ConnectBtn

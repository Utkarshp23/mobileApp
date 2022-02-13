import React from 'react'
import { Link } from 'react-router-dom';
// import { w3cwebsocket as W3CWebSocket } from 'websocket';
// import WifiLoader from './WifiLoader';
import '../stylesheets/popUpForm.css'



const PopUpForm = (props) => {
  const connectToServer = () => {
    // const ipAdress = document.getElementById('ipform').value;
    // console.log(ipAdress);
    // const client = new W3CWebSocket('ws://' + ipAdress);
    // const { websocket } = props.client;
    // console.log(props.client);
  //  websocket.onerror = () => {
  //     alert('Enter Valid IP adress or Check if server is running on device or not');
  //   }
  //   websocket.onopen = () => {
  //     // <WifiLoader></WifiLoader>
  //     console.log('WebSocket client connected');
  //   }

    // client.send("Hello");

  }
  return (
    <form className="form-container">
      <span></span>
      <div className="content">
        <p className="form-heading">Connect to Device</p>
        <div className="box">

          <div>
            <input type="text" name="" id="ipform" placeholder="Enter IP address" />
          </div>
        </div>
        <Link to={{ pathname: '/connectedWindow' }} >
          <button className="ipBtn" onClick={() => connectToServer()}>Connect</button>
        </Link>
      </div>


    </form >
  )
}

export default PopUpForm

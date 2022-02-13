import React from 'react'
import '../stylesheets/connectedWindow.css'
import { FaKeyboard, FaVideo } from "react-icons/fa";
import { GiMouse } from "react-icons/gi";


const ConnectedWindow = (props) => {
  // const cameraClicked = () => {
  //   function hasGetUserMedia() {
  //     return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  //   }
  //   if (hasGetUserMedia()) {
  //     // Good to go!
  //     console.log('Supported')
  //     const constraints = {
  //       video: { width: { min: 1280 }, height: { min: 720 } },
  //     };

  //     const video = document.querySelector("video");

  //     navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  //       video.srcObject = stream;

  //     });

  //   } else {
  //     alert("getUserMedia() is not supported by your browser");
  //   }
  // }
  return (
    <div>
      <ul>
        <li><a href="/"><GiMouse></GiMouse> </a><span>Control Mouse Pointer</span></li>
        <li><a href="/"><FaVideo></FaVideo></a><span>Share a Camera</span></li>
        <li><a href="/"><FaKeyboard></FaKeyboard></a><span>Share a Keyboard</span></li>
      </ul>
      {/* <video autoPlay controls width="320" height="240"></video> */}
    </div>
  )
}

export default ConnectedWindow

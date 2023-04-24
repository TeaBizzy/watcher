import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import React, { useState, useEffect } from "react";
import CameraList from "./components/CameraList";
import CameraView from "./components/CameraView";
import { generateStatus } from "./helpers/camera-status-simulator";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentCamera, setCurrentCamera] = useState(-1); // -1 for no camera selected, used for mobile view.
  const [cameraData, setCameraData] = useState([]);
  
  // For visual testing of this component
  // TODO: Replace with actual data
  useEffect(() => {
    const intervalId = setInterval(() => setCameraData(getCameraData), 2000)

    return () => {clearInterval(intervalId)}
  }, [])

  function getCameraData() {
    const cameraCount = 9;
    const buffer = [];

        for (let i = 0; i < cameraCount; i++) {
          buffer.push({
            name: `Camera ${i+1}`,
            videoSrc: ``,
            ...generateStatus()
          })
        }
    
        return buffer;
  }

  return (
    <>
      <Header />
      {!loggedIn ? 
        <Login setLoggedIn={setLoggedIn} /> :
        <div className="h-screen bg-slate-900 flex flex-row">
          <CameraList cameras={cameraData} setCurrentCamera={setCurrentCamera} currentCamera={currentCamera} />
          {currentCamera === -1 && <CameraView />}
        </div>
      }
      <Footer />
    </>
  );
}

export default App;

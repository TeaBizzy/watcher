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
    const intervalId = setInterval(() => setCameraData(getCameraData), 10000)

    return () => {clearInterval(intervalId)}
  }, [])

  function getCameraData() {
    const cameraCount = 9;
    const buffer = [];
    const srcs = [
      'https://www.youtube.com/embed/9w1u7EmX-54',
      'https://www.youtube.com/embed/t-6cCrPX8ZA',
      'https://www.youtube.com/embed/gFRtAAmiFbE',
      'https://www.youtube.com/embed/lx5vVGxusnc'] // Live stream test srcs

        for (let i = 0; i < cameraCount; i++) {
          buffer.push({
            name: `Camera ${i+1}`,
            videoSrc: `${srcs[Math.min(i, srcs.length-1)]}`,
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
          {currentCamera !== -1 && <CameraView camera={cameraData[currentCamera]}/>}
        </div>
      }
      <Footer />
    </>
  );
}

export default App;

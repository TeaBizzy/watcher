import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import React, { useState, useEffect } from "react";
import CameraList from "./components/CameraList";
import CameraView from "./components/CameraView";
import { generateStatus } from "./helpers/camera-status-simulator";
import MediaQuery from "react-responsive";
import useValidateSession from "./hooks/useValidateSession";

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [currentCamera, setCurrentCamera] = useState(-1); // -1 for no camera selected, used for mobile view.
  const [cameraData, setCameraData] = useState(getCameraData());
  
  useValidateSession(setCurrentUser)

  // For visual testing of this component
  // TODO: Replace with actual data
  useEffect(() => {
    const intervalId = setInterval(() => setCameraData(getCameraData), 10000)

    return () => clearInterval(intervalId)
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
            cameraID: i + 1,
            name: `Camera ${i+1}`,
            videoSrc: `${srcs[Math.min(i, srcs.length-1)]}`,
            ...generateStatus()
          })
        }
    
        return buffer;
  }

  return (
    <>
      {!currentUser ? 
        <Login setCurrentUser={setCurrentUser}/> :
        <>
          <Header setCurrentUser={setCurrentUser}/>
          <div className="h-screen bg-slate-900 flex flex-row">
            <MediaQuery maxWidth={1024}>
              {currentCamera === -1 ? 
                <CameraList cameras={cameraData} setCurrentCamera={setCurrentCamera} currentCamera={currentCamera} /> :
                <CameraView camera={cameraData[currentCamera]} setCurrentCamera={setCurrentCamera}/>
              }
            </MediaQuery>
            <MediaQuery minWidth={1024}>
              <CameraList cameras={cameraData} setCurrentCamera={setCurrentCamera} currentCamera={currentCamera} />
              {currentCamera !== -1 && <CameraView camera={cameraData[currentCamera]} setCurrentCamera={setCurrentCamera}/>}
            </MediaQuery>
          </div>
        </>
      }
      <Footer />
    </>
  );
}

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import React, { useState, useEffect } from "react";
import CameraList from "./components/CameraList";
import CameraView from "./components/CameraView";
import MediaQuery from "react-responsive";
import useValidateSession from "./hooks/useValidateSession";
import axios from "axios";
import { useSimulateStatus, useSimulateActivity } from "./hooks/useCameraSimulations";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentCamera, setCurrentCamera] = useState(-1); // -1 for no camera selected, used for mobile view.
  const [cameraData, setCameraData] = useState([]);
  
  useValidateSession(setCurrentUser);
  useSimulateStatus(setCameraData);
  useSimulateActivity(setCameraData);

  // Loads Camera Data
  useEffect(() => {
    if (!currentUser.id) {
      return
    }
    axios(`http://localhost:3030/api/camera/${currentUser.id}`, {withCredentials: true})
      .then(res => setCameraData(res.data))
      .catch(err => console.log(err))
  }, [currentUser])

  return (
    <>
      {!currentUser ? 
        <Login setCurrentUser={setCurrentUser}/> :
        <>
          <Header setCurrentUser={setCurrentUser}/>
          <div className="h-screen bg-slate-900 flex flex-row">
            <MediaQuery maxWidth={1024}>
              {currentCamera === -1 ? 
                <CameraList cameras={cameraData} setCameraData={setCameraData} setCurrentCamera={setCurrentCamera} currentCamera={currentCamera} /> :
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

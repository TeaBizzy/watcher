// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import React, { useState } from "react";
import CameraList from "./components/CameraList";
import CameraView from "./components/CameraView";
import MediaQuery from "react-responsive";
import useValidateSession from "./hooks/useValidateSession";
import { useSimulateStatus, useSimulateActivity } from "./hooks/useCameraSimulations";
import useFetchCameras from "./hooks/useFetchCameras";


function App() {
  // ____________________________________________________________________ //
  // *----------------------------- States -----------------------------* //
  const [currentUser, setCurrentUser] = useState(null);
  const [currentCamera, setCurrentCamera] = useState(-1); // -1 for no camera selected, used for mobile view.
  const [cameraData, setCameraData] = useState([]);
  console.log(currentUser ? true : false)
  // ___________________________________________________________________ //
  // *----------------------------- Hooks -----------------------------* //
  useValidateSession(setCurrentUser);
  useFetchCameras(currentUser, setCameraData);
  useSimulateStatus(setCameraData);
  useSimulateActivity(setCameraData);

  console.log(currentUser)

  return (
    <>
      {!currentUser ? 
        <Login setCurrentUser={setCurrentUser}/> :
        <>
          <Header setCurrentUser={setCurrentUser} setCurrentCamera={setCurrentCamera} email={currentUser.email}/>
          <div className="h-screen bg-slate-900 flex flex-row">
            {/* Mobile View */}
            <MediaQuery maxWidth={1024}>
              {currentCamera === -1 ? 
                <CameraList cameras={cameraData} setCurrentCamera={setCurrentCamera} currentCamera={currentCamera} /> :
                <CameraView camera={cameraData[currentCamera]} setCurrentCamera={setCurrentCamera}/>
              }
            </MediaQuery>
            {/* Desktop View */}
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

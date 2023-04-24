import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import React, { useState } from "react";
import CameraList from "./components/CameraList";
import CameraView from "./components/CameraView";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [selectedCameraIdx, setSelectedCameraIdx] = useState(-1);

  return (
    <>
      <Header />
      {!loggedIn ? 
        <Login setLoggedIn={setLoggedIn} /> :
        <div className="h-screen bg-slate-900 flex flex-row">
          <CameraList />
          {selectedCameraIdx === -1 && <CameraView />}
        </div>
      }
      <Footer />
    </>
  );
}

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import React, { useState } from "react";
import CameraList from "./components/CameraList";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <Header />
      {!loggedIn ? 
        <Login setLoggedIn={setLoggedIn} /> :
        <CameraList />
      }
      <Footer />
    </>
  );
}

export default App;

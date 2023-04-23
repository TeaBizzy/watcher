import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import React, { useState } from "react";
import Cameras from "./components/Cameras";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <Header />
      {!loggedIn ? 
        <Login setLoggedIn={setLoggedIn} /> :
        <Cameras />
      }
      <Footer />
    </>
  );
}

export default App;

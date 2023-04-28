// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

import axios from "axios";
import React from "react";

// _______________________________________________________________________ //
// *----------------------------- Component -----------------------------* //

function Header(props) {

  const { setCurrentUser, setCurrentCamera, email } = props;

  function handleLogOut(e) {
    e.preventDefault();
    axios.post('http://localhost:3030/api/logout', {}, {withCredentials: true})
      .then(() => {
        setCurrentCamera(-1);
        setCurrentUser('');
      })
  }

  return (
    <header data-testid="header-component">
      <div className="fixed top-0 font-logo text-l md:text-4xl px-4 text-white w-full h-16 md:px-12 bg-violet-700 flex flex-row justify-between items-center">
        <h2>{email.toUpperCase()}</h2>
        <button 
          className="h-5/6 px-4 flex justify-center items-center rounded-md hover:bg-violet-300" 
          onClick={(e) => handleLogOut(e)}
        > 
          <h2>LOGOUT</h2>
        </button>
      </div>
    </header>
  )
}

export default Header;
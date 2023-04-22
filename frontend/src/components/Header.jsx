import React from "react";

function Header() {
  return (
    <header>
      <div className="fixed top-0 font-main text-l md:text-4xl px-4 text-white w-full h-16 md:px-12 bg-violet-700 flex flex-row justify-between items-center">
        <h2>user@email.com</h2>
        <button className="h-5/6 px-4 flex justify-center items-center rounded-md hover:bg-violet-300"> 
          <h2>LOGOUT</h2>
        </button>
      </div>
    </header>
  )
}

export default Header;
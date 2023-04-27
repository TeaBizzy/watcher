// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

import React from "react";
import { GiCctvCamera } from 'react-icons/gi'

// _______________________________________________________________________ //
// *----------------------------- Component -----------------------------* //

function Footer() {
  return (
    <footer>
      <div className="fixed bottom-0 w-screen h-16 bg-violet-700 flex flex-row">
        <div className="fixed bottom-0 left-6 w-24 h-24 bg-violet-700 rounded-full flex justify-center items-center">
          <GiCctvCamera className="fill-white h-16 w-16"/>
        </div>
        <h2 className="font-logo text-4xl text-white ml-32">WATCHER</h2>
      </div>
    </footer>
  )
}

export default Footer;
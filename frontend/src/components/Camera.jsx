// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

import React from "react";
import { FaWalking } from "react-icons/fa";
import { BsEar, BsCameraVideoOffFill } from "react-icons/bs";

// _______________________________________________________________________ //
// *----------------------------- Component -----------------------------* //
function Camera(props) {

  const { id, name, active, motion, sound, setCurrentCamera, isSelected } = props;

  return(
    <div className={`hover:bg-violet-700 h-24 w-full my-2 ${isSelected ? 'bg-violet-700' : 'bg-gray-600'} flex justify-between items-center`} onClick={() => setCurrentCamera(id)} data-testid="camera-component">
      <h2 className="text-white font-main text-l pl-2 md:text-xl">{name}</h2>
      <span className="h-full flex items-center">
        { (motion && active) && <FaWalking  className="fill-white h-6 w-6 md:h-12 md:hw-12" data-testid="motion-icon"/> }
        { (sound && active) && <BsEar className="fill-white h-6 w-6 md:h-12 md:w-12" data-testid="sound-icon"/> }
        { !active && <BsCameraVideoOffFill className="fill-white h-12 w-12" data-testid="inactive-icon"/> }
        <div className={`h-full w-2 ml-2 ${active ? 'bg-green-400' : 'bg-red-500'}`}></div>
      </span>
    </div>
  )
}

export default Camera;
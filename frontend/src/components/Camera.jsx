import React from "react";
import { FaWalking } from "react-icons/fa";
import { BsEar, BsCameraVideoOffFill } from "react-icons/bs";
import { useState } from "react";

function Camera(props) {

  const { active, detection } = props
  const [status, setStatus] = useState({
    active: true,
    sound: true,
    motion: true
  })

  return(
    <div className="h-24 my-2 bg-gray-600 flex justify-between items-center">
      <h2 className="text-white font-main text-l pl-2 md:text-xl">Camera Name</h2>
      <span className="h-full flex items-center">
        { status.motion && <FaWalking  className="fill-white h-6 w-6 md:h-12 md:hw-12"/> }
        { status.sound && <BsEar className="fill-white h-6 w-6 md:h-12 md:w-12"/> }
        { !status.active && <BsCameraVideoOffFill className="fill-white h-12 w-12"/> }
        <div className={`h-full w-2 ml-2 ${status.active ? 'bg-green-400' : 'bg-red-500'}`}></div>
      </span>
    </div>
  )
}

export default Camera;
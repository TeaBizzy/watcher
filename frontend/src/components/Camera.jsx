import React, {useEffect, useState} from "react";
import { FaWalking } from "react-icons/fa";
import { BsEar, BsCameraVideoOffFill } from "react-icons/bs";
import { generateStatus } from "../helpers/camera-status-simulator";

function Camera() {

  const [status, setStatus] = useState({
    active: true,
    sound: false,
    motion: false
  })

  // For visual testing of this component
  // TODO: Replace with actual data
  useEffect(() => {
    const intervalId = setInterval(() => setStatus(generateStatus()), 2000)

    return () => {clearInterval(intervalId)}
  }, [])

  return(
    <div className="h-24 my-2 bg-gray-600 flex justify-between items-center">
      <h2 className="text-white font-main text-l pl-2 md:text-xl">Camera Name</h2>
      <span className="h-full flex items-center">
        { (status.motion && status.active) && <FaWalking  className="fill-white h-6 w-6 md:h-12 md:hw-12"/> }
        { (status.sound && status.active) && <BsEar className="fill-white h-6 w-6 md:h-12 md:w-12"/> }
        { !status.active && <BsCameraVideoOffFill className="fill-white h-12 w-12"/> }
        <div className={`h-full w-2 ml-2 ${status.active ? 'bg-green-400' : 'bg-red-500'}`}></div>
      </span>
    </div>
  )
}

export default Camera;
import React from "react";
import { BsEar } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
import { BsCameraVideoOffFill } from "react-icons/bs";

function CameraView(props) {

  const { motion, sound, videoSrc } = props

  return (
    <div className="max-h-screen w-3/4 mt-16 pt-4 flex flex-col justify-start items-center">
      {videoSrc ? <iframe 
        title="YouTube video player"
        width="800" height="450" 
        src={`${videoSrc}?autoplay=1`}>
      </iframe> :
      <div className="bg-black flex flex-col justify-center items-center" style={{width: '800px', height: '450px'}}>
        <BsCameraVideoOffFill className="fill-white h-12 w-12"/>
        <p className="font-main text-white">OFFLINE</p>
      </div>
      }
      <div className="flex flex-row w-1/3 mt-4 justify-between">
        <div className={`w-72 h-24 bg-gray-600 border-t-8 border-violet-600 flex justify-around items-center rounded-b-md transition-opacity delay-1000 ${props.motion ? 'opacity-100' : 'opacity-0'}`}>
          <FaWalking  className="fill-white h-6 w-6 md:h-12 md:hw-12"/>
          <p className="text-2xl font-main text-white">Motion Detected</p>
        </div>
        <div className={`w-72 h-24 bg-gray-600 border-t-8 border-violet-600 flex justify-around items-center rounded-b-md transition-opacity delay-1000 ${props.sound ? 'opacity-100' : 'opacity-0'}`}>
          <BsEar className="fill-white h-6 w-6 md:h-12 md:w-12"/>
          <p className="text-2xl font-main text-white">Sound Detected</p>
        </div>
      </div>
    </div>
  )
}

export default CameraView;
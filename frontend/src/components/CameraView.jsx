import React from "react";
import { FaWalking } from "react-icons/fa";
import { BsCameraVideoOffFill, BsEar } from "react-icons/bs";
import { TfiBackLeft } from "react-icons/tfi"

function CameraView(props) {

  const { active, motion, sound, videoSrc, name } = props.camera
  const { setCurrentCamera } = props;

  return (
    <div className="max-h-screen w-full lg:w-3/4 mt-16 pt-4 pb-28 flex flex-col justify-start items-center">
      <div className="w-full px-4 lg:hidden flex items-center">
        <TfiBackLeft className="fill-white pr-2 w-12 bg-violet-700 h-24 hover:bg-gray-300" onClick={() => {setCurrentCamera(-1)}}/> 
        <div className={"h-24 w-full my-2 bg-gray-600 flex justify-between items-center"}>
          <h2 className="text-white font-main text-l pl-2 md:text-xl">{name}</h2>
          <span className="h-full flex items-center">
          <div className={`h-full w-2 ml-2 ${active ? 'bg-green-400' : 'bg-red-500'}`}></div>
          </span>
        </div>
      </div>
      <div className="w-full h-full px-4 md:px-24">
        {active ?
        <iframe 
          title="YouTube video player"
          src={`${videoSrc}?autoplay=1`}
          className="w-full h-full">
        </iframe> :
        <div className="bg-black flex flex-col justify-center items-center h-full w-full">
          <BsCameraVideoOffFill className="fill-white h-12 w-12"/>
          <p className="font-main text-white">OFFLINE</p>
        </div>
        }
      </div>
      <div className="flex flex-col w-full px-4 mt-4 justify-between lg:flex-row items-center">
        <div className={`w-full md:w-2/3 h-24 px-4 mb-4 md:mr-4 md:mb-0 border-t-8 bg-gray-600 border-violet-600 flex justify-center items-center rounded-b-md transition-opacity ${motion ? 'opacity-100' : 'opacity-0 duration-1000'}`}>
          <FaWalking  className="fill-white pr-2 h-12 w-12 lg:h-12 lg:w-12"/>
          <p className="lg:text-2xl text-lg font-main text-white whitespace-nowrap">Motion Detected</p>
        </div>
        <div className={`w-full md:w-2/3 h-24 px-4 border-t-8 bg-gray-600 border-violet-600 flex justify-center items-center rounded-b-md transition-opacity ${sound ? 'opacity-100' : 'opacity-0 duration-1000'}`}>
          <BsEar className="fill-white pr-2 h-12 w-12 lg:h-12 lg:w-12"/>
          <p className="lg:text-2xl text-lg font-main text-white whitespace-nowrap">Sound Detected</p>
        </div>
      </div>
    </div>
  )
}

export default CameraView;
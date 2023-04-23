import React from "react";
import Camera from "./Camera";

function CameraList() {
  return (
    <div className="bg-slate-900 min-h-screen pt-16 pb-24 px-4 md:w-1/4 flex flex-col overflow-y-clip">
      <Camera />
      <Camera />
      <Camera />
      <Camera />
      <Camera />
      <Camera />
      <Camera />
      <Camera />
    </div>
  )
}

export default CameraList;
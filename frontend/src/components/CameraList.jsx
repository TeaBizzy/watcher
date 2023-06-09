// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

import React from "react";
import Camera from "./Camera";

// _______________________________________________________________________ //
// *----------------------------- Component -----------------------------* //

function CameraList(props) {

  const { cameras, setCurrentCamera, currentCamera } = props;

  // Build Camera Components
  const cameraComponents = cameras.map((camera, idx) => {
    return <Camera 
      key={idx}
      id={idx}
      name={camera.name}
      active={camera.active}
      motion={camera.motion}
      sound={camera.sound}
      setCurrentCamera={setCurrentCamera}
      isSelected={currentCamera === idx}
      />
  })

  return (
    <div className="max-h-full mt-16 pb-24 px-4 w-full md:w-1/4 overflow-y-scroll" data-testid="camera-list-component">
      {cameraComponents}
    </div>
  )
}

export default CameraList;
// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

import { useEffect } from 'react';
import axios from 'axios';


// ___________________________________________________________________ //
// *----------------------------- Hooks -----------------------------* //

// Gets camera data from the server.
export default function useFetchCameras(currentUser, setCameraData) {
  useEffect(() => {
    if (!currentUser) {
      return
    }
    axios(`http://localhost:3030/api/camera/${currentUser.id}`, {withCredentials: true})
      .then(res => setCameraData(res.data))
      .catch(err => console.log(err))
  }, [currentUser])
}
import { useEffect } from 'react';
import { simulateDetections, simulateStatus } from '../helpers/camera-simulations';

// Updates camera states with simulated active status.
export function useSimulateStatus(setCameraData) {  
  const INTERVAL_SECONDS = 15 * 1000 // 15 Seconds

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCameraData(prev => {
        return prev.map((camera) => {
          return {...camera, active: simulateStatus()}
        })
      })
    }, INTERVAL_SECONDS)

    return () => clearInterval(intervalID);
  }, [])
};

// Updates camera states with simulated motion and sound detections.
export function useSimulateActivity(setCameraData) {
  const INTERVAL_SECONDS = 5 * 1000 // 5 Seconds

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCameraData(prev => {
        return prev.map((camera) => {
          return {...camera, ...simulateDetections()}
        })
      })
    }, INTERVAL_SECONDS)

    return () => clearInterval(intervalID);
  }, [])
};

// Simulates random motion and sound detection values.
export function simulateDetections() {
  const soundThreshold = 0.3;
  const motionThreshold = 0.5;
  const isSoundDetected = Math.random() >= soundThreshold;
  const isMotionDetected = Math.random() >= motionThreshold;

  return {motion: isMotionDetected, sound: isSoundDetected};
}

// Simulates a random status value.
export const simulateStatus = function() {
  const threshold = 0.9;
  const isActive = Math.random() < threshold;

  return isActive;
};
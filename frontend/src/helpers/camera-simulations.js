// Simulates random motion and sound detection values.
export function simulateDetections(randOverride = {}) {
  const soundThreshold = 0.3;
  const motionThreshold = 0.5;
  let isSoundDetected = !randOverride.sound ? Math.random() >= soundThreshold : randOverride.sound >= soundThreshold
  let isMotionDetected = !randOverride.motion ? Math.random() >= motionThreshold : randOverride.motion >= motionThreshold

  return {motion: isMotionDetected, sound: isSoundDetected};
}

// Simulates a random status value.
export const simulateStatus = function(randOverride) {
  const threshold = 0.9;
  let isActive = !randOverride ? Math.random() <= threshold : randOverride <= threshold

  return isActive;
};
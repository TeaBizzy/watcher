// Generates random statuses for visual debugging.

const motionThreshold = 0.6;
const soundThreshold = 0.6;
const activeThreshold = 0.9;

export const generateStatus = function() {
  const active = Math.random() < activeThreshold;
  const motion = active && Math.random() < motionThreshold;
  const sound = active && Math.random() < soundThreshold;

  return {active, motion, sound}
};
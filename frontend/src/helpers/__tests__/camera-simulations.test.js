import { simulateDetections, simulateStatus } from '../camera-simulations';

describe('Camera Simulations', () => {
  describe('simulateDetections()', () => {
    test('it should return the correct values', () => {
      const result1 = simulateDetections({sound: 1, motion: 1});
      const result2 = simulateDetections({motion: 1, sound: 0.1});
      const result3 = simulateDetections({sound: 1, motion: 0.1});

      expect(result1).toEqual({motion: true, sound: true});
      expect(result2).toEqual({motion: true, sound: false});
      expect(result3).toEqual({motion: false, sound: true});
    })
  })
  describe('simulateStatus()', () => {
    test('it should return the correct values', () => {
      const result1 = simulateStatus(0.1);
      const result2 = simulateStatus(1);

      expect(result1).toBe(true);
      expect(result2).toBe(false);
    })
  })
})
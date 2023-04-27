const isValidPath = require('../validate-path');

describe ('isValidPath()', () => {
  test('returns true when given a valid path', () => {
    const result = isValidPath('media/Backyard.mp4');

    expect(result).toBe(true);
  })

  test('returns false when given bad inputs', () => {
    const result1 = isValidPath(1);
    const result2 = isValidPath('');
    const result3 = isValidPath([]);

    expect(result1).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
  })
})
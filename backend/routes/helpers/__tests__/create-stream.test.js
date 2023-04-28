const createStream = require('../create-stream');

describe ('createStream()', () => {
  test('returns an object when given valid inputs', () => {
    const result = createStream('bytes=0-', 'media/Backyard.mp4')

    expect(result).not.toBe(null)
    expect(Object.keys(result)).toEqual(['file', 'head'])
  })

  test('returns null when given bad inputs', () => {
    const result1 = createStream('', '')
    const result2 = createStream('', 'media/Backyard.mp4')
    const result3 = createStream('bytes=0-', '')
    expect(result1).toBe(null)
  })
})
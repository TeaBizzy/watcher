const parseSQL = require('../parse-sql');

describe ('parseSQL()', () => {
  test('returns a non empty string when given a valid path', () => {
    const result = parseSQL('db/queries/get-camera-by-id.sql');

    expect(typeof(result)).toBe('string');
  })

  test('returns empty string when given bad inputs', () => {
    const result = parseSQL([]);

    expect(typeof(result)).toBe('string');
    expect(result.length).toBe(0);
  })

  test('returns an empty string when given an invalid path', () => {
    const result = parseSQL('invalid-folder/invalid-file');

    expect(typeof(result)).toBe('string');
    expect(result.length).toBe(0);
  })
})
const fs = require('fs');

// Parses .sql files into strings.
const parseSQL = (path) => {
  return fs.readFileSync(path, 'utf-8');
}

module.exports = parseSQL;
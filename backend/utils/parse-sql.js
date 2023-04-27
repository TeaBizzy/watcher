// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //
const fs = require('fs');
const isValidPath = require('./validate-path');

// Parses .sql files into strings.
const parseSQL = (path) => {
  if(isValidPath(path)) {
    return fs.readFileSync(path, 'utf-8');
  } else {
    return ''
  }
}

module.exports = parseSQL;
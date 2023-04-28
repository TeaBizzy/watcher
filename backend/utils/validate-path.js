// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const fs = require('fs');

// Checks if path is valid.
function isValidPath(path) {
  try {
    fs.accessSync(path);
    return true;
  } catch {
    return false;
  }
}


module.exports = isValidPath;
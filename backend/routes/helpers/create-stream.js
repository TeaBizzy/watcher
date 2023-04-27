const fs = require('fs');
const isValidPath = require('../../utils/validate-path');

// Creates a video stream to be sent as a response.
function createStream(rangeHeader, videoPath) {
  if(!isValidPath(videoPath) || !rangeHeader) {
    return null
  }

  const videoSize = fs.statSync(videoPath).size;
  const CHUNK_SIZE = (10 ** 6) * 5 // 5MB
  const start = Number(rangeHeader.replace(/\D/g, ""))
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end-start + 1;
  const file = fs.createReadStream(videoPath, {start, end});
  return {file, head: {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  }};
}

module.exports = createStream;
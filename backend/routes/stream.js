// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router = express.Router();
const fs = require('fs');
const parseSQL = require('../db/parse-sql');
const client = require('../db/connection');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

// Streams the camera by ID in 5MB chunks.
router.get('/:id', (req, res) => {
  const getCameraByID = parseSQL('db/queries/02_get-camera-by-id.sql')

  client.query(getCameraByID, [req.params.id])
    .then(data => {
      const videoPath = data.rows[0].path;
      const videoSize = fs.statSync(videoPath).size;
      const rangeHeader = req.headers.range;

      if(rangeHeader) {
        const CHUNK_SIZE = (10 ** 6) * 5 // 5MB
        const start = Number(rangeHeader.replace(/\D/g, ""))
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        const contentLength = end-start + 1;
        const file = fs.createReadStream(videoPath, {start, end});
        const head = {
          'Content-Range': `bytes ${start}-${end}/${videoSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': contentLength,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(206, {...head, ...corsOptions})
        file.pipe(res);
      } else {
        res.writeHead(400, 'Missing Range Header', {...corsOptions})
      }
    })
    .catch((err) => {
      res.status('404')
      res.send();
    })

})

module.exports = router;
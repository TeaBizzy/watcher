// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router = express.Router();
const parseSQL = require('../utils/parse-sql');
const client = require('../db/connection');
const createStream = require('./helpers/create-stream');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

// Streams the camera by ID in 5MB chunks.
router.get('/:id', (req, res) => {
  // Deny access if user isn't logged in
  if (!req.session.id) {
    return res.sendStatus(401);
  }

  const getCameraByID = parseSQL('db/queries/get-camera-by-id.sql')

  client.query(getCameraByID, [req.params.id])
    .then(data => {
      const stream = createStream(req.headers.range, data.rows[0].path)
      if (stream) {
        stream.file.pipe(res);
        res.writeHead(206, {...stream.head, ...corsOptions})
      } else {
        res.writeHead(400, 'Missing Range Header', {...corsOptions});
      }
    })
    .catch(() => {
      res.status(404);
      res.send();
    })
})

module.exports = router;
// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router = express.Router();
const cors = require('cors')
const parseSQL = require('../db/parse-sql');
const client = require('../db/connection');


// ________________________________________________________________________ //
// *----------------------------- Middleware -----------------------------* //

router.use(cors({origin: 'http://localhost:3000', credentials: true}))

// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

// Gets camers belonging to user.
router.get('/:user_id', (req, res) => {
  const getCamerasByUserID = parseSQL('db/queries/03_get-cameras-by-user-id.sql');
  if (req.session.id !== Number(req.params.user_id)) {
    return res.sendStatus(401); // Deny access if user isn't logged in
  }

  client.query(getCamerasByUserID, [req.params.user_id])
    .then(data => {
      const cameras = data.rows.map(camera => ({...camera, active: true})) // Set active to true initially.
      res.status(200)
      res.send(cameras)
    })
})

module.exports = router;
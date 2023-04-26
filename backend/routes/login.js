// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router = express.Router();
const cors = require('cors')
const bcrypt = require('bcrypt');
const parseSQL = require('../db/parse-sql');
const client = require('../db/connection');


// ________________________________________________________________________ //
// *----------------------------- Middleware -----------------------------* //

router.use(cors({origin: 'http://localhost:3000', credentials: true}))

// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

// Logs user in.
router.post('/', (req, res) => {
  const credentials = {...req.body};
  const getUserByEmail = parseSQL('db/queries/01_get-users-by-email.sql');

  client.query(getUserByEmail, [credentials.email]) // Validate email first.
    .then(data => {
      return bcrypt.compare(credentials.password, data.rows[0].password) // Validate password.
        .then(result => {
          // Compare returns true or false instead of a rejection, reject if false.
          if(!result) {
            return Promise.reject()
          }
          req.session.email = data.rows[0].email // Create encrypted cookie.
          res.status(200)
          res.json(data.rows[0].email)
        })
    })
    .catch(() => {
      res.status(401)
      res.send('Invalid Email or Password')
    })
})

// Logs user out.
router.post('/logout', (req, res) => {
  req.session = null; // Delete encrypted cookie.
  res.status(200);
  res.send()
})

module.exports = router;
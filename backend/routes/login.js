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
  
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  const credentials = {email, password};
  const getUserByEmail = parseSQL('db/queries/get-users-by-email.sql');

  client.query(getUserByEmail, [credentials.email]) // Validate email first.
    .then(data => {
      return bcrypt.compare(credentials.password, data.rows[0].password) // Validate password.
        .then(result => {
          // Compare returns true or false instead of a rejection, reject if false.
          if(!result) {
            return Promise.reject()
          }

          // Create encrypted cookie.
          req.session.email = data.rows[0].email 
          req.session.id = data.rows[0].id

          res.status(200)
          res.send({id: data.rows[0].id, email: data.rows[0].email})
        })
    })
    .catch(() => {
      res.status(401)
      res.send('Invalid Email or Password')
    })
})

router.get('/validate', (req, res) => {
  if(req.session.email) {
    res.status(200)
    res.send({email: req.session.email, id: req.session.id});
  } else {
    req.session = null; // Delete bad cookie.
    res.sendStatus(400)
  }
})

module.exports = router;
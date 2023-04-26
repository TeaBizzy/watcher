const express = require('express');
const cors = require('cors')
const client = require('./db/connection.js');
const app = express();
const port = 3030;
const parseSQL = require('./db/parse-sql.js');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'], //TODO: Add more keys

  maxAge: 24 * 60 * 60 * 1000 //24 hours
}))
app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Watcher server listening on port ${port}`)
})

// Log User In
app.post('/login', (req, res) => {
  const credentials = {...req.body};
  const getUserByEmail = parseSQL('db/queries/01_get-users-by-email.sql');

  client.query(getUserByEmail, [credentials.email])
    .then(data => {
      return bcrypt.compare(credentials.password, data.rows[0].password)
        .then(result => {
          if(!result) {
            return Promise.reject()
          }
          req.session.email = data.rows[0].email
          res.status(200)
          res.json(data.rows[0].email)
        })
    })
    .catch(err => {
      res.status(401)
      res.send('Invalid Email or Password')
    })
})

// Logs user out
app.post('/logout', (req, res) => {
  req.session = null;
  res.status(200);
  res.send()
})

module.exports = app;
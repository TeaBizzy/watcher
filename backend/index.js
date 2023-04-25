const express = require('express');
const cors = require('cors')
const client = require('./db/connection.js');
const app = express();
const port = 3030;
const parseSQL = require('./db/parse-sql.js');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

app.use(cors({origin: 'http://localhost:3000'}))
app.use(bodyParser.json());
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
    })
    .then(result => {
      if(!result) return Promise.reject()
      console.log(`Logged in successfully as ${credentials.email}`)
      res.status(200)
      res.send()
    })
    .catch(err => {
      console.log('Invalid Email or Password')
      res.status(400)
      res.send('Invalid Email or Password')
    })
})

module.exports = app;
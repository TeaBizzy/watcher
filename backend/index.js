const express = require('express');
const cors = require('cors')
const app = express();
const port = 3030;

app.use(cors({origin: 'http://localhost:3000'}))

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Watcher server listening on port ${port}`)
})

module.exports = app;
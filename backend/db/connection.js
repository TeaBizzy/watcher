// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const pg = require('pg');
require('dotenv').config();


const conString = process.env.PG_URL
client = new pg.Client(conString);

// Connects to the remote database.
client.connect((err) => {
  if(err) {
    console.error('Could not connect to database!', err);
  } else {
    console.log('Connected to database successfully');
  }
});

module.exports = client;
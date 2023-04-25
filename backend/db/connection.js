const pg = require('pg');
require('dotenv').config();

const conString = process.env.PG_URL
client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  } else {
    console.log('Connected')
  }
});

module.exports = client;
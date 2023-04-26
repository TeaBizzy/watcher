// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const PORT = 3030;
const app = express();


// ________________________________________________________________________ //
// *----------------------------- Middleware -----------------------------* //

app.use(bodyParser.json());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000 //24 hours
}))


// _____________________________________________________________________ //
// *---------------------------- Resources ----------------------------* //

const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const streamRoutes = require('./routes/stream');


// _____________________________________________________________________ //
// *----------------------------- Routing -----------------------------* //

app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/stream", streamRoutes);


// _______________________________________________________________________ //
// *----------------------------- Listening -----------------------------* //

app.listen(PORT, () => {
  console.log(`Watcher server listening on port ${PORT}`)
})

module.exports = app;
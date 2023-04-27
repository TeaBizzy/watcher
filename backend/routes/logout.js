// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router = express.Router();
const cors = require('cors');


// ________________________________________________________________________ //
// *----------------------------- Middleware -----------------------------* //

router.use(cors({origin: 'http://localhost:3000', credentials: true}));

// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

// Logs user out.
router.post('/', (req, res) => {
  req.session = null; // Delete encrypted cookie.
  res.status(200);
  res.send();
})

module.exports = router;
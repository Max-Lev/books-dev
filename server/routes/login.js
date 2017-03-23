const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/login', (req, res) => {
  console.log('login route');
  res.send('login working');
});

module.exports = router;
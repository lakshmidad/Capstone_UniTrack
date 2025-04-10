const express = require('express');
const router = express.Router();  

router.get('/ping', (req, res) => {  
  res.json({ message: 'Pong from UniTrack API 🎯' });  
});

module.exports = router;  

const express = require('express');
const router = express.Router();
const db = require('../controllers/dataController');
router.get('/count', (req, res) => {
  db.getCounts((data) => {
    res.send(data);
  });
});
router.post('/inccount', (req, res) => {
  db.incCounts((msg) => {
    res.send(msg);
  });
});
router.get('/survey', (req, res) => {
  db.getSurvey((data) => {
    console.log(data);
    res.send(data);
  });
});
router.get('/explanation', (req, res) => {
  db.getExplanation((data) => {
    console.log(data);
    res.send(data);
  });
});

module.exports = router;

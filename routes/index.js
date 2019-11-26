var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get("/home", (req, res) => {
  res.json({ message: "INI HOME"})
})

module.exports = router;

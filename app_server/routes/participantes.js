var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');


router.get('/', ctrlMain.participantes);

module.exports = router;
var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');


router.get('/', ctrlMain.login);

module.exports = router;
var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');


router.get('/', ctrlMain.form);
router.post('/add', ctrlMain.formSubmit);

module.exports = router;
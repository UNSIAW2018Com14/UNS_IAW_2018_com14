var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.integrantesForm);
//router.post('/add', ctrlMain.integrantesFormSubmit);

module.exports = router;
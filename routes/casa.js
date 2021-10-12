const express = require('express');
const router = express.Router();

const casaController = require('../controllers/casaController');

router.get('/', casaController.list);
router.post('/add', casaController.save);

module.exports = router;
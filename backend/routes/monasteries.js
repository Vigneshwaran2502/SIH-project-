const express = require('express');
const router = express.Router();
const monasteryController = require('../controllers/monasteryController');

router.get('/', monasteryController.getAllMonasteries);
router.get('/:id', monasteryController.getMonasteryById);
router.post('/', monasteryController.createMonastery);

module.exports = router;
const express = require('express');
const homecontroller = require('../controller/homecontroller');

const router = express.Router();

router.get('/',homecontroller.homePage);
router.post('/parking',homecontroller.createParking);
router.get('/parking',homecontroller.getParking);
router.put('/parking/:id', homecontroller.updateParking);
router.delete('/parking/:id', homecontroller.deleteParking);
router.put('/parking/avilability/:id', homecontroller.addParkingAvilability);

module.exports = router;
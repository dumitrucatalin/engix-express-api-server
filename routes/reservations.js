const express = require('express');
const reservationsValidationsSchema = require('../middlewares/validation/reservationsSchema');
const reservationsController = require('../controllers/reservations');

const router = express.Router();

router.get('/', reservationsValidationsSchema.validateGetReservations, reservationsController.getReservations);

router.post('/', reservationsValidationsSchema.validateAddReservation, reservationsController.createReservation);


module.exports = router;
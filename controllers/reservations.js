const Reservation = require('../models/reservation');

const getReservations = async (req, res, next) => {
  try {
    const { email } = req;
    let reservations = await Reservation.findAll({
      raw: true,
      where: {
        email: email,
      },
    });

    reservations = reservations.map((reservation) => {
      reservation.createdAt = undefined;
      reservation.updatedAt = undefined;
      return reservation;
    });

    return res.status(200).send(reservations);
  } catch (error) {
    return res.status(error.statusCode || 422).send({ message: error.message });
  }
};

const createReservation = async (req, res, next) => {
  try {
    const reservation = req.body;
    const reservations = await Reservation.create(reservation);
    
    return res.status(201).json(reservations);
  } catch (error) {
    return res.status(error.statusCode || 422).send({ message: error.message });
  }
};

const reservationsController = {
  createReservation,
  getReservations,
};

module.exports = reservationsController;

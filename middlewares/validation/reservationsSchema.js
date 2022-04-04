const Joi = require('joi');
const UserInputError = require("../../errors/UserInputError");

const addReservationSchema = Joi.object().keys({
    name: Joi.string().required(),
    seats: Joi.number().max(8).min(1).required(),
    email: Joi.string().email().required(),
    optional: Joi.optional(),
    reservationDate: Joi.date().required(),
});

const getReservationsSchema = Joi.object().keys({
    email: Joi.string().email().required(),
});

const validateAddReservation = (req, res, next) => {
    try {
        const validation = addReservationSchema.validate(req.body);
        if (validation.error === undefined) {
            req.reservation = validation.value;
            next();
        } else {
            throw new UserInputError({ code: 422, message: validation.error.message ? validation.error.message : 'Invalid schema' });
        }
    } catch (error) {
        throw new UserInputError({ code: 422, message: error.message ? error.message : 'Invalid schema' });
    }
}

const validateGetReservations = (req, res, next) => {
    try {
        const validation = getReservationsSchema.validate(req.query);
        if (validation.error === undefined) {
            req.email = validation.value.email;
            next();
        } else {
            throw new UserInputError({ code: 400, message: 'Invalid schema' });
        }
    } catch (error) {
        throw new UserInputError({ code: 422, message: error.message ? error.message : 'Invalid schema' });
    }
}

const reservationsValidationsSchema = {
    validateAddReservation,
    validateGetReservations
}

module.exports = reservationsValidationsSchema;
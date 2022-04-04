const Sequelize = require('sequelize');

const sequelize = require('../database/db.config');

const Reservation = sequelize.define('reservation', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    seats: Sequelize.INTEGER,
    email: Sequelize.STRING,
    optional: Sequelize.STRING,
    reservationDate: Sequelize.DATE,
});

module.exports = Reservation;

const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    houseNumber: {
        type: Sequelize.STRING
    },
    street: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    zipCode: {
        type: Sequelize.STRING
    },
    cardNumber: {
        type: Sequelize.STRING 
    },
    cardExpiration: {
        type: Sequelize.DATE,
        validate: {
            isDate: true
        }
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

module.exports = User

const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    modelNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: ''
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            isDecimal: false
        }
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    imageUrl: {
        type: Sequelize.STRING,

    }
})

module.exports = Product

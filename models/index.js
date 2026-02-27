require('dotenv').config()
const { Sequelize } = require('sequelize')

// initialize the db object
const db = {}

// configure the sequelize connection
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DIALECT,
    logging: false,
})

// add the sequelize connection to the db object
db.sequelize = sequelize

// Initialize our models
db.Cars = require('./cars')(sequelize)
db.Customers = require('./customers')(sequelize)

// Associations:
// One-to-many
// A customer can buy many cars, a car belongs to a single customer
db.Customers.hasMany(db.Cars)
db.Cars.belongsTo(db.Customers)

// export the db object
module.exports = db
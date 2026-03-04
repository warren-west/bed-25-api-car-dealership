const { DataTypes } = require('sequelize')

// Create and export the Customer model
module.exports = (sequelize) => {
    const Customers = sequelize.define('Customers', {
        fullname: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
    }, {
        timestamps: false
    })
    return Customers
}
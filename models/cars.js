const { DataTypes } = require('sequelize')

// Create and export the Cars model
module.exports = (sequelize) => {
    const Cars = sequelize.define('Cars', {
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        year: DataTypes.STRING(4),
    }, {
        timestamps: false
    })
    return Cars
}
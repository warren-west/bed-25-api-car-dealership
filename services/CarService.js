const { Op } = require('sequelize')

class CarService {
    constructor(db) {
        this.db = db
        this.Cars = db.Cars
    }

    // retrieve all cars from the db
    async getAll(brand) {

        if (!brand) {
            // we don't have a search parameter
            return this.Cars.findAll()
        } else {
            // we have a search parameter
            console.log(`CarService:`)
            console.log(brand)
            return this.Cars.findAll({
                where: {
                    brand: { [Op.like]: `%${brand}%` } // partial match
                }
            })
        }
    }

    async populate() {
        return this.Cars.bulkCreate(require('../data/carData'))
    }

    // other CRUD functionality
}

module.exports = CarService
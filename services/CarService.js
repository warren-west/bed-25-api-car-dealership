const { Op } = require('sequelize')

class CarService {
    constructor(db) {
        this.db = db
        this.Cars = db.Cars
    }

    // retrieve all cars from the db
    async getAll(brand = '', model = '', order = '', limit = 100, offset = 0) {
        // determine the order:
        const orderText = order.toLowerCase() === 'descending' ? "DESC" : "ASC"
        
        return this.Cars.findAll({
            // Mimicking this SQL: SELECT * FROM cars ...
            where: {
                // WHERE brand LIKE %{:brand}% AND model LIKE '%%';
                brand: { [Op.substring]: brand },
                model: { [Op.substring]: model },
            },
            order: [
                [ 'brand', orderText ], // ORDER BY <field to order by> DESC;
                [ 'model', orderText ]
            ],
            limit, // object literals (discard the value if the value matches the property)
            offset,
        })
    }

    // other CRUD functionality
    async getCarById(id) {
        // return the single car object that matches the ID from the DB
        return this.Cars.findByPk(id)
    }
    
    // bulk create
    async populate() {
        // insert an array of objects in one DB call / operation
        return this.Cars.bulkCreate(require('../data/carData'))
    }
}

module.exports = CarService
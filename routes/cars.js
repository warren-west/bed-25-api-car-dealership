const router = require('express').Router()
const db = require('../models')
const CarService = require('../services/CarService')
const carsService = new CarService(db)

// GET / cars
router.get('/', async (req, res) => {
    // check for search query
    const { brand } = req.query
    let cars = []

    // if (!search) {
        // fetch all cars from the Db
        cars = await carsService.getAll(brand)

        // render the cars view
        res.render('cars', { cars })
        return
    // }

    // deal with the search query
    // cars = 

})


module.exports = router
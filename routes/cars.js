const router = require('express').Router()
const db = require('../models')
const CarService = require('../services/CarService')
const carsService = new CarService(db)

// GET / cars
router.get('/', async (req, res) => {
    // check for search query
    const { brand, model, order } = req.query
    let { limit, page = 1 } = req.query

    // validation for limit
    if (!limit || isNaN(limit)) {
        limit = 10
    }

    // validation for page
    if (!page || isNaN(page)) {
        page = 1
    }

    let offset = (page - 1) * limit
    
    // fetch all cars from the Db (and pass brand filter)
    const cars = await carsService.getAll(brand, model, order, Number(limit), offset)
    console.log("Results (cars):")
    console.log(cars)

    // render the cars view
    res.render('cars', { cars, brandFilter: brand, modelFilter: model, order, page, limit })
    return
})

router.get('/:id', async (req, res) => {
    // get the car ID from the req.params
    const { id } = req.params

    // use the ID to find a single car from the DB
    const carDetails = await carsService.getCarById(id)

    // render the carDetails page
    res.render('carDetails', { carDetails })
})


module.exports = router
const router = require('express').Router()
const db = require('../models')
const CarService = require('../services/CarService')
const carService = new CarService(db)
// const CustomerService = require('../services/CustomerService')
// const customerService = new CarService(db)

// POST /populate
router.post('/cars', async (req, res) => {
    // call the populate function from the service
    await carService.populate()

    // res.status(201).json({ message: "Car table populated!" })
    res.redirect('/cars')
})

router.post('/customers', async (req, res) => {
    // use customerService.populate() to populate database
    res.end()
})

module.exports = router
const router = require('express').Router()
const db = require('../models')
const CarService = require('../services/CarService')
const carService = new CarService(db)
// Below are services we haven't used yet because we haven't implemented populating customers yet
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
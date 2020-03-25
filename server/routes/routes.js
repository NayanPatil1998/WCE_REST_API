const express = require('express')
const testimonials = require('../Testimonials/controller')
const router = express.Router();
const contact = require('../ContactUs/controller')



//  ********************* Testimonials Routes Start ****************************************

router.get('/testimonials', async(req, res, next) => {
    try {
        let results = await testimonials.all();
        res.json(results)
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/testimonials', async(req, res, next) => {
    try {
        let results = await testimonials.insert(req.body);
        res.json({
            message: "Inserted Successfully"
        })
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

})

//  ********************* Testimonials Routes End ****************************************


// *********************** Contact us Route start ******************************

router.post('/contact', async(req, res, next) => {
    try {
        let results = await contact.insert(req.body);
        res.sendStatus(200).json({
            message: "Inserted Successfully"
        })
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

})

// *********************** Contact us Route End ******************************






module.exports = router
const { Router } = require("express");
const { auth } = require('../middlewares/auth');
const Airport = require('../models/airport.model')

const router = Router();

router.post('/airport', auth, async(req, res)=>{
    try{
        const flight = await Flight.create(req.body);
        return res.status(200).send(flight)
    } catch (error) {
        return res.status(500).send({
            message : error.message
        })
    }
})

router.get('/airport/:id', auth, async(req, res) => {
    try{
        const flight = await Flight.findById(req.params.id).lean().exec()
        return res.status(200).send(flight)
    } catch (error) {
        return res.status(500).send({
            message : error.message
        })
    }
})

router.get('/airports', auth, async(req, res) => {
    try{
        const flight = await Flight.find().lean().exec();
        return res.status(200).send(flight)
    } catch (error ) {
        return res.status(500).send({message : error.message})
    }
})

router.delete("/airport/:id", auth, async (req, res) => {
    try {
      const flight = await Flight.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
      return res.status(200).send(flight);
    } catch (error) {
      return res.status(500).send({message : error.message});
    }
  });

  module.exports = router;


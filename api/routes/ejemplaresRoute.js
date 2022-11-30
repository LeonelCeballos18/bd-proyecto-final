let ejemplaresController = require('controllers/ejemplaresController.js');
let router =require('express').Router()

router.get('/nombres', (req, res) => {
    res.json({ message: 'Vas a ver los nombres de todas las especies'})
    ejemplaresController.nombres(req, res);
})
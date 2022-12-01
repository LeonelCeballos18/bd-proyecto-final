let router = require('express').Router();

let ejemplares = require('../routes/ejemplaresRoute.js');
router.use('/ejemplares',ejemplares)
let especies = require('../routes/especiesRoute.js');
router.use('/especies',especies)
let login = require('../routes/loginRoute.js');
router.use('/login',login)

router.get('/', function (res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })
module.exports = router;
let router = require('express').Router()
import ejemplares from './ejemplaresRoute.js';
router.use('/ejemplares', ejemplares);
import especies from './especiesRoute.js';
router.use('/especies', especies)

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router;
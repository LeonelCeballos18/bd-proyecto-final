let router = require('express').Router();
let loginController = require('../controllers/loginController')

router.post('/validacion', (req, res) => {
    loginController.validacion(req, res);
})

module.exports = router;

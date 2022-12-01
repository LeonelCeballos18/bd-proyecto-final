let router=require('express').Router();
let ejemplaresController = require('../controllers/ejemplaresController')

router.get('/',(res)=>{
    res.send("Estas conectado a ejemplares")
})

router.get('/listar-nombres',(req,res)=>{
    ejemplaresController.listarNombres(req, res);
})

router.post('/agregar',(req,res)=>{
    ejemplaresController.agregar(req, res);
})

router.delete('/eliminar',(req,res)=>{
    ejemplaresController.eliminar(req, res);
})

module.exports = router;
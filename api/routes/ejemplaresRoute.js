let router=require('express').Router();
let ejemplaresController = require('../controllers/ejemplaresController')

router.get('/listar-nombres',(req,res)=>{
    ejemplaresController.listarNombres(req, res);
})

router.get('/obtener-info',(req, res) => {
    ejemplaresController.obtenerInfo(req, res);
})

router.get('/busqueda-libre',(req, res) => {
    ejemplaresController.busquedaLibre(req, res);
})

router.post('/agregar',(req,res)=>{
    ejemplaresController.agregar(req, res);
})

router.put('/actualizar',(req, res) => {
    ejemplaresController.actualizar(req, res);
})

router.delete('/eliminar',(req,res)=>{
    ejemplaresController.eliminar(req, res);
})

module.exports = router;
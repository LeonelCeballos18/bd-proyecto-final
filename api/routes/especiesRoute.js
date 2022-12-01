let router = require('express').Router();
let especieController = require('../controllers/especiesController'); 

router.get('/nombre-generico',(req,res)=>{
    especieController.listarNombresGenericos(req, res);
})

router.get('/nombre-cientifico',(req,res)=>{
    especieController.listarNombresCientifico(req, res);
})

router.get('/obtener-info',(req, res) => {
    especieController.obtenerInfo(req, res);
})

router.get('/ejemplar-especie',(req,res)=>{
    especieController.listarEjemplarEspecie(req, res);
})

router.get('/buscar-nombre',(req, res) => {
    especieController.buscarNombre(req, res);
})

router.get('/buscar-id',(req, res) => {
    especieController.buscarId(req, res);
})

router.post('/agregar',(req,res)=>{
    especieController.agregar(req, res);
})

router.put('/actualizar',(req, res) => {
    especieController.actualizar(req, res);
})

router.delete('/eliminar',(req,res)=>{
    especieController.eliminar(req, res);
})

module.exports = router;
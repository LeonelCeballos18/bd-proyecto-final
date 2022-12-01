let router = require('express').Router();
let especieController = require('../controllers/especiesController'); 

router.get('/',(res)=>{
    res.send("Estas conectado a especie");
})

router.get('/nombre-generico',(req,res)=>{
    especieController.listarNombresGenericos(req, res);
})

router.get('/nombre-cientifico',(req,res)=>{
    especieController.listarNombresCientifico(req, res);
})

router.post('/agregar',(req,res)=>{
    especieController.agregar(req, res);
})

router.get('/ejemplar-especie',(req,res)=>{
    especieController.listarEjemplarEspecie(req, res);
})

router.delete('/eliminar',(req,res)=>{
    especieController.eliminar(req, res);
})

module.exports = router;
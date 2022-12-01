let mysql = require('../sql/sqlapp');

module.exports = {
    listarNombresGenericos:(req, res) => {
        mysql.query('call nombreEspeciesGenerico;', (err, results) => {
            if(!err) 
                res.json(results)
            else
                res.json(err)
        });
    },
    
    listarNombresCientifico:(req, res) => {
        mysql.query('call nombreEspeciesCientifico;', (err, results) => {
            if(!err) 
                res.json(results)
            else
                res.json(err)
        });
    },

    listarEjemplarEspecie:(req, res) => {
        mysql.query('call ejemplarEspecie;', (err, results) => {
            if(!err) 
                res.json(results)
            else
                res.json(err)
        });
    },

    agregar:(req, res) => {
        mysql.query(`call nuevaEspecie('${req.param.nombre_generico}', '${req.param.nombre_cientifico}', '${req.param.familia}', '${req.param.descripcion_cuidado}', '${req.param.explicacion_especie}');`, (err, results) => {
            if(!err) 
                res.json(results)
            else
                res.json(err)
        });
    },

    eliminar:(req, res) => {
        mysql.query(`call eliminar('${req.param.tabla}', '${req.param.campo_id}', ${req.param.id});`, (err, results) => {
            if(!err) 
                res.json(results)
            else
                res.json(err)
        })
    },

    actualizar:(req, res) => {
        mysql.query(`call actualizarEspecies(${req.param.id_especie}, '${req.param.nombre_generico}', '${req.param.nombre_cientifico}', '${req.param.familia}', '${req.param.descripcion_cuidado}', '${req.param.explicacion_especie}');`, (err, results) => {
            if(!err)
                res.json(results)
            else
                res.json(err)
        })
    },

    obtenerInfo:(req, res) => {
        mysql.query(`call obtenerInfoEspecies(${req.param.id_especie});`, (err, results) => {
            if(!err)
                res.json(results)
            else
                res.json(err)
        })
    },

    buscarNombre:(req, res) => {
        mysql.query(`call buscarEspecieNombre(${req.param.nombre});`, (err, results) => {
            if(!err)
                res.json(results)
            else
                res.json(err)
        })
    },

    buscarId:(req, res) => {
        mysql.query(`call buscarEspecieId(${req.param.id_especie});`, (err, results) => {
            if(!err)
                res.json(results)
            else
                res.json(err)
        })
    }
}
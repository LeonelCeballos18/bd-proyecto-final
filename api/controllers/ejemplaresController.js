let mysql = require('../sql/sqlapp');

module.exports = {
    listarNombres:(req, res) => {
        mysql.query('call nombreEjemplares;', (err, results) => {
            if(!err) 
                res.json(results)
            else
                res.json(err)
        })
    },

    agregar:(req, res) => {
        mysql.query(`call nuevoEjemplar(${req.param.codigo}, ${req.param.fk_especie}, ${req.param.fecha_nac}, ${req.param.fecha_defuncion}, '${req.param.nombre}', '${req.param.padre}', '${req.param.madre}', ${req.param.pertenece_zoo});`, (err, results) => {
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
        mysql.query(`call actualizarEjemplares(${req.param.id}, ${req.param.codigo}, ${req.param.fk_especie}, '${req.param.fecha_nac}', '${req.param.fecha_defuncion}', '${req.param.nombre}', '${req.param.padre}', '${req.param.madre}', ${req.param.pertenece_zoo});`, (err, results) => {
            if(!err)
                res.json(results)
            else
                res.json(err)
        })
    },

    obtenerInfo:(req, res) => {
        mysql.query(`call obtenerInfoEjemplares(${req.param.id_ejemplar});`, (err, results) => {
            if(!err)
                res.json(results)
            else
                res.json(err)
        })
    },

    busquedaLibre:(req, res) => {
        mysql.query(`call busquedaLibre('${req.param.secuenciaSQL}');`, (err, results) => {
            if(!err)
                res.json(results)
            else
                res.json(err)
        })
    }
}
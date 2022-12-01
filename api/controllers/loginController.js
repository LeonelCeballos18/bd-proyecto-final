let mysql = require('../sql/sqlapp');

module.exports = {
    validar:(req, res) => {
        mysql.query(`select * from usuario_autenticacion where nombre_usuario = ${req.param.nombre_usuario} and clave = sha1('${req.param.clave}');`, (err) => {
            if(err) 
                return err;
            else 
                res.json(req.body)
        })
    }
}
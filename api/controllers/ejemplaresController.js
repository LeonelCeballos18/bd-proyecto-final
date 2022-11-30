let mysql = require('sql/sqlapp.js');

module.exports = {
    nombres:(req, res) => {
        console.log(req.body);
        mysql.query('select nombre from ejemplares', (err, rows) => {
            if(!err) 
                res.json(rows)
            else
                res.json(err)
        })
    }
}
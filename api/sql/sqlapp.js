let mysql    = require('mysql');
let conexion = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'athldept987',
  port     : '3308',
  database : 'zoo'
});
 
conexion.connect((err) => {
  if(err) throw err
  else console.log('BD conectada')
});
 
module.exports = conexion;
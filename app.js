var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3308',
  user     : 'root',
  password : 'athldept987',
  database : 'zoo'
});

connection.connect(function(err) {
    if (err) 
      throw err;
    else 
      console.log('Conexión exitosa - ID: ' + connection.threadId);
  });

  /* connection.query('select * from cuidadores limit 5', function(err, results) {
    if(err) 
      throw err;
      
      results.forEach(result => {
        console.log(`${result.id_cuidador} - ${result.nombre}`)
      });
    }); */

connection.end();


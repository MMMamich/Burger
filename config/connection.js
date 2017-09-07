var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Riseagainst123',
  database: 'burgers_db'

})

connection.connect(function(err){
    if(err)throw err;
    console.log("connect as id: "+connection.threadid);

});

module.exports = connection;

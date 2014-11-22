var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

//connection.connect();
//Basic Query: ----------------------------------
var query = function(query, callback){
  connection.query(query, callback);
}

//special callbacks for query-----------------------------
var getMessages = function(res){
  query('SELECT * FROM MESSAGES', function(err, rows, fields) {
    if (err) throw err;

    console.log('rows:', rows);
    res.end(JSON.stringify(rows));
  });
};



//var postMessages


//basic query(callback)

//callbacks:
  //get messages
  //get msg from user
  //post msg
  //post usr
var exports = module.exports;
exports.getMessages = getMessages;

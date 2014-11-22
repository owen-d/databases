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
  query('SELECT user.name, messages.message, messages.time FROM messages INNER JOIN user ON user.userID = messages.userID', function(err, rows, fields) {
    if (err) throw err;

    console.log('rows:', rows);
    res.end(JSON.stringify(rows));
  });
};
var postMessages = function(res, obj) {

  query('INSERT INTO messages (name, message, time, room, userID) VALUES ('+obj.name+', '+obj.message+', '+obj.time+', '+obj.room+', '+obj.userID+');', function(err, rows, fields){
    if (err) throw err;
    res.end('message sent');
  });
};

var getUsers = function(res){
  query('SELECT user.userID, user.name FROM user', function(err, rows, fields){

    if (err) throw err;

    res.end(JSON.stringify(rows));
  });
}

var postUsers = function(res, obj) {
  query('INSERT INTO user (name) VALUES ('+obj.name+');', function(err, rows, fields){
    if (err) throw err;
    res.end('User added.');
  });
}

//var postMessages
//SELECT name, message,time
//FROM messages
//INNER JOIN user
//on user.userID = messages.userID

//basic query(callback)

//callbacks:
  //get messages
  //get msg from user
  //post msg
  //post usr
var exports = module.exports;
exports.getMessages = getMessages;
exports.postMessages = postMessages;
exports.getUsers = getUsers;
exports.postUsers = postUsers;

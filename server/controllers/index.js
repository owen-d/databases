var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db/index.js');



module.exports = {
  messages: {
    get: function (req, res) {
      // res.end('hi');
      db.getMessages(res);
      //get messages from message table in database
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //on data
      //on end insert data into database.
      db.postMessage(req.body);
      // console.log(req.body);
      // db.postMessages();
      res.end();
      //post messages into messages table
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.getUsers(res);

    },
    post: function (req, res) {
      db.postUsers(req.body);
      res.end();
      //post username into user table
    }
  }
};



//DB functions


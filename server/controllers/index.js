var models = require('../models');
var bluebird = require('bluebird');
var db = require('./db/index.js');



module.exports = {
  messages: {
    get: function (req, res) {
      res.end('works');
      res.end(console.log(db.getMessages()), db.getMessages());
      //get messages from message table in database
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //post messages into messages table
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //post username into user table
    }
  }
};



//DB functions


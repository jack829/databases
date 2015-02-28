var models = require('../models');
var bluebird = require('bluebird');

// Takes the requests from the client (?) and passes them to the models...

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {

      models.messages.get(function(queryRes){
        res.send(queryRes);
      });
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      models.messages.post(req.body, function(queryRes){
        res.send(queryRes);
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(queryRes){
        res.send(queryRes);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function(queryRes){
        res.send(queryRes);
      });
    }
  }
};


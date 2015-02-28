var db = require('../db');


//actually queries the database for messages/users/rooms
// use db.query('queryString', function(){})
module.exports = {
  messages: {
    // a function which produces all the messages
    // get: function () {
    //   queryString= "select"
    //}, 
    // a function which can be used to insert a message into the database
    post: function (data, callback) {
      console.log('MESSAGE data ',data);
      var queryString = 'insert into messages (username, roomname, text) values';
      var valueString = '(' + '"' + data.username + '"' +',' + '"' + data.roomname + '"' +',' +'"' + data.text +'"' +')';
      queryString += valueString;
      console.log('MESSAGE queryString ',queryString);
      db.query(queryString, function(data){
        callback(data);
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, callback) {
      console.log('USER data ',data);
      var queryString = 'insert into usernames (name) values';
      var valueString = '(' + "'" + data.username +"'" +')';
      queryString += valueString;
      console.log('USERS queryString ',queryString);
      db.query(queryString, function(data){
        callback(data);
      });
    } 
  }

  /*
  rooms: {
    get: function() {},
    post: funciton() {}
  }
  */
};




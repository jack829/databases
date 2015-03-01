var db = require('../db');
var queryString;

//actually queries the database for messages/users/rooms
// use db.query('queryString', function(){})
module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (data, callback) {
      //queryString= "select * from messages where roomname ="+'"'+data.roomname+'"';

      queryString= "select * from messages";
      db.query(queryString, function(err,data){
        if(err){
          console.log("err");
        }
        
        callback(data);
      });
    }, 
    // a function which can be used to insert a message into the database
    post: function (data, callback) {
      //console.log('MESSAGE data ',data);
      queryString = 'insert into messages (username, roomname, text) values';
      var valueString = '(' + '"' + data.username + '"' +',' + '"' + data.roomname + '"' +',' +'"' + data.text +'"' +')';
      queryString += valueString;
      //console.log('MESSAGE queryString ',queryString);
      db.query(queryString, function(err,data){
        callback(data);
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {
      queryString = "select * from usernames";
      db.query(queryString, function(err, data){
        callback(data);
      });
    },
    post: function (data, callback) {
      //console.log('USER data ',data);
      queryString = 'insert into usernames (name) values';
      var valueString = '(' + "'" + data.username +"'" +')';
      queryString += valueString;
      //console.log('USERS queryString ',queryString);
      db.query(queryString, function(err, data){
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




CREATE DATABASE chat;

USE chat;



/*
- usernames, messages, rooms

- rooms: id, name
- messages: username, timestamp, id, room, text
- usernames: id, name
- friends: usernameid,friendid

- when a user logs in, "get the list of friends" = query friend-username id 
  table for all friend ids paired with user's id
  - two columns: first is user-id who clicked add friend, second is user-id of 
    friends that were added(clicked)
- when we access a room, we query the messages table for all messages with the
  given room name

*/

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---


    
CREATE TABLE `messages` (
  `id` INTEGER(5) AUTO_INCREMENT,
  `username` VARCHAR(50),
  `text` VARCHAR(150),
  `time` DATETIME,
  `roomname` VARCHAR(50) DEFAULT 'lobby',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
-- 
-- ---


    
CREATE TABLE `rooms` (
  `id` INTEGER(3) AUTO_INCREMENT,
  `name` VARCHAR(50) DEFAULT 'lobby',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'usernames'
-- 
-- ---


    
CREATE TABLE `usernames` (
  `id` INTEGER(3) AUTO_INCREMENT,
  `name` VARCHAR(50),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'friends'
-- 
-- ---
-- SELECT friend_id FROM 
-- friends INNER JOIN usernames
-- ON friends.user_id = usernames.id;

    
CREATE TABLE `friends` (
  `user_id` INTEGER(3),
  `friend_id` INTEGER(3),
  PRIMARY KEY (`user_id`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `usernames` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`username`,`text`,`time`,`roomname`) VALUES
-- ('','','','','');
-- INSERT INTO `rooms` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `usernames` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `friends` (`user-id`,`friend-id`) VALUES
-- ('','');


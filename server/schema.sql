DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (msgID int(5) NOT NULL auto_increment, userID int(5), time TIMESTAMP(6), room VARCHAR(20), message TEXT, PRIMARY KEY(msgID)
  /* Describe your table here.*/
);
CREATE TABLE time (timeID int(5) NOT NULL auto_increment, time TIMESTAMP(6), msgID int(5), PRIMARY KEY(timeID)
);
CREATE TABLE user (userID int(5), name VARCHAR(20)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/


# ChirpStacktoDB
Sends Data from ChirpStack to MongoDB and pass the Data to Socket.io


Requirements 
--------------------------------------------------------
Nodejs with the following modules

socket.io-client 3.10.10

mqtt

mongodb

express

http


https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04


MongoDB already Setup.

https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04

--------------------------------------------------------

What each file does
----------------------
ViewData.html	- View Data on a webpage \n
chirpTOdb.js	- Chispstack to MongoDB app	28 minutes ago \n
socketIOsrv.js - Socket.io Server to pass data to a webpage \n

Notes:
--------------------
mqttserver.net = the ip of your mqtt server where ChirpStack send it data \n
mongodbserver.net = the ip of your mongodb server \n
socketioserver.net = the ip of the server wher the socket.io server is running (socketIOsrv.js) \n



------------------------------------------------------------------------------



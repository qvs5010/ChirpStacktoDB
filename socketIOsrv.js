var express = require('express'),
app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server)

server.listen(12000);

io.sockets.on('connection', function(socket) {
        
        socket.on('send message', function(data){

                var token = data.token;
                var message = data.message;

				io.sockets.emit(token, message);

        });
});
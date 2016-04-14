var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 8080;

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname + '/'));

app.get('*', function (req, res){
  	res.sendFile(__dirname + '/index.html');
})

var numUsers = 0;

io.on('connection', function (socket) {
	io.emit('new connection', {numUsers: ++numUsers});

	socket.on('new message', function (data) {
		io.sockets.emit('new message', data);
	});

	socket.on('new user', function (data) {
		io.sockets.emit('new user', data);
	});

	socket.on('disconnect', function () {
		io.emit('user disconnected', {numUsers: --numUsers});
	});
});
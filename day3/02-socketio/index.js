var io = require('socket.io')();
io.on('connection', function(socket){

  socket.on('data', function(data) {
    io.sockets.emit('data', data);
  });
});

var port = process.env.PORT || 3100;

io.listen(port);

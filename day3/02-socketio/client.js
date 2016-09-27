// Server & Explanation
// https://www.tocode.co.il/blog/2016-01-socketio

var socket = io.connect('http://localhost:3100/');

const inp = document.querySelector('input');

socket.on('data', function (data) {
  inp.value = data;
});

inp.addEventListener('input', function (ev) {
  socket.emit('data', ev.target.value);
});


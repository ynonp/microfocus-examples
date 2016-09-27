var express = require('express');
var app = express();
var bodyParser = require('body-parser')


var messages = [];

// parse application/json
app.use(bodyParser.json())

app.get('/messages', function (req, res) {
  res.send(messages);
});

app.post('/messages', function (req, res) {
  messages.push(req.body.text);
  res.send({idx: messages.length - 1});
});

app.get('/hello', function (req, res) {
  res.send({ msg: 'hello world'});
});

app.get('/friends/23', function (req, res) {
  res.send({
    name: 'bob',
    title: 'the boss',
    likes: ['skiing', 'dancing'],
    favoriteColor: 'lightblue',
  });
});


app.use(express.static('.'));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

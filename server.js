const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname+"/dist"));

app.listen(PORT, function () { console.log(`My app listening on port ${PORT}!`);});  

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
}); 

app.get('/profile', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
}); 

app.get('/editprofile', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
}); 

app.get('/chat', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
}); 

app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
}); 

app.get('/signup', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
}); 
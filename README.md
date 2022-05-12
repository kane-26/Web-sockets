# Web-sockets
Introduction to Web Sockets 

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
WebSocket is a communication protocol which provides a full-duplex and low-latency channel between the server and the browser. More information can be found here.


Things to add in your index.js file to implement socket.io 

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


For your Index.html file

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


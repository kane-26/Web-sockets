const express = require('express')
const port = process.env.PORT || 5000;
const app =  express()

const http =  require('http')
const server = http.createServer(app);
const {Server, Socket} = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });


io.on('connection', (socket) => {
    console.log ('a user connected');
})
  
  server.listen(5000, () => {
    console.log('listening on port 5000');
  });
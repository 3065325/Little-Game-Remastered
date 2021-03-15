const express = require("express");
const app = express();
const server  = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

app.use(express.static("client"));

io.on("connection", (socket) => {
    console.log(`Socket(${socket.id}) has connected!`);

    socket.on("disconnect", () => {
      console.log(`Socket(${socket.id}) has disconnected.`)
    });

    socket.emit("message", `Welcome Socket(${socket.id})!`)
});

server.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});

module.exports = {
  io
};

/*
const DEBUG = true;

// For manipulating files
var fs      = require("fs");
// Sets up server and allows routing
var express = require('express');
var app     = express();
// Creates the server
var server  = require('http').createServer(app);
// Sets up socket.io
var io      = require('socket.io')(server);
// Port to use, should be const but idk
var port    = process.env.PORT || 3000; //what does env mean

// This tells the server which port to listen to, and runs the callback when the server is online
server.listen(port, function()
{
    console.log(process.env.PROJECT_DOMAIN.toUpperCase() + " is Online! [Port: " + port + "]");
    if (DEBUG) console.log("[DEBUG] =Debug= Debug Mode is on.");
});

// This tells the server to send files from public directory when they are requested
app.use(express.static('public'));

io.on('connection', function(socket)
{
    console.log("Someone connected! ID: ", socket.id)
    io.emit("hello", "Hello!") // parameters?
  // First parameter is the event name, all others are args
  // go to public/script.js 
})
*/

/*
io.on("connection", (socket) => {

  // sending to the client
    socket.emit("hello", "can you hear me?", 1, 2, "abc");

  // sending to all clients except sender
    socket.broadcast.emit("broadcast", "hello friends!");

  // sending to all clients in "game" room except sender
    socket.to("game").emit("nice game", "let's play a game");

  // sending to all clients in "game1" and/or in "game2" room, except sender
    socket.to("game1").to("game2").emit("nice game", "let's play a game (too)");

  // sending to all clients in "game" room, including sender
    io.in("game").emit("big-announcement", "the game will start soon");

  // sending to all clients in namespace "myNamespace", including sender
    io.of("myNamespace").emit("bigger-announcement", "the tournament will start soon");

  // sending to a specific room in a specific namespace, including sender
    io.of("myNamespace").to("room").emit("event", "message");

  // sending to individual socketid (private message)
    io.to(socketId).emit("hey", "I just met you");

  // WARNING: `socket.to(socket.id).emit()` will NOT work, as it will send to everyone in the room
  // named `socket.id` but the sender. Please use the classic `socket.emit()` instead.

  // sending with acknowledgement
    socket.emit("question", "do you think so?", (answer) => {});

  // sending without compression
    socket.compress(false).emit("uncompressed", "that's rough");

  // sending a message that might be dropped if the client is not ready to receive messages
    socket.volatile.emit("maybe", "do you really need it?");

  // sending to all clients on this node (when using multiple nodes)
    io.local.emit("hi", "my lovely babies");

  // sending to all connected clients
    io.emit("an event sent to all connected clients");

});

*/
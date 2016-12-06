const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('node-uuid');
const PORT = 8080;

const server = express()

.use(express.static('public'))
.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

//update client count when client connects
wss.on('connection', (ws) => {
  console.log('Client connected');
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify({
      type: "clientCounter",
      content: wss.clients.length
    }));
  })

//recieve a message from client, parse the message
//and decide what to do with it based on type
  ws.on('message', function(event) {
    let parsedMessage = JSON.parse(event);
    let parsedNewMessage;
//parsedMessage is a post
    if (parsedMessage.type === "postNotification") {
      parsedNewMessage = {
        content: parsedMessage.content,
        type: "incomingNotification"
      }
    }
//parsed message is a message
    if (parsedMessage.type === "postMessage") {
      parsedNewMessage = {
        id: uuid.v4(parsedMessage.id),
        username: parsedMessage.username,
        content: parsedMessage.content,
        type: "incomingMessage"
      }
    }
//sends parsedNewMessage to each client as a JSON string
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(parsedNewMessage));
    });
  });

//update client count when a client disconnects
  ws.on('close', () => {
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify({
        type: "clientCounter",
        content: wss.clients.length
      }));
    })
    console.log('Client disconnected');
  });
});
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });
  ws.send('ho ho ho from the server!');
  
  let count = 0;
  setInterval(() => ws.send(`counting every second: ${count++}`), 1000);
});


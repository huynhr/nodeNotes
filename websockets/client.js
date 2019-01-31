const url = 'ws://localhost:8080';
const connection = new WebSocket(url);

connection.onopen = () => {
  let count = 0;
  connection.send('hello world from the client');
  setInterval(() => connection.send(`client counting: ${count++}`), 1000);
};

connection.onmessage = e => {
  console.log('message from the server: ', e.data);
};

connection.onerror = e => {
  console.log('Error message: ', e);
};


const http = require('http');
const os = require('os');
const chokidar = require('chokidar');
const express = require('express');
const { WebSocketServer } = require('ws');
const { resolve } = require('path');
const { readFile } = require('fs');

const filePath = resolve('./public');
const dataPath = resolve('./data.json');

const ports = {
  http: 1971,
  ws: 1972
};

// static file serving
const app = express();
app.use(express.static('public'));

// ReST
app.get('/repos', async (req, res) => {
  res.send(await data)
});

// websockets
const server = http.createServer(app);
const wss = new WebSocketServer({
  // noServer: true,
  port: ports.ws
});
wss.on('connection', function connection(ws) {
  console.log('Websocket client connected');
  ws.send('Hello!');
});

// fetch data
const populateData = () => new Promise((resolve, reject) => {
  readFile(dataPath, (err, contents) => {
    if (err) {
      reject(err);
    } else {
      resolve(JSON.parse(contents));
    }
  })
});
let data = populateData();

// watch data file and notify clients
const watcher = chokidar.watch(dataPath, { usePolling: os.platform() === 'darwin' });
watcher.on('add', path => console.log(`  Branch visualiser watching data file '${path}'`));
watcher.on('change', path => {
  console.log(`Data file '${path}' updated`);
  data = populateData();
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send('Update!');
    }
  });
});

// start http server
server.listen(ports.http, () => {
  console.log(`
  Branch Visualiser http server listening on port ${ports.http}
    - serving files from '${filePath}'
  Branch Visualiser websocket server listening on port ${ports.ws}
  `);
});





const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { WebSocketServer } = require('ws');
const { public } = require("./util/paths");
const readData = require("./util/readData");
const startFileWatcher = require("./util/startFileWatcher");
const getRepos = require("./routes/getRepos");
const addRepo = require("./routes/addRepo");
const editRepo = require("./routes/editRepo");
const addBranch = require("./routes/addBranch");
const editBranch = require("./routes/editBranch");
const deleteRepo = require("./routes/deleteRepo");
const deleteBranch = require("./routes/deleteBranch");

const ports = {
  http: 1971,
  ws: 1972
};

// http
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// websockets
const server = http.createServer(app);
const wss = new WebSocketServer({
  // noServer: true,
  port: ports.ws
});
wss.on("connection", function connection(ws) {
  console.log("Websocket client connected");
  ws.send("Hello!");
});

// fetch data
let data = readData();

// ReST
const getData = async () => await data;
const setData = value => {
  data = Promise.resolve(value);
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send("Update!");
    }
  });
};
app.get("/repos", getRepos(getData));
app.post("/repos/", addRepo(getData, setData));
app.post("/repos/:repo", editRepo(getData, setData));
app.post("/repos/:repo/branches", addBranch(getData, setData));
app.post("/repos/:repo/branches/:branch(*)", editBranch(getData, setData));
app.post("/repos-delete/:repo", deleteRepo(getData, setData));
app.post(
  "/repos-delete/:repo/branches/:branch(*)",
  deleteBranch(getData, setData)
);

// watch data file and notify clients
startFileWatcher(setData);

// start http server
server.listen(ports.http, () => {
  console.log(`
  Branch Visualiser http server listening on port ${ports.http}
    - serving files from '${public}'
  Branch Visualiser websocket server listening on port ${ports.ws}
  `);
});

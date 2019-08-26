const chokidar = require('chokidar');
const express = require('express');
const { resolve } = require('path');
const { readFile } = require('fs');

const filePath = resolve('./public');
const dataPath = resolve('./data.json');

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
chokidar.watch(dataPath).on('change', async() => {
  data = populateData()
});

const port = 1971;
const app = express();
app.use(express.static('public'))
app.get('/repos', async (req, res) => {
  res.send(await data)
});

app.listen(port, () => {
  console.log(`Branch Visualiser server running on port ${port};`);
  console.log(`Serving files from '${filePath}'`);
  console.log(`Watching data file '${dataPath}'`);
});





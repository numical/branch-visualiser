const { readFile } = require("fs");
const { resolve } = require("path");
const { data } = require("./paths");

const dataPath = resolve("./data.json");

const readData = () =>
  new Promise((resolve, reject) => {
    readFile(data, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(contents));
      }
    });
  });

module.exports = readData;

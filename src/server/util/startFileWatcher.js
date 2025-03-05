const os = require("os");
const chokidar = require("chokidar");
const { data } = require("./paths");
const readData = require("./readData");

const startFileWatcher = setData => {
  const watcher = chokidar.watch(data, {
    usePolling: os.platform() === "darwin"
  });
  watcher.on("add", path =>
    console.log(`  Branch visualiser watching data file '${path}'`)
  );
  watcher.on("change", path => {
    console.log(`Data file '${path}' updated`);
    setData(readData());
  });
};

module.exports = startFileWatcher;

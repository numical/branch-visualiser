const getRepos = getData => async (req, res) => {
  res.send(await getData());
};

module.exports = getRepos;

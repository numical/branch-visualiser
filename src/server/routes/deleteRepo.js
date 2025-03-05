const deleteRepo = (getData, setData) => async (req, res) => {
  const { repo: name } = req.params;
  const { repos } = await getData();
  const indexToRemove = repos.findIndex(repo => repo.name === name);
  if (indexToRemove > -1) {
    repos.splice(indexToRemove, 1);
    setData({ repos });
    res.status(200).send(`Repository '${name}' deleted.`);
  } else {
    res.status(404).send(`Repository '${name}' not found.`);
  }
};

module.exports = deleteRepo;

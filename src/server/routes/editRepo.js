const editRepo = (getData, setData) => async (req, res) => {
  const { name } = req.body;
  const { repos } = await getData();
  const toEdit = repos.find(repo => repo.name === name);
  if (toEdit) {
    Object.entries(req.body).forEach(([key, value]) => {
      toEdit[key] = value;
    });
    setData({ repos });
    res.status(200).send(`Repository '${name}' edited.`);
  } else {
    res.status(404).send(`Repository '${name}' not found.`);
  }
};

module.exports = editRepo;

const newRepo = props => ({
  ...props,
  branches: []
});

const addRepo = (getData, setData) => async (req, res) => {
  const { name } = req.body;
  const { repos } = await getData();
  if (repos.map(repo => repo.name).includes(name)) {
    res.status(400).send(`Repository '${name}' NOT added - non-unique name.`);
  } else {
    setData({
      repos: [...repos, newRepo(req.body)]
    });
    res.status(200).send(`Repository '${name}' added.`);
  }
};

module.exports = addRepo;

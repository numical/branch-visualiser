const fixDateFields = require("../util/fixDateFields");

const newBranch = props => {
  const branch = { ...props };
  fixDateFields(branch);
  return branch;
};

const addBranch = (getData, setData) => async (req, res) => {
  const { repo: repoName } = req.params;
  const { repos } = await getData();
  const toEdit = repos.find(repo => repo.name === repoName);
  if (toEdit) {
    const { name } = req.body;
    if (toEdit.branches.map(branch => branch.name).includes(name)) {
      res.status(400).send(`Branch '${name}' NOT added - non-unique name.`);
    }
    toEdit.branches.push(newBranch(req.body));
    setData({ repos });
    res.status(200).send(`Branch '${name}' added to repo '${repoName}'.`);
  } else {
    res.status(404).send(`Repository '${repoName}' not found.`);
  }
};

module.exports = addBranch;

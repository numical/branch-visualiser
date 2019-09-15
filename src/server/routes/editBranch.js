const fixDateFields = require("../util/fixDateFields");

const editBranch = (getData, setData) => async (req, res) => {
  const { repo: repoName, branch: branchName } = req.params;
  const { repos } = await getData();
  const repoToEdit = repos.find(repo => repo.name === repoName);
  if (repoToEdit) {
    const branchToEdit = repoToEdit.branches.find(
      branch => branch.name === branchName
    );
    if (branchToEdit) {
      Object.entries(req.body).forEach(([key, value]) => {
        branchToEdit[key] = value;
      });
      fixDateFields(branchToEdit);
      setData({ repos });
      res
        .status(200)
        .send(`Branch '${branchName}' in repository '${repoName}' edited.`);
    } else {
      res
        .status(404)
        .send(`Branch '${branchName}' in repository '${repoName}' not found.`);
    }
  } else {
    res.status(404).send(`Repository '${repoName}' not found.`);
  }
};

module.exports = editBranch;

const fixDateFields = require("../util/fixDateFields");

const deleteBranch = (getData, setData) => async (req, res) => {
  const { repo: repoName, branch: branchName } = req.params;
  const { repos } = await getData();
  const repoToEdit = repos.find(repo => repo.name === repoName);
  if (repoToEdit) {
    const indexToRemove = repoToEdit.branches.findIndex(
      branch => branch.name === branchName
    );
    if (indexToRemove > -1) {
      repoToEdit.branches.splice(indexToRemove, 1);
      setData({ repos });
      res
        .status(200)
        .send(`Branch '${branchName}' in repository '${repoName}' deleted.`);
    } else {
      res
        .status(404)
        .send(`Branch '${branchName}' in repository '${repoName}' not found.`);
    }
  } else {
    res.status(404).send(`Repository '${repoName}' not found.`);
  }
};

module.exports = deleteBranch;

import React from "react";

function addBranch(repo) {
  return <pre>{JSON.stringify(repo, null, 2)}</pre>;
}

addBranch.display = "Add Branch ...";

export default addBranch;

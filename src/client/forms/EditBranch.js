import React from "react";
import BranchForm from "./BranchForm";

const EditBranch = ({ branch, hideForm }) => {
  const { parent: repo } = branch;
  return (
    <BranchForm
      repo={repo}
      branch={branch}
      action={`repos/${repo.name}/branches/${branch.name}`}
      label="Edit Branch"
      hideForm={hideForm}
    />
  );
};

export default EditBranch;

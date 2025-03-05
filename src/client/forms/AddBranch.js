import React from "react";
import BranchForm from "./BranchForm";

const branch = Object.freeze({});

const AddBranch = ({ repo, hideForm }) => (
  <BranchForm
    repo={repo}
    branch={branch}
    action={`repos/${repo.name}/branches`}
    label="Add Branch"
    canEditName={true}
    hideForm={hideForm}
  />
);

export default AddBranch;

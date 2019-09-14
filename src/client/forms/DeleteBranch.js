import React from "react";
import DeleteForm from "./DeleteForm";

const DeleteBranch = ({ branch, hideForm }) => {
  const { parent: repo } = branch;
  const action = `delete/repo/${repo.name}/branches/${branch.name}`;
  return (
    <DeleteForm
      action={action}
      msg={`Please confirm you want to delete branch '${branch.name}':`}
      hideForm={hideForm}
    />
  );
};

export default DeleteBranch;

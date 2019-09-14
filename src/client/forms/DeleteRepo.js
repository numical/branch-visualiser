import React from "react";
import DeleteForm from "./DeleteForm";

const DeleteRepo = ({ repo, hideForm }) => {
  const action = `delete/repo/${repo.name}`;
  return (
    <DeleteForm
      action={action}
      msg={`Please confirm you want to delete repository '${repo.name}':`}
      hideForm={hideForm}
    />
  );
};

export default DeleteRepo;

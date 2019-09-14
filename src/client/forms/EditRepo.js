import React from "react";
import RepoForm from "./RepoForm";

const EditRepo = ({ repo, hideForm }) => (
  <RepoForm
    repo={repo}
    action={`repos/${repo.name}`}
    label="Edit Repo"
    hideForm={hideForm}
  />
);

export default EditRepo;

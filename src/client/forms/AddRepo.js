import React from "react";
import RepoForm from "./RepoForm";

const repo = Object.freeze({});

const AddRepo = ({ hideForm }) => (
  <RepoForm
    repo={repo}
    action={`repos`}
    label="Add Repo"
    canEditName={true}
    hideForm={hideForm}
  />
);

export default AddRepo;

import React from "react";
import staticProps from "./staticProps";

const RepoForm = ({ repo, action, label, canEditName, hideForm }) => (
  <form {...staticProps.form} action={action}>
    <label>Name*:</label>
    <input
      {...staticProps.name}
      defaultValue={repo.name}
      readOnly={!canEditName}
    />
    <label>Description*:</label>
    <input {...staticProps.description} defaultValue={repo.description} />
    <input {...staticProps.submit} value={label} onClick={hideForm} />
  </form>
);

export default RepoForm;

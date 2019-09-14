import React from "react";
import { displayDateToHtmlDate } from "../util/dateFns";
import staticProps from "./staticProps";

const BranchList = ({ repo }) => (
  <datalist id="branches">
    {repo.branches.map(branch => (
      <option key={branch.name} value={branch.name} />
    ))}
  </datalist>
);

const DateInput = ({ branch, name, required }) => {
  const value = branch[name] ? displayDateToHtmlDate(branch[name]) : undefined;
  return (
    <input type="date" name={name} required={required} defaultValue={value} />
  );
};

const BranchForm = ({ repo, branch, action, label, canEditName, hideForm }) => (
  <form {...staticProps.form} action={action}>
    <BranchList repo={repo} />
    <label>Name*:</label>
    <input
      {...staticProps.name}
      defaultValue={branch.name}
      readOnly={!canEditName}
    />
    <label>Description*:</label>
    <input {...staticProps.description} defaultValue={branch.description} />
    <label>Team:</label>
    <input {...staticProps.team} defaultValue={branch.team} />
    <label>Start*:</label>
    <DateInput branch={branch} name="start" required={true} />
    <label>From:</label>
    <input {...staticProps.from} defaultValue={branch.from} />
    <label>End:</label>
    <DateInput branch={branch} name="end" />
    <label>To:</label>
    <input {...staticProps.to} defaultValue={branch.to} />
    <input {...staticProps.submit} value={label} onClick={hideForm} />
  </form>
);

export default BranchForm;

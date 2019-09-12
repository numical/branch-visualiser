import React from "react";

function addBranch(repo) {
  const commonProps = {};
  const nameProps = {
    ...commonProps
  };
  const descriptionProps = {
    ...commonProps
  };
  const startProps = {
    ...commonProps
  };
  const teamProps = {
    ...commonProps
  };
  const fromProps = {
    ...commonProps
  };

  return (
    <form>
      <label>Name:</label>
      <input {...nameProps} />
      <label>Description:</label>
      <input {...descriptionProps} />
      <label>Start:</label>
      <input {...startProps} />
      <label>Team:</label>
      <input {...teamProps} />
      <label>From:</label>
      <input {...fromProps} />
    </form>
  );
}

addBranch.display = "Add Branch ...";

export default addBranch;

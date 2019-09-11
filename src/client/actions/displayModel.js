import React from "react";

function displayModel(repo) {
  return <pre>{JSON.stringify(repo, null, 2)}</pre>;
}

export default displayModel;

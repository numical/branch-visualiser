import React from "react";
import staticProps from "./staticProps";

const formProps = {
  action: "/repos",
  id: "contextForm",
  method: "GET",
  target: "_blank"
};

const ExportModel = ({ hideForm }) => (
  <form {...formProps}>
    <div>This will open the model JSON in a new tab.</div>
    <input {...staticProps.submit} onClick={hideForm} />
  </form>
);

export default ExportModel;

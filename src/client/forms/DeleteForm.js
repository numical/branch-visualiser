import React from "react";
import staticProps from "./staticProps";

const DeleteForm = ({ action, msg, hideForm }) => (
  <form {...staticProps.form} action={action}>
    <div>{msg}</div>
    <input {...staticProps.submit} onClick={hideForm} />
  </form>
);

export default DeleteForm;

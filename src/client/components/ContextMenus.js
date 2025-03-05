import React from "react";
import { Menu, Item, Separator, theme, animation } from "react-contexify";
import AddRepo from "../forms/AddRepo";
import EditRepo from "../forms/EditRepo";
import AddBranch from "../forms/AddBranch";
import EditBranch from "../forms/EditBranch";
import DeleteBranch from "../forms/DeleteBranch";
import DeleteRepo from "../forms/DeleteRepo";
import ExportModel from "../forms/ExportModel";

const onClick = ({ setForm, showForm, hideForm, Form }) => ({ props }) => {
  setForm(<Form {...props} hideForm={hideForm} />);
  showForm();
};

function SVGMenu(props) {
  const addRepo = onClick({ ...props, Form: AddRepo });
  const exportModel = onClick({ ...props, Form: ExportModel });

  return (
    <Menu id="svgMenu" theme={theme.light} animation={animation.fade}>
      <Item onClick={addRepo}>Add Repo...</Item>
      <Separator />
      <Item onClick={exportModel}>Export Model...</Item>
    </Menu>
  );
}

function RepoMenu(props) {
  const editRepo = onClick({ ...props, Form: EditRepo });
  const addBranch = onClick({ ...props, Form: AddBranch });
  const deleteRepo = onClick({ ...props, Form: DeleteRepo });

  return (
    <Menu id="repoMenu" theme={theme.light} animation={animation.fade}>
      <Item onClick={editRepo}>Edit Repo...</Item>
      <Item onClick={addBranch}>Add Branch...</Item>
      <Separator />
      <Item onClick={deleteRepo}>Delete Repo...</Item>
    </Menu>
  );
}

function BranchMenu(props) {
  const editBranch = onClick({ ...props, Form: EditBranch });
  const deleteBranch = onClick({ ...props, Form: DeleteBranch });

  return (
    <Menu id="branchMenu" theme={theme.light} animation={animation.fade}>
      <Item onClick={editBranch}>Edit Branch...</Item>
      <Separator />
      <Item onClick={deleteBranch}>Delete Branch...</Item>
    </Menu>
  );
}

export { RepoMenu, BranchMenu, SVGMenu };

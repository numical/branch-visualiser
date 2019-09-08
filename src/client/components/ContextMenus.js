import React from "react";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  theme,
  animation
} from "react-contexify";

const displayModal = (showDialog, { event, props }) => {
  const { repo, branch, setAction } = props;
  setAction(repo || branch);
  showDialog();
};

function RepoMenu(props) {
  const { showDialog } = props;
  const onClick = displayModal.bind(null, showDialog);
  return (
    <Menu id="repoMenu" theme={theme.light} animation={animation.fade}>
      <Item onClick={displayModal}>Edit...</Item>
      <Item onClick={onClick}>Add Branch...</Item>
      <Separator />
      <Item onClick={onClick}>Delete...</Item>
    </Menu>
  );
}

function BranchMenu(props) {
  const { showDialog } = props;
  const onClick = displayModal.bind(null, showDialog);

  return (
    <Menu id="branchMenu" theme={theme.light} animation={animation.fade}>
      <Item onClick={onClick}>Edit...</Item>
      <Separator />
      <Item onClick={onClick}>Delete...</Item>
    </Menu>
  );
}

export { RepoMenu, BranchMenu };

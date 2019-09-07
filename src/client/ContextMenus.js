import React from "react";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  theme,
  animation
} from "react-contexify";

const displayModal = (showModal, { event, props }) => {
  const { repo, branch, setFocus } = props;
  setFocus(repo || branch);
  showModal();
};

function RepoMenu(props) {
  const { showModal } = props;
  const onClick = displayModal.bind(null, showModal);
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
  const { showModal } = props;
  const onClick = displayModal.bind(null, showModal);

  return (
    <Menu id="branchMenu" theme={theme.light} animation={animation.fade}>
      <Item onClick={onClick}>Edit...</Item>
      <Separator />
      <Item onClick={onClick}>Delete...</Item>
    </Menu>
  );
}

export { RepoMenu, BranchMenu };

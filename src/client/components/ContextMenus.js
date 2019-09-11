import React from "react";
import { Menu, Item, Separator, theme, animation } from "react-contexify";
import addBranch from "../actions/addBranch";
import displayModel from "../actions/displayModel";

function RepoMenu(props) {
  const { setDialogContent, showDialog } = props;

  const onClick = generateContent => ({ props }) => {
    const { repo } = props;
    const content = generateContent(repo);
    setDialogContent(content);
    showDialog();
  };

  return (
    <Menu id="repoMenu" theme={theme.light} animation={animation.fade}>
      <Item onClick={onClick(displayModel)}>Edit...</Item>
      <Item onClick={onClick(addBranch)}>{addBranch.display}</Item>
      <Separator />
      <Item onClick={onClick(displayModel)}>Delete...</Item>
    </Menu>
  );
}

function BranchMenu(props) {
  const { setDialogContent, showDialog } = props;

  const onClick = generateContent => ({ props }) => {
    const { branch } = props;
    const content = generateContent(branch);
    setDialogContent(content);
    showDialog();
  };

  return (
    <Menu id="branchMenu" theme={theme.light} animation={animation.fade}>
      <Item onClick={onClick(displayModel)}>Edit...</Item>
      <Separator />
      <Item onClick={onClick(displayModel)}>Delete...</Item>
    </Menu>
  );
}

export { RepoMenu, BranchMenu };

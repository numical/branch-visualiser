import React from 'react' ;
import { Menu, Item, Separator, Submenu, theme, animation } from 'react-contexify';

const onClick = ({event, props }) => {
  const { repo , branch } = props;
  const model = repo || branch;
  alert(JSON.stringify(model, null, 2));
};

function RepoMenu(props) {
  return (
    <Menu id='repoMenu' theme={theme.dark} animation={animation.zoom}>
      <Item onClick={onClick}>Edit...</Item>
      <Item onClick={onClick}>Add Branch...</Item>
      <Separator />
      <Item onClick={onClick}>Delete...</Item>
    </Menu>
  );
}

function BranchMenu(props) {
  return (
    <Menu id='branchMenu' theme={theme.dark} animation={animation.zoom}>
      <Item onClick={onClick}>Edit...</Item>
      <Separator />
      <Item onClick={onClick}>Delete...</Item>
    </Menu>
  );
}

export { RepoMenu, BranchMenu };

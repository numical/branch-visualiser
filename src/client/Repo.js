import React from "react";
import { contextMenu } from "react-contexify";
import Branch from "./Branch";

function Repo(props) {
  const { repo, setFocus } = props;
  const { name, description, branches, dimensions, translate } = repo;

  const rectProps = {
    ...dimensions,
    rx: 5,
    fill: "url('#repoGradient')",
    onClick: event => contextMenu.show({ id: "repoMenu", event, props })
  };

  const commonTextProps = {
    x: dimensions.x + 10,
    fontFamily: "Verdana",
    fontSize: 10,
    fill: "white"
  };

  const nameProps = {
    ...commonTextProps,
    y: 20,
    fontWeight: "bold"
  };

  const descriptionProps = {
    ...commonTextProps,
    y: 40
  };

  const masterProps = {
    ...commonTextProps,
    x: dimensions.width - 100,
    y: 30,
    fontSize: 15
  };

  const transform = `translate(${translate.x}, ${translate.y})`;

  return (
    <g transform={transform}>
      <rect {...rectProps} />
      <text {...nameProps}>{name}</text>
      <text {...descriptionProps}>{description}</text>
      <text {...masterProps}>MASTER</text>
      {branches.map(branch => (
        <Branch branch={branch} key={branch.name} setFocus={setFocus} />
      ))}
    </g>
  );
}

export default Repo;

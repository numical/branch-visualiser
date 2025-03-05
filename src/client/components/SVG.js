import React from "react";
import Repo from "./Repo";
import { contextMenu } from "react-contexify";

function SVG(props) {
  const { repos, dimensions } = props;

  const svgProps = {
    ...dimensions.svg,
    onClick: event => {
      contextMenu.show({ id: "svgMenu", event, props });
      event.stopPropagation();
    },
    overflow: "auto"
  };
  return (
    <svg {...svgProps}>
      <defs>
        <linearGradient id="repoGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="darkred" />
          <stop offset="95%" stopColor="red" />
        </linearGradient>
        <linearGradient id="branchGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="orange" />
          <stop offset="95%" stopColor="yellow" />
        </linearGradient>
      </defs>
      {repos.map(repo => (
        <Repo repo={repo} key={repo.name} />
      ))}
    </svg>
  );
}

export default SVG;

import React from "react";
import Repo from "./Repo";

function SVG(props) {
  const { repos, dimensions, setFocus } = props;

  const svgProps = {
    ...dimensions.svg,
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
        <Repo repo={repo} key={repo.name} setFocus={setFocus} />
      ))}
    </svg>
  );
}

export default SVG;

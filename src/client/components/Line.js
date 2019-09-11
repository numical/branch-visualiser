import React from "react";

function Line(props) {
  const { dimensions, isEnd, text } = props;

  const lineProps = {
    ...dimensions,
    stroke: "black",
    strokeDasharray: "2, 1",
    strokeWidth: 3
  };

  const x = isEnd ? dimensions.x1 + 10 : dimensions.x1 - 5;
  const y = dimensions.y2;

  const dateProps = {
    x,
    y,
    fontFamily: "Verdana",
    fontSize: 10,
    fill: "black",
    transform: `rotate(270, ${x}, ${y})`
  };

  return (
    <g>
      <line {...lineProps} />
      <text {...dateProps}>{text}</text>
    </g>
  );
}

export default Line;

import React from 'react';

function Line(props) {
    const { x, y, text, isEnd, dimensions } = props;

    const lineProps = {
        x1: x,
        y1: dimensions.repo.height,
        x2: x,
        y2: y + dimensions.branch.height,
        stroke: 'black',
        strokeDasharray: "2, 1",
        strokeWidth: 3
    };

    const xOffset = isEnd ? x + 5 : x - 10;

    const dateProps = {
        x: xOffset,
        y,
        fontFamily: "Verdana",
        fontSize: 10,
        fill:"black",
        transform: `rotate(90, ${xOffset}, ${y})`
    };

    return (
        <g>
            <line {...lineProps} />
            <text {...dateProps}>
                {text}
            </text>
        </g>
    )
}

export default Line;

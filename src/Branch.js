import React from 'react';
import constants from './constants';

function Branch(props) {
    const { branch, index } = props
    const { name, order, start } = branch;
    const { gap, height, indent } = constants.branch;

    const xOffset = order * indent;
    const yOffset = (constants.repo.height + gap) + index * (height + gap);

    const rectProps = {
        x: xOffset,
        y: yOffset,
        width: constants.svg.width - xOffset - constants.repo.indent,
        height,
        rx: 5,
        fill: "url('#branchGradient')"
    };

    const nameProps = {
        x: xOffset + 10,
        y: yOffset + 20,
        fontFamily: "Verdana",
        fontSize: 10,
        fill:"black",
        fontWeight: "bold"
    };

    const lineProps = {
        x1: xOffset,
        y1: constants.repo.height,
        x2: xOffset,
        y2: yOffset + height,
        stroke: 'black',
        strokeDasharray: "2, 1",
        strokeWidth: 3
    };

    const startDateProps = {
        x: xOffset - 10,
        y: yOffset,
        fontFamily: "Verdana",
        fontSize: 10,
        fill:"black",
        transform: `rotate(90, ${xOffset - 10}, ${yOffset})`
    };

    return (
        <g>
            <rect {...rectProps}/>
            <text {...nameProps}>
                {name}
            </text>
            <line {...lineProps} />
            <text {...startDateProps}>
                {start}
            </text>
        </g>
    );
}

export default Branch;

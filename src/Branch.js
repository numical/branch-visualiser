import React from 'react';
import constants from './constants';

function Branch(props) {
    const { branch, index } = props
    const { name } = branch;
    const { gap, height, indent } = constants.branch;

    const xOffset = (index + 1) * indent;
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


    return (
        <g>
            <rect {...rectProps}/>
            <text {...nameProps}>
                {name}
            </text>
        </g>
    );
}

export default Branch;

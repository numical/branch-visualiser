import React from 'react';
import Line from './Line';

function Branch(props) {
    const { branch } = props;
    const { name, description, team, startLine, endLine, dimensions } = branch;

    const rectProps = {
        ...dimensions,
        rx: 5,
        fill: "url('#branchGradient')"
    };

    const commonTextProps = {
        x: dimensions.x + 10,
        fontFamily: "Verdana",
        fontSize: 10,
        fill:"black"
    };

    const nameProps = {
        ...commonTextProps,
        y: dimensions.y + 20,
        fontWeight: "bold"
    };

    const descriptionProps = {
        ...commonTextProps,
        y: dimensions.y + 40
    };

    return (
        <g>
            <rect {...rectProps}/>
            <text {...nameProps}>
                {name}
            </text>
            <text {...descriptionProps}>
                {`${description} (${team})`}
            </text>
            <Line {...startLine} />
            {endLine && <Line {...endLine} />}
        </g>

    );
}

export default Branch;

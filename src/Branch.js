import React from 'react';
import Line from './Line';

function Branch(props) {
    const { branch, index, dimensions } = props
    const { name, startLine, endLine } = branch;
    const { gap, height, indent } = dimensions.branch;

    const xOffset = startLine.order * indent;
    const yOffset = (dimensions.repo.height + gap) + index * (height + gap);
    const width = endLine ? (endLine.order - startLine.order) * indent : dimensions.svg.width - xOffset - dimensions.repo.indent;

    const rectProps = {
        x: xOffset,
        y: yOffset,
        width,
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

    const startLineProps = {
        x: xOffset,
        y: yOffset,
        text: startLine.text,
        dimensions
    };

    const conditionalEndLine = () => {
        if (endLine) {
            const endLineProps = {
                x: xOffset + width,
                y: yOffset,
                text: endLine.text,
                isEnd: true,
                dimensions
            };
            return <Line {...endLineProps} />;
        }
    };

    return (
        <g>
            <rect {...rectProps}/>
            <text {...nameProps}>
                {name}
            </text>
            <Line {...startLineProps} />
            {conditionalEndLine()}
        </g>

    );
}

export default Branch;

import React from 'react';
import constants from './constants';

function Branch(props) {
    const { branch, index } = props
    const { name } = branch;
    const { height, gap } = constants.branch;
    const rectY = index * (height + gap);
    return (
        <g>
            <rect x="10" y = {rectY} width="80%" height={height} rx="5" fill="url('#branchGradient')" />
            <text x="20" y={rectY + 20} font-family="Verdana" font-size="10" font-weight="bold" fill="white">
                {name}
            </text>
        </g>
    );
}

export default Branch;

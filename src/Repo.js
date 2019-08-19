import React from 'react';
import constants from './constants';
import Branch from './Branch';

function Repo(props) {
    const { repo, yOffset } = props;
    const { name, description, branches } = repo;
    const { width } = constants.svg;
    const { gap, height, indent } = constants.repo;

    const rectProps = {
        x: indent,
        y: 0,
        width: width - indent * 2,
        height,
        rx: 5,
        fill: "url('#repoGradient')"
    };

    const commonTextProps = {
        x: indent + 10,
        fontFamily: "Verdana",
        fontSize: 10,
        fill:"white"
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
        x: rectProps.width - 100,
        y: 30,
        fontSize: 15
    };

    const transform = `translate(0, ${yOffset})`;

    return (
        <g transform={transform}>
            <rect {...rectProps}/>
            <text {...nameProps}>
                {name}
            </text>
            <text {...descriptionProps}>
                {description}
            </text>
            <text {...masterProps}>
                MASTER
            </text>
            {branches.map((branch, index) => <Branch branch={branch} index={index} key={branch.name} />)}
        </g>
    );
}

export default Repo;

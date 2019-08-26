import React from 'react';
import Repo from './Repo';
import generateSVGModel from "./generateSVGModel";

function SVG(props) {
    const { data, dimensions } = props;
    const repos = generateSVGModel(data, dimensions);
    return (
        <svg { ...dimensions.svg }>
            <defs>
                <linearGradient id="repoGradient" gradientTransform="rotate(90)">
                    <stop offset="5%"  stopColor="darkred" />
                    <stop offset="95%" stopColor="red" />
                </linearGradient>
                <linearGradient id="branchGradient" gradientTransform="rotate(90)">
                    <stop offset="5%"  stopColor="orange" />
                    <stop offset="95%" stopColor="yellow" />
                </linearGradient>
            </defs>
            {repos.map(repo => <Repo repo={repo} key={repo.name} />)}
        </svg>
    )
}

export default SVG;

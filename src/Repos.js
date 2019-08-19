import React from 'react';
import data from './data';

const constants = {
    svg: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    repo: {
        height: 50,
        gap: 30
    },
    branch : {
        height: 50,
        gap: 20
    }
};

function drawBranch(branch, index) {
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

function drawRepo(repo, index) {
    const { name, description, branches } = repo;
    const { height, gap } = constants.repo;
    const rectY = index * (height + gap);
    return (
        <g>
            <rect x="10" y = {rectY} width="80%" height={height} rx="5" fill="url('#repoGradient')" />
            <text x="20" y={rectY + 20} font-family="Verdana" font-size="10" font-weight="bold" fill="white">
                {name}
            </text>
            <text x="20" y={rectY + 40} font-family="Verdana" font-size="10" fill="white">
                {description}
            </text>
            <text x="75%" y={rectY + 30} font-family="Verdana" font-size="15" fill="white">
                MASTER
            </text>
        </g>
    );
}

function Repos() {
    const { repos } = data;
    return (
        <svg { ...constants.svg }>
            <defs>
                <linearGradient id="repoGradient" gradientTransform="rotate(90)">
                    <stop offset="5%"  stop-color="darkred" />
                    <stop offset="95%" stop-color="red" />
                </linearGradient>
                <linearGradient id="branchGradient" gradientTransform="rotate(90)">
                    <stop offset="5%"  stop-color="orange" />
                    <stop offset="95%" stop-color="yellow" />
                </linearGradient>
            </defs>
            {repos.map(drawRepo)}
        </svg>
    )
}

export default Repos;

import React from 'react';
import data from './data';
import Repo from './Repo';
import constants from './constants';

function Repos() {
    const { repos } = data;
    return (
        <svg { ...constants.svg }>
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
            {repos.map((repo, index) => <Repo repo={repo} index={index} key={repo.name} />)}
        </svg>
    )
}

export default Repos;

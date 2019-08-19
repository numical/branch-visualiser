import React from 'react';
import data from './data';
import Repo from './Repo';
import constants from './constants';

const { repo, branch } = constants;

const calculateYOffset = (index, array) => index === 0 ? 0 : index * (repo.height + repo.gap) + array[index -1].branches.length * (branch.height + branch.gap);


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
            {repos.map((repo, index, array) => <Repo repo={repo} yOffset={calculateYOffset(index, array)} key={repo.name} />)}
        </svg>
    )
}

export default Repos;

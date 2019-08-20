import React from 'react';
import parse from 'date-fns/parse';
import compareAsc from 'date-fns/compareAsc';
import data from './data';
import Repo from './Repo';
import constants from './constants';

const { repo, branch } = constants;

const calculateYOffset = (index, array) => index === 0 ? 0 : index * (repo.height + repo.gap) + array[index -1].branches.length * (branch.height + branch.gap);

const orderBranches = repos => {
    const allBranches = repos.reduce((all, repo) => [...all, ...repo.branches], []);
    allBranches.forEach(branch => branch.startDate = parse(branch.start, 'dd/MM/yy', new Date()));
    allBranches.sort((branch1, branch2) => compareAsc(branch1.startDate, branch2.startDate));
    allBranches.forEach((branch, index) => branch.order = index + 1);
    repos.forEach(repo => repo.branches.sort((branch1, branch2) => branch1.order - branch2.order))
};

function Repos() {
    const { repos } = data;
    orderBranches(repos);
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

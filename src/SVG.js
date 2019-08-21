import React from 'react';
import parse from 'date-fns/parse';
import compareAsc from 'date-fns/compareAsc';
import data from './data';
import Repo from './Repo';
import dimensions from './dimensions';

const { repo, branch } = dimensions;

const calculateYOffset = (index, array) => index === 0 ? 0 : index * (repo.height + repo.gap) + array[index -1].branches.length * (branch.height + branch.gap);

const addLinesToBranch = (allLines, branch) => {
    if (branch.start) {
        branch.startLine = {
            date: parse(branch.start, 'dd/MM/yy', new Date()),
            text: branch.start
        }
        allLines.push(branch.startLine);
    }
    if (branch.end) {
        branch.endLine = {
            date: parse(branch.end, 'dd/MM/yy', new Date()),
            text: branch.end
        }
        allLines.push(branch.endLine);
    }
    return allLines;
};

const createBranchLines = repos => {
    const allBranches = repos.reduce((all, repo) => [...all, ...repo.branches], []);
    const allLines = allBranches.reduce(addLinesToBranch, []);
    allLines.sort((line1, line2) => compareAsc(line1.date, line2.date));
    allLines.forEach((line, index) => line.order = index + 1);
    return allLines;
};

const setBranchIndent = lines => dimensions.branch.indent = dimensions.svg.width / (lines.length + 2);

const sortRepos = repos => {
    repos.forEach(repo => repo.branches.sort((branch1, branch2) => branch1.startLine.order - branch2.startLine.order)) ;
}

function Repos() {
    const { repos } = data;
    const lines = createBranchLines(repos);
    setBranchIndent(lines);
    sortRepos(repos);
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
            {repos.map((repo, index, array) => <Repo repo={repo} yOffset={calculateYOffset(index, array)} key={repo.name} />)}
        </svg>
    )
}

export default Repos;

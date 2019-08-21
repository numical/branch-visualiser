import React from 'react';
import parse from 'date-fns/parse';
import compareAsc from 'date-fns/compareAsc';
import Repo from './Repo';

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

const setBranchIndent = (lines, dimensions) => dimensions.branch.indent = dimensions.svg.width / (lines.length + 2);

const sortRepos = repos => {
    repos.forEach(repo => repo.branches.sort((branch1, branch2) => branch1.startLine.order - branch2.startLine.order)) ;
};

const setRepoYOffset = (repos, dimensions) => {
    const repoY = dimensions.repo.height + dimensions.repo.gap;
    const branchY = dimensions.branch.height + dimensions.branch.gap;
    repos.forEach((repo, index, array) => repo.yOffset = index === 0 ? 0 : index * repoY+ array[index -1].branches.length * branchY);
};

function SVG(props) {
    const { dimensions, repos } = props;
    const lines = createBranchLines(repos);
    setBranchIndent(lines, dimensions);
    sortRepos(repos);
    setRepoYOffset(repos, dimensions);
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
            {repos.map(repo => <Repo repo={repo} key={repo.name} dimensions={dimensions} />)}
        </svg>
    )
}

export default SVG;

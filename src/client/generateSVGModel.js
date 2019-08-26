import clone from 'ramda/src/clone';
import parse from 'date-fns/parse';
import compareAsc from 'date-fns/compareAsc';

const addLinesToBranch = (allLines, branch) => {
    if (branch.start) {
        branch.startLine = {
            date: parse(branch.start, 'dd/MM/yy', new Date()),
            text: branch.start
        };
        allLines.push(branch.startLine);
    }
    if (branch.end) {
        branch.endLine = {
            date: parse(branch.end, 'dd/MM/yy', new Date()),
            text: branch.end,
            isEnd: true
        };
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

const calcBranchIndent = (lines, dimensions) => dimensions.svg.width / (lines.length + 2);

const sortBranches = repos => {
    repos.forEach(repo => repo.branches.sort((branch1, branch2) => branch1.startLine.order - branch2.startLine.order)) ;
};

const setDimensions = (repos, branchIndent, dimensions) => {
    repos.forEach((repo, index, array) => {
        repo.dimensions = {
            x: dimensions.repo.indent,
            y: 0,
            width: dimensions.svg.width - dimensions.repo.indent,
            height: dimensions.repo.height
        };
        repo.translate = {
            x: 0,
            y: index === 0 ? 0 : index * (dimensions.repo.height + dimensions.repo.gap) + array[index - 1].branches.length * (dimensions.branch.height + dimensions.branch.gap)
        };
        const branchesMap = repo.branches.reduce((map, branch) => {
            map[branch.name] = branch;
            return map;
        }, {});
        repo.branches.forEach((branch, index) => {
            const { startLine, endLine } =  branch;
            const x = startLine.order * branchIndent;
            const y = (dimensions.repo.height + dimensions.branch.gap) + index * (dimensions.branch.height + dimensions.branch.gap);
            const width = endLine ? (endLine.order - startLine.order) * branchIndent : dimensions.svg.width - x;
            branch.dimensions = {
                x,
                y,
                width,
                height: dimensions.branch.height
            };
            branch.startLine.dimensions = {
                x1: x,
                y1: branch.from ? branchesMap[branch.from].dimensions.y + dimensions.branch.height : dimensions.repo.height,
                x2: x,
                y2: y + dimensions.branch.height
            };
            if (branch.endLine) {
                branch.endLine.dimensions = {
                    x1: x + width,
                    y1: branch.to ? branchesMap[branch.to].dimensions.y + dimensions.branch.height : dimensions.repo.height,
                    x2: x + width,
                    y2: y + dimensions.branch.height
                }
            }
        });
    });
};

const generateSVGModel = (data, dimensions) => {
    const repos = clone(data.repos);
    const lines = createBranchLines(repos);
    sortBranches(repos);
    const branchIndent = calcBranchIndent(lines, dimensions);
    setDimensions(repos, branchIndent, dimensions);
    return repos;
};

export default generateSVGModel;
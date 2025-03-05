import clone from "ramda/src/clone";
import { compareAsc, dateToDisplayValue } from "./dateFns";

const addParent = repos => {
  repos.forEach(repo => {
    repo.branches.forEach(branch => {
      branch.parent = repo;
    });
  });
};

const addLinesToBranch = (allLines, branch) => {
  if (branch.start) {
    branch.startLine = {
      date: dateToDisplayValue(branch.start),
      text: branch.start
    };
    allLines.push(branch.startLine);
  }
  if (branch.end) {
    branch.endLine = {
      date: dateToDisplayValue(branch.end),
      text: branch.end,
      isEnd: true
    };
    allLines.push(branch.endLine);
  }
  return allLines;
};

const createBranchLines = repos => {
  const allBranches = repos.reduce(
    (all, repo) => [...all, ...repo.branches],
    []
  );
  const allLines = allBranches.reduce(addLinesToBranch, []);
  allLines.sort((line1, line2) => compareAsc(line1.date, line2.date));
  allLines.forEach((line, index) => (line.order = index + 1));
  return allLines;
};

const sortBranches = repos => {
  repos.forEach(repo =>
    repo.branches.sort(
      (branch1, branch2) => branch1.startLine.order - branch2.startLine.order
    )
  );
};

const setDimensions = (lines, dimensions) => {
  const d = clone(dimensions);
  const indent = d.svg.width / (lines.length + 2);
  if (indent < d.branch.minWidth) {
    d.branch.indent = d.branch.minWidth;
    d.svg.width = d.branch.minWidth * (lines.length + 2);
  } else {
    d.branch.indent = indent;
  }
  return d;
};

const applyDimensions = (repos, dimensions) => {
  repos.forEach((repo, index, array) => {
    repo.dimensions = {
      x: dimensions.repo.indent,
      y: 0,
      width: dimensions.svg.width - 2 * dimensions.repo.indent,
      height: dimensions.repo.height
    };
    repo.translate = {
      x: 0,
      y:
        index === 0
          ? 0
          : index * (dimensions.repo.height + dimensions.repo.gap) +
            array[index - 1].branches.length *
              (dimensions.branch.height + dimensions.branch.gap)
    };
    const branchesMap = repo.branches.reduce((map, branch) => {
      map[branch.name] = branch;
      return map;
    }, {});
    repo.branches.forEach((branch, index) => {
      const { startLine, endLine } = branch;
      const x = startLine.order * dimensions.branch.indent;
      const y =
        dimensions.repo.height +
        dimensions.branch.gap +
        index * (dimensions.branch.height + dimensions.branch.gap);
      const width = endLine
        ? (endLine.order - startLine.order) * dimensions.branch.indent
        : dimensions.svg.width - x - dimensions.repo.indent;
      branch.dimensions = {
        x,
        y,
        width,
        height: dimensions.branch.height
      };
      branch.startLine.dimensions = {
        x1: x,
        y1: branch.from
          ? branchesMap[branch.from].dimensions.y + dimensions.branch.height
          : dimensions.repo.height,
        x2: x,
        y2: y + dimensions.branch.height
      };
      if (branch.endLine) {
        branch.endLine.dimensions = {
          x1: x + width,
          y1: branch.to
            ? branchesMap[branch.to].dimensions.y + dimensions.branch.height
            : dimensions.repo.height,
          x2: x + width,
          y2: y + dimensions.branch.height
        };
      }
    });
  });
};

const generateSVGProps = (data, initialDimensions) => {
  const repos = clone(data.repos);
  addParent(repos);
  const lines = createBranchLines(repos);
  sortBranches(repos);
  const dimensions = setDimensions(lines, initialDimensions);
  applyDimensions(repos, dimensions);
  return { repos, dimensions };
};

export default generateSVGProps;

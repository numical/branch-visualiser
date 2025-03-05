const { htmlDateToDisplayDate } = require("../util/dateFns");

const dateFields = ["start", "end"];

const fixDateFields = branch => {
  dateFields.forEach(field => {
    if (branch[field]) {
      branch[field] = htmlDateToDisplayDate(branch[field]);
    }
  });
  return branch;
};

module.exports = fixDateFields;

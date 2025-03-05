const parse = require("date-fns/parse");
const format = require("date-fns/format");

const displayFormat = "dd/MM/yy";
const htmlFormat = "yyyy-MM-dd";
const defaultDate = new Date();

const htmlDateToDisplayDate = html => {
  const d = parse(html, htmlFormat, defaultDate);
  const ds = format(d, displayFormat);
  return ds;
};

module.exports = { htmlDateToDisplayDate };

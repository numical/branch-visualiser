import parse from "date-fns/parse";
import format from "date-fns/format";
import compareAsc from "date-fns/compareAsc";

const displayFormat = "dd/MM/yy";
const htmlFormat = "yyyy-MM-dd";
const defaultDate = new Date();

const dateToDisplayValue = date => parse(date, displayFormat, defaultDate);

const displayDateToHtmlDate = display => {
  const d = parse(display, displayFormat, defaultDate);
  const ds = format(d, htmlFormat);
  return ds;
};

export { compareAsc, dateToDisplayValue, displayDateToHtmlDate };

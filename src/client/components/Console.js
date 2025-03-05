import React from "react";

const name = "console";

const props = {
  height: 25,
  name,
  width: "100%"
};

const Console = () => <iframe {...props} />;

Console.id = name;

export default Console;

import Console from "../components/Console";

const staticProps = {
  form: {
    id: "contextForm",
    method: "POST",
    target: Console.id
  },
  name: {
    name: "name",
    placeholder: "must be unique within repo",
    required: true
  },
  description: {
    name: "description",
    placeholder: "a description is required",
    required: true,
    size: 50
  },
  team: {
    name: "team",
    placeholder: "can be blank",
    required: false
  },
  from: {
    list: "branches",
    name: "from",
    placeholder: "leave blank for master, else use dropdown",
    required: false
  },
  to: {
    list: "branches",
    name: "to",
    placeholder: "leave blank for master, else use dropdown",
    required: false
  },
  submit: {
    type: "submit",
    value: "Confirm"
  }
};

export default staticProps;

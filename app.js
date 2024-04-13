const root = document.getElementById("root");
const element = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

//nested HTML
const nestedElement = React.createElement(
  "div",
  { id: "container" },
  React.createElement("h1", null, "Hello World from React"),
  React.createElement("p", null, "This is a paragraph")
);

ReactDOM.render(element, root);

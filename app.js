// main wrapper
function App(props) {
  return React.createElement(
    "div",
    { className: "main-wrapper" },
    React.createElement(
      "header",
      { className: "header" },
      React.createElement(
        "h1",
        { className: "title" },
        "My spending tracker"
      )
    ),
    React.createElement("main", { className: "content" })
  );
}

// render the components to the dom
var appEl = document.getElementById('app');
var appComp = React.createElement(App, null);
ReactDOM.render(appComp, appEl);
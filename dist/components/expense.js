export default function Expense(props) {
  return React.createElement(
    "div",
    { className: "expense" },
    React.createElement(
      "div",
      { className: "details" },
      React.createElement(
        "h3",
        { className: "expense__title" },
        props.title
      ),
      React.createElement(
        "span",
        { className: "expense__amount" },
        "$",
        props.amount
      ),
      React.createElement(
        "span",
        { className: "expense__date" },
        props.date
      )
    ),
    React.createElement(
      "div",
      { className: "actions" },
      React.createElement(
        "button",
        null,
        "Delete"
      )
    )
  );
}
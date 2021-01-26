var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppWrapper = function (_React$Component) {
  _inherits(AppWrapper, _React$Component);

  function AppWrapper() {
    _classCallCheck(this, AppWrapper);

    return _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).apply(this, arguments));
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "main-wrapper" },
        React.createElement(
          "header",
          { className: "app-header" },
          React.createElement(
            "h3",
            null,
            "Xpense Tracker"
          ),
          React.createElement(
            "div",
            { className: "budget-summary" },
            React.createElement(
              "p",
              { className: "total" },
              React.createElement(
                "span",
                null,
                "Total expenses"
              ),
              React.createElement(
                "span",
                { className: "value" },
                "$280"
              )
            )
          )
        ),
        React.createElement(
          "main",
          { className: "app-content" },
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              "form",
              { className: "new-expense-form" },
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "title" },
                  "Title of new expense"
                ),
                React.createElement("input", { id: "title", name: "title", type: "text" })
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "amount" },
                  "Title of new expense"
                ),
                React.createElement("input", { id: "amount", name: "amount", type: "number" })
              ),
              React.createElement(
                "button",
                { className: "form-button" },
                "Add new expense"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "expenses-list-wrapper" },
            React.createElement(
              "ul",
              { className: "expenses-list" },
              React.createElement(
                "h3",
                null,
                "Most recent expenses"
              ),
              React.createElement(
                "li",
                { className: "expense" },
                React.createElement(
                  "div",
                  { className: "details" },
                  React.createElement(
                    "h3",
                    { className: "expense__title" },
                    "Bills for groceries"
                  ),
                  React.createElement(
                    "span",
                    { className: "expense__amount" },
                    "$200.80"
                  ),
                  React.createElement(
                    "span",
                    { className: "expense__date" },
                    "2021-01-12"
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
              )
            )
          )
        )
      );
    }
  }]);

  return AppWrapper;
}(React.Component);

export default AppWrapper;
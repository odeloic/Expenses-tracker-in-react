var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import ExpensesList from './expensesList.js';
import NewExpenseForm from './newExpenseForm.js';

var AppWrapper = function (_React$Component) {
  _inherits(AppWrapper, _React$Component);

  function AppWrapper(props) {
    _classCallCheck(this, AppWrapper);

    var _this = _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).call(this, props));

    _this.state = { budgetLimit: 0, expenses: [], totalExpenses: 0 };
    _this.handleAddExpenseToList = _this.handleAddExpenseToList.bind(_this);
    return _this;
  }

  _createClass(AppWrapper, [{
    key: 'handleAddExpenseToList',
    value: function handleAddExpenseToList(expense) {
      var expenses = [].concat(_toConsumableArray(this.state.expenses), [expense]);
      this.setState({ expenses: expenses });
      this.setState({ totalExpenses: this.state.totalExpenses + expense.amount });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'main-wrapper' },
        React.createElement(
          'header',
          { className: 'app-header' },
          React.createElement(
            'h3',
            null,
            'Xpense Tracker'
          ),
          React.createElement(
            'div',
            { className: 'budget-summary' },
            React.createElement(
              'p',
              { className: 'total' },
              React.createElement(
                'span',
                null,
                'Total expenses'
              ),
              React.createElement(
                'span',
                { className: 'value' },
                '$',
                parseFloat(this.state.totalExpenses)
              )
            )
          )
        ),
        React.createElement(
          'main',
          { className: 'app-content' },
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement(NewExpenseForm, { onAddNewExpense: this.handleAddExpenseToList })
          ),
          React.createElement(
            'div',
            { className: 'expenses-list-wrapper' },
            React.createElement(
              'ul',
              { className: 'expenses-list' },
              React.createElement(
                'h3',
                null,
                'Most recent expenses'
              ),
              React.createElement(ExpensesList, { expenses: this.state.expenses })
            )
          )
        )
      );
    }
  }]);

  return AppWrapper;
}(React.Component);

export default AppWrapper;
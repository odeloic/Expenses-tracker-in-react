import Expense from './expense.js';

export default function ExpensesList(props) {
  return React.createElement(
    "ul",
    { className: "expenses-list" },
    props.expenses.map(function (expense, index) {
      return React.createElement(
        "li",
        { key: index },
        React.createElement(Expense, { title: expense.title, amount: expense.amount, date: expense.date })
      );
    })
  );
}
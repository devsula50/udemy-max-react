import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const addExpenseHandler = () => {
    setIsAdding((isAdding) => !isAdding);
  };

  const addExpenseCancelHandler = () => {
    setIsAdding((isAdding) => !isAdding);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  if (isAdding) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onAddCancel={addExpenseCancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={addExpenseHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;

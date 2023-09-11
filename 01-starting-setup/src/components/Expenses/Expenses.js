import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const changeYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeYear={changeYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;

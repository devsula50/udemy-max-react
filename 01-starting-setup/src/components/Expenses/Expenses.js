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
      {props.items
        .filter((expense) => {
          // console.log(typeof expense.date.getFullYear(), typeof selectedYear);
          return expense.date.getFullYear() === parseInt(selectedYear);
        })
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;

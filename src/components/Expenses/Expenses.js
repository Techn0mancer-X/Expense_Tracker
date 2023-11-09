import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart';

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // search for the selected year in the expenses array and return the filtered array.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

// alternative to keep jsx more lean.


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>

        {/* if no expenses found return message if length of expense item is 0 or not there. */}
        {/* {filteredExpenses.length === 0 && <p>No expense found</p>} */}
        {/* if no expenses found return message if length of expense item is greater than 0 return this */}
        {/* {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

          

      </Card>
    </div>
  );
};

export default Expenses;

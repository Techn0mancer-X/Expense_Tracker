import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {

  const[title, setTitle]=useState(props.title);
 
  // <name of function>Handler is also another naming convention for event listeners.
  

  return (
    <li>
      <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
     
    </Card>
    </li>
    
  );
};

export default ExpenseItem;
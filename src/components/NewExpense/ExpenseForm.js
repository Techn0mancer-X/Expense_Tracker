import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle]=useState();
    const [enteredAmount, setEnteredAmount]=useState();
    const [enteredDate, setEnteredDate]=useState();

    // or you can do it like this:

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    // both are acceptable, first one is more common.


  // e = event
  const titleChangeHandler = (e) => {
      // TO GET PREVIOUS STATE
    // setUserInput({
    // ...userInput,
    // enteredTitle:e.target.value // this may not always update the latest version of state.

    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle:e.target.value}}); // this will always update the latest version of state.
    setEnteredTitle(e.target.value);

    } 
    // end of titleChangeHandler
  
  const amountChangeHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:e.target.value })
    setEnteredAmount(e.target.value)
    // end of amountChangeHandler
}
  
  const dateChangeHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredDate:e.target.value })
    setEnteredDate(e.target.value)
    // end of dateChangeHandler
  }
  
const submitHandler = (event) => { 
    event.preventDefault();

    const expenseData = {
        title:enteredTitle,
        amount:+enteredAmount,
        date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
}


  return (
    <form onSubmit={submitHandler}>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>$
          <input type="number" placeholder="Amount" min="0.01" step="0.01"
          onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            placeholder="Date"
            min="2019-01-01"
            max= "Date.now()"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="submit">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

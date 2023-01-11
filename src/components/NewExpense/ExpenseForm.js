import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,                   // The spread operator.
        //     enteredTitle: event.target.value,
        // });
        //Alternative approach. We use this approach when a new state
        //depends on the previous state. This will guarantee the latest state
        //snapshot. React schedules state updates and it does not execute them
        //instantly. Thus if one schedules many states at the same time, he may
        //depend on an outdated or incorrect state snapshot using the method of
        //...userInput: '',...
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,                   // The spread operator.
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,                   // The spread operator.
        //     enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,  // The + sign converts the string to number.
            date: new Date(enteredDate)
        };
        props.onNewItem(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        min='0.01' step='0.01' />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        min='2019-01-01'
                        max='2023-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
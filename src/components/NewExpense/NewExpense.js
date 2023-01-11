import React, { useState } from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

    const [editing, setEditing] = useState(false);

    const saveNewItemHandler = (enteredItem) => {
        const expenseData = {
            ...enteredItem
        };

        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const startEditingHandler = () => {
        setEditing(true);
    };

    const stopEditingHandler = () => {
        setEditing(false);
    };

    return (
        <div className="new-expense">
            {!editing && (<button onClick={startEditingHandler}>Add New Item</button>
            )}
            {editing && (
                <ExpenseForm
                    onNewItem={saveNewItemHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
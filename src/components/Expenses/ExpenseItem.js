import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                {/* <!-- alternatively <ExpenseDate /> if there
             is no content btw the tags> */}
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
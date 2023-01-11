import React, { useState } from "react";

import ExpensesFilter from '../UI/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
import Card from "../UI/Card";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('');

    const yearSelectHandler = enteredData => {
        setSelectedYear(enteredData);
    };

    const filteredItemsFromYear = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter
                    selected={selectedYear}
                    onYearSelect={yearSelectHandler}
                />
                <ExpensesChart expenses={filteredItemsFromYear} />
                <ExpensesList items={filteredItemsFromYear} />
            </Card>
        </div>
    );
}

export default Expenses;
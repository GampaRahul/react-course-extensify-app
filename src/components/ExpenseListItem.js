import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({expense, dispatch}=props) => (
    <div>
        <h3><Link to={`/edit/${expense.id}`}>{expense.description}</Link></h3>
        <p>{expense.amount} - {expense.createdAt}</p>
    </div>
);

export default ExpenseListItem;

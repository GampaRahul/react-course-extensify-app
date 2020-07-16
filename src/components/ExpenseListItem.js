import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({expense, dispatch}=props) => (
    <div>
        <h3><Link to={`/edit/${expense.id}`}>{expense.description}</Link></h3>
        <p>
        ₹{expense.amount} 
        - 
        {moment(expense.createdAt).format("MMMM Do, YYYY")}</p>
    </div>
);

export default ExpenseListItem;

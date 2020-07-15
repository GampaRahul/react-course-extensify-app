import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {//<h1>Expense List</h1>
        }
        {
            props.expenses.length === 0?(
                <p>No Expenses</p>
            ):(
                props.expenses.map((expense) => <ExpenseListItem expense={expense} key={expense.id}/>)
            )
        }
    </div>

);


//this specifies what all we need from store, so connect() can map that to props
const mapStateToProps = (state) => {
    return {
        // selectExpenses return the expenses in a sorted order, depending on the filter
        expenses: selectExpenses(state.expenses, state.filters)
    };
};


// this is HOC which we use in other components
export default connect(mapStateToProps)(ExpenseList);

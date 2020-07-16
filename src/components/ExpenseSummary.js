import React from 'react';
import {connect} from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpenseSummary = ({expenses}) => {
    const expenseText = expenses.length===1?'expense':'expenses';
    return(
        <div>
            <h1>viewing {expenses.length} {expenseText} totalling ₹{expensesTotal(expenses)}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseSummary);
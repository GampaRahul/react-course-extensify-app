import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpenses, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpenses = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage
        startEditExpenses={startEditExpenses}
                startRemoveExpense={startRemoveExpense}
                history={history}
                expense={expenses[0]}/>);
});

test('should render Edit Expense Page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handel edit expense', () => { 
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpenses).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handel remove expense', () => { 
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(
        {
            id:expenses[0].id
        }
    );
});
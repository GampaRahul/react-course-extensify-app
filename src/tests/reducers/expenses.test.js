import expeseReduser from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('should set default state', () => {
    const state = expeseReduser(undefined,{type:"@@INIT"});
    expect(state).toEqual([]);
});

test('should remove expense by is', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expeseReduser(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found', () =>{
    const action = {
        type:"REMOVE_EXPENSE",
        id:-1
    }
    const state = expeseReduser(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () =>{
    const action = {
        type:"ADD_EXPENSE",
        expense:{
        id:5,
        description:"test",
        note:'test note',
        amount: 500,
        createdAt: moment(0)
        }
    };
    const state = expeseReduser(expenses,action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense of given id',() => {
    const action = {
        type:"EDIT_EXPENSE",
        id:expenses[1].id,
        update:{
        description:"Editedtest",
        note:'edited test note',
        amount: 5000,
        createdAt: moment(0)
        }
    };  
    const state = expeseReduser(expenses,action);
    expect(state[1].description).toBe(action.update.description);
});

test('should not edit an expense of given id not found',() => {
    const action = {
        type:"EDIT_EXPENSE",
        id:123,
        update:{
        description:"Editedtest",
        note:'edited test note',
        amount: 5000,
        createdAt: moment(0)
        }
    };  
    const state = expeseReduser(expenses,action);
    expect(state).toEqual(state);
});
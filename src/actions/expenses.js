import {v4 as uuid} from 'uuid';
import database from '../firebase/firebase'


// ADD_EXPENCE

export const addExpense =  ( expense ) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description , note, amount, createdAt };
        return database.ref('expenses').push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });

    };
};



// REMOVE_EXPENCE
export const removeExpense = ({id}={}) =>({
    type:'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENCE
export const editExpense = (id,update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
});
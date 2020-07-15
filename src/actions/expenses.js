import {v4 as uuid} from 'uuid';
// ADD_EXPENCE

export const addExpense =  ({
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
    }={}
    ) => ({
    type: 'ADD_EXPENCE',
    expence:{
                id: uuid(),
                description,
                note,
                amount,
                createdAt
    }
});
// REMOVE_EXPENCE
export const removeExpense = ({id}={}) =>({
    type:'REMOVE_EXPENCE',
    id
});
// EDIT_EXPENCE
export const editExpense = (id,update) =>({
    type:'EDIT_EXPENCE',
    id,
    update
});
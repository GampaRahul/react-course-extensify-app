import {addExpense, 
        editExpense, 
        removeExpense} from '../../actions/expenses';

test('should set up remove expense action object' , () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENCE',
        id: '123abc'
    });
});


test('should set up edit expense action object',() => {
    const action = editExpense('123abc',{note:"abc"});
    expect(action).toEqual({
        type:"EDIT_EXPENCE",
        id: "123abc",
        update: {
            note: "abc"
        }
    });
});

test('should set up add expense object with provided values',() => {
    const expenseData = {
        description: "Recharge",
        amount: 150,
        createdAt: 10000,
        note: "recharge for july"
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENCE",
        expence: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('should set up add expense object with default values',() => {
    const result = addExpense({});
    expect(result).toEqual({
        type:"ADD_EXPENCE",
        expence: {
            id: expect.any(String),
            description:'', 
            note:'', 
            amount:0, 
            createdAt:0
        }
    });
});